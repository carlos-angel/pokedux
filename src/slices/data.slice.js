import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemons, getPokemonDetails } from '../api';
import { setLoading } from './ui.slice';

const initialState = {
  pokemons: [],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(
        (pokemon) => pokemon.id === action.payload,
      );

      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].favorite;
        state.pokemons[currentPokemonIndex].favorite = !isFavorite;
      }
    },
  },
});

export const { setPokemons, setFavorite } = dataSlice.actions;

export const fetchPokemonsWithDetails = createAsyncThunk(
  'data/fetchPokemonsWithDetails',
  async (_, thunkAPI) => {
    thunkAPI.dispatch(setLoading(true));

    const pokemons = await getPokemons();

    const pokemonsWithDetails = await Promise.all(
      pokemons.map((pokemon) => getPokemonDetails(pokemon.url)),
    );

    thunkAPI.dispatch(setPokemons(pokemonsWithDetails));

    thunkAPI.dispatch(setLoading(false));
  },
);

export default dataSlice.reducer;
