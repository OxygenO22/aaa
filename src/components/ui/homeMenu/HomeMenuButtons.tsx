import s from './HomeMenuButtons.module.scss'
import { RouteButton } from "../buttons/routeButton/RouteButton";
import { useIntl } from "react-intl";
import { FC } from 'react'
import { useAppDispatch, useTypedSelector } from '../../hooks/useTypedSelector';
import { openCloseBurgerMenu } from '../../../store/burgerMenu/burgerMenuSlice';
import { RouteButtonData } from '../buttons/routeButton/RouteButtonData';

interface IHomeMenuButtons {
  inBurger: boolean;
}


export const HomeMenuButtons: FC<IHomeMenuButtons> = ({inBurger}) => {
  const { isBurgerMenuOpen } = useTypedSelector((state) => state.burgerMenu);
  const dispatch = useAppDispatch();
  const intl = useIntl();

  const closeOnClick = () => isBurgerMenuOpen && dispatch(openCloseBurgerMenu(true));

  return (
    <div className={s.homeMenuButtons__wrapper}>
      <div
        className={
          inBurger
            ? s.homeMenuButtons__inner_inBurger
            : s.homeMenuButtons__inner
        }
      >
        {RouteButtonData.map((data) => (
          <div
            className={
              inBurger ? s.routeButton__burgerMenu : s.routeButton__homeMenu
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
