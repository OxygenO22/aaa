import s from './BurgerMenu.module.scss';
import { BurgerButton } from '../buttons/burgerButtons/BurgerButtons';
import { HomeMenuButtons } from '../homeMenu/HomeMenuButtons';
import { Button } from '../buttons/Button';
import { changeLang } from "../../../store/changeLanguage/changeLanguageSlice";
import { useIntl } from "react-intl";
import { useAppDispatch, useTypedSelector } from "../../hooks/useTypedSelector";
import ThemeBtn from '../buttons/lightDarkButton/ThemeBtn';

export const BurgerMenu = () => {
  const dispatch = useAppDispatch();
  const { languageCode } = useTypedSelector((state) => state.changeLang);
  const intl = useIntl();
  return (
    <div className={s.burgerMenu__wrapper}>
      <div className={s.burgerMenu__inner}>
        <div className={s.burgerMenu__buttons}>
          <HomeMenuButtons />
          <div className={s.burgerMenu__options_buttons}>
            <div className={s.burgerMenu__options_buttons_wrapper}>
              <Button
                onClick={() => dispatch(changeLang(languageCode))}
                name={intl.formatMessage({ id: "app.button.changeLang" })}
              />
            </div>
            <div className={s.burgerMenu__options_buttons_wrapper}>
              <ThemeBtn />
            </div>
          </div>
        </div>
        <div className={s.burgerMenu__burgerButton}>
          <BurgerButton />
        </div>
      </div>
    </div>
  );
}
