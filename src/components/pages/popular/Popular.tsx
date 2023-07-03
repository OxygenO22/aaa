import st from './Popular.module.scss';
import { Link } from 'react-router-dom';
import { PopularData, PopularMainData } from './PopularData';
import { Cart } from '../../ui/cart/Cart';
import { SectionDescription } from '../../ui/sectionDescription/SectionDescription';

export const Popular = () => {
  return (
    <div className={st.popular__wrapper}>
      <div className={st.popular__description}>
        <SectionDescription />
      </div>
      <div className={st.popular__content}>
        <Cart />
      </div>
    </div>
  );
}
