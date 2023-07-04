import st from './Popular.module.scss';
import { PopularData, PopularDescriptionData } from './PopularData';
import { Cart } from '../../ui/cart/Cart';
import { SectionDescription } from '../../ui/sectionDescription/SectionDescription';

export const Popular = () => {
  return (
    <div className={st.popular__wrapper}>
        <SectionDescription componentData={PopularDescriptionData} />
      <div className={st.popular__content}>
        <Cart componentData={PopularData} />
      </div>
    </div>
  );
}
