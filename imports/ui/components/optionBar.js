import React, { PropTypes } from 'react';
import Switch from './switch';

const OptionBar = ({ toggleAllPrivacy }) => {
  return (
    <div className="center-align">
      <Switch
        togglePrivacy={toggleAllPrivacy}
      />
    </div>
  )
}

OptionBar.PropTypes = {
  toggleAllPrivacy: PropTypes.func.isRequired
}

module.exports = OptionBar;
