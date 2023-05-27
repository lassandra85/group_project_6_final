import React from 'react';
import logo from 'image/logo/logo.svg';
import logoSm from 'image/logo/logoSm.svg';
import { Link } from 'react-router-dom';
import css from './Logo.module.css';

function Logo({ handleLinkClick }) {
  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };
  return (
    <div>
      <Link to="/" onClick={handleClick}>
        <img src={logoSm} alt="Logo" className={css.logoWrapperS} />
        <img src={logo} alt="Logo" className={css.logoWrapperM} />
      </Link>
    </div>
  );
}

export default Logo;
