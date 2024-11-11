import { Component } from 'react';

class HOOK_USESTATE extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  };

  handleDecrement = () => {
    const { count } = this.state;
    this.setState({
      count: count - 1,
    });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count : {count}</h1>
        <button disabled={count === 10} type="button" onClick={this.handleIncrement}>
          Increment
        </button>
        <button disabled={count === 0} type="button" onClick={this.handleDecrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default HOOK_USESTATE;
