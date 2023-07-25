import { Button } from '../buttons/Button';
import { RouteButton } from '../buttons/RouteButton';
import { useIntl } from 'react-intl';
import { useAppDispatch, useTypedSelector } from '../../hooks/useTypedSelector';
import { changeLang } from '../../../store/changeLanguage/changeLanguageSlice';
import s from './HomeMenu.module.scss';



export const HomeMenu = () => {
  const { languageCode } = useTypedSelector((state) => state.changeLang);
  const dispatch = useAppDispatch();
  const intl = useIntl();

  return (
    <div className={s.homeMenu__wrapper}>
      <div className={s.homeMenu__left}>
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
      </div>
      <div className={s.homeMenu__right}>
        <Button
          onClick={() => dispatch(changeLang(languageCode))}
          name={intl.formatMessage({ id: "app.button.changeLang" })}
        />
      </div>
    </div>
  );
};
