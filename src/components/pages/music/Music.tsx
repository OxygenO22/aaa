import { MusicData, MusicDescriptionData } from './MusicData';
import { Page } from '../Page';

export const Music = () => {
  return <Page descriptionData={MusicDescriptionData} cartData={MusicData} />;
}
