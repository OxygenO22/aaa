import { Link } from "react-router-dom";
import st from './Cart.module.scss';
import { FC } from "react";

interface ICart {
  componentData: IData[];
}

interface IData {
  id: number;
  to: string;
  title: string;
  text: string;
  src: string;
  alt: string;
}

export const Cart: FC<ICart> = ({ componentData }) => {
  return (
    <>
      {componentData.map((data: IData) => (
        <div className={st.cart__wrapper} key={data.id}>
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
    </>
  );
};
