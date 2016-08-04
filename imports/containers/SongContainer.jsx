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
      url: '',
      privacyFilter: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const artist = this.state.artist;
    const description = this.state.description;
    const url = this.state.url;
    const submitter = Meteor.userId();
    let isPrivate = false;
    const createdAt = new Date();
    Songs.insert({ artist, description, url, submitter, isPrivate, createdAt });
    this.setState({
      artist: '',
      description: '',
      url: ''
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

  handleUrlChange = (event) => {
    this.setState({
      url: event.target.value
    });
  }

  toggleAllPrivacy = () => {
    console.log(this.state.privacyFilter);
    this.setState({
      privacyFilter: !this.state.privacyFilter
    });
  }

  // renderSongs = () => { // probably will need to debug a lot
  //   if (this.props.currentUser) { // if Meteor has started up
  //     let songs = this.props.songs;
  //     // if the song is private and you're not the owner, filter out that song
  //     let filteredSongs = songs.map((song) => {
  //       // if the privacyFilter is set to false
  //       debugger;
  //       if (!this.state.privacyFilter) {
  //         if (song.isPrivate === false || song.submitter === this.props.currentUser._id) {
  //           return song;
  //         }
  //       }
  //       else { // privacyFilter is set to true
  //         if (song.isPrivate === true && song.submitter === this.props.currentUser._id) {
  //           return song;
  //         }
  //       }
  //     });
  //     return filteredSongs;
  //   }
  //   else {
  //     return [];
  //   }
  // }

  renderSongs = () => { // probably will need to debug a lot
    if (this.props.currentUser) { // if Meteor has started up
      let songs = this.props.songs;
      // if the song is private and you're not the owner, filter out that song
      let filteredSongs = songs.filter(song => { // map and filter are super similar, though map will return null objects so beware. Filter will 'filter' them out
        // if the privacyFilter is set to false
        if (!this.state.privacyFilter) {
          if (song.isPrivate === false || song.submitter === this.props.currentUser._id) {
            return song;
          }
        }
        else { // privacyFilter is set to true
          if (song.isPrivate === true && song.submitter === this.props.currentUser._id) {
            return song;
          }
        }
      });
      return filteredSongs;
    }
    else {
      return [];
    }
  }

  render() {
    return (
      <div>
        <Navbar
          title="Song Share"
          currentUser={this.props.currentUser} />
        <OptionBar
          toggleAllPrivacy={this.toggleAllPrivacy}
          checked={this.state.privacyFilter}/>
        <LoginModal />
        <SongModal
          onSubmit={this.handleSubmit}
          onArtistChange={this.handleArtistChange}
          onDescriptionChange={this.handleDescriptionChange}
          onUrlChange={this.handleUrlChange}
          artist={this.state.artist}
          description={this.state.description}
          url={this.state.url}
        />
        <SongWrapper
          songs={this.renderSongs()}
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
