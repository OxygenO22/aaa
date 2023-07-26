import { Outlet } from 'react-router-dom';
import { Header } from '../ui/header/Header';
import st from './Layout.module.scss';
import { BurgerMenu } from '../ui/burgerMenu/BurgerMenu';
import { useTypedSelector } from '../hooks/useTypedSelector';



export const Layout = () => {
  const { isBurgerMenuOpen } = useTypedSelector((state) => state.burgerMenu);
  return (
    <>
      {isBurgerMenuOpen === true && <BurgerMenu />}
      <header className={st.header__wrapper}>
        <Header />
      </header>

      <main className={st.main__wrapper}>
        <Outlet />
      </main>
    </>
  );
};
