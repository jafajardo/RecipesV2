import { combineReducers } from 'redux';
import RecipesReducer from './reducer_recipes';

export default combineReducers({
  recipes: RecipesReducer
});