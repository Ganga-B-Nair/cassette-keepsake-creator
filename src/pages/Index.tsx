import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { ProductsSection } from '@/components/home/ProductsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { SustainabilitySection } from '@/components/home/SustainabilitySection';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Recordify | Turn Your Playlist Into a Timeless Cassette</title>
        <meta 
          name="description" 
          content="Create personalized vintage cassette keepsakes from your Spotify playlists. The perfect nostalgic gift for music lovers. Sustainably made, beautifully crafted." 
        />
      </Helmet>
      <Layout>
        <HeroSection />
        <HowItWorksSection />
        <ProductsSection />
        <TestimonialsSection />
        <SustainabilitySection />
      </Layout>
    </>
  );
};

export default Index;
