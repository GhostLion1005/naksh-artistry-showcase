import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import nikkahhCert from "@/assets/nikkah-certificate-sample.jpg";
import workspace from "@/assets/artist-workspace.jpg";

const featuredProducts = [
  {
    id: "1",
    title: "Nikkah Certificates",
    description: "Beautifully handcrafted Islamic wedding certificates with traditional calligraphy and gold accents.",
    image: nikkahhCert,
    features: ["Custom calligraphy", "Gold foil details", "Premium paper", "Personalized text"]
  },
  {
    id: "2", 
    title: "Islamic Wall Art",
    description: "Elegant Islamic art pieces featuring Quranic verses and traditional geometric patterns.",
    image: workspace,
    features: ["Hand-painted", "Multiple sizes", "Framing available", "Custom verses"]
  },
  {
    id: "3",
    title: "Wedding Invitations", 
    description: "Luxurious wedding invitations with intricate Islamic designs and calligraphy.",
    image: nikkahhCert,
    features: ["Unique designs", "RSVP cards included", "Envelope addressing", "Fast delivery"]
  },
  {
    id: "4",
    title: "Custom Commissions",
    description: "Bespoke Islamic art pieces created specifically for your vision and space.",
    image: workspace,
    features: ["Consultation included", "Original artwork", "Multiple revisions", "Certificate of authenticity"]
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-gradient-gold">Creations</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most cherished pieces, each one crafted with love, tradition, and attention to detail
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-luxury border-0 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {product.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-body text-sm font-medium text-foreground">Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* EDIT: Update all booking links here */}
                  <Button
                    asChild
                    className="btn-gold w-full mt-6"
                  >
                    <a
                      href="https://www.instagram.com/nakshbynoor/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Book Now
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-body text-muted-foreground mb-6">
            Have a custom idea in mind? We'd love to bring your vision to life!
          </p>
          {/* EDIT: Update custom project link here */}
          <Button
            asChild
            variant="outline"
            size="lg"
            className="btn-outline-gold"
          >
            <a
              href="https://www.instagram.com/nakshbynoor/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss Custom Project
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;