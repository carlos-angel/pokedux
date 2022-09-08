import types from '../actions/types';

const pokemonsWithId = (store) => (next) => (actionInfo) => {
  if (actionInfo.action.type === types.setPokemons) {
    const pokemons = actionInfo.action.payload;
    const pokemonsWithId = pokemons.map((pokemon, i) => ({ ...pokemon, id: i + 1 }));
    const updatedAction = {
      ...actionInfo,
      action: { ...actionInfo.action, payload: pokemonsWithId },
    };
    next(updatedAction);
  } else {
    next(actionInfo);
  }
};

export default pokemonsWithId;
