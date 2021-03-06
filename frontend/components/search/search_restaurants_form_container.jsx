import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchRestaurants, searchSuggestions } from '../../actions/search_actions';
import SearchRestaurantsForm from './search_restaurants_form';

const mapStateToProps = (state, ownProps) => {
  return {
    suggestionList: state.entities.searches.suggestions
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchRestaurants: (name) => dispatch(searchRestaurants(name)),
    searchSuggestions: () =>
      dispatch(searchSuggestions()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchRestaurantsForm));
