import React from "react";

class ErrorBoundary extends React.Component {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error) {
    return {
      error: error,
    };
  }

  componentDidCatch(error, info) {
    console.log("error is", error);
    console.log("info is", info);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold text-red-500">
            Something went wrong
          </h2>
          <p className="text-gray-600">Please try again later.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
