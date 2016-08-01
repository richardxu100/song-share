import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import AppContainer from '../imports/ui/containers/AppContainer.jsx';

Meteor.startup(() => {
  render(<AppContainer />, document.getElementById('app'));
});
