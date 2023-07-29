import { useEffect, useState } from "react";
import useDarkMode from "@fisch0920/use-dark-mode";

export const THEME = { DARK: "Dark-mode", LIGHT: "Light-mode" };

export const useTheme = () => {
  const darkMode = useDarkMode();
  const [theme, setTheme] = useState(THEME.DARK);
  
  useEffect(() => {
    setTheme(darkMode?.value ? THEME.DARK : THEME.LIGHT);
  }, [darkMode.value]);

  return theme;
};
