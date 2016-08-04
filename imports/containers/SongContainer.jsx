import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';
import Navbar from '../ui/components/Navbar';
import LoginModal from '../ui/components/loginModal';
import SongModal from '../ui/components/songModal';
import SongWrapper from '../ui/components/songWrapper';
import OptionBar from '../ui/components/optionBar';
import { Songs } from '../api/songs';

export default class SongContainer extends Component {
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
    const submitter = Meteor.userId();
    const privacy = 'public';
    const createdAt = new Date();
    Songs.insert({ artist, description, URL, submitter, privacy, createdAt });
    this.setState({
      artist: '',
      description: '',
      URL: ''
    });
  }

  handleArtistChange = (event) => {
    this.setState({
      artist: event.target.value
    });
  }

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value
    });
  }

  handleURLChange = (event) => {
    this.setState({
      URL: event.target.value
    });
  }

  handleDeleteSong = (event) => {
    console.log(this);
    console.log(event);
  }

  render() {
    return (
      <div>
        <Navbar
          title="Song Share"
          currentUser={this.props.currentUser} />
        <OptionBar />
        <LoginModal />
        <SongModal
          onSubmit={this.handleSubmit}
          onArtistChange={this.handleArtistChange}
          onDescriptionChange={this.handleDescriptionChange}
          onURLChange={this.handleURLChange}
          artist={this.state.artist}
          description={this.state.description}
          URL={this.state.URL}
        />
        <SongWrapper
          songs={this.props.songs}
          onDeleteSong={this.handleDeleteSong}
        />
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('songs');
  return {
    songs: Songs.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user()
  }
}, SongContainer);
