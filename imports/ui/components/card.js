import React, { Component, PropTypes } from 'react';
import Switch from './switch';
import VideoContainer from './videoContainer';
import { Meteor } from 'meteor/meteor';
import { Songs } from '../../api/songs';

export default class Card extends Component {

  handleDeleteSong = (event) => {
    event.preventDefault();
    console.log(this);
    const song_id = this.props.song._id;
    Songs.remove(song_id);
  }

  togglePrivacy = () => {
    const song_id = this.props.song._id;
    const song_privacy = Songs.findOne({_id: this.props.song._id}).privacy;
    if (song_privacy === 'public') {
      Songs.update({_id: song_id}, {$set: {privacy: 'private'}})
    } else {
      Songs.update({_id: song_id}, {$set: {privacy: 'public'}})
    }
  }

  render() {
    const { artist, description, submitter, onDeleteSong, URL } = this.props;
    const profileImageLink = Meteor.users.findOne({ _id: `${submitter}` }) && Meteor.users.findOne({ _id: `${submitter}` }).profile.profileImageLink;
    return (
      <div className="col s12 m6 l6">

        <VideoContainer URL={URL}/>

        <div className="card">
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
          <Switch
            togglePrivacy={this.togglePrivacy}
          />
          </div>
        </div>
      </div>
    )
  }
}

Card.PropTypes = {
  artist: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  submitter: PropTypes.string.isRequired
}

module.exports = Card;
