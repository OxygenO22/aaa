import s from './BurgerMenu.module.scss';
import { BurgerButton } from '../buttons/burgerButtons/BurgerButtons';
import { HomeMenuButtons } from '../homeMenu/HomeMenuButtons';

export const BurgerMenu = () => {
  return (
    <div className={s.burgerMenu__wrapper}>
      <BurgerButton />
      <div className={s.burgerMenu__buttons}>
        <HomeMenuButtons inBurger={true} />
      </div>
    </div>
  );
}
