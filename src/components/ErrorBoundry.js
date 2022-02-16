import React from 'react';

class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  // update error using below lifecycle method
  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }
  render() {
    return this.hasError ? (
      <h1>Oops, Something went wrong</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundry;
