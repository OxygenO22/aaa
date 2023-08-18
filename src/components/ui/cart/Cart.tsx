import { Link } from "react-router-dom";
import s from './Cart.module.scss';
import { FC } from "react";
import { LazyImage } from "../lazyImage/LazyImage";
import Placeholder from '../../../pictures/Logo.png';
import { useIntl } from "react-intl";
interface ICart {
  componentData: IData[];
}

interface IData {
  id: number;
  to: string;
  title: string;
  subtitle: string;
  text: string;
  src: string;
}

export const Cart: FC<ICart> = ({ componentData }) => {
  const intl = useIntl();
  return (
    <>
      {componentData.map((data: IData) => (
        <div className={s.cart__wrapper} key={data.id}>
          <Link className={s.cart__link} to={data.to}>
            <div className={s.cart__picture}>
              <LazyImage
                src={data.src}
                placeholderSrc={Placeholder}
                alt={intl.formatMessage({ id: `${data.subtitle}` })}
              />
            </div>
            <div className={s.cart__title_wrapper}>
              <h2 className={s.cart__title}>
                {intl.formatMessage({ id: `${data.title}` })}
              </h2>
            </div>
            <div className={s.cart__content}>
              <h3 className={s.cart__subtitle}>
                {intl.formatMessage({ id: `${data.subtitle}` })}
              </h3>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
