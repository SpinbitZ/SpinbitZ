/**
 * FRAOP aspects file.
 * This file will be expanded to define aspects for the FRAOP architecture.
 */

import xs, { Stream } from 'xstream';
import { StateSource } from '@cycle/state';

// Types
interface AppState {
  currentRoute: string;
  isLoading: boolean;
  error: string | null;
}

interface Aspect {
  name: string;
  apply: (sources: any, state$: Stream<AppState>) => Stream<AppState>;
}

// Logging Aspect
const loggingAspect: Aspect = {
  name: 'logging',
  apply: (sources, state$) => {
    return state$.map(state => {
      console.log(`[${new Date().toISOString()}] State Update:`, state);
      return state;
    });
  }
};

// Error Handling Aspect
const errorHandlingAspect: Aspect = {
  name: 'errorHandling',
  apply: (sources, state$) => {
    return state$.map(state => {
      if (state.error) {
        console.error(`[Error] ${state.error}`);
      }
      return state;
    });
  }
};

// Loading Aspect
const loadingAspect: Aspect = {
  name: 'loading',
  apply: (sources, state$) => {
    return state$.map(state => {
      if (state.isLoading) {
        console.log(`[Loading] Route: ${state.currentRoute}`);
      }
      return state;
    });
  }
};

// Register all aspects
export const aspects: Aspect[] = [
  loggingAspect,
  errorHandlingAspect,
  loadingAspect
];

// Apply all aspects to a state stream
export const applyAspects = (sources: any, state$: Stream<AppState>): Stream<AppState> => {
  return aspects.reduce((stream, aspect) => aspect.apply(sources, stream), state$);
};
