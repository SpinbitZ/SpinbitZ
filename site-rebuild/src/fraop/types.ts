import { Stream } from 'xstream';
import { StateSource } from '@cycle/state';
import { VNode } from '@cycle/react';

export interface AppState {
  currentRoute: string;
  isLoading: boolean;
  error: string | null;
}

export interface Sources {
  react: any;
  state: StateSource<AppState>;
}

export interface Sinks {
  react: Stream<VNode>;
  state: Stream<AppState>;
}

export interface Aspect {
  name: string;
  apply: (sources: any, state$: Stream<AppState>) => Stream<AppState>;
} 