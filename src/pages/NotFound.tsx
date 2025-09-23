import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* 404 Number */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-8xl md:text-9xl font-bold text-gradient-gold mb-4"
          >
            404
          </motion.h1>
          
          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4 mb-8"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Oops! Page Not Found
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              The page you're looking for seems to have wandered off like a beautiful calligraphy stroke. 
              Let's get you back to exploring our art collection.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              asChild
              size="lg"
              className="btn-gold"
            >
              <Link to="/" className="flex items-center">
                <Home className="mr-2 h-5 w-5" />
                Return Home
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="btn-outline-gold"
            >
              <button
                onClick={() => window.history.back()}
                className="flex items-center"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Go Back
              </button>
            </Button>
          </motion.div>

          {/* Additional Help */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 p-6 bg-secondary/50 rounded-2xl"
          >
            <p className="font-body text-sm text-muted-foreground mb-4">
              Looking for something specific? Try these popular pages:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link 
                to="/about"
                className="font-body text-sm text-primary hover:text-primary/80 transition-colors underline"
              >
                About Us
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link 
                to="/testimonials"
                className="font-body text-sm text-primary hover:text-primary/80 transition-colors underline"
              >
                Testimonials
              </Link>
              <span className="text-muted-foreground">•</span>
              <a 
                href="https://www.instagram.com/nakshbynoor/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-primary hover:text-primary/80 transition-colors underline"
              >
                Instagram
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
