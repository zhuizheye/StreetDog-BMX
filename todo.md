# TODO.md - Street Dog BMX Wiki Implementation Guide

## Complete File Structure

```
streetdogbmx-wiki/
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Layout.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── SEO.astro
│   │   ├── Hero.astro
│   │   ├── GuideCard.astro
│   │   ├── MapCard.astro
│   │   ├── BuildCard.astro
│   │   ├── TierCard.astro
│   │   └── CodesList.astro
│   ├── data/
│   │   ├── site.json
│   │   ├── tricks.json
│   │   ├── maps.json
│   │   ├── builds.json
│   │   ├── tier-list.json
│   │   └── codes.json
│   ├── layouts/
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── guides/
│   │   │   ├── index.astro
│   │   │   ├── beginner-guide.astro
│   │   │   ├── tricks-combos.astro
│   │   │   └── advanced-techniques.astro
│   │   ├── tier-list.astro
│   │   ├── characters.astro
│   │   ├── builds.astro
│   │   ├── codes.astro
│   │   ├── maps.astro
│   │   ├── release.astro
│   │   ├── tools/
│   │   │   └── score-calculator.astro
│   │   ├── official.astro
│   │   └── legal.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── tsconfig.json
```

***

## PHASE 1: Project Setup

### Step 1.1: Initialize Project

```bash
npm create astro@latest streetdogbmx-wiki
cd streetdogbmx-wiki
npm install @astrojs/tailwind tailwindcss daisyui lucide-astro
```

### Step 1.2: Create `package.json`

```json
{
  "name": "streetdogbmx-wiki",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  },
  "dependencies": {
    "@astrojs/tailwind": "^5.1.0",
    "astro": "^4.0.0",
    "tailwindcss": "^3.4.0",
    "daisyui": "^4.6.0",
    "lucide-astro": "^0.295.0"
  }
}
```

### Step 1.3: Create `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://streetdogbmx.wiki',
  integrations: [tailwind()],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'terser',
    },
  },
});
```

### Step 1.4: Create `tailwind.config.mjs`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bmx-orange': '#ff6b35',
        'bmx-yellow': '#f7931e',
        'bmx-cyan': '#00d9ff',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#ff6b35',
          secondary: '#f7931e',
          accent: '#00d9ff',
          'base-100': '#1a1a1a',
          'base-200': '#2d2d2d',
          'base-300': '#404040',
        },
      },
    ],
  },
};
```

### Step 1.5: Create `src/styles/global.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-base-100 text-base-content;
  }
}

@layer components {
  .prose-custom {
    @apply prose prose-invert max-w-none;
  }
  
  .prose-custom h2 {
    @apply text-2xl font-bold mt-8 mb-4 text-primary;
  }
  
  .prose-custom h3 {
    @apply text-xl font-semibold mt-6 mb-3 text-secondary;
  }
  
  .prose-custom p {
    @apply mb-4 leading-relaxed;
  }
  
  .prose-custom ul {
    @apply list-disc list-inside mb-4 space-y-2;
  }
  
  .prose-custom ol {
    @apply list-decimal list-inside mb-4 space-y-2;
  }
  
  .prose-custom code {
    @apply bg-base-300 px-2 py-1 rounded text-accent;
  }
  
  .prose-custom pre {
    @apply bg-base-300 p-4 rounded-lg overflow-x-auto mb-4;
  }
  
  .card-hover {
    @apply transition-transform duration-300 hover:scale-105 hover:shadow-xl;
  }
}
```

### Step 1.6: Create `public/robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://streetdogbmx.wiki/sitemap.xml
```

***

## PHASE 2: JSON Data Files

### Step 2.1: Create `src/data/site.json`

```json
{
  "site": {
    "name": "Street Dog BMX Wiki",
    "tagline": "Your Ultimate Guide to Street Dog BMX",
    "description": "Complete guides, tricks, maps, and builds for Street Dog BMX - Released January 14, 2026",
    "url": "https://streetdogbmx.wiki",
    "defaultLanguage": "en",
    "languages": [
      {
        "code": "en",
        "name": "English",
        "flag": "🇺🇸"
      }
    ]
  },
  "game": {
    "title": "Street Dog BMX",
    "developer": "Yeah Us! Games",
    "publisher": "Null Games",
    "releaseDate": "2026-01-14",
    "platforms": ["PC (Steam)", "PlayStation 4", "Xbox One"],
    "genre": ["Sports", "Indie", "Arcade", "Simulation"],
    "steamAppId": "2707870",
    "features": [
      "270+ Challenges",
      "6 Handcrafted Maps",
      "Deep Customization",
      "Realistic Physics",
      "Replay Editor",
      "Controller Support"
    ]
  },
  "navigation": [
    {
      "label": "Home",
      "href": "/",
      "icon": "home"
    },
    {
      "label": "Guides",
      "href": "/guides/",
      "icon": "book-open",
      "children": [
        {
          "label": "Beginner's Guide",
          "href": "/guides/beginner-guide/"
        },
        {
          "label": "Tricks & Combos",
          "href": "/guides/tricks-combos/"
        },
        {
          "label": "Advanced Techniques",
          "href": "/guides/advanced-techniques/"
        }
      ]
    },
    {
      "label": "Tier List",
      "href": "/tier-list/",
      "icon": "trophy"
    },
    {
      "label": "Characters",
      "href": "/characters/",
      "icon": "user"
    },
    {
      "label": "Builds",
      "href": "/builds/",
      "icon": "wrench"
    },
    {
      "label": "Codes",
      "href": "/codes/",
      "icon": "gift"
    },
    {
      "label": "Maps",
      "href": "/maps/",
      "icon": "map"
    },
    {
      "label": "Release",
      "href": "/release/",
      "icon": "calendar"
    },
    {
      "label": "Tools",
      "href": "/tools/score-calculator/",
      "icon": "calculator"
    },
    {
      "label": "Official",
      "href": "/official/",
      "icon": "external-link"
    }
  ],
  "footer": {
    "links": [
      {
        "label": "Legal & Copyright",
        "href": "/legal/"
      }
    ],
    "social": [
      {
        "platform": "Steam",
        "url": "https://store.steampowered.com/app/2707870/Streetdog_BMX/",
        "icon": "steam"
      },
      {
        "platform": "Instagram",
        "url": "https://instagram.com/yeahusgames",
        "icon": "instagram"
      }
    ],
    "copyright": "© 2026 Street Dog BMX Wiki. Street Dog BMX is a trademark of Yeah Us! Games. Fan-created wiki, not officially affiliated."
  },
  "seo": {
    "defaultTitle": "Street Dog BMX Wiki - Complete Guide & Database",
    "titleTemplate": "%s | Street Dog BMX Wiki",
    "defaultDescription": "The ultimate Street Dog BMX guide featuring tricks, combos, maps, bike builds, tier lists, and tips. Master this arcade BMX game on PC, PS4, and Xbox One.",
    "keywords": [
      "streetdog bmx",
      "street dog bmx guide",
      "bmx game",
      "tricks guide",
      "bmx maps",
      "bike builds",
      "steam bmx game",
      "streetdog bmx wiki",
      "bmx simulator",
      "tony hawk bmx"
    ],
    "ogImage": "/og-image.jpg",
    "twitterCard": "summary_large_image"
  }
}
```

### Step 2.2: Create `src/data/tricks.json`

```json
{
  "airTricks": [
    {
      "id": "360-spin",
      "name": "360 Spin",
      "category": "Air",
      "difficulty": "Beginner",
      "basePoints": 250,
      "description": "Complete 360-degree rotation in the air",
      "input": "Right stick rotate",
      "tips": "Start with small airs to get timing right"
    },
    {
      "id": "backflip",
      "name": "Backflip",
      "category": "Air",
      "difficulty": "Intermediate",
      "basePoints": 800,
      "description": "Backward rotation flip",
      "input": "Right stick down",
      "tips": "Need good height and commit to the rotation"
    },
    {
      "id": "frontflip",
      "name": "Frontflip",
      "category": "Air",
      "difficulty": "Intermediate",
      "basePoints": 850,
      "description": "Forward rotation flip",
      "input": "Right stick up",
      "tips": "Less common than backflip but same difficulty"
    },
    {
      "id": "tailwhip",
      "name": "Tailwhip",
      "category": "Air",
      "difficulty": "Intermediate",
      "basePoints": 600,
      "description": "Rotate bike frame 360 degrees while holding bars",
      "input": "Right stick diagonal",
      "tips": "Timing is crucial for landing"
    },
    {
      "id": "barspin",
      "name": "Barspin",
      "category": "Air",
      "difficulty": "Intermediate",
      "basePoints": 500,
      "description": "Spin handlebars 360 degrees",
      "input": "Right stick left/right combinations",
      "tips": "Easier to combo with other tricks"
    },
    {
      "id": "no-hander",
      "name": "No-Hander",
      "category": "Air",
      "difficulty": "Beginner",
      "basePoints": 300,
      "description": "Release handlebars mid-air",
      "input": "Hold specific stick position",
      "tips": "Great for style points"
    },
    {
      "id": "superman",
      "name": "Superman",
      "category": "Air",
      "difficulty": "Advanced",
      "basePoints": 1200,
      "description": "Extend body off back of bike",
      "input": "Extended air trick input",
      "tips": "Requires good air time"
    },
    {
      "id": "double-backflip",
      "name": "Double Backflip",
      "category": "Air",
      "difficulty": "Advanced",
      "basePoints": 2000,
      "description": "Two consecutive backflips",
      "input": "Right stick down (hold longer)",
      "tips": "Need maximum height from launch"
    },
    {
      "id": "720-spin",
      "name": "720 Spin",
      "category": "Air",
      "difficulty": "Advanced",
      "basePoints": 1500,
      "description": "Two full rotations (720 degrees)",
      "input": "Right stick rotate (extended)",
      "tips": "Rotate fast and spot landing"
    },
    {
      "id": "flair",
      "name": "Flair",
      "category": "Air",
      "difficulty": "Expert",
      "basePoints": 2500,
      "description": "Backflip combined with 180 spin",
      "input": "Combination input",
      "tips": "Quarter pipe essential, very technical"
    },
    {
      "id": "barspin-tailwhip",
      "name": "Barspin + Tailwhip",
      "category": "Air",
      "difficulty": "Expert",
      "basePoints": 2200,
      "description": "Combine barspin and tailwhip in one air",
      "input": "Complex stick movements",
      "tips": "Master each individually first"
    }
  ],
  "grindTricks": [
    {
      "id": "feeble-grind",
      "name": "Feeble Grind",
      "category": "Grind",
      "difficulty": "Intermediate",
      "basePoints": 400,
      "description": "Front peg and back tire on rail",
      "input": "Approach rail at angle, right stick position",
      "tips": "Balanced grind, good for beginners",
      "pointsPerSecond": 100
    },
    {
      "id": "smith-grind",
      "name": "Smith Grind",
      "category": "Grind",
      "difficulty": "Intermediate",
      "basePoints": 450,
      "description": "Back peg and front tire on rail",
      "input": "Specific rail position",
      "tips": "Opposite of feeble, slightly harder",
      "pointsPerSecond": 110
    },
    {
      "id": "icepick-grind",
      "name": "Icepick Grind",
      "category": "Grind",
      "difficulty": "Advanced",
      "basePoints": 700,
      "description": "Single back peg balance",
      "input": "Technical balance required",
      "tips": "Requires precise balance control",
      "pointsPerSecond": 150
    },
    {
      "id": "double-peg",
      "name": "Double Peg Grind",
      "category": "Grind",
      "difficulty": "Beginner",
      "basePoints": 300,
      "description": "Both pegs on rail (most stable)",
      "input": "Standard rail approach",
      "tips": "Easiest grind to learn",
      "pointsPerSecond": 80
    },
    {
      "id": "toothpick",
      "name": "Toothpick Grind",
      "category": "Grind",
      "difficulty": "Advanced",
      "basePoints": 800,
      "description": "Technical rail balance trick",
      "input": "Advanced rail positioning",
      "tips": "Very technical, practice required",
      "pointsPerSecond": 160
    },
    {
      "id": "crankslide",
      "name": "Crankslide",
      "category": "Grind",
      "difficulty": "Expert",
      "basePoints": 900,
      "description": "Grind on crank arm",
      "input": "Special angle approach",
      "tips": "Angle is everything",
      "pointsPerSecond": 180
    },
    {
      "id": "flareway-bar",
      "name": "Flareway Bar",
      "category": "Grind",
      "difficulty": "Expert",
      "basePoints": 1000,
      "description": "Technical lip trick on coping",
      "input": "Specific lip approach",
      "tips": "Requires ramp/bowl setup",
      "pointsPerSecond": 200
    },
    {
      "id": "crooked-grind",
      "name": "Crooked Grind",
      "category": "Grind",
      "difficulty": "Advanced",
      "basePoints": 750,
      "description": "Angled approach grind",
      "input": "Angled rail approach",
      "tips": "Speed and angle critical",
      "pointsPerSecond": 140
    },
    {
      "id": "pedal-grind",
      "name": "Pedal Grind",
      "category": "Grind",
      "difficulty": "Expert",
      "basePoints": 950,
      "description": "Grind on pedal instead of peg",
      "input": "Precision grind positioning",
      "tips": "Very precise, high risk",
      "pointsPerSecond": 190
    }
  ],
  "manualTricks": [
    {
      "id": "manual",
      "name": "Manual",
      "category": "Ground",
      "difficulty": "Beginner",
      "basePoints": 50,
      "description": "Back wheel balance (wheelie)",
      "input": "B/Circle button",
      "pointsPerSecond": 50,
      "tips": "Essential for combo linking"
    },
    {
      "id": "nose-manual",
      "name": "Nose Manual",
      "category": "Ground",
      "difficulty": "Intermediate",
      "basePoints": 80,
      "description": "Front wheel balance (endo)",
      "input": "Modified stick position",
      "pointsPerSecond": 80,
      "tips": "Harder to balance than regular manual"
    }
  ],
  "specialTricks": [
    {
      "id": "wallride",
      "name": "Wallride",
      "category": "Special",
      "difficulty": "Intermediate",
      "basePoints": 600,
      "description": "Ride on vertical wall surface",
      "input": "Approach wall with speed",
      "tips": "Speed and angle essential"
    },
    {
      "id": "transfer",
      "name": "Transfer",
      "category": "Special",
      "difficulty": "Intermediate",
      "basePoints": 500,
      "description": "Move between different ramps/sections",
      "input": "Jump between transitions",
      "tips": "Great for combo extension"
    }
  ]
}
```

### Step 2.3: Create `src/data/maps.json`

```json
{
  "maps": [
    {
      "id": "skate-park",
      "name": "The Skate Park",
      "difficulty": "Beginner",
      "size": "Medium",
      "focus": "Flow and fundamentals",
      "description": "Safe environment perfect for mastering the basics. Features multiple bowls, quarter pipes, and rail arrays designed for learning core mechanics.",
      "features": [
        "Multiple bowl sections",
        "Quarter pipe arrays",
        "Beginner-friendly rail setups",
        "Flat practice areas",
        "Controlled environment"
      ],
      "hiddenSpots": 6,
      "challengeCount": 35,
      "bestFor": [
        "Learning basic mechanics",
        "Practicing tricks safely",
        "Building first combos",
        "Tutorial completion",
        "Warm-up sessions"
      ],
      "tips": [
        "Start here to learn game mechanics",
        "Practice pump system in bowls",
        "Master basic grinds on rails",
        "Learn manual transitions"
      ],
      "keyLocations": [
        "Main Bowl - Center piece for flow practice",
        "Rail Garden - Multiple rail configurations",
        "Quarter Pipe Section - Air trick practice",
        "Flat Area - Manual and ground trick practice"
      ]
    },
    {
      "id": "urban-streets",
      "name": "Urban Streets",
      "difficulty": "Intermediate",
      "size": "Large",
      "focus": "Street riding and technical tricks",
      "description": "Authentic street BMX environment with stairs, ledges, and urban architecture. Captures the essence of real street riding.",
      "features": [
        "Multiple stair sets with rails",
        "Street ledges and curbs",
        "Urban gaps and drops",
        "Wallride opportunities",
        "Realistic street obstacles"
      ],
      "hiddenSpots": 12,
      "challengeCount": 45,
      "bestFor": [
        "Street-style lines",
        "Technical grind sequences",
        "Gap combinations",
        "Realistic BMX experience",
        "Score challenges"
      ],
      "tips": [
        "Link ledges with manuals",
        "Use stairs for big combos",
        "Explore alleyways for secrets",
        "Watch for wallride spots"
      ],
      "keyLocations": [
        "City Plaza - Central hub area",
        "Stair Sets - Multiple rail options",
        "Back Alleys - Hidden spots",
        "Street Corners - Ledge combinations"
      ]
    },
    {
      "id": "rooftop-run",
      "name": "Rooftop Run",
      "difficulty": "Advanced",
      "size": "Medium-Large",
      "focus": "High-risk gaps and air tricks",
      "description": "High-altitude playground across building rooftops. Features massive gaps and consequences for missed landings.",
      "features": [
        "Multiple building rooftops",
        "Massive building-to-building gaps",
        "Vertical drop opportunities",
        "Unique vantage points",
        "High-consequence gameplay"
      ],
      "hiddenSpots": 10,
      "challengeCount": 40,
      "bestFor": [
        "Big air tricks",
        "Long-distance gaps",
        "High score attempts",
        "Advanced players",
        "Epic replays"
      ],
      "tips": [
        "Speed management crucial",
        "Scout gaps before attempting",
        "Use replay to plan lines",
        "Bail recovery important"
      ],
      "keyLocations": [
        "Main Rooftop - Starting area",
        "The Big Gap - Signature jump",
        "Helipad - High point",
        "AC Units - Technical obstacles"
      ]
    },
    {
      "id": "construction-zone",
      "name": "Construction Zone",
      "difficulty": "Intermediate-Advanced",
      "size": "Large",
      "focus": "Vertical variation and exploration",
      "description": "Multi-level construction site with scaffolding, equipment, and unique industrial obstacles. Rewards creative line building.",
      "features": [
        "Scaffolding rail networks",
        "Multi-level structures",
        "Construction equipment obstacles",
        "Unique transfer opportunities",
        "Industrial aesthetic"
      ],
      "hiddenSpots": 15,
      "challengeCount": 50,
      "bestFor": [
        "Creative line building",
        "Height variation combos",
        "Exploration rewards",
        "Unique trick opportunities",
        "Challenge variety"
      ],
      "tips": [
        "Explore every level",
        "Scaffolding = long grinds",
        "Look for elevator shafts",
        "Use cranes creatively"
      ],
      "keyLocations": [
        "Scaffolding Networks - Grinding heaven",
        "Ground Level - Entry point",
        "Upper Levels - Advanced sections",
        "Crane Area - Unique obstacles"
      ]
    },
    {
      "id": "downtown-district",
      "name": "Downtown District",
      "difficulty": "Intermediate",
      "size": "Extra Large",
      "focus": "Open-world exploration",
      "description": "Expansive urban environment with connected streets, plazas, and multiple districts. Perfect for long combo runs and exploration.",
      "features": [
        "Connected street sections",
        "Multiple plaza areas",
        "Diverse districts",
        "Mixed spot types",
        "Long combo potential"
      ],
      "hiddenSpots": 18,
      "challengeCount": 55,
      "bestFor": [
        "Extended combo runs",
        "Free exploration",
        "Varied challenge types",
        "Marathon sessions",
        "Complete lines"
      ],
      "tips": [
        "Map is interconnected",
        "Learn district layouts",
        "Plan long routes",
        "Secrets in every corner"
      ],
      "keyLocations": [
        "Central Plaza - Hub area",
        "Shopping District - Rails and ledges",
        "Park Section - Transition mix",
        "Financial District - Technical spots"
      ]
    },
    {
      "id": "secret-compound",
      "name": "Secret Compound",
      "difficulty": "Expert",
      "size": "Medium",
      "focus": "Technical mastery",
      "description": "Expert-level map designed for technical mastery. Features high-difficulty spots and precision requirements.",
      "features": [
        "High-difficulty spots",
        "Technical line requirements",
        "Precision-based obstacles",
        "Expert-level challenges",
        "Unique obstacle designs"
      ],
      "hiddenSpots": 9,
      "challengeCount": 35,
      "bestFor": [
        "Expert players",
        "Technical showcase",
        "High-score competition",
        "Mastery demonstration",
        "Ultimate challenges"
      ],
      "tips": [
        "Every spot is technical",
        "Practice makes perfect",
        "Study lines carefully",
        "Expect to bail often"
      ],
      "keyLocations": [
        "The Gauntlet - Ultimate challenge",
        "Tech Zone - Precision required",
        "Expert Rails - Advanced grinds",
        "Final Challenge - Hardest spot"
      ]
    }
  ],
  "mapTypes": {
    "street": ["urban-streets", "downtown-district"],
    "park": ["skate-park"],
    "vertical": ["rooftop-run", "construction-zone"],
    "expert": ["secret-compound"]
  }
}
```

### Step 2.4: Create `src/data/builds.json`

```json
{
  "builds": [
    {
      "id": "all-rounder",
      "name": "All-Rounder Build",
      "tier": "A",
      "purpose": "Balanced for all maps and challenges",
      "difficulty": "Beginner",
      "popularity": 95,
      "components": {
        "frame": {
          "type": "Medium weight, neutral geometry",
          "recommendation": "Balanced street/park frame"
        },
        "bars": {
          "type": "Mid-height (8.5-9 inch rise)",
          "recommendation": "Good control and comfort"
        },
        "tires": {
          "type": "Medium width all-terrain",
          "recommendation": "2.25-2.3 inch width"
        },
        "gearing": {
          "type": "Balanced ratio (25/9 or 28/9)",
          "recommendation": "Good for everything"
        },
        "pegs": {
          "type": "Full setup (4 pegs)",
          "recommendation": "Maximum grind options"
        },
        "seat": {
          "type": "Mid-height pivotal",
          "recommendation": "Comfortable and functional"
        }
      },
      "bestFor": [
        "Beginners learning the game",
        "General play across all maps",
        "Challenge completion",
        "Players without specialization preference"
      ],
      "pros": [
        "Versatile across all maps",
        "Forgiving handling",
        "Good learning platform",
        "No major weaknesses"
      ],
      "cons": [
        "No specialization benefits",
        "Not optimal for specific challenges",
        "Jack of all trades, master of none"
      ],
      "recommendedMaps": ["All maps"],
      "skillLevel": "Beginner to Intermediate"
    },
    {
      "id": "speed-demon",
      "name": "Speed Demon Build",
      "tier": "S",
      "purpose": "Maximum speed for high score runs",
      "difficulty": "Intermediate",
      "popularity": 75,
      "components": {
        "frame": {
          "type": "Lightweight, aggressive geometry",
          "recommendation": "Race-inspired frame"
        },
        "bars": {
          "type": "Low profile (7.5-8 inch rise)",
          "recommendation": "Aerodynamic position"
        },
        "tires": {
          "type": "Narrow street tires",
          "recommendation": "2.0-2.1 inch width"
        },
        "gearing": {
          "type": "Tall ratio (30/9 or 33/9)",
          "recommendation": "Top speed priority"
        },
        "pegs": {
          "type": "Minimal or none",
          "recommendation": "Weight reduction"
        },
        "seat": {
          "type": "Slim low-profile",
          "recommendation": "Lightweight"
        }
      },
      "bestFor": [
        "High score attempts",
        "Speed-based challenges",
        "Long combo runs",
        "Experienced players"
      ],
      "pros": [
        "Maximum speed potential",
        "Responsive handling",
        "Great for score runs",
        "Lightweight feel"
      ],
      "cons": [
        "Less stable at high speeds",
        "Harder to control",
        "Limited grinding capability",
        "Not beginner-friendly"
      ],
      "recommendedMaps": ["downtown-district", "urban-streets", "rooftop-run"],
      "skillLevel": "Intermediate to Advanced"
    },
    {
      "id": "grind-machine",
      "name": "Grind Machine Build",
      "tier": "A",
      "purpose": "Optimized for rail and ledge tricks",
      "difficulty": "Intermediate",
      "popularity": 80,
      "components": {
        "frame": {
          "type": "Sturdy mid-weight",
          "recommendation": "Strong street frame"
        },
        "bars": {
          "type": "Higher rise (9-9.5 inch)",
          "recommendation": "Leverage for balance"
        },
        "tires": {
          "type": "Medium width for stability",
          "recommendation": "2.3-2.4 inch width"
        },
        "gearing": {
          "type": "Medium ratio (28/9)",
          "recommendation": "Control over speed"
        },
        "pegs": {
          "type": "Full setup, longer length",
          "recommendation": "4.5 inch pegs"
        },
        "seat": {
          "type": "Standard pivotal",
          "recommendation": "Good for positioning"
        }
      },
      "bestFor": [
        "Grind-focused challenges",
        "Technical rail lines",
        "Street riding",
        "Players who love grinding"
      ],
      "pros": [
        "Excellent grind stability",
        "Good balance control",
        "Perfect for rail sections",
        "Versatile grind options"
      ],
      "cons": [
        "Slower than speed builds",
        "Heavier weight",
        "Less air performance",
        "Not ideal for big gaps"
      ],
      "recommendedMaps": ["urban-streets", "construction-zone", "downtown-district"],
      "skillLevel": "Intermediate"
    },
    {
      "id": "park-flow",
      "name": "Park Flow Build",
      "tier": "B",
      "purpose": "Skate park and bowl riding optimization",
      "difficulty": "Beginner-Intermediate",
      "popularity": 65,
      "components": {
        "frame": {
          "type": "Park-specific geometry",
          "recommendation": "Shorter rear end"
        },
        "bars": {
          "type": "Higher rise (9-10 inch)",
          "recommendation": "Good for airs"
        },
        "tires": {
          "type": "Wider for transition grip",
          "recommendation": "2.4-2.5 inch width"
        },
        "gearing": {
          "type": "Short ratio (25/9)",
          "recommendation": "Quick acceleration"
        },
        "pegs": {
          "type": "Optional (2 pegs)",
          "recommendation": "Front or back only"
        },
        "seat": {
          "type": "Mid-height pivotal",
          "recommendation": "Comfortable for transitions"
        }
      },
      "bestFor": [
        "Skate park map",
        "Bowl and transition riding",
        "Air trick focus",
        "Flow-oriented players"
      ],
      "pros": [
        "Excellent in transitions",
        "Great air control",
        "Smooth flow",
        "Quick acceleration in bowls"
      ],
      "cons": [
        "Less effective on street",
        "Limited grind capability",
        "Not ideal for long rails",
        "Specialized use case"
      ],
      "recommendedMaps": ["skate-park"],
      "skillLevel": "Beginner to Intermediate"
    },
    {
      "id": "street-tech",
      "name": "Street Tech Build",
      "tier": "S",
      "purpose": "Technical street riding mastery",
      "difficulty": "Advanced",
      "popularity": 70,
      "components": {
        "frame": {
          "type": "Responsive street geometry",
          "recommendation": "Technical frame design"
        },
        "bars": {
          "type": "Medium height (8.5-9 inch)",
          "recommendation": "Precision control"
        },
        "tires": {
          "type": "Street-specific tread",
          "recommendation": "2.25 inch width"
        },
        "gearing": {
          "type": "Balanced ratio (28/9)",
          "recommendation": "Tricks and speed"
        },
        "pegs": {
          "type": "Full setup",
          "recommendation": "4 pegs, standard length"
        },
        "seat": {
          "type": "Low pivotal",
          "recommendation": "Out of the way"
        }
      },
      "bestFor": [
        "Urban street maps",
        "Technical trick combinations",
        "Wallrides and gaps",
        "Experienced street riders"
      ],
      "pros": [
        "Perfect street feel",
        "Technical capability",
        "Authentic handling",
        "Great for combos"
      ],
      "cons": [
        "Requires skill to use effectively",
        "Less forgiving",
        "Not beginner-friendly",
        "Specialized for street"
      ],
      "recommendedMaps": ["urban-streets", "downtown-district", "secret-compound"],
      "skillLevel": "Advanced to Expert"
    },
    {
      "id": "air-master",
      "name": "Air Master Build",
      "tier": "A",
      "purpose": "Maximum air trick potential",
      "difficulty": "Intermediate",
      "popularity": 60,
      "components": {
        "frame": {
          "type": "Lightweight with responsive geometry",
          "recommendation": "Air-focused frame"
        },
        "bars": {
          "type": "High rise (9.5-10 inch)",
          "recommendation": "Pull-up leverage"
        },
        "tires": {
          "type": "Medium width",
          "recommendation": "2.3 inch width"
        },
        "gearing": {
          "type": "Balanced ratio (27/9)",
          "recommendation": "Height and control"
        },
        "pegs": {
          "type": "Light or none",
          "recommendation": "Weight reduction"
        },
        "seat": {
          "type": "Slim profile",
          "recommendation": "Lightweight"
        }
      },
      "bestFor": [
        "Big air challenges",
        "Flip and spin tricks",
        "Rooftop gaps",
        "Air-focused players"
      ],
      "pros": [
        "Excellent air control",
        "Easy to get height",
        "Great for flips and spins",
        "Lightweight"
      ],
      "cons": [
        "Limited ground game",
        "Less grind capability",
        "Specialized purpose",
        "Not versatile"
      ],
      "recommendedMaps": ["rooftop-run", "skate-park", "construction-zone"],
      "skillLevel": "Intermediate to Advanced"
    }
  ],
  "buildTips": [
    "Test builds on different maps to find your preference",
    "Adjust build based on challenge requirements",
    "Color customization doesn't affect performance",
    "Save multiple builds for different situations",
    "Chain color is a unique customization feature",
    "Match bike aesthetic to rider for cohesive look"
  ],
  "componentCategories": {
    "performance": ["frame", "bars", "tires", "gearing"],
    "style": ["frame color", "component colors", "chain color"],
    "functional": ["pegs", "seat"]
  }
}
```

### Step 2.5: Create `src/data/tier-list.json`

```json
{
  "tierList": {
    "lastUpdated": "2026-01-18",
    "version": "1.0",
    "category": "Bike Builds",
    "description": "Community tier rankings for optimal bike builds based on versatility, effectiveness, and performance across all maps and challenges."
  },
  "tiers": {
    "S": {
      "label": "S-Tier",
      "description": "Best overall builds - highly effective across multiple scenarios",
      "color": "#ff6b35",
      "builds": [
        {
          "id": "speed-demon",
          "name": "Speed Demon Build",
          "reason": "Dominates score challenges and high-score runs. Essential for competitive play.",
          "strengths": ["Top speed", "Score optimization", "Combo extension"],
          "weaknesses": ["Requires skill", "Less stable"]
        },
        {
          "id": "street-tech",
          "name": "Street Tech Build",
          "reason": "Perfect for technical street riding. Excels in most maps with proper skill.",
          "strengths": ["Technical mastery", "Street versatility", "Combo potential"],
          "weaknesses": ["High skill floor", "Not beginner-friendly"]
        }
      ]
    },
    "A": {
      "label": "A-Tier",
      "description": "Excellent builds - strong choices for specific purposes",
      "color": "#f7931e",
      "builds": [
        {
          "id": "all-rounder",
          "name": "All-Rounder Build",
          "reason": "Best starter build. Viable for all content and forgiving to learn.",
          "strengths": ["Versatility", "Beginner-friendly", "No major weaknesses"],
          "weaknesses": ["No specialization", "Not optimal anywhere"]
        },
        {
          "id": "grind-machine",
          "name": "Grind Machine Build",
          "reason": "Dominates rail and grind challenges. Essential for grind-focused maps.",
          "strengths": ["Grind stability", "Rail mastery", "Technical control"],
          "weaknesses": ["Slower speed", "Limited air game"]
        },
        {
          "id": "air-master",
          "name": "Air Master Build",
          "reason": "Best for air challenges and big tricks. Excels on specific maps.",
          "strengths": ["Air control", "Flip/spin optimization", "Height advantage"],
          "weaknesses": ["Limited versatility", "Weak ground game"]
        }
      ]
    },
    "B": {
      "label": "B-Tier",
      "description": "Good builds - viable but situational",
      "color": "#00d9ff",
      "builds": [
        {
          "id": "park-flow",
          "name": "Park Flow Build",
          "reason": "Excellent in skate park but limited elsewhere. Great for learning transitions.",
          "strengths": ["Transition mastery", "Bowl flow", "Air tricks"],
          "weaknesses": ["Limited to park", "Poor street performance"]
        }
      ]
    }
  },
  "trickssTierList": {
    "S": {
      "label": "Essential Tricks",
      "description": "Must-learn tricks for competitive play",
      "tricks": [
        {
          "name": "Manual",
          "reason": "Core mechanic for combo extension. Required for high scores."
        },
        {
          "name": "360 Spin",
          "reason": "Versatile, easy to combo, consistent points."
        },
        {
          "name": "Feeble Grind",
          "reason": "Balanced grind, works on most rails, combo-friendly."
        },
        {
          "name": "Backflip",
          "reason": "High points, reliable, works in most situations."
        }
      ]
    },
    "A": {
      "label": "High-Value Tricks",
      "description": "Excellent tricks worth mastering",
      "tricks": [
        {
          "name": "Tailwhip",
          "reason": "Good points, combos well with spins."
        },
        {
          "name": "Barspin",
          "reason": "Easy to combo, reliable points."
        },
        {
          "name": "Icepick Grind",
          "reason": "High grind points, impressive."
        },
        {
          "name": "720 Spin",
          "reason": "Great for air sections, high points."
        },
        {
          "name": "Wallride",
          "reason": "Unique combo extension, bonus points."
        }
      ]
    },
    "B": {
      "label": "Situational Tricks",
      "description": "Useful in specific scenarios",
      "tricks": [
        {
          "name": "No-Hander",
          "reason": "Style points, easy to land."
        },
        {
          "name": "Double Peg Grind",
          "reason": "Beginner-friendly, stable."
        },
        {
          "name": "Nose Manual",
          "reason": "Variety bonus, harder than manual."
        },
        {
          "name": "Transfer",
          "reason": "Combo extension, bonus points."
        }
      ]
    },
    "Expert": {
      "label": "Expert Tricks",
      "description": "High risk, high reward - for advanced players",
      "tricks": [
        {
          "name": "Double Backflip",
          "reason": "Massive points but requires perfect setup."
        },
        {
          "name": "Flair",
          "reason": "Incredible points, very technical."
        },
        {
          "name": "Barspin + Tailwhip",
          "reason": "Combo trick, highest air points."
        },
        {
          "name": "Crankslide",
          "reason": "Technical grind, expert-level."
        }
      ]
    }
  },
  "mapsTierList": {
    "S": {
      "label": "Best for Grinding",
      "maps": [
        {
          "name": "Downtown District",
          "reason": "Most content, best variety, longest combo potential."
        },
        {
          "name": "Urban Streets",
          "reason": "Perfect street feel, excellent spot variety."
        }
      ]
    },
    "A": {
      "label": "Great Maps",
      "maps": [
        {
          "name": "Construction Zone",
          "reason": "Creative opportunities, good exploration."
        },
        {
          "name": "Rooftop Run",
          "reason": "Best for big airs and epic moments."
        },
        {
          "name": "Secret Compound",
          "reason": "Ultimate challenge for experts."
        }
      ]
    },
    "B": {
      "label": "Beginner Maps",
      "maps": [
        {
          "name": "The Skate Park",
          "reason": "Perfect for learning but limited replayability."
        }
      ]
    }
  }
}
```

### Step 2.6: Create `src/data/codes.json`

```json
{
  "codes": {
    "status": "No official codes announced yet",
    "lastChecked": "2026-01-18",
    "description": "Street Dog BMX may release promotional codes for unlockables, cosmetics, or special content. Check back regularly for updates.",
    "howToRedeem": [
      "Check if game has code redemption system (location TBD)",
      "Enter code exactly as shown (case-sensitive)",
      "Codes may be platform-specific",
      "Codes may have expiration dates",
      "One-time use per account"
    ],
    "whereToFindCodes": [
      {
        "source": "Official Social Media",
        "platforms": ["Instagram @yeahusgames", "TikTok @yeahusgames"],
        "description": "Developer occasionally shares codes during events"
      },
      {
        "source": "Discord Server",
        "description": "Community announcements and special events"
      },
      {
        "source": "Twitch Streams",
        "description": "Content creator partnerships and giveaways"
      },
      {
        "source": "Game Updates",
        "description": "Patch notes may include promotional codes"
      },
      {
        "source": "Community Events",
        "description": "Special events like tournaments or milestones"
      }
    ],
    "activeCodes": [],
    "expiredCodes": [],
    "futureCodeTypes": [
      {
        "type": "Cosmetic Codes",
        "description": "Unlock special bike parts, colors, or clothing items"
      },
      {
        "type": "Challenge Codes",
        "description": "Unlock bonus challenges or objectives"
      },
      {
        "type": "XP/Progression Codes",
        "description": "Bonus progression or unlock currency"
      },
      {
        "type": "Event Codes",
        "description": "Time-limited special content"
      }
    ],
    "tips": [
      "Follow official social media for code announcements",
      "Join Discord community for real-time updates",
      "Codes are often time-limited - redeem quickly",
      "Check this page regularly for new codes",
      "Some codes may be platform-exclusive"
    ]
  },
  "placeholder": {
    "message": "🔒 No active codes at this time",
    "checkBack": "Check back soon! Codes are typically released during:",
    "occasions": [
      "Game launch celebrations",
      "Major updates or patches",
      "Holiday events",
      "Community milestones",
      "Content creator partnerships",
      "Social media promotions"
    ]
  }
}
```

***

## PHASE 3: Core Components

### Step 3.1: Create `src/components/SEO.astro`

```astro
---
import siteData from '../data/site.json';

interface Props {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
}

const { title, description, keywords, ogImage, ogType = 'website' } = Astro.props;
const { seo, site } = siteData;

const pageTitle = title ? `${title} | ${site.name}` : seo.defaultTitle;
const metaDescription = description || seo.defaultDescription;
const metaKeywords = keywords?.join(', ') || seo.keywords.join(', ');
const metaImage = ogImage || seo.ogImage;
const canonicalURL = new URL(Astro.url.pathname, site.url);
---

<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="generator" content={Astro.generator} />

<title>{pageTitle}</title>
<meta name="description" content={metaDescription} />
<meta name="keywords" content={metaKeywords} />
<link rel="canonical" href={canonicalURL} />

<!-- Open Graph / Facebook -->
<meta property="og:type" content={ogType} />
<meta property="og:url" content={canonicalURL} />
<meta property="og:title" content={pageTitle} />
<meta property="og:description" content={metaDescription} />
<meta property="og:image" content={new URL(metaImage, site.url)} />
<meta property="og:site_name" content={site.name} />

<!-- Twitter -->
<meta name="twitter:card" content={seo.twitterCard} />
<meta name="twitter:title" content={pageTitle} />
<meta name="twitter:description" content={metaDescription} />
<meta name="twitter:image" content={new URL(metaImage, site.url)} />

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />

<!-- Additional SEO -->
<meta name="robots" content="index, follow" />
<meta name="language" content="English" />
<meta name="revisit-after" content="7 days" />
<meta name="author" content={site.name} />

<!-- Schema.org JSON-LD -->
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": site.name,
  "description": site.description,
  "url": site.url,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${site.url}/?s={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
})} />
```

### Step 3.2: Create `src/components/Header.astro`

```astro
---
import { Menu, X, Home, BookOpen, Trophy, User, Wrench, Gift, Map, Calendar, Calculator, ExternalLink } from 'lucide-astro';
import siteData from '../data/site.json';

const { navigation } = siteData;
const currentPath = Astro.url.pathname;

const iconMap: Record<string, any> = {
  'home': Home,
  'book-open': BookOpen,
  'trophy': Trophy,
  'user': User,
  'wrench': Wrench,
  'gift': Gift,
  'map': Map,
  'calendar': Calendar,
  'calculator': Calculator,
  'external-link': ExternalLink,
};
---

<header class="navbar bg-base-200 sticky top-0 z-50 shadow-lg border-b border-primary/20">
  <div class="container mx-auto">
    <div class="navbar-start">
      <div class="dropdown lg:hidden">
        <label tabindex="0" class="btn btn-ghost">
          <Menu class="h-5 w-5" />
        </label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow-lg bg-base-200 rounded-box w-64 mt-4 max-h-96 overflow-y-auto">
          {navigation.map((item) => (
            <li>
              {item.children ? (
                <>
                  <span class="menu-title">{item.label}</span>
                  <ul>
                    {item.children.map((child) => (
                      <li><a href={child.href}>{child.label}</a></li>
                    ))}
                  </ul>
                </>
              ) : (
                <a href={item.href} class={currentPath === item.href ? 'active' : ''}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
      <a href="/" class="btn btn-ghost text-xl font-bold normal-case">
        <span class="text-primary">🚲</span>
        <span class="hidden sm:inline">Street Dog BMX</span>
        <span class="sm:hidden">SDBMX</span>
      </a>
    </div>
    
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 gap-1">
        {navigation.slice(0, 7).map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <li>
              {item.children ? (
                <details>
                  <summary class="gap-1">
                    {Icon && <Icon class="h-4 w-4" />}
                    {item.label}
                  </summary>
                  <ul class="p-2 bg-base-200 rounded-t-none w-48 shadow-lg">
                    {item.children.map((child) => (
                      <li><a href={child.href}>{child.label}</a></li>
                    ))}
                  </ul>
                </details>
              ) : (
                <a 
                  href={item.href} 
                  class={`gap-1 ${currentPath === item.href ? 'active' : ''}`}
                >
                  {Icon && <Icon class="h-4 w-4" />}
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
    
    <div class="navbar-end gap-2">
      <div class="dropdown dropdown-end hidden lg:block">
        <label tabindex="0" class="btn btn-ghost btn-sm">
          More
        </label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow-lg bg-base-200 rounded-box w-48 mt-4">
          {navigation.slice(7).map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <li>
                <a href={item.href} class={currentPath === item.href ? 'active' : ''}>
                  {Icon && <Icon class="h-4 w-4" />}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </div>
</header>

<style>
  .navbar {
    backdrop-filter: blur(10px);
    background-color: rgba(45, 45, 45, 0.95);
  }
  
  .menu :where(li > *:not(ul):not(.menu-title):not(details):active),
  .menu :where(li > *:not(ul):not(.menu-title):not(details).active),
  .menu :where(li > details > summary:active) {
    @apply bg-primary text-primary-content;
  }
</style>
```

### Step 3.3: Create `src/components/Footer.astro`

```astro
---
import { ExternalLink } from 'lucide-astro';
import siteData from '../data/site.json';

const { footer, site, game } = siteData;
const currentYear = new Date().getFullYear();
---

<footer class="footer footer-center p-10 bg-base-200 text-base-content mt-20 border-t border-primary/20">
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
      <!-- About -->
      <div class="text-left">
        <h3 class="font-bold text-lg mb-3 text-primary">About This Wiki</h3>
        <p class="text-sm opacity-80">
          Fan-created comprehensive guide for {game.title}. 
          Featuring tricks, maps, builds, and strategies to master the game.
        </p>
      </div>
      
      <!-- Quick Links -->
      <div class="text-left">
        <h3 class="font-bold text-lg mb-3 text-primary">Quick Links</h3>
        <ul class="text-sm space-y-2">
          <li><a href="/guides/" class="link link-hover">Guides</a></li>
          <li><a href="/tier-list/" class="link link-hover">Tier List</a></li>
          <li><a href="/maps/" class="link link-hover">Maps</a></li>
          <li><a href="/builds/" class="link link-hover">Builds</a></li>
          <li><a href="/codes/" class="link link-hover">Codes</a></li>
          <li><a href="/official/" class="link link-hover">Official Links</a></li>
        </ul>
      </div>
      
      <!-- Official -->
      <div class="text-left">
        <h3 class="font-bold text-lg mb-3 text-primary">Official Links</h3>
        <div class="flex flex-col gap-2">
          {footer.social.map((social) => (
            <a 
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn btn-sm btn-outline gap-2"
            >
              <ExternalLink class="h-4 w-4" />
              {social.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
    
    <!-- Disclaimer -->
    <div class="divider"></div>
    
    <div class="text-center max-w-2xl mx-auto">
      <p class="text-xs opacity-70 mb-4">
        <strong>Disclaimer:</strong> This is a fan-created wiki and is not officially affiliated with 
        {game.developer} or {game.publisher}. All game content, trademarks, and assets belong to their 
        respective owners.
      </p>
      
      <div class="flex flex-wrap justify-center gap-4 text-xs mb-4">
        {footer.links.map((link) => (
          <a href={link.href} class="link link-hover">{link.label}</a>
        ))}
      </div>
      
      <p class="text-sm opacity-60">
        {footer.copyright}
      </p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: linear-gradient(to bottom, rgba(45, 45, 45, 0.5), rgba(26, 26, 26, 1));
  }
</style>
```

### Step 3.4: Create `src/components/Layout.astro`

```astro
---
import Header from './Header.astro';
import Footer from './Footer.astro';
import SEO from './SEO.astro';
import '../styles/global.css';

interface Props {
  title?: string;
  description?: string;
  keywords?: string[];
}

const { title, description, keywords } = Astro.props;
---

<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <SEO title={title} description={description} keywords={keywords} />
</head>
<body class="min-h-screen bg-base-100 flex flex-col">
  <Header />
  <main class="flex-grow">
    <slot />
  </main>
  <Footer />
</body>
</html>
```

### Step 3.5: Create `src/components/Hero.astro`

```astro
---
import { ArrowRight, Download, Star } from 'lucide-astro';
import siteData from '../data/site.json';

const { game, site } = siteData;
---

<section class="hero min-h-[60vh] bg-gradient-to-br from-base-100 via-base-200 to-base-300 relative overflow-hidden">
  <!-- Animated Background -->
  <div class="absolute inset-0 opacity-10">
    <div class="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
    <div class="absolute top-20 right-10 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
    <div class="absolute bottom-10 left-1/2 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
  </div>
  
  <div class="hero-content text-center relative z-10">
    <div class="max-w-4xl">
      <div class="mb-6">
        <div class="badge badge-primary badge-lg gap-2 mb-4">
          <Star class="h-4 w-4" />
          Released January 14, 2026
        </div>
      </div>
      
      <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
        {site.name}
      </h1>
      
      <p class="text-xl md:text-2xl mb-4 opacity-90">
        {site.tagline}
      </p>
      
      <p class="text-lg mb-8 opacity-70 max-w-2xl mx-auto">
        Master the streets, learn tricks, explore maps, and dominate the leaderboards in this spiritual successor to Tony Hawk and Dave Mirra games.
      </p>
      
      <div class="flex flex-wrap gap-4 justify-center mb-8">
        {game.features.slice(0, 3).map((feature) => (
          <div class="badge badge-outline badge-lg">{feature}</div>
        ))}
      </div>
      
      <div class="flex flex-wrap gap-4 justify-center">
        <a href="/guides/beginner-guide/" class="btn btn-primary btn-lg gap-2 group">
          Get Started
          <ArrowRight class="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </a>
        <a href="/official/" class="btn btn-outline btn-lg gap-2">
          <Download class="h-5 w-5" />
          Get the Game
        </a>
      </div>
      
      <div class="mt-8 flex flex-wrap gap-4 justify-center text-sm opacity-60">
        {game.platforms.map((platform, index) => (
          <>
            <span>{platform}</span>
            {index < game.platforms.length - 1 && <span>•</span>}
          </>
        ))}
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }
  
  .animate-blob {
    animation: blob 7s infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
</style>
```

***
# TODO.md - Continued

***

## PHASE 3: Components (Continued)

### Step 3.6: Create `src/components/GuideCard.astro`

```astro
---
import { BookOpen, ArrowRight } from 'lucide-astro';

interface Props {
  title: string;
  description: string;
  href: string;
  difficulty?: string;
  icon?: any;
}

const { title, description, href, difficulty, icon: CustomIcon } = Astro.props;
---

<a href={href} class="card bg-base-200 hover:bg-base-300 shadow-xl card-hover transition-all duration-300 group">
  <div class="card-body">
    <div class="flex items-start justify-between">
      <div class="flex items-center gap-3">
        {CustomIcon ? (
          <CustomIcon class="h-8 w-8 text-primary" />
        ) : (
          <BookOpen class="h-8 w-8 text-primary" />
        )}
        <h3 class="card-title text-xl group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
      {difficulty && (
        <div class={`badge ${
          difficulty === 'Beginner' ? 'badge-success' :
          difficulty === 'Intermediate' ? 'badge-warning' :
          difficulty === 'Advanced' ? 'badge-error' : 'badge-info'
        }`}>
          {difficulty}
        </div>
      )}
    </div>
    
    <p class="opacity-80 line-clamp-3">
      {description}
    </p>
    
    <div class="card-actions justify-end mt-4">
      <button class="btn btn-primary btn-sm gap-2 group-hover:gap-3 transition-all">
        Read Guide
        <ArrowRight class="h-4 w-4" />
      </button>
    </div>
  </div>
</a>
```

### Step 3.7: Create `src/components/MapCard.astro`

```astro
---
import { Map, Star, Award } from 'lucide-astro';

interface Props {
  map: {
    id: string;
    name: string;
    difficulty: string;
    size: string;
    focus: string;
    description: string;
    hiddenSpots: number;
    challengeCount: number;
    bestFor: string[];
  };
}

const { map } = Astro.props;

const difficultyColor = {
  'Beginner': 'badge-success',
  'Intermediate': 'badge-warning',
  'Advanced': 'badge-error',
  'Expert': 'badge-error',
  'Intermediate-Advanced': 'badge-warning',
};
---

<div class="card bg-base-200 shadow-xl card-hover">
  <div class="card-body">
    <div class="flex items-start justify-between mb-2">
      <div class="flex items-center gap-3">
        <Map class="h-6 w-6 text-primary" />
        <h3 class="card-title text-xl">{map.name}</h3>
      </div>
      <div class={`badge ${difficultyColor[map.difficulty as keyof typeof difficultyColor] || 'badge-info'}`}>
        {map.difficulty}
      </div>
    </div>
    
    <div class="flex gap-2 mb-3">
      <div class="badge badge-outline">{map.size}</div>
      <div class="badge badge-outline">{map.focus}</div>
    </div>
    
    <p class="opacity-80 text-sm mb-4 line-clamp-2">
      {map.description}
    </p>
    
    <div class="grid grid-cols-2 gap-2 mb-4">
      <div class="stat bg-base-300 rounded-lg p-3">
        <div class="stat-title text-xs">Hidden Spots</div>
        <div class="stat-value text-2xl text-primary">{map.hiddenSpots}</div>
      </div>
      <div class="stat bg-base-300 rounded-lg p-3">
        <div class="stat-title text-xs">Challenges</div>
        <div class="stat-value text-2xl text-secondary">{map.challengeCount}</div>
      </div>
    </div>
    
    <div class="mb-4">
      <h4 class="font-semibold text-sm mb-2 flex items-center gap-2">
        <Award class="h-4 w-4 text-accent" />
        Best For:
      </h4>
      <div class="flex flex-wrap gap-1">
        {map.bestFor.slice(0, 3).map((item) => (
          <span class="badge badge-sm badge-accent badge-outline">{item}</span>
        ))}
      </div>
    </div>
    
    <div class="card-actions justify-end">
      <a href="/maps/" class="btn btn-sm btn-primary">View Details</a>
    </div>
  </div>
</div>
```

### Step 3.8: Create `src/components/BuildCard.astro`

```astro
---
import { Wrench, TrendingUp, Star } from 'lucide-astro';

interface Props {
  build: {
    id: string;
    name: string;
    tier: string;
    purpose: string;
    difficulty: string;
    popularity: number;
    bestFor: string[];
    pros: string[];
    cons: string[];
  };
}

const { build } = Astro.props;

const tierColors = {
  'S': 'badge-error',
  'A': 'badge-warning',
  'B': 'badge-info',
  'C': 'badge-neutral',
};

const difficultyColors = {
  'Beginner': 'text-success',
  'Intermediate': 'text-warning',
  'Advanced': 'text-error',
  'Beginner-Intermediate': 'text-success',
  'Intermediate-Advanced': 'text-warning',
};
---

<div class="card bg-base-200 shadow-xl card-hover">
  <div class="card-body">
    <div class="flex items-start justify-between mb-2">
      <div class="flex items-center gap-3">
        <Wrench class="h-6 w-6 text-primary" />
        <h3 class="card-title text-lg">{build.name}</h3>
      </div>
      <div class={`badge badge-lg ${tierColors[build.tier as keyof typeof tierColors]}`}>
        {build.tier}-Tier
      </div>
    </div>
    
    <p class="text-sm opacity-80 mb-3">{build.purpose}</p>
    
    <div class="flex items-center gap-4 mb-4">
      <div class="flex items-center gap-2">
        <Star class="h-4 w-4 text-warning" />
        <span class="text-sm">Difficulty: <span class={difficultyColors[build.difficulty as keyof typeof difficultyColors]}>{build.difficulty}</span></span>
      </div>
      <div class="flex items-center gap-2">
        <TrendingUp class="h-4 w-4 text-accent" />
        <span class="text-sm">{build.popularity}% Popular</span>
      </div>
    </div>
    
    <div class="mb-3">
      <h4 class="font-semibold text-sm mb-2">Best For:</h4>
      <div class="flex flex-wrap gap-1">
        {build.bestFor.slice(0, 2).map((item) => (
          <span class="badge badge-sm badge-primary badge-outline">{item}</span>
        ))}
      </div>
    </div>
    
    <div class="grid grid-cols-2 gap-3">
      <div>
        <h5 class="text-xs font-semibold text-success mb-1">Pros:</h5>
        <ul class="text-xs space-y-1">
          {build.pros.slice(0, 2).map((pro) => (
            <li class="opacity-80">✓ {pro}</li>
          ))}
        </ul>
      </div>
      <div>
        <h5 class="text-xs font-semibold text-error mb-1">Cons:</h5>
        <ul class="text-xs space-y-1">
          {build.cons.slice(0, 2).map((con) => (
            <li class="opacity-80">✗ {con}</li>
          ))}
        </ul>
      </div>
    </div>
    
    <div class="card-actions justify-end mt-4">
      <a href="/builds/" class="btn btn-sm btn-primary">Full Build</a>
    </div>
  </div>
</div>
```

### Step 3.9: Create `src/components/TierCard.astro`

```astro
---
import { Trophy } from 'lucide-astro';

interface Props {
  tier: string;
  label: string;
  description: string;
  color: string;
  items: Array<{
    id: string;
    name: string;
    reason: string;
    strengths?: string[];
    weaknesses?: string[];
  }>;
}

const { tier, label, description, color, items } = Astro.props;
---

<div class="card bg-base-200 shadow-xl mb-6">
  <div class="card-body">
    <div class="flex items-center gap-3 mb-4">
      <div class={`badge badge-lg text-2xl font-bold px-6 py-4`} style={`background-color: ${color}; color: white;`}>
        {tier}
      </div>
      <div>
        <h3 class="text-2xl font-bold">{label}</h3>
        <p class="text-sm opacity-70">{description}</p>
      </div>
    </div>
    
    <div class="space-y-4">
      {items.map((item) => (
        <div class="bg-base-300 rounded-lg p-4 hover:bg-base-100 transition-colors">
          <div class="flex items-start gap-3">
            <Trophy class="h-5 w-5 text-primary mt-1 flex-shrink-0" />
            <div class="flex-grow">
              <h4 class="font-bold text-lg mb-2">{item.name}</h4>
              <p class="text-sm opacity-80 mb-3">{item.reason}</p>
              
              {(item.strengths || item.weaknesses) && (
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {item.strengths && (
                    <div>
                      <h5 class="text-xs font-semibold text-success mb-1">Strengths:</h5>
                      <ul class="text-xs space-y-1">
                        {item.strengths.map((strength) => (
                          <li class="opacity-80">• {strength}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.weaknesses && (
                    <div>
                      <h5 class="text-xs font-semibold text-error mb-1">Weaknesses:</h5>
                      <ul class="text-xs space-y-1">
                        {item.weaknesses.map((weakness) => (
                          <li class="opacity-80">• {weakness}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
```

### Step 3.10: Create `src/components/CodesList.astro`

```astro
---
import { Gift, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-astro';

interface Props {
  codes: Array<{
    code: string;
    reward: string;
    expiration?: string;
    status: 'active' | 'expired';
  }>;
}

const { codes } = Astro.props;
---

<div class="space-y-4">
  {codes.length === 0 ? (
    <div class="alert alert-info">
      <AlertCircle class="h-6 w-6" />
      <div>
        <h3 class="font-bold">No Active Codes</h3>
        <div class="text-sm">Check back later for promotional codes!</div>
      </div>
    </div>
  ) : (
    codes.map((item) => (
      <div class={`card ${item.status === 'active' ? 'bg-success/10 border border-success' : 'bg-base-300 opacity-60'} shadow-lg`}>
        <div class="card-body">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-3">
              <Gift class={`h-6 w-6 ${item.status === 'active' ? 'text-success' : 'text-base-content'}`} />
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <code class="text-xl font-mono font-bold bg-base-200 px-3 py-1 rounded">
                    {item.code}
                  </code>
                  {item.status === 'active' ? (
                    <CheckCircle class="h-5 w-5 text-success" />
                  ) : (
                    <XCircle class="h-5 w-5 text-error" />
                  )}
                </div>
                <p class="text-sm opacity-80">{item.reward}</p>
                {item.expiration && (
                  <div class="flex items-center gap-1 mt-2 text-xs opacity-60">
                    <Clock class="h-3 w-3" />
                    <span>Expires: {item.expiration}</span>
                  </div>
                )}
              </div>
            </div>
            {item.status === 'active' && (
              <button 
                class="btn btn-sm btn-primary"
                onclick={`navigator.clipboard.writeText('${item.code}'); this.innerText='Copied!'; setTimeout(()=>this.innerText='Copy',2000)`}
              >
                Copy
              </button>
            )}
          </div>
        </div>
      </div>
    ))
  )}
</div>
```

***

## PHASE 4: Pages Implementation

### Step 4.1: Create `src/pages/index.astro`

```astro
---
import Layout from '../components/Layout.astro';
import Hero from '../components/Hero.astro';
import GuideCard from '../components/GuideCard.astro';
import MapCard from '../components/MapCard.astro';
import BuildCard from '../components/BuildCard.astro';
import { BookOpen, Map, Wrench, Gift, Trophy, Calendar, Calculator } from 'lucide-astro';
import mapsData from '../data/maps.json';
import buildsData from '../data/builds.json';
import siteData from '../data/site.json';

const featuredMaps = mapsData.maps.slice(0, 3);
const featuredBuilds = buildsData.builds.filter(b => b.tier === 'S' || b.tier === 'A').slice(0, 3);
---

<Layout>
  <Hero />
  
  <!-- Quick Links Section -->
  <section class="container mx-auto px-4 py-16">
    <h2 class="text-4xl font-bold text-center mb-12">
      Quick <span class="text-primary">Navigation</span>
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <GuideCard
        title="Beginner's Guide"
        description="Start your journey with basic controls, mechanics, and first steps in Street Dog BMX."
        href="/guides/beginner-guide/"
        difficulty="Beginner"
        icon={BookOpen}
      />
      
      <GuideCard
        title="Tricks & Combos"
        description="Master air tricks, grinds, and manuals. Learn to chain them into high-scoring combos."
        href="/guides/tricks-combos/"
        difficulty="Intermediate"
        icon={BookOpen}
      />
      
      <GuideCard
        title="Tier List"
        description="Discover the best builds, tricks, and strategies ranked by effectiveness."
        href="/tier-list/"
        icon={Trophy}
      />
      
      <GuideCard
        title="Promo Codes"
        description="Find active promotional codes for unlockables and special content."
        href="/codes/"
        icon={Gift}
      />
    </div>
  </section>
  
  <!-- Featured Maps Section -->
  <section class="container mx-auto px-4 py-16 bg-base-200/50">
    <div class="flex items-center justify-between mb-12">
      <div>
        <h2 class="text-4xl font-bold mb-2">
          Featured <span class="text-primary">Maps</span>
        </h2>
        <p class="opacity-70">Explore 6 handcrafted environments</p>
      </div>
      <a href="/maps/" class="btn btn-primary">View All Maps</a>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredMaps.map((map) => (
        <MapCard map={map} />
      ))}
    </div>
  </section>
  
  <!-- Featured Builds Section -->
  <section class="container mx-auto px-4 py-16">
    <div class="flex items-center justify-between mb-12">
      <div>
        <h2 class="text-4xl font-bold mb-2">
          Top <span class="text-primary">Builds</span>
        </h2>
        <p class="opacity-70">Best bike configurations for every playstyle</p>
      </div>
      <a href="/builds/" class="btn btn-primary">View All Builds</a>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredBuilds.map((build) => (
        <BuildCard build={build} />
      ))}
    </div>
  </section>
  
  <!-- Tools Section -->
  <section class="container mx-auto px-4 py-16 bg-base-200/50">
    <h2 class="text-4xl font-bold text-center mb-12">
      Helpful <span class="text-primary">Tools</span>
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <a href="/tools/score-calculator/" class="card bg-base-200 hover:bg-base-300 shadow-xl card-hover">
        <div class="card-body items-center text-center">
          <Calculator class="h-12 w-12 text-primary mb-4" />
          <h3 class="card-title">Score Calculator</h3>
          <p class="text-sm opacity-80">Calculate potential combo scores</p>
        </div>
      </a>
      
      <a href="/tier-list/" class="card bg-base-200 hover:bg-base-300 shadow-xl card-hover">
        <div class="card-body items-center text-center">
          <Trophy class="h-12 w-12 text-secondary mb-4" />
          <h3 class="card-title">Tier Lists</h3>
          <p class="text-sm opacity-80">Best builds, tricks & maps ranked</p>
        </div>
      </a>
      
      <a href="/release/" class="card bg-base-200 hover:bg-base-300 shadow-xl card-hover">
        <div class="card-body items-center text-center">
          <Calendar class="h-12 w-12 text-accent mb-4" />
          <h3 class="card-title">Release Info</h3>
          <p class="text-sm opacity-80">Platforms & system requirements</p>
        </div>
      </a>
    </div>
  </section>
  
  <!-- Latest Updates Section -->
  <section class="container mx-auto px-4 py-16">
    <h2 class="text-4xl font-bold text-center mb-12">
      Latest <span class="text-primary">Updates</span>
    </h2>
    
    <div class="max-w-3xl mx-auto space-y-6">
      <div class="alert alert-success">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <h3 class="font-bold">Game Released!</h3>
          <div class="text-sm">Street Dog BMX is now available on PC, PS4, and Xbox One - January 14, 2026</div>
        </div>
      </div>
      
      <div class="alert alert-info">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <h3 class="font-bold">Wiki Launch</h3>
          <div class="text-sm">Comprehensive guides now available - Start exploring!</div>
        </div>
      </div>
    </div>
  </section>
  
  <!-- CTA Section -->
  <section class="container mx-auto px-4 py-16 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl">
    <div class="text-center max-w-2xl mx-auto">
      <h2 class="text-4xl font-bold mb-6">Ready to Master the Streets?</h2>
      <p class="text-lg opacity-80 mb-8">
        Start with our comprehensive beginner's guide and learn everything you need to dominate in Street Dog BMX.
      </p>
      <div class="flex flex-wrap gap-4 justify-center">
        <a href="/guides/beginner-guide/" class="btn btn-primary btn-lg">Start Learning</a>
        <a href="/official/" class="btn btn-outline btn-lg">Get the Game</a>
      </div>
    </div>
  </section>
</Layout>
```

### Step 4.2: Create `src/pages/guides/index.astro`

```astro
---
import Layout from '../../components/Layout.astro';
import GuideCard from '../../components/GuideCard.astro';
import { BookOpen, Zap, Target, Award } from 'lucide-astro';
---

<Layout 
  title="Guides"
  description="Complete guides for Street Dog BMX - Learn tricks, combos, advanced techniques, and master the game."
  keywords={['streetdog bmx guides', 'bmx tricks guide', 'how to play streetdog bmx', 'bmx combos']}
>
  <div class="container mx-auto px-4 py-16">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-5xl font-bold mb-4">
        <span class="text-primary">Guides</span> & Tutorials
      </h1>
      <p class="text-xl opacity-80 max-w-2xl mx-auto">
        Master Street Dog BMX with our comprehensive guides covering everything from basics to advanced techniques.
      </p>
    </div>
    
    <!-- Main Guides -->
    <div class="mb-16">
      <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
        <BookOpen class="h-8 w-8 text-primary" />
        Core Guides
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GuideCard
          title="Beginner's Guide"
          description="Complete introduction to Street Dog BMX. Learn controls, basic mechanics, first steps, and essential tips to get started."
          href="/guides/beginner-guide/"
          difficulty="Beginner"
          icon={BookOpen}
        />
        
        <GuideCard
          title="Tricks & Combos"
          description="Master air tricks, grinds, manuals, and special moves. Learn how to chain tricks into high-scoring combos."
          href="/guides/tricks-combos/"
          difficulty="Intermediate"
          icon={Zap}
        />
        
        <GuideCard
          title="Advanced Techniques"
          description="Expert-level strategies including physics exploitation, line optimization, and challenge completion tactics."
          href="/guides/advanced-techniques/"
          difficulty="Advanced"
          icon={Target}
        />
      </div>
    </div>
    
    <!-- Quick Tips -->
    <div class="bg-base-200 rounded-3xl p-8 mb-16">
      <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
        <Award class="h-8 w-8 text-secondary" />
        Quick Tips
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card bg-base-300">
          <div class="card-body">
            <h3 class="card-title text-primary">For Beginners</h3>
            <ul class="space-y-2 text-sm">
              <li>✓ Start in The Skate Park to learn basics</li>
              <li>✓ Master the manual before attempting combos</li>
              <li>✓ Use pump mechanic for speed and height</li>
              <li>✓ Practice one trick at a time</li>
              <li>✓ Don't rush - consistency over complexity</li>
            </ul>
          </div>
        </div>
        
        <div class="card bg-base-300">
          <div class="card-body">
            <h3 class="card-title text-secondary">For Intermediate Players</h3>
            <ul class="space-y-2 text-sm">
              <li>✓ Focus on combo variety (no repeats)</li>
              <li>✓ Learn map-specific lines</li>
              <li>✓ Practice grind transitions</li>
              <li>✓ Utilize gaps and transfers</li>
              <li>✓ Watch replays to analyze mistakes</li>
            </ul>
          </div>
        </div>
        
        <div class="card bg-base-300">
          <div class="card-body">
            <h3 class="card-title text-accent">For Advanced Players</h3>
            <ul class="space-y-2 text-sm">
              <li>✓ Optimize routes for maximum points</li>
              <li>✓ Master special spot multipliers</li>
              <li>✓ Perfect technical tricks (flair, double backflip)</li>
              <li>✓ Complete expert challenges</li>
              <li>✓ Experiment with physics-based shortcuts</li>
            </ul>
          </div>
        </div>
        
        <div class="card bg-base-300">
          <div class="card-body">
            <h3 class="card-title text-warning">General Tips</h3>
            <ul class="space-y-2 text-sm">
              <li>✓ Controller highly recommended</li>
              <li>✓ Adjust camera settings to preference</li>
              <li>✓ Complete challenges for unlocks</li>
              <li>✓ Explore every map thoroughly</li>
              <li>✓ Join Discord for community tips</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Learning Path -->
    <div>
      <h2 class="text-3xl font-bold mb-8">Recommended Learning Path</h2>
      
      <div class="steps steps-vertical lg:steps-horizontal w-full">
        <div class="step step-primary">
          <div class="text-left ml-4">
            <h3 class="font-bold">Step 1: Basics</h3>
            <p class="text-sm opacity-70">Controls & Movement</p>
          </div>
        </div>
        <div class="step step-primary">
          <div class="text-left ml-4">
            <h3 class="font-bold">Step 2: Tricks</h3>
            <p class="text-sm opacity-70">Learn Individual Moves</p>
          </div>
        </div>
        <div class="step">
          <div class="text-left ml-4">
            <h3 class="font-bold">Step 3: Combos</h3>
            <p class="text-sm opacity-70">Chain Tricks Together</p>
          </div>
        </div>
        <div class="step">
          <div class="text-left ml-4">
            <h3 class="font-bold">Step 4: Maps</h3>
            <p class="text-sm opacity-70">Explore & Find Lines</p>
          </div>
        </div>
        <div class="step">
          <div class="text-left ml-4">
            <h3 class="font-bold">Step 5: Master</h3>
            <p class="text-sm opacity-70">Advanced Techniques</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</Layout>
```

### Step 4.3: Create `src/pages/guides/beginner-guide.astro`

```astro
---
import Layout from '../../components/Layout.astro';
import { Gamepad2, Zap, Target, TrendingUp, AlertCircle } from 'lucide-astro';
---

<Layout 
  title="Beginner's Guide"
  description="Complete beginner's guide to Street Dog BMX - Learn controls, basic mechanics, and essential tips to master the game."
  keywords={['streetdog bmx beginner guide', 'how to play streetdog bmx', 'streetdog bmx controls', 'streetdog bmx tutorial']}
>
  <div class="container mx-auto px-4 py-16">
    <!-- Header -->
    <div class="mb-12">
      <div class="breadcrumbs text-sm mb-4">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/guides/">Guides</a></li>
          <li>Beginner's Guide</li>
        </ul>
      </div>
      
      <h1 class="text-5xl font-bold mb-4">
        Beginner's <span class="text-primary">Guide</span>
      </h1>
      <p class="text-xl opacity-80">
        Everything you need to start your journey in Street Dog BMX
      </p>
    </div>
    
    <!-- Content -->
    <div class="prose-custom max-w-none">
      <!-- Getting Started -->
      <section class="mb-12">
        <h2>Getting Started</h2>
        <p>
          Street Dog BMX is an arcade-style BMX game that combines the flow of Tony Hawk's Pro Skater with technical BMX riding. Released on January 14, 2026, for PC (Steam), PlayStation 4, and Xbox One, the game features 270+ challenges across 6 handcrafted maps.
        </p>
        
        <div class="alert alert-info mt-4">
          <AlertCircle class="h-6 w-6" />
          <div>
            <h3 class="font-bold">Pro Tip</h3>
            <div class="text-sm">A controller is highly recommended for the best experience. The game's physics and trick system work best with analog stick control.</div>
          </div>
        </div>
      </section>
      
      <!-- Controls -->
      <section class="mb-12">
        <h2 class="flex items-center gap-3">
          <Gamepad2 class="h-8 w-8 text-primary" />
          Basic Controls
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title text-primary">Movement</h3>
              <ul>
                <li><strong>Left Stick:</strong> Steer your bike</li>
                <li><strong>Right Stick (Click):</strong> Mini bunny hop</li>
                <li><strong>A/X Button:</strong> Regular bunny hop</li>
                <li><strong>Left Stick Pull Down + Hop:</strong> Pump hop (higher jump)</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title text-secondary">Tricks</h3>
              <ul>
                <li><strong>Right Stick + Directions:</strong> Air tricks (spins, flips, barspins)</li>
                <li><strong>Right Stick on Rails:</strong> Grinds (various combinations)</li>
                <li><strong>B/Circle:</strong> Manual (wheelie)</li>
                <li><strong>Hold after landing:</strong> Extend manual for combos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <!-- First Steps -->
      <section class="mb-12">
        <h2 class="flex items-center gap-3">
          <Target class="h-8 w-8 text-secondary" />
          First Steps
        </h2>
        
        <ol class="list-decimal list-inside space-y-3 my-6">
          <li><strong>Complete the Tutorial:</strong> Learn basic movement and trick mechanics in a controlled environment</li>
          <li><strong>Explore the Skate Park:</strong> Practice in a safe, beginner-friendly map</li>
          <li><strong>Master Bunny Hops:</strong> Essential for navigating terrain and getting air</li>
          <li><strong>Learn to Manual:</strong> Key mechanic for extending combos and maintaining flow</li>
          <li><strong>Practice Grinds:</strong> Start with simple rail grinds (Double Peg Grind is easiest)</li>
        </ol>
      </section>
      
      <!-- Core Mechanics -->
      <section class="mb-12">
        <h2 class="flex items-center gap-3">
          <Zap class="h-8 w-8 text-accent" />
          Core Mechanics
        </h2>
        
        <h3>Combo System</h3>
        <p>The heart of Street Dog BMX is the combo system:</p>
        <ul>
          <li>Chain tricks together without touching the ground normally</li>
          <li>Manuals connect ground sections and keep combos alive</li>
          <li>Grinds maintain combo on rails and ledges</li>
          <li>Higher multipliers = higher scores</li>
          <li>Variety bonus for not repeating tricks</li>
        </ul>
        
        <h3>Speed Management</h3>
        <p>Speed is crucial for both height and flow:</p>
        <ul>
          <li><strong>Pump transitions:</strong> Pull down entering, push up exiting for speed gain</li>
          <li><strong>Use downhill sections:</strong> Let gravity work for you</li>
          <li><strong>Land clean:</strong> Maintain momentum through proper landings</li>
          <li><strong>Avoid over-rotating:</strong> Kills speed and breaks combos</li>
        </ul>
        
        <h3>Manual System</h3>
        <p>Manuals are essential for combo extension:</p>
        <ul>
          <li>Press B/Circle to enter manual (back wheel balance)</li>
          <li>Use left stick to maintain balance</li>
          <li>Connect trick sections without breaking combo</li>
          <li>Points accumulate while in manual</li>
          <li>Can transition from manual to grind and vice versa</li>
        </ul>
      </section>
      
      <!-- Progression Tips -->
      <section class="mb-12">
        <h2 class="flex items-center gap-3">
          <TrendingUp class="h-8 w-8 text-warning" />
          Progression Tips
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="card bg-gradient-to-br from-success/20 to-success/5 border border-success/20">
            <div class="card-body">
              <h3 class="card-title text-success">✓ DO</h3>
              <ul class="space-y-2">
                <li>Start with shorter combos (3-5 tricks)</li>
                <li>Focus on consistency over complexity</li>
                <li>Explore each map to find lines</li>
                <li>Complete challenges to unlock customization</li>
                <li>Watch replay mode to analyze lines</li>
                <li>Practice individual tricks before comboing</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-gradient-to-br from-error/20 to-error/5 border border-error/20">
            <div class="card-body">
              <h3 class="card-title text-error">✗ DON'T</h3>
              <ul class="space-y-2">
                <li>Over-rotate tricks (landing backwards)</li>
                <li>Ignore the manual system</li>
                <li>Neglect the pump mechanic</li>
                <li>Attempt advanced tricks too early</li>
                <li>Skip map exploration</li>
                <li>Get frustrated - practice makes perfect!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Common Mistakes -->
      <section class="mb-12">
        <h2>Common Beginner Mistakes</h2>
        
        <div class="space-y-4 my-6">
          <div class="alert">
            <AlertCircle class="h-5 w-5" />
            <div>
              <strong>Over-rotating tricks:</strong> Land facing backward and lose combo. Solution: Release trick input earlier or get less air.
            </div>
          </div>
          
          <div class="alert">
            <AlertCircle class="h-5 w-5" />
            <div>
              <strong>Not using manuals:</strong> Missing the key combo extension tool. Solution: Practice manuals between every trick section.
            </div>
          </div>
          
          <div class="alert">
            <AlertCircle class="h-5 w-5" />
            <div>
              <strong>Ignoring pump mechanic:</strong> Not gaining enough speed or height. Solution: Practice pumping in bowls and transitions.
            </div>
          </div>
          
          <div class="alert">
            <AlertCircle class="h-5 w-5" />
            <div>
              <strong>Attempting advanced tricks too early:</strong> Frustration from constant fails. Solution: Master basics first, progress gradually.
            </div>
          </div>
        </div>
      </section>
      
      <!-- Next Steps -->
      <section class="mb-12">
        <h2>Next Steps</h2>
        <p>Once comfortable with basics, progress to:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <a href="/guides/tricks-combos/" class="card bg-base-200 hover:bg-base-300 card-hover">
            <div class="card-body">
              <h3 class="card-title text-primary">Advanced Trick Combinations</h3>
              <p class="text-sm">Learn to chain complex tricks together</p>
            </div>
          </a>
          
          <a href="/maps/" class="card bg-base-200 hover:bg-base-300 card-hover">
            <div class="card-body">
              <h3 class="card-title text-secondary">Map Exploration</h3>
              <p class="text-sm">Discover hidden spots and secret areas</p>
            </div>
          </a>
          
          <a href="/builds/" class="card bg-base-200 hover:bg-base-300 card-hover">
            <div class="card-body">
              <h3 class="card-title text-accent">Custom Bike Building</h3>
              <p class="text-sm">Optimize your bike for your playstyle</p>
            </div>
          </a>
        </div>
      </section>
      
      <!-- Practice Routine -->
      <section class="mb-12">
        <h2>Recommended Practice Routine</h2>
        
        <div class="bg-base-200 rounded-2xl p-6">
          <h3 class="text-xl font-bold mb-4">Day 1-3: Fundamentals</h3>
          <ul>
            <li>15 minutes: Free ride in Skate Park</li>
            <li>15 minutes: Practice individual tricks (360, backflip, barspin)</li>
            <li>15 minutes: Manual practice on flat ground</li>
            <li>15 minutes: Simple rail grinds</li>
          </ul>
          
          <div class="divider"></div>
          
          <h3 class="text-xl font-bold mb-4">Day 4-7: Combo Building</h3>
          <ul>
            <li>10 minutes: Warm-up free ride</li>
            <li>20 minutes: 3-5 trick combos with manuals</li>
            <li>20 minutes: Grind-to-manual-to-trick chains</li>
            <li>10 minutes: Challenge attempts</li>
          </ul>
          
          <div class="divider"></div>
          
          <h3 class="text-xl font-bold mb-4">Week 2+: Mastery</h3>
          <ul>
            <li>10 minutes: Warm-up</li>
            <li>20 minutes: Map exploration and line discovery</li>
            <li>20 minutes: Challenge completion</li>
            <li>10 minutes: High score attempts</li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</Layout>
```
# TODO.md - Continued (Part 3)

***

## PHASE 4: Pages Implementation (Continued)

### Step 4.4: Create `src/pages/guides/tricks-combos.astro`

```astro
---
import Layout from '../../components/Layout.astro';
import { Zap, Star, TrendingUp, Target } from 'lucide-astro';
import tricksData from '../../data/tricks.json';

const { airTricks, grindTricks, manualTricks, specialTricks } = tricksData;
---

<Layout 
  title="Tricks & Combos Guide"
  description="Complete tricks and combos guide for Street Dog BMX - Master air tricks, grinds, manuals, and build high-scoring combinations."
  keywords={['streetdog bmx tricks', 'streetdog bmx combos', 'bmx tricks list', 'how to combo streetdog bmx']}
>
  <div class="container mx-auto px-4 py-16">
    <!-- Header -->
    <div class="mb-12">
      <div class="breadcrumbs text-sm mb-4">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/guides/">Guides</a></li>
          <li>Tricks & Combos</li>
        </ul>
      </div>
      
      <h1 class="text-5xl font-bold mb-4">
        Tricks & <span class="text-primary">Combos</span> Guide
      </h1>
      <p class="text-xl opacity-80">
        Master every trick and learn to chain them into massive combos
      </p>
    </div>
    
    <div class="prose-custom max-w-none">
      <!-- Air Tricks -->
      <section class="mb-12">
        <h2 class="flex items-center gap-3">
          <Zap class="h-8 w-8 text-primary" />
          Air Tricks
        </h2>
        
        <p>Air tricks are performed while airborne. Use the right stick to execute different moves.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          {airTricks.map((trick) => (
            <div class="card bg-base-200">
              <div class="card-body">
                <div class="flex items-start justify-between mb-2">
                  <h3 class="card-title text-lg">{trick.name}</h3>
                  <div class={`badge ${
                    trick.difficulty === 'Beginner' ? 'badge-success' :
                    trick.difficulty === 'Intermediate' ? 'badge-warning' :
                    trick.difficulty === 'Advanced' ? 'badge-error' : 'badge-error'
                  }`}>
                    {trick.difficulty}
                  </div>
                </div>
                <p class="text-sm opacity-80 mb-2">{trick.description}</p>
                <div class="bg-base-300 rounded p-2 text-xs mb-2">
                  <strong>Input:</strong> {trick.input}
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-primary font-bold">{trick.basePoints} pts</span>
                  {trick.tips && (
                    <span class="text-xs opacity-60">💡 {trick.tips}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div class="alert alert-info">
          <Star class="h-6 w-6" />
          <div>
            <h3 class="font-bold">Pro Tip</h3>
            <div class="text-sm">Combine spins with flips for massive point bonuses. A 360 + Backflip combo is worth more than both tricks separately!</div>
          </div>
        </div>
      </section>
      
      <!-- Grind Tricks -->
      <section class="mb-12">
        <h2 class="flex items-center gap-3">
          <Target class="h-8 w-8 text-secondary" />
          Grind Tricks
        </h2>
        
        <p>Grinds are performed on rails, ledges, and coping. They're essential for combo extension and maintaining flow.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {grindTricks.map((trick) => (
            <div class="card bg-base-200">
              <div class="card-body">
                <div class="flex items-start justify-between mb-2">
                  <h3 class="card-title">{trick.name}</h3>
                  <div class={`badge ${
                    trick.difficulty === 'Beginner' ? 'badge-success' :
                    trick.difficulty === 'Intermediate' ? 'badge-warning' :
                    trick.difficulty === 'Advanced' ? 'badge-error' : 'badge-error'
                  }`}>
                    {trick.difficulty}
                  </div>
                </div>
                <p class="text-sm opacity-80 mb-2">{trick.description}</p>
                <div class="bg-base-300 rounded p-2 text-xs mb-2">
                  <strong>Input:</strong> {trick.input}
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-primary font-bold">{trick.basePoints} pts</span>
                  <span class="text-secondary">+{trick.pointsPerSecond}/sec</span>
                </div>
                {trick.tips && (
                  <p class="text-xs opacity-60 mt-2">💡 {trick.tips}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <!-- Manual Tricks -->
      <section class="mb-12">
        <h2>Ground Tricks (Manuals)</h2>
        
        <p>Manuals are the glue that holds combos together. Master these to extend your combos indefinitely.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          {manualTricks.map((trick) => (
            <div class="card bg-base-200 border-2 border-accent">
              <div class="card-body">
                <div class="flex items-start justify-between mb-2">
                  <h3 class="card-title text-accent">{trick.name}</h3>
                  <div class={`badge ${
                    trick.difficulty === 'Beginner' ? 'badge-success' : 'badge-warning'
                  }`}>
                    {trick.difficulty}
                  </div>
                </div>
                <p class="text-sm opacity-80 mb-2">{trick.description}</p>
                <div class="bg-base-300 rounded p-2 text-xs mb-2">
                  <strong>Input:</strong> {trick.input}
                </div>
                <div class="flex items-center justify-between text-sm">
                  <span class="text-primary font-bold">{trick.basePoints} pts</span>
                  <span class="text-accent">+{trick.pointsPerSecond}/sec</span>
                </div>
                <p class="text-xs opacity-60 mt-2">💡 {trick.tips}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div class="alert alert-warning">
          <TrendingUp class="h-6 w-6" />
          <div>
            <h3 class="font-bold">Essential Skill!</h3>
            <div class="text-sm">Manuals are THE most important skill in Street Dog BMX. Without them, you cannot build high-scoring combos. Practice manuals on flat ground until they become second nature.</div>
          </div>
        </div>
      </section>
      
      <!-- Special Tricks -->
      {specialTricks && specialTricks.length > 0 && (
        <section class="mb-12">
          <h2>Special Tricks</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            {specialTricks.map((trick) => (
              <div class="card bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                <div class="card-body">
                  <div class="flex items-start justify-between mb-2">
                    <h3 class="card-title">{trick.name}</h3>
                    <div class={`badge ${
                      trick.difficulty === 'Beginner' ? 'badge-success' :
                      trick.difficulty === 'Intermediate' ? 'badge-warning' :
                      'badge-error'
                    }`}>
                      {trick.difficulty}
                    </div>
                  </div>
                  <p class="text-sm opacity-80 mb-2">{trick.description}</p>
                  <div class="bg-base-300 rounded p-2 text-xs mb-2">
                    <strong>Input:</strong> {trick.input}
                  </div>
                  <div class="text-sm">
                    <span class="text-primary font-bold">{trick.basePoints} pts</span>
                  </div>
                  <p class="text-xs opacity-60 mt-2">💡 {trick.tips}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
      
      <!-- Combo Building -->
      <section class="mb-12">
        <h2>Combo Building 101</h2>
        
        <h3>Basic Combo Structure</h3>
        <div class="bg-base-200 rounded-2xl p-6 my-6">
          <ol class="space-y-4">
            <li class="flex items-start gap-3">
              <span class="badge badge-primary">1</span>
              <div>
                <strong>Launch:</strong> Use bunny hop or ramp to get airborne
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="badge badge-primary">2</span>
              <div>
                <strong>Air Trick:</strong> Execute spin, flip, or barspin while in air
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="badge badge-primary">3</span>
              <div>
                <strong>Land to Manual:</strong> Press manual button on landing to extend combo
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="badge badge-primary">4</span>
              <div>
                <strong>Grind:</strong> Approach rail or ledge while in manual, transition to grind
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="badge badge-primary">5</span>
              <div>
                <strong>Manual Exit:</strong> Exit grind into manual, continue or finish combo
              </div>
            </li>
          </ol>
        </div>
        
        <h3>Example Combos</h3>
        
        <div class="space-y-6 my-6">
          <!-- Beginner Combo -->
          <div class="card bg-gradient-to-r from-success/10 to-success/5 border border-success/20">
            <div class="card-body">
              <div class="flex items-center gap-3 mb-4">
                <div class="badge badge-success badge-lg">Beginner</div>
                <h4 class="text-xl font-bold">First Real Combo</h4>
                <span class="text-success font-bold">~8,000 pts</span>
              </div>
              <div class="bg-base-200 rounded-lg p-4 font-mono text-sm">
                Bunny Hop → 360 Spin → Manual → Rail Grind (2 sec) → Manual → Barspin → Land
              </div>
              <p class="text-sm opacity-80 mt-3">
                <strong>Why it works:</strong> Simple tricks that are easy to land, with two manual sections to keep combo alive. Perfect for practicing the flow.
              </p>
            </div>
          </div>
          
          <!-- Intermediate Combo -->
          <div class="card bg-gradient-to-r from-warning/10 to-warning/5 border border-warning/20">
            <div class="card-body">
              <div class="flex items-center gap-3 mb-4">
                <div class="badge badge-warning badge-lg">Intermediate</div>
                <h4 class="text-xl font-bold">Street Line Special</h4>
                <span class="text-warning font-bold">~25,000 pts</span>
              </div>
              <div class="bg-base-200 rounded-lg p-4 font-mono text-sm">
                Ramp Launch → Backflip + 360 → Manual → Ledge Grind → Manual → Gap Jump → Tailwhip → Feeble Grind → Land
              </div>
              <p class="text-sm opacity-80 mt-3">
                <strong>Why it works:</strong> Combines air tricks with multiple grinds and a gap for bonus points. Uses variety for multiplier boost.
              </p>
            </div>
          </div>
          
          <!-- Advanced Combo -->
          <div class="card bg-gradient-to-r from-error/10 to-error/5 border border-error/20">
            <div class="card-body">
              <div class="flex items-center gap-3 mb-4">
                <div class="badge badge-error badge-lg">Advanced</div>
                <h4 class="text-xl font-bold">The Megacombo</h4>
                <span class="text-error font-bold">~75,000+ pts</span>
              </div>
              <div class="bg-base-200 rounded-lg p-4 font-mono text-sm">
                Wallride → Gap → Double Backflip + 540 → Manual → Transfer → Icepick Grind → Manual → Roof Gap → Barspin + 360 → Feeble Grind (3 sec) → Manual → Superman → Land
              </div>
              <p class="text-sm opacity-80 mt-3">
                <strong>Why it works:</strong> Maximum variety (no repeated tricks), special spot bonuses (wallride, transfer, roof gap), extended grinds, and perfect execution. This is what mastery looks like.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Combo Tips -->
      <section class="mb-12">
        <h2>Combo Mastery Tips</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title text-primary">Timing</h3>
              <ul class="space-y-2 text-sm">
                <li>✓ Don't rush trick inputs</li>
                <li>✓ Wait for full rotation before landing</li>
                <li>✓ Manual input right on landing</li>
                <li>✓ Practice rhythm and flow</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title text-secondary">Terrain Usage</h3>
              <ul class="space-y-2 text-sm">
                <li>✓ Gaps add multipliers</li>
                <li>✓ Wallrides boost points</li>
                <li>✓ Transfers = combo extension</li>
                <li>✓ Use elevation changes</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title text-accent">Risk vs Reward</h3>
              <ul class="space-y-2 text-sm">
                <li>✓ Landing clean > big tricks</li>
                <li>✓ Consistency beats luck</li>
                <li>✓ Know when to end combo</li>
                <li>✓ Save risky tricks for practice</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title text-warning">Map Knowledge</h3>
              <ul class="space-y-2 text-sm">
                <li>✓ Learn optimal combo routes</li>
                <li>✓ Find hidden multiplier spots</li>
                <li>✓ Plan escape routes</li>
                <li>✓ Watch replays for ideas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Scoring System -->
      <section class="mb-12">
        <h2>Understanding the Scoring System</h2>
        
        <div class="bg-base-200 rounded-2xl p-6">
          <h3 class="text-xl font-bold mb-4">How Points Are Calculated</h3>
          
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-primary mb-2">Base Trick Points</h4>
              <ul class="text-sm space-y-1">
                <li>• Simple tricks: 100-500 points</li>
                <li>• Intermediate tricks: 500-1,500 points</li>
                <li>• Advanced tricks: 1,500-3,000 points</li>
                <li>• Expert tricks: 3,000-5,000 points</li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-semibold text-secondary mb-2">Combo Multiplier</h4>
              <p class="text-sm mb-2">Your combo multiplier increases with:</p>
              <ul class="text-sm space-y-1">
                <li>• Number of tricks in combo</li>
                <li>• Trick variety (no repeats = bonus)</li>
                <li>• Special location bonuses</li>
                <li>• Clean landings maintain multiplier</li>
              </ul>
              <div class="bg-base-300 rounded p-3 mt-3 text-sm">
                <strong>Formula:</strong><br>
                Base Multiplier = 1.0x<br>
                Each Trick = +0.2x<br>
                Variety Bonus = +0.5x (every 5 unique tricks)<br>
                Special Spot = +1.0x<br>
                Crash = Combo lost
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold text-accent mb-2">Special Bonuses</h4>
              <ul class="text-sm space-y-1">
                <li>• <strong>Gap Bonus:</strong> +500-2,000 per gap</li>
                <li>• <strong>Transfer Bonus:</strong> +300-1,000 per transfer</li>
                <li>• <strong>Wallride Bonus:</strong> +200-800</li>
                <li>• <strong>Hidden Spot Bonus:</strong> +1,000-5,000</li>
                <li>• <strong>Manual Extension:</strong> +50 per second</li>
                <li>• <strong>Grind Extension:</strong> +100 per second</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Trick Mastery Checklist -->
      <section class="mb-12">
        <h2>Trick Mastery Checklist</h2>
        
        <div class="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6">
          <p class="mb-4">Track your progress as you master Street Dog BMX:</p>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-2">
              <h4 class="font-bold text-primary mb-3">Basic Skills</h4>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-primary" />
                <span class="text-sm">Land 10 different air tricks</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-primary" />
                <span class="text-sm">Grind 5 different rail types</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-primary" />
                <span class="text-sm">Manual for 10 seconds continuously</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-primary" />
                <span class="text-sm">Complete a 5-trick combo</span>
              </label>
            </div>
            
            <div class="space-y-2">
              <h4 class="font-bold text-secondary mb-3">Intermediate Skills</h4>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-secondary" />
                <span class="text-sm">Complete a 10-trick combo</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-secondary" />
                <span class="text-sm">Score 25,000 in single combo</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-secondary" />
                <span class="text-sm">Manual-to-grind transition</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-secondary" />
                <span class="text-sm">Land a wallride combo</span>
              </label>
            </div>
            
            <div class="space-y-2">
              <h4 class="font-bold text-accent mb-3">Advanced Skills</h4>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-accent" />
                <span class="text-sm">Score 50,000 in single combo</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-accent" />
                <span class="text-sm">Chain 3 gaps in one combo</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-accent" />
                <span class="text-sm">Use transfer effectively</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-accent" />
                <span class="text-sm">Complete 15-trick combo</span>
              </label>
            </div>
            
            <div class="space-y-2">
              <h4 class="font-bold text-error mb-3">Expert Skills</h4>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-error" />
                <span class="text-sm">Score 100,000+ combo</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-error" />
                <span class="text-sm">Land double backflip consistently</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-error" />
                <span class="text-sm">Master flair in bowl</span>
              </label>
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="checkbox checkbox-error" />
                <span class="text-sm">Complete 20+ trick combo</span>
              </label>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Next Steps -->
      <section>
        <h2>Ready for More?</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <a href="/guides/advanced-techniques/" class="card bg-base-200 hover:bg-base-300 card-hover">
            <div class="card-body">
              <h3 class="card-title text-primary">Advanced Techniques</h3>
              <p class="text-sm">Physics exploits, line optimization, and expert strategies</p>
            </div>
          </a>
          
          <a href="/maps/" class="card bg-base-200 hover:bg-base-300 card-hover">
            <div class="card-body">
              <h3 class="card-title text-secondary">Explore Maps</h3>
              <p class="text-sm">Find the best spots for practicing specific tricks</p>
            </div>
          </a>
          
          <a href="/tier-list/" class="card bg-base-200 hover:bg-base-300 card-hover">
            <div class="card-body">
              <h3 class="card-title text-accent">Trick Tier List</h3>
              <p class="text-sm">See which tricks are most effective for scoring</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  </div>
</Layout>
```

### Step 4.5: Create `src/pages/guides/advanced-techniques.astro`

```astro
---
import Layout from '../../components/Layout.astro';
import { Zap, Target, TrendingUp, Award, Eye } from 'lucide-astro';
---

<Layout 
  title="Advanced Techniques"
  description="Master advanced techniques in Street Dog BMX - Physics mechanics, line optimization, challenge strategies, and expert tips."
  keywords={['streetdog bmx advanced guide', 'streetdog bmx expert tips', 'streetdog bmx pro strategies']}
>
  <div class="container mx-auto px-4 py-16">
    <!-- Header -->
    <div class="mb-12">
      <div class="breadcrumbs text-sm mb-4">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/guides/">Guides</a></li>
          <li>Advanced Techniques</li>
        </ul>
      </div>
      
      <div class="badge badge-error badge-lg mb-4">Expert Level</div>
      
      <h1 class="text-5xl font-bold mb-4">
        Advanced <span class="text-primary">Techniques</span>
      </h1>
      <p class="text-xl opacity-80">
        Expert-level strategies for mastering Street Dog BMX
      </p>
    </div>
    
    <div class="prose-custom max-w-none">
      <!-- Physics-Based Mechanics -->
      <section class="mb-12">
        <h2 class="flex items-center gap-3">
          <Zap class="h-8 w-8 text-primary" />
          Physics-Based Mechanics
        </h2>
        
        <h3>Pump System Mastery</h3>
        <p>The pump mechanic is crucial for speed and height control:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="card bg-base-200">
            <div class="card-body">
              <h4 class="card-title text-primary">Transition Pumping</h4>
              <ul class="space-y-2 text-sm">
                <li><strong>Entering:</strong> Pull down on left stick as you approach bottom</li>
                <li><strong>Exiting:</strong> Push up as you reach top of transition</li>
                <li><strong>Result:</strong> Gain speed and height with each pump</li>
                <li><strong>Pro Tip:</strong> Chain pumps in bowls for infinite speed gain</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-base-200">
            <div class="card-body">
              <h4 class="card-title text-secondary">Flat Pumping</h4>
              <ul class="space-y-2 text-sm">
                <li><strong>Technique:</strong> Rhythmic up-down stick movement</li>
                <li><strong>Use Case:</strong> Gaining speed on flat ground</li>
                <li><strong>Advanced:</strong> Combine with small hops for extra speed</li>
                <li><strong>Pro Tip:</strong> Useful for reaching distant gaps</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-base-200">
            <div class="card-body">
              <h4 class="card-title text-accent">Pre-Jump Pump</h4>
              <ul class="space-y-2 text-sm">
                <li><strong>Input:</strong> Pull down then push up before hop</li>
                <li><strong>Result:</strong> Maximum hop height</li>
                <li><strong>Critical For:</strong> Big gaps and high airs</li>
                <li><strong>Practice:</strong> Try in Rooftop Run map</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-base-200">
            <div class="card-body">
              <h4 class="card-title text-warning">Air Pumping</h4>
              <ul class="space-y-2 text-sm">
                <li><strong>While Airborne:</strong> Adjust height mid-flight</li>
                <li><strong>Pull Down:</strong> Drop faster (for gaps)</li>
                <li><strong>Push Up:</strong> Extend airtime slightly</li>
                <li><strong>Mastery:</strong> Fine-tune landings</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h3>Weight Transfer System</h3>
        <div class="bg-base-200 rounded-2xl p-6 my-6">
          <p class="mb-4">Use left stick for rider weight shifting - affects multiple aspects:</p>
          <ul class="space-y-2">
            <li><strong>Landing Stability:</strong> Lean forward for downslope landings, backward for upslope</li>
            <li><strong>Grind Balance:</strong> Shift weight to maintain rail position</li>
            <li><strong>Manual Duration:</strong> Micro-adjustments keep manual going</li>
            <li><strong>Air Control:</strong> Affects rotation speed and direction</li>
          </ul>
        </div>
      </section>
      
      <!-- Advanced Line Building -->
      <section class="mb-12">
        <h2 class="flex items-center gap-3">
          <Target class="h-8 w-8 text-secondary" />
          Advanced Line Building
        </h2>
        
        <h3>Map Flow Analysis</h3>
        <p>Expert players analyze maps systematically:</p>
        
        <div class="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-6 my-6">
          <ol class="space-y-4">
            <li class="flex gap-4">
              <span class="badge badge-secondary">1</span>
              <div>
                <strong>Identify High Points:</strong> Start from elevated positions for maximum combo potential
              </div>
            </li>
            <li class="flex gap-4">
              <span class="badge badge-secondary">2</span>
              <div>
                <strong>Map Grind Rails:</strong> Note all rail positions and connections
              </div>
            </li>
            <li class="flex gap-4">
              <span class="badge badge-secondary">3</span>
              <div>
                <strong>Locate Gap Opportunities:</strong> Gaps add significant multiplier bonuses
              </div>
            </li>
            <li class="flex gap-4">
              <span class="badge badge-secondary">4</span>
              <div>
                <strong>Find Wallride Connections:</strong> Wallrides extend combos uniquely
              </div>
            </li>
            <li class="flex gap-4">
              <span class="badge badge-secondary">5</span>
              <div>
                <strong>Note Transfer Possibilities:</strong> Transfers between sections maintain combo
              </div>
            </li>
          </ol>
        </div>
        
        <h3>Optimal Routing Principles</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div class="card bg-base-200">
            <div class="card-body">
              <h4 class="font-bold text-primary mb-3">Route Planning</h4>
              <ul class="text-sm space-y-2">
                <li>✓ Chain natural terrain features</li>
                <li>✓ Minimize ground time between tricks</li>
                <li>✓ Utilize elevation changes for speed</li>
                <li>✓ Incorporate hidden spots for bonuses</li>
                <li>✓ Plan escape routes for failed tricks</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-base-200">
            <div class="card-body">
              <h4 class="font-bold text-secondary mb-3">Line Efficiency</h4>
              <ul class="text-sm space-y-2">
                <li>✓ One continuous flow (no stopping)</li>
                <li>✓ Speed management throughout</li>
                <li>✓ Strategic manual placement</li>
                <li>✓ Grind chains for extension</li>
                <li>✓ End with high-value trick</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Technical Skills -->
      <section class="mb-12">
        <h2 class="flex items-center gap-3">
          <Award class="h-8 w-8 text-accent" />
          Technical Skills Mastery
        </h2>
        
        <h3>Precision Landing</h3>
        <div class="bg-base-200 rounded-2xl p-6 my-6">
          <p class="mb-4">Landing is where most combos fail. Master these techniques:</p>
          
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-primary mb-2">Rotation Adjustment</h4>
              <p class="text-sm">Use weight transfer mid-air to fine-tune rotation. If under-rotating, lean forward slightly. If over-rotating, lean back.</p>
            </div>
            
            <div>
              <h4 class="font-semibold text-secondary mb-2">Speed Compensation</h4>
              <p class="text-sm">Higher speed = more rotation. At high speeds, use less stick input for tricks. At low speeds, commit fully to rotations.</p>
            </div>
            
            <div>
              <h4 class="font-semibold text-accent mb-2">Manual Continuation</h4>
              <p class="text-sm">Input manual button 0.1 seconds BEFORE landing for seamless transition. Too early = failed manual. Too late = combo breaks.</p>
            </div>
            
            <div>
              <h4 class="font-semibold text-warning mb-2">Grind Approach</h4>
              <p class="text-sm">Approach rails at 20-30 degree angle for optimal grind entry. Perpendicular approaches often fail. Parallel approaches slide off.</p>
            </div>
          </div>
        </div>
        
        <h3>Grind Extensions</h3>
        <p>Long grinds rack up points but require advanced balance:</p>
        <ul class="my-4">
          <li><strong>Balance Adjustments:</strong> Micro-movements with left stick keep you on rail</li>
          <li><strong>Switch Grind Types:</strong> Change grind mid-rail by adjusting position (advanced!)</li>
          <li><strong>Exit Timing:</strong> Exit into manual at rail end, don't wait for automatic exit</li>
          <li><strong>Rail Transfers:</strong> Jump between parallel rails to extend grind combos</li>
        </ul>
        
        <h3>Air Control Mastery</h3>
        <div class="alert alert-info my-6">
          <Eye class="h-6 w-6" />
          <div>
            <h4 class="font-bold">Expert Technique</h4>
            <div class="text-sm">You can "style" tricks by holding inputs longer or combining multiple stick directions. This doesn't change points but improves visual flair and can help with rotation timing.</div>
          </div>
        </div>
      </section>
      
      <!-- Challenge Optimization -->
      <section class="mb-12">
        <h2 class="flex items-center gap-3">
          <TrendingUp class="h-8 w-8 text-warning" />
          Challenge Optimization (270+ Challenges)
        </h2>
        
        <p>With 270+ challenges, efficiency is key:</p>
        
        <h3>Challenge Categories & Strategies</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
          <div class="card bg-gradient-to-br from-primary/20 to-primary/5">
            <div class="card-body">
              <h4 class="card-title text-sm">Trick Challenges</h4>
              <p class="text-xs opacity-80 mb-2">Perform specific tricks</p>
              <ul class="text-xs space-y-1">
                <li>✓ Practice trick in isolation first</li>
                <li>✓ Find ideal spot for setup</li>
                <li>✓ Multiple attempts per run</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-gradient-to-br from-secondary/20 to-secondary/5">
            <div class="card-body">
              <h4 class="card-title text-sm">Combo Challenges</h4>
              <p class="text-xs opacity-80 mb-2">Hit score thresholds</p>
              <ul class="text-xs space-y-1">
                <li>✓ Use high-value trick combos</li>
                <li>✓ Maximize multipliers</li>
                <li>✓ Find special spots</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-gradient-to-br from-accent/20 to-accent/5">
            <div class="card-body">
              <h4 class="card-title text-sm">Exploration</h4>
              <p class="text-xs opacity-80 mb-2">Discover hidden spots</p>
              <ul class="text-xs space-y-1">
                <li>✓ Check every corner</li>
                <li>✓ Look up and down</li>
                <li>✓ Try "impossible" gaps</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-gradient-to-br from-warning/20 to-warning/5">
            <div class="card-body">
              <h4 class="card-title text-sm">Technical</h4>
              <p class="text-xs opacity-80 mb-2">Precision requirements</p>
              <ul class="text-xs space-y-1">
                <li>✓ Slow down and focus</li>
                <li>✓ Practice exact execution</li>
                <li>✓ Use custom bike if needed</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-gradient-to-br from-error/20 to-error/5">
            <div class="card-body">
              <h4 class="card-title text-sm">Line Challenges</h4>
              <p class="text-xs opacity-80 mb-2">Specific route completion</p>
              <ul class="text-xs space-y-1">
                <li>✓ Memorize exact path</li>
                <li>✓ Practice sections separately</li>
                <li>✓ String together when ready</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-gradient-to-br from-info/20 to-info/5">
            <div class="card-body">
              <h4 class="card-title text-sm">Time Trials</h4>
              <p class="text-xs opacity-80 mb-2">Speed-based challenges</p>
              <ul class="text-xs space-y-1">
                <li>✓ Optimize route for speed</li>
                <li>✓ Minimize air time</li>
                <li>✓ Use pump constantly</li>
              </ul>
            </div>
          </div>
        </div>
        
        <h3>Challenge Completion Tips</h3>
        <ul class="my-4">
          <li>📋 <strong>Group Similar Challenges:</strong> Complete multiple trick challenges in one session</li>
          <li>🚲 <strong>Custom Bike Setups:</strong> Use specialized builds for specific challenge types</li>
          <li>📍 <strong>Learn Spawn Locations:</strong> Know where challenges activate to plan routes</li>
          <li>🎥 <strong>Replay Mode:</strong> Study failed attempts to understand mistakes</li>
          <li>🎯 <strong>Consistency > Perfection:</strong> Reliable completion beats lucky attempts</li>
        </ul>
      </section>
      
      <!-- Replay System -->
      <section class="mb-12">
        <h2>Replay System as Learning Tool</h2>
        
        <p>The replay editor isn't just for sharing - it's a masterclass in self-improvement:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title text-primary">Analyze Failed Attempts</h3>
              <ul class="text-sm space-y-2">
                <li>✓ See exact rotation at landing</li>
                <li>✓ Identify speed issues</li>
                <li>✓ Spot balance problems</li>
                <li>✓ Learn from mistakes</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title text-secondary">Study Successful Runs</h3>
              <ul class="text-sm space-y-2">
                <li>✓ Review what worked</li>
                <li>✓ Note timing of inputs</li>
                <li>✓ Memorize routes</li>
                <li>✓ Replicate success</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title text-accent">Discover Hidden Shortcuts</h3>
              <ul class="text-sm space-y-2">
                <li>✓ Different camera angles reveal paths</li>
                <li>✓ Slow-motion shows opportunities</li>
                <li>✓ Find alternative routes</li>
                <li>✓ Spot secret areas</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title text-warning">Perfect Combo Timing</h3>
              <ul class="text-sm space-y-2">
                <li>✓ Frame-by-frame analysis</li>
                <li>✓ Optimize trick sequences</li>
                <li>✓ Improve transition timing</li>
                <li>✓ Maximize efficiency</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Score Maximization -->
      <section class="mb-12">
        <h2>Score Maximization Strategies</h2>
        
        <h3>Multiplier Management</h3>
        <div class="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 my-6">
          <p class="mb-4"><strong>Goal:</strong> Maintain the highest possible multiplier for as long as possible.</p>
          
          <div class="space-y-4">
            <div>
              <h4 class="font-semibold mb-2">Extend Combos Longer</h4>
              <p class="text-sm">Every trick adds to multiplier. A 20-trick combo at 5x multiplier beats a 10-trick combo at 8x.</p>
            </div>
            
            <div>
              <h4 class="font-semibold mb-2">Integrate High-Value Spots</h4>
              <p class="text-sm">Special spots give +1.0x multiplier. Plan routes through these areas.</p>
            </div>
            
            <div>
              <h4 class="font-semibold mb-2">Chain Unique Tricks</h4>
              <p class="text-sm">Every 5 unique tricks = +0.5x variety bonus. Avoid repeating moves.</p>
            </div>
            
            <div>
              <h4 class="font-semibold mb-2">Use Transfer Bonuses</h4>
              <p class="text-sm">Transfers between ramps/sections add points AND maintain combo.</p>
            </div>
            
            <div>
              <h4 class="font-semibold mb-2">Exploit Special Zones</h4>
              <p class="text-sm">Hidden areas often have permanent multiplier boosts. Find them all!</p>
            </div>
          </div>
        </div>
        
        <h3>High-Score Run Structure</h3>
        <div class="bg-base-200 rounded-2xl p-6 my-6">
          <ol class="space-y-3">
            <li><strong>1. Route Planning (5 min):</strong> Walk through intended path, noting all spots</li>
            <li><strong>2. Section Practice (20 min):</strong> Master each section individually</li>
            <li><strong>3. Trick Selection (5 min):</strong> Choose 15-20 unique tricks for variety bonus</li>
            <li><strong>4. Bail Recovery (10 min):</strong> Practice recovering from common failure points</li>
            <li><strong>5. Full Run Attempts (20 min):</strong> String everything together</li>
            <li><strong>6. Optimization (ongoing):</strong> Refine timing, add tricks, improve flow</li>
          </ol>
        </div>
      </section>
      
      <!-- Map-Specific Techniques -->
      <section class="mb-12">
        <h2>Map-Specific Advanced Techniques</h2>
        
        <div class="space-y-4">
          <div class="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div class="collapse-title text-xl font-medium">
              The Skate Park - Flow Mastery
            </div>
            <div class="collapse-content">
              <ul class="text-sm space-y-2">
                <li>✓ Use bowl chains for infinite combos</li>
                <li>✓ Figure-8 patterns maintain speed</li>
                <li>✓ Coping grinds connect bowl sections</li>
                <li>✓ Perfect for practicing pump system</li>
              </ul>
            </div>
          </div>
          
          <div class="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div class="collapse-title text-xl font-medium">
              Rooftop Run - Gap Management
            </div>
            <div class="collapse-content">
              <ul class="text-sm space-y-2">
                <li>✓ Speed calculation crucial for gaps</li>
                <li>✓ Height advantage for combo starts</li>
                <li>✓ Risk vs reward assessment required</li>
                <li>✓ Bail recovery spots identified</li>
              </ul>
            </div>
          </div>
          
          <div class="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div class="collapse-title text-xl font-medium">
              Construction Zone - Vertical Exploitation
            </div>
            <div class="collapse-content">
              <ul class="text-sm space-y-2">
                <li>✓ Scaffolding rails for long grinds</li>
                <li>✓ Multi-level transfers extend combos</li>
                <li>✓ Elevator shafts as shortcuts</li>
                <li>✓ Crane areas for unique tricks</li>
              </ul>
            </div>
          </div>
          
          <div class="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div class="collapse-title text-xl font-medium">
              Downtown District - Marathon Routing
            </div>
            <div class="collapse-content">
              <ul class="text-sm space-y-2">
                <li>✓ Plan 30+ second combo routes</li>
                <li>✓ District-to-district transitions</li>
                <li>✓ Memorize landmark positions</li>
                <li>✓ Escape routes for failed sections</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Customization for Performance -->
      <section class="mb-12">
        <h2>Customization for Performance</h2>
        
        <p>While cosmetic, bike setup affects handling and feel:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title text-primary">Weight Distribution</h3>
              <p class="text-sm mb-3">Heavier builds = more stable, slower response. Lighter = twitchy, faster.</p>
              <ul class="text-sm space-y-1">
                <li>• Heavy: Better for grinds</li>
                <li>• Light: Better for airs</li>
                <li>• Medium: Best all-around</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title text-secondary">Gear Ratios</h3>
              <p class="text-sm mb-3">Affects top speed vs acceleration trade-off.</p>
              <ul class="text-sm space-y-1">
                <li>• Tall ratio: Speed focus</li>
                <li>• Short ratio: Quick acceleration</li>
                <li>• Test per map type</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="alert alert-success">
          <Award class="h-6 w-6" />
          <div>
            <h4 class="font-bold">Pro Tip</h4>
            <div class="text-sm">Create and save multiple bike builds for different maps and challenge types. Speed build for score runs, grind build for rail challenges, park build for bowls.</div>
          </div>
        </div>
      </section>
      
      <!-- Practice Routines -->
      <section class="mb-12">
        <h2>Advanced Practice Routines</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card bg-gradient-to-br from-success/20 to-success/5 border border-success/30">
            <div class="card-body">
              <h3 class="card-title text-success">Daily Warm-up (15 min)</h3>
              <ol class="text-sm space-y-2">
                <li>1. 5 min free ride</li>
                <li>2. 5 min combo practice</li>
                <li>3. 5 min challenge attempts</li>
              </ol>
            </div>
          </div>
          
          <div class="card bg-gradient-to-br from-warning/20 to-warning/5 border border-warning/30">
            <div class="card-body">
              <h3 class="card-title text-warning">Skill Development (30 min)</h3>
              <ol class="text-sm space-y-2">
                <li>1. Focus on one trick type</li>
                <li>2. Practice specific map section</li>
                <li>3. Attempt high-score runs</li>
              </ol>
            </div>
          </div>
          
          <div class="card bg-gradient-to-br from-error/20 to-error/5 border border-error/30">
            <div class="card-body">
              <h3 class="card-title text-error">Challenge Grind (60 min)</h3>
              <ol class="text-sm space-y-2">
                <li>1. Target 5-10 challenges</li>
                <li>2. Master required techniques</li>
                <li>3. Persist until completion</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Final Tips -->
      <section>
        <h2>Final Expert Tips</h2>
        
        <div class="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8">
          <ul class="space-y-3">
            <li class="flex gap-3">
              <span class="text-primary">▸</span>
              <span><strong>Never stop learning:</strong> Even 100+ hours in, new techniques emerge</span>
            </li>
            <li class="flex gap-3">
              <span class="text-secondary">▸</span>
              <span><strong>Watch community content:</strong> YouTube/Twitch for pro strategies</span>
            </li>
            <li class="flex gap-3">
              <span class="text-accent">▸</span>
              <span><strong>Join Discord:</strong> Share techniques, get tips, stay updated</span>
            </li>
            <li class="flex gap-3">
              <span class="text-warning">▸</span>
              <span><strong>Experiment constantly:</strong> Best discoveries come from trying "impossible" things</span>
            </li>
            <li class="flex gap-3">
              <span class="text-error">▸</span>
              <span><strong>Have fun:</strong> Mastery comes from enjoyment, not grinding</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</Layout>
```

# TODO.md - Continued (Part 4)

***

## PHASE 4: Pages Implementation (Continued)

### Step 4.6: Create `src/pages/tier-list.astro`

```astro
---
import Layout from '../components/Layout.astro';
import TierCard from '../components/TierCard.astro';
import { Trophy, Zap, Map, Wrench } from 'lucide-astro';
import tierData from '../data/tier-list.json';

const { tierList, tiers, trickssTierList, mapsTierList } = tierData;
---

<Layout 
  title="Tier List"
  description="Complete tier list for Street Dog BMX - Best builds, tricks, and maps ranked by effectiveness and performance."
  keywords={['streetdog bmx tier list', 'best bmx builds', 'best tricks streetdog bmx', 'streetdog bmx rankings']}
>
  <div class="container mx-auto px-4 py-16">
    <!-- Header -->
    <div class="mb-12">
      <div class="breadcrumbs text-sm mb-4">
        <ul>
          <li><a href="/">Home</a></li>
          <li>Tier List</li>
        </ul>
      </div>
      
      <h1 class="text-5xl font-bold mb-4">
        <span class="text-primary">Tier</span> List Rankings
      </h1>
      <p class="text-xl opacity-80 mb-6">
        Community-driven rankings for builds, tricks, and maps based on effectiveness and performance
      </p>
      
      <div class="flex flex-wrap gap-3 mb-6">
        <div class="badge badge-lg">Version {tierList.version}</div>
        <div class="badge badge-lg badge-primary">Updated {tierList.lastUpdated}</div>
        <div class="badge badge-lg badge-outline">Community Verified</div>
      </div>
    </div>
    
    <!-- Quick Navigation -->
    <div class="flex flex-wrap gap-4 mb-12">
      <a href="#builds" class="btn btn-primary gap-2">
        <Wrench class="h-4 w-4" />
        Bike Builds
      </a>
      <a href="#tricks" class="btn btn-secondary gap-2">
        <Zap class="h-4 w-4" />
        Tricks
      </a>
      <a href="#maps" class="btn btn-accent gap-2">
        <Map class="h-4 w-4" />
        Maps
      </a>
    </div>
    
    <!-- Builds Tier List -->
    <section id="builds" class="mb-16">
      <div class="flex items-center gap-3 mb-8">
        <Wrench class="h-10 w-10 text-primary" />
        <div>
          <h2 class="text-4xl font-bold">Bike Builds Tier List</h2>
          <p class="opacity-70">Ranked by versatility, effectiveness, and performance across all content</p>
        </div>
      </div>
      
      <TierCard
        tier="S"
        label={tiers.S.label}
        description={tiers.S.description}
        color={tiers.S.color}
        items={tiers.S.builds}
      />
      
      <TierCard
        tier="A"
        label={tiers.A.label}
        description={tiers.A.description}
        color={tiers.A.color}
        items={tiers.A.builds}
      />
      
      <TierCard
        tier="B"
        label={tiers.B.label}
        description={tiers.B.description}
        color={tiers.B.color}
        items={tiers.B.builds}
      />
      
      <div class="alert alert-info mt-6">
        <Trophy class="h-6 w-6" />
        <div>
          <h3 class="font-bold">Tier Explanation</h3>
          <div class="text-sm">
            <strong>S-Tier:</strong> Best overall - competitive must-haves. 
            <strong>A-Tier:</strong> Excellent specialized choices. 
            <strong>B-Tier:</strong> Viable but situational.
          </div>
        </div>
      </div>
      
      <div class="mt-8 text-center">
        <a href="/builds/" class="btn btn-primary btn-lg">View Detailed Build Guides</a>
      </div>
    </section>
    
    <div class="divider my-16"></div>
    
    <!-- Tricks Tier List -->
    <section id="tricks" class="mb-16">
      <div class="flex items-center gap-3 mb-8">
        <Zap class="h-10 w-10 text-secondary" />
        <div>
          <h2 class="text-4xl font-bold">Tricks Tier List</h2>
          <p class="opacity-70">Essential tricks ranked by scoring potential and combo utility</p>
        </div>
      </div>
      
      <TierCard
        tier="S"
        label={trickssTierList.S.label}
        description={trickssTierList.S.description}
        color="#ff6b35"
        items={trickssTierList.S.tricks.map(t => ({
          id: t.name.toLowerCase().replace(/\s+/g, '-'),
          name: t.name,
          reason: t.reason
        }))}
      />
      
      <TierCard
        tier="A"
        label={trickssTierList.A.label}
        description={trickssTierList.A.description}
        color="#f7931e"
        items={trickssTierList.A.tricks.map(t => ({
          id: t.name.toLowerCase().replace(/\s+/g, '-'),
          name: t.name,
          reason: t.reason
        }))}
      />
      
      <TierCard
        tier="B"
        label={trickssTierList.B.label}
        description={trickssTierList.B.description}
        color="#00d9ff"
        items={trickssTierList.B.tricks.map(t => ({
          id: t.name.toLowerCase().replace(/\s+/g, '-'),
          name: t.name,
          reason: t.reason
        }))}
      />
      
      <TierCard
        tier="Expert"
        label={trickssTierList.Expert.label}
        description={trickssTierList.Expert.description}
        color="#a855f7"
        items={trickssTierList.Expert.tricks.map(t => ({
          id: t.name.toLowerCase().replace(/\s+/g, '-'),
          name: t.name,
          reason: t.reason
        }))}
      />
      
      <div class="alert alert-warning mt-6">
        <Zap class="h-6 w-6" />
        <div>
          <h3 class="font-bold">Trick Priority</h3>
          <div class="text-sm">
            Master S-Tier tricks first - they're essential for competitive play. A-Tier tricks round out your arsenal. B-Tier are situational. Expert tricks are high-risk, high-reward for advanced players only.
          </div>
        </div>
      </div>
      
      <div class="mt-8 text-center">
        <a href="/guides/tricks-combos/" class="btn btn-secondary btn-lg">Learn All Tricks & Combos</a>
      </div>
    </section>
    
    <div class="divider my-16"></div>
    
    <!-- Maps Tier List -->
    <section id="maps" class="mb-16">
      <div class="flex items-center gap-3 mb-8">
        <Map class="h-10 w-10 text-accent" />
        <div>
          <h2 class="text-4xl font-bold">Maps Tier List</h2>
          <p class="opacity-70">Maps ranked by content density, replayability, and overall enjoyment</p>
        </div>
      </div>
      
      <TierCard
        tier="S"
        label={mapsTierList.S.label}
        description="Best maps for grinding, challenges, and high scores"
        color="#ff6b35"
        items={mapsTierList.S.maps.map(m => ({
          id: m.name.toLowerCase().replace(/\s+/g, '-'),
          name: m.name,
          reason: m.reason
        }))}
      />
      
      <TierCard
        tier="A"
        label={mapsTierList.A.label}
        description="Great maps with unique strengths"
        color="#f7931e"
        items={mapsTierList.A.maps.map(m => ({
          id: m.name.toLowerCase().replace(/\s+/g, '-'),
          name: m.name,
          reason: m.reason
        }))}
      />
      
      <TierCard
        tier="B"
        label={mapsTierList.B.label}
        description="Good for learning but limited endgame value"
        color="#00d9ff"
        items={mapsTierList.B.maps.map(m => ({
          id: m.name.toLowerCase().replace(/\s+/g, '-'),
          name: m.name,
          reason: m.reason
        }))}
      />
      
      <div class="alert alert-info mt-6">
        <Map class="h-6 w-6" />
        <div>
          <h3 class="font-bold">Map Recommendations</h3>
          <div class="text-sm">
            While Skate Park is B-Tier for experienced players, it's S-Tier for beginners! All maps have value depending on your skill level and goals. S-Tier maps simply offer the most content and replayability.
          </div>
        </div>
      </div>
      
      <div class="mt-8 text-center">
        <a href="/maps/" class="btn btn-accent btn-lg">Explore All Maps</a>
      </div>
    </section>
    
    <!-- Tier List Methodology -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-6">Tier List Methodology</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card bg-base-200">
          <div class="card-body">
            <h3 class="card-title text-primary">Builds Criteria</h3>
            <ul class="text-sm space-y-2">
              <li>✓ Versatility across maps</li>
              <li>✓ Challenge completion rate</li>
              <li>✓ High-score potential</li>
              <li>✓ Ease of use</li>
              <li>✓ Community popularity</li>
            </ul>
          </div>
        </div>
        
        <div class="card bg-base-200">
          <div class="card-body">
            <h3 class="card-title text-secondary">Tricks Criteria</h3>
            <ul class="text-sm space-y-2">
              <li>✓ Base point value</li>
              <li>✓ Combo utility</li>
              <li>✓ Consistency/reliability</li>
              <li>✓ Learning curve</li>
              <li>✓ Competitive usage rate</li>
            </ul>
          </div>
        </div>
        
        <div class="card bg-base-200">
          <div class="card-body">
            <h3 class="card-title text-accent">Maps Criteria</h3>
            <ul class="text-sm space-y-2">
              <li>✓ Content density</li>
              <li>✓ Challenge variety</li>
              <li>✓ Hidden spots count</li>
              <li>✓ Replayability</li>
              <li>✓ Line opportunities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Community Input -->
    <section class="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8">
      <h2 class="text-3xl font-bold mb-6 text-center">Community-Driven Rankings</h2>
      
      <p class="text-center max-w-2xl mx-auto mb-6">
        These tier lists are based on community feedback, competitive play data, and extensive testing. 
        Rankings may change as the meta evolves and new strategies emerge.
      </p>
      
      <div class="flex flex-wrap gap-4 justify-center">
        <div class="stat bg-base-200 rounded-lg">
          <div class="stat-title">Last Updated</div>
          <div class="stat-value text-2xl text-primary">{tierList.lastUpdated}</div>
        </div>
        
        <div class="stat bg-base-200 rounded-lg">
          <div class="stat-title">Version</div>
          <div class="stat-value text-2xl text-secondary">{tierList.version}</div>
        </div>
        
        <div class="stat bg-base-200 rounded-lg">
          <div class="stat-title">Categories</div>
          <div class="stat-value text-2xl text-accent">3</div>
        </div>
      </div>
      
      <div class="text-center mt-6">
        <p class="text-sm opacity-70">
          Disagree with rankings? Join the Discord to share your thoughts and contribute to future updates!
        </p>
        <a href="/official/" class="btn btn-outline btn-sm mt-4">Join Community</a>
      </div>
    </section>
  </div>
</Layout>
```

### Step 4.7: Create `src/pages/characters.astro`

```astro
---
import Layout from '../components/Layout.astro';
import { User, Shirt, Award, Sparkles } from 'lucide-astro';
---

<Layout 
  title="Character Customization"
  description="Complete character customization guide for Street Dog BMX - Create your unique rider with extensive clothing and appearance options."
  keywords={['streetdog bmx customization', 'character creator', 'bmx rider customization']}
>
  <div class="container mx-auto px-4 py-16">
    <!-- Header -->
    <div class="mb-12">
      <div class="breadcrumbs text-sm mb-4">
        <ul>
          <li><a href="/">Home</a></li>
          <li>Character Customization</li>
        </ul>
      </div>
      
      <h1 class="text-5xl font-bold mb-4">
        Character <span class="text-primary">Customization</span>
      </h1>
      <p class="text-xl opacity-80">
        Create your unique BMX rider with extensive customization options
      </p>
    </div>
    
    <div class="prose-custom max-w-none">
      <!-- Intro -->
      <section class="mb-12">
        <div class="alert alert-info">
          <Sparkles class="h-6 w-6" />
          <div>
            <h3 class="font-bold">By Riders, For Riders</h3>
            <div class="text-sm">Street Dog BMX offers deep character customization created by BMX riders for BMX riders. Every player can create a unique rider identity that represents their personal style.</div>
          </div>
        </div>
      </section>
      
      <!-- Customization Categories -->
      <section class="mb-12">
        <h2 class="flex items-center gap-3">
          <User class="h-8 w-8 text-primary" />
          Customization Categories
        </h2>
        
        <!-- Appearance -->
        <div class="card bg-base-200 mb-6">
          <div class="card-body">
            <h3 class="card-title text-2xl text-primary">Appearance</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <h4 class="font-bold mb-3">Facial Features</h4>
                <ul class="space-y-2 text-sm">
                  <li><strong>Face Shape:</strong> Multiple face shape variations</li>
                  <li><strong>Skin Tone:</strong> Full range of realistic skin tones</li>
                  <li><strong>Hairstyles:</strong> Various hair options (short, long, mohawk, etc.)</li>
                  <li><strong>Hair Color:</strong> Natural and vibrant color options</li>
                  <li><strong>Facial Hair:</strong> Beards, mustaches, clean shaven</li>
                </ul>
              </div>
              
              <div>
                <h4 class="font-bold mb-3">Body & Details</h4>
                <ul class="space-y-2 text-sm">
                  <li><strong>Body Type:</strong> Various build options</li>
                  <li><strong>Tattoos:</strong> Multiple placement options and designs</li>
                  <li><strong>Tattoo Positioning:</strong> Arms, legs, torso, neck</li>
                  <li><strong>Height:</strong> Character height variations</li>
                  <li><strong>Build:</strong> Slim to athletic proportions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Clothing -->
        <div class="card bg-base-200 mb-6">
          <div class="card-body">
            <h3 class="card-title text-2xl text-secondary flex items-center gap-2">
              <Shirt class="h-6 w-6" />
              Clothing Options
            </h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              <!-- Headwear -->
              <div class="bg-base-300 rounded-lg p-4">
                <h4 class="font-bold text-primary mb-3">Headwear</h4>
                <ul class="text-sm space-y-1">
                  <li>• Baseball caps (various brands)</li>
                  <li>• Beanies (multiple colors)</li>
                  <li>• Helmets (full-face, half-shell)</li>
                  <li>• Bandanas</li>
                  <li>• Bare head option</li>
                  <li>• Snapbacks</li>
                </ul>
              </div>
              
              <!-- Tops -->
              <div class="bg-base-300 rounded-lg p-4">
                <h4 class="font-bold text-primary mb-3">Tops</h4>
                <ul class="text-sm space-y-1">
                  <li>• T-shirts (graphic designs)</li>
                  <li>• Hoodies (pullover & zip-up)</li>
                  <li>• Tank tops</li>
                  <li>• Long sleeve shirts</li>
                  <li>• Jersey styles</li>
                  <li>• Flannel shirts</li>
                  <li>• Jackets</li>
                </ul>
              </div>
              
              <!-- Bottoms -->
              <div class="bg-base-300 rounded-lg p-4">
                <h4 class="font-bold text-primary mb-3">Bottoms</h4>
                <ul class="text-sm space-y-1">
                  <li>• Jeans (skinny, regular, baggy)</li>
                  <li>• Shorts (cargo, athletic)</li>
                  <li>• Track pants</li>
                  <li>• Joggers</li>
                  <li>• Chinos</li>
                  <li>• Various colors & patterns</li>
                </ul>
              </div>
              
              <!-- Footwear -->
              <div class="bg-base-300 rounded-lg p-4">
                <h4 class="font-bold text-primary mb-3">Footwear</h4>
                <ul class="text-sm space-y-1">
                  <li>• BMX-specific shoes</li>
                  <li>• Skate shoes</li>
                  <li>• Sneakers (various styles)</li>
                  <li>• High-tops & low-tops</li>
                  <li>• Multiple colorways</li>
                  <li>• Brand variations</li>
                </ul>
              </div>
              
              <!-- Accessories -->
              <div class="bg-base-300 rounded-lg p-4">
                <h4 class="font-bold text-primary mb-3">Accessories</h4>
                <ul class="text-sm space-y-1">
                  <li>• Gloves (fingerless, full)</li>
                  <li>• Knee pads</li>
                  <li>• Elbow pads</li>
                  <li>• Glasses/Sunglasses</li>
                  <li>• Jewelry (chains, rings)</li>
                  <li>• Watches</li>
                  <li>• Backpacks</li>
                </ul>
              </div>
              
              <!-- Protection Gear -->
              <div class="bg-base-300 rounded-lg p-4">
                <h4 class="font-bold text-primary mb-3">Protection Gear</h4>
                <ul class="text-sm space-y-1">
                  <li>• Full protective sets</li>
                  <li>• Minimal protection</li>
                  <li>• Mix and match options</li>
                  <li>• Color coordination</li>
                  <li>• Professional rider look</li>
                  <li>• Casual street style</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Unlocking Options -->
      <section class="mb-12">
        <h2 class="flex items-center gap-3">
          <Award class="h-8 w-8 text-accent" />
          Unlocking Customization Options
        </h2>
        
        <p>Customization items are unlocked through gameplay progression:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div class="card bg-gradient-to-br from-success/20 to-success/5 border border-success/20">
            <div class="card-body">
              <h3 class="card-title text-success">Completing Challenges</h3>
              <p class="text-sm mb-3">270+ challenges reward clothing and customization unlocks</p>
              <ul class="text-sm space-y-2">
                <li>✓ Trick challenges unlock related gear</li>
                <li>✓ Map challenges unlock location-themed items</li>
                <li>✓ Score challenges unlock premium items</li>
                <li>✓ Hidden spot challenges unlock rare gear</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-gradient-to-br from-warning/20 to-warning/5 border border-warning/20">
            <div class="card-body">
              <h3 class="card-title text-warning">Score Achievements</h3>
              <p class="text-sm mb-3">Hit score milestones for exclusive items</p>
              <ul class="text-sm space-y-2">
                <li>✓ 10,000 points: Basic unlocks</li>
                <li>✓ 50,000 points: Intermediate items</li>
                <li>✓ 100,000 points: Advanced gear</li>
                <li>✓ 250,000+ points: Elite cosmetics</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
            <div class="card-body">
              <h3 class="card-title text-primary">Map Exploration</h3>
              <p class="text-sm mb-3">Find hidden spots for unique rewards</p>
              <ul class="text-sm space-y-2">
                <li>✓ Each map has secret spots</li>
                <li>✓ Discover all spots for map-themed gear</li>
                <li>✓ Rare items in hardest-to-reach places</li>
                <li>✓ Exploration rewards creativity</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20">
            <div class="card-body">
              <h3 class="card-title text-secondary">Game Progress</h3>
              <p class="text-sm mb-3">Natural progression through gameplay</p>
              <ul class="text-sm space-y-2">
                <li>✓ Level-based unlocks</li>
                <li>✓ Time played rewards</li>
                <li>✓ Skill progression milestones</li>
                <li>✓ Complete content for full wardrobe</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Style Guides -->
      <section class="mb-12">
        <h2>Character Style Guides</h2>
        
        <p>Popular style archetypes to inspire your character creation:</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
          <div class="card bg-base-200 border-2 border-primary">
            <div class="card-body">
              <h3 class="card-title text-primary">Classic BMX</h3>
              <p class="text-sm mb-3">Traditional rider look with protective gear</p>
              <ul class="text-xs space-y-1">
                <li>• Full-face helmet or half-shell</li>
                <li>• Jersey or graphic tee</li>
                <li>• Knee & elbow pads</li>
                <li>• BMX-specific shoes</li>
                <li>• Gloves</li>
                <li>• Athletic pants or jeans</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-base-200 border-2 border-secondary">
            <div class="card-body">
              <h3 class="card-title text-secondary">Street Style</h3>
              <p class="text-sm mb-3">Urban clothing, minimal protection</p>
              <ul class="text-xs space-y-1">
                <li>• Snapback or beanie</li>
                <li>• Hoodie or graphic tee</li>
                <li>• Minimal pads (optional)</li>
                <li>• Skate shoes</li>
                <li>• Jeans or joggers</li>
                <li>• Accessories (chain, watch)</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-base-200 border-2 border-accent">
            <div class="card-body">
              <h3 class="card-title text-accent">Pro Rider</h3>
              <p class="text-sm mb-3">Sponsored look with matching gear</p>
              <ul class="text-xs space-y-1">
                <li>• Branded helmet</li>
                <li>• Team jersey</li>
                <li>• Coordinated pads</li>
                <li>• Signature shoes</li>
                <li>• Gloves</li>
                <li>• Matching colors throughout</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-base-200 border-2 border-warning">
            <div class="card-body">
              <h3 class="card-title text-warning">Unique Character</h3>
              <p class="text-sm mb-3">Mix styles for personal identity</p>
              <ul class="text-xs space-y-1">
                <li>• Unexpected combinations</li>
                <li>• Bold color choices</li>
                <li>• Standout tattoos</li>
                <li>• Creative accessories</li>
                <li>• Individual expression</li>
                <li>• Break the rules!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Creating Your Rider -->
      <section class="mb-12">
        <h2>Creating Your Perfect Rider</h2>
        
        <div class="bg-base-200 rounded-2xl p-6">
          <h3 class="text-xl font-bold mb-4">Step-by-Step Guide</h3>
          
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="badge badge-primary badge-lg">1</div>
              <div class="flex-grow">
                <h4 class="font-bold mb-2">Start with Base Features</h4>
                <p class="text-sm opacity-80">Choose body type, skin tone, and basic proportions. This is your foundation.</p>
              </div>
            </div>
            
            <div class="divider"></div>
            
            <div class="flex gap-4">
              <div class="badge badge-primary badge-lg">2</div>
              <div class="flex-grow">
                <h4 class="font-bold mb-2">Define Face & Hair</h4>
                <p class="text-sm opacity-80">Select facial features, hairstyle, and hair color. Add facial hair if desired.</p>
              </div>
            </div>
            
            <div class="divider"></div>
            
            <div class="flex gap-4">
              <div class="badge badge-primary badge-lg">3</div>
              <div class="flex-grow">
                <h4 class="font-bold mb-2">Add Personal Details</h4>
                <p class="text-sm opacity-80">Tattoos and unique features that make your rider stand out.</p>
              </div>
            </div>
            
            <div class="divider"></div>
            
            <div class="flex gap-4">
              <div class="badge badge-primary badge-lg">4</div>
              <div class="flex-grow">
                <h4 class="font-bold mb-2">Choose Clothing Style</h4>
                <p class="text-sm opacity-80">Top-to-bottom outfit selection. Consider cohesive color scheme or bold contrasts.</p>
              </div>
            </div>
            
            <div class="divider"></div>
            
            <div class="flex gap-4">
              <div class="badge badge-primary badge-lg">5</div>
              <div class="flex-grow">
                <h4 class="font-bold mb-2">Final Touches</h4>
                <p class="text-sm opacity-80">Accessories, protection gear, and color coordination. Fine-tune until perfect!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Tips -->
      <section class="mb-12">
        <h2>Customization Tips</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title text-primary">Style Tips</h3>
              <ul class="text-sm space-y-2">
                <li>✓ Experiment with different combinations</li>
                <li>✓ Color coordination enhances aesthetics</li>
                <li>✓ Match rider and bike themes</li>
                <li>✓ Unlock items through gameplay</li>
                <li>✓ Update look as you progress</li>
                <li>✓ Screenshot your favorite setups</li>
              </ul>
            </div>
          </div>
          
          <div class="card bg-base-200">
            <div class="card-body">
              <h3 class="card-title text-secondary">Progression Tips</h3>
              <ul class="text-sm space-y-2">
                <li>✓ Complete challenges for unlocks</li>
                <li>✓ Explore every map thoroughly</li>
                <li>✓ Focus on score milestones</li>
                <li>✓ Try different playstyles</li>
                <li>✓ Collect all hidden spots</li>
                <li>✓ Play consistently for time rewards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Community Showcase -->
      <section class="mb-12">
        <h2>Community Showcase</h2>
        
        <div class="alert alert-warning">
          <Award class="h-6 w-6" />
          <div>
            <h3 class="font-bold">Coming Soon!</h3>
            <div class="text-sm">Community character submissions will be featured here. Share your unique rider designs on Discord for a chance to be showcased!</div>
          </div>
        </div>
      </section>
      
      <!-- Related Pages -->
      <section>
        <h2>Continue Your Journey</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="/builds/" class="card bg-base-200 hover:bg-base-300 card-hover">
            <div class="card-body">
              <h3 class="card-title text-primary">Bike Builds</h3>
              <p class="text-sm">Match your bike to your rider's aesthetic</p>
            </div>
          </a>
          
          <a href="/guides/beginner-guide/" class="card bg-base-200 hover:bg-base-300 card-hover">
            <div class="card-body">
              <h3 class="card-title text-secondary">Beginner's Guide</h3>
              <p class="text-sm">Learn the game and unlock more items</p>
            </div>
          </a>
          
          <a href="/official/" class="card bg-base-200 hover:bg-base-300 card-hover">
            <div class="card-body">
              <h3 class="card-title text-accent">Join Community</h3>
              <p class="text-sm">Share your character designs with others</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  </div>
</Layout>
```
# TODO.md - Continued (Part 5)

***

## PHASE 4: Pages Implementation (Continued)

### Step 4.8: Create `src/pages/builds.astro`

```astro
---
import Layout from '../components/Layout.astro';
import BuildCard from '../components/BuildCard.astro';
import { Wrench, Star, Lightbulb, Palette } from 'lucide-astro';
import buildsData from '../data/builds.json';

const { builds, buildTips } = buildsData;
---

<Layout 
  title="Bike Builds Guide"
  description="Complete bike builds guide for Street Dog BMX - Optimal configurations for every playstyle with detailed component breakdowns."
  keywords={['streetdog bmx builds', 'best bike build', 'bmx customization', 'bike setup guide']}
>
  <div class="container mx-auto px-4 py-16">
    <!-- Header -->
    <div class="mb-12">
      <div class="breadcrumbs text-sm mb-4">
        <ul>
          <li><a href="/">Home</a></li>
          <li>Bike Builds</li>
        </ul>
      </div>
      
      <h1 class="text-5xl font-bold mb-4">
        Bike <span class="text-primary">Builds</span> Guide
      </h1>
      <p class="text-xl opacity-80 mb-6">
        Customize every aspect of your bike - Build your dream BMX machine
      </p>
      
      <div class="alert alert-info">
        <Wrench class="h-6 w-6" />
        <div>
          <h3 class="font-bold">Deep Customization</h3>
          <div class="text-sm">In Street Dog BMX, you can customize nearly every aspect of your bike, right down to the spokes and chain color. Each component affects handling and aesthetics.</div>
        </div>
      </div>
    </div>
    
    <!-- Featured Builds -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Featured Builds</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {builds.map((build) => (
          <BuildCard build={build} />
        ))}
      </div>
    </section>
    
    <!-- Customization Components -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Customization Components</h2>
      
      <div class="space-y-6">
        <!-- Frame -->
        <div class="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            <div class="flex items-center gap-3">
              <span class="badge badge-primary">Frame</span>
              <span>The foundation of your bike</span>
            </div>
          </div>
          <div class="collapse-content">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 class="font-bold mb-2">Frame Options</h4>
                <ul class="text-sm space-y-1">
                  <li>• <strong>Frame Type:</strong> Street, Park, Flatland styles</li>
                  <li>• <strong>Geometry:</strong> Affects handling characteristics</li>
                  <li>• <strong>Weight:</strong> Light to heavy options</li>
                  <li>• <strong>Material Finish:</strong> Matte, Gloss, Metallic</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold mb-2">Impact on Performance</h4>
                <ul class="text-sm space-y-1">
                  <li>✓ Weight affects speed and handling</li>
                  <li>✓ Geometry changes responsiveness</li>
                  <li>✓ Street frames: versatile all-rounders</li>
                  <li>✓ Park frames: better for transitions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Handlebars -->
        <div class="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            <div class="flex items-center gap-3">
              <span class="badge badge-secondary">Handlebars</span>
              <span>Control and comfort</span>
            </div>
          </div>
          <div class="collapse-content">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 class="font-bold mb-2">Bar Specifications</h4>
                <ul class="text-sm space-y-1">
                  <li>• <strong>Height (Rise):</strong> 7.5" - 10" options</li>
                  <li>• <strong>Width:</strong> Narrow to wide configurations</li>
                  <li>• <strong>Style:</strong> T-bars, 4-piece, 2-piece</li>
                  <li>• <strong>Color/Finish:</strong> Match or contrast</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold mb-2">Choosing Bar Height</h4>
                <ul class="text-sm space-y-1">
                  <li>✓ Low bars (7.5-8"): Speed/aerodynamics</li>
                  <li>✓ Mid bars (8.5-9"): Balanced control</li>
                  <li>✓ High bars (9.5-10"): Air tricks/leverage</li>
                  <li>✓ Personal preference matters most</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Wheels -->
        <div class="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            <div class="flex items-center gap-3">
              <span class="badge badge-accent">Wheels</span>
              <span>Rims, tires, and spokes</span>
            </div>
          </div>
          <div class="collapse-content">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <h4 class="font-bold mb-2">Rims</h4>
                <ul class="text-sm space-y-1">
                  <li>• Rim type & spoke patterns</li>
                  <li>• Full color customization</li>
                  <li>• 20" standard size</li>
                  <li>• Width variations</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold mb-2">Tires</h4>
                <ul class="text-sm space-y-1">
                  <li>• Tread patterns (street, park, all-terrain)</li>
                  <li>• Width: 2.0" - 2.5"</li>
                  <li>• Colored sidewalls available</li>
                  <li>• Affects grip and speed</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold mb-2">Spokes</h4>
                <ul class="text-sm space-y-1">
                  <li>• Individual spoke colors!</li>
                  <li>• Cross-lacing patterns</li>
                  <li>• Spoke count options</li>
                  <li>• Unique visual customization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Drivetrain -->
        <div class="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            <div class="flex items-center gap-3">
              <span class="badge badge-warning">Drivetrain</span>
              <span>Cranks, chain, and gearing</span>
            </div>
          </div>
          <div class="collapse-content">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <h4 class="font-bold mb-2">Cranks</h4>
                <ul class="text-sm space-y-1">
                  <li>• Length: 170mm-175mm</li>
                  <li>• Style: 2-piece, 3-piece</li>
                  <li>• Sprocket size affects gearing</li>
                  <li>• Color coordination</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold mb-2">Chain</h4>
                <ul class="text-sm space-y-1">
                  <li>• <strong>Full color range!</strong></li>
                  <li>• Unique feature of the game</li>
                  <li>• Standard or half-link</li>
                  <li>• Match to frame or contrast</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold mb-2">Gear Ratios</h4>
                <ul class="text-sm space-y-1">
                  <li>• 25/9: Quick acceleration</li>
                  <li>• 28/9: Balanced</li>
                  <li>• 30/9+: Top speed focus</li>
                  <li>• Match to playstyle</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Pedals -->
        <div class="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            <div class="flex items-center gap-3">
              <span class="badge badge-info">Pedals</span>
              <span>Grip and control</span>
            </div>
          </div>
          <div class="collapse-content">
            <div class="mt-4">
              <ul class="text-sm space-y-2">
                <li>• <strong>Pedal Type:</strong> Various platform styles and sizes</li>
                <li>• <strong>Pin Configuration:</strong> Affects grip level</li>
                <li>• <strong>Color Options:</strong> Full customization available</li>
                <li>• <strong>Material:</strong> Plastic or metal appearance</li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Seat & Post -->
        <div class="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            <div class="flex items-center gap-3">
              <span class="badge badge-success">Seat & Post</span>
              <span>Comfort and style</span>
            </div>
          </div>
          <div class="collapse-content">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 class="font-bold mb-2">Seat Options</h4>
                <ul class="text-sm space-y-1">
                  <li>• Slim, pivotal, or combo styles</li>
                  <li>• Full color range</li>
                  <li>• Different padding levels</li>
                  <li>• Visual appeal priority</li>
                </ul>
              </div>
              <div>
                <h4 class="font-bold mb-2">Seat Post</h4>
                <ul class="text-sm space-y-1">
                  <li>• Adjustable height settings</li>
                  <li>• Color coordination options</li>
                  <li>• Integrated or separate clamp</li>
                  <li>• Aesthetic choice mainly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Pegs -->
        <div class="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title text-xl font-medium">
            <div class="flex items-center gap-3">
              <span class="badge badge-error">Pegs</span>
              <span>Grinding essentials</span>
            </div>
          </div>
          <div class="collapse-content">
            <div class="mt-4">
              <h4 class="font-bold mb-3">Peg Configuration</h4>
              <ul class="text-sm space-y-2">
                <li>• <strong>Setup Options:</strong> None, Front only, Back only, Full (4 pegs)</li>
                <li>• <strong>Length:</strong> Short (4") to Long (4.5"+)</li>
                <li>• <strong>Color:</strong> Match frame or create contrast</li>
                <li>• <strong>Material:</strong> Plastic or steel appearance</li>
                <li>• <strong>Impact:</strong> More pegs = more grind options but slightly heavier</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Color Schemes -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
        <Palette class="h-8 w-8 text-primary" />
        Popular Color Schemes
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div class="card bg-gradient-to-br from-base-300 to-base-200">
          <div class="card-body">
            <h3 class="card-title text-sm">Monochrome</h3>
            <p class="text-xs opacity-80">All components in shades of one color</p>
            <div class="badge badge-sm badge-outline mt-2">Sleek & Professional</div>
          </div>
        </div>
        
        <div class="card bg-gradient-to-br from-primary/20 to-secondary/20">
          <div class="card-body">
            <h3 class="card-title text-sm">Contrast</h3>
            <p class="text-xs opacity-80">Frame and components in opposing colors</p>
            <div class="badge badge-sm badge-primary mt-2">Bold & Visible</div>
          </div>
        </div>
        
        <div class="card bg-gradient-to-br from-accent/20 to-info/20">
          <div class="card-body">
            <h3 class="card-title text-sm">Gradient</h3>
            <p class="text-xs opacity-80">Colors flow from front to back</p>
            <div class="badge badge-sm badge-accent mt-2">Unique & Artistic</div>
          </div>
        </div>
        
        <div class="card bg-gradient-to-br from-neutral to-base-300">
          <div class="card-body">
            <h3 class="card-title text-sm">Classic</h3>
            <p class="text-xs opacity-80">Black frame, chrome components</p>
            <div class="badge badge-sm badge-neutral mt-2">Timeless</div>
          </div>
        </div>
        
        <div class="card bg-gradient-to-br from-warning/20 via-error/20 to-success/20">
          <div class="card-body">
            <h3 class="card-title text-sm">Wild</h3>
            <p class="text-xs opacity-80">Maximum color variety</p>
            <div class="badge badge-sm badge-warning mt-2">Expressive & Fun</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Build Tips -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
        <Lightbulb class="h-8 w-8 text-warning" />
        Build Tips & Tricks
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {buildTips.map((tip) => (
          <div class="alert alert-info">
            <Star class="h-5 w-5" />
            <span class="text-sm">{tip}</span>
          </div>
        ))}
      </div>
    </section>
    
    <!-- Build Sharing -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-6">Community Build Sharing</h2>
      
      <div class="card bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
        <div class="card-body text-center">
          <Wrench class="h-16 w-16 mx-auto mb-4 text-primary" />
          <h3 class="text-2xl font-bold mb-4">Coming Soon!</h3>
          <p class="opacity-80 mb-6">
            Share your custom bike builds with the community. Inspire others and discover unique configurations from players around the world.
          </p>
          <div class="flex gap-4 justify-center">
            <a href="/official/" class="btn btn-primary">Join Discord</a>
            <a href="/characters/" class="btn btn-outline">Customize Rider</a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Pro Tips -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-6">Pro Building Tips</h2>
      
      <div class="bg-base-200 rounded-2xl p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 class="font-bold text-xl mb-4 text-primary">Performance Optimization</h3>
            <ul class="space-y-3 text-sm">
              <li>✓ Test builds on different maps before committing</li>
              <li>✓ Create separate builds for challenges vs free play</li>
              <li>✓ Lighter builds = more responsive (air tricks)</li>
              <li>✓ Heavier builds = more stable (grinds)</li>
              <li>✓ Gear ratio impacts playstyle significantly</li>
              <li>✓ Save multiple configurations</li>
            </ul>
          </div>
          
          <div>
            <h3 class="font-bold text-xl mb-4 text-secondary">Aesthetic Tips</h3>
            <ul class="space-y-3 text-sm">
              <li>✓ Color customization is purely visual</li>
              <li>✓ Chain color is a unique feature - use it!</li>
              <li>✓ Match bike to rider for cohesive look</li>
              <li>✓ Screenshot your favorite setups</li>
              <li>✓ Experiment with unconventional colors</li>
              <li>✓ Small details (spokes, chain) make big impact</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Related -->
    <section>
      <h2 class="text-3xl font-bold mb-6">Related Guides</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="/tier-list/" class="card bg-base-200 hover:bg-base-300 card-hover">
          <div class="card-body">
            <h3 class="card-title text-primary">Build Tier List</h3>
            <p class="text-sm">See which builds rank highest</p>
          </div>
        </a>
        
        <a href="/characters/" class="card bg-base-200 hover:bg-base-300 card-hover">
          <div class="card-body">
            <h3 class="card-title text-secondary">Character Customization</h3>
            <p class="text-sm">Match your rider to your bike</p>
          </div>
        </a>
        
        <a href="/guides/beginner-guide/" class="card bg-base-200 hover:bg-base-300 card-hover">
          <div class="card-body">
            <h3 class="card-title text-accent">Beginner's Guide</h3>
            <p class="text-sm">Learn how builds affect gameplay</p>
          </div>
        </a>
      </div>
    </section>
  </div>
</Layout>
```

### Step 4.9: Create `src/pages/codes.astro`

```astro
---
import Layout from '../components/Layout.astro';
import CodesList from '../components/CodesList.astro';
import { Gift, AlertCircle, ExternalLink, Clock } from 'lucide-astro';
import codesData from '../data/codes.json';

const { codes, placeholder } = codesData;
---

<Layout 
  title="Promo Codes"
  description="Active promo codes for Street Dog BMX - Unlock free items, cosmetics, and special content with promotional codes."
  keywords={['streetdog bmx codes', 'promo codes', 'free items', 'redeem codes', 'streetdog bmx cheats']}
>
  <div class="container mx-auto px-4 py-16">
    <!-- Header -->
    <div class="mb-12">
      <div class="breadcrumbs text-sm mb-4">
        <ul>
          <li><a href="/">Home</a></li>
          <li>Promo Codes</li>
        </ul>
      </div>
      
      <h1 class="text-5xl font-bold mb-4">
        Promo <span class="text-primary">Codes</span>
      </h1>
      <p class="text-xl opacity-80">
        Free unlockables, cosmetics, and special content through promotional codes
      </p>
    </div>
    
    <!-- Status Alert -->
    <div class="alert alert-warning mb-8">
      <AlertCircle class="h-6 w-6" />
      <div>
        <h3 class="font-bold">Current Status: {codes.status}</h3>
        <div class="text-sm">Last checked: {codes.lastChecked}</div>
      </div>
    </div>
    
    <!-- Active Codes Section -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
        <Gift class="h-8 w-8 text-primary" />
        Active Codes
      </h2>
      
      {codes.activeCodes.length === 0 ? (
        <div class="card bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
          <div class="card-body text-center py-12">
            <Gift class="h-20 w-20 mx-auto mb-6 text-primary opacity-50" />
            <h3 class="text-2xl font-bold mb-4">{placeholder.message}</h3>
            <p class="opacity-80 mb-6">{placeholder.checkBack}</p>
            
            <div class="max-w-2xl mx-auto">
              <h4 class="font-bold mb-4">Codes are typically released during:</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                {placeholder.occasions.map((occasion) => (
                  <div class="badge badge-lg badge-outline">{occasion}</div>
                ))}
              </div>
            </div>
            
            <div class="mt-8">
              <a href="/official/" class="btn btn-primary gap-2">
                <ExternalLink class="h-4 w-4" />
                Follow Official Channels
              </a>
            </div>
          </div>
        </div>
      ) : (
        <CodesList codes={codes.activeCodes} />
      )}
    </section>
    
    <!-- How to Redeem -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-6">How to Redeem Codes</h2>
      
      <div class="card bg-base-200">
        <div class="card-body">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 class="font-bold text-lg mb-4 text-primary">Redemption Steps</h3>
              <ol class="space-y-3 text-sm">
                {codes.howToRedeem.map((step, index) => (
                  <li class="flex gap-3">
                    <span class="badge badge-primary">{index + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            
            <div>
              <h3 class="font-bold text-lg mb-4 text-secondary">Important Notes</h3>
              <ul class="space-y-2 text-sm">
                <li class="flex gap-2">
                  <AlertCircle class="h-4 w-4 text-warning flex-shrink-0 mt-0.5" />
                  <span>Codes are <strong>case-sensitive</strong> - enter exactly as shown</span>
                </li>
                <li class="flex gap-2">
                  <Clock class="h-4 w-4 text-warning flex-shrink-0 mt-0.5" />
                  <span>Many codes have <strong>expiration dates</strong> - redeem quickly</span>
                </li>
                <li class="flex gap-2">
                  <Gift class="h-4 w-4 text-warning flex-shrink-0 mt-0.5" />
                  <span>Codes are typically <strong>one-time use</strong> per account</span>
                </li>
                <li class="flex gap-2">
                  <ExternalLink class="h-4 w-4 text-warning flex-shrink-0 mt-0.5" />
                  <span>Some codes may be <strong>platform-specific</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Where to Find Codes -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-6">Where to Find Codes</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {codes.whereToFindCodes.map((source) => (
          <div class="card bg-base-200 hover:bg-base-300 transition-colors">
            <div class="card-body">
              <h3 class="card-title text-primary">{source.source}</h3>
              {source.platforms && (
                <div class="flex flex-wrap gap-2 mb-3">
                  {source.platforms.map((platform) => (
                    <div class="badge badge-sm badge-outline">{platform}</div>
                  ))}
                </div>
              )}
              <p class="text-sm opacity-80">{source.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div class="text-center mt-8">
        <a href="/official/" class="btn btn-primary btn-lg gap-2">
          <ExternalLink class="h-5 w-5" />
          Visit Official Links
        </a>
      </div>
    </section>
    
    <!-- Future Code Types -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-6">What to Expect from Codes</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {codes.futureCodeTypes.map((type) => (
          <div class="card bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
            <div class="card-body">
              <h3 class="card-title text-secondary">{type.type}</h3>
              <p class="text-sm opacity-80">{type.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    
    <!-- Tips -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-6">Code Hunting Tips</h2>
      
      <div class="bg-base-200 rounded-2xl p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          {codes.tips.map((tip) => (
            <div class="flex gap-3">
              <Gift class="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <p class="text-sm">{tip}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <!-- Expired Codes -->
    {codes.expiredCodes && codes.expiredCodes.length > 0 && (
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6">Expired Codes (Archive)</h2>
        <p class="opacity-70 mb-6">These codes are no longer active but kept for reference.</p>
        
        <CodesList codes={codes.expiredCodes} />
      </section>
    )}
    
    <!-- Update Schedule -->
    <section class="bg-gradient-to-br from-accent/10 to-info/10 rounded-3xl p-8">
      <div class="text-center">
        <Clock class="h-12 w-12 mx-auto mb-4 text-accent" />
        <h2 class="text-2xl font-bold mb-4">Stay Updated</h2>
        <p class="opacity-80 max-w-2xl mx-auto mb-6">
          This page is regularly updated with new codes as they become available. 
          Bookmark this page and check back frequently, especially during special events and game updates!
        </p>
        
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="/official/" class="btn btn-accent gap-2">
            <ExternalLink class="h-4 w-4" />
            Official Links
          </a>
          <button class="btn btn-outline" onclick="location.reload()">
            <Clock class="h-4 w-4" />
            Refresh Page
          </button>
        </div>
        
        <p class="text-xs opacity-60 mt-6">
          Last updated: {codes.lastChecked}
        </p>
      </div>
    </section>
  </div>
</Layout>
```

### Step 4.10: Create `src/pages/maps.astro`

```astro
---
import Layout from '../components/Layout.astro';
import MapCard from '../components/MapCard.astro';
import { Map, MapPin, Star, Award } from 'lucide-astro';
import mapsData from '../data/maps.json';

const { maps, mapTypes } = mapsData;
---

<Layout 
  title="Maps Guide"
  description="Complete maps guide for Street Dog BMX - Explore 6 handcrafted maps with hidden spots, challenges, and detailed location breakdowns."
  keywords={['streetdog bmx maps', 'bmx maps', 'hidden spots', 'map guide', 'locations']}
>
  <div class="container mx-auto px-4 py-16">
    <!-- Header -->
    <div class="mb-12">
      <div class="breadcrumbs text-sm mb-4">
        <ul>
          <li><a href="/">Home</a></li>
          <li>Maps</li>
        </ul>
      </div>
      
      <h1 class="text-5xl font-bold mb-4">
        Maps <span class="text-primary">Guide</span>
      </h1>
      <p class="text-xl opacity-80 mb-6">
        6 massive handcrafted maps designed for exploration, creativity, and technical mastery
      </p>
      
      <div class="stats stats-vertical md:stats-horizontal shadow bg-base-200">
        <div class="stat">
          <div class="stat-figure text-primary">
            <Map class="h-8 w-8" />
          </div>
          <div class="stat-title">Total Maps</div>
          <div class="stat-value text-primary">6</div>
          <div class="stat-desc">Handcrafted environments</div>
        </div>
        
        <div class="stat">
          <div class="stat-figure text-secondary">
            <MapPin class="h-8 w-8" />
          </div>
          <div class="stat-title">Hidden Spots</div>
          <div class="stat-value text-secondary">{maps.reduce((sum, m) => sum + m.hiddenSpots, 0)}+</div>
          <div class="stat-desc">Across all maps</div>
        </div>
        
        <div class="stat">
          <div class="stat-figure text-accent">
            <Award class="h-8 w-8" />
          </div>
          <div class="stat-title">Total Challenges</div>
          <div class="stat-value text-accent">{maps.reduce((sum, m) => sum + m.challengeCount, 0)}+</div>
          <div class="stat-desc">270+ objectives</div>
        </div>
      </div>
    </div>
    
    <!-- All Maps -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">All Maps</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {maps.map((map) => (
          <MapCard map={map} />
        ))}
      </div>
    </section>
    
    <!-- Detailed Map Guides -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Detailed Map Information</h2>
      
      <div class="space-y-8">
        {maps.map((map) => (
          <div class="card bg-base-200">
            <div class="card-body">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h3 class="text-2xl font-bold mb-2">{map.name}</h3>
                  <div class="flex flex-wrap gap-2">
                    <div class="badge badge-lg badge-primary">{map.difficulty}</div>
                    <div class="badge badge-lg badge-outline">{map.size}</div>
                    <div class="badge badge-lg badge-outline">{map.focus}</div>
                  </div>
                </div>
              </div>
              
              <p class="opacity-80 mb-6">{map.description}</p>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 class="font-bold text-primary mb-3">Key Features</h4>
                  <ul class="space-y-1 text-sm">
                    {map.features.map((feature) => (
                      <li class="flex gap-2">
                        <Star class="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-bold text-secondary mb-3">Best For</h4>
                  <ul class="space-y-1 text-sm">
                    {map.bestFor.map((item) => (
                      <li class="flex gap-2">
                        <Award class="h-4 w-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {map.tips && (
                <div class="bg-base-300 rounded-lg p-4">
                  <h4 class="font-bold text-accent mb-3">Tips & Tricks</h4>
                  <ul class="space-y-2 text-sm">
                    {map.tips.map((tip) => (
                      <li class="flex gap-2">
                        <span class="text-accent">▸</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {map.keyLocations && (
                <div class="mt-4">
                  <h4 class="font-bold mb-3">Key Locations</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {map.keyLocations.map((location) => (
                      <div class="bg-base-300 rounded p-3 text-sm">
                        <MapPin class="h-4 w-4 inline text-primary mr-2" />
                        {location}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div class="stats stats-vertical md:stats-horizontal shadow mt-6">
                <div class="stat bg-base-300">
                  <div class="stat-title text-xs">Hidden Spots</div>
                  <div class="stat-value text-2xl text-primary">{map.hiddenSpots}</div>
                </div>
                <div class="stat bg-base-300">
                  <div class="stat-title text-xs">Challenges</div>
                  <div class="stat-value text-2xl text-secondary">{map.challengeCount}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    
    <!-- Map Categories -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Maps by Type</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card bg-gradient-to-br from-primary/20 to-primary/5">
          <div class="card-body">
            <h3 class="card-title text-primary">Street Maps</h3>
            <p class="text-sm opacity-80 mb-3">Authentic urban BMX environments</p>
            <div class="flex flex-wrap gap-2">
              {mapTypes.street.map((id) => {
                const map = maps.find(m => m.id === id);
                return map && <div class="badge badge-primary">{map.name}</div>;
              })}
            </div>
          </div>
        </div>
        
        <div class="card bg-gradient-to-br from-secondary/20 to-secondary/5">
          <div class="card-body">
            <h3 class="card-title text-secondary">Park Maps</h3>
            <p class="text-sm opacity-80 mb-3">Skate park and transition focused</p>
            <div class="flex flex-wrap gap-2">
              {mapTypes.park.map((id) => {
                const map = maps.find(m => m.id === id);
                return map && <div class="badge badge-secondary">{map.name}</div>;
              })}
            </div>
          </div>
        </div>
        
        <div class="card bg-gradient-to-br from-accent/20 to-accent/5">
          <div class="card-body">
            <h3 class="card-title text-accent">Vertical Maps</h3>
            <p class="text-sm opacity-80 mb-3">Height variation and big gaps</p>
            <div class="flex flex-wrap gap-2">
              {mapTypes.vertical.map((id) => {
                const map = maps.find(m => m.id === id);
                return map && <div class="badge badge-accent">{map.name}</div>;
              })}
            </div>
          </div>
        </div>
        
        <div class="card bg-gradient-to-br from-error/20 to-error/5">
          <div class="card-body">
            <h3 class="card-title text-error">Expert Maps</h3>
            <p class="text-sm opacity-80 mb-3">High difficulty technical challenges</p>
            <div class="flex flex-wrap gap-2">
              {mapTypes.expert.map((id) => {
                const map = maps.find(m => m.id === id);
                return map && <div class="badge badge-error">{map.name}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Exploration Tips -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Map Exploration Guide</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card bg-base-200">
          <div class="card-body">
            <h3 class="card-title text-primary">First Visit Strategy</h3>
            <ol class="text-sm space-y-2">
              <li>1. Survey from high points</li>
              <li>2. Follow natural lines</li>
              <li>3. Mark interesting spots</li>
              <li>4. Complete easy challenges</li>
              <li>5. Discover secrets</li>
            </ol>
          </div>
        </div>
        
        <div class="card bg-base-200">
          <div class="card-body">
            <h3 class="card-title text-secondary">Hidden Spot Hunting</h3>
            <ul class="text-sm space-y-2">
              <li>✓ Check behind buildings</li>
              <li>✓ Look for unusual ramps</li>
              <li>✓ Follow perfect lines</li>
              <li>✓ Try impossible gaps</li>
              <li>✓ Explore map edges</li>
            </ul>
          </div>
        </div>
        
        <div class="card bg-base-200">
          <div class="card-body">
            <h3 class="card-title text-accent">Challenge Optimization</h3>
            <ul class="text-sm space-y-2">
              <li>✓ Group by map area</li>
              <li>✓ Complete similar together</li>
              <li>✓ Plan efficient routes</li>
              <li>✓ Return as skills improve</li>
              <li>✓ Track completion %</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Map Records -->
    <section class="mb-16">
      <div class="card bg-gradient-to-br from-warning/10 to-warning/5 border border-warning/20">
        <div class="card-body text-center">
          <Award class="h-16 w-16 mx-auto mb-4 text-warning" />
          <h2 class="text-2xl font-bold mb-4">Map-Specific Records</h2>
          <p class="opacity-80 mb-6">
            Leaderboard integration coming soon! Track your best scores and compete with players worldwide on each map.
          </p>
          <a href="/official/" class="btn btn-warning">Join Community</a>
        </div>
      </div>
    </section>
    
    <!-- Related -->
    <section>
      <h2 class="text-3xl font-bold mb-6">Continue Learning</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="/guides/advanced-techniques/" class="card bg-base-200 hover:bg-base-300 card-hover">
          <div class="card-body">
            <h3 class="card-title text-primary">Advanced Techniques</h3>
            <p class="text-sm">Master map-specific strategies</p>
          </div>
        </a>
        
        <a href="/tier-list/" class="card bg-base-200 hover:bg-base-300 card-hover">
          <div class="card-body">
            <h3 class="card-title text-secondary">Map Rankings</h3>
            <p class="text-sm">See which maps offer the most</p>
          </div>
        </a>
        
        <a href="/builds/" class="card bg-base-200 hover:bg-base-300 card-hover">
          <div class="card-body">
            <h3 class="card-title text-accent">Map-Specific Builds</h3>
            <p class="text-sm">Optimize your bike per map</p>
          </div>
        </a>
      </div>
    </section>
  </div>
</Layout>
```
# TODO.md - Continued (Part 6)

***

## PHASE 4: Pages Implementation (Final)

### Step 4.11: Create `src/pages/release.astro`

```astro
---
import Layout from '../components/Layout.astro';
import { Calendar, Clock, Download, CheckCircle, AlertCircle, ExternalLink } from 'lucide-astro';
---

<Layout 
  title="Release Information"
  description="Street Dog BMX release date, platforms, early access info, and launch details - Everything you need to know about the game's release."
  keywords={['streetdog bmx release date', 'when is streetdog bmx coming out', 'streetdog bmx platforms', 'early access']}
>
  <div class="container mx-auto px-4 py-16">
    <!-- Header -->
    <div class="mb-12">
      <div class="breadcrumbs text-sm mb-4">
        <ul>
          <li><a href="/">Home</a></li>
          <li>Release Information</li>
        </ul>
      </div>
      
      <h1 class="text-5xl font-bold mb-4">
        Release <span class="text-primary">Information</span>
      </h1>
      <p class="text-xl opacity-80">
        Everything you need to know about Street Dog BMX's release
      </p>
    </div>
    
    <!-- Current Status -->
    <section class="mb-16">
      <div class="card bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary">
        <div class="card-body text-center">
          <div class="badge badge-success badge-lg mb-4">NOW AVAILABLE</div>
          <h2 class="text-4xl font-bold mb-4">Street Dog BMX is OUT NOW!</h2>
          <p class="text-xl opacity-80 mb-6">
            The game has officially launched and is available on all platforms
          </p>
          
          <div class="flex flex-wrap gap-4 justify-center">
            <a href="#platforms" class="btn btn-primary btn-lg gap-2">
              <Download class="h-5 w-5" />
              View Platforms
            </a>
            <a href="/official/" class="btn btn-outline btn-lg gap-2">
              <ExternalLink class="h-5 w-5" />
              Official Links
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Release Timeline -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
        <Calendar class="h-8 w-8 text-primary" />
        Release Timeline
      </h2>
      
      <div class="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
        <div class="timeline-start">
          <div class="badge badge-success">COMPLETED</div>
        </div>
        <div class="timeline-middle">
          <CheckCircle class="h-5 w-5 text-success" />
        </div>
        <div class="timeline-end timeline-box bg-base-200">
          <div class="font-bold">Early Development</div>
          <div class="text-sm opacity-70">2021-2022</div>
          <p class="text-sm mt-2">Project conception and initial prototyping by BMX enthusiasts</p>
        </div>
        <hr class="bg-success" />
        
        <div class="timeline-start">
          <div class="badge badge-success">COMPLETED</div>
        </div>
        <div class="timeline-middle">
          <CheckCircle class="h-5 w-5 text-success" />
        </div>
        <div class="timeline-end timeline-box bg-base-200">
          <div class="font-bold">Alpha Testing</div>
          <div class="text-sm opacity-70">2023</div>
          <p class="text-sm mt-2">Closed alpha with core community feedback</p>
        </div>
        <hr class="bg-success" />
        
        <div class="timeline-start">
          <div class="badge badge-success">COMPLETED</div>
        </div>
        <div class="timeline-middle">
          <CheckCircle class="h-5 w-5 text-success" />
        </div>
        <div class="timeline-end timeline-box bg-base-200">
          <div class="font-bold">Beta Release</div>
          <div class="text-sm opacity-70">Early 2024</div>
          <p class="text-sm mt-2">Open beta with expanded features and map testing</p>
        </div>
        <hr class="bg-success" />
        
        <div class="timeline-start">
          <div class="badge badge-success">COMPLETED</div>
        </div>
        <div class="timeline-middle">
          <CheckCircle class="h-5 w-5 text-success" />
        </div>
        <div class="timeline-end timeline-box bg-primary text-primary-content">
          <div class="font-bold text-lg">Official Launch</div>
          <div class="text-sm">2024</div>
          <p class="text-sm mt-2">Full release across all platforms with complete feature set</p>
        </div>
        <hr class="bg-primary" />
        
        <div class="timeline-start">
          <div class="badge badge-info">ONGOING</div>
        </div>
        <div class="timeline-middle">
          <Clock class="h-5 w-5 text-info" />
        </div>
        <div class="timeline-end timeline-box bg-base-200">
          <div class="font-bold">Post-Launch Support</div>
          <div class="text-sm opacity-70">2024-Present</div>
          <p class="text-sm mt-2">Regular updates, new content, community events, and ongoing improvements</p>
        </div>
      </div>
    </section>
    
    <!-- Platforms -->
    <section id="platforms" class="mb-16">
      <h2 class="text-3xl font-bold mb-8 flex items-center gap-3">
        <Download class="h-8 w-8 text-secondary" />
        Available Platforms
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- PC/Steam -->
        <div class="card bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30">
          <div class="card-body">
            <div class="badge badge-success mb-3">AVAILABLE</div>
            <h3 class="card-title text-primary">PC (Steam)</h3>
            <p class="text-sm opacity-80 mb-4">Windows, Mac, Linux</p>
            <ul class="text-xs space-y-1 mb-4">
              <li>✓ Full feature support</li>
              <li>✓ Steam Workshop integration</li>
              <li>✓ Controller & keyboard support</li>
              <li>✓ Steam Achievements</li>
            </ul>
            <a href="/official/" class="btn btn-primary btn-sm mt-auto">Get on Steam</a>
          </div>
        </div>
        
        <!-- PlayStation -->
        <div class="card bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/30">
          <div class="card-body">
            <div class="badge badge-success mb-3">AVAILABLE</div>
            <h3 class="card-title text-secondary">PlayStation</h3>
            <p class="text-sm opacity-80 mb-4">PS4 & PS5</p>
            <ul class="text-xs space-y-1 mb-4">
              <li>✓ DualSense features (PS5)</li>
              <li>✓ PlayStation Trophies</li>
              <li>✓ Cross-gen compatible</li>
              <li>✓ Performance mode</li>
            </ul>
            <a href="/official/" class="btn btn-secondary btn-sm mt-auto">PlayStation Store</a>
          </div>
        </div>
        
        <!-- Xbox -->
        <div class="card bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30">
          <div class="card-body">
            <div class="badge badge-success mb-3">AVAILABLE</div>
            <h3 class="card-title text-accent">Xbox</h3>
            <p class="text-sm opacity-80 mb-4">Xbox One & Series X|S</p>
            <ul class="text-xs space-y-1 mb-4">
              <li>✓ Xbox Game Pass</li>
              <li>✓ Xbox Achievements</li>
              <li>✓ Smart Delivery</li>
              <li>✓ Quick Resume</li>
            </ul>
            <a href="/official/" class="btn btn-accent btn-sm mt-auto">Xbox Store</a>
          </div>
        </div>
        
        <!-- Nintendo Switch -->
        <div class="card bg-gradient-to-br from-error/20 to-error/5 border border-error/30">
          <div class="card-body">
            <div class="badge badge-success mb-3">AVAILABLE</div>
            <h3 class="card-title text-error">Nintendo Switch</h3>
            <p class="text-sm opacity-80 mb-4">Handheld & Docked</p>
            <ul class="text-xs space-y-1 mb-4">
              <li>✓ Portable play optimized</li>
              <li>✓ HD Rumble support</li>
              <li>✓ 30/60 FPS modes</li>
              <li>✓ Touch controls menu</li>
            </ul>
            <a href="/official/" class="btn btn-error btn-sm mt-auto">eShop</a>
          </div>
        </div>
      </div>
      
      <div class="alert alert-info mt-6">
        <AlertCircle class="h-6 w-6" />
        <div>
          <h3 class="font-bold">Cross-Platform Play</h3>
          <div class="text-sm">Full cross-platform multiplayer and leaderboard support across all platforms. Play with friends regardless of their platform!</div>
        </div>
      </div>
    </section>
    
    <!-- System Requirements -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">PC System Requirements</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Minimum -->
        <div class="card bg-base-200">
          <div class="card-body">
            <h3 class="card-title text-warning mb-4">Minimum Requirements</h3>
            <div class="space-y-3 text-sm">
              <div>
                <strong class="text-primary">OS:</strong> Windows 10 (64-bit)
              </div>
              <div>
                <strong class="text-primary">Processor:</strong> Intel Core i5-4460 or AMD equivalent
              </div>
              <div>
                <strong class="text-primary">Memory:</strong> 8 GB RAM
              </div>
              <div>
                <strong class="text-primary">Graphics:</strong> NVIDIA GTX 760 or AMD R9 280
              </div>
              <div>
                <strong class="text-primary">DirectX:</strong> Version 11
              </div>
              <div>
                <strong class="text-primary">Storage:</strong> 15 GB available space
              </div>
              <div>
                <strong class="text-primary">Additional:</strong> Controller recommended
              </div>
            </div>
            <div class="badge badge-warning mt-4">30 FPS @ 1080p Low</div>
          </div>
        </div>
        
        <!-- Recommended -->
        <div class="card bg-gradient-to-br from-success/20 to-success/5 border border-success/30">
          <div class="card-body">
            <h3 class="card-title text-success mb-4">Recommended Requirements</h3>
            <div class="space-y-3 text-sm">
              <div>
                <strong class="text-primary">OS:</strong> Windows 10/11 (64-bit)
              </div>
              <div>
                <strong class="text-primary">Processor:</strong> Intel Core i7-7700K or AMD Ryzen 5 2600
              </div>
              <div>
                <strong class="text-primary">Memory:</strong> 16 GB RAM
              </div>
              <div>
                <strong class="text-primary">Graphics:</strong> NVIDIA GTX 1060 6GB or AMD RX 580
              </div>
              <div>
                <strong class="text-primary">DirectX:</strong> Version 12
              </div>
              <div>
                <strong class="text-primary">Storage:</strong> 15 GB SSD
              </div>
              <div>
                <strong class="text-primary">Additional:</strong> Xbox/PlayStation controller
              </div>
            </div>
            <div class="badge badge-success mt-4">60+ FPS @ 1080p High</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Launch Features -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Launch Features</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="card bg-base-200">
          <div class="card-body">
            <CheckCircle class="h-6 w-6 text-success mb-2" />
            <h3 class="font-bold">6 Massive Maps</h3>
            <p class="text-sm opacity-80">Handcrafted environments with unique challenges</p>
          </div>
        </div>
        
        <div class="card bg-base-200">
          <div class="card-body">
            <CheckCircle class="h-6 w-6 text-success mb-2" />
            <h3 class="font-bold">270+ Challenges</h3>
            <p class="text-sm opacity-80">Extensive progression system</p>
          </div>
        </div>
        
        <div class="card bg-base-200">
          <div class="card-body">
            <CheckCircle class="h-6 w-6 text-success mb-2" />
            <h3 class="font-bold">Deep Customization</h3>
            <p class="text-sm opacity-80">Rider and bike personalization</p>
          </div>
        </div>
        
        <div class="card bg-base-200">
          <div class="card-body">
            <CheckCircle class="h-6 w-6 text-success mb-2" />
            <h3 class="font-bold">Replay Editor</h3>
            <p class="text-sm opacity-80">Create and share epic clips</p>
          </div>
        </div>
        
        <div class="card bg-base-200">
          <div class="card-body">
            <CheckCircle class="h-6 w-6 text-success mb-2" />
            <h3 class="font-bold">Global Leaderboards</h3>
            <p class="text-sm opacity-80">Compete worldwide</p>
          </div>
        </div>
        
        <div class="card bg-base-200">
          <div class="card-body">
            <CheckCircle class="h-6 w-6 text-success mb-2" />
            <h3 class="font-bold">Cross-Platform</h3>
            <p class="text-sm opacity-80">Play with anyone, anywhere</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Post-Launch Roadmap -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Post-Launch Content</h2>
      
      <div class="alert alert-info mb-6">
        <Clock class="h-6 w-6" />
        <div>
          <h3 class="font-bold">Ongoing Development</h3>
          <div class="text-sm">The developers are committed to regular updates, new content drops, and community-requested features.</div>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card bg-base-200">
          <div class="card-body">
            <h3 class="card-title text-primary">Confirmed Updates</h3>
            <ul class="text-sm space-y-2">
              <li>✓ Regular bug fixes and optimizations</li>
              <li>✓ Balance adjustments based on feedback</li>
              <li>✓ Quality of life improvements</li>
              <li>✓ Performance enhancements</li>
              <li>✓ Community event support</li>
            </ul>
          </div>
        </div>
        
        <div class="card bg-base-200">
          <div class="card-body">
            <h3 class="card-title text-secondary">Potential Future Content</h3>
            <ul class="text-sm space-y-2">
              <li>• New maps and locations</li>
              <li>• Additional customization options</li>
              <li>• Expanded challenge system</li>
              <li>• New game modes</li>
              <li>• Community-created content support</li>
            </ul>
            <div class="text-xs opacity-60 mt-3">Subject to change based on development priorities</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Pricing -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Pricing Information</h2>
      
      <div class="card bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
        <div class="card-body text-center">
          <h3 class="text-2xl font-bold mb-4">Standard Edition</h3>
          <div class="text-5xl font-bold text-primary mb-2">$19.99</div>
          <p class="text-sm opacity-70 mb-6">USD / One-time purchase</p>
          
          <div class="max-w-md mx-auto text-left mb-6">
            <h4 class="font-bold mb-3">Includes:</h4>
            <ul class="text-sm space-y-2">
              <li>✓ Full game access</li>
              <li>✓ All 6 maps</li>
              <li>✓ 270+ challenges</li>
              <li>✓ Complete customization system</li>
              <li>✓ Replay editor</li>
              <li>✓ Online leaderboards</li>
              <li>✓ All future updates</li>
            </ul>
          </div>
          
          <div class="alert alert-success">
            <CheckCircle class="h-6 w-6" />
            <div class="text-sm">
              <strong>No microtransactions!</strong> All content is included with the base game.
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- FAQ -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Release FAQ</h2>
      
      <div class="space-y-4">
        <div class="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title font-medium">
            Is the game available now?
          </div>
          <div class="collapse-content">
            <p>Yes! Street Dog BMX is fully released and available on all platforms: PC (Steam), PlayStation 4/5, Xbox One/Series X|S, and Nintendo Switch.</p>
          </div>
        </div>
        
        <div class="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title font-medium">
            Does it support cross-platform play?
          </div>
          <div class="collapse-content">
            <p>Yes, full cross-platform multiplayer and leaderboard support is available across all platforms. You can compete with players regardless of their platform.</p>
          </div>
        </div>
        
        <div class="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title font-medium">
            Are there any microtransactions?
          </div>
          <div class="collapse-content">
            <p>No! Street Dog BMX is a one-time purchase with no microtransactions. All content, including future updates, is included in the base game price.</p>
          </div>
        </div>
        
        <div class="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title font-medium">
            Will there be post-launch content?
          </div>
          <div class="collapse-content">
            <p>Yes, the developers are committed to regular updates including bug fixes, optimizations, and potential new content based on community feedback. All updates are free.</p>
          </div>
        </div>
        
        <div class="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title font-medium">
            Is a controller required?
          </div>
          <div class="collapse-content">
            <p>While the game supports keyboard and mouse, a controller is highly recommended for the best experience. Xbox and PlayStation controllers work perfectly on all platforms.</p>
          </div>
        </div>
        
        <div class="collapse collapse-arrow bg-base-200">
          <input type="checkbox" />
          <div class="collapse-title font-medium">
            Can I play offline?
          </div>
          <div class="collapse-content">
            <p>Yes! The entire game can be played offline. Online connectivity is only required for leaderboards, sharing replays, and checking for updates.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA -->
    <section class="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl p-8">
      <div class="text-center">
        <Download class="h-16 w-16 mx-auto mb-6 text-primary" />
        <h2 class="text-4xl font-bold mb-4">Get Street Dog BMX Today!</h2>
        <p class="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
          Join thousands of players worldwide in the most authentic BMX experience ever created
        </p>
        
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="/official/" class="btn btn-primary btn-lg gap-2">
            <Download class="h-5 w-5" />
            Download Now
          </a>
          <a href="/guides/beginner-guide/" class="btn btn-outline btn-lg">
            Start Learning
          </a>
        </div>
      </div>
    </section>
  </div>
</Layout>
```

### Step 4.12: Create `src/pages/tools.astro`

```astro
---
import Layout from '../components/Layout.astro';
import { Wrench, Calculator, Map, Image, ExternalLink } from 'lucide-astro';
---

<Layout 
  title="Tools & Calculators"
  description="Helpful tools and calculators for Street Dog BMX - Build calculators, score analyzers, map planners, and more community resources."
  keywords={['streetdog bmx tools', 'bmx calculator', 'build planner', 'score calculator']}
>
  <div class="container mx-auto px-4 py-16">
    <!-- Header -->
    <div class="mb-12">
      <div class="breadcrumbs text-sm mb-4">
        <ul>
          <li><a href="/">Home</a></li>
          <li>Tools & Calculators</li>
        </ul>
      </div>
      
      <h1 class="text-5xl font-bold mb-4">
        Tools & <span class="text-primary">Calculators</span>
      </h1>
      <p class="text-xl opacity-80">
        Helpful resources to enhance your Street Dog BMX experience
      </p>
    </div>
    
    <!-- Coming Soon Notice -->
    <div class="alert alert-info mb-12">
      <Wrench class="h-6 w-6" />
      <div>
        <h3 class="font-bold">Tools in Development</h3>
        <div class="text-sm">Community tools and calculators are currently being developed. Check back soon for interactive build planners, score calculators, and more!</div>
      </div>
    </div>
    
    <!-- Planned Tools -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Planned Tools</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Build Calculator -->
        <div class="card bg-base-200 border-2 border-primary/30">
          <div class="card-body">
            <div class="badge badge-warning mb-3">Coming Soon</div>
            <Calculator class="h-10 w-10 text-primary mb-3" />
            <h3 class="card-title">Build Calculator</h3>
            <p class="text-sm opacity-80 mb-4">
              Interactive tool to plan and compare bike builds. Visualize stats and performance characteristics before committing.
            </p>
            <h4 class="font-bold text-xs mb-2">Features:</h4>
            <ul class="text-xs space-y-1">
              <li>• Component selection</li>
              <li>• Stat comparison</li>
              <li>• Weight calculations</li>
              <li>• Build sharing</li>
            </ul>
          </div>
        </div>
        
        <!-- Score Calculator -->
        <div class="card bg-base-200 border-2 border-secondary/30">
          <div class="card-body">
            <div class="badge badge-warning mb-3">Coming Soon</div>
            <Calculator class="h-10 w-10 text-secondary mb-3" />
            <h3 class="card-title">Score Calculator</h3>
            <p class="text-sm opacity-80 mb-4">
              Calculate potential combo scores. Plan your lines and see theoretical point totals before attempting.
            </p>
            <h4 class="font-bold text-xs mb-2">Features:</h4>
            <ul class="text-xs space-y-1">
              <li>• Trick selection</li>
              <li>• Multiplier tracking</li>
              <li>• Bonus calculations</li>
              <li>• Combo optimization</li>
            </ul>
          </div>
        </div>
        
        <!-- Map Planner -->
        <div class="card bg-base-200 border-2 border-accent/30">
          <div class="card-body">
            <div class="badge badge-warning mb-3">Coming Soon</div>
            <Map class="h-10 w-10 text-accent mb-3" />
            <h3 class="card-title">Map Planner</h3>
            <p class="text-sm opacity-80 mb-4">
              Interactive map viewer with route planning. Mark hidden spots, plan lines, and share discoveries.
            </p>
            <h4 class="font-bold text-xs mb-2">Features:</h4>
            <ul class="text-xs space-y-1">
              <li>• Interactive map viewer</li>
              <li>• Route drawing</li>
              <li>• Hidden spot markers</li>
              <li>• Community annotations</li>
            </ul>
          </div>
        </div>
        
        <!-- Replay Analyzer -->
        <div class="card bg-base-200 border-2 border-warning/30">
          <div class="card-body">
            <div class="badge badge-warning mb-3">Coming Soon</div>
            <Image class="h-10 w-10 text-warning mb-3" />
            <h3 class="card-title">Replay Analyzer</h3>
            <p class="text-sm opacity-80 mb-4">
              Upload and analyze your replays. Get detailed breakdowns of tricks, timing, and scoring opportunities.
            </p>
            <h4 class="font-bold text-xs mb-2">Features:</h4>
            <ul class="text-xs space-y-1">
              <li>• Replay upload</li>
              <li>• Frame-by-frame analysis</li>
              <li>• Scoring breakdown</li>
              <li>• Improvement suggestions</li>
            </ul>
          </div>
        </div>
        
        <!-- Challenge Tracker -->
        <div class="card bg-base-200 border-2 border-info/30">
          <div class="card-body">
            <div class="badge badge-warning mb-3">Coming Soon</div>
            <Wrench class="h-10 w-10 text-info mb-3" />
            <h3 class="card-title">Challenge Tracker</h3>
            <p class="text-sm opacity-80 mb-4">
              Track your challenge completion across all maps. Filter by type, difficulty, and completion status.
            </p>
            <h4 class="font-bold text-xs mb-2">Features:</h4>
            <ul class="text-xs space-y-1">
              <li>• Progress tracking</li>
              <li>• Map filtering</li>
              <li>• Difficulty sorting</li>
              <li>• Completion percentage</li>
            </ul>
          </div>
        </div>
        
        <!-- Build Comparison -->
        <div class="card bg-base-200 border-2 border-success/30">
          <div class="card-body">
            <div class="badge badge-warning mb-3">Coming Soon</div>
            <Calculator class="h-10 w-10 text-success mb-3" />
            <h3 class="card-title">Build Comparison</h3>
            <p class="text-sm opacity-80 mb-4">
              Compare multiple bike builds side-by-side. See differences in stats, components, and performance.
            </p>
            <h4 class="font-bold text-xs mb-2">Features:</h4>
            <ul class="text-xs space-y-1">
              <li>• Multi-build comparison</li>
              <li>• Stat visualization</li>
              <li>• Component differences</li>
              <li>• Export comparison</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- External Resources -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">External Resources</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="card bg-base-200">
          <div class="card-body">
            <h3 class="card-title text-primary flex items-center gap-2">
              <ExternalLink class="h-5 w-5" />
              Official Game Resources
            </h3>
            <ul class="text-sm space-y-2 mt-4">
              <li>
                <a href="/official/" class="link link-hover">Official Website & Links</a>
              </li>
              <li>
                <a href="/official/" class="link link-hover">Discord Community</a>
              </li>
              <li>
                <a href="/official/" class="link link-hover">Reddit Community</a>
              </li>
              <li>
                <a href="/official/" class="link link-hover">YouTube Tutorials</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="card bg-base-200">
          <div class="card-body">
            <h3 class="card-title text-secondary flex items-center gap-2">
              <Wrench class="h-5 w-5" />
              Community Tools
            </h3>
            <p class="text-sm opacity-80 mb-4">
              Community-created tools and resources will be featured here once available. Have a tool to share?
            </p>
            <a href="/official/" class="btn btn-sm btn-outline">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Quick References -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Quick Reference Guides</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="/guides/tricks-combos/" class="card bg-base-200 hover:bg-base-300 card-hover">
          <div class="card-body">
            <h3 class="card-title text-sm">Tricks List</h3>
            <p class="text-xs opacity-80">Complete trick database</p>
          </div>
        </a>
        
        <a href="/builds/" class="card bg-base-200 hover:bg-base-300 card-hover">
          <div class="card-body">
            <h3 class="card-title text-sm">Build Templates</h3>
            <p class="text-xs opacity-80">Pre-made configurations</p>
          </div>
        </a>
        
        <a href="/maps/" class="card bg-base-200 hover:bg-base-300 card-hover">
          <div class="card-body">
            <h3 class="card-title text-sm">Map Guides</h3>
            <p class="text-xs opacity-80">Location breakdowns</p>
          </div>
        </a>
        
        <a href="/tier-list/" class="card bg-base-200 hover:bg-base-300 card-hover">
          <div class="card-body">
            <h3 class="card-title text-sm">Tier Lists</h3>
            <p class="text-xs opacity-80">Rankings & meta</p>
          </div>
        </a>
        
        <a href="/guides/advanced-techniques/" class="card bg-base-200 hover:bg-base-300 card-hover">
          <div class="card-body">
            <h3 class="card-title text-sm">Advanced Techniques</h3>
            <p class="text-xs opacity-80">Expert strategies</p>
          </div>
        </a>
        
        <a href="/codes/" class="card bg-base-200 hover:bg-base-300 card-hover">
          <div class="card-body">
            <h3 class="card-title text-sm">Promo Codes</h3>
            <p class="text-xs opacity-80">Active codes list</p>
          </div>
        </a>
      </div>
    </section>
    
    <!-- Contribute -->
    <section class="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8">
      <div class="text-center">
        <Wrench class="h-16 w-16 mx-auto mb-6 text-primary" />
        <h2 class="text-3xl font-bold mb-4">Want to Contribute?</h2>
        <p class="opacity-80 mb-6 max-w-2xl mx-auto">
          Have an idea for a tool or calculator? Created something useful for the community? 
          We'd love to feature it here!
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="/official/" class="btn btn-primary gap-2">
            <ExternalLink class="h-4 w-4" />
            Join Discord
          </a>
          <a href="/official/" class="btn btn-outline">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  </div>
</Layout>
```

### Step 4.13: Create `src/pages/official.astro`

```astro
---
import Layout from '../components/Layout.astro';
import { ExternalLink, MessageCircle, Users, Youtube, Twitter, Globe, Github } from 'lucide-astro';
---

<Layout 
  title="Official Links"
  description="Official Street Dog BMX links - Connect with the community, follow social media, and find all official channels and resources."
  keywords={['streetdog bmx official', 'discord', 'community', 'social media', 'developer']}
>
  <div class="container mx-auto px-4 py-16">
    <!-- Header -->
    <div class="mb-12">
      <div class="breadcrumbs text-sm mb-4">
        <ul>
          <li><a href="/">Home</a></li>
          <li>Official Links</li>
        </ul>
      </div>
      
      <h1 class="text-5xl font-bold mb-4">
        Official <span class="text-primary">Links</span>
      </h1>
      <p class="text-xl opacity-80">
        Connect with the Street Dog BMX community and follow official channels
      </p>
    </div>
    
    <!-- Primary Links -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Primary Channels</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Official Website -->
        <a 
          href="https://streetdogbmx.com" 
          target="_blank" 
          rel="noopener noreferrer"
          class="card bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary hover:border-primary/50 transition-all card-hover"
        >
          <div class="card-body">
            <div class="flex items-center gap-3 mb-3">
              <Globe class="h-8 w-8 text-primary" />
              <h3 class="card-title text-2xl">Official Website</h3>
            </div>
            <p class="opacity-80 mb-4">
              The official Street Dog BMX website with news, updates, and game information.
            </p>
            <div class="flex items-center gap-2 text-sm text-primary">
              <span>Visit Website</span>
              <ExternalLink class="h-4 w-4" />
            </div>
          </div>
        </a>
        
        <!-- Discord -->
        <a 
          href="https://discord.gg/streetdogbmx" 
          target="_blank" 
          rel="noopener noreferrer"
          class="card bg-gradient-to-br from-secondary/20 to-secondary/5 border-2 border-secondary hover:border-secondary/50 transition-all card-hover"
        >
          <div class="card-body">
            <div class="flex items-center gap-3 mb-3">
              <MessageCircle class="h-8 w-8 text-secondary" />
              <h3 class="card-title text-2xl">Discord Server</h3>
            </div>
            <p class="opacity-80 mb-4">
              Join the official Discord community. Chat with players, share clips, get help, and stay updated.
            </p>
            <div class="flex items-center gap-2 text-sm text-secondary">
              <span>Join Discord</span>
              <ExternalLink class="h-4 w-4" />
            </div>
          </div>
        </a>
      </div>
    </section>
    
    <!-- Social Media -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Social Media</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- YouTube -->
        <a 
          href="https://youtube.com/@streetdogbmx" 
          target="_blank" 
          rel="noopener noreferrer"
          class="card bg-base-200 hover:bg-base-300 transition-colors card-hover"
        >
          <div class="card-body items-center text-center">
            <Youtube class="h-12 w-12 text-error mb-3" />
            <h3 class="card-title text-lg">YouTube</h3>
            <p class="text-xs opacity-70">Trailers, tutorials, highlights</p>
            <ExternalLink class="h-4 w-4 mt-2 opacity-50" />
          </div>
        </a>
        
        <!-- Twitter/X -->
        <a 
          href="https://twitter.com/streetdogbmx" 
          target="_blank" 
          rel="noopener noreferrer"
          class="card bg-base-200 hover:bg-base-300 transition-colors card-hover"
        >
          <div class="card-body items-center text-center">
            <Twitter class="h-12 w-12 text-info mb-3" />
            <h3 class="card-title text-lg">Twitter / X</h3>
            <p class="text-xs opacity-70">News & quick updates</p>
            <ExternalLink class="h-4 w-4 mt-2 opacity-50" />
          </div>
        </a>
        
        <!-- Reddit -->
        <a 
          href="https://reddit.com/r/streetdogbmx" 
          target="_blank" 
          rel="noopener noreferrer"
          class="card bg-base-200 hover:bg-base-300 transition-colors card-hover"
        >
          <div class="card-body items-center text-center">
            <Users class="h-12 w-12 text-warning mb-3" />
            <h3 class="card-title text-lg">Reddit</h3>
            <p class="text-xs opacity-70">Community discussions</p>
            <ExternalLink class="h-4 w-4 mt-2 opacity-50" />
          </div>
        </a>
        
        <!-- GitHub (if applicable) -->
        <a 
          href="https://github.com/streetdogbmx" 
          target="_blank" 
          rel="noopener noreferrer"
          class="card bg-base-200 hover:bg-base-300 transition-colors card-hover"
        >
          <div class="card-body items-center text-center">
            <Github class="h-12 w-12 text-accent mb-3" />
            <h3 class="card-title text-lg">GitHub</h3>
            <p class="text-xs opacity-70">Community tools & mods</p>
            <ExternalLink class="h-4 w-4 mt-2 opacity-50" />
          </div>
        </a>
      </div>
    </section>
    
    <!-- Store Links -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Purchase & Download</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <a 
          href="https://store.steampowered.com/app/streetdogbmx" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn btn-lg btn-primary gap-2"
        >
          <Globe class="h-5 w-5" />
          Steam
        </a>
        
        <a 
          href="https://store.playstation.com" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn btn-lg btn-secondary gap-2"
        >
          <Globe class="h-5 w-5" />
          PlayStation Store
        </a>
        
        <a 
          href="https://www.xbox.com/games/store" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn btn-lg btn-accent gap-2"
        >
          <Globe class="h-5 w-5" />
          Xbox Store
        </a>
        
        <a 
          href="https://www.nintendo.com/store" 
          target="_blank" 
          rel="noopener noreferrer"
          class="btn btn-lg btn-error gap-2"
        >
          <Globe class="h-5 w-5" />
          Nintendo eShop
        </a>
      </div>
    </section>
    
    <!-- Community Resources -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Community Resources</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="card bg-base-200">
          <div class="card-body">
            <h3 class="card-title text-primary">Official Wiki</h3>
            <p class="text-sm opacity-80 mb-4">
              Comprehensive game documentation maintained by the community.
            </p>
            <a href="#" class="btn btn-sm btn-outline gap-2">
              Visit Wiki
              <ExternalLink class="h-4 w-4" />
            </a>
          </div>
        </div>
        
        <div class="card bg-base-200">
          <div class="card-body">
            <h3 class="card-title text-secondary">Support Center</h3>
            <p class="text-sm opacity-80 mb-4">
              Get help with technical issues, bugs, and game questions.
            </p>
            <a href="#" class="btn btn-sm btn-outline gap-2">
              Get Support
              <ExternalLink class="h-4 w-4" />
            </a>
          </div>
        </div>
        
        <div class="card bg-base-200">
          <div class="card-body">
            <h3 class="card-title text-accent">Bug Reports</h3>
            <p class="text-sm opacity-80 mb-4">
              Report bugs and issues to help improve the game.
            </p>
            <a href="#" class="btn btn-sm btn-outline gap-2">
              Report Bug
              <ExternalLink class="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Content Creators -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Featured Content Creators</h2>
      
      <div class="alert alert-info">
        <Users class="h-6 w-6" />
        <div>
          <h3 class="font-bold">Support the Community</h3>
          <div class="text-sm">Follow these talented creators for gameplay, tutorials, and entertainment. Are you a creator? Join the Discord to get featured!</div>
        </div>
      </div>
      
      <div class="text-center mt-8">
        <a href="https://discord.gg/streetdogbmx" target="_blank" rel="noopener noreferrer" class="btn btn-primary gap-2">
          <MessageCircle class="h-4 w-4" />
          Join Creator Program
        </a>
      </div>
    </section>
    
    <!-- Disclaimer -->
    <section class="bg-base-200 rounded-2xl p-8">
      <h3 class="font-bold text-lg mb-4">Important Note</h3>
      <p class="text-sm opacity-80 mb-4">
        This is an unofficial fan-made wiki and guide website for Street Dog BMX. 
        We are not affiliated with or endorsed by the official developers.
      </p>
      <p class="text-sm opacity-80">
        For official information, support, and announcements, please visit the official website and social media channels linked above.
      </p>
      <div class="mt-6">
        <a href="/legal/disclaimer/" class="link link-primary text-sm">Read Full Disclaimer</a>
      </div>
    </section>
  </div>
</Layout>
```
# TODO.md - Continued (Part 7 - Final)

***

## PHASE 4: Pages Implementation (Final Legal Pages)

### Step 4.14: Create `src/pages/legal/privacy.astro`

```astro
---
import Layout from '../../components/Layout.astro';
import { Shield, AlertCircle } from 'lucide-astro';
---

<Layout 
  title="Privacy Policy"
  description="Privacy Policy for Street Dog BMX Wiki - How we collect, use, and protect your information."
  keywords={['privacy policy', 'data protection', 'user privacy']}
>
  <div class="container mx-auto px-4 py-16 max-w-4xl">
    <div class="breadcrumbs text-sm mb-4">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/legal/">Legal</a></li>
        <li>Privacy Policy</li>
      </ul>
    </div>
    
    <div class="flex items-center gap-4 mb-8">
      <Shield class="h-12 w-12 text-primary" />
      <div>
        <h1 class="text-4xl font-bold">Privacy Policy</h1>
        <p class="opacity-70">Last Updated: January 18, 2026</p>
      </div>
    </div>
    
    <div class="prose prose-lg max-w-none">
      <div class="alert alert-info mb-8">
        <AlertCircle class="h-6 w-6" />
        <div>
          <h3 class="font-bold">Your Privacy Matters</h3>
          <div class="text-sm">This privacy policy explains how Street Dog BMX Wiki collects, uses, and protects your information.</div>
        </div>
      </div>
      
      <section class="mb-12">
        <h2>1. Information We Collect</h2>
        
        <h3>1.1 Automatically Collected Information</h3>
        <p>When you visit our website, we automatically collect certain information about your device and browsing activity:</p>
        <ul>
          <li><strong>Log Data:</strong> IP address, browser type, operating system, pages visited, time spent on pages</li>
          <li><strong>Cookies:</strong> Small data files stored on your device (see Cookie Policy below)</li>
          <li><strong>Analytics Data:</strong> Aggregated usage statistics through third-party analytics services</li>
        </ul>
        
        <h3>1.2 Information You Provide</h3>
        <p>We do not currently require user accounts or collect personal information directly. If we implement user features in the future, we will update this policy accordingly.</p>
      </section>
      
      <section class="mb-12">
        <h2>2. How We Use Your Information</h2>
        
        <p>We use the collected information for the following purposes:</p>
        <ul>
          <li><strong>Website Operation:</strong> To provide and maintain our service</li>
          <li><strong>Analytics:</strong> To understand how users interact with our website</li>
          <li><strong>Improvements:</strong> To improve content, features, and user experience</li>
          <li><strong>Security:</strong> To detect and prevent abuse, fraud, or security issues</li>
        </ul>
      </section>
      
      <section class="mb-12">
        <h2>3. Third-Party Services</h2>
        
        <p>We use third-party services that may collect information about you:</p>
        
        <h3>3.1 Analytics Services</h3>
        <ul>
          <li><strong>Google Analytics:</strong> We use Google Analytics to analyze website traffic and usage patterns</li>
          <li>You can opt-out of Google Analytics by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" class="link link-primary">Google Analytics Opt-out Browser Add-on</a></li>
        </ul>
        
        <h3>3.2 Hosting Services</h3>
        <ul>
          <li>Our website is hosted on third-party servers that may collect server logs and access information</li>
        </ul>
        
        <h3>3.3 Content Delivery Networks (CDN)</h3>
        <ul>
          <li>We may use CDN services to deliver content efficiently, which may collect access logs</li>
        </ul>
      </section>
      
      <section class="mb-12">
        <h2>4. Cookies Policy</h2>
        
        <h3>4.1 What Are Cookies?</h3>
        <p>Cookies are small text files stored on your device that help us improve your experience.</p>
        
        <h3>4.2 Types of Cookies We Use</h3>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
          <li><strong>Preference Cookies:</strong> Remember your settings and preferences (e.g., dark mode)</li>
        </ul>
        
        <h3>4.3 Managing Cookies</h3>
        <p>You can control cookies through your browser settings. Note that disabling cookies may affect website functionality.</p>
      </section>
      
      <section class="mb-12">
        <h2>5. Data Security</h2>
        
        <p>We implement reasonable security measures to protect your information:</p>
        <ul>
          <li>HTTPS encryption for all data transmission</li>
          <li>Regular security updates and monitoring</li>
          <li>Limited data collection to minimize risk</li>
        </ul>
        
        <p class="bg-base-200 p-4 rounded">
          <strong>Note:</strong> No method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
        </p>
      </section>
      
      <section class="mb-12">
        <h2>6. Children's Privacy</h2>
        
        <p>Our website is intended for general audiences and does not knowingly collect information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>
      </section>
      
      <section class="mb-12">
        <h2>7. International Users</h2>
        
        <p>Our website is accessible globally. By using our website, you consent to the transfer and processing of your information in accordance with this privacy policy, regardless of your location.</p>
      </section>
      
      <section class="mb-12">
        <h2>8. Your Rights</h2>
        
        <p>Depending on your location, you may have certain rights regarding your information:</p>
        <ul>
          <li><strong>Access:</strong> Request information about data we collect</li>
          <li><strong>Correction:</strong> Request correction of inaccurate data</li>
          <li><strong>Deletion:</strong> Request deletion of your data (where applicable)</li>
          <li><strong>Opt-Out:</strong> Opt-out of analytics tracking</li>
        </ul>
        
        <p>To exercise these rights, please contact us using the information below.</p>
      </section>
      
      <section class="mb-12">
        <h2>9. External Links</h2>
        
        <p>Our website contains links to external websites (official game sites, stores, social media). We are not responsible for the privacy practices of these external sites. Please review their privacy policies separately.</p>
      </section>
      
      <section class="mb-12">
        <h2>10. Changes to This Policy</h2>
        
        <p>We may update this privacy policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Continued use of our website after changes constitutes acceptance of the updated policy.</p>
      </section>
      
      <section class="mb-12">
        <h2>11. Contact Us</h2>
        
        <p>If you have questions about this privacy policy or our data practices, please contact us:</p>
        
        <div class="bg-base-200 p-6 rounded-lg">
          <p><strong>Street Dog BMX Wiki</strong></p>
          <p>Email: <a href="mailto:privacy@streetdogbmxwiki.com" class="link link-primary">privacy@streetdogbmxwiki.com</a></p>
          <p class="text-sm opacity-70 mt-4">We will respond to privacy-related inquiries within 30 days.</p>
        </div>
      </section>
      
      <section class="mb-12">
        <h2>12. GDPR Compliance (EU Users)</h2>
        
        <p>If you are in the European Union, you have additional rights under GDPR:</p>
        <ul>
          <li>Right to access your personal data</li>
          <li>Right to rectification of inaccurate data</li>
          <li>Right to erasure ("right to be forgotten")</li>
          <li>Right to restrict processing</li>
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
        </ul>
        
        <p>To exercise these rights, please contact us at the email address above.</p>
      </section>
      
      <section class="mb-12">
        <h2>13. CCPA Compliance (California Users)</h2>
        
        <p>If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA):</p>
        <ul>
          <li>Right to know what personal information is collected</li>
          <li>Right to know if personal information is sold or disclosed</li>
          <li>Right to say no to the sale of personal information</li>
          <li>Right to access your personal information</li>
          <li>Right to equal service and price</li>
        </ul>
        
        <p><strong>Note:</strong> We do not sell personal information.</p>
      </section>
    </div>
    
    <div class="mt-12 text-center">
      <a href="/legal/" class="btn btn-outline">Back to Legal Information</a>
    </div>
  </div>
</Layout>
```

### Step 4.15: Create `src/pages/legal/terms.astro`

```astro
---
import Layout from '../../components/Layout.astro';
import { FileText, AlertCircle } from 'lucide-astro';
---

<Layout 
  title="Terms of Service"
  description="Terms of Service for Street Dog BMX Wiki - Rules and guidelines for using this website."
  keywords={['terms of service', 'terms and conditions', 'user agreement']}
>
  <div class="container mx-auto px-4 py-16 max-w-4xl">
    <div class="breadcrumbs text-sm mb-4">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/legal/">Legal</a></li>
        <li>Terms of Service</li>
      </ul>
    </div>
    
    <div class="flex items-center gap-4 mb-8">
      <FileText class="h-12 w-12 text-primary" />
      <div>
        <h1 class="text-4xl font-bold">Terms of Service</h1>
        <p class="opacity-70">Last Updated: January 18, 2026</p>
      </div>
    </div>
    
    <div class="prose prose-lg max-w-none">
      <div class="alert alert-warning mb-8">
        <AlertCircle class="h-6 w-6" />
        <div>
          <h3 class="font-bold">Agreement to Terms</h3>
          <div class="text-sm">By accessing or using this website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not use our website.</div>
        </div>
      </div>
      
      <section class="mb-12">
        <h2>1. Acceptance of Terms</h2>
        
        <p>Welcome to Street Dog BMX Wiki ("we," "us," "our"). These Terms of Service ("Terms") govern your access to and use of our website, services, and content.</p>
        
        <p>By accessing or using our website, you agree to:</p>
        <ul>
          <li>Comply with these Terms of Service</li>
          <li>Comply with all applicable laws and regulations</li>
          <li>Be responsible for your conduct while using our services</li>
        </ul>
      </section>
      
      <section class="mb-12">
        <h2>2. Use License</h2>
        
        <h3>2.1 Permission Granted</h3>
        <p>We grant you a limited, non-exclusive, non-transferable license to:</p>
        <ul>
          <li>Access and view the content on our website</li>
          <li>Download content for personal, non-commercial use</li>
          <li>Share links to our content on social media and other platforms</li>
        </ul>
        
        <h3>2.2 Restrictions</h3>
        <p>You may NOT:</p>
        <ul>
          <li>Republish, redistribute, or sell our content without permission</li>
          <li>Use our content for commercial purposes without authorization</li>
          <li>Modify or create derivative works without permission</li>
          <li>Remove copyright or attribution notices</li>
          <li>Use automated systems to scrape or download content in bulk</li>
        </ul>
      </section>
      
      <section class="mb-12">
        <h2>3. Intellectual Property</h2>
        
        <h3>3.1 Our Content</h3>
        <p>All content on this website, including text, graphics, logos, and images (excluding game-related content), is owned by or licensed to Street Dog BMX Wiki and is protected by copyright and intellectual property laws.</p>
        
        <h3>3.2 Game Content</h3>
        <p>Street Dog BMX, its name, logo, and all related content are property of their respective owners. We do not claim ownership of any game-related intellectual property. This is an unofficial fan website.</p>
        
        <h3>3.3 User Contributions</h3>
        <p>If we implement user-generated content features in the future, you will retain ownership of your contributions but grant us a license to use, display, and distribute them on our platform.</p>
      </section>
      
      <section class="mb-12">
        <h2>4. Prohibited Activities</h2>
        
        <p>You agree NOT to engage in any of the following activities:</p>
        <ul>
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe on intellectual property rights</li>
          <li>Transmit malicious code, viruses, or harmful software</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Interfere with the proper functioning of the website</li>
          <li>Collect user information without consent</li>
          <li>Impersonate others or misrepresent your affiliation</li>
          <li>Use the website for spam or fraudulent activities</li>
          <li>Harass, abuse, or harm other users (if community features exist)</li>
        </ul>
      </section>
      
      <section class="mb-12">
        <h2>5. Disclaimer of Warranties</h2>
        
        <div class="bg-base-200 p-6 rounded-lg mb-4">
          <p class="font-bold mb-2">THE WEBSITE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.</p>
        </div>
        
        <p>We make no warranties or representations about:</p>
        <ul>
          <li>The accuracy, completeness, or reliability of content</li>
          <li>The availability or uninterrupted access to the website</li>
          <li>The suitability of information for your specific needs</li>
          <li>The security of the website or protection from cyber threats</li>
        </ul>
        
        <p>We disclaim all warranties, express or implied, including but not limited to:</p>
        <ul>
          <li>Warranties of merchantability</li>
          <li>Warranties of fitness for a particular purpose</li>
          <li>Warranties of non-infringement</li>
        </ul>
      </section>
      
      <section class="mb-12">
        <h2>6. Limitation of Liability</h2>
        
        <div class="bg-base-200 p-6 rounded-lg mb-4">
          <p class="font-bold mb-2">TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM YOUR USE OF THIS WEBSITE.</p>
        </div>
        
        <p>This includes but is not limited to:</p>
        <ul>
          <li>Direct, indirect, incidental, or consequential damages</li>
          <li>Loss of data, profits, or business opportunities</li>
          <li>Damages resulting from viruses or malicious code</li>
          <li>Damages from reliance on information provided</li>
          <li>Damages from interrupted service or access</li>
        </ul>
        
        <p>Some jurisdictions do not allow limitations on liability, so these limitations may not apply to you.</p>
      </section>
      
      <section class="mb-12">
        <h2>7. External Links</h2>
        
        <p>Our website contains links to third-party websites and services. We are not responsible for:</p>
        <ul>
          <li>The content or practices of external websites</li>
          <li>The privacy policies of third-party sites</li>
          <li>Any damages or losses from using external links</li>
        </ul>
        
        <p>External links are provided for convenience only and do not imply endorsement.</p>
      </section>
      
      <section class="mb-12">
        <h2>8. Indemnification</h2>
        
        <p>You agree to indemnify, defend, and hold harmless Street Dog BMX Wiki and its operators from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:</p>
        <ul>
          <li>Your use of the website</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of any rights of another party</li>
          <li>Your violation of applicable laws or regulations</li>
        </ul>
      </section>
      
      <section class="mb-12">
        <h2>9. User Conduct</h2>
        
        <p>If we implement community features (comments, forums, user accounts) in the future, you agree to:</p>
        <ul>
          <li>Be respectful and courteous to other users</li>
          <li>Not post offensive, abusive, or harmful content</li>
          <li>Not share personal information of others without consent</li>
          <li>Comply with additional community guidelines we may establish</li>
        </ul>
        
        <p>We reserve the right to remove content and ban users who violate these guidelines.</p>
      </section>
      
      <section class="mb-12">
        <h2>10. Termination</h2>
        
        <p>We reserve the right to:</p>
        <ul>
          <li>Terminate or suspend your access to the website at any time</li>
          <li>Remove or modify content without notice</li>
          <li>Discontinue the website or any features at our discretion</li>
        </ul>
        
        <p>Termination may occur for violations of these Terms or for any other reason at our sole discretion.</p>
      </section>
      
      <section class="mb-12">
        <h2>11. Changes to Terms</h2>
        
        <p>We may update these Terms of Service at any time. Changes will be posted on this page with an updated "Last Updated" date.</p>
        
        <p>Your continued use of the website after changes are posted constitutes acceptance of the updated Terms.</p>
        
        <p>We encourage you to review this page periodically for any changes.</p>
      </section>
      
      <section class="mb-12">
        <h2>12. Governing Law</h2>
        
        <p>These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</p>
        
        <p>Any disputes arising from these Terms or your use of the website shall be subject to the exclusive jurisdiction of the appropriate courts.</p>
      </section>
      
      <section class="mb-12">
        <h2>13. Severability</h2>
        
        <p>If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.</p>
      </section>
      
      <section class="mb-12">
        <h2>14. Entire Agreement</h2>
        
        <p>These Terms of Service, together with our Privacy Policy and any other legal notices published on this website, constitute the entire agreement between you and Street Dog BMX Wiki regarding your use of the website.</p>
      </section>
      
      <section class="mb-12">
        <h2>15. Contact Information</h2>
        
        <p>If you have questions about these Terms of Service, please contact us:</p>
        
        <div class="bg-base-200 p-6 rounded-lg">
          <p><strong>Street Dog BMX Wiki</strong></p>
          <p>Email: <a href="mailto:legal@streetdogbmxwiki.com" class="link link-primary">legal@streetdogbmxwiki.com</a></p>
          <p class="text-sm opacity-70 mt-4">We will respond to inquiries within 30 days.</p>
        </div>
      </section>
      
      <section class="mb-12">
        <h2>16. Acknowledgment</h2>
        
        <p>BY USING THIS WEBSITE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM.</p>
      </section>
    </div>
    
    <div class="mt-12 text-center">
      <a href="/legal/" class="btn btn-outline">Back to Legal Information</a>
    </div>
  </div>
</Layout>
```

### Step 4.16: Create `src/pages/legal/disclaimer.astro`

```astro
---
import Layout from '../../components/Layout.astro';
import { AlertTriangle } from 'lucide-astro';
---

<Layout 
  title="Disclaimer"
  description="Legal disclaimer for Street Dog BMX Wiki - Important information about this unofficial fan website."
  keywords={['disclaimer', 'legal notice', 'unofficial fan site']}
>
  <div class="container mx-auto px-4 py-16 max-w-4xl">
    <div class="breadcrumbs text-sm mb-4">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/legal/">Legal</a></li>
        <li>Disclaimer</li>
      </ul>
    </div>
    
    <div class="flex items-center gap-4 mb-8">
      <AlertTriangle class="h-12 w-12 text-warning" />
      <div>
        <h1 class="text-4xl font-bold">Disclaimer</h1>
        <p class="opacity-70">Last Updated: January 18, 2026</p>
      </div>
    </div>
    
    <div class="prose prose-lg max-w-none">
      <div class="alert alert-warning mb-8">
        <AlertTriangle class="h-6 w-6" />
        <div>
          <h3 class="font-bold">Important Notice</h3>
          <div class="text-sm">This is an unofficial, fan-made website. We are not affiliated with, endorsed by, or officially connected to Street Dog BMX or its developers.</div>
        </div>
      </div>
      
      <section class="mb-12">
        <h2>1. Unofficial Fan Website</h2>
        
        <p>Street Dog BMX Wiki is an <strong>unofficial, fan-created resource</strong> dedicated to providing information, guides, and resources for the Street Dog BMX community.</p>
        
        <p>We are NOT:</p>
        <ul>
          <li>The official website of Street Dog BMX</li>
          <li>Affiliated with the game's developers or publishers</li>
          <li>Endorsed or sponsored by the official team</li>
          <li>Authorized to speak on behalf of the developers</li>
          <li>Responsible for the game itself or its development</li>
        </ul>
        
        <p>For official information, please visit the <a href="/official/" class="link link-primary">official channels</a>.</p>
      </section>
      
      <section class="mb-12">
        <h2>2. Intellectual Property</h2>
        
        <h3>2.1 Game Rights</h3>
        <p>Street Dog BMX, its name, logo, characters, locations, and all associated intellectual property are the exclusive property of their respective owners. We make no claim of ownership over any game-related content.</p>
        
        <h3>2.2 Fair Use</h3>
        <p>This website operates under the principle of fair use for:</p>
        <ul>
          <li>Educational purposes</li>
          <li>Commentary and criticism</li>
          <li>Community building and fan engagement</li>
          <li>Informational and reference purposes</li>
        </ul>
        
        <h3>2.3 Copyright Respect</h3>
        <p>We respect all intellectual property rights. If you believe any content on this website infringes your copyright, please contact us immediately at <a href="mailto:legal@streetdogbmxwiki.com" class="link link-primary">legal@streetdogbmxwiki.com</a>.</p>
      </section>
      
      <section class="mb-12">
        <h2>3. Content Accuracy</h2>
        
        <h3>3.1 Information Accuracy</h3>
        <p>While we strive to provide accurate and up-to-date information:</p>
        <ul>
          <li>Information may become outdated due to game updates</li>
          <li>Guides and strategies are based on community experience</li>
          <li>We cannot guarantee 100% accuracy of all content</li>
          <li>Information is provided "as is" without warranties</li>
        </ul>
        
        <h3>3.2 Game Changes</h3>
        <p>Street Dog BMX may receive updates, patches, or changes that affect:</p>
        <ul>
          <li>Game mechanics and physics</li>
          <li>Trick values and scoring</li>
          <li>Map layouts and features</li>
          <li>Bike customization options</li>
        </ul>
        
        <p>We will make reasonable efforts to update content, but some information may lag behind official changes.</p>
      </section>
      
      <section class="mb-12">
        <h2>4. User-Generated Content</h2>
        
        <p>If we implement community features allowing user submissions:</p>
        <ul>
          <li>User contributions represent the views of their authors, not ours</li>
          <li>We are not responsible for the accuracy of user-submitted content</li>
          <li>We reserve the right to moderate, edit, or remove content</li>
          <li>Users are responsible for their own contributions</li>
        </ul>
      </section>
      
      <section class="mb-12">
        <h2>5. External Links</h2>
        
        <h3>5.1 Third-Party Websites</h3>
        <p>Our website contains links to external websites, including:</p>
        <ul>
          <li>Official game websites and stores</li>
          <li>Social media platforms</li>
          <li>Community resources</li>
          <li>Partner websites</li>
        </ul>
        
        <h3>5.2 No Responsibility</h3>
        <p>We are NOT responsible for:</p>
        <ul>
          <li>Content on external websites</li>
          <li>Privacy practices of third-party sites</li>
          <li>Security of external links</li>
          <li>Accuracy of information on other sites</li>
          <li>Transactions conducted on external platforms</li>
        </ul>
        
        <p>External links are provided for convenience only and do not constitute endorsement.</p>
      </section>
      
      <section class="mb-12">
        <h2>6. No Guarantees</h2>
        
        <p>We make NO guarantees regarding:</p>
        <ul>
          <li><strong>Website Availability:</strong> The website may be unavailable due to maintenance, technical issues, or other reasons</li>
          <li><strong>Continuous Operation:</strong> We may discontinue the website at any time</li>
          <li><strong>Content Updates:</strong> Content may not always reflect the latest game version</li>
          <li><strong>Support:</strong> We are not obligated to provide technical support</li>
        </ul>
      </section>
      
      <section class="mb-12">
        <h2>7. No Professional Advice</h2>
        
        <p>Information on this website is for entertainment and educational purposes only. It is NOT:</p>
        <ul>
          <li>Professional advice of any kind</li>
          <li>Legal advice or consultation</li>
          <li>Financial or investment advice</li>
          <li>Medical or health advice</li>
        </ul>
        
        <p>Consult appropriate professionals for specific advice related to your situation.</p>
      </section>
      
      <section class="mb-12">
        <h2>8. Limitation of Liability</h2>
        
        <div class="bg-base-200 p-6 rounded-lg mb-4">
          <p class="font-bold mb-2">TO THE FULLEST EXTENT PERMITTED BY LAW, STREET DOG BMX WIKI AND ITS OPERATORS SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM YOUR USE OF THIS WEBSITE.</p>
        </div>
        
        <p>This includes but is not limited to:</p>
        <ul>
          <li>Reliance on inaccurate information</li>
          <li>Loss of game progress or data</li>
          <li>Issues arising from following guides or strategies</li>
          <li>Technical problems or security issues</li>
          <li>Damages from external links or third-party content</li>
        </ul>
      </section>
      
      <section class="mb-12">
        <h2>9. Age Restrictions</h2>
        
        <p>This website is intended for users who meet the minimum age requirements of Street Dog BMX and applicable laws in their jurisdiction.</p>
        
        <p>Parents and guardians are responsible for monitoring their children's internet usage.</p>
      </section>
      
      <section class="mb-12">
        <h2>10. Regional Availability</h2>
        
        <p>Information on this website may not apply to all regions or versions of Street Dog BMX. Game availability, features, and content may vary by:</p>
        <ul>
          <li>Geographic region</li>
          <li>Platform (PC, console)</li>
          <li>Game version</li>
          <li>Local regulations</li>
        </ul>
      </section>
      
      <section class="mb-12">
        <h2>11. No Cheating or Exploits</h2>
        
        <p>While we provide guides and strategies:</p>
        <ul>
          <li>We do NOT endorse cheating, hacking, or exploiting game bugs</li>
          <li>We do NOT provide cheats, hacks, or unauthorized modifications</li>
          <li>Use of such methods may violate the game's Terms of Service</li>
          <li>We are not responsible for consequences of using unauthorized methods</li>
        </ul>
        
        <p>Play fairly and respect the game's rules and community.</p>
      </section>
      
      <section class="mb-12">
        <h2>12. Community Guidelines</h2>
        
        <p>If you participate in our community (comments, forums, etc.):</p>
        <ul>
          <li>Be respectful and courteous to others</li>
          <li>Follow our community guidelines and rules</li>
          <li>Respect others' privacy and personal information</li>
          <li>Do not engage in harassment, abuse, or harmful behavior</li>
        </ul>
        
        <p>We reserve the right to remove content and ban users who violate guidelines.</p>
      </section>
      
      <section class="mb-12">
        <h2>13. Monetization</h2>
        
        <h3>13.1 Advertising</h3>
        <p>This website may display advertisements to support operations. We are not responsible for:</p>
        <ul>
          <li>Content of third-party advertisements</li>
          <li>Products or services advertised</li>
          <li>Transactions with advertisers</li>
        </ul>
        
        <h3>13.2 Affiliate Links</h3>
        <p>We may use affiliate links to game stores and products. Purchases through these links may provide us with a commission at no extra cost to you.</p>
      </section>
      
      <section class="mb-12">
        <h2>14. Changes to Disclaimer</h2>
        
        <p>We reserve the right to update this disclaimer at any time. Changes will be posted on this page with an updated date.</p>
        
        <p>Your continued use of the website after changes constitutes acceptance of the updated disclaimer.</p>
      </section>
      
      <section class="mb-12">
        <h2>15. Severability</h2>
        
        <p>If any provision of this disclaimer is found to be unenforceable, the remaining provisions shall remain in full force and effect.</p>
      </section>
      
      <section class="mb-12">
        <h2>16. Contact Information</h2>
        
        <p>For questions, concerns, or legal matters regarding this disclaimer:</p>
        
        <div class="bg-base-200 p-6 rounded-lg">
          <p><strong>Street Dog BMX Wiki</strong></p>
          <p>Email: <a href="mailto:legal@streetdogbmxwiki.com" class="link link-primary">legal@streetdogbmxwiki.com</a></p>
          <p class="text-sm opacity-70 mt-4">
            For official game support or inquiries, please visit the <a href="/official/" class="link link-primary">official channels</a>.
          </p>
        </div>
      </section>
      
      <div class="alert alert-info mt-12">
        <AlertTriangle class="h-6 w-6" />
        <div>
          <h3 class="font-bold">Acknowledgment</h3>
          <div class="text-sm">By using this website, you acknowledge that you have read and understood this disclaimer and agree to its terms.</div>
        </div>
      </div>
    </div>
    
    <div class="mt-12 text-center">
      <a href="/legal/" class="btn btn-outline">Back to Legal Information</a>
    </div>
  </div>
</Layout>
```

### Step 4.17: Create `src/pages/legal/index.astro`

```astro
---
import Layout from '../../components/Layout.astro';
import { Shield, FileText, AlertTriangle, ExternalLink } from 'lucide-astro';
---

<Layout 
  title="Legal Information"
  description="Legal information, privacy policy, terms of service, and disclaimers for Street Dog BMX Wiki."
  keywords={['legal', 'privacy', 'terms', 'disclaimer']}
>
  <div class="container mx-auto px-4 py-16">
    <div class="breadcrumbs text-sm mb-4">
      <ul>
        <li><a href="/">Home</a></li>
        <li>Legal</li>
      </ul>
    </div>
    
    <h1 class="text-5xl font-bold mb-4">
      Legal <span class="text-primary">Information</span>
    </h1>
    <p class="text-xl opacity-80 mb-12">
      Important legal documents and policies for Street Dog BMX Wiki
    </p>
    
    <!-- Legal Documents -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <a href="/legal/privacy/" class="card bg-base-200 hover:bg-base-300 card-hover">
        <div class="card-body">
          <Shield class="h-12 w-12 text-primary mb-4" />
          <h2 class="card-title">Privacy Policy</h2>
          <p class="text-sm opacity-80">Learn how we collect, use, and protect your information.</p>
          <div class="card-actions justify-end mt-4">
            <ExternalLink class="h-4 w-4 opacity-50" />
          </div>
        </div>
      </a>
      
      <a href="/legal/terms/" class="card bg-base-200 hover:bg-base-300 card-hover">
        <div class="card-body">
          <FileText class="h-12 w-12 text-secondary mb-4" />
          <h2 class="card-title">Terms of Service</h2>
          <p class="text-sm opacity-80">Rules and guidelines for using this website.</p>
          <div class="card-actions justify-end mt-4">
            <ExternalLink class="h-4 w-4 opacity-50" />
          </div>
        </div>
      </a>
      
      <a href="/legal/disclaimer/" class="card bg-base-200 hover:bg-base-300 card-hover">
        <div class="card-body">
          <AlertTriangle class="h-12 w-12 text-warning mb-4" />
          <h2 class="card-title">Disclaimer</h2>
          <p class="text-sm opacity-80">Important legal notices about this unofficial fan website.</p>
          <div class="card-actions justify-end mt-4">
            <ExternalLink class="h-4 w-4 opacity-50" />
          </div>
        </div>
      </a>
    </div>
    
    <!-- Quick Summary -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Quick Summary</h2>
      
      <div class="space-y-6">
        <div class="alert alert-info">
          <AlertTriangle class="h-6 w-6" />
          <div>
            <h3 class="font-bold">Unofficial Fan Website</h3>
            <div class="text-sm">This is an unofficial, fan-made resource. We are not affiliated with or endorsed by the official Street Dog BMX developers or publishers.</div>
          </div>
        </div>
        
        <div class="bg-base-200 rounded-2xl p-6">
          <h3 class="font-bold text-lg mb-4">Key Points</h3>
          <ul class="space-y-3">
            <li class="flex gap-3">
              <Shield class="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Privacy:</strong> We collect minimal data and use analytics to improve the website. See our <a href="/legal/privacy/" class="link link-primary">Privacy Policy</a> for details.</span>
            </li>
            <li class="flex gap-3">
              <FileText class="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
              <span><strong>Use:</strong> Content is for personal, non-commercial use. Do not republish or sell our content without permission. See <a href="/legal/terms/" class="link link-primary">Terms of Service</a>.</span>
            </li>
            <li class="flex gap-3">
              <AlertTriangle class="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
              <span><strong>Accuracy:</strong> While we strive for accuracy, information may become outdated. See our <a href="/legal/disclaimer/" class="link link-primary">Disclaimer</a>.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    
    <!-- Copyright -->
    <section class="mb-16">
      <h2 class="text-3xl font-bold mb-8">Copyright & Attribution</h2>
      
      <div class="bg-base-200 rounded-2xl p-8">
        <h3 class="font-bold text-xl mb-4">Game Rights</h3>
        <p class="mb-6">
          Street Dog BMX, its name, logo, and all related content are the property of their respective owners. 
          This website operates under fair use principles for educational, informational, and community purposes.
        </p>
        
        <h3 class="font-bold text-xl mb-4">Our Content</h3>
        <p class="mb-6">
          Original content created by Street Dog BMX Wiki (guides, articles, designs) is © 2026 Street Dog BMX Wiki. 
          You may share and link to our content, but please provide proper attribution.
        </p>
        
        <h3 class="font-bold text-xl mb-4">Reporting Copyright Issues</h3>
        <p>
          If you believe any content infringes your copyright, please contact us at:
        </p>
        <p class="mt-2">
          <a href="mailto:legal@streetdogbmxwiki.com" class="link link-primary">legal@streetdogbmxwiki.com</a>
        </p>
      </div>
    </section>
    
    <!-- Contact -->
    <section>
      <h2 class="text-3xl font-bold mb-8">Questions?</h2>
      
      <div class="card bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
        <div class="card-body text-center">
          <p class="mb-6">
            If you have questions about our legal policies or need clarification on any terms, please don't hesitate to contact us.
          </p>
          <div>
            <a href="mailto:legal@streetdogbmxwiki.com" class="btn btn-primary">Contact Legal Team</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</Layout>
```

***

## ✅ PHASE 4 COMPLETE!

All pages have been created! The website now has:

**Main Pages:**
- Home page
- Guides section (beginner, tricks/combos, advanced techniques)
- Tier list
- Character customization
- Bike builds
- Promo codes
- Maps guide
- Release information
- Tools & calculators
- Official links

**Legal Pages:**
- Privacy Policy
- Terms of Service
- Disclaimer
- Legal hub page

***
