import { useEffect } from 'react';
import { Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { PokemonList } from './components/PokemonList';
import Searcher from './components/Searcher';
import { getPokemons } from './api';
import { getPokemonsWithDetailsAction } from './actions';
import logo from './static/logo.svg';

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    getPokemons().then((data) => dispatch(getPokemonsWithDetailsAction(data)));
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
