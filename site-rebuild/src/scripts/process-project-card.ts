import { StatusUpdateSystem } from '../task-tracking/status-updates';

async function main() {
  const [cardId, columnId] = process.argv.slice(2);
  
  // Map column IDs to status values
  const columnStatusMap: Record<string, string> = {
    '1': 'Not Started',
    '2': 'In Progress',
    '3': 'In Review',
    '4': 'Completed'
  };
  
  const newStatus = columnStatusMap[columnId];
  if (!newStatus) {
    console.error(`Invalid column ID: ${columnId}`);
    process.exit(1);
  }
  
  const statusSystem = new StatusUpdateSystem();
  const result = await statusSystem.handleStatusChange(cardId, newStatus);
  
  if (!result.success) {
    console.error(`Failed to process project card update: ${result.error}`);
    process.exit(1);
  }
  
  console.log(`Successfully processed project card update for ${cardId}`);
  console.log('Actions triggered:', result.actionsTriggered);
}

main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
}); 