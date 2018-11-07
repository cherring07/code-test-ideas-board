import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import App from './App';

import rootReducer from './reducers';
import rootSaga from './containers/Ideas/sagas';
import { theme } from './theme';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [sagaMiddleware, routerMiddleware(history)];

const enhancers = [applyMiddleware(...middlewares)];

const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(...enhancers)
);

rootSaga.map(saga => sagaMiddleware.run(saga));

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App history={history} />
      </ThemeProvider>
    </Provider>,
    document.getElementById('root')
  );
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
