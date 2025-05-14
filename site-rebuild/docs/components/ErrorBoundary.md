# ErrorBoundary Component

## Overview
The ErrorBoundary component is used to catch JavaScript errors anywhere in the child component tree, log those errors, and display a fallback UI instead of crashing the entire application.

## Props
| Prop Name | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| children  | ReactNode | Yes | - | The child components to be rendered. |
| fallback  | ReactNode | No | <div>Something went wrong.</div> | The fallback UI to display when an error occurs. |

## Usage
```jsx
import { ErrorBoundary } from './ErrorBoundary';

<ErrorBoundary fallback={<div>Custom fallback UI</div>}>
  <YourComponent />
</ErrorBoundary>
```

## Examples
### Basic Usage
```jsx
<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

### Advanced Usage
```jsx
<ErrorBoundary fallback={<div>Custom fallback UI</div>}>
  <YourComponent />
</ErrorBoundary>
```

## Best Practices
- Use ErrorBoundary to prevent the entire application from crashing due to errors in a specific component.
- Avoid using ErrorBoundary for handling errors in event handlers or asynchronous code.
- Consider using ErrorBoundary at the top level of your application to catch errors in the entire component tree. 