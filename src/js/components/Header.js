import React from "react";
import Subtitle from "./Header/Subtitle"

var Header = React.createClass({
  render: function() {
    return (
      <div>
        <h1>This is a {this.props.title}</h1>
        <Subtitle subtitle={this.props.subtitle} />
      </div>
    );
  }
});

module.exports = Header;
