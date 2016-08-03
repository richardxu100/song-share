import React from 'react';
import ReactRouter, { Router, Route, hashHistory, IndexRoute } from 'react-router';
// import MainLayout from '../ui/layouts/mainLayout';
import SongContainer from '../containers/SongContainer.jsx';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={SongContainer} />
  </Router>
)

module.exports = routes;
