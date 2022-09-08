import axios from 'axios';

async function getPokemons() {
  return await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
}

export default getPokemons;
