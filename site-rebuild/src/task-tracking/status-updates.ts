import { Octokit } from '@octokit/rest';

export type TaskStatus = 'todo' | 'in_progress' | 'review' | 'done';

interface GitHubLabel {
  id?: number;
  node_id?: string;
  url?: string;
  name: string;
  description?: string | null;
  color?: string | null;
  default?: boolean;
}

export class StatusUpdateSystem {
  private octokit: Octokit;
  private projectId: string;
  private columnIds: Record<TaskStatus, string>;

  constructor(
    githubToken: string,
    projectId: string,
    columnIds: Record<TaskStatus, string>
  ) {
    this.octokit = new Octokit({ auth: githubToken });
    this.projectId = projectId;
    this.columnIds = columnIds;
  }

  async updateTaskStatus(
    issueNumber: number,
    newStatus: TaskStatus,
    assignee?: string
  ): Promise<void> {
    try {
      // Update issue status
      await this.octokit.issues.update({
        owner: process.env.GITHUB_REPOSITORY_OWNER!,
        repo: process.env.GITHUB_REPOSITORY!.split('/')[1],
        issue_number: issueNumber,
        state: newStatus === 'done' ? 'closed' : 'open',
        assignee: assignee,
        labels: [newStatus]
      });

      // Update project board
      await this.updateProjectBoard(issueNumber, newStatus);

      console.log(`Task ${issueNumber} status updated to ${newStatus}`);
    } catch (error) {
      console.error('Error updating task status:', error);
      throw error;
    }
  }

  private async updateProjectBoard(
    issueNumber: number,
    newStatus: TaskStatus
  ): Promise<void> {
    try {
      // Get the current card ID for the issue
      const cards = await this.octokit.projects.listCards({
        column_id: parseInt(this.columnIds[newStatus]),
        archived_state: 'not_archived'
      });

      const card = cards.data.find(card => 
        card.content_url?.includes(`/issues/${issueNumber}`)
      );

      if (card) {
        // Move the card to the new column
        await this.octokit.projects.moveCard({
          card_id: card.id,
          position: 'top',
          column_id: parseInt(this.columnIds[newStatus])
        });
      } else {
        // Create a new card in the target column
        await this.octokit.projects.createCard({
          column_id: parseInt(this.columnIds[newStatus]),
          content_id: issueNumber,
          content_type: 'Issue'
        });
      }
    } catch (error) {
      console.error('Error updating project board:', error);
      throw error;
    }
  }

  async getCurrentStatus(issueNumber: number): Promise<TaskStatus> {
    try {
      const issue = await this.octokit.issues.get({
        owner: process.env.GITHUB_REPOSITORY_OWNER!,
        repo: process.env.GITHUB_REPOSITORY!.split('/')[1],
        issue_number: issueNumber
      });

      const statusLabel = issue.data.labels.find(label => 
        ['todo', 'in_progress', 'review', 'done'].includes((label as GitHubLabel).name)
      );

      return ((statusLabel as GitHubLabel)?.name as TaskStatus) || 'todo';
    } catch (error) {
      console.error('Error getting current status:', error);
      throw error;
    }
  }
} 