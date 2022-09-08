import types from '../actions/types';

const initialState = {
  pokemons: [],
};

export default function pokemonsReducer(state = initialState, action) {
  switch (action.type) {
    case types.setPokemons:
      return { ...state, pokemons: action.payload };
    default:
      return state;
  }
}
