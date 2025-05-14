import React from 'react';

export const TestError: React.FC = () => {
  // This will cause an error when rendered
  throw new Error('Test error message');
  
  return <div>This won't be rendered</div>;
}; 