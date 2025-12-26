import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/context/CartContext';
import { products, themes } from '@/data/products';
import { Check, ShoppingBag, Music, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const initialProduct = searchParams.get('product') || 'premium-cassette';
  
  const [selectedProduct, setSelectedProduct] = useState(initialProduct);
  const [formData, setFormData] = useState({
    customerName: '',
    recipientName: '',
    message: '',
    playlistUrl: '',
    theme: 'romantic',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const { addItem } = useCart();
  const product = products.find((p) => p.id === selectedProduct) || products[1];

  useEffect(() => {
    const productParam = searchParams.get('product');
    if (productParam && products.find(p => p.id === productParam)) {
      setSelectedProduct(productParam);
    }
  }, [searchParams]);

  const validateSpotifyUrl = (url: string) => {
    const spotifyRegex = /^https?:\/\/(open\.)?spotify\.com\/(playlist|album|track)\/[a-zA-Z0-9]+/;
    return spotifyRegex.test(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Please enter your name';
    }
    if (!formData.recipientName.trim()) {
      newErrors.recipientName = 'Please enter the recipient\'s name';
    }
    if (!formData.playlistUrl.trim()) {
      newErrors.playlistUrl = 'Please enter a Spotify playlist URL';
    } else if (!validateSpotifyUrl(formData.playlistUrl)) {
      newErrors.playlistUrl = 'Please enter a valid Spotify URL';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    addItem({
      id: `${product.id}-${Date.now()}`,
      name: product.name,
      price: product.price,
      image: product.image,
      customization: formData,
    });

    setFormData({
      customerName: '',
      recipientName: '',
      message: '',
      playlistUrl: '',
      theme: 'romantic',
    });
    setErrors({});
  };

  return (
    <>
      <Helmet>
        <title>Shop Personalized Cassettes | Recordify</title>
        <meta 
          name="description" 
          content="Create your personalized vintage cassette. Choose from Basic, Premium, or Deluxe options. Customize with your Spotify playlist and personal message." 
        />
      </Helmet>
      <Layout>
        <section className="py-12 md:py-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Create Your Cassette
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose your style, personalize your design, and we'll create a keepsake you'll treasure forever.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Product Selection */}
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
                  1. Choose Your Package
                </h2>
                
                <div className="space-y-4 mb-8">
                  {products.map((p) => (
                    <motion.div
                      key={p.id}
                      whileHover={{ scale: 1.01 }}
                      onClick={() => setSelectedProduct(p.id)}
                      className={`relative cursor-pointer rounded-xl p-4 border-2 transition-all ${
                        selectedProduct === p.id
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex gap-4">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-serif font-semibold text-foreground">
                              {p.name}
                            </h3>
                            <span className="font-serif font-semibold text-primary">
                              ${p.price}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {p.description}
                          </p>
                        </div>
                        {selectedProduct === p.id && (
                          <div className="absolute top-4 right-4">
                            <Check className="w-5 h-5 text-primary" />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Product Features */}
                <div className="bg-secondary/50 rounded-xl p-6">
                  <h3 className="font-serif font-semibold text-foreground mb-4">
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Customization Form */}
              <div>
                <h2 className="font-serif text-xl font-semibold text-foreground mb-6">
                  2. Personalize Your Cassette
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="customerName">Your Name</Label>
                      <Input
                        id="customerName"
                        placeholder="Enter your name"
                        value={formData.customerName}
                        onChange={(e) => {
                          setFormData({ ...formData, customerName: e.target.value });
                          setErrors({ ...errors, customerName: '' });
                        }}
                        className={errors.customerName ? 'border-destructive' : ''}
                      />
                      {errors.customerName && (
                        <p className="text-xs text-destructive flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.customerName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="recipientName">Recipient's Name</Label>
                      <Input
                        id="recipientName"
                        placeholder="Who is this gift for?"
                        value={formData.recipientName}
                        onChange={(e) => {
                          setFormData({ ...formData, recipientName: e.target.value });
                          setErrors({ ...errors, recipientName: '' });
                        }}
                        className={errors.recipientName ? 'border-destructive' : ''}
                      />
                      {errors.recipientName && (
                        <p className="text-xs text-destructive flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.recipientName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="playlistUrl">Spotify Playlist URL</Label>
                    <div className="relative">
                      <Music className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="playlistUrl"
                        placeholder="https://open.spotify.com/playlist/..."
                        value={formData.playlistUrl}
                        onChange={(e) => {
                          setFormData({ ...formData, playlistUrl: e.target.value });
                          setErrors({ ...errors, playlistUrl: '' });
                        }}
                        className={`pl-10 ${errors.playlistUrl ? 'border-destructive' : ''}`}
                      />
                    </div>
                    {errors.playlistUrl && (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.playlistUrl}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Personal Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Write a heartfelt message for the cassette cover..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Theme</Label>
                    <div className="flex flex-wrap gap-2">
                      {themes.map((theme) => (
                        <button
                          key={theme.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, theme: theme.id })}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            formData.theme === theme.id
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-secondary text-secondary-foreground hover:bg-accent'
                          }`}
                        >
                          {theme.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Preview Card */}
                  <div className="bg-gradient-card rounded-xl p-6 border border-border">
                    <p className="text-sm text-muted-foreground mb-2">Preview</p>
                    <div className="bg-card rounded-lg p-4 shadow-soft">
                      <p className="font-serif text-lg font-semibold text-foreground mb-1">
                        {formData.recipientName || 'Recipient Name'}
                      </p>
                      <p className="text-sm text-muted-foreground italic line-clamp-2">
                        {formData.message || 'Your personal message will appear here...'}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        From {formData.customerName || 'Your Name'}
                      </p>
                    </div>
                  </div>

                  <Button type="submit" variant="hero" size="xl" className="w-full">
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart — ${product.price}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Shop;
