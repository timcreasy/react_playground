import React from "react";

var NewSong = React.createClass({

  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      title: "",
      artist: ""
    };
  },

  artistInput: function(event) {
    this.state.artist = event.target.value;
  },

  songInput: function(event) {
    this.state.title = event.target.value;
  },

  addSongPressed: function(event) {
    let newTitle = this.state.title;
    let newArtist = this.state.artist;
    firebase.database().ref().child('songs/').push({
      title: newTitle,
      artist: newArtist
    });
    this.setState({
      title: "",
      artist: ""
    });
  },

  render: function() {
    return (
      <div>
        <input placeholder="Add New Song" onChange={this.songInput} />
        <input placeholder="Add New Artist" onChange={this.artistInput} />
        <button onClick={this.addSongPressed}>Add to Firebase</button>
      </div>
    );
  }

});

module.exports = NewSong;
