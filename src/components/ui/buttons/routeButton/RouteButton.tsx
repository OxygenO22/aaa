import { FC } from "react";
import { NavLink } from "react-router-dom";
import s from "./RouteButton.module.scss";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface IRouteButton {
  path: string;
  name: string;
  onClick?: any;
}

export const RouteButton: FC<IRouteButton> = (props) => {
  const {isBurgerMenuOpen} = useTypedSelector(state => state.burgerMenu);
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? s.button_active : isBurgerMenuOpen ? s.buttonInBurgerMenu : s.button
      }
      to={props.path}
      onClick={props.onClick}
    >
      {props.name}
    </NavLink>
  );
};
