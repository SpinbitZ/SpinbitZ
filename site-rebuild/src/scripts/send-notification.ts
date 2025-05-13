import { StatusUpdateSystem } from '../task-tracking/status-updates';

async function main() {
  const [issueNumber, newStatus] = process.argv.slice(2);
  const taskId = `TASK-${issueNumber}`;
  
  const statusSystem = new StatusUpdateSystem();
  const result = await statusSystem.sendNotification({
    taskId,
    newStatus,
    recipients: ['team@spinbitz.com']
  });
  
  if (!result.sent) {
    console.error(`Failed to send notification: ${result.error}`);
    process.exit(1);
  }
  
  console.log(`Successfully sent notification for ${taskId}`);
  console.log('Recipients:', result.recipients);
}

main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
}); 