import st from './Popular.module.scss';
import { Link } from 'react-router-dom';
import { PopularData } from './PopularData';

export const Popular = () => {
  return (
    <div className={st.popular__wrapper}>
      {PopularData.map((data) => (
        <div className={st.popular__cart} key={data.id}>
            <Link className={st.cart__link} to={data.to}>
              <div className={st.cart__picture}>
                <img className={st.cart__img} src={data.src} alt={data.alt} />
              </div>
              <div className={st.cart__content}>
                <h3 className={st.cart__title}>{data.title}</h3>
              </div>
            </Link>
        </div>
      ))}
    </div>
  );
}
