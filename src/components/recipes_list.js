import React, { Component } from 'react';
import { Link } from 'react-router';
import StateConnection from '../HOCs/stateConnection';

class RecipesList extends Component {
  componentWillMount() {
    this.props.fetchRecipes();
  }

  renderRecipesList() {
    return this.props.all_recipes.map((recipe) => {
      return (
        <Link to={`recipes?rid=${recipe._id}`} key={ recipe._id }>
          <li className="list-group-item">
            <img className="img-rounded" width="180" height="130" alt="thumbnail_image" src={ recipe.img } />
            <div className="pull-xs-right">
              <strong>{ recipe.title }</strong>
              <p className="font-italic">{ recipe.category.join(', ') }</p>
            </div>
          </li>
        </Link>
      );
    })
  }

  retrieveFeaturedRecipes() {
    let featuredRecipes = [];

    if (this.props.all_recipes.length <= 3) {
      featuredRecipes = this.props.all_recipes;
    } else {
      let count = 0;
      while (count < 3) {
        const ran = Math.floor(Math.random() * this.props.all_recipes.length);

        if (featuredRecipes.every(recipe => { return recipe._id !== this.props.all_recipes[ran]._id; })) {
          featuredRecipes.push(this.props.all_recipes[ran]);
          count++;
        }
      }
    }
    
    return featuredRecipes;
  }

  renderRecipesColumns() {
    const featuredRecipes = this.retrieveFeaturedRecipes();

    return featuredRecipes.map(recipe => {
      return (
        <Link to={ `recipes?rid=${ recipe._id }` } key={recipe._id}>
          <div className="col-md">
            <div>
              <img src={ recipe.img } alt={ recipe.title } width="350" height="275"/>
            </div>
          </div>
        </Link>
      );
    });
  }

  render() {
    return (
      <section id="index-featured" className="page-section">
        <div className="container">
          <div className="text-center">
            <h2>Featured Recipes</h2>
            <hr />
            <p>Take a peek at our scrumptious featured recipes that will elevate your dining experience.</p>
          </div>
          <div className="row">
            { this.renderRecipesColumns() }
          </div>
        </div>
      </section>
    );
  }
}

export default StateConnection(RecipesList);