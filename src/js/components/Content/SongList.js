import React from "react";

var SongList = React.createClass({

  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var ref = firebase.database().ref("songs");
    this.bindAsArray(ref, "songs");
  },

  render: function() {

    var listItems = this.state.songs.map(function(song) {
      return (
        <li>
          <h5>{song.title} | {song.artist}</h5>
        </li>
      );
    });

    return (
        <ul>
          {listItems}
        </ul>
    );

  }

});

module.exports = SongList;
