import React from "react"

var NameInput = React.createClass({


  getInitialState: function() {
    return {
      message: 'User'
    };
  },
  handleChange: function(event) {
    this.setState({
      message: event.target.value
    });
  },
  render: function() {
    var message = this.state.message;
    return (
      <div>
        <h3>Hello {this.state.message}!</h3>
        <input type="text" value={message} onChange={this.handleChange} />
      </div>
    );
  }
});

module.exports = NameInput;
