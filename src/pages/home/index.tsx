// Local
import Header from '../../shared/components/Header';
import Footer from '../../shared/components/Footer';
import SearcherSection from './components/SearcherSection';
import CategorySection from './components/CategorySection';
import OfferSection from './components/OfferSection';
import RegisterSection from './components/RegisterSection';

export default function HomePage() {
  return (
    <>
      <Header />

      <SearcherSection />
      <CategorySection />
      <OfferSection />
      <RegisterSection />

      <Footer />
    </>
  );
}
