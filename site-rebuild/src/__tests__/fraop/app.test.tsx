import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { App } from '../../fraop/App';

describe('App Skeleton', () => {
  it('renders without errors', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('navigates between Home and NotFound', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    
    // Check initial home page
    expect(screen.getByText(/Welcome to the SpinbitZ website/i)).toBeInTheDocument();
    
    // Navigate to non-existent route
    render(
      <MemoryRouter initialEntries={['/non-existent']}>
        <App />
      </MemoryRouter>
    );
    
    // Should show error boundary
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
  });

  it('imports FRAOP architecture files', () => {
    // This test will be implemented once we have the FRAOP architecture in place
    expect(true).toBe(true); // Placeholder
  });
}); 