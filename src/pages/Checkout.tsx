import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/context/CartContext';
import { CheckCircle, ArrowLeft } from 'lucide-react';

const Checkout = () => {
  const { items, total, clearCart } = useCart();
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsComplete(true);
    clearCart();
  };

  if (isComplete) {
    return (
      <>
        <Helmet><title>Order Confirmed | Recordify</title></Helmet>
        <Layout>
          <section className="py-20 md:py-28">
            <div className="section-container">
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h1 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">Thank You!</h1>
                <p className="text-muted-foreground mb-8">Your order has been placed. We'll start crafting your cassette with love and send you tracking details soon.</p>
                <Link to="/"><Button variant="hero" size="lg">Back to Home</Button></Link>
              </motion.div>
            </div>
          </section>
        </Layout>
      </>
    );
  }

  if (items.length === 0) {
    return (
      <>
        <Helmet><title>Checkout | Recordify</title></Helmet>
        <Layout>
          <section className="py-20"><div className="section-container text-center">
            <p className="text-muted-foreground mb-4">Your cart is empty.</p>
            <Link to="/shop"><Button variant="hero">Start Shopping</Button></Link>
          </div></section>
        </Layout>
      </>
    );
  }

  return (
    <>
      <Helmet><title>Checkout | Recordify</title></Helmet>
      <Layout>
        <section className="py-12 md:py-20">
          <div className="section-container">
            <Link to="/cart" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="w-4 h-4" /> Back to Cart
            </Link>
            <div className="grid lg:grid-cols-2 gap-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="font-serif text-xl font-semibold">Shipping Address</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2"><Label>First Name</Label><Input required /></div>
                  <div className="space-y-2"><Label>Last Name</Label><Input required /></div>
                </div>
                <div className="space-y-2"><Label>Address</Label><Input required /></div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="space-y-2"><Label>City</Label><Input required /></div>
                  <div className="space-y-2"><Label>State</Label><Input required /></div>
                  <div className="space-y-2"><Label>ZIP</Label><Input required /></div>
                </div>
                <div className="space-y-2"><Label>Email</Label><Input type="email" required /></div>
                <h2 className="font-serif text-xl font-semibold pt-4">Payment</h2>
                <div className="bg-secondary/50 rounded-xl p-6 text-center text-muted-foreground">
                  Payment integration coming soon. This is a demo checkout.
                </div>
                <Button type="submit" variant="hero" size="xl" className="w-full">Place Order — ${total}</Button>
              </form>
              <div className="bg-card rounded-xl p-6 shadow-soft h-fit">
                <h3 className="font-serif font-semibold mb-4">Order Summary</h3>
                {items.map(item => (
                  <div key={item.id} className="flex gap-4 py-3 border-b border-border">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1"><p className="font-medium">{item.name}</p><p className="text-sm text-muted-foreground">Qty: {item.quantity}</p></div>
                    <p className="font-semibold">${item.price * item.quantity}</p>
                  </div>
                ))}
                <div className="flex justify-between pt-4 font-serif font-semibold text-lg">
                  <span>Total</span><span className="text-primary">${total}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Checkout;
