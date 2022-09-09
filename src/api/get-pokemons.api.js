import axios from 'axios';
import getPokemonDetails from './getPokemonDetails.api';

async function getPokemons() {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  const pokemons = Promise.all(data.results.map((pokemon) => getPokemonDetails(pokemon.url)));
  return pokemons;
}

export default getPokemons;
