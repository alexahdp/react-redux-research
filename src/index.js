import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const history = createHistory();
const middleware = applyMiddleware(routerMiddleware(history));

const initialState = {
  app: {
    name: 'Alex',
  },
};

const reducer = state => state || initialState;
const store = middleware(createStore)(
  combineReducers({ app: reducer }, { router: routerReducer }),
  initialState,
);


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={App} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
