import { Col } from 'antd';
import { PokemonList } from './components/PokemonList';
import Searcher from './components/Searcher';

function App() {
  return (
    <div className='app'>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  );
}

export default App;
