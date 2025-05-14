type Subscriber<T> = (state: T) => void;

interface StreamConfig<T, A> {
  initialState: T;
  actions: A;
}

interface Stream<T, A> {
  getState: () => T;
  setState: (newState: Partial<T>) => void;
  subscribe: (subscriber: Subscriber<T>) => () => void;
  actions: A;
}

export function createStream<T extends object, A extends object>(
  config: StreamConfig<T, A>
): Stream<T, A> {
  let state = { ...config.initialState };
  const subscribers = new Set<Subscriber<T>>();

  const getState = () => ({ ...state });

  const setState = (newState: Partial<T>) => {
    state = { ...state, ...newState };
    subscribers.forEach(subscriber => subscriber(getState()));
  };

  const subscribe = (subscriber: Subscriber<T>) => {
    subscribers.add(subscriber);
    return () => subscribers.delete(subscriber);
  };

  return {
    getState,
    setState,
    subscribe,
    actions: config.actions
  };
} 