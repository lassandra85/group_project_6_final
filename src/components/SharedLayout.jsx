import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// import Loader from './Loader/loader';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.contentWrapper}>
      <Header />
      <main>
        <Toaster position="top-right" reverseOrder={false} />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
