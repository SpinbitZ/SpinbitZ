# Test Templates

## Overview
This document outlines the standardized test templates available in the project. These templates provide a consistent structure for writing tests and ensure comprehensive coverage of different testing scenarios.

## Available Templates

### 1. Component Test Template
**Location:** `src/test/templates/component.test.tsx`

This template provides a structure for testing React components, including:
- Basic rendering tests
- State management tests
- Event handling tests
- Accessibility tests
- Integration with other components
- Error handling

#### Example Usage
```tsx
import { render, screen } from '@testing-library/react';
import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

### 2. Stream Test Template
**Location:** `src/test/templates/stream.test.ts`

This template provides a structure for testing reactive streams, including:
- Initialization tests
- State management tests
- Action tests
- Side effect tests
- Error handling

#### Example Usage
```ts
import { createStream } from '../../utils/stream';

describe('MyStream', () => {
  it('initializes with correct state', () => {
    const stream = createStream({ initialState: { data: null } });
    expect(stream.getState()).toEqual({ data: null });
  });
});
```

### 3. Integration Test Template
**Location:** `src/test/templates/integration.test.tsx`

This template provides a structure for testing integration between components, including:
- Route testing
- Data flow testing
- User interaction testing
- Error scenarios
- State persistence

#### Example Usage
```tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

describe('Page Integration', () => {
  it('navigates between pages', async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </MemoryRouter>
    );
    
    await userEvent.click(screen.getByText('About'));
    expect(screen.getByText('About Page')).toBeInTheDocument();
  });
});
```

## Best Practices

### 1. Component Testing
- Test rendering with different props
- Test user interactions
- Test accessibility
- Test error states
- Test loading states
- Test integration with other components

### 2. Stream Testing
- Test initial state
- Test state updates
- Test actions
- Test side effects
- Test error handling
- Test subscription management

### 3. Integration Testing
- Test routing
- Test data flow
- Test user interactions
- Test error scenarios
- Test state persistence
- Test API integration

## Common Patterns

### 1. Mocking
```ts
// Mock API calls
const fetchData = vi.fn().mockResolvedValue(mockData);

// Mock event handlers
const handleClick = vi.fn();

// Mock timers
vi.useFakeTimers();
```

### 2. Async Testing
```ts
// Wait for state updates
await waitFor(() => {
  expect(screen.getByText('Updated')).toBeInTheDocument();
});

// Wait for API calls
await waitFor(() => {
  expect(fetchData).toHaveBeenCalled();
});
```

### 3. User Interactions
```ts
// Click events
await userEvent.click(screen.getByRole('button'));

// Form input
await userEvent.type(screen.getByLabelText(/name/i), 'Test User');

// Form submission
await userEvent.click(screen.getByRole('button', { name: /submit/i }));
```

## Testing Utilities

### 1. Render Function
```tsx
import { render } from '@testing-library/react';

// Basic render
render(<Component />);

// Render with providers
render(
  <TestProvider>
    <Component />
  </TestProvider>
);

// Render with router
render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<Component />} />
    </Routes>
  </MemoryRouter>
);
```

### 2. Screen Queries
```tsx
import { screen } from '@testing-library/react';

// Get by role
screen.getByRole('button');

// Get by text
screen.getByText('Click me');

// Get by label
screen.getByLabelText(/name/i);

// Get by test ID
screen.getByTestId('submit-button');
```

### 3. Assertions
```tsx
import { expect } from 'vitest';

// Element presence
expect(screen.getByText('Text')).toBeInTheDocument();

// Element attributes
expect(element).toHaveAttribute('aria-label');

// Function calls
expect(mockFn).toHaveBeenCalledWith(args);

// State updates
expect(stream.getState()).toEqual(expectedState);
```

## Common Issues and Solutions

### 1. Async Testing
- Use `waitFor` for state updates
- Use `act` for React updates
- Mock timers when needed
- Handle loading states

### 2. Mocking
- Mock external dependencies
- Mock API calls
- Mock event handlers
- Mock timers
- Mock browser APIs

### 3. Error Handling
- Test error states
- Test error boundaries
- Test error messages
- Test error recovery

## Next Steps
1. Review the templates
2. Start using them in your tests
3. Provide feedback for improvements
4. Update templates as needed 