
import Logo from '../Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import css from './Header.module.css';
import AuthNav from 'components/AuthNav/AuthNav';



const Header = () => {
  return (
    <div className={css.headerWrapper}>
      <Logo />
      <Navigation />
      <AuthNav />
    </div>
  );
};

export default Header;
