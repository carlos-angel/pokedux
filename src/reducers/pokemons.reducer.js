import types from '../actions/types';
import { fromJS } from 'immutable';

const initialState = fromJS({
  pokemons: [],
  loading: false,
});

export default function pokemonsReducer(state = initialState, action) {
  switch (action.type) {
    case types.setPokemons:
      return state.setIn(['pokemons'], fromJS(action.payload)).setIn(['loading'], false);
    case types.setLoading:
      return state.setIn(['loading'], true);
    case types.toggleFavorite:
      const currentPokemonIndex = state
        .get('pokemons')
        .findIndex((pokemon) => pokemon.get('id') === action.payload);

      if (currentPokemonIndex < 0) {
        return state;
      }

      const isFavorite = state.getIn(['pokemons', currentPokemonIndex, 'favorite']);

      return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite);
    default:
      return state;
  }
}
