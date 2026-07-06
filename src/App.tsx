import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import Frisbees from './components/Frisbees';
import WhyVoodoo from './components/WhyVoodoo';
import Testimonials from './components/Testimonials';
import Wholesale from './components/Wholesale';
import StoreLocator from './components/StoreLocator';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-brand-black text-brand-off-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Catalog />
      <Frisbees />
      <WhyVoodoo />
      <Testimonials />
      <Wholesale />
      <StoreLocator />
      <Contact />
      <Footer />
    </div>
  );
}
