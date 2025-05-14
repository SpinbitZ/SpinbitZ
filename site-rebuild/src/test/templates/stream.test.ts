import { describe, it, expect, vi, beforeEach } from 'vitest';
import { createStream } from '../../utils/stream';
import { mockData } from '../mocks/mock-data';

/**
 * Stream Test Template
 * 
 * This template provides a standardized structure for testing reactive streams.
 * It includes common test cases for state management, actions, and error handling.
 * 
 * @example
 * ```ts
 * // Basic usage
 * describe('MyStream', () => {
 *   it('initializes with correct state', () => {
 *     const stream = createStream({ initialState: { data: null } });
 *     expect(stream.getState()).toEqual({ data: null });
 *   });
 * });
 * ```
 */
describe('Stream', () => {
  let stream: ReturnType<typeof createStream>;

  beforeEach(() => {
    // Initialize stream before each test
    stream = createStream({
      initialState: {
        data: null,
        loading: false,
        error: null
      },
      actions: {
        fetchData: async () => {
          stream.setState({ loading: true });
          try {
            const data = await Promise.resolve(mockData);
            stream.setState({ data, loading: false });
          } catch (error) {
            stream.setState({ error, loading: false });
          }
        },
        updateData: (newData: typeof mockData) => {
          stream.setState({ data: newData });
        },
        clearError: () => {
          stream.setState({ error: null });
        }
      }
    });
  });

  // Initialization tests
  describe('initialization', () => {
    it('initializes with correct state', () => {
      expect(stream.getState()).toEqual({
        data: null,
        loading: false,
        error: null
      });
    });

    it('has all required actions', () => {
      expect(stream.actions).toHaveProperty('fetchData');
      expect(stream.actions).toHaveProperty('updateData');
      expect(stream.actions).toHaveProperty('clearError');
    });
  });

  // State management tests
  describe('state management', () => {
    it('updates state correctly', () => {
      stream.actions.updateData(mockData);
      expect(stream.getState().data).toEqual(mockData);
    });

    it('handles loading state', async () => {
      const fetchPromise = stream.actions.fetchData();
      expect(stream.getState().loading).toBe(true);
      await fetchPromise;
      expect(stream.getState().loading).toBe(false);
    });

    it('handles error state', async () => {
      // Mock a failed fetch
      vi.spyOn(global, 'Promise').mockImplementationOnce(() => {
        return Promise.reject(new Error('Test Error'));
      });

      await stream.actions.fetchData();
      expect(stream.getState().error).toBeInstanceOf(Error);
      expect(stream.getState().error?.message).toBe('Test Error');
    });
  });

  // Action tests
  describe('actions', () => {
    it('fetchData action updates state correctly', async () => {
      await stream.actions.fetchData();
      expect(stream.getState().data).toEqual(mockData);
    });

    it('updateData action updates state correctly', () => {
      stream.actions.updateData(mockData);
      expect(stream.getState().data).toEqual(mockData);
    });

    it('clearError action clears error state', () => {
      stream.setState({ error: new Error('Test Error') });
      stream.actions.clearError();
      expect(stream.getState().error).toBeNull();
    });
  });

  // Side effect tests
  describe('side effects', () => {
    it('triggers subscribers on state change', () => {
      const subscriber = vi.fn();
      stream.subscribe(subscriber);

      stream.actions.updateData(mockData);
      expect(subscriber).toHaveBeenCalledWith({
        data: mockData,
        loading: false,
        error: null
      });
    });

    it('handles multiple subscribers', () => {
      const subscriber1 = vi.fn();
      const subscriber2 = vi.fn();
      stream.subscribe(subscriber1);
      stream.subscribe(subscriber2);

      stream.actions.updateData(mockData);
      expect(subscriber1).toHaveBeenCalled();
      expect(subscriber2).toHaveBeenCalled();
    });

    it('allows unsubscribing', () => {
      const subscriber = vi.fn();
      const unsubscribe = stream.subscribe(subscriber);

      stream.actions.updateData(mockData);
      expect(subscriber).toHaveBeenCalledTimes(1);

      unsubscribe();
      stream.actions.updateData(mockData);
      expect(subscriber).toHaveBeenCalledTimes(1);
    });
  });

  // Error handling
  describe('error handling', () => {
    it('handles action errors gracefully', async () => {
      const errorAction = async () => {
        throw new Error('Action Error');
      };

      await expect(errorAction()).rejects.toThrow('Action Error');
    });

    it('maintains state consistency after error', async () => {
      const initialState = stream.getState();
      
      try {
        await stream.actions.fetchData();
      } catch (error) {
        // Error should be handled by the action
      }

      expect(stream.getState().loading).toBe(false);
    });
  });
}); 