# Getting Started Guide

## Overview
This guide will help you set up and run the SpinbitZ project on your local machine.

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Git

## Steps
1. **Clone the Repository**:
   - Open your terminal and run:
     ```bash
     git clone https://github.com/yourusername/spinbitz.git
     cd spinbitz
     ```

2. **Install Dependencies**:
   - Run the following command to install all necessary dependencies:
     ```bash
     npm install
     ```

3. **Start the Development Server**:
   - Start the development server with:
     ```bash
     npm run dev
     ```
   - Access the application at `http://localhost:5173`.

4. **Run Tests**:
   - Execute the test suite with:
     ```bash
     npm test
     ```

## Troubleshooting
- **Issue 1**: If you encounter a port conflict, try running the server on a different port:
  ```bash
  npm run dev -- --port 3000
  ```
- **Issue 2**: If tests fail, ensure all dependencies are installed and up to date. 