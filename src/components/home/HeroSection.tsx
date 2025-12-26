import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-cassette.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center grain-texture overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 text-muted-foreground text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              Handcrafted with love
            </motion.div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight mb-6 text-balance">
              Turn Your Playlist Into a{' '}
              <span className="text-primary italic">Timeless Cassette</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              A personalized vintage cassette that links to your Spotify playlist. 
              The perfect gift for music lovers.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link to="/shop">
                <Button variant="hero" size="xl" className="group">
                  Create Your Cassette
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="hero-outline" size="xl">
                  Learn How It Works
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-hover">
              <img
                src={heroImage}
                alt="Vintage cassette tape with personalized cover on warm cream background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-4 -left-4 sm:bottom-8 sm:-left-8 bg-card p-4 rounded-xl shadow-card"
            >
              <p className="text-sm text-muted-foreground">Starting from</p>
              <p className="font-serif text-2xl font-semibold text-foreground">$29</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
