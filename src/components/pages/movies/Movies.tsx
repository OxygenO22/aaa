import { MoviesData, MoviesDescriptionData } from './MoviesData';
import { Page } from '../Page';

export const Movies = () => {
  return <Page descriptionData={MoviesDescriptionData} cartData={MoviesData} />;
}
