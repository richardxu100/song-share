import React from 'react';

const Switch = (props) => {
  return (
    <span className="switch">
      <label>
        Public
        <input type="checkbox" />
        <span className="lever"></span>
        Private
      </label>
    </span>
  )
}

module.exports = Switch;
