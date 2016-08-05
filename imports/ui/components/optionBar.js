import React, { PropTypes } from 'react';
import Switch from './switch';

const OptionBar = (props) => {
  return (
    <div className="center-align">
      <Switch
        togglePrivacy={props.toggleAllPrivacy}
      />
    </div>
  )
}

OptionBar.PropTypes = {
  toggleAllPrivacy: PropTypes.func.isRequired
}

module.exports = OptionBar;
