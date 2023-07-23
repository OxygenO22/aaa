import { HomeMenu } from '../homeMenu/HomeMenu';
import s from './BurgerMenu.module.scss';

export const BurgerMenu = () => {
  return (
    <div className={s.burgerMenu__wrapper}>
      <div className={s.burgerMenu__inner}>BurgerMenu</div>
    </div>
  );
}
