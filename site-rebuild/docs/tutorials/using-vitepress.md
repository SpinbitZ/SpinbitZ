# Using VitePress for Documentation

## Overview
This tutorial will guide you through the process of using VitePress to generate documentation for your project.

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Basic knowledge of Markdown

## Steps
1. **Install VitePress**:
   - Run the following command to install VitePress:
     ```bash
     npm install -D vitepress
     ```

2. **Create the VitePress Configuration**:
   - Create a `docs/.vitepress/config.js` file with the following content:
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

3. **Start the VitePress Development Server**:
   - Run the following command to start the VitePress development server:
     ```bash
     npx vitepress dev docs
     ```
   - Access the documentation at `http://localhost:5175`.

4. **Build the Documentation**:
   - To build the documentation for production, run:
     ```bash
     npx vitepress build docs
     ```

## Conclusion
You have successfully set up and used VitePress to generate documentation for your project. You can now create and manage your documentation with ease. 