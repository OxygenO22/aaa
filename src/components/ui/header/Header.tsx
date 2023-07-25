import { HomeMenu } from '../homeMenu/HomeMenu';
import s from './Header.module.scss';
import Logo from '../../../pictures/Logo.png';

export const Header = () => {
  return (
    <div className={s.header__wrapper}>
      <div className={s.header__logo}>
        <img className={s.header__logo_img} src={Logo} alt="All About All" />
      </div>
      <nav className={s.header__nav}>
        <HomeMenu />
      </nav>
    </div>
  );
};
