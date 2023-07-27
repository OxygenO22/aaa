import { FC } from "react";
import { NavLink } from "react-router-dom";
import st from "./RouteButton.module.scss";

interface IRouteButton {
  path: string;
  name: string;
  onClick?: any;
}

export const RouteButton: FC<IRouteButton> = (props) => {
  return (
    <NavLink
      className={({ isActive }) => (isActive ? st.button_active : st.button)}
      to={props.path}
      onClick={props.onClick}
    >
      {props.name}
    </NavLink>
  );
};
