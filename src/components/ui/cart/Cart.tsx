import { Link } from "react-router-dom";
import st from './Cart.module.scss';
import { FC } from "react";
import { LazyImage } from "../lazyImage/LazyImage";
import ForFamalySM from '../../../pictures/movies/ForFamalySM.jpg';

interface ICart {
  componentData: IData[];
}

interface IData {
  id: number;
  to: string;
  title: string;
  text: string;
  src: string;
}

export const Cart: FC<ICart> = ({ componentData }) => {
  return (
    <>
      {componentData.map((data: IData) => (
        <div className={st.cart__wrapper} key={data.id}>
          <Link className={st.cart__link} to={data.to}>
            <div className={st.cart__picture}>
              <LazyImage src={data.src} placeholderSrc={ForFamalySM} alt={data.title}/>
            </div>
            <div className={st.cart__content}>
              <h3 className={st.cart__title}>{data.title}</h3>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
