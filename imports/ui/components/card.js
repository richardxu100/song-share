import React, { PropTypes } from 'react';
import Switch from './switch';
import { Meteor } from 'meteor/meteor';

const Card = (props) => {
  const { artist, description, submitter } = props;
  const profileImageLink = Meteor.users.findOne({ _id: `${submitter}` }) &&
                           Meteor.users.findOne({ _id: `${submitter}` })
                           .profile.profileImageLink;
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">{artist}</span>
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

}

module.exports = Card;
