import { Card, Tag } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useDispatch } from 'react-redux';
import { toggleFavoriteAction } from '../../actions';
import { getColorByPokemonType } from '../../utils';
import StartButton from './StartButton';

export default function PokemonCard({ id, name, image, types, favorite }) {
  const typesNamings = types.map(({ type }) => type.name);
  const dispatch = useDispatch();
  const handleOnFavorite = () => dispatch(toggleFavoriteAction(id));

  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={<StartButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta
        avatar={
          <>
            {typesNamings.map((name) => (
              <Tag key={name} color={getColorByPokemonType(name)}>
                {name}
              </Tag>
            ))}
          </>
        }
      />
    </Card>
  );
}
