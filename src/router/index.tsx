import { lazy, LazyExoticComponent, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Local
import Head from '../shared/components/Head';

// Pages Components
const Home: LazyExoticComponent<React.FC> = lazy(() => import('../pages/home'));

export default function RouterApp(): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Head title="Home" />
            <Home />
          </Suspense>
        }
      />
    </Routes>
  );
}
