import { Banner } from './components/Banner/Banner';
import Brands from './components/Brands/Brands';
import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import PageEmailMarketing from './components/PageEmailMarketing/PageEmailMarketing';
import { PaquetaOutlet } from './components/PaquetaOutlet/PaquetaOutlet';
import { ProductCatalog } from './components/ProductCatalog/ProductCatalog';
import TopBar from './components/TopBar/TopBar';
function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Banner />
      <Info />
      <ProductCatalog />
      <PaquetaOutlet />
      <Carousel />
      <Brands />
      <PageEmailMarketing />
    </>
  );
}

export default App;
