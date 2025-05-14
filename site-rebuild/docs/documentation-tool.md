# Documentation Tool: VitePress

## Overview
VitePress is a static site generator designed for documentation. It provides fast page loads, markdown support, and a simple configuration.

## Installation
To install VitePress, run:
```bash
npm install -D vitepress
```

## Configuration
Create a `docs/.vitepress/config.js` file with the following content:
```javascript
export default {
  title: 'SpinbitZ Documentation',
  description: 'Documentation for the SpinbitZ project',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Architecture', link: '/architecture/' },
      { text: 'Components', link: '/components/' },
      { text: 'API', link: '/api/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Tutorials', link: '/tutorials/' },
      { text: 'Testing', link: '/testing/' },
      { text: 'Workflow', link: '/workflow/' },
      { text: 'References', link: '/references/' }
    ],
    sidebar: {
      '/architecture/': [
        { text: 'Overview', link: '/architecture/' }
      ],
      '/components/': [
        { text: 'Overview', link: '/components/' }
      ],
      '/api/': [
        { text: 'Overview', link: '/api/' }
      ],
      '/guides/': [
        { text: 'Overview', link: '/guides/' }
      ],
      '/tutorials/': [
        { text: 'Overview', link: '/tutorials/' }
      ],
      '/testing/': [
        { text: 'Overview', link: '/testing/' }
      ],
      '/workflow/': [
        { text: 'Overview', link: '/workflow/' }
      ],
      '/references/': [
        { text: 'Overview', link: '/references/' }
      ]
    }
  }
};
```

## Usage
To start the documentation server, run:
```bash
npx vitepress dev docs
```

To build the documentation for production, run:
```bash
npx vitepress build docs
```

## References
- [VitePress Documentation](https://vitepress.dev/) 