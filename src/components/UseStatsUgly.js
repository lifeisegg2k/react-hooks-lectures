import React from "react";

class UseStatsUgly extends React.Component {
  state = {
    item: 0
  }
  render() {
    const { item } = this.state;
    return (
      <div>
        <h2>Hello useStateUgly {item}</h2>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </div>
    );
  };
  incrementItem = () => {
    this.setState(state => {
      return {
        item: state.item + 1
      }
    })
  };
  decrementItem = () => {
    this.setState(state => {
      return {
        item: state.item - 1
      }
    })
  };
}

export default UseStatsUgly;
