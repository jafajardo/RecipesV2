const Recipes = require('./controllers/recipes');

module.exports = function(app) {
  app.get('/getRecipes', Recipes.getRecipes);
}