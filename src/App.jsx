

import TwoImages from './homePage/TwoImages';
import ReadStrory from './homePage/ReadStory';
import ShoespageImages from './homePage/ShoespageImage.jsx';
import AnotherShoes from './homePage/AnotherShoes.jsx';
import FirstShoesPage from './homePage/FirstShoesPage.jsx';
import AboutUs from "./homePage/AboutUs.jsx";
import Footer from './homePage/Footer.jsx';
import Header from './homePage/Header.jsx'


export default function App() {
  return (
    <>
      <div className="grid-layout">
 <Header/>
<TwoImages/>
<ReadStrory/>
<FirstShoesPage/>
<AnotherShoes/>
<ShoespageImages/>
<AboutUs/>
<Footer/>
</div>
</>

  );
}
