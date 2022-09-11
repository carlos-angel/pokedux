import { combineReducers } from 'redux-immutable';
import pokemonsReducer from './pokemons.reducer';
import uiReducer from './ui.reducer';

const rootReducer = combineReducers({
  data: pokemonsReducer,
  ui: uiReducer,
});

export default rootReducer;
