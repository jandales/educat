import './App.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Alert from './components/sections/Alert';
import Navigation from './components/sections/Navigation';
import Hero from './components/sections/Hero';
import IconDown from './components/sections/IconDown';
import Products from './components/sections/Products';
import Carousels from './components/sections/Corousels';
import Offers from './components/sections/Offers';
import Banner from './components/sections/Banner';
import CountCard from './components/sections/CountCard';
import Testimonials from './components/sections/Testimonials';
import Partners from './components/sections/Partners';
import BannerBottom from './components/sections/BannerButton';
import Footer from './components/sections/Footer';

function App() {
  Aos.init({
    duration: 2000,
    offset : 0,
  });
  return (
    <div className="w-full lg:p-0  lg:max-w-[1440px]">
      <Alert />
      <Navigation />
      <Hero />
      {/* <IconDown /> */}
      <Products />
      <Carousels />
      <Offers />
      <Banner />
      <CountCard />
      <Testimonials />
      <Partners />
      <BannerBottom />
      <Footer />

    </div>    
  )
}

export default App
