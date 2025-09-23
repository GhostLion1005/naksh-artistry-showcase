import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// EDIT: Replace with real testimonials from Instagram "Client Love" highlights
const testimonials = [
  {
    id: 1,
    name: "Fatima A.",
    text: "Absolutely stunning work! The Nikkah certificate was beyond my expectations. The calligraphy was beautiful and the gold details made it so elegant. Thank you for making our special day even more memorable! ✨",
    rating: 5,
    location: "Karachi"
  },
  {
    id: 2,
    name: "Sarah M.",
    text: "I ordered custom Islamic wall art and it's the centerpiece of our home now. The attention to detail and quality is exceptional. Highly recommend Naksh by Noor for anyone looking for authentic Islamic art! 🎨",
    rating: 5,
    location: "London"
  },
  {
    id: 3,
    name: "Ahmed K.",
    text: "Professional service and beautiful artwork. The wedding invitations were exactly what we wanted - elegant, traditional, and unique. Great communication throughout the process. Will definitely order again! 💫",
    rating: 5,
    location: "Toronto"
  },
  {
    id: 4,
    name: "Aisha R.",
    text: "The custom Ayatul Kursi piece is gorgeous! Perfect for our new home. The craftsmanship is top-notch and shipping was fast. Thank you for creating such beautiful Islamic art! 🤍",
    rating: 5,
    location: "Dubai"
  },
  {
    id: 5,
    name: "Zainab H.",
    text: "Amazing experience from start to finish. The artist really understood my vision and created something truly special. The quality exceeded my expectations. Highly recommended! 🌟",
    rating: 5,
    location: "Melbourne"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* EDIT: Change section title here */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonials from our valued clients worldwide who trusted us with their special moments
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-2xl p-8 md:p-12 card-luxury"
              >
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-primary fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="font-body text-lg md:text-xl text-foreground text-center leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Client Info */}
                <div className="text-center">
                  <p className="font-heading text-lg font-semibold text-foreground mb-1">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    📍 {testimonials[currentIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full px-4">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="sm"
                className="btn-elegant rounded-full w-12 h-12 p-0 shadow-lg"
              >
                <ChevronLeft size={20} />
              </Button>
              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="sm"
                className="btn-elegant rounded-full w-12 h-12 p-0 shadow-lg"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="font-body text-muted-foreground mb-6">
            Ready to create your own beautiful testimonial? Let's start your custom design journey!
          </p>
          {/* EDIT: Update Instagram link here */}
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
              Start Your Order
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;