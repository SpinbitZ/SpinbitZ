# Test Utilities Documentation

## Overview
This document describes the test utilities available in the SpinbitZ project and how to use them effectively.

## Test Utilities

### Custom Render Function
Located in `src/test/utils/test-utils.tsx`, this utility provides a custom render function that includes common providers (like BrowserRouter).

```typescript
import { render } from '../test/utils/test-utils';

test('renders component', () => {
  render(<YourComponent />);
});
```

### Mock Data Generators
Located in `src/test/utils/test-utils.tsx`, these functions help create consistent test data.

```typescript
import { createMockTask, createMockState } from '../test/utils/test-utils';

const task = createMockTask({ title: 'Custom Task' });
const state = createMockState({ isLoading: true });
```

### Mock Data
Located in `src/test/mocks/mock-data.ts`, this file contains predefined mock data for various components.

```typescript
import { mockPages, mockRoutes } from '../test/mocks/mock-data';

// Use mock data in tests
test('renders page with mock data', () => {
  render(<Page {...mockPages.home} />);
});
```

## Best Practices

1. **Use Custom Render Function**
   - Always use the custom render function from test-utils
   - It includes necessary providers and configurations

2. **Use Mock Data Generators**
   - Use `createMockTask` and `createMockState` for consistent test data
   - Override specific properties as needed

3. **Use Predefined Mock Data**
   - Use mock data from `mock-data.ts` for common scenarios
   - Extend mock data as needed for specific test cases

4. **Test Organization**
   - Group related tests using `describe` blocks
   - Use clear, descriptive test names
   - Follow the Arrange-Act-Assert pattern

## Example Usage

```typescript
import { render, screen } from '../test/utils/test-utils';
import { mockPages } from '../test/mocks/mock-data';

describe('Page Component', () => {
  test('renders page title', () => {
    render(<Page {...mockPages.home} />);
    expect(screen.getByText(mockPages.home.title)).toBeInTheDocument();
  });
});
``` 