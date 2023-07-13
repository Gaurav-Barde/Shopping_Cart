import React, { Component } from "react";
import ErrorModal from "./ErrorModal";
import Button from "./Button";
import { Link } from "react-router-dom";

const initialState = {
  hasError: false,
  error: null,
  errorInfo: null,
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  resetError = () => this.setState(initialState);

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-1/2 bg-gray-300 p-4 m-auto my-6">
          <h1 className="text-2xl mb-1 font-bold text-red-600">
            Something went wrong
          </h1>
          <ErrorModal>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </ErrorModal>
          <Link to="/">
            <Button
              title={"Back to Store"}
              background={"blue"}
              onClickHandler={this.resetError}
            />
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
