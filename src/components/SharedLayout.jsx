import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import  Header from './Header/Header';
import { Suspense } from 'react';
import Navigation from "./Navigation/Navigation";
import Logo from "./Logo/Logo";
import { Link } from 'react-router-dom';


export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Logo/>
        <Navigation>
          <Link to="/news">Home</Link>
          <Link to="/notices">About</Link>
          <Link to="/friends">Products</Link>
        </Navigation>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};