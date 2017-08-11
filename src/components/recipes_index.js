import React from 'react';
import RecipesHeader from './recipes_header';
import RecipesSearch from './recipes_search';
import RecipesSuggest from './recipes_suggest';
import RecipesList from './recipes_list';

function RecipesIndex(props) {
  return (
    <div>
      <RecipesHeader />
      <RecipesSearch />
      <RecipesSuggest />
      <RecipesList />
    </div>
  );
}

export default RecipesIndex;