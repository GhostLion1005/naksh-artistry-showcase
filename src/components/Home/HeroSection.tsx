import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/naksh-logo.png";

const HeroSection = () => {
  const scrollToInstagram = () => {
    const instagramSection = document.getElementById("instagram-feed");
    if (instagramSection) {
      instagramSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Main Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <img 
              src={logo} 
              alt="Naksh by Noor" 
              className="h-32 md:h-40 w-auto mx-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* EDIT: Update tagline and description here */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
          >
            Timeless Art,{" "}
            <span className="text-gradient-gold">Rooted in Tradition</span>
          </motion.h1>

          {/* EDIT: Update subtitle text here */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Handcrafting Nikah Certificates & more with love and devotion.
            <br />
            <span className="text-primary">📍 Islamabad, Pakistan | Shipping Worldwide 🌎 </span>
          </motion.p>

          {/* CTA Buttons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          > */}
            <Button
              onClick={scrollToInstagram}
              variant="outline"
              size="lg"
              className="btn-outline-gold group"
            >
              <Instagram className="mr-2 h-5 w-5" />
              Browse Instagram
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            {/* EDIT: Update booking link here */}
            <Button
              asChild
              size="lg"
              className="btn-gold"
            >
              <a 
                href="https://www.instagram.com/nakshbynoor/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Book Custom Design
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;