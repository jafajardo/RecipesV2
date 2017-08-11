import React, { Component } from 'react';
import StateConnection from '../HOCs/stateConnection';

class RecipesShow extends Component {
  componentWillMount() {
    this.props.fetchRecipes();
  }

  renderIngredients(selectedRecipe) {
    return selectedRecipe.ingredients.map((ingredient, index) => {
      return <li className="list-circle" key={index}>{ingredient}</li>
    });
  }

  renderDirections(selectedRecipe) {
    return selectedRecipe.directions.map((direction, index) => {
      return <li key={index}>{direction}</li>
    });
  }

  renderRecipe() {
    let selectedRecipe = {};
    this.props.all_recipes.forEach((recipe) => {
      if (recipe._id === this.props.location.query.rid) {
        selectedRecipe = recipe;
      }
    });

    if (!selectedRecipe) {
      return <div>Loading...</div>
    }

    return (
      <section className="recipe-section">
        <div className="container">

          <div className="recipe-show">
            <div className="row">
              <div className="col-md-8 recipe-hero">
                <img className="img-fluid recipe-img" src={ selectedRecipe.img } alt={ selectedRecipe.title } />
              </div>
              <div className="col-md-4 d-flex align-items-center flex-row">
                <div className="w-100">
                  <h1 className="text-center">{selectedRecipe.title}</h1>
                </div>
              </div>
            </div>
          </div>
          
          <div className="how-to-cook">
            <div className="card-deck">

              <div className="card">
                <div className="card-block">
                  <h3 className="card-title">Ingredients</h3>
                    <div>
                      {this.renderIngredients(selectedRecipe)}
                    </div>
                </div>
              </div>

              <div className="card">
                <div className="card-block">
                  <h3 className="card-title">Directions</h3>
                    <ol className="direction-list">
                      {this.renderDirections(selectedRecipe)}
                    </ol>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    );
  }

  render() {
    return (
      <div>
        { this.renderRecipe() }
      </div>
    );
  }
}

export default StateConnection(RecipesShow);