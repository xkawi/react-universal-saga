import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Switch, Route } from 'react-router';
// import routes from '../../routes';
import { Explore } from 'components';

import {
  navigate,
  updateRouterState,
  resetErrorMessage
} from '../../actions';
import styles from './App.scss'; // eslint-disable-line

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    // this.props.updateRouterState({
    //   pathname: this.props.location.pathname,
    //   params: this.props.params
    // });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errorMessage) {
      // handle error here
    }
    // if (this.props.location.pathname !== nextProps.location.pathname) {
    //   this.props.updateRouterState({
    //     pathname: nextProps.location.pathname,
    //     params: nextProps.params
    //   });
    // }
  }

  handleDismissClick(e) {
    this.props.resetErrorMessage();
    e.preventDefault();
  }

  handleChange(nextValue) {
    this.props.navigate(`/${nextValue}`);
  }

  renderRoutes() {
    return (
      <Switch>
        {this.props.routes.map((route, i) => <Route key={i} {...route} />)}
      </Switch>
    );
  }

  render() {
    const { inputValue } = this.props;
    return (
      <div className={styles.app}>
        <Helmet
          title="React Universal Saga"
          meta={[{ property: 'og:site_name', content: 'React Universal Saga' }]}
        />
        <Explore value={inputValue} onChange={this.handleChange} />
        {this.renderRoutes()}
      </div>
    );
  }
}

App.propTypes = {
  errorMessage: PropTypes.string,
  inputValue: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  updateRouterState: PropTypes.func.isRequired,
  resetErrorMessage: PropTypes.func.isRequired,
  params: PropTypes.object,
  routes: PropTypes.array
};

// function preload() {
//   return [
//     [sagaName]
//   ];
// }
// App.preload = preload;

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage,
    inputValue: state.router.pathname.substring(1)
  };
}

export default connect(mapStateToProps, {
  navigate,
  updateRouterState,
  resetErrorMessage
})(App);
