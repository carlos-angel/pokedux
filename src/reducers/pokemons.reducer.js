import types from '../actions/types';

const initialState = {
  pokemons: [],
  loading: false,
};

export default function pokemonsReducer(state = initialState, action) {
  switch (action.type) {
    case types.setPokemons:
      return { ...state, pokemons: action.payload, loading: false };
    case types.setLoading:
      return { ...state, loading: true };
    default:
      return state;
  }
}
