import { Button } from "../buttons/Button";
import { RouteButton } from "../buttons/RouteButton";
import { useIntl } from "react-intl";
import { FC, useState, useEffect } from "react";

interface IHomeMenu {
  onLanguageSwitch: (arg: string) => void;
}

export const HomeMenu: FC<IHomeMenu> = ({ onLanguageSwitch }) => {
  const [language, setLanguage] = useState("ru");
  const intl = useIntl();

  useEffect(() => {
    onLanguageSwitch(language);
  }, [language, onLanguageSwitch]);

  const changelanguage = () => {
    setLanguage(prev => prev === 'ru' ? 'en' : 'ru');
  };


  return (
    <>
      <RouteButton path="/aaa/" name="Home" />
      <RouteButton path="Popular" name="Popular" />
      <RouteButton path="Music" name="Music" />
      <RouteButton
        path="Movies"
        name={intl.formatMessage({ id: "app.button.movies" })}
      />
      <Button
        onClick={changelanguage}
        name={intl.formatMessage({ id: "app.button.changeLang" })}
      />
    </>
  );
};
