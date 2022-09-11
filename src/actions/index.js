import getPokemonDetails from '../api/getPokemonDetails.api';
import types from './types';

export function setPokemonsAction(payload) {
  return {
    type: types.setPokemons,
    payload,
  };
}

export function setLoadingAction(payload) {
  return {
    type: types.setLoading,
    payload,
  };
}

export function toggleFavoriteAction(pokemonId) {
  return {
    type: types.toggleFavorite,
    payload: pokemonId,
  };
}

export const getPokemonsWithDetailsAction =
  (pokemons = []) =>
  async (dispatch) => {
    const pokemonsWithDetails = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon.url)),
    );
    dispatch(setPokemonsAction(pokemonsWithDetails));
  };
