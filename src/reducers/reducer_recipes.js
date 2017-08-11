import { 
  FETCH_RECIPES, 
  UPDATE_SEARCH_KEYWORD,
  UPDATE_SELECTED_CATEGORIES,
  REMOVE_SELECTED_CATEGORY 
} from '../actions/types.js';

const INITIAL_STATE = {
  all_recipes: [],
  search_keyword: '',
  selected_categories: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_RECIPES: {
      return { ...state, all_recipes: action.payload }
    }
    case UPDATE_SEARCH_KEYWORD: {
      return { ...state, search_keyword: action.payload }
    }
    case UPDATE_SELECTED_CATEGORIES: {
      return { ...state, selected_categories: [ ...state.selected_categories, action.payload ] }
    }
    case REMOVE_SELECTED_CATEGORY: {
      const index = state.selected_categories.indexOf(action.payload);
      return { ...state, selected_categories: [ ...state.selected_categories.slice(0, index), ...state.selected_categories.splice(index + 1) ] }
    }
    default:
      return state;
  }
}