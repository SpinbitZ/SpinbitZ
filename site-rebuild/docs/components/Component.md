# Component Component

## Overview
The Component component is a reusable UI element designed to encapsulate specific functionality and styling.

## Props
| Prop Name | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| prop1     | string | Yes | - | Description of prop1. |
| prop2     | number | No | 0 | Description of prop2. |

## Usage
```jsx
import { Component } from './Component';

<Component prop1="value1" prop2={123} />
```

## Examples
### Basic Usage
```jsx
<Component prop1="value1" />
```

### Advanced Usage
```jsx
<Component prop1="value1" prop2={123}>
  <div>Child Content</div>
</Component>
```

## Best Practices
- Use this component for...
- Avoid...
- Consider... 