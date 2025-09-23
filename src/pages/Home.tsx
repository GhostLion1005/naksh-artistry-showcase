import HeroSection from "@/components/Home/HeroSection";
import InstagramFeed from "@/components/Home/InstagramFeed";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import TestimonialsCarousel from "@/components/Home/TestimonialsCarousel";
import BookingSection from "@/components/Home/BookingSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* EDIT: Reorder sections by commenting/uncommenting lines below */}
      <HeroSection />
      <InstagramFeed />
      <FeaturedProducts />
      <TestimonialsCarousel />
      <BookingSection />
    </div>
  );
};

export default Home;