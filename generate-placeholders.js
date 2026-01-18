/**
 * Generate placeholder images for 7DS Origin Wiki
 * Run with: node generate-placeholders.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, 'public');
const DATA_DIR = path.join(__dirname, 'src', 'data');

// Element colors for characters
const elementColors = {
  'Demon': '#8b0000',
  'Hybrid': '#9b59b6',
  'Earth': '#8b4513',
  'Physical': '#708090',
  'Nature': '#228b22',
  'Magic': '#9932cc',
  'Light': '#ffd700',
  'Wind': '#87ceeb',
  'Ice': '#00ced1',
  'Fire': '#ff4500',
  'Thunder': '#1e90ff'
};

// Role icons (emoji-like labels)
const roleLabels = {
  'DPS': '⚔️',
  'Tank': '🛡️',
  'Support': '💫',
  'Healer': '💚',
  'All-Rounder': '🌟'
};

// Generate SVG placeholder for character
function generateCharacterSVG(name, element, role, tier, width = 400, height = 500) {
  const color = elementColors[element] || '#6366f1';
  const roleIcon = roleLabels[role] || '⚔️';
  
  // Calculate luminance to determine text color
  const r = parseInt(color.slice(1, 3), 16) / 255;
  const g = parseInt(color.slice(3, 5), 16) / 255;
  const b = parseInt(color.slice(5, 7), 16) / 255;
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  const textColor = luminance > 0.5 ? '#1a1a2e' : '#ffffff';

  const darkerColor = adjustColor(color, -40);
  const lighterColor = adjustColor(color, 40);
  
  // Tier colors
  const tierColors = {
    'S': '#ffd700',
    'A': '#c0c0c0',
    'B': '#cd7f32',
    'C': '#708090'
  };
  const tierColor = tierColors[tier] || '#ffffff';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg-${escapeId(name)}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${lighterColor};stop-opacity:1" />
      <stop offset="50%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${darkerColor};stop-opacity:1" />
    </linearGradient>
    <pattern id="grid-${escapeId(name)}" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="${textColor}" stroke-width="0.3" opacity="0.15"/>
    </pattern>
    <filter id="glow-${escapeId(name)}">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bg-${escapeId(name)})"/>
  <rect width="100%" height="100%" fill="url(#grid-${escapeId(name)})"/>
  
  <!-- Decorative circle -->
  <circle cx="${width/2}" cy="${height/2 - 30}" r="80" fill="none" stroke="${textColor}" stroke-width="2" opacity="0.2"/>
  <circle cx="${width/2}" cy="${height/2 - 30}" r="100" fill="none" stroke="${textColor}" stroke-width="1" opacity="0.1"/>
  
  <!-- Character silhouette placeholder -->
  <circle cx="${width/2}" cy="${height/2 - 50}" r="60" fill="${textColor}" opacity="0.15"/>
  
  <!-- Role icon -->
  <text x="${width/2}" y="${height/2 - 45}" dominant-baseline="middle" text-anchor="middle" 
        font-size="48" filter="url(#glow-${escapeId(name)})">
    ${roleIcon}
  </text>
  
  <!-- Character name -->
  <text x="${width/2}" y="${height - 100}" dominant-baseline="middle" text-anchor="middle" 
        font-family="system-ui, -apple-system, sans-serif" font-size="28" 
        font-weight="700" fill="${textColor}" filter="url(#glow-${escapeId(name)})">
    ${escapeXml(name)}
  </text>
  
  <!-- Element -->
  <text x="${width/2}" y="${height - 65}" dominant-baseline="middle" text-anchor="middle" 
        font-family="system-ui, -apple-system, sans-serif" font-size="16" 
        font-weight="500" fill="${textColor}" opacity="0.8">
    ${escapeXml(element)} • ${escapeXml(role)}
  </text>
  
  <!-- Tier badge -->
  <rect x="${width - 60}" y="15" width="45" height="45" rx="8" fill="${tierColor}" opacity="0.9"/>
  <text x="${width - 37}" y="47" dominant-baseline="middle" text-anchor="middle" 
        font-family="system-ui, -apple-system, sans-serif" font-size="24" 
        font-weight="700" fill="#1a1a2e">
    ${tier}
  </text>
</svg>`;
}

// Generate generic SVG placeholder
function generateSVG(label, color, width = 800, height = 450) {
  const r = parseInt(color.slice(1, 3), 16) / 255;
  const g = parseInt(color.slice(3, 5), 16) / 255;
  const b = parseInt(color.slice(5, 7), 16) / 255;
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  const textColor = luminance > 0.5 ? '#1a1a2e' : '#ffffff';
  const darkerColor = adjustColor(color, -30);
  
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${darkerColor};stop-opacity:1" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${textColor}" stroke-width="0.5" opacity="0.1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)"/>
  <rect width="100%" height="100%" fill="url(#grid)"/>
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" 
        font-family="system-ui, -apple-system, sans-serif" font-size="${Math.min(width, height) * 0.08}" 
        font-weight="600" fill="${textColor}" opacity="0.9">
    ${escapeXml(label)}
  </text>
</svg>`;
}

function adjustColor(hex, amount) {
  const num = parseInt(hex.slice(1), 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amount));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
  const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function escapeXml(str) {
  return str.replace(/[<>&'"]/g, c => ({
    '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;'
  }[c]));
}

function escapeId(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '-');
}

// Ensure directory exists
function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created directory: ${path.relative(__dirname, dir)}`);
  }
}

// Main execution
async function main() {
  console.log('🎮 7DS Origin Wiki - Placeholder Image Generator\n');
  
  let createdCount = 0;

  // 1. Generate character images from characters.json
  const charactersPath = path.join(DATA_DIR, 'characters.json');
  if (fs.existsSync(charactersPath)) {
    const charactersData = JSON.parse(fs.readFileSync(charactersPath, 'utf-8'));
    const charactersDir = path.join(PUBLIC_DIR, 'images', 'characters');
    ensureDir(charactersDir);

    for (const char of charactersData.characters) {
      const svgContent = generateCharacterSVG(
        char.name,
        char.element,
        char.role,
        char.tier,
        400,
        500
      );
      
      // Save as SVG
      const svgPath = path.join(charactersDir, `${char.id}.svg`);
      fs.writeFileSync(svgPath, svgContent);
      createdCount++;
      console.log(`✅ Character: ${char.name} → images/characters/${char.id}.svg`);
    }
  }

  // 2. Generate OG image
  const ogDir = path.join(PUBLIC_DIR, 'images', 'og');
  ensureDir(ogDir);
  
  const ogSvg = generateSVG('7DS Origin Wiki', '#dc143c', 1200, 630);
  fs.writeFileSync(path.join(ogDir, 'default.svg'), ogSvg);
  createdCount++;
  console.log(`✅ OG Image: images/og/default.svg`);

  // 3. Generate hero image
  const heroDir = path.join(PUBLIC_DIR, 'images', 'hero');
  ensureDir(heroDir);
  
  const heroSvg = generateSVG('Seven Deadly Sins: Origin', '#8b0000', 1920, 600);
  fs.writeFileSync(path.join(heroDir, 'hero-main.svg'), heroSvg);
  createdCount++;
  console.log(`✅ Hero: images/hero/hero-main.svg`);

  // 4. Generate guide images
  const guidesPath = path.join(DATA_DIR, 'guides.json');
  if (fs.existsSync(guidesPath)) {
    const guidesData = JSON.parse(fs.readFileSync(guidesPath, 'utf-8'));
    const guidesDir = path.join(PUBLIC_DIR, 'images', 'guides');
    ensureDir(guidesDir);

    const guideColors = ['#dc143c', '#ffd700', '#228b22', '#1e90ff', '#9932cc', '#ff4500'];
    let colorIndex = 0;

    for (const guide of guidesData.guides) {
      const color = guideColors[colorIndex % guideColors.length];
      const svgContent = generateSVG(guide.title, color, 800, 450);
      
      const svgPath = path.join(guidesDir, `${guide.id}.svg`);
      fs.writeFileSync(svgPath, svgContent);
      createdCount++;
      console.log(`✅ Guide: ${guide.title} → images/guides/${guide.id}.svg`);
      colorIndex++;
    }
  }

  console.log(`\n🎉 Done! Created ${createdCount} placeholder images.`);
  
  // Update JSON references to use .svg
  console.log('\n📝 Updating JSON files to use .svg extensions...\n');
  
  // Update characters.json
  if (fs.existsSync(charactersPath)) {
    let content = fs.readFileSync(charactersPath, 'utf-8');
    content = content.replace(/\.jpg/g, '.svg').replace(/\.png/g, '.svg');
    fs.writeFileSync(charactersPath, content);
    console.log('✅ Updated: src/data/characters.json');
  }

  // Update guides.json
  if (fs.existsSync(guidesPath)) {
    let content = fs.readFileSync(guidesPath, 'utf-8');
    content = content.replace(/\.jpg/g, '.svg').replace(/\.png/g, '.svg');
    fs.writeFileSync(guidesPath, content);
    console.log('✅ Updated: src/data/guides.json');
  }

  console.log('\n✨ All placeholder images generated and references updated!');
  console.log('   Run `npm run build` to rebuild the site.\n');
}

main().catch(console.error);
