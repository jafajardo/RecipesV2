import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import StateConnection from '../HOCs/stateConnection';

class RecipesShowSearch extends Component {
  filterRecipes() {
    const { all_recipes, search_keyword } = this.props;
    const keywords = search_keyword.split(/[\s,]+/);
    
    let filtered = [];
    
    // Filter Recipes on Title
    const filteredOnTitle = all_recipes.filter((recipe) => {
      return keywords.some((keyword) => {
        return recipe.title.toLowerCase().includes(keyword.toLowerCase());
      })
    });

    // Filter Recipes on Category
    const filteredOnCategory = all_recipes.filter((recipe) => {
      return keywords.some((keyword) => {
        return recipe.category.some((category) => {
          return keyword.toLowerCase() === category.toLowerCase();
        })
      })
    });

    filtered = _.union(filteredOnTitle, filteredOnCategory);

    return filtered;
  }

  renderFilteredRecipes() {
    const filteredRecipes = this.filterRecipes();

    return filteredRecipes.map((recipe) => {
      return (
        <div className="card m-3" key={recipe._id}>
          <img className="card-img-top img-fluid" src={ recipe.img } alt={recipe.title} />
          <div className="card-block text-center">
            <h5 className="card-title">{recipe.title}</h5>
            <p className="font-italic">{recipe.category.join(', ')}</p>
            <Link className="btn btn-secondary" to={ `recipes?rid=${recipe._id}` } key={ recipe._id }>
              View Recipe
            </Link>
          </div>
        </div>
      );
    })
  }

  render() {
    return (
      <section className="search-result">
        <div className="container">
          <div className="card-deck">
            { this.renderFilteredRecipes() }
          </div>
        </div>
      </section>
    );
  }
}

export default StateConnection(RecipesShowSearch);