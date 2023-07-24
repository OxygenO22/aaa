import { Button } from '../buttons/Button';
import { RouteButton } from '../buttons/RouteButton';
import { useIntl } from 'react-intl';
import { useAppDispatch, useTypedSelector } from '../../hooks/useTypedSelector';
import { changeLang } from '../../../store/changeLanguage/changeLanguageSlice';



export const HomeMenu = () => {
  const { languageCode } = useTypedSelector((state) => state.changeLang);
  const dispatch = useAppDispatch();
  const intl = useIntl();

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
        onClick={() => dispatch(changeLang(languageCode))}
        name={intl.formatMessage({ id: "app.button.changeLang" })}
      />
    </>
  );
};
