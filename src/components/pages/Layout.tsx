import { Outlet } from 'react-router-dom';
import { Header } from '../ui/header/Header';
import s from './Layout.module.scss';
import { BurgerMenu } from '../ui/burgerMenu/BurgerMenu';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useIntl } from "react-intl";



export const Layout = () => {
  const intl = useIntl();
  const { isBurgerMenuOpen } = useTypedSelector((state) => state.burgerMenu);
  return (
    <>
      {isBurgerMenuOpen === true && <BurgerMenu />}
      <header className={s.header__wrapper}>
        <Header />
      </header>

      <main className={s.main__wrapper}>
        <div className={s.main__ads_left}>
          <h1>{intl.formatMessage({ id: "app.MoviesData.Advertising" })}</h1>
        </div>
        <div className={s.main__outlet}>
          <Outlet />
        </div>
        <div className={s.main__ads_right}>
          <h1>{intl.formatMessage({ id: "app.MoviesData.Advertising" })}</h1>
        </div>
      </main>
    </>
  );
};
