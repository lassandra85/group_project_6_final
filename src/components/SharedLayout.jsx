import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import  Header from './Header';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <Header/>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};