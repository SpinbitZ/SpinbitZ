import { StatusUpdateSystem } from '../task-tracking/status-updates';

async function main() {
  const [issueNumber, newStatus] = process.argv.slice(2);
  const taskId = `TASK-${issueNumber}`;
  
  const statusSystem = new StatusUpdateSystem();
  const result = await statusSystem.handleStatusChange(taskId, newStatus);
  
  if (!result.success) {
    console.error(`Failed to process status update: ${result.error}`);
    process.exit(1);
  }
  
  console.log(`Successfully processed status update for ${taskId}`);
  console.log('Actions triggered:', result.actionsTriggered);
}

main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
}); 