import { Outlet } from 'react-router-dom';

// Local
import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';

export default function HeaderAndFooter(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
