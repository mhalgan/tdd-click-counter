import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      error: false,
    };
  }

  decrementCounter = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently {this.state.counter}
        </h1>
        {this.state.error && (
          <h2 data-test="error-message" style={{ color: "red" }}>
            The counter cannot go below 0
          </h2>
        )}
        <button
          data-test="increment-button"
          onClick={() =>
            this.setState({ counter: this.state.counter + 1, error: false })
          }
        >
          Increment counter
        </button>
        <button data-test="decrement-button" onClick={this.decrementCounter}>
          Decrement counter
        </button>
      </div>
    );
  }
}

export default App;
