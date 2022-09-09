import PokemonCard from './PokemonCard';
import './PokemonList.css';

export default function PokemonList({ pokemons }) {
  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} name={pokemon.name} image={pokemon.sprites.front_default} />
      ))}
    </div>
  );
}
