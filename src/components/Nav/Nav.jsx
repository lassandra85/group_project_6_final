import React from 'react';

import { navData } from './navData';
import { List,Item,Link } from './Nav.styled';
import { useLocation } from 'react-router';
// import { useWindowSize } from 'hooks/useResize';


const Nav = () => {
  const {pathname} = useLocation();

  const items = navData.map(({text,path})=>(
    <Item key={text}>
      <Link to ={path}
         className={
          pathname.includes('notices') && path.includes('notices') && 'active'
        }
      >
        {text}
      </Link>
      
    </Item>
  ))

  return (
   <List>{items}</List>
  );
};

export default Nav;
