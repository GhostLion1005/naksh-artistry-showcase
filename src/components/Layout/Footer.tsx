import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, MessageCircle, Heart } from "lucide-react";
import logo from "@/assets/naksh-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <img src={logo} alt="Naksh by Noor" className="h-10 w-auto" />
            <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xs">
              Timeless art, rooted in tradition. Handcrafting beautiful memories with love.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Heart size={16} className="text-primary" />
              <span>Made with love in Islamabad</span>
            </div>
          </motion.div>

          {/* Center: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-heading text-lg font-semibold text-foreground">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/nakshbynoor/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 bg-card border border-border rounded-lg hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <Instagram size={20} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              {/* EDIT: Update WhatsApp link here */}
              <a
                href="https://www.instagram.com/nakshbynoor/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-10 h-10 bg-card border border-border rounded-lg hover:bg-primary hover:border-primary transition-all duration-300"
              >
                <MessageCircle size={20} className="text-muted-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
            <div className="space-y-1">
              <p className="font-body text-sm text-muted-foreground">
                📍 Islamabad, Pakistan
              </p>
              <p className="font-body text-sm text-muted-foreground">
                🌎 Shipping Worldwide
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-border mt-8 pt-8 text-center"
        >
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} Naksh by Noor. All rights reserved. Crafted with love & tradition.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;