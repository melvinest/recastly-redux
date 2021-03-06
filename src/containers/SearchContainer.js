import React from 'react';
import Search from './../components/Search.js';
import { connect } from 'react-redux';
import handleSearchChange from '../actions/search.js';

var SearchContainer = (component) => {
  return connect(null, mapDispatchToProps)(component)
};

const mapStateToProps = (dispatch) => {
  return {
    getYouTubeVideos: (query) => {dispatch(handleSearchChange(query))}
  };
};

const mapDispatchToProps = { handleSearchInputChange: handleSearchChange };

export default SearchContainer(Search);