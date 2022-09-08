import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

export default function PokemonCard(props) {
  const { id, name, url } = props;
  return (
    <Card
      title={name}
      cover={
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description='fire, magic' />
    </Card>
  );
}
