import PokemonCard from './PokemonCard';
import './PokemonList.css';

export default function PokemonList({ pokemons }) {
  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon) => (
        <PokemonCard {...pokemon} key={pokemon.id} />
      ))}
    </div>
  );
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};
