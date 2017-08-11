import React, { Component } from 'react';
import { Link } from 'react-router';

class RecipesSuggest extends Component {
  render() {
    return (
      <section id="index-suggest" className="page-section call-to-action" style={{ backgroundImage: "url('../../assets/images/Create-Meals.jpg')" }}>
        <div className="container h-100">
          <div className="d-flex align-items-center flex-row h-100">
            <div className="text-center text-white w-100">
              <h2>Go ahead and plan for your meals for the whole week</h2>
              <Link to='/suggest' className="btn btn-outline-secondary btn-create-meals">Create Meals</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RecipesSuggest;