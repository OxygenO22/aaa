import "./ThemeBtn.scss";
import { THEME, useTheme } from "../../../lightDarkTheme/useTheme";
import useDarkMode from "@fisch0920/use-dark-mode";

const ThemeBtn = () => {
  const darkMode = useDarkMode(true);
  const theme = useTheme();
  return (
    <button className="btn-theme" type="button" onClick={darkMode.toggle}>
      {theme === "Dark-mode" ? THEME.LIGHT : THEME.DARK}
    </button>
  );
};
export default ThemeBtn;
