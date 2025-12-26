import productBasic from '@/assets/product-basic.jpg';
import productPremium from '@/assets/product-premium.jpg';
import productDeluxe from '@/assets/product-deluxe.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  longDescription: string;
  image: string;
  features: string[];
  popular?: boolean;
}

export const products: Product[] = [
  {
    id: 'basic-cassette',
    name: 'Basic Cassette',
    price: 29,
    description: 'A beautifully refurbished vintage cassette with your custom cover and QR code.',
    longDescription: 'Perfect for those who appreciate simplicity. Our Basic Cassette features a carefully restored vintage cassette with your personalized cover design and a QR code that links directly to your Spotify playlist.',
    image: productBasic,
    features: [
      'Refurbished vintage cassette',
      'Custom printed cover',
      'QR code linking to Spotify',
      'Standard packaging',
    ],
  },
  {
    id: 'premium-cassette',
    name: 'Premium Cassette',
    price: 49,
    description: 'Elevated presentation with premium packaging and a handwritten note card.',
    longDescription: 'Take your gift to the next level. The Premium Cassette includes everything in the Basic, plus a beautiful gift box, a handwritten note card with your message, and premium tissue paper wrapping.',
    image: productPremium,
    features: [
      'Everything in Basic',
      'Premium gift box',
      'Handwritten note card',
      'Tissue paper wrapping',
      'Priority processing',
    ],
    popular: true,
  },
  {
    id: 'deluxe-gift-box',
    name: 'Deluxe Gift Box',
    price: 79,
    description: 'The ultimate nostalgic experience with dried flowers, ribbon, and luxury packaging.',
    longDescription: 'Create an unforgettable unboxing experience. Our Deluxe Gift Box includes the Premium Cassette, dried flower arrangement, satin ribbon, and a keepsake wooden box that becomes a treasured memory holder.',
    image: productDeluxe,
    features: [
      'Everything in Premium',
      'Dried flower arrangement',
      'Satin ribbon finishing',
      'Keepsake wooden box',
      'Express shipping',
      'Gift wrapping service',
    ],
  },
];

export const themes = [
  { id: 'romantic', name: 'Romantic', color: 'hsl(350, 60%, 70%)' },
  { id: 'retro', name: 'Retro', color: 'hsl(35, 60%, 55%)' },
  { id: 'indie', name: 'Indie', color: 'hsl(180, 40%, 50%)' },
  { id: 'minimal', name: 'Minimal', color: 'hsl(0, 0%, 40%)' },
  { id: 'custom', name: 'Custom', color: 'hsl(280, 50%, 60%)' },
];
