import { Col } from 'antd';
import { useEffect, useState } from 'react';
import { PokemonList } from './components/PokemonList';
import Searcher from './components/Searcher';
import logo from './static/logo.svg';
import { getPokemons } from './api';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons().then(({ data }) => setPokemons(data.results));
  }, []);

  return (
    <div className='app'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
