import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk';
import App from './App';
import pokemonsReducer from './reducers/pokemons.reducer';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux';
import './index.css';
import { loggerMiddleware } from './middlewares';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, loggerMiddleware));

const store = createStore(pokemonsReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
