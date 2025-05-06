
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategorySection from '@/components/CategorySection';
import WatchPage from '@/components/PremiumWatch';
import EarbudsPage from '@/components/EarbudsPage';
import PremiumBags from '../components/PremiumBags';
import EssentialAccessories from '../components/EssentialAccessories';
import ReviewsCarousel from '@/components/ReviewsCarousel';
import StayConnected from '@/components/StayConnected';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <CategorySection />
      <WatchPage />
      <EarbudsPage />
      <PremiumBags />
      <EssentialAccessories />
      <ReviewsCarousel />
      <StayConnected />
      <Footer />
    </div>
  );
};

export default Index;
