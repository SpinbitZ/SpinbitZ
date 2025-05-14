import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFound from '../../pages/NotFound';

describe('NotFound Component', () => {
  it('renders without crashing', () => {
    render(<NotFound />);
  });

  it('displays the correct heading', () => {
    render(<NotFound />);
    expect(screen.getByText('404 - Not Found')).toBeInTheDocument();
  });

  it('displays the correct error message', () => {
    render(<NotFound />);
    expect(screen.getByText('The page you are looking for does not exist.')).toBeInTheDocument();
  });
}); 