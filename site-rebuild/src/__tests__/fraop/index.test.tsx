import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Stream } from 'xstream';
import { main } from '../../fraop/index';
import { AppState } from '../../fraop/types';

describe('FRAOP Main', () => {
  let mockSources: any;
  let mockStateSource: any;

  beforeEach(() => {
    mockStateSource = {
      stream: Stream.create()
    };

    mockSources = {
      react: {
        select: vi.fn().mockReturnValue({
          events: vi.fn().mockReturnValue(Stream.create())
        })
      },
      state: mockStateSource
    };
  });

  describe('Navigation', () => {
    it('should handle navigation events', () => {
      const navigationStream = Stream.create();
      mockSources.react.select.mockReturnValue({
        events: () => navigationStream
      });

      const sinks = main(mockSources);
      const stateListener = vi.fn();
      sinks.state.addListener({ next: stateListener });

      navigationStream.shamefullySendNext('/test-route');

      expect(stateListener).toHaveBeenCalledWith(expect.objectContaining({
        currentRoute: '/test-route'
      }));
    });

    it('should start with default route', () => {
      const sinks = main(mockSources);
      const stateListener = vi.fn();
      sinks.state.addListener({ next: stateListener });

      expect(stateListener).toHaveBeenCalledWith(expect.objectContaining({
        currentRoute: '/'
      }));
    });
  });

  describe('View Stream', () => {
    it('should render navigation links', () => {
      const sinks = main(mockSources);
      const vdomListener = vi.fn();
      sinks.react.addListener({ next: vdomListener });

      const expectedRoutes = [
        '/',
        '/project',
        '/volume-i',
        '/volume-ii',
        '/sorce-theory',
        '/articles',
        '/szi-gallery',
        '/szii-gallery',
        '/art',
        '/downloads'
      ];

      const vdom = vdomListener.mock.calls[0][0];
      const navLinks = vdom.children[0].children;

      expectedRoutes.forEach((route, index) => {
        expect(navLinks[index].props.href).toBe(route);
      });
    });

    it('should show error message when error exists', () => {
      const sinks = main(mockSources);
      const vdomListener = vi.fn();
      sinks.react.addListener({ next: vdomListener });

      const testState: AppState = {
        currentRoute: '/',
        isLoading: false,
        error: 'Test error'
      };

      mockStateSource.stream.shamefullySendNext(testState);

      const vdom = vdomListener.mock.calls[1][0];
      const errorDiv = vdom.children[1].children[1];
      expect(errorDiv.props.className).toBe('error');
      expect(errorDiv.children).toBe('Test error');
    });

    it('should show loading indicator when loading', () => {
      const sinks = main(mockSources);
      const vdomListener = vi.fn();
      sinks.react.addListener({ next: vdomListener });

      const testState: AppState = {
        currentRoute: '/',
        isLoading: true,
        error: null
      };

      mockStateSource.stream.shamefullySendNext(testState);

      const vdom = vdomListener.mock.calls[1][0];
      const loadingDiv = vdom.children[1].children[2];
      expect(loadingDiv.props.className).toBe('loading');
      expect(loadingDiv.children).toBe('Loading...');
    });
  });

  describe('State Management', () => {
    it('should maintain state between navigation events', () => {
      const navigationStream = Stream.create();
      mockSources.react.select.mockReturnValue({
        events: () => navigationStream
      });

      const sinks = main(mockSources);
      const stateListener = vi.fn();
      sinks.state.addListener({ next: stateListener });

      const testState: AppState = {
        currentRoute: '/',
        isLoading: true,
        error: 'Test error'
      };

      mockStateSource.stream.shamefullySendNext(testState);
      navigationStream.shamefullySendNext('/new-route');

      expect(stateListener).toHaveBeenCalledWith(expect.objectContaining({
        currentRoute: '/new-route',
        isLoading: true,
        error: 'Test error'
      }));
    });
  });
}); 