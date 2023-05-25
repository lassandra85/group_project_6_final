import React from 'react';
import Nav from '../Nav/Nav';
import UserNav from '../UserNav/UserNav';
import AuthNav from '../AuthNav/AuthNav';
// import BurgerMenu from './BurgerMenu/Burger';
// import { BtnGroup } from './Navigation.styled';
// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

const Navigation = () => {
  return (
    <div className="navigationStyle">
      <Nav />
      <UserNav />
      <AuthNav />
    </div>
  );
};

export default Navigation;

// import React from 'react';
// import Nav from './Nav/Nav';
// import UserNav from './UserNav/UserNav';
// import AuthNav from './AuthNav/AuthNav';
// import BurgerMenu from './BurgerMenu/Burger';
// import { BtnGroup } from './Navigation.styled';
// import { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';

// function isMobileDevice() {
//   return (
//     window.innerWidth < 1024 ||
//     typeof window.orientation !== 'undefined' ||
//     navigator.userAgent.indexOf('IEMobile') !== -1
//   );
// }

// function isTabletDevice() {
//   return window.innerWidth > 767;
// }

// function Navigation() {
//   const [isMobile, setIsMobile] = useState(isMobileDevice());
//   const [isTablet, setTabletDevice] = useState(isTabletDevice());
//   const isLogIn = useSelector(state => state.auth.token);
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(isMobileDevice());
//       setTabletDevice(isTabletDevice());
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <>
//       {isMobile ? null : <Nav />}
//       <BtnGroup>
//         {isLogIn ? <UserNav /> : null}
//         {isTablet && !isLogIn ? <AuthNav /> : null}
//         {isMobile ? <BurgerMenu /> : null}
//       </BtnGroup>
//     </>
//   );
// }

// export default Navigation;
