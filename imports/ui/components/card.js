import React, { PropTypes } from 'react';
import Switch from './switch';
import { Meteor } from 'meteor/meteor';

const Card = (props) => {
  const { artist, description, submitter, onDeleteSong } = props;
  const profileImageLink = Meteor.users.findOne({ _id: `${submitter}` }) &&
                           Meteor.users.findOne({ _id: `${submitter}` })
                           .profile.profileImageLink;
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">{artist}</span>
        {Meteor.userId() === submitter
          ? <button
            className="waves-effect red lighten-1 waves-light btn-flat white-text"
            onClick={onDeleteSong}>
              Delete
            </button>
          : ''
        }
        <p>{description}</p>
      </div>
      <div className="center-align card-action">
        <div className="right-align chip">
          <img src={profileImageLink} alt="Profile Image" />
            { Meteor.users.findOne({ _id: `${submitter}` }) &&
              Meteor.users.findOne({ _id: `${submitter}` }).profile.firstName}
        </div>
      <Switch />
      </div>
    </div>
  )
}

Card.PropTypes = {
  artist: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  submitter: PropTypes.string.isRequired
}

module.exports = Card;
