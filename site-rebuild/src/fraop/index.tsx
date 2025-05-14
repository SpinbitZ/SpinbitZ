/**
 * FRAOP (Functional Reactive Aspect-Oriented Programming) entry point.
 * This file will be expanded to integrate Cycle.js and xstream for stream management.
 */

import { makeComponent, h } from '@cycle/react';
import xs, { Stream, Producer, Listener } from 'xstream';
import { withState, StateSource } from '@cycle/state';
import React from 'react';
import { uiStrings } from '../constants/ui-strings';
import { applyAspects } from './aspects';

interface AppState {
  currentRoute: string;
  isLoading: boolean;
  error: string | null;
}

interface Sources {
  state: StateSource<AppState>;
}

interface Sinks {
  react: Stream<React.ReactElement>;
  state: Stream<(state: AppState) => AppState>;
}

const initialState: AppState = {
  currentRoute: '/',
  isLoading: false,
  error: null
};

export function main(sources: Sources): Sinks {
  const state$ = sources.state.stream;
  const enhancedState$ = applyAspects(sources, state$);

  // Handle route changes
  const routeChange$ = xs.create<string>({
    start: (listener: Listener<string>) => {
      const handleRouteChange = (e: MouseEvent) => {
        e.preventDefault();
        const target = e.target as HTMLAnchorElement;
        const path = target.getAttribute('href') || '/';
        listener.next(path);
      };

      document.addEventListener('click', (e) => {
        if (e.target instanceof HTMLAnchorElement) {
          handleRouteChange(e);
        }
      });

      return () => {
        document.removeEventListener('click', handleRouteChange);
      };
    },
    stop: () => {}
  });

  // Initial state reducer
  const initReducer$ = xs.of((state: AppState): AppState => ({
    ...initialState,
    currentRoute: window.location.pathname
  }));

  // Update state when route changes
  const routeReducer$ = routeChange$.map(path => (state: AppState): AppState => ({
    ...state,
    currentRoute: path
  }));

  // Combine reducers
  const reducer$ = xs.merge(initReducer$, routeReducer$);

  const vdom$ = enhancedState$.map(state => (
    <div>
      <nav>
        {uiStrings.navigation.items.map(item => (
          <a key={item.path} href={item.path}>{item.label}</a>
        ))}
      </nav>
      <main>
        <h1>{uiStrings.common.labels.currentRoute}: {state.currentRoute}</h1>
      </main>
    </div>
  ));

  return {
    react: vdom$,
    state: reducer$
  };
}

export const App = makeComponent(withState(main));
