import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import StateConnection from '../HOCs/stateConnection';

class RecipesShowSuggest extends Component {
  retrieveUniqueCategories() {
    let categories = [];
    this.props.all_recipes.forEach((recipe) => {
      categories = _.union(categories, recipe.category);
    });

    return categories;
  }

  addCategorySelection(event) {
    const { selected_categories, updateSelectedCategories, removeSelectedCategory } = this.props;

    if (selected_categories.includes(event.target.value)) {
      // Value exists, remove from Array.
      removeSelectedCategory(event.target.value);
    } else {
      // Add into Array.
      updateSelectedCategories(event.target.value);
    }
  }

  renderCategorySelections() {
    const categories = this.retrieveUniqueCategories();
    
    return (
      categories.map((category) => {
        return (
          <div className="col-md" key={ category }>
            <div>
              <label><input onChange={ this.addCategorySelection.bind(this) } type="checkbox" value={ category } />{ category }</label>
            </div>
          </div>
        );
      })
    );
  }

  filterRecipesTop5() {
    const { all_recipes, selected_categories } = this.props;
    const recipes = all_recipes;
    
    // Filter Recipes on Category
    // const filteredOnCategory = all_recipes.filter((recipe) => {
    //   return selected_categories.some((keyword) => {
    //     return recipe.category.some((category) => {
    //       return keyword === category;
    //     })
    //   })
    // });

    const filteredRecipes = [];
    // Add weight to each recipe.
    recipes.forEach(recipe => {
      selected_categories.forEach(category => {
        if (recipe.category.includes(category)) {
          if (recipe.weight) {
            recipe.weight++;
          } else {
            recipe.weight = 1;
          }
        }
      });

      if (recipe.weight) {
        filteredRecipes.push(recipe);
      }
    });

    // Sort recipes by weight
    filteredRecipes.sort((a,b) => a.weight < b.weight);

    //TODO: Take only the top 5 recipes from filtered recipes.
    return filteredRecipes.slice(0, 5);
    //return filteredOnCategory.slice(0, 5);
  }

  renderRecipesSuggestions() {  
    return ( 
      this.filterRecipesTop5().map((recipe) => {
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
    );
  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h3>Select all categories that fancies your taste buds</h3>
          <hr />
        </div>
        <div className="row">
          { this.renderCategorySelections() }
        </div>
        <hr />
        <div className="card-deck">
          { this.renderRecipesSuggestions() }
        </div>
      </div>
    );
  }
}

export default StateConnection(RecipesShowSuggest);