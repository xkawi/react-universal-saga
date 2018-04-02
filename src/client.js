import React from 'react';
import { render } from 'react-dom';
import GoogleAnalytics from 'react-ga';

import { Root } from 'containers';
import rootSaga from './sagas';
import routes from './routes';
import { history } from './services';
import configureStore from './store/configureStore';
import config from './config';

const dest = document.getElementById('content');
const store = configureStore(window.__data); // eslint-disable-line

GoogleAnalytics.initialize(config.app.googleAnalytics.appId);

store.runSaga(rootSaga);

render(
  <Root
    store={store}
    history={history}
    routes={routes}
  />,
  dest
);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger
}
