import React from 'react';
import logo from 'image/logo/logo.svg';
import logoSm from 'image/logo/logoSm.svg';
import { Link } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="Logo" className={css.logoWrapperM} />
        <img src={logoSm} alt="Logo" className={css.logoWrapperS} />
      </Link>
    </div>
  );
};

export default Logo;
