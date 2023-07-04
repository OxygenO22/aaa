import { PopularData } from '../PopularData';
import { useParams } from 'react-router-dom';
import { SinglePage } from '../../../ui/singlePage/SinglePage';

export const PopularSinglePage = () => {
  const {id} = useParams();

  return (
      <SinglePage componentData={PopularData} id={id} />
  );
}
