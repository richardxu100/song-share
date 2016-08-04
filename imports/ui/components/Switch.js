import React, { PropTypes } from 'react';

const Switch = (props) => {
  return (
    <span className="switch">
      <label>
        Public
        <input
          type="checkbox"
          onChange={props.togglePrivacy} />
        <span className="lever"></span>
        Private
      </label>
    </span>
  )
}

Switch.PropTypes = {
  togglePrivacy: PropTypes.func
}

module.exports = Switch;
