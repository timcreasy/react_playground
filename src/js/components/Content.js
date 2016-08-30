import React from "react";
import Counter from "./Content/Counter";
import SongList from "./Content/SongList";
import NameInput from "./Content/NameInput";
import NewSong from "./Content/NewSong";

var Content = React.createClass({

  render: function() {
    return (
      <div>
        <p>Hello React</p>
        <p>Seems to be working...</p>
        <Counter />
        <NameInput />
        <SongList />
        <NewSong />
      </div>
    );
  }
});

module.exports = Content;
