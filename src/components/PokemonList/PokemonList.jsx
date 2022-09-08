import PokemonCard from './PokemonCard';
import './PokemonList.css';

export default function PokemonList({ pokemons }) {
  return (
    <div className='PokemonList'>
      {pokemons.map((pokemon) => (
        <PokemonCard {...pokemon} />
      ))}
    </div>
  );
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
};
