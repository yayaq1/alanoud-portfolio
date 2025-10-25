# Quick Start Guide

## Get Up and Running in 3 Steps

### 1. Navigate to Project
```bash
cd /Users/yayaq/GitHub/alanoud-portfolio
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit: **http://localhost:3000**

---

## What You'll See

Your AI-themed portfolio with:
- ✨ Matrix rain effect in Hero
- 🔵 Interactive particles in About
- 🧠 Neural network animation in Skills
- 🎨 Beautiful animations throughout
- 📱 Fully responsive design

---

## First Customization Steps

### Update Your Name (5 minutes)

1. **Search and replace** "Alanoud" with your name in:
   - `src/app/layout.tsx`
   - `src/components/ui/Header.tsx`
   - `src/components/ui/Footer.tsx`
   - `src/components/sections/Hero.tsx`

### Update Contact Info (3 minutes)

2. Replace email and social links:
   - Email: Search for `alanoud@example.com`
   - GitHub: Search for `https://github.com/alanoud`
   - LinkedIn: Search for `https://linkedin.com/in/alanoud`

### Add Your Content (15 minutes)

3. Edit data files in `src/data/`:
   - `skills.ts` - Your technical skills
   - `projects.ts` - Your projects
   - `experience.ts` - Your work history

---

## Need More Help?

📖 **Detailed Customization**: See `CUSTOMIZATION_GUIDE.md`

📝 **Project Overview**: See `README.md`

🔍 **Implementation Details**: See `PROJECT_SUMMARY.md`

---

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

---

## Visual Effect Controls

### Make Effects More/Less Intense

**Hero - Matrix Rain** (`src/components/sections/Hero.tsx` line 49):
```typescript
<MatrixRain opacity={0.15} speed={50} />
// Lower opacity (0.1) = more subtle
// Higher speed (70) = slower rain
```

**About - Particles** (`src/components/sections/About.tsx` line 22):
```typescript
<ParticleSystem particleCount={40} connectionDistance={120} />
// Fewer particles (30) = cleaner look
// Shorter distance (100) = less connections
```

**Skills - Neural Network** (`src/components/sections/Skills.tsx` line 22):
```typescript
<NeuralNetwork nodeCount={25} />
// Fewer nodes (15-20) = simpler effect
```

---

## Tips

- 💡 Effects are separated by section - no overlapping
- 🎯 Start dev server to see changes in real-time
- 📱 Test on mobile by visiting on your phone (same network)
- 🚀 Deploy to Vercel for free hosting

---

Happy coding! 🎉

