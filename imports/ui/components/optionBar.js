import React, { PropTypes } from 'react';
import Switch from './switch';

const OptionBar = (props) => {
  return (
    <div className="center-align">
      <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Add a Song</a>
      <Switch />
    </div>
  )
}

OptionBar.PropTypes = {

}

module.exports = OptionBar;
