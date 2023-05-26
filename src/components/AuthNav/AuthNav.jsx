import { Link } from 'react-router-dom';

import css from './AuthNav.module.css';

import { ReactComponent as PawPrintIcon } from 'image/icons/pawprint.svg';

const AuthNav = () => {
  return (
    <ul className={css.wrapper}>
      <li>
        <Link to="/login" className={css.login}>
          <span>Log IN</span>
          <PawPrintIcon className={css['paw-icon']} />
        </Link>
      </li>
      <li>
        <Link to="/register" className={css.register}>
          Registration
        </Link>
      </li>
    </ul>
  );
};

export default AuthNav;
