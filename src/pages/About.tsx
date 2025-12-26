import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Heart, Recycle, Sparkles, Users } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Emotion First',
    description: 'We believe gifts should make hearts skip a beat. Every cassette carries a story, a memory, a feeling.',
  },
  {
    icon: Recycle,
    title: 'Sustainability',
    description: 'By giving vintage cassettes new life, we reduce waste while creating something beautiful and meaningful.',
  },
  {
    icon: Sparkles,
    title: 'Creativity',
    description: 'We blend old-school charm with modern technology, proving that the best innovations honor the past.',
  },
  {
    icon: Users,
    title: 'Human Connection',
    description: 'In a digital world, we help people reconnect through tangible, thoughtful gifts that say "I know you."',
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Recordify | Our Story</title>
        <meta 
          name="description" 
          content="Recordify was created to bring back the emotion of physical music in a digital world. Learn about our mission, values, and sustainable approach to gifting." 
        />
      </Helmet>
      <Layout>
        <section className="py-12 md:py-20">
          <div className="section-container">
            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center mb-20"
            >
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                Music Deserves to Be Held
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                In an age of streaming and playlists, we wondered: what happened to 
                the mixtape? The hand-labeled cassette passed between friends? 
                The physical token of "I made this for you"?
              </p>
            </motion.div>

            {/* Story */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Recordify started with a simple idea: what if you could hold a playlist 
                    in your hands? What if streaming didn't have to feel so... invisible?
                  </p>
                  <p>
                    We started collecting vintage cassettes from thrift stores and estate 
                    sales. Tapes that once held someone's favorite songs, now waiting for 
                    a new chapter. We clean them, restore them, and give them new covers 
                    with QR codes that link to modern playlists.
                  </p>
                  <p>
                    The result? A bridge between generations. A gift that makes sense to 
                    both your grandmother and your best friend. A keepsake that proves 
                    music has always been about connection.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl bg-gradient-card overflow-hidden shadow-card">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <p className="font-serif text-6xl md:text-8xl font-semibold text-primary/20">
                        "
                      </p>
                      <p className="font-serif text-xl md:text-2xl text-foreground italic max-w-md">
                        The best gift is one that says 
                        'I know you' without saying a word.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-12">
                What We Believe
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 text-center shadow-soft"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary mb-4">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Founder Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto bg-gradient-card rounded-3xl p-8 md:p-12 text-center"
            >
              <p className="text-sm text-primary font-medium uppercase tracking-wider mb-4">
                A Note from the Founder
              </p>
              <p className="font-serif text-xl md:text-2xl text-foreground italic leading-relaxed mb-6">
                "I started Recordify after giving my mom a cassette with her wedding 
                playlist. She cried. Not because of the music, but because I remembered. 
                That's what we're really selling here—the feeling of being known."
              </p>
              <p className="text-muted-foreground">— The Recordify Team</p>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
