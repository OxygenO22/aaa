import { FC } from "react";
import s from "./Button.module.scss";

interface IButton {
  name: string;
  onClick?: any;
}


export const Button: FC<IButton> = (props) => {
  return (
    <button onClick={props.onClick} className={s.button}>{props.name}</button>
  );
};
