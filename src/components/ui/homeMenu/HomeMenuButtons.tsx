import s from './HomeMenuButtons.module.scss'
import { RouteButton } from "../buttons/routeButton/RouteButton";
import { useIntl } from "react-intl";
import { useAppDispatch, useTypedSelector } from '../../hooks/useTypedSelector';
import { openCloseBurgerMenu } from '../../../store/burgerMenu/burgerMenuSlice';
import { RouteButtonData } from '../buttons/routeButton/RouteButtonData';

export const HomeMenuButtons = () => {
  const { isBurgerMenuOpen } = useTypedSelector((state) => state.burgerMenu);
  const dispatch = useAppDispatch();
  const intl = useIntl();

  const closeOnClick = () => isBurgerMenuOpen && dispatch(openCloseBurgerMenu(true));

  return (
    <div className={s.homeMenuButtons__wrapper}>
      <div
        className={
          isBurgerMenuOpen
            ? s.homeMenuButtons__inner_inBurger
            : s.homeMenuButtons__inner
        }
      >
        {RouteButtonData.map((data) => (
          <div
            className={
              isBurgerMenuOpen
                ? s.routeButton__burgerMenu
                : s.routeButton__homeMenu
            }
            key={data.id}
          >
            <RouteButton
              path={data.path}
              name={intl.formatMessage({ id: `${data.name}` })}
              onClick={closeOnClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
