import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import BannerSection from './components/banner-section/BannerSection';
import OffersSection from './components/offers-section/OffersSection';
import SpaceJourneySection from './components/space-journey-section/SpaceJourneySection';

function App() {
  return (
    <div className="App lato-bold">
      <Header />
      <main>
        <BannerSection />
        <OffersSection />
        <SpaceJourneySection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
