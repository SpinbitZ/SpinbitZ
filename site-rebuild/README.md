# SpinbitZ Website Rebuild

## Overview
This repository contains the rebuild of the SpinbitZ website using FRAOP (Functional-Reactive Aspect-Oriented Programming) architecture with MVI (Model-View-Intent) pattern and strict TTDD (Test and Task Driven Development) methodology.

## Project Structure
```
site-rebuild/
├── src/              # Source code
├── tests/            # Test files
├── tasks/            # Task definitions and tracking
├── docs/             # Documentation
└── package.json      # Project configuration
```

## Development Approach
- **TTDD**: Test and Task Driven Development
- **FRAOP**: Functional-Reactive Aspect-Oriented Programming
- **MVI**: Model-View-Intent pattern
- **xstream**: Stream management

## Rules System
The project follows a strict set of development rules defined in `.cursor/rules`. These rules enforce:

### Core Paradigms
- FRAOP architecture compliance
- MVI pattern implementation
- TTDD methodology
- Stream management with xstream

### Development Standards
- Code structure and organization
- State management patterns
- Stream handling and cleanup
- Testing requirements
- Performance optimization
- Security practices
- Accessibility standards

### Process Requirements
- Task management workflow
- Code review process
- Documentation standards
- Commit message format
- Branch management
- Deployment procedures

### Cursor Integration
- Context and memory maintenance
- Option presentation format
- Rule enforcement
- Documentation requirements

### Rule Enforcement Examples

#### Option Presentation
```typescript
// ❌ Incorrect format
- Add new feature
- Fix bug
- Update docs

// ✅ Correct format
1. Implement new authentication feature
2. Fix user session persistence bug
3. Update API documentation
recommend: Implement new authentication feature as it's a blocker for other features
```

#### Task Management
```typescript
// ❌ Incorrect task format
- Add login page
- Write tests later

// ✅ Correct task format
1. Create login page component with FRAOP architecture
2. Implement MVI pattern for authentication
3. Write unit tests for login functionality
4. Add integration tests for auth flow
recommend: Start with login page component as it's the foundation for authentication
```

#### Code Review
```typescript
// ❌ Incorrect review format
- Looks good
- Add more tests

// ✅ Correct review format
1. Add error handling for network failures
2. Increase test coverage for edge cases
3. Update documentation with new API changes
4. Add performance benchmarks
recommend: Add error handling first as it's critical for production reliability
```

#### Documentation Updates
```typescript
// ❌ Incorrect documentation
- Updated API
- Fixed bugs

// ✅ Correct documentation
1. Added new authentication endpoints
2. Documented error handling procedures
3. Updated API versioning strategy
4. Added migration guide
recommend: Update API documentation first to ensure proper integration
```

All team members must follow these rules to maintain consistency and quality across the project. The rules are enforced through the Cursor IDE integration.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)
- Git

### Installation
```bash
# Clone the repository
git clone [repository-url]

# Install dependencies
npm install

# Run tests
npm test
```

## Development Workflow
1. Create task definition
2. Write tests
3. Implement feature
4. Update documentation
5. Submit for review

## Quality Gates
- Test coverage > 90%
- Code quality score > 90
- Performance score > 90
- Documentation complete
- All tests passing

## Documentation
- [Product Requirements Document](docs/PRD.md)
- [Implementation Plan](docs/implementation-plan.md)
- [TTDD System](docs/research/ai/ttdd-implementation-system.md)
- [FRAOP Architecture](docs/research/ai/fraop-architecture-analysis.md)

## Contributing
1. Create a new task
2. Write tests
3. Implement feature
4. Update documentation
5. Submit for review

## License
[License Type] - See LICENSE file for details 