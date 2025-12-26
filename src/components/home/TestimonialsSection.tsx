import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'New York, NY',
    text: 'I gave this to my partner on our anniversary with our first dance playlist. They cried happy tears. It\'s now displayed on our bookshelf.',
    rating: 5,
  },
  {
    name: 'James K.',
    location: 'Austin, TX',
    text: 'My dad is in his 60s and this gift brought back so many memories for him. The quality is amazing and the QR code works perfectly.',
    rating: 5,
  },
  {
    name: 'Emily R.',
    location: 'Seattle, WA',
    text: 'Beautifully packaged, thoughtfully made. It arrived faster than expected and looked even better than the photos. Will definitely order again!',
    rating: 5,
  },
];

export function TestimonialsSection() {
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
            Stories from Our Customers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every cassette carries a story. Here are some of theirs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-soft"
            >
              <Quote className="w-10 h-10 text-primary/30 mb-4" />
              
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-serif font-semibold text-muted-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
