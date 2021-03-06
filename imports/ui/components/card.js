import React, { Component, PropTypes } from 'react';
import Switch from './switch';
import VideoContainer from './videoContainer';
import { Meteor } from 'meteor/meteor';
import { Songs } from '../../api/songs';

export default class Card extends Component {
  static propTypes = {
    artist: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    submitter: PropTypes.string.isRequired
  }

  handleDeleteSong = (event) => {
    event.preventDefault();
    const song_id = this.props.song._id;
    Meteor.call('songs.delete', song_id);
  }

  togglePrivacy = () => {
    const song_id = this.props.song._id;
    const song_privacy = Songs.findOne({_id: this.props.song._id}).isPrivate;
    if (song_privacy === false) {
      // Songs.update({_id: song_id}, {$set: {isPrivate: true}})
      Meteor.call('songs.togglePrivate', song_id, true);
    } else {
      // Songs.update({_id: song_id}, {$set: {isPrivate: false}})
      Meteor.call('songs.togglePrivate', song_id, false);
    }
  }

  render() {
    const { artist, description, submitter, onDeleteSong, url } = this.props;
    const profileImageLink = Meteor.users.findOne({ _id: `${submitter}` }) && Meteor.users.findOne({ _id: `${submitter}` }).profile.profileImageLink;
    return (
      <div className="col s12 m6 l6">

        <VideoContainer url={url}/>

        <div className="z-depth-2 card">
          <div className="card-content">
            <span className="card-title">{artist}</span>
            {Meteor.userId() === submitter
              ? <button
                  className="waves-effect red lighten-1 waves-light btn-flat white-text"
                  onClick={this.handleDeleteSong}>
                  Delete
                </button>
              : ''
            }
            <p>{description}</p>
          </div>
          <div className="center-align card-action">
            <div className="right-align chip">
              <img src={profileImageLink} alt="Profile Image" />
              {Meteor.users.findOne({ _id: `${submitter}` }) &&
               Meteor.users.findOne({ _id: `${submitter}` }).profile.firstName}
            </div>
            {Meteor.userId() === submitter
              ? <Switch
                  togglePrivacy={this.togglePrivacy}
                  checked={this.props.checked}
               />
              : ''
            }
          </div>
        </div>
      </div>
    )
  }
}
