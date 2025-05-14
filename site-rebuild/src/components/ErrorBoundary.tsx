import React, { Component, ErrorInfo, ReactNode } from 'react';
import { uiStrings } from '../constants/ui-strings';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2em', textAlign: 'center' }}>
          <h2>{uiStrings.common.labels.error}</h2>
          <p>{uiStrings.common.errors.general}</p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              padding: '0.5em 1em',
              marginTop: '1em',
              cursor: 'pointer',
            }}
          >
            {uiStrings.common.buttons.back}
          </button>
        </div>
      );
    }

    return this.props.children;
  }
} 