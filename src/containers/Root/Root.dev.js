import has from 'lodash/has';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import DevTools from '../DevTools/DevTools';
import GoogleAnalytics from 'react-ga';
import App from '../App/App';

class Root extends Component {
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
    const { store, routes, type, renderProps, location } = this.props;
    const context = {};

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
          <DevTools />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  location: PropTypes.string,
  renderProps: PropTypes.object
};

export default Root;
