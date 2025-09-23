import { motion } from "framer-motion";
import { Star, Quote, Heart, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Mock testimonials - Replace with real data from Instagram highlights later
const testimonials = [
  {
    id: "1",
    name: "Sarah Ahmed",
    location: "Dubai, UAE",
    rating: 5,
    text: "The Nikkah certificate from Naksh by Noor was absolutely stunning! The calligraphy was exquisite and the gold detailing made it feel so special. Perfect for our wedding ceremony. ✨",
    image: null,
    date: "September 2025"
  },
  {
    id: "2",
    name: "Fatima Khan",
    location: "London, UK", 
    rating: 5,
    text: "I ordered custom Islamic wall art and I'm blown away by the quality. The attention to detail is incredible and it looks perfect in our home. Highly recommend! 🏠💕",
    image: null,
    date: "September 2025"
  },
  {
    id: "3",
    name: "Aisha Rahman",
    location: "Toronto, Canada",
    rating: 5,
    text: "Amazing service from start to finish! The team was so patient with all my questions and revisions. The final wedding invitation design exceeded all expectations. 💍",
    image: null,
    date: "January 2025"
  },
  {
    id: "4",
    name: "Mariam Hassan",
    location: "Islamabad, Pakistan",
    rating: 5,
    text: "Beautiful work! I've ordered multiple pieces for gifts and each one has been perfect. The quality is outstanding and delivery was quick. Will definitely order again! 🎁",
    image: null,
    date: "December 2024"
  },
  {
    id: "5",
    name: "Zara Ali",
    location: "Melbourne, Australia",
    rating: 5,
    text: "The custom Ayatul Kursi frame is gorgeous! The calligraphy is so elegant and the gold accents make it truly special. It's the centerpiece of our living room now. 🤲",
    image: null,
    date: "November 2024"
  },
  {
    id: "6",
    name: "Noor Malik",
    location: "Karachi, Pakistan",
    rating: 5,
    text: "Exceptional craftsmanship! Every detail was perfect from the initial consultation to the final delivery. The team really cares about their work and it shows. ⭐",
    image: null,
    date: "May 2025"
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <motion.div
                    key={star}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: star * 0.1 }}
                  >
                    <Star className="h-8 w-8 text-primary fill-primary" />
                  </motion.div>
                ))}
              </div>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our <span className="text-gradient-gold">Clients Say</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              Read testimonials from our happy clients around the world who have experienced 
              the beauty and quality of our handcrafted Islamic art.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-luxury h-full relative">
                  <CardContent className="p-6 space-y-4">
                    {/* Quote Icon */}
                    <Quote className="h-8 w-8 text-primary/30 mb-2" />
                    
                    {/* Rating */}
                    <div className="flex space-x-1 mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star}
                          className={`h-4 w-4 ${
                            star <= testimonial.rating 
                              ? "text-primary fill-primary" 
                              : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="font-body text-muted-foreground leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Client Info */}
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-heading font-semibold text-foreground">
                            {testimonial.name}
                          </h4>
                          <p className="font-body text-sm text-muted-foreground">
                            {testimonial.location}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-body text-xs text-muted-foreground">
                            {testimonial.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-secondary/50 rounded-3xl p-12"
          >
            <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
            
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Join Our Happy Clients?
            </h2>
            
            <p className="font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the same level of quality, craftsmanship, and personal service that has 
              made our clients smile. Let's create something beautiful for you too!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="btn-gold"
              >
                <a
                  href="https://www.instagram.com/nakshbynoor/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Your Project
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="btn-outline-gold"
              >
                <a
                  href="https://www.instagram.com/stories/highlights/18148985131350137/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Instagram className="mr-2 h-4 w-4" />
                  See More Reviews
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Encourage Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-12 p-8 bg-primary/5 rounded-2xl border border-primary/20"
          >
            <Instagram className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
              Happy with your order?
            </h3>
            <p className="font-body text-sm text-muted-foreground">
              Tag us @nakshbynoor on Instagram and share your beautiful creations with the world! 
              We love seeing how our art becomes part of your special moments. ✨
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;