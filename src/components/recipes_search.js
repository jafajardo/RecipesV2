import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StateConnection from '../HOCs/stateConnection';

class RecipesSearch extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(event) {
    event.preventDefault();
    this.context.router.push('/search');
  }

  onInputChange(event) {
    this.props.updateSearchKeyword(event.target.value.toLowerCase());
  }

  render() {
    return (
      <section id="index-search">
        <div className="container h-100">
          <div className="d-flex align-items-center flex-row h-100">
            <div className="text-center w-100">
              <h2>Search Recipes</h2> 
              <hr />
              <p>Search for fresh recipes that will inspire your day.</p>

              <form className="input-group" onSubmit={ this.onSubmit.bind(this) }>
                <input className="form-control" placeholder="Search Recipes" onChange={ this.onInputChange.bind(this) } />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-primary btn-search-recipe">Search</button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default StateConnection(RecipesSearch);