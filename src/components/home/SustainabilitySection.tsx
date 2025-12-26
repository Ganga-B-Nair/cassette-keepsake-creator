import { motion } from 'framer-motion';
import { Recycle, Heart, Leaf } from 'lucide-react';

export function SustainabilitySection() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-card rounded-3xl p-8 md:p-12 text-center shadow-card"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Recycle className="w-8 h-8 text-primary" />
            </div>

            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
              Sustainably Made, Thoughtfully Given
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
              We reuse vintage cassettes that would otherwise be forgotten, 
              giving them new life as meaningful keepsakes. Each cassette is carefully 
              cleaned, restored, and personalized with love.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-3">
                  <Recycle className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium text-foreground text-sm">Refurbished</p>
                <p className="text-muted-foreground text-xs">Vintage cassettes</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-3">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium text-foreground text-sm">Handcrafted</p>
                <p className="text-muted-foreground text-xs">With care</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-3">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium text-foreground text-sm">Eco-friendly</p>
                <p className="text-muted-foreground text-xs">Packaging</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
