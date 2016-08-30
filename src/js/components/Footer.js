import React from "react";

var Footer = React.createClass({
  render: function() {
    return (
      <h1>This is a {this.props.title}</h1>
    );
  }
});

module.exports = Footer;
