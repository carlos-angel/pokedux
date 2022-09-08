import types from './types';

export function setPokemonsAction(payload) {
  return {
    type: types.setPokemons,
    payload,
  };
}
