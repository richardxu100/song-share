import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';
import Navbar from '../ui/components/navbar';
import SongModal from '../ui/components/songModal';
import SongWrapper from '../ui/components/songWrapper';
import OptionBar from '../ui/components/optionBar';
import { Songs } from '../api/songs';

export default class AppContainer extends Component {
  static propTypes = {
    songs: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      description: '',
      URL: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const artist = this.state.artist;
    const description = this.state.description;
    const URL = this.state.URL;
    Songs.insert({ artist, description, URL });
    this.setState({
      artist: '',
      description: '',
      URL: ''
    });
  }

  handleArtistChange = (event) => {
    // event.preventDefault();
    this.setState({
      artist: event.target.value
    });
  }

  handleDescriptionChange = (event) => {
    // event.preventDefault();
    this.setState({
      description: event.target.value
    });
  }

  handleURLChange = (event) => {
    // event.preventDefault();
    this.setState({
      URL: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Navbar title="Song Share"/>
        <OptionBar />
        <SongModal
          onSubmit={this.handleSubmit}
          onArtistChange={this.handleArtistChange}
          onDescriptionChange={this.handleDescriptionChange}
          onURLChange={this.handleURLChange}
          artist={this.state.artist}
          description={this.state.description}
          URL={this.state.URL}
        />
        <SongWrapper />
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('songs');
  return {
    songs: Songs.find({}).fetch()
  }
}, AppContainer);
