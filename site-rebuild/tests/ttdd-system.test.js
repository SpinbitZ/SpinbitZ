const fs = require('fs');
const path = require('path');

describe('TTDD System Setup', () => {
  describe('Project Structure', () => {
    it('should have required directories', () => {
      const requiredDirs = ['src', 'tests', 'tasks', 'docs'];
      requiredDirs.forEach(dir => {
        expect(fs.existsSync(path.join(__dirname, '..', dir))).toBe(true);
      });
    });

    it('should have task template', () => {
      expect(fs.existsSync(path.join(__dirname, '..', 'tasks', 'template.md'))).toBe(true);
    });

    it('should have initial task', () => {
      expect(fs.existsSync(path.join(__dirname, '..', 'tasks', 'TASK-001-setup-ttdd-system.md'))).toBe(true);
    });
  });

  describe('Testing Setup', () => {
    it('should have Jest configuration', () => {
      expect(fs.existsSync(path.join(__dirname, '..', 'jest.config.js'))).toBe(true);
    });

    it('should have test setup file', () => {
      expect(fs.existsSync(path.join(__dirname, 'setup.js'))).toBe(true);
    });

    it('should have file mocks', () => {
      expect(fs.existsSync(path.join(__dirname, '__mocks__', 'fileMock.js'))).toBe(true);
    });
  });

  describe('Documentation', () => {
    it('should have README', () => {
      expect(fs.existsSync(path.join(__dirname, '..', 'README.md'))).toBe(true);
    });

    it('should have PRD', () => {
      expect(fs.existsSync(path.join(__dirname, '..', 'docs', 'PRD.md'))).toBe(true);
    });

    it('should have implementation plan', () => {
      expect(fs.existsSync(path.join(__dirname, '..', 'docs', 'implementation-plan.md'))).toBe(true);
    });
  });
}); 