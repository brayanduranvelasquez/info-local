import { lazy, LazyExoticComponent, Suspense, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Local
import Head from '../shared/components/Head';

// Pages Components
const Home: LazyExoticComponent<React.FC> = lazy(() => import('../pages/home'));
const Categories: LazyExoticComponent<React.FC> = lazy(() => import('../pages/categories'));
const Politics: LazyExoticComponent<React.FC> = lazy(() => import('../pages/politics'));
const CasaDelCuadro: LazyExoticComponent<React.FC> = lazy(() => import('../pages/casa-del-cuadro'));

interface IProps {
  children: JSX.Element;
}

const Wrapper = ({ children }: IProps) => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return children;
};

export default function RouterApp(): JSX.Element {
  return (
    <Wrapper>
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
          path="/politics"
          element={
            <Suspense>
              <Head title="Politicas de privacidad" />
              <Politics />
            </Suspense>
          }
        />
        <Route
          path="/casa-del-cuadro"
          element={
            <Suspense>
              <Head title="Casa del cuadro" />
              <CasaDelCuadro />
            </Suspense>
          }
        />
      </Routes>
    </Wrapper>
  );
}
