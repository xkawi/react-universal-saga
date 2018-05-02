import React from 'react';
import { Route } from 'react-router';
import {
  App,
  NotFound,
  UserPage,
  RepoPage
} from 'containers';

export default () => {
  const routes = (
    <Route path="/" component={App}>
      <Route path="/:login" component={UserPage} />
      <Route path="/:login/:name" component={RepoPage} />
      <Route path="/404" component={NotFound} />
      <Route path="*" component={NotFound} />
    </Route>
  );
  return routes;
};
