import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

export default function PokemonCard({ name, image, types }) {
  const typesNamings = types.map(({ type }) => type.name);
  const typesString = typesNamings.join(', ');

  return (
    <Card title={name} cover={<img src={image} alt={name} />} extra={<StarOutlined />}>
      <Meta description={typesString} />
    </Card>
  );
}
