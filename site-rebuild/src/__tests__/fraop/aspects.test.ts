import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Stream } from 'xstream';
import { aspects, applyAspects } from '../../fraop/aspects';
import { AppState } from '../../fraop/types';

describe('FRAOP Aspects', () => {
  let mockSources: any;
  let mockState$: Stream<AppState>;

  beforeEach(() => {
    mockSources = {};
    mockState$ = Stream.create();
  });

  describe('Logging Aspect', () => {
    it('should log state updates with timestamp', () => {
      const consoleSpy = vi.spyOn(console, 'log');
      const testState: AppState = {
        currentRoute: '/test',
        isLoading: false,
        error: null
      };

      const loggingAspect = aspects.find(a => a.name === 'logging');
      const result$ = loggingAspect?.apply(mockSources, mockState$);

      result$?.addListener({
        next: (state) => {
          expect(consoleSpy).toHaveBeenCalledWith(
            expect.stringMatching(/\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/),
            testState
          );
        }
      });

      mockState$.shamefullySendNext(testState);
      consoleSpy.mockRestore();
    });
  });

  describe('Error Handling Aspect', () => {
    it('should log errors when present in state', () => {
      const consoleSpy = vi.spyOn(console, 'error');
      const testState: AppState = {
        currentRoute: '/test',
        isLoading: false,
        error: 'Test error'
      };

      const errorAspect = aspects.find(a => a.name === 'errorHandling');
      const result$ = errorAspect?.apply(mockSources, mockState$);

      result$?.addListener({
        next: (state) => {
          expect(consoleSpy).toHaveBeenCalledWith('[Error] Test error');
        }
      });

      mockState$.shamefullySendNext(testState);
      consoleSpy.mockRestore();
    });

    it('should not log errors when error is null', () => {
      const consoleSpy = vi.spyOn(console, 'error');
      const testState: AppState = {
        currentRoute: '/test',
        isLoading: false,
        error: null
      };

      const errorAspect = aspects.find(a => a.name === 'errorHandling');
      const result$ = errorAspect?.apply(mockSources, mockState$);

      result$?.addListener({
        next: (state) => {
          expect(consoleSpy).not.toHaveBeenCalled();
        }
      });

      mockState$.shamefullySendNext(testState);
      consoleSpy.mockRestore();
    });
  });

  describe('Loading Aspect', () => {
    it('should log loading state with route', () => {
      const consoleSpy = vi.spyOn(console, 'log');
      const testState: AppState = {
        currentRoute: '/test',
        isLoading: true,
        error: null
      };

      const loadingAspect = aspects.find(a => a.name === 'loading');
      const result$ = loadingAspect?.apply(mockSources, mockState$);

      result$?.addListener({
        next: (state) => {
          expect(consoleSpy).toHaveBeenCalledWith('[Loading] Route: /test');
        }
      });

      mockState$.shamefullySendNext(testState);
      consoleSpy.mockRestore();
    });

    it('should not log when not loading', () => {
      const consoleSpy = vi.spyOn(console, 'log');
      const testState: AppState = {
        currentRoute: '/test',
        isLoading: false,
        error: null
      };

      const loadingAspect = aspects.find(a => a.name === 'loading');
      const result$ = loadingAspect?.apply(mockSources, mockState$);

      result$?.addListener({
        next: (state) => {
          expect(consoleSpy).not.toHaveBeenCalled();
        }
      });

      mockState$.shamefullySendNext(testState);
      consoleSpy.mockRestore();
    });
  });

  describe('applyAspects', () => {
    it('should apply all aspects in sequence', () => {
      const consoleSpy = vi.spyOn(console, 'log');
      const testState: AppState = {
        currentRoute: '/test',
        isLoading: true,
        error: 'Test error'
      };

      const result$ = applyAspects(mockSources, mockState$);

      result$?.addListener({
        next: (state) => {
          expect(consoleSpy).toHaveBeenCalledTimes(2); // Logging + Loading
          expect(state).toEqual(testState);
        }
      });

      mockState$.shamefullySendNext(testState);
      consoleSpy.mockRestore();
    });
  });
}); 