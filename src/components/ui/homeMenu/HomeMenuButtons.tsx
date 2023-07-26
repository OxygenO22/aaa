import s from './HomeMenuButtons.module.scss'
import { RouteButton } from "../buttons/RouteButton";
import { useIntl } from "react-intl";
import { FC } from 'react'
import { useAppDispatch, useTypedSelector } from '../../hooks/useTypedSelector';
import { openCloseBurgerMenu } from '../../../store/burgerMenu/burgerMenuSlice';

interface IHomeMenuButtons {
  inBurger: boolean;
}


export const HomeMenuButtons: FC<IHomeMenuButtons> = ({inBurger}) => {
  const { isBurgerMenuOpen } = useTypedSelector((state) => state.burgerMenu);
  const dispatch = useAppDispatch();
  const intl = useIntl();
  return (
    <div className={s.homeMenuButtons__wrapper}>
      <div
        className={
          inBurger
            ? s.homeMenuButtons__inner_inBurger
            : s.homeMenuButtons__inner
        }
      >
        <RouteButton
          path="/aaa/"
          name={intl.formatMessage({ id: "app.button.Home" })}
          /* onClick={() => dispatch( openCloseBurgerMenu(true))} */
        />
        <RouteButton
          path="Popular"
          name={intl.formatMessage({ id: "app.button.Popular" })}
        />
        <RouteButton
          path="Music"
          name={intl.formatMessage({ id: "app.button.Music" })}
        />
        <RouteButton
          path="Movies"
          name={intl.formatMessage({ id: "app.button.Movies" })}
        />
      </div>
    </div>
  );
}
