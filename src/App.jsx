import { Routes, Route } from 'react-router-dom';
import TwoImages from './homePage/TwoImages';
import ReadStory from './homePage/ReadStory';
import FashionCollection3 from './homePage/FashionCollection3.jsx';
import FashionCollection2 from './homePage/FashionCollection2.jsx';
import FashionCollection1 from './homePage/FashionCollection1.jsx';
import AboutUs from "./homePage/AboutUs.jsx";
import Footer from './homePage/Footer.jsx';
import Header from './homePage/Header.jsx'
import ShopPage from './pages/ShopPage';
import StorePage from './pages/StorePage';

function HomePage() {
  return (
    <div className="grid-layout">
      <Header />
      <section id="shop">
        <TwoImages />
        <ReadStory />
        <FashionCollection1 />
        <FashionCollection2 />
        <FashionCollection3 />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/store" element={<StorePage />} />
    </Routes>
  );
}