import { openCloseBurgerMenu } from '../../../../store/burgerMenu/burgerMenuSlice';
import { useAppDispatch, useTypedSelector } from '../../../hooks/useTypedSelector';
import s from './BurgerButtons.module.scss';
import menu from '../../../../pictures/burgerMenu/menu.svg';
import close from '../../../../pictures/burgerMenu/close.svg';

export const BurgerButton = () => {
  const { isBurgerMenuOpen } = useTypedSelector((state) => state.burgerMenu);
  const dispatch = useAppDispatch();
  return (
    <>
      {isBurgerMenuOpen ? (
        <div
          className={s.burger__button_close}
          onClick={() => dispatch(openCloseBurgerMenu(true))}
        >
          <img className={s.burger__button_img} src={close} alt="close" />
        </div>
      ) : (
        <div
          className={s.burger__button}
          onClick={() => dispatch(openCloseBurgerMenu(true))}
        >
          <img className={s.burger__button_img} src={menu} alt="menu" />
        </div>
      )}
    </>
  );
}
