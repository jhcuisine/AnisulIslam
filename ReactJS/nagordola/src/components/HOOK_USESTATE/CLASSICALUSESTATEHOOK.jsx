import { Component } from 'react';

class CLASSICALUSESTATEHOOK extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    const { count } = this.state;
    if (count < 10) {
      this.setState({
        count: count + 1,
      });
    }
  };

  handleDecrement = () => {
    const { count } = this.state;
    if (count > 0) {
      this.setState({
        count: count - 1,
      });
    }
  };

  handleReset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count : {count}</h1>
        <button type="button" onClick={this.handleIncrement}>
          Increment
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement
        </button>
        <button type="button" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

export default CLASSICALUSESTATEHOOK;
