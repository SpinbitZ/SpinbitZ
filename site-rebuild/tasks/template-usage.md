# Task Template Usage Guide

This guide explains how to use the TTDD task template for the SpinbitZ project.

## How to Use the Task Template

1. **Copy the template** from `template.md` into a new file named `TASK-XXX-task-title.md` in the `tasks/` directory or appropriate phase subdirectory.
2. **Replace placeholders** (e.g., `[TASK-ID]`, `[X]`, `[Detailed task description]`) with task-specific information.
3. **Fill in all sections**:
   - Status, Priority, Estimate, Dependencies
   - Description, Acceptance Criteria, Test Cases
   - Implementation Notes, Review Checklist, Commit Message
4. **Write acceptance criteria and test cases first** (TTDD principle).
5. **Update status and checklist** as you work through the task.
6. **Use the commit message section** for all related commits.

## Example Workflow

1. Create a new task file: `TASK-013-setup-ci-cd.md`
2. Copy the template and fill in:
   - Task ID: `TASK-013`
   - Task Name: `Set up CI/CD pipeline`
   - Description, criteria, and test cases
3. As you implement, check off steps and update status.
4. When complete, ensure all review checklist items are checked.
5. Use the provided commit message format for your final commit.

## Best Practices
- Keep tasks atomic and focused.
- Write clear, testable acceptance criteria.
- Link to related tasks or documentation as needed.
- Review and update the template as the project evolves.

For questions or improvements, update this guide or the template as needed. 