import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ab1 from "@/assets/ab.jpg";
import ab2 from "@/assets/ab2.jpg";
import ab3 from "@/assets/ab3.jpg";
import ab4 from "@/assets/ab4.jpg";
import ab5 from "@/assets/ab5.jpg";
import ab6 from "@/assets/ab6.jpg";

// Mock Instagram posts - Replace with real API integration later
const mockPosts = [
  {
    id: "1",
    image: ab1,
    caption: "Beautiful Nikkah certificate with traditional calligraphy and gold accents ✨ #NikkahhCertificate #IslamicArt #Calligraphy",
    likes: 1295,
    url: "https://www.instagram.com/nakshbynoor/reel/DD4pOxSthPc/"
  },
  {
    id: "2", 
    image: ab2,
    caption: "Behind the scenes in our studio 🎨 Every piece is crafted with love and attention to detail #HandmadeArt #ArtStudio",
    likes: 121,
    url: "https://www.instagram.com/nakshbynoor/p/DOqmQBlDPIj/"
  },
  {
    id: "3",
    image: ab3, 
    caption: "Custom wedding nikahnamahs with intricate Islamic patterns 💫 #WeddingInvitation #IslamicDesign",
    likes: 987,
    url: "https://www.instagram.com/nakshbynoor/reel/DOd8aMMDKvQ/"
  },
  {
    id: "4",
    image: ab5,
    caption: "The art of traditional calligraphy - preserving heritage through each stroke ✍️ #Calligraphy #Heritage",
    likes: 134,
    url: "https://www.instagram.com/nakshbynoor/p/DOV7vLDDAah/"
  },
  {
    id: "5",
    image: ab6,
    caption: "Elegant frame design with customised hand-painted Nikah Namah 🤍 Available for custom orders #IslamicArt #AyatulKursi",
    likes: 60,
    url: "https://www.instagram.com/nakshbynoor/reel/DN8fDElDC-Y/"
  },
  {
    id: "6",
    image: ab4,
    caption: "Customised, hand-painted Nikkah certificate for the beautiful @zarnabshahadat  ✨ #LuxuryArt #GoldLeaf #Handcrafted",
    likes: 987,
    url: "https://www.instagram.com/nakshbynoor/p/DLISe_FNF-C/"
  }
];

const InstagramFeed = () => {
  const [selectedPost, setSelectedPost] = useState<typeof mockPosts[0] | null>(null);
  const [visiblePosts, setVisiblePosts] = useState(6);

  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 6);
  };

  return (
    <section id="instagram-feed" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* EDIT: Section Title - Change "Latest Creations" text here */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest <span className="text-gradient-gold">Creations</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow our artistic journey on Instagram and discover the beauty of handcrafted Islamic art
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockPosts.slice(0, visiblePosts).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="relative overflow-hidden rounded-2xl card-luxury border aspect-square">
                <img
                  src={post.image}
                  alt="Instagram post"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                    <Instagram size={32} />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white text-sm">
                    <p className="truncate">{post.caption}</p>
                    <p className="text-xs text-gray-300 mt-1">❤️ {post.likes} likes</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {visiblePosts < mockPosts.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              onClick={loadMorePosts}
              variant="outline"
              size="lg"
              className="btn-outline-gold"
            >
              Load More Posts
            </Button>
          </motion.div>
        )}

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
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
            className="flex items-center"
          >
            <Instagram className="mr-2 h-5 w-5" />
            Follow @nakshbynoor
          </a>
        </Button>
        </motion.div>
      </div>

      {/* Post Modal */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="max-w-2xl">
          {selectedPost && (
            <>
              <DialogHeader>
                <DialogTitle className="font-heading">Instagram Post</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <img
                  src={selectedPost.image}
                  alt="Instagram post"
                  className="w-full rounded-lg"
                />
                <div className="space-y-2">
                  <p className="font-body text-foreground">{selectedPost.caption}</p>
                  <p className="text-sm text-muted-foreground">❤️ {selectedPost.likes} likes</p>
                </div>
                  <Button
                    asChild
                    className="btn-gold w-full"
                  >
                    <a
                      href="https://www.instagram.com/nakshbynoor/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on Instagram
                    </a>
                  </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default InstagramFeed;
