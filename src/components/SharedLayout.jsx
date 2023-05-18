import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import  Header from './Header/Header';
import { Suspense } from 'react';



export const SharedLayout = () => {
  return (
    <div>
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};