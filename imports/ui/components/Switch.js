import React, { PropTypes } from 'react';

const Switch = ({ togglePrivacy, checked }) => {
  return (
    <span className="switch">
      <label>
        Public
        <input
          type="checkbox"
          onChange={togglePrivacy}
          checked={checked}/>
        <span className="lever"></span>
        Private
      </label>
    </span>
  )
}

Switch.PropTypes = {
  togglePrivacy: PropTypes.func,
  checked: PropTypes.bool.isRequired
}

module.exports = Switch;
