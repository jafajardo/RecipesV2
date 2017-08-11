import React from 'react';
import { Router, browserHistory } from 'react-router';

import App from './components/app';
import RecipesIndex from './components/recipes_index';

const loadModule = (cb) => {
  return module => cb(null, module.default);
}

const componentRoutes = {
  component: App,
  path: '/',
  indexRoute: { component: RecipesIndex },
  childRoutes: [
    {
      path: '/recipes',
      getComponent(location, cb) {
        System.import('./components/recipes_show.js')
          .then(loadModule(cb));
      }
    },
    {
      path: '/search',
      getComponent(location, cb) {
        System.import('./components/recipes_show_search.js')
          .then(loadModule(cb));
      }
    },
    {
      path: '/suggest',
      getComponent(location, cb) {
        System.import('./components/recipes_show_suggest')
          .then(loadModule(cb));
      }
    }
  ]
}

const Routes = () => {
  return (
    <Router history={browserHistory} routes={componentRoutes} />
  );
}

export default Routes;