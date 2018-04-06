import React from 'react';
import App from './../components/App.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

var AppContainer = (component) => {
  return connect(null, mapDispatchToProps)(component)
};

const mapDispatchToProps = { handleSearchInputChange: handleSearchChange };

export default AppContainer(App);