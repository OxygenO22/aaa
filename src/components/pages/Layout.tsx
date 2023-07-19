import { Outlet } from 'react-router-dom';
import { Header } from '../ui/header/Header';
import st from './Layout.module.scss';
import { FC } from 'react';

interface ILayout {
  onLanguageSwitch: (arg: string) => void;
}

export const Layout: FC<ILayout> = ({onLanguageSwitch}) => {
  return (
    <>
      <header className={st.header__wrapper}>
        <Header onLanguageSwitch={onLanguageSwitch} />
      </header>

      <main className={st.main__wrapper}>
        <Outlet />
      </main>
    </>
  );
};
