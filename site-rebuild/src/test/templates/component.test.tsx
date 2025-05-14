import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Component } from '../../components/Component';
import { ErrorBoundary } from '../../components/ErrorBoundary';
import { TestProvider } from '../../components/TestProvider';
import { mockData } from '../mocks/mock-data';

// Extend expect with accessibility matchers
expect.extend(toHaveNoViolations);

/**
 * Component Test Template
 * 
 * This template provides a standardized structure for testing React components.
 * It includes common test cases, accessibility testing, and best practices.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * describe('MyComponent', () => {
 *   it('renders correctly', () => {
 *     render(<MyComponent />);
 *     expect(screen.getByText('Expected Text')).toBeInTheDocument();
 *   });
 * });
 * ```
 */
describe('Component', () => {
  // Basic rendering tests
  describe('rendering', () => {
    it('renders without crashing', () => {
      render(<Component />);
    });

    it('renders with correct props', () => {
      const props = {
        title: 'Test Title',
        description: 'Test Description'
      };
      render(<Component {...props} />);
      
      expect(screen.getByText(props.title)).toBeInTheDocument();
      expect(screen.getByText(props.description)).toBeInTheDocument();
    });

    it('renders with default props', () => {
      render(<Component />);
      // Add expectations for default prop values
    });
  });

  // State management tests
  describe('state management', () => {
    it('updates state correctly', async () => {
      render(<Component />);
      
      // Example state update
      const button = screen.getByRole('button', { name: /update/i });
      await userEvent.click(button);
      
      // Verify state update
      expect(screen.getByText('Updated State')).toBeInTheDocument();
    });

    it('handles loading state', () => {
      render(<Component isLoading={true} />);
      expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
    });

    it('handles error state', () => {
      render(<Component error="Test Error" />);
      expect(screen.getByText('Test Error')).toBeInTheDocument();
    });
  });

  // Event handling tests
  describe('event handling', () => {
    it('handles click events', async () => {
      const handleClick = vi.fn();
      render(<Component onClick={handleClick} />);
      
      const button = screen.getByRole('button');
      await userEvent.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('handles form submission', async () => {
      const handleSubmit = vi.fn();
      render(<Component onSubmit={handleSubmit} />);
      
      const form = screen.getByRole('form');
      await userEvent.type(screen.getByLabelText(/name/i), 'Test Name');
      await userEvent.click(screen.getByRole('button', { name: /submit/i }));
      
      expect(handleSubmit).toHaveBeenCalledWith({
        name: 'Test Name'
      });
    });
  });

  // Accessibility tests
  describe('accessibility', () => {
    it('has no accessibility violations', async () => {
      const { container } = render(<Component />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('has correct ARIA attributes', () => {
      render(<Component />);
      
      // Example ARIA checks
      expect(screen.getByRole('button')).toHaveAttribute('aria-label');
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby');
    });

    it('is keyboard navigable', async () => {
      render(<Component />);
      
      // Focus first interactive element
      const firstElement = screen.getByRole('button');
      firstElement.focus();
      expect(firstElement).toHaveFocus();
      
      // Test keyboard navigation
      await userEvent.tab();
      expect(screen.getByRole('textbox')).toHaveFocus();
    });
  });

  // Integration with other components
  describe('integration', () => {
    it('works with child components', () => {
      render(
        <Component>
          <div>Child Content</div>
        </Component>
      );
      
      expect(screen.getByText('Child Content')).toBeInTheDocument();
    });

    it('works with context providers', () => {
      render(
        <TestProvider>
          <Component />
        </TestProvider>
      );
      
      // Add expectations for context-dependent behavior
    });
  });

  // Error handling
  describe('error handling', () => {
    it('handles invalid props gracefully', () => {
      // @ts-expect-error Testing invalid props
      render(<Component invalidProp="test" />);
      // Add expectations for error handling
    });

    it('shows error boundary when component crashes', () => {
      render(
        <ErrorBoundary>
          <Component shouldCrash={true} />
        </ErrorBoundary>
      );
      
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });
  });
}); 