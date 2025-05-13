import { describe, it, expect, vi, beforeEach } from 'vitest';
import { StatusUpdateSystem, TaskStatus } from '../../src/task-tracking/status-updates';

describe('StatusUpdateSystem', () => {
  let statusSystem: StatusUpdateSystem;
  const mockOctokit = {
    issues: {
      update: vi.fn(),
      get: vi.fn()
    },
    projects: {
      listCards: vi.fn(),
      moveCard: vi.fn(),
      createCard: vi.fn()
    }
  };

  beforeEach(() => {
    vi.clearAllMocks();
    statusSystem = new StatusUpdateSystem(
      'test-token',
      'test-project',
      {
        todo: '1',
        in_progress: '2',
        review: '3',
        done: '4'
      }
    );
    // @ts-ignore - Mocking private property
    statusSystem.octokit = mockOctokit;
  });

  describe('updateTaskStatus', () => {
    it('should update issue status and project board', async () => {
      const issueNumber = 123;
      const newStatus: TaskStatus = 'in_progress';
      const assignee = 'test-user';

      mockOctokit.issues.update.mockResolvedValueOnce({ data: { number: issueNumber } });
      mockOctokit.projects.listCards.mockResolvedValueOnce({ data: [] });
      mockOctokit.projects.createCard.mockResolvedValueOnce({ data: { id: 456 } });

      await statusSystem.updateTaskStatus(issueNumber, newStatus, assignee);

      expect(mockOctokit.issues.update).toHaveBeenCalledWith({
        owner: expect.any(String),
        repo: expect.any(String),
        issue_number: issueNumber,
        state: 'open',
        assignee: assignee,
        labels: [newStatus]
      });

      expect(mockOctokit.projects.createCard).toHaveBeenCalledWith({
        column_id: 2,
        content_id: issueNumber,
        content_type: 'Issue'
      });
    });

    it('should move existing card when updating status', async () => {
      const issueNumber = 123;
      const newStatus: TaskStatus = 'review';
      const existingCard = { id: 456, content_url: `https://github.com/issues/${issueNumber}` };

      mockOctokit.issues.update.mockResolvedValueOnce({ data: { number: issueNumber } });
      mockOctokit.projects.listCards.mockResolvedValueOnce({ data: [existingCard] });

      await statusSystem.updateTaskStatus(issueNumber, newStatus);

      expect(mockOctokit.projects.moveCard).toHaveBeenCalledWith({
        card_id: existingCard.id,
        position: 'top',
        column_id: 3
      });
    });

    it('should close issue when status is done', async () => {
      const issueNumber = 123;
      const newStatus: TaskStatus = 'done';

      mockOctokit.issues.update.mockResolvedValueOnce({ data: { number: issueNumber } });
      mockOctokit.projects.listCards.mockResolvedValueOnce({ data: [] });
      mockOctokit.projects.createCard.mockResolvedValueOnce({ data: { id: 456 } });

      await statusSystem.updateTaskStatus(issueNumber, newStatus);

      expect(mockOctokit.issues.update).toHaveBeenCalledWith({
        owner: expect.any(String),
        repo: expect.any(String),
        issue_number: issueNumber,
        state: 'closed',
        labels: [newStatus]
      });
    });

    it('should handle API errors gracefully', async () => {
      const issueNumber = 123;
      const newStatus: TaskStatus = 'in_progress';
      const error = new Error('API Error');

      mockOctokit.issues.update.mockRejectedValueOnce(error);

      await expect(statusSystem.updateTaskStatus(issueNumber, newStatus))
        .rejects.toThrow('API Error');
    });
  });

  describe('getCurrentStatus', () => {
    it('should return current status from issue labels', async () => {
      const issueNumber = 123;
      const mockIssue = {
        data: {
          labels: [
            { name: 'in_progress' },
            { name: 'bug' }
          ]
        }
      };

      mockOctokit.issues.get.mockResolvedValueOnce(mockIssue);

      const status = await statusSystem.getCurrentStatus(issueNumber);

      expect(status).toBe('in_progress');
      expect(mockOctokit.issues.get).toHaveBeenCalledWith({
        owner: expect.any(String),
        repo: expect.any(String),
        issue_number: issueNumber
      });
    });

    it('should return todo when no status label is found', async () => {
      const issueNumber = 123;
      const mockIssue = {
        data: {
          labels: [
            { name: 'bug' },
            { name: 'enhancement' }
          ]
        }
      };

      mockOctokit.issues.get.mockResolvedValueOnce(mockIssue);

      const status = await statusSystem.getCurrentStatus(issueNumber);

      expect(status).toBe('todo');
    });

    it('should handle missing labels array', async () => {
      const issueNumber = 123;
      const mockIssue = {
        data: {
          labels: []
        }
      };

      mockOctokit.issues.get.mockResolvedValueOnce(mockIssue);

      const status = await statusSystem.getCurrentStatus(issueNumber);

      expect(status).toBe('todo');
    });

    it('should handle API errors when getting status', async () => {
      const issueNumber = 123;
      const error = new Error('API Error');

      mockOctokit.issues.get.mockRejectedValueOnce(error);

      await expect(statusSystem.getCurrentStatus(issueNumber))
        .rejects.toThrow('API Error');
    });
  });
}); 