# Naksh by Noor - Website Deployment Guide

## Overview
This website is built with React + Vite, Tailwind CSS, and Framer Motion. It's optimized for deployment on Vercel.

## Quick Deployment to Vercel

### Method 1: Direct GitHub Integration (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Your site will be live at:** `https://your-project-name.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```

## Environment Setup

The website currently uses mock data. For real Instagram integration, you'll need:

1. **Instagram Basic Display API** or **Instagram Graph API**
2. **Environment Variables** (add in Vercel dashboard):
   ```
   VITE_INSTAGRAM_ACCESS_TOKEN=your_token_here
   VITE_INSTAGRAM_USER_ID=your_user_id_here
   ```

## Custom Domain Setup

1. **In Vercel Dashboard:**
   - Go to your project → Settings → Domains
   - Add your custom domain (e.g., nakshbynoor.com)
   - Follow the DNS configuration instructions

2. **DNS Configuration:**
   - Add a CNAME record pointing to `cname.vercel-dns.com`
   - Or add A records as provided by Vercel

## Performance Optimization

The website is already optimized with:
- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ SEO meta tags
- ✅ Responsive design

## File Structure for Easy Editing

```
src/
├── components/
│   ├── Home/
│   │   ├── HeroSection.tsx          # Main hero with logo & tagline
│   │   ├── InstagramFeed.tsx        # Instagram posts grid
│   │   ├── FeaturedProducts.tsx     # Product showcase
│   │   ├── TestimonialsCarousel.tsx # Client testimonials
│   │   └── BookingSection.tsx       # Contact/booking CTA
│   └── Layout/
│       ├── Navbar.tsx               # Top navigation
│       ├── Footer.tsx               # Footer with social links
│       └── Layout.tsx               # Layout wrapper
├── pages/
│   ├── Home.tsx                     # Homepage layout
│   ├── About.tsx                    # About page
│   ├── Testimonials.tsx             # Testimonials page
│   └── NotFound.tsx                 # 404 page
├── assets/                          # Images and media files
└── index.css                        # Design system & colors
```

## Quick Editing Guide

### 🎨 Change Colors
Edit `src/index.css` lines 10-50 (Brand Colors section)

### 📝 Update Text Content
- **Hero tagline:** `src/components/Home/HeroSection.tsx` lines 44-65
- **Section titles:** Look for "EDIT:" comments in component files
- **Contact links:** Search for Instagram URLs in all files

### 🖼️ Replace Images
- **Logo:** Replace `src/assets/naksh-logo.png`
- **Products:** Replace images in `src/assets/` folder
- **Update imports:** Update image imports in component files

### 📱 Social Links
- **Instagram:** Search for "nakshbynoor" in all files
- **WhatsApp:** Currently redirected to Instagram (see "EDIT:" comments)

### 🏗️ Add/Remove Sections
Edit `src/pages/Home.tsx` to reorder or remove homepage sections

## Support

- **React + Vite:** [vitejs.dev](https://vitejs.dev)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com)
- **Framer Motion:** [framer.com/motion](https://framer.com/motion)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)

## Instagram API Integration (Future)

To replace mock data with real Instagram posts:

1. **Get Instagram API Access:**
   - Facebook Developers account
   - Instagram Basic Display API or Instagram Graph API
   - Generate access token

2. **Update InstagramFeed.tsx:**
   - Replace `mockPosts` with API call
   - Add error handling and loading states

3. **Environment Variables:**
   - Add tokens to Vercel environment variables
   - Never commit API keys to code

---

**Need help?** All files contain "EDIT:" comments showing exactly where to make changes!