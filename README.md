# Valeford - Venture Studio Website

A modern, professional website for Valeford, a venture studio focused on building, validating, and scaling mobile-first digital products.

## Overview

This website showcases Valeford's approach to venture development, featuring a clean, investor-ready design that reflects the company's focus on strategic analysis and disciplined execution.

## Features

- **Modern Design**: Clean, professional aesthetic with subtle animations
- **Mobile-First**: Responsive design optimized for all devices
- **Performance**: Built with Next.js 14 and optimized for speed
- **Accessibility**: WCAG compliant with semantic HTML
- **SEO Optimized**: Meta tags, structured data, and performance optimization
k
## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Typography**: Inter font family
- **Language**: TypeScript
- **Deployment**: Vercel (recommended)

## Design System

### Colors
- **Primary**: Valeford Blue (#278FFF)
- **Text**: Gray scale (900, 600, 400)
- **Background**: White and Gray-50
- **Accents**: Muted blue tones

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: Clear typographic scale
- **Readability**: Optimized line heights and spacing

### Components
- **Buttons**: Primary and secondary variants
- **Cards**: Subtle shadows and rounded corners
- **Navigation**: Clean, minimal header with mobile menu
- **Forms**: Accessible form controls with validation

## Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── strategy/          # Strategy page
│   ├── ventures/          # Ventures page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── public/               # Static assets
└── config files          # Next.js, Tailwind, TypeScript configs
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd valeford-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Pages

### Homepage (`/`)
- Hero section with value proposition
- Our approach overview
- Focus areas highlighting mobile-first innovation
- Call-to-action sections

### About (`/about`)
- Company mission and values
- Strategic approach overview
- Team and culture information

### Ventures (`/ventures`)
- Portfolio overview with key metrics
- Featured venture case studies
- Investment approach details

### Strategy (`/strategy`)
- Strategic framework (Identify, Validate, Execute)
- Investment criteria and metrics
- Risk management approach
- Success metrics and KPIs

### Contact (`/contact`)
- Contact form with validation
- Company information
- FAQ section
- Response expectations

## Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  'valeford-blue': '#278FFF',
  // Add custom colors here
}
```

### Typography
Modify font settings in `app/layout.tsx` and `tailwind.config.js`.

### Content
Update page content in the respective files under `/app` directory.

### Animations
Customize Framer Motion animations in component files.

## Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic with Next.js App Router

## SEO

- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for better search visibility
- **Sitemap**: Automatic sitemap generation

## Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Self-hosted with PM2

## Environment Variables

Create a `.env.local` file for local development:

```bash
# Add any required environment variables here
# NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential. All rights reserved by Valeford.

## Support

For technical support or questions about the website:
- Email: hello@valeford.com
- Documentation: This README file

## Changelog

### v1.0.0 (Initial Release)
- Complete website with all core pages
- Responsive design implementation
- Performance optimization
- SEO implementation
- Accessibility compliance
