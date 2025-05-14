import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Component } from '../../components/Component';
import { mockData } from '../mocks/mock-data';

/**
 * Integration Test Template
 * 
 * This template provides a standardized structure for testing integration between components,
 * routing, and data flow. It includes common test cases for user interactions and error scenarios.
 * 
 * @example
 * ```tsx
 * // Basic usage
 * describe('Page Integration', () => {
 *   it('navigates between pages', async () => {
 *     render(
 *       <MemoryRouter>
 *         <Routes>
 *           <Route path="/" element={<HomePage />} />
 *           <Route path="/about" element={<AboutPage />} />
 *         </Routes>
 *       </MemoryRouter>
 *     );
 *     
 *     await userEvent.click(screen.getByText('About'));
 *     expect(screen.getByText('About Page')).toBeInTheDocument();
 *   });
 * });
 * ```
 */
describe('Integration', () => {
  // Route testing
  describe('routing', () => {
    it('renders correct route', () => {
      render(
        <MemoryRouter initialEntries={['/test']}>
          <Routes>
            <Route
              path="/test"
              element={<Component title="Test Page" />}
            />
          </Routes>
        </MemoryRouter>
      );

      expect(screen.getByText('Test Page')).toBeInTheDocument();
    });

    it('handles navigation', async () => {
      render(
        <MemoryRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Component>
                  <button onClick={() => window.history.pushState({}, '', '/test')}>
                    Navigate
                  </button>
                </Component>
              }
            />
            <Route
              path="/test"
              element={<Component title="Test Page" />}
            />
          </Routes>
        </MemoryRouter>
      );

      await userEvent.click(screen.getByText('Navigate'));
      expect(screen.getByText('Test Page')).toBeInTheDocument();
    });
  });

  // Data flow testing
  describe('data flow', () => {
    it('loads and displays data', async () => {
      const fetchData = vi.fn().mockResolvedValue(mockData);
      
      render(
        <Component
          title="Data Page"
          description="Loading data..."
        />
      );

      expect(screen.getByText('Loading data...')).toBeInTheDocument();
      
      await waitFor(() => {
        expect(fetchData).toHaveBeenCalled();
      });
      
      expect(screen.getByText(mockData.title)).toBeInTheDocument();
    });

    it('handles data loading errors', async () => {
      const fetchData = vi.fn().mockRejectedValue(new Error('Failed to load'));
      
      render(
        <Component
          title="Error Page"
          description="Loading..."
        />
      );

      await waitFor(() => {
        expect(fetchData).toHaveBeenCalled();
      });
      
      expect(screen.getByText('Failed to load')).toBeInTheDocument();
    });
  });

  // User interaction testing
  describe('user interactions', () => {
    it('handles form submission', async () => {
      const handleSubmit = vi.fn();
      
      render(
        <Component
          title="Form Page"
          onSubmit={handleSubmit}
        />
      );

      await userEvent.type(screen.getByLabelText(/name/i), 'Test User');
      await userEvent.click(screen.getByRole('button', { name: /submit/i }));

      expect(handleSubmit).toHaveBeenCalledWith({
        name: 'Test User'
      });
    });

    it('handles button clicks', async () => {
      const handleClick = vi.fn();
      
      render(
        <Component
          title="Button Page"
          onClick={handleClick}
        />
      );

      await userEvent.click(screen.getByRole('button', { name: /update/i }));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  // Error scenarios
  describe('error scenarios', () => {
    it('handles component errors', () => {
      render(
        <Component
          title="Error Page"
          shouldCrash={true}
        />
      );

      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    });

    it('handles network errors', async () => {
      const fetchData = vi.fn().mockRejectedValue(new Error('Network Error'));
      
      render(
        <Component
          title="Network Page"
          description="Loading..."
        />
      );

      await waitFor(() => {
        expect(fetchData).toHaveBeenCalled();
      });
      
      expect(screen.getByText('Network Error')).toBeInTheDocument();
    });
  });

  // State persistence
  describe('state persistence', () => {
    it('maintains state during navigation', async () => {
      render(
        <MemoryRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Component>
                  <button onClick={() => window.history.pushState({}, '', '/test')}>
                    Navigate
                  </button>
                </Component>
              }
            />
            <Route
              path="/test"
              element={<Component title="Test Page" />}
            />
          </Routes>
        </MemoryRouter>
      );

      // Set some state
      await userEvent.type(screen.getByLabelText(/name/i), 'Test User');
      
      // Navigate away and back
      await userEvent.click(screen.getByText('Navigate'));
      window.history.back();
      
      // Check if state is maintained
      expect(screen.getByLabelText(/name/i)).toHaveValue('Test User');
    });
  });
}); 