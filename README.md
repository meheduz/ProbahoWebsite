# Probaho Parent Company Website

A modern, responsive website built with Next.js and Tailwind CSS showcasing our digital product development company and our flagship product Probaho.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Performance Optimized**: Fast loading times and smooth animations
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessible**: Following web accessibility best practices

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Products.tsx    # Products showcase
│   ├── Approach.tsx    # Our approach
│   ├── Technology.tsx  # Tech stack
│   ├── Contact.tsx     # Contact information
│   └── Footer.tsx      # Footer
└── public/            # Static assets
```

## Sections

1. **Hero**: Main headline and call-to-action buttons
2. **About**: Company description and key features
3. **Products**: Featuring Probaho and future products
4. **Approach**: Our 5-step development process
5. **Technology**: Modern tech stack showcase
6. **Contact**: Multiple contact methods
7. **Footer**: Company info and links

## Customization

- Update company information in components
- Modify colors in `tailwind.config.js`
- Add new sections by creating components
- Update metadata in `app/layout.tsx`

## Deployment

The site can be deployed to any platform that supports Next.js:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Self-hosted

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons