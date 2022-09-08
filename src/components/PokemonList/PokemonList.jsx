import PokemonCard from './PokemonCard';
import './PokemonList.css';

export default function PokemonList({ pokemons }) {
  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon, i) => (
        <PokemonCard {...pokemon} key={pokemon.name} id={i + 1} />
      ))}
    </div>
  );
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};
