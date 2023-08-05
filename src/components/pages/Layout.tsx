import { Outlet } from 'react-router-dom';
import { Header } from '../ui/header/Header';
import s from './Layout.module.scss';
import { BurgerMenu } from '../ui/burgerMenu/BurgerMenu';
import { useTypedSelector } from '../hooks/useTypedSelector';



export const Layout = () => {
  const { isBurgerMenuOpen } = useTypedSelector((state) => state.burgerMenu);
  return (
    <>
      {isBurgerMenuOpen === true && <BurgerMenu />}
      <header className={s.header__wrapper}>
        <Header />
      </header>

      <main className={s.main__wrapper}>
        <div className={s.main__ads_left}>
          <h1>Реклама</h1>
        </div>
        <div className={s.main__outlet}>
          <Outlet />
        </div>
        <div className={s.main__ads_right}>
          <h1>Реклама</h1>
        </div>
      </main>
    </>
  );
};
