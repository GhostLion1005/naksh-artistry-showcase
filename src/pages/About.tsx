import { motion } from "framer-motion";
import { Heart, MapPin, Globe, Palette, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import artistWorkspace from "@/assets/artist-workspace.jpg";

const About = () => {
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
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient-gold">Naksh by Noor</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              Artist, timeless art, rooted in tradition. Handcrafting Nikkah Certificates & more. ✨
            </p>
            <div className="flex items-center justify-center space-x-6 mt-6 text-primary">
              <div className="flex items-center space-x-2">
                <MapPin size={20} />
                <span className="font-body">Islamabad 🇵🇰</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe size={20} />
                <span className="font-body">Shipping worldwide 🌎</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src={artistWorkspace}
                  alt="Artist workspace"
                  className="rounded-2xl shadow-luxury w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-glow">
                  <Palette className="h-8 w-8" />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground">
                Preserving Heritage Through <span className="text-gradient-gold">Art</span>
              </h2>
              
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  At Naksh by Noor, we believe that every special moment deserves to be celebrated with 
                  timeless beauty. Our journey began with a passion for preserving the rich traditions 
                  of Islamic art and calligraphy, bringing them into the modern world with contemporary elegance.
                </p>
                
                <p>
                  Each piece we create is more than just art—it's a labor of love, carefully handcrafted 
                  using traditional techniques passed down through generations. From intricate Nikkah 
                  certificates to personalized Islamic wall art, every creation tells a unique story.
                </p>
                
                <p>
                  Based in the beautiful city of Islamabad, Pakistan, we proudly serve clients worldwide, 
                  shipping our handcrafted treasures across the globe. Our commitment to quality, 
                  authenticity, and personal service has made us a trusted choice for those seeking 
                  meaningful Islamic art.
                </p>
              </div>

              <Button
                asChild
                className="btn-gold"
              >
                <a
                  href="https://www.instagram.com/nakshbynoor/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Your Custom Project
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="font-heading text-3xl font-bold text-center text-foreground mb-12">
              Our <span className="text-gradient-gold">Values</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="h-8 w-8" />,
                  title: "Crafted with Love",
                  description: "Every piece is created with passion, care, and attention to the smallest details, ensuring your memories are honored beautifully."
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  title: "Authentic Tradition",
                  description: "We honor centuries-old Islamic art traditions while incorporating modern aesthetics to create timeless masterpieces."
                },
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Personal Connection",
                  description: "We work closely with each client to understand their vision and create truly personalized art that reflects their story."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="card-luxury text-center h-full">
                    <CardContent className="p-8 space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full text-primary">
                        {value.icon}
                      </div>
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {value.title}
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-secondary/50 rounded-3xl p-12"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Create Something Beautiful Together?
            </h2>
            <p className="font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need a custom Nikkah certificate, Islamic wall art, or have a unique vision in mind, 
              we'd love to bring your ideas to life with our traditional craftsmanship and modern touch.
            </p>
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
                Let's Chat About Your Project
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;