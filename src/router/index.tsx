import { lazy, LazyExoticComponent, Suspense, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Local
import Head from '../shared/components/Head';

// Pages Components
const Home: LazyExoticComponent<React.FC> = lazy(() => import('../pages/home'));
const Categories: LazyExoticComponent<React.FC> = lazy(() => import('../pages/categories'));
const Cuadros: LazyExoticComponent<React.FC> = lazy(() => import('../pages/categories/pages/adornos/pages/cuadros'));
const About: LazyExoticComponent<React.FC> = lazy(() => import('../pages/about'));
const Politics: LazyExoticComponent<React.FC> = lazy(() => import('../pages/politics'));

const Adornos: LazyExoticComponent<React.FC> = lazy(() => import('../pages/categories/pages/adornos'));
const CasaDelCuadro: LazyExoticComponent<React.FC> = lazy(
  () => import('../pages/categories/pages/adornos/pages/cuadros/pages/casa-del-cuadro'),
);

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
          path="/categories/adornos"
          index
          element={
            <Suspense>
              <Head title="Adornos" />
              <Adornos />
            </Suspense>
          }
        />
        <Route
          path="/categories/adornos/cuadros"
          element={
            <Suspense>
              <Head title="Locales" />
              <Cuadros />
            </Suspense>
          }
        />
        <Route
          path="/categories/adornos/cuadros/casa-del-cuadro"
          element={
            <Suspense>
              <Head title="Casa del cuadro" />
              <CasaDelCuadro />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense>
              <Head title="InfoLocal" />
              <About />
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
      </Routes>
    </Wrapper>
  );
}
