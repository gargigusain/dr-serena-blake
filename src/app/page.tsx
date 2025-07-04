import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import QuoteSection from './components/QuoteSection'
import Services from './components/Services'
import RatesSection from './components/Ratessection'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <QuoteSection />
      <Services />
      <RatesSection />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
