import { HomeMenu } from '../homeMenu/HomeMenu';
import st from './Header.module.scss';
import Logo from '../../../pictures/Logo.png';

export const Header = () => {
  return (
    <div className={st.header__wrapper}>
      <div className={st.header__logo}>
        <img className={st.header__logo_img} src={Logo} alt="All About All" />
      </div>
      <nav>
        <HomeMenu />
      </nav>
    </div>
  );
}
