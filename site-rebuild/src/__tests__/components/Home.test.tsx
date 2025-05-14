import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Home Component', () => {
  it('renders without crashing', () => {
    render(<Home />);
  });

  it('displays the correct heading', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to SpinbitZ')).toBeInTheDocument();
  });

  it('displays the correct description', () => {
    render(<Home />);
    expect(screen.getByText('This is the Home page.')).toBeInTheDocument();
  });
}); 