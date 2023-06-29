import { Outlet } from 'react-router-dom';
import { Header } from '../ui/header/Header';
import st from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <header className={st.header__wrapper}>
        <Header />
      </header>

      <main className={st.main__wrapper}>
        <Outlet />
      </main>
    </>
  );
}
