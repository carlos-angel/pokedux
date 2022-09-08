import { useEffect } from 'react';
import { Col } from 'antd';
import { connect } from 'react-redux';
import { PokemonList } from './components/PokemonList';
import Searcher from './components/Searcher';
import { getPokemons } from './api';
import { setPokemonsAction } from './actions';
import logo from './static/logo.svg';

function App(props) {
  const { pokemons, setPokemons } = props;

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

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
