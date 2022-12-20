import { lazy, LazyExoticComponent, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Local
import Head from '../shared/components/Head';

// Pages Components
const Home: LazyExoticComponent<React.FC> = lazy(() => import('../pages/home'));
const Categories: LazyExoticComponent<React.FC> = lazy(() => import('../pages/categories'));
const Locals: LazyExoticComponent<React.FC> = lazy(() => import('../pages/locals'));
const AboutUs: LazyExoticComponent<React.FC> = lazy(() => import('../pages/aboutUs'));

export default function RouterApp(): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Head title="InfoLocal" />
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/categories"
        element={
          <Suspense>
            <Head title="Categorias" />
            <Categories />
          </Suspense>
        }
      />
      <Route
        path="/locals"
        element={
          <Suspense>
            <Head title="Locales" />
            <Locals />
          </Suspense>
        }
      />
      <Route
        path="/aboutus"
        element={
          <Suspense>
            <Head title="InfoLocal" />
            <AboutUs />
          </Suspense>
        }
      />
    </Routes>
  );
}
