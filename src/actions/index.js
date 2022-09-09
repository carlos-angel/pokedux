import getPokemonDetails from '../api/getPokemonDetails.api';
import types from './types';

export function setPokemonsAction(payload) {
  return {
    type: types.setPokemons,
    payload,
  };
}

export function setLoadingAction() {
  return {
    type: types.setLoading,
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
