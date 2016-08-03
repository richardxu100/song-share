import React, { PropTypes } from 'react';
import Switch from './switch';
import { Meteor } from 'meteor/meteor';

const Card = (props) => {
  console.log(Meteor.user());
  const { artist, description, submitter, profileImageLink } = props;
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-title">{artist}</span>
        <p>{description}</p>
      </div>
      <div className="center-align card-action">
        <div className="right-align chip">
          <img src="http://i.dailymail.co.uk/i/pix/2016/05/18/15/3455092D00000578-3596928-image-a-20_1463582580468.jpg" alt="Contact Person" />
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
