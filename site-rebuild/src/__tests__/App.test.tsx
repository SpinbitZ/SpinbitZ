import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from '../index';

describe('App', () => {
  it('renders Home component on root path', () => {
    window.history.pushState({}, '', '/');
    const { getByText } = render(<App />);
    expect(getByText('Welcome to SpinbitZ')).toBeInTheDocument();
  });

  it('renders NotFound component on invalid path', () => {
    window.history.pushState({}, '', '/invalid');
    const { getByText } = render(<App />);
    expect(getByText('404 - Not Found')).toBeInTheDocument();
  });
}); 