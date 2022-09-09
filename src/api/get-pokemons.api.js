import axios from 'axios';
import getPokemonDetails from './getPokemonDetails.api';

async function getPokemons() {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  return data.results;
}

export default getPokemons;
