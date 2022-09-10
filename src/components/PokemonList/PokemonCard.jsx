import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useDispatch } from 'react-redux';
import { toggleFavoriteAction } from '../../actions';
import StartButton from './StartButton';

export default function PokemonCard({ id, name, image, types, favorite }) {
  const typesNamings = types.map(({ type }) => type.name);
  const typesString = typesNamings.join(', ');
  const dispatch = useDispatch();

  const handleOnFavorite = () => dispatch(toggleFavoriteAction(id));

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StartButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={typesString} />
    </Card>
  );
}
