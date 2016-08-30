import React from "react";

var Subtitle = React.createClass({
  render: function() {
    return (
      <h3>{this.props.subtitle}</h3>
    );
  }
});

module.exports = Subtitle;
