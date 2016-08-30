import React from "react";

var Counter = React.createClass({

  getInitialState: function() {
    return {
      counter: 0
    };
  },

  incrementCounter: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  render: function() {
    return (
      <div>
        <p>Counter is {this.state.counter}</p>
        <button onClick={this.incrementCounter}>+</button>
      </div>
    );
  }

});

module.exports = Counter;
