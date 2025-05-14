import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './fraop';

// TODO: Integrate FRAOP architecture and Cycle.js

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

export default App; 