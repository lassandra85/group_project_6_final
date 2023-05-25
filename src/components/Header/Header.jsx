
import Logo from '../Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import css from './Header.module.css';



const Header = () => {
  return (
    <div className={css.headerWrapper}>
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
