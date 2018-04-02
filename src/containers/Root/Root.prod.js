import has from 'lodash/has';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import GoogleAnalytics from 'react-ga';
import App from '../App/App';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate() {
    const { store, type } = this.props;
    if (type !== 'server') {
      const state = store.getState();
      if (has(state, 'router.pathname')) {
        GoogleAnalytics.pageview(state.router.pathname);
      }
    }
  }
  render() {
    const { store, routes, type, renderProps } = this.props;
    return (
      <Provider store={store}>
        <div>
          {type === 'server'
            ? <StaticRouter {...renderProps} location={location} context={context}>
              <App routes={routes} />
            </StaticRouter>
            : <BrowserRouter>
              <App routes={routes} />
            </BrowserRouter>}
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
  type: PropTypes.object,
  renderProps: PropTypes.object
};
