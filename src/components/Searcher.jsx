import { Input } from 'antd';

export default function Searcher() {
  return (
    <Input.Search
      placeholder='Buscar un Pokémon'
      style={{
        marginBottom: 10,
      }}
    />
  );
}
