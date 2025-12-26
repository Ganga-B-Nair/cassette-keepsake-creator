import { motion } from 'framer-motion';
import { Music, Palette, Package } from 'lucide-react';

const steps = [
  {
    icon: Music,
    title: 'Choose Your Playlist',
    description: 'Pick any Spotify playlist you love—your favorite songs, a special moment, or a curated memory.',
  },
  {
    icon: Palette,
    title: 'Customize Your Cassette',
    description: 'Add names, a personal message, and choose a theme that matches your story.',
  },
  {
    icon: Package,
    title: 'Receive Your Keepsake',
    description: 'We craft your cassette by hand and deliver a nostalgic gift they\'ll treasure forever.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to create a meaningful gift
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center"
            >
              {/* Step number line connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-border" />
              )}

              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-card shadow-card mb-6">
                <step.icon className="w-10 h-10 text-primary" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-semibold text-sm">
                  {index + 1}
                </span>
              </div>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
