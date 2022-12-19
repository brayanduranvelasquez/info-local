import { lazy, LazyExoticComponent, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Local
import Head from '../shared/components/Head';

// Pages Components
const Home: LazyExoticComponent<React.FC> = lazy(() => import('../pages/home'));
const Categories: LazyExoticComponent<React.FC> = lazy(() => import('../pages/categories'));

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
    </Routes>
  );
}
