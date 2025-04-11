import { Cart } from '../ui/cart/Cart';
import { SectionDescription } from '../ui/sectionDescription/SectionDescription';
import s from './Page.module.scss';

type IPage = {
  descriptionData: any;
  cartData?: any;
}

export const Page = ({ descriptionData, cartData }: IPage) => {
  return (
    <div className={s.page__wrapper}>
      <SectionDescription componentData={descriptionData} />
      <div className={s.page__content}>
        <Cart componentData={cartData} />
      </div>
    </div>
  );
};
