
# React Universal Saga

[![React Universal Saga Version](https://img.shields.io/npm/v/react-universal-saga.svg?maxAge=2592000)](https://img.shields.io/npm/dm/react-universal-saga.svg?maxAge=2592000)
[![Downloads](https://img.shields.io/npm/dm/react-universal-saga.svg?maxAge=2592000)](https://img.shields.io/npm/dm/react-universal-saga.svg?maxAge=2592000)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/xkawi/react-universal-saga/master/LICENSE)


[![Build Status](https://travis-ci.org/xkawi/react-universal-saga.svg?branch=master)](https://travis-ci.org/xkawi/react-universal-saga)
[![Dependency Status](https://david-dm.org/xkawi/react-universal-saga.svg)](https://david-dm.org/xkawi/react-universal-saga)
[![devDependency Status](https://david-dm.org/xkawi/react-universal-saga/dev-status.svg)](https://david-dm.org/xkawi/react-universal-saga#info=devDependencies)

---

## Getting Started

Universal React App Starter featuring Redux Saga. Heavily modified version of [React Redux Universal Hot Example](https://github.com/erikras/react-redux-universal-hot-example) combined with Redux Saga [real-world](https://github.com/yelouafi/redux-saga/tree/master/examples/real-world) example.

`$ git clone https://github.com/xkawi/react-universal-saga`

`$ cd react-universal-saga && npm install`

`$ npm run dev` (run in development mode)

Live Demo: [react-universal-saga.herokuapp.com](https://react-universal-saga.herokuapp.com)

UPDATE: Checkout [react-universal-saga-modular](https://github.com/xkawi/react-universal-saga-modular) for a different structure of react-universal-saga that's more modular, scalable, and maintainable. :smile:

## Features

* [Universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) rendering, with Client and Server Side Data Fetching
* [React](https://github.com/facebook/react) - latest version `^15.4.2`
* [Redux](https://github.com/rackt/redux)'s futuristic [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation
* [Redux Saga](https://github.com/yelouafi/redux-saga) to handle all of your Side Effects logic in a central place
* [React Router](https://github.com/ReactTraining/react-router/tree/v2.8.1)
* [Express](http://expressjs.com)
* [Babel](http://babeljs.io) for ES6 and ES7 magic
* [Webpack](http://webpack.github.io) for bundling
* [Webpack Dev Middleware](http://webpack.github.io/docs/webpack-dev-middleware.html)
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
* [Redux Dev Tools](https://github.com/gaearon/redux-devtools) for next generation DX (developer experience). Watch [Dan Abramov's talk](https://www.youtube.com/watch?v=xsSnOQynTHs).
* [ESLint](http://eslint.org) to maintain a consistent code style
* [redux-form](https://github.com/erikras/redux-form) to manage form state in Redux
* [PostCSS](https://github.com/postcss/postcss-loader), [style-loader](https://github.com/webpack/style-loader), [sass-loader](https://github.com/jtangelder/sass-loader) and [less-loader](https://github.com/webpack/less-loader) to allow import of stylesheets in plain css, sass and less,
* [bootstrap-loader](https://github.com/shakacode/bootstrap-loader) and [font-awesome-webpack](https://github.com/gowravshekar/font-awesome-webpack) to customize Bootstrap and FontAwesome
* [react-helmet](https://github.com/nfl/react-helmet) to manage title and meta tag information on both server and client
* [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools) to allow require() work for statics both on client and server
* [Jest](https://facebook.github.io/jest/) to allow writing unit tests for the project.
* Refer to `package.json` for more details

## New to React?

Core Concepts to learn if you are new to ReactJS and this repo:

- Dumb Components (Component) 
- Smart Component (Container)
- Actions - define available action types
- Reducers - given previous state and an action, create a new state
- Sagas - manage or orchestrate event/action dispatching flow (called Side Effects)

### Crash Course on React, Redux, and Redux Saga

1. [Hands-on] [Get started with ReactJS](https://facebook.github.io/react/docs/tutorial.html)

2. [Reading] [Thinking in React way](https://facebook.github.io/react/docs/thinking-in-react.html)

3. [Reading] [Flux Pattern](https://code-cartoons.com/a-cartoon-guide-to-flux-6157355ab207#3c82)
[(video)](https://www.youtube.com/watch?v=nYkdrAPrdcw&feature=youtu.be)

4. [Hand-on] [Flux](https://facebook.github.io/flux/docs/todo-list.html)

5. [Reading] [Why someone created a tool called Redux](https://code-cartoons.com/hot-reloading-and-time-travel-debugging-what-are-they-3c8ed2812f35)

6. [Reading] [More about Redux](https://code-cartoons.com/a-cartoon-intro-to-redux-3afb775501a6)

7. [Hands-on] [Getting started with Redux](https://egghead.io/series/getting-started-with-redux)

8. [Hands-on] [More comprehensive hands-on with Redux and React](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html)

9. [Reading] [Redux best practices](https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e#.v34syy9ia)

10. [Reading + Hands-on] [Redux Saga](http://yelouafi.github.io/redux-saga/)

11. Everything - [Awesome Redux](https://github.com/xgrommx/awesome-redux)

## Development Workflow

Here is a suggested development workflow that works for me:

1. Define the routes, which helps to reason about the needed containers and components.

2. Implement dump components + props (state and actions).
	* Each component should define `.propTypes` for prop's validation, which will throw a warning if the container that uses it do not provides all the props that the component need.
	
3. Often, a container = a route page; a container is also where you import necessary components, actions and states (pass down to component) to form a single page.
	* if a container wants to "pre-populate" data during server rendering process, assign `Container.preload` with sagas that fetches necessary data from the API server. (refer to `containers/App.js` for an example)

4. Implement necessary Actions as you define needed containers and components (PS: this implementation is independent from previous steps). It often helps maintainability and readability if action methods are categorized into 2:
    * Actions that manipulate store directly through reducers (e.g. `actions/index.js > createRequestTypes` method), often to update the state and trigger re-render the components. 
    * "LOAD" or "TRIGGER" actions for starting a saga routine/daemon, often to make network call.

5. Implement Reducers. As you implemented the actions, you will have better idea on how to modify the states for different actions. 

### Using Redux DevTools

[Redux Devtools](https://github.com/gaearon/redux-devtools) are enabled by default in development.

- <kbd>CTRL</kbd>+<kbd>H</kbd> Toggle DevTools Dock
- <kbd>CTRL</kbd>+<kbd>Q</kbd> Move DevTools Dock Position
- see [redux-devtools-dock-monitor](https://github.com/gaearon/redux-devtools-dock-monitor) for more detailed information.

If you have the
[Redux DevTools chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) installed it will automatically be used on the client-side instead.

If you want to disable the dev tools during development, set `__DEVTOOLS__` to `false` in `/webpack/dev.config.js`.
DevTools are not enabled during production.

## Deployment

`$ npm run build`

`$ npm run start`

## How Everything Works?

What initially gets run is `bin/server.js`, which does little more than enable ES6 and ES7 awesomeness in the
server-side node code. It then initiates `server.js`. In `server.js` we perform data fetching using Redux Saga ([details](https://github.com/yelouafi/redux-saga/issues/13#ref-commit-3e8321c)). Aside from serving the favicon and static content from `/static`, the only thing `server.js` does is initiate delegate rendering to `react-router`. At the bottom of `server.js`, we listen to port `3000` and initiate the API server.

### Routing and HTML return

The primary section of `server.js` generates an HTML page with the contents returned by `react-router`. Then we perform [server-side data fetching](#server-side-data-fetching), wait for the data to be loaded, and render the page with the now-fully-loaded `redux` state.

The last interesting bit of the main routing section of `server.js` is that we swap in the hashed script and css from the `webpack-assets.json` that the Webpack Dev Server – or the Webpack build process on production – has spit out on its last run. You won't have to deal with `webpack-assets.json` manually because [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools) take care of that.

We also spit out the `redux` state into a global `window.__data` variable in the webpage to be loaded by the client-side `redux` code.

### Server-side Data Fetching

The [redux-saga](https://github.com/yelouafi/redux-saga) provides a mechanism for server-side data fetching from the actual backend API servers/services, when it reaches client-side (React) there is no need to do additional network call. You have to define the Sagas that a container need (refers to `containers/UserPage.js > UserPage.preload` for example) for server-side to fetch. PS: You have the flexibility to implement additional logic (e.g. handle authentication) when fetching data at server-side rendering stage, as it differs from client-side. 

### Client Side

The client side entry point is reasonably named `client.js`. All it does is load the routes, initiate `react-router`, rehydrate the redux state from the `window.__data` passed in from the server, and render the page over top of the server-rendered DOM. This makes React enable all its event listeners without having to re-render the DOM.

### Redux Middleware

Currently, we only use Saga Middleware and Logger Middleware (for development). If you need to use or add custom middlewares, you can do so by modifying `store/configureStore.dev.js` (for dev env) or `store/configureStore.prod.js` (for prod env).

### Handling Authentication

If you want to implement authentication/authorization feature, follow this issue posted on redux-saga repo - [Question: Authentication flow](https://github.com/yelouafi/redux-saga/issues/14) - it is my main source of reference.

### Unit Tests

The project uses [Jest](https://facebook.github.io/jest) to run your unit tests and the [Test Utilities](http://facebook.github.io/react/docs/test-utils.html) from Facebook api.

An example is available at `components > User`.

To run the tests in the project, just simply run `npm test`.

## Styling

### Local Styles

This project uses [local styles](https://medium.com/seek-ui-engineering/the-end-of-global-css-90d2a4a06284) using [css-loader](https://github.com/webpack/css-loader). The way it works is that you import your stylesheet at the top of the `render()` function in your React Component, and then you use the classnames returned from that import. Like so:

`render() { const styles = require('./App.scss'); }`

Then you set the `className` of your element to match one of the CSS classes in your SCSS file, and you're good to go!

`<div className={styles.mySection}> ... </div>`

### Global Style Variables

`react-universal-saga` support global style variables by defining the variable in `theme/style.scss`. Once defined, you can use in any scss file so long it is imported (refer to `RepoPage.scss` for example). 

## Notable Alternatives

* [Next.js](https://github.com/zeit/next.js)
* [create-react-app](https://github.com/facebookincubator/create-react-app)
* [react-universally](https://github.com/ctrlplusb/react-universally)
* [react-boilerplate](https://github.com/mxstbr/react-boilerplate)
* [react-server](https://github.com/redfin/react-server)
* [retax](https://github.com/retaxJS/retax)

Any contribution is welcome.

Cheers,

Kawi
