import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import Immutable from 'immutable';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Menu from './menu';
import Library from './library';
import reducer from './reducers';

const logger = createLogger({
  stateTransformer: state => (Immutable.Iterable.isIterable(state) ? state.toJS() : state),
});

const history = createHistory();
const middleware = applyMiddleware(logger, routerMiddleware(history));


const store = middleware(createStore)(reducer);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Menu />
        <div className="container">
          <Route exact path="/" component={App} />
          <Route path="/library" component={Library} />
        </div>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
