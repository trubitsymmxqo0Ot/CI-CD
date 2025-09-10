import { PageError } from '@/widgets/PageError/index';
import * as React from 'react';

interface ErrorBoundaryProps {
    children: React.ReactNode
}
interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
        return <PageError/>
    }

    return this.props.children;
  }
}