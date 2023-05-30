import Header from './Header/Header';
import Section from './Section/Section';
import Container from './Container/Container';
import Footer from './Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Loader from './Loader/loader';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.contentWrapper}>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <main>
        <Section>
          <Container>Hi there!!!</Container>
        </Section>
        <Toaster position="top-right" reverseOrder={false} />
      </main>
      <Footer />
    </div>
  );
};

export default SharedLayout;
