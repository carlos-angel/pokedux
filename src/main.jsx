import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import pokemonsReducer from './reducers/pokemons.reducer';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import './index.css';

const store = createStore(pokemonsReducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
