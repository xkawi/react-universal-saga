import React from 'react';
import { Route } from 'react-router';
import {
  App,
  NotFound,
  UserPage,
  RepoPage
} from 'containers';

/**
 * currently, "store" variable is unused
 * might need to use once auth flow is implemented
 * NOTE: eslint suggested that, if we use arrow function with curly braces,
 * the body must be more than 1 line (http://eslint.org/docs/rules/arrow-body-style);
 */

export default (store) => {
  // eslint-disable-next-line no-unused-vars
  const requireLogin = (nextState, replace, cb) => {
    function checkAuth() {
      const { auth: { isAuthenticated } } = store.getState();
      if (!isAuthenticated) {
        // oops, not logged in, so can't be here!
        replace('/');
      }
      cb();
    }
    // Optimization: if already login, try to refresh
    checkAuth();
    // if (!isAuthLoaded(store.getState())) {
    //   store.dispatch(loadAuth()).then(checkAuth);
    // } else {
    // }
  };

  return (
    <Route path="/" component={App}>
      <Route path="/:login" component={UserPage} />
      <Route path="/:login/:name" component={RepoPage} />
      <Route path="/404" component={NotFound} />
      <Route path="*" component={NotFound} />
    </Route>
  );
};
