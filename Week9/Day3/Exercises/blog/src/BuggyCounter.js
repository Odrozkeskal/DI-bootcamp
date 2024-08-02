import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState((prevState) => {
      if (prevState.counter === 4) {
        throw new Error('Fail');
      }
      return { counter: prevState.counter + 1 };
    });
  };

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>Counter: {this.state.counter}</h1>
      </div>
    );
  }
}

export default BuggyCounter;