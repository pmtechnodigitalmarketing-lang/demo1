import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AuroraBackground from './components/ui/AuroraBackground';
import FloatingContact from './components/ui/FloatingContact';
import InfiniteMarquee from './components/ui/InfiniteMarquee';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Locations from './pages/Locations';
import LocationDetail from './pages/LocationDetail';
import Blogs from './pages/Blogs';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col relative pt-[48px]">
      <AuroraBackground />
      <InfiniteMarquee />
      <Navbar />
      <FloatingContact />
      
      <main className="flex-grow pt-24">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:cityId" element={<LocationDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;
