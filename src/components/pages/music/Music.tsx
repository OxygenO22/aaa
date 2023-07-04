import st from './Music.module.scss';
import { Cart } from '../../ui/cart/Cart';
import { SectionDescription } from '../../ui/sectionDescription/SectionDescription';
import { MusicData, MusicDescriptionData } from './MusicData';

export const Music = () => {
  return (
    <div className={st.music__wrapper}>
      <SectionDescription componentData={MusicDescriptionData} />
      <div className={st.music__content}>
        <Cart componentData={MusicData} />
      </div>
    </div>
  );
}
