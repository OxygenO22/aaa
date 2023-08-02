import { PopularData, PopularDescriptionData } from './PopularData';
import { Page } from '../Page';

export const Popular = () => {
  return (
    <Page descriptionData={PopularDescriptionData} cartData={PopularData} />
  );
}
