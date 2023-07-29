import s from "./ThemeBtn.module.scss";
import { useTheme } from "../../../lightDarkTheme/useTheme";
import useDarkMode from "@fisch0920/use-dark-mode";
import lightTheme from '../../../../pictures/lightDarkTheme/lightMode.svg';
import darkTheme from "../../../../pictures/lightDarkTheme/darkMode.svg";

const ThemeBtn = () => {
  const darkMode = useDarkMode(true);
  const theme = useTheme();
  return (
    <button className={s.themeButton} type="button" onClick={darkMode.toggle}>
      <div className={s.themeButton__img_wrapper}>
        <img
          className={s.themeButton__img}
          src={theme === "Dark-mode" ? lightTheme : darkTheme}
          alt={theme === "Dark-mode" ? "lightTheme" : "darkTheme"}
        />
      </div>
    </button>
  );
};
export default ThemeBtn;
