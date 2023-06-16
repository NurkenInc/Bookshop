import React, { ErrorInfo, ReactNode, Suspense } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode
}

export interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log(error, info.componentStack);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Suspense fallback="">
          <div>Error Page</div>
        </Suspense>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
