import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Music, Palette, Package, QrCode, Smartphone, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const steps = [
  {
    icon: Music,
    title: 'Pick Your Playlist',
    description: 'Head to Spotify and find the playlist, album, or track that holds your memories. Copy the share link—that\'s all we need.',
  },
  {
    icon: Palette,
    title: 'Design Your Cover',
    description: 'Choose a theme that matches the vibe—romantic, retro, indie, or go fully custom. Add names and a personal message.',
  },
  {
    icon: Package,
    title: 'We Craft Your Cassette',
    description: 'Our team lovingly restores a vintage cassette, prints your custom cover, and adds a QR code that links directly to your playlist.',
  },
  {
    icon: Smartphone,
    title: 'Scan & Play',
    description: 'When the cassette arrives, just scan the QR code with any smartphone camera. The playlist opens instantly on Spotify.',
  },
];

const faqs = [
  {
    question: 'Does the cassette actually play music?',
    answer: 'No, the cassette is a decorative keepsake. The music plays through Spotify when you scan the QR code. This means you get unlimited playback and always have access to your playlist.',
  },
  {
    question: 'What if I don\'t have Spotify?',
    answer: 'The QR code links to Spotify, which offers a free tier. The recipient can create a free account to listen. We\'re exploring Apple Music support for the future.',
  },
  {
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 5-7 business days within the US. International orders take 10-14 business days. Express shipping is available for Premium and Deluxe packages.',
  },
  {
    question: 'Can I return or exchange my order?',
    answer: 'Due to the personalized nature of our products, we cannot accept returns. However, if your cassette arrives damaged, we\'ll replace it for free.',
  },
  {
    question: 'What if my playlist is removed from Spotify?',
    answer: 'If you own the playlist, it will always be available as long as your Spotify account is active. For public playlists, we recommend creating your own version.',
  },
  {
    question: 'Can I order in bulk for events?',
    answer: 'Yes! We offer bulk pricing for weddings, corporate events, and special occasions. Contact us at hello@recordify.com for a custom quote.',
  },
];

const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>How It Works | Recordify</title>
        <meta 
          name="description" 
          content="Learn how Recordify transforms your Spotify playlist into a personalized vintage cassette. Simple 4-step process, sustainable materials, lasting memories." 
        />
      </Helmet>
      <Layout>
        <section className="py-12 md:py-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                How Recordify Works
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From your playlist to their hands—here's how we create your personalized cassette keepsake.
              </p>
            </motion.div>

            {/* Steps */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />

                <div className="space-y-12">
                  {steps.map((step, index) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-6 md:gap-8"
                    >
                      <div className="relative z-10 flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-card shadow-card flex items-center justify-center">
                        <step.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                      </div>
                      <div className="flex-1 pt-2">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          Step {index + 1}
                        </span>
                        <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mt-1 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* QR Code Explanation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto bg-gradient-card rounded-3xl p-8 md:p-12 mb-20 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <QrCode className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                The Magic Behind the QR Code
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Each cassette features a unique QR code printed directly on the cover. 
                When scanned with any smartphone, it instantly opens your chosen Spotify playlist. 
                No apps to download, no complicated setup—just point, scan, and play.
              </p>
              <div className="grid sm:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="font-serif text-3xl font-semibold text-primary">∞</p>
                  <p className="text-sm text-muted-foreground">Unlimited plays</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-semibold text-primary">2s</p>
                  <p className="text-sm text-muted-foreground">Scan time</p>
                </div>
                <div>
                  <p className="font-serif text-3xl font-semibold text-primary">0</p>
                  <p className="text-sm text-muted-foreground">Apps required</p>
                </div>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <div id="faq" className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-4">
                  <HelpCircle className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                  Got questions? We've got answers.
                </p>
              </motion.div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default HowItWorks;
