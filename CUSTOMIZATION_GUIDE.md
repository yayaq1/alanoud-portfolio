# Customization Guide

This guide will help you customize the portfolio with your own information.

## Quick Start Customization

### 1. Personal Information

#### Update Your Name
Search and replace "Alanoud" with your name in:
- `src/app/layout.tsx` (line 18-19 - metadata)
- `src/components/ui/Header.tsx` (line 42 - logo)
- `src/components/ui/Footer.tsx` (line 31 - copyright)
- `src/components/sections/Hero.tsx` (line 78 - name display)

#### Update Title/Role
In `src/components/sections/Hero.tsx`:
- Line 25: Change `"AI Engineer"` to your role

### 2. Contact Information

#### Email Address
Replace `alanoud@example.com` in:
- `src/components/ui/Footer.tsx` (line 11)
- `src/components/sections/Hero.tsx` (line 117)
- `src/components/sections/Contact.tsx` (line 84, 90)

#### Social Media Links
Update URLs in these files:

**Footer** (`src/components/ui/Footer.tsx` - lines 8-11):
```typescript
const socialLinks = [
  { name: "GitHub", icon: Github, href: "YOUR_GITHUB_URL" },
  { name: "LinkedIn", icon: Linkedin, href: "YOUR_LINKEDIN_URL" },
  { name: "Twitter", icon: Twitter, href: "YOUR_TWITTER_URL" },
  { name: "Email", icon: Mail, href: "mailto:YOUR_EMAIL" },
];
```

**Hero** (`src/components/sections/Hero.tsx` - lines 111-113):
```typescript
{ icon: Github, href: "YOUR_GITHUB_URL" },
{ icon: Linkedin, href: "YOUR_LINKEDIN_URL" },
{ icon: Mail, href: "mailto:YOUR_EMAIL" },
```

### 3. About Section

Edit `src/components/sections/About.tsx` (lines 64-78):
- Update the three paragraphs with your own story
- Modify stats in `src/components/sections/About.tsx` (lines 7-12)

### 4. Skills

Edit `src/data/skills.ts`:
- Add/remove/modify skills
- Adjust skill levels (0-100)
- Update categories (ML/DL, Languages, AI Specializations, Tools)

Example:
```typescript
{ name: "Your Technology", level: 90, category: "Your Category" },
```

### 5. Projects

Edit `src/data/projects.ts`:
- Update existing projects or add new ones
- Set `featured: true` for your best 3 projects
- Add GitHub and demo links

Example:
```typescript
{
  id: 1,
  title: "Your Project Name",
  description: "Your project description",
  tags: ["Tech1", "Tech2", "Tech3"],
  github: "https://github.com/yourusername/project",
  demo: "https://yourproject.com",
  featured: true,
}
```

### 6. Work Experience

Edit `src/data/experience.ts`:
- Add/modify your work experiences
- Update company names, titles, locations, and periods
- Modify bullet points describing your achievements

Example:
```typescript
{
  id: 1,
  title: "Your Job Title",
  company: "Company Name",
  location: "City, State/Remote",
  period: "2023 - Present",
  description: [
    "Achievement 1",
    "Achievement 2",
  ],
  technologies: ["Tech1", "Tech2"],
}
```

### 7. Visual Effects Customization

#### Adjust Effect Intensity

**Matrix Rain** (`src/components/sections/Hero.tsx` - line 49):
```typescript
<MatrixRain opacity={0.15} speed={50} />
// opacity: 0.1-0.3 (lower = more subtle)
// speed: 30-100 (higher = slower)
```

**Particle System** (`src/components/sections/About.tsx` - line 22):
```typescript
<ParticleSystem particleCount={40} connectionDistance={120} />
// particleCount: 20-100
// connectionDistance: 80-200
```

**Neural Network** (`src/components/sections/Skills.tsx` - line 22):
```typescript
<NeuralNetwork nodeCount={25} />
// nodeCount: 15-50
```

### 8. Color Scheme

Edit `tailwind.config.ts` to change colors:

```typescript
colors: {
  background: {
    dark: "#0a0e1a",      // Main background
    darker: "#050810",     // Alternate sections
  },
  primary: {
    blue: "#3b82f6",       // Primary accent
    blueLight: "#60a5fa",  // Lighter primary
  },
  accent: {
    purple: "#8b5cf6",     // Secondary accent
    purpleLight: "#a78bfa",
  },
}
```

### 9. Typography

To change fonts, edit `src/app/layout.tsx`:

```typescript
import { YourFont, YourMonoFont } from "next/font/google";

const yourFont = YourFont({ 
  subsets: ["latin"],
  variable: "--font-inter",
});
```

Then update `tailwind.config.ts` to use your font variables.

### 10. Section Order

Rearrange sections in `src/app/page.tsx`:

```typescript
<Hero />
<About />
<Skills />
<Projects />
<Experience />
<Contact />
```

## Adding New Sections

1. Create new component in `src/components/sections/YourSection.tsx`
2. Import and add to `src/app/page.tsx`
3. Add navigation link in `src/components/ui/Header.tsx`

## SEO & Metadata

Update `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your description",
};
```

## Testing Your Changes

Run the development server:
```bash
npm run dev
```

Visit `http://localhost:3000` to see your changes live.

## Need Help?

- Check the README.md for general information
- Review component files for inline comments
- All data is centralized in `src/data/` folder for easy editing

Happy customizing! 🚀

