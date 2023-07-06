import st from './Movies.module.scss';
import { SectionDescription } from '../../ui/sectionDescription/SectionDescription';
import { Cart } from '../../ui/cart/Cart';
import { MoviesData, MoviesDescriptionData } from './MoviesData';

export const Movies = () => {
  return (
    <div className={st.movies__wrapper}>
      <SectionDescription componentData={MoviesDescriptionData} />
      <div className={st.movies__content}>
        <Cart componentData={MoviesData} />
      </div>
    </div>
  );
}
