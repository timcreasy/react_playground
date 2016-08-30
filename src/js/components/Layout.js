import React from "react";
import Content from "./Content"
import Footer from "./Footer";
import Header from "./Header";

var Layout = React.createClass({
  render: function() {
    return (
      <div>
        <Header title="header" subtitle='By Tim Creasy'/>
        <Content />
        <Footer title="footer"/>
      </div>
    );
  }
});

module.exports = Layout;
