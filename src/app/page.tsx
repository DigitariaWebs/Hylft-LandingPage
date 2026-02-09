import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}