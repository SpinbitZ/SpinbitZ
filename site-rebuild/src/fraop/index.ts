/**
 * FRAOP (Functional Reactive Aspect-Oriented Programming) entry point.
 * This file will be expanded to integrate Cycle.js and Callbags for stream management.
 */

import { makeComponent, h } from '@cycle/react';
import xs from 'xstream';

// Cycle.js main function
export function main(sources: any) {
  const increment$ = sources.react.select('increment').events('click').map(() => 1);
  const decrement$ = sources.react.select('decrement').events('click').map(() => -1);
  const reset$ = sources.react.select('reset').events('click').map(() => 'reset');

  const count$ = xs.merge(increment$, decrement$, reset$)
    .fold((acc: number, val: unknown) => (val === 'reset' ? 0 : acc + (val as number)), 0);

  const vdom$ = count$.map((count: number) =>
    h('div', [
      h('h1', `FRAOP Cycle.js App Shell - Count: ${count}`),
      h('button', { sel: 'increment' }, 'Increment'),
      h('button', { sel: 'decrement', style: { marginLeft: '1em' } }, 'Decrement'),
      h('button', { sel: 'reset', style: { marginLeft: '1em' } }, 'Reset')
    ])
  );

  return { react: vdom$ };
}

// Create a React component from the Cycle.js main function
export const App = makeComponent(main);
