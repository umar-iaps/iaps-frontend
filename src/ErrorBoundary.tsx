import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<ReactNode, ErrorBoundaryState> {
  constructor(props: ReactNode, children: any) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          {children}
          {/* <p>{this.state.error && this.state.error.toString()}</p>
          <p>Component Stack Trace:</p>
          <pre>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </pre> */}
          <p>Please move backwards and continue Surfing !!! </p>
        </div>
      );
    }

    // Render the children components if no error occurred
    return this?.props?.children;
  }
}

export default ErrorBoundary;
