import { Button } from "../buttons/Button";
import { RouteButton } from "../buttons/RouteButton";
import { useIntl } from "react-intl";
import { FC, useState, useEffect } from "react";

interface IHomeMenu {
  onLanguageSwitch: (arg: string) => void;
}

export const HomeMenu: FC<IHomeMenu> = ({ onLanguageSwitch }) => {
  const [language, setLanguage] = useState('ru');

  /* () => {
    if (localStorage.getItem('current language') === null) {
      return "ru";
    } else {
      return localStorage.getItem("current language");
      
    }
  } */
  const intl = useIntl();

  useEffect(() => {
    onLanguageSwitch(language!);
    localStorage.setItem("current language", JSON.stringify(language));
  }, [language, onLanguageSwitch]);

  const changelanguage = () => {
    setLanguage((prev) => (prev === "ru" ? "en" : "ru"));
    localStorage.setItem("current language", JSON.stringify(language));
  };

  return (
    <>
      <RouteButton
        path="/aaa/"
        name={intl.formatMessage({ id: "app.button.Home" })}
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
      <Button
        onClick={changelanguage}
        name={intl.formatMessage({ id: "app.button.changeLang" })}
      />
    </>
  );
};
