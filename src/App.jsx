import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import About from './components/About';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Pricing />
        <About />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
