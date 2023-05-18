import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import  Header from './Header/Header';
import { Suspense } from 'react';
import Navigation from "./Navigation/Navigation";
import Logo from "./Logo/Logo";
import UserNav from './UserNav/UserNav';
import AuthNav from './AuthNav/AuthNav';


export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <Logo/>
        <Navigation/>     
        <UserNav/> 
        <AuthNav/>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};