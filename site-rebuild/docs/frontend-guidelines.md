# Frontend Development Guidelines

## Overview
This document outlines the frontend development guidelines for the SpinbitZ website rebuild, focusing on FRAOP architecture, component design, and best practices.

## Component Architecture

```mermaid
graph TD
    subgraph "Atomic Design"
        A[Atoms]
        B[Molecules]
        C[Organisms]
        D[Templates]
        E[Pages]
    end
    
    A --> B
    B --> C
    C --> D
    D --> E
```

## Component Structure

```mermaid
classDiagram
    class Component {
        +props
        +state
        +intent()
        +model()
        +view()
    }
    
    class StreamComponent {
        +source$
        +sink$
        +transform()
    }
    
    class StateComponent {
        +state$
        +update()
        +select()
    }
    
    Component <|-- StreamComponent
    Component <|-- StateComponent
```

## State Management

```mermaid
graph LR
    subgraph "Fractal State"
        A[Global State]
        B[Component State]
        C[Local State]
    end
    
    A --> B
    B --> C
    
    subgraph "State Updates"
        D[Intent Stream]
        E[Model Stream]
        F[View Stream]
    end
    
    D --> E
    E --> F
```

## Component Communication

```mermaid
sequenceDiagram
    participant P as Parent
    participant C as Child
    participant S as State
    
    P->>C: Props
    C->>S: State Update
    S->>P: State Change
    P->>C: Re-render
```

## Styling Architecture

```mermaid
graph TD
    subgraph "Styling System"
        A[Tailwind]
        B[CSS Modules]
        C[CSS-in-JS]
    end
    
    subgraph "Design System"
        D[Tokens]
        E[Components]
        F[Themes]
    end
    
    A --> D
    B --> E
    C --> F
```

## Code Organization

```mermaid
graph TD
    subgraph "Source Structure"
        A[src]
        B[components]
        C[streams]
        D[styles]
        E[tests]
    end
    
    A --> B
    A --> C
    A --> D
    A --> E
```

## Development Workflow

```mermaid
graph LR
    A[Task Creation] --> B[Test Writing]
    B --> C[Implementation]
    C --> D[Review]
    D --> E[Deployment]
```

## Component Guidelines

1. **Component Structure**
   ```typescript
   interface ComponentProps {
     // Props interface
   }
   
   const Component: React.FC<ComponentProps> = (props) => {
     // Component implementation
   };
   ```

2. **Stream Implementation**
   ```typescript
   const componentStream = (sources: Sources) => {
     const intent$ = intent(sources);
     const model$ = model(intent$);
     const view$ = view(model$);
     
     return {
       DOM: view$
     };
   };
   ```

3. **State Management**
   ```typescript
   const state$ = stream.combine(
     intent$,
     model$,
     (intent, model) => ({
       ...intent,
       ...model
     })
   );
   ```

## Styling Guidelines

1. **Component Styling**
   ```typescript
   const styles = {
     container: 'flex flex-col p-4',
     header: 'text-2xl font-bold',
     content: 'mt-4'
   };
   ```

2. **Theme Implementation**
   ```typescript
   const theme = {
     colors: {
       primary: '#007bff',
       secondary: '#6c757d'
     },
     spacing: {
       sm: '0.5rem',
       md: '1rem',
       lg: '2rem'
     }
   };
   ```

## Testing Guidelines

1. **Component Testing**
   ```typescript
   describe('Component', () => {
     it('should render correctly', () => {
       // Test implementation
     });
     
     it('should handle state updates', () => {
       // Test implementation
     });
   });
   ```

2. **Stream Testing**
   ```typescript
   describe('Stream', () => {
     it('should transform data correctly', () => {
       // Test implementation
     });
     
     it('should handle errors', () => {
       // Test implementation
     });
   });
   ```

## Performance Guidelines

1. **Component Optimization**
   - Use React.memo for pure components
   - Implement proper memoization
   - Use efficient update patterns

2. **Stream Optimization**
   - Implement proper stream cleanup
   - Use efficient stream operators
   - Handle backpressure

3. **Bundle Optimization**
   - Implement code splitting
   - Use dynamic imports
   - Optimize asset loading

## Accessibility Guidelines

1. **ARIA Implementation**
   - Use proper ARIA roles
   - Implement proper labels
   - Handle keyboard navigation

2. **Semantic HTML**
   - Use proper HTML elements
   - Implement proper heading structure
   - Use proper form elements

## Error Handling

1. **Component Errors**
   - Implement error boundaries
   - Handle runtime errors
   - Provide user feedback

2. **Stream Errors**
   - Handle stream errors
   - Implement proper recovery
   - Log error information

## Documentation Guidelines

1. **Component Documentation**
   - Document props
   - Document state
   - Document methods

2. **Stream Documentation**
   - Document stream operators
   - Document transformations
   - Document error handling

## Review Checklist

1. **Code Quality**
   - Follow TypeScript guidelines
   - Implement proper testing
   - Follow style guide

2. **Performance**
   - Check bundle size
   - Verify performance metrics
   - Check accessibility

3. **Documentation**
   - Verify documentation
   - Check examples
   - Verify API documentation 