# Elevate Services - React Application

A modern single-page website for Elevate Services, built with React, TypeScript, and Tailwind CSS.

## Features

- 🎬 Video background hero section
- 📱 Fully responsive design
- 📝 Quote request form with validation
- ✉️ Contact form with validation
- ⭐ Customer reviews section with Google Reviews link
- 🎨 Modern UI with Tailwind CSS
- 🚀 Fast and optimized with Vite

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **React Hook Form + Zod** for form validation
- **Web3Forms** for form submissions
- **Lucide React** for icons

## Prerequisites

- Node.js 18+ and npm
- Web3Forms account (free at https://web3forms.com)

## Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up Web3Forms**:
   - Sign up at https://web3forms.com (free)
   - Create an access key
   - Copy `.env.example` to `.env`
   - Add your Web3Forms access key to `.env`:
     ```
     VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
     ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

The production build will be in the `dist` folder, ready to deploy to Hostinger.

## Deployment to Hostinger

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the contents of the `dist` folder to your Hostinger public_html directory via FTP or File Manager.

3. Make sure your `.env` file with the Web3Forms access key is uploaded (or add the environment variable through Hostinger's control panel).

## Project Structure

```
elevate_services/
├── public/
│   └── assets/
│       ├── videos/
│       │   └── background-video.mp4
│       └── images/
│           ├── logo.png
│           ├── repairs-fixes.jpeg
│           ├── cleaning-upkeep.jpeg
│           └── carprentry-assembly.jpg
├── src/
│   ├── components/
│   │   ├── ui/          # UI components (Button, Input, Textarea)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── QuoteForm.tsx
│   │   ├── ReviewsSection.tsx
│   │   └── ContactSection.tsx
│   ├── lib/
│   │   ├── api.ts       # Web3Forms API integration
│   │   └── utils.ts     # Utility functions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Customization

### Updating Reviews

Edit the `reviews` array in `src/components/ReviewsSection.tsx`:

```typescript
const reviews = [
  {
    name: 'Customer Name',
    location: 'City',
    quote: 'Review text here',
    rating: 5,
  },
];
```

### Updating Services

Edit the `services` array in `src/components/ServicesSection.tsx`.

### Changing Colors

Edit `tailwind.config.js` to update the brand colors:

```javascript
colors: {
  primary: {
    DEFAULT: '#61CE70', // Your brand color
  },
}
```

## Support

For issues or questions, contact support or refer to the documentation.

---

Copyright © 2025 Elevate Services