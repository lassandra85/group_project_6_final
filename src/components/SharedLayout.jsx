import Header from './Header/Header';
import Section from './Section/Section';
import Container from './Container/Container';
import Footer from './Footer/Footer';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.contentWrapper}>
      <Header />
      <main>
        <Section>
          <Container>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
        <Toaster position="top-right" reverseOrder={false} />
      </main>
      <Footer />
    </div>
  );
};
