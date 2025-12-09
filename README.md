# Sudanva Shilannavar - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and TailwindCSS featuring neomorphism design.

## 🚀 Features

- **Modern Tech Stack**: React 18, Vite, TailwindCSS
- **Neomorphism Design**: Clean light theme with soft shadows
- **Fully Responsive**: Mobile-first approach
- **Page Transitions**: Smooth animations using Framer Motion
- **SEO Optimized**: Meta tags, OpenGraph, sitemap
- **Performance**: Code splitting, lazy loading, optimized assets
- **Type Animation**: Dynamic typewriter effect on hero section
- **Blog with Markdown**: Full blog functionality with markdown support
- **Contact Form**: Validated contact form
- **Project Showcase**: Filterable project gallery

## 📄 Pages

- **Home**: Hero section with typewriter animation
- **About Me**: Professional introduction
- **Projects**: Showcase of work with live demos
- **Skills**: Technology stack with progress bars
- **Services**: Freelance packages and pricing
- **Blog**: Articles and insights
- **Testimonials**: Client feedback
- **Certifications**: Professional certificates
- **Resume**: Downloadable resume
- **Contact**: Contact form and social links

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Manual Build

```bash
npm run build
```

Upload the `dist` folder to your hosting provider.

## 📦 Project Structure

```
src/
├── components/       # Reusable components
├── pages/           # Page components
├── data/            # Static data (projects, blog posts)
├── hooks/           # Custom React hooks
├── styles/          # Global styles
└── assets/          # Images and static files
```

## 🔧 Configuration

- **Vite**: `vite.config.js`
- **Tailwind**: `tailwind.config.js`
- **PostCSS**: `postcss.config.js`
- **ESLint**: `.eslintrc.cjs`
- **Playwright**: `playwright.config.js`

## 🎨 Customization

1. **Update Personal Info**: Edit data files in `src/data/`
2. **Change Colors**: Modify `tailwind.config.js`
3. **Add Projects**: Update `src/data/projects.js`
4. **Add Blog Posts**: Update `src/data/blog.js`
5. **Update Contact Info**: Edit `src/pages/Contact.jsx` and `src/components/Footer.jsx`

## 📈 SEO

- Meta tags configured in `index.html`
- Sitemap available at `/sitemap.xml`
- Robots.txt configured
- OpenGraph tags for social sharing

## 🧪 Testing

E2E tests using Playwright:

```bash
npm run test
npm run test:ui
```

## 📝 License

© 2024 Sudanva Shilannavar. All rights reserved.

## 📞 Contact

- Email: placeholder@example.com
- GitHub: [@sudanva21](https://github.com/sudanva21)
- Portfolio: [sudanva.vercel.app](https://sudanva.vercel.app)
