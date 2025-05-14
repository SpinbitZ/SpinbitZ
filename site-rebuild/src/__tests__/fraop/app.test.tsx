import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from '../../fraop';

describe('FRAOP App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('displays the correct heading', () => {
    render(<App />);
    expect(screen.getByText('FRAOP Cycle.js App Shell - Count: 0')).toBeInTheDocument();
  });

  it('increments the counter on button click', () => {
    render(<App />);
    const button = screen.getByText('Increment');
    button.click();
    expect(screen.getByText('FRAOP Cycle.js App Shell - Count: 1')).toBeInTheDocument();
  });

  it('decrements the counter on button click', () => {
    render(<App />);
    const button = screen.getByText('Decrement');
    button.click();
    expect(screen.getByText('FRAOP Cycle.js App Shell - Count: -1')).toBeInTheDocument();
  });

  it('resets the counter on button click', () => {
    render(<App />);
    const inc = screen.getByText('Increment');
    inc.click();
    inc.click();
    const reset = screen.getByText('Reset');
    reset.click();
    expect(screen.getByText('FRAOP Cycle.js App Shell - Count: 0')).toBeInTheDocument();
  });
}); 