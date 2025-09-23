import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Star, Heart, Sparkles } from "lucide-react";

const BookingSection = () => {
  return (
    <section className="py-20 bg-gradient-elegant relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 mb-12"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <Sparkles className="h-16 w-16 text-primary" />
              </motion.div>
            </div>
            
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              Ready to Create Something{" "}
              <span className="text-gradient-gold">Extraordinary?</span>
            </h2>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Let's discuss your vision and create a personalized masterpiece that celebrates your special moments with timeless elegance.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Made with Love",
                description: "Every piece is crafted with passion and attention to detail"
              },
              {
                icon: <Star className="h-6 w-6" />,
                title: "Premium Quality",
                description: "Using only the finest materials and traditional techniques"
              },
              {
                icon: <MessageCircle className="h-6 w-6" />,
                title: "Personal Service",
                description: "Direct communication throughout your project journey"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-3"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full text-primary mb-2">
                  {feature.icon}
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* EDIT: Update booking link here */}
            <Button
              asChild
              size="lg"
              className="btn-gold text-lg px-8 py-6 h-auto shadow-glow"
            >
              <a
                href="https://www.instagram.com/nakshbynoor/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <MessageCircle className="mr-3 h-6 w-6" />
                Start Your Custom Design Journey
              </a>
            </Button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 space-y-2"
          >
            <p className="font-body text-sm text-muted-foreground">
              💬 Quick response within 2-4 hours
            </p>
            <p className="font-body text-sm text-muted-foreground">
              🎨 Free consultation & design preview
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;