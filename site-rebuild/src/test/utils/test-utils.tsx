import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Custom render function that includes providers
const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  return render(ui, {
    wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
    ...options,
  });
};

// Mock data generators
export const createMockTask = (overrides = {}) => ({
  id: 'TASK-001',
  title: 'Test Task',
  status: 'Not Started',
  priority: 'High',
  estimate: 5,
  description: 'Test task description',
  ...overrides,
});

export const createMockState = (overrides = {}) => ({
  currentRoute: '/',
  isLoading: false,
  error: null,
  ...overrides,
});

// Re-export everything from testing-library
export * from '@testing-library/react';

// Export custom render function
export { customRender as render }; 