import { FC } from "react";
import s from "./Button.module.scss";

interface IButton {
  name: string;
  onClick?: any;
}


export const Button: FC<IButton> = ({onClick, name}) => {
  return (
    <button onClick={onClick} className={s.button}>
      {name}
    </button>
  );
};
