import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Products from '@/components/Products';
import Solutions from '@/components/Solutions';
import CaseStudies from '@/components/CaseStudies';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Solutions />
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
