import { useParams } from 'react-router-dom';
import { SinglePage } from '../../../ui/singlePage/SinglePage';
import { MusicData } from '../MusicData';

export const MusicSinglePage = () => {
  const { id } = useParams();
  return (
    <SinglePage componentData={MusicData} id={id} />
  );
}
