# Alanoud - AI Engineer Portfolio

A stunning, AI-themed portfolio website built with Next.js 14, featuring advanced visual effects and animations.

## Features

- **Visual Effects**: Matrix rain, particle systems, neural network backgrounds, and glitch text effects
- **Smooth Animations**: Framer Motion powered animations with scroll-triggered effects
- **Responsive Design**: Fully responsive across all devices
- **Professional Dark Theme**: Cyberpunk-inspired color scheme with electric blue and purple accents
- **Interactive Elements**: 3D tilt cards, animated progress bars, and hover effects
- **Performance Optimized**: 60 FPS animations with efficient canvas rendering

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Sections

1. **Hero**: Animated intro with matrix rain effect and glitch text
2. **About**: Personal introduction with interactive particle background
3. **Skills**: Categorized skill showcase with neural network effect
4. **Projects**: Featured and regular projects with filtering
5. **Experience**: Timeline-based work history
6. **Contact**: Interactive contact form with submission animation

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. **Data Files**: Edit files in `src/data/` to update:
   - `skills.ts`: Your technical skills
   - `projects.ts`: Your projects
   - `experience.ts`: Your work experience

2. **Contact Info**: Update social links in:
   - `src/components/ui/Header.tsx`
   - `src/components/ui/Footer.tsx`
   - `src/components/sections/Hero.tsx`
   - `src/components/sections/Contact.tsx`

3. **Visual Effects**: Adjust effect parameters in section components:
   - Matrix rain: opacity and speed
   - Particles: count and connection distance
   - Neural network: node count

### Color Scheme

Colors are defined in `tailwind.config.ts`. Modify the theme colors to match your preferences.

## Performance

- Canvas effects use `requestAnimationFrame` for smooth 60 FPS
- Intersection Observer for efficient scroll animations
- Optimized animations using `transform` and `opacity`
- Mobile-responsive with reduced effects on smaller screens

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Built with ❤️ using Next.js and cutting-edge web technologies.

