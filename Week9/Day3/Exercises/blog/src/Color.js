import React, { Component } from 'react';

class Child extends Component {
  componentWillUnmount() {
    console.log('Child component will unmount');
  }

  render() {
    return <h2>Hello World!</h2>;
  }
}

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: 'red', show: true };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('after update');
    console.log('Snapshot:', snapshot);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('in getSnapshotBeforeUpdate');
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  changeColorToBlue = () => {
    this.setState({ favoriteColor: 'blue' });
  };

  handleRemove = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>
          My favorite color is <strong>{this.state.favoriteColor}</strong>
        </h1>
        <button onClick={this.changeColorToBlue}>Change color to blue</button>
        <button onClick={this.handleRemove}>Remove Child Component</button>
        {this.state.show && <Child />}
      </div>
    );
  }
}

export default Color;