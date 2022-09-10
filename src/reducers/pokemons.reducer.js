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
    case types.toggleFavorite:
      const pokemons = [...state.pokemons];
      const currentPokemonIndex = pokemons.findIndex((pokemon) => pokemon.id === action.payload);

      if (currentPokemonIndex < 0) {
        return state;
      }

      pokemons[currentPokemonIndex].favorite = !pokemons[currentPokemonIndex].favorite;
      return { ...state, pokemons };
    default:
      return state;
  }
}
