import { useEffect } from 'react';
import { Col, Spin } from 'antd';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { PokemonList } from './components/PokemonList';
import Searcher from './components/Searcher';
import { getPokemons } from './api';
import { getPokemonsWithDetailsAction, setLoadingAction } from './actions';
import logo from './static/logo.svg';

function App() {
  const pokemons = useSelector((state) => state.getIn(['data', 'pokemons'], shallowEqual)).toJS();
  const loading = useSelector((state) => state.getIn(['ui', 'loading']));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingAction(true));
    getPokemons()
      .then((data) => dispatch(getPokemonsWithDetailsAction(data)))
      .finally(() => dispatch(setLoadingAction(false)));
  }, []);

  return (
    <div className='app'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading && (
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
      )}
      {!loading && <PokemonList pokemons={pokemons} />}
    </div>
  );
}

export default App;
