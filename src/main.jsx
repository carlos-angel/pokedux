import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import { loggerMiddleware } from './middlewares';
import { rootReducer } from './reducers';
import App from './App';
import './index.css';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, loggerMiddleware));

const store = createStore(rootReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
