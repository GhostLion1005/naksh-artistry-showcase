# Naksh by Noor - Official Website

A luxury brand website for Naksh by Noor, specializing in handcrafted Islamic art, Nikkah certificates, and traditional calligraphy.

## ✨ Features

- **Luxury Design System**: Gold, beige, and elegant color palette with premium typography
- **Responsive Layout**: Beautiful on all devices with mobile-first design
- **Instagram Integration**: Dynamic feed integration (ready for Instagram Graph API)
- **WhatsApp Booking**: Direct integration with WhatsApp for customer inquiries
- **Smooth Animations**: Framer Motion for elegant page transitions and interactions
- **SEO Optimized**: Meta tags, structured data, and performance optimizations

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui with custom luxury variants
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **State Management**: TanStack React Query
- **Deployment**: Vercel (production-ready)

## 📄 Pages

- **Home**: Hero section, Instagram feed, featured products, booking CTA
- **About**: Brand story, values, and artist information  
- **Testimonials**: Client reviews and success stories
- **404**: Custom error page with brand styling

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <your-git-url>

# Navigate to project directory
cd naksh-by-noor-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup

For Instagram integration, you'll need to set up:
- Instagram Graph API credentials
- Business Instagram account
- Facebook Developer App

## 📱 Instagram Integration

The website includes Instagram feed components ready for API integration:

1. **Static Feed** (Current): Mock posts for development
2. **Dynamic Feed** (Production): Replace with Instagram Graph API

### Setting up Instagram API

1. Create a Facebook Developer App
2. Add Instagram Basic Display product
3. Get access tokens for your Instagram Business account
4. Replace mock data in `InstagramFeed.tsx` with API calls

## 🎨 Design System

### Colors (HSL Format)
- **Primary Gold**: `43 89% 52%`
- **Secondary Beige**: `35 15% 90%` 
- **Background Cream**: `35 25% 97%`
- **Text Black**: `0 0% 8%`

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
Custom variants for buttons, cards, and layouts using the design system tokens.

## 📧 Contact Integration

- **WhatsApp**: Direct booking links to +917983142083
- **Instagram**: @nakshbynoor
- **Location**: Islamabad, Pakistan
- **Shipping**: Worldwide

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure build settings (auto-detected)
3. Deploy with custom domain support

### Build Commands
```bash
# Production build
npm run build

# Preview build locally  
npm run preview

# Lint code
npm run lint
```

## 📊 Performance

- **Optimized images** with lazy loading
- **Code splitting** with React lazy loading
- **Minimal bundle size** with tree shaking
- **SEO optimized** with proper meta tags

## 🔧 Customization

### Adding New Products
Update `FeaturedProducts.tsx` with new product data and images.

### Modifying Colors
Edit color values in `src/index.css` and `tailwind.config.ts`.

### Instagram Posts
Replace mock data in `InstagramFeed.tsx` with real API integration.

## 📝 License

Private project for Naksh by Noor brand.

## 🤝 Support

For technical support or customization requests, contact the development team.

---

**Built with ❤️ using modern web technologies**