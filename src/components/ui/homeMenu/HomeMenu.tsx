import { useAppDispatch, useTypedSelector } from '../../hooks/useTypedSelector';
import s from './HomeMenu.module.scss';
import { BurgerButton } from '../buttons/burgerButtons/BurgerButtons';
import { HomeMenuButtons } from './HomeMenuButtons';
import { changeLang } from "../../../store/changeLanguage/changeLanguageSlice";
import { useIntl } from "react-intl";
import { Button } from '../buttons/Button';
import ThemeBtn from '../buttons/lightDarkButton/ThemeBtn';


export const HomeMenu = () => {
  const dispatch = useAppDispatch();
  const { isBurgerMenuOpen } = useTypedSelector((state) => state.burgerMenu);
  const { languageCode } = useTypedSelector((state) => state.changeLang);
  const intl = useIntl();
  
  return (
    <div className={s.homeMenu__wrapper}>
      {!isBurgerMenuOpen && <BurgerButton />}
      <div className={s.homeMenu__inner}>
        <HomeMenuButtons />
        <div className={s.homeMenu__option_buttons}>
          <Button
            onClick={() => dispatch(changeLang(languageCode))}
            name={intl.formatMessage({ id: "app.button.changeLang" })}
          />
          <ThemeBtn />
        </div>
      </div>
    </div>
  );
};
