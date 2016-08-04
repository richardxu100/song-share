import React, { PropTypes } from 'react';

const Switch = (props) => {
  return (
    <span className="switch">
      <label>
        Public
        <input
          type="checkbox"
          onChange={props.togglePrivacy}
          checked={props.checked}/>
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
