import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
// import { $ } from 'meteor/jquery';
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';
import Navbar from '../components/navbar';
import SongModal from '../components/songModal';
import SongWrapper from '../components/songWrapper';
import OptionBar from '../components/optionBar';

export default class AppContainer extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar title="Song Share"/>
        <OptionBar />
        <SongModal />
        <SongWrapper />
      </div>
    )
  }
}

// Materialize jQuery
$(document).ready(function() {
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});
