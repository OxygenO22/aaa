import { HomeMenu } from '../homeMenu/HomeMenu';
import st from './Header.module.scss';
import Logo from '../../../pictures/Logo.png';
import { FC } from "react";

interface IHeader {
  onLanguageSwitch: (arg: string) => void;
}

export const Header: FC<IHeader> = ({ onLanguageSwitch }) => {
  return (
    <div className={st.header__wrapper}>
      <div className={st.header__logo}>
        <img className={st.header__logo_img} src={Logo} alt="All About All" />
      </div>
      <nav>
        <HomeMenu onLanguageSwitch={onLanguageSwitch} />
      </nav>
    </div>
  );
};
