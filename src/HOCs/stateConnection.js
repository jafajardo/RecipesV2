import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export default (ComposedComponent) => {
  class StateConnection extends Component {
    render () {
      return (
        <ComposedComponent 
          {...this.props}
          {...this.state}
        />
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      all_recipes: state.recipes.all_recipes,
      search_keyword: state.recipes.search_keyword,
      selected_categories: state.recipes.selected_categories
    }
  }

  return connect(mapStateToProps, actions)(StateConnection);
}