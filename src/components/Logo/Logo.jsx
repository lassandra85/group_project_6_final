import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <Link to="/main">
        {/* Здесь можно отобразить логотип */}
        <img src="логотип.png" alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
