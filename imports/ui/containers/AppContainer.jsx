import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import Navbar from '../components/navbar';
import SongModal from '../components/songModal';
import SongWrapper from '../components/songWrapper';

export default class AppContainer extends Component {
  static propTypes = {

  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <SongModal />
        <SongWrapper />
      </div>
    )
  }
}
