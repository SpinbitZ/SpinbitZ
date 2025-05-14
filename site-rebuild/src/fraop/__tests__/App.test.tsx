import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, test, expect, vi } from 'vitest';
import App from '../App';
import { uiStrings } from '../../constants/ui-strings';

// Mock the PageTemplate component since we're testing routing
vi.mock('../../pages/PageTemplate', () => ({
  default: ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div data-testid="page-template">
      <h1>{title}</h1>
      {children}
    </div>
  ),
}));

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('App Component', () => {
  test('renders home page by default', () => {
    renderWithRouter(<App />);
    expect(screen.getByText(uiStrings.pages.home.title)).toBeInTheDocument();
  });

  test('renders project page when navigating to /project', () => {
    window.history.pushState({}, 'Project Page', '/project');
    renderWithRouter(<App />);
    expect(screen.getByText(uiStrings.pages.project.title)).toBeInTheDocument();
  });

  test('renders volume-i page when navigating to /volume-i', () => {
    window.history.pushState({}, 'Volume I Page', '/volume-i');
    renderWithRouter(<App />);
    expect(screen.getByText(uiStrings.pages.volumeI.title)).toBeInTheDocument();
  });

  test('renders NotFound page when navigating to an invalid route', () => {
    window.history.pushState({}, 'Not Found Page', '/invalid-route');
    renderWithRouter(<App />);
    expect(screen.getByText('Not Found')).toBeInTheDocument();
  });

  test('imports FRAOP architecture files', () => {
    expect(App).toBeDefined();
    expect(uiStrings).toBeDefined();
  });
}); 