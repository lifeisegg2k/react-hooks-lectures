import React from "react";

class UseStatsUgly extends React.Component {
  state = {
    item: 0
  }
  render() {
    const { item } = this.state;
    return (
      <div>
        <h1>Hello UseStatsUgly {item}</h1>
        <h2>Start editing to see some magic happen!</h2>
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
