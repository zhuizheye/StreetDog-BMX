Now I'll create a comprehensive design document for your Street Dog BMX wiki website:

# design.md

## Project Overview

**Domain**: streetdogbmx.wiki  
**Framework**: Astro  
**Deployment**: Cloudflare Workers (v8)  
**Database**: None (JSON files for data storage)  
**UI Library**: Tailwind CSS + DaisyUI  
**Icon Library**: Lucide Icons  
**i18n**: Astro i18n integration (English primary, component-based for future expansion)

## Site Architecture

### Navigation Structure
- Home
- Guides
- Characters (Customization)
- Builds (Bike Builds)
- Maps
- Tools
- Official
- Legal (Copyright Notice)

### URL Structure
```
/ (English root)
/guides/
/guides/beginner-guide/
/guides/tricks-combos/
/guides/advanced-techniques/
/characters/
/builds/
/maps/
/tools/score-calculator/
/official/
/legal/
```

## Tech Stack Details

### Dependencies
```json
{
  "dependencies": {
    "@astrojs/tailwind": "^5.1.0",
    "astro": "^4.0.0",
    "tailwindcss": "^3.4.0",
    "daisyui": "^4.6.0",
    "lucide-astro": "^0.295.0"
  }
}
```

### File Structure
```
src/
├── components/
│   ├── Layout.astro
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Hero.astro
│   ├── GuideCard.astro
│   ├── MapCard.astro
│   └── SEO.astro
├── pages/
│   ├── index.astro
│   ├── guides/
│   │   ├── index.astro
│   │   ├── beginner-guide.astro
│   │   ├── tricks-combos.astro
│   │   └── advanced-techniques.astro
│   ├── characters.astro
│   ├── builds.astro
│   ├── maps.astro
│   ├── tools/
│   │   └── score-calculator.astro
│   ├── official.astro
│   └── legal.astro
├── data/
│   ├── tricks.json
│   ├── maps.json
│   ├── builds.json
│   └── site.json
├── layouts/
│   └── PageLayout.astro
└── styles/
    └── global.css
```

## Content Strategy

### 1. Home Page (`/`)

**Hero Section**:
- Title: "Street Dog BMX Wiki - Your Ultimate Guide"
- Subtitle: "Master the streets, learn tricks, explore maps, and dominate the leaderboards"
- CTA: "Get Started" → /guides/beginner-guide
- Release Info: "Available now on Steam, PS4, Xbox One - Released January 14, 2026"

**Quick Links Grid**:
- Beginner's Guide
- Tricks & Combos
- Maps Explorer
- Bike Builds
- Score Calculator
- Official Links

**Latest Updates Section**:
- Game release announcement
- Platform availability
- Community highlights

**SEO**:
```json
{
  "title": "Street Dog BMX Wiki - Complete Guide, Tricks, Maps & Builds",
  "description": "The ultimate Street Dog BMX guide featuring tricks, combos, maps, bike builds, and tips. Learn to master this arcade BMX game on PC, PS4, and Xbox One.",
  "keywords": "streetdog bmx, bmx game, tricks guide, maps, bike builds, steam, ps4, xbox"
}
```

### 2. Guides Section (`/guides/`)

#### 2.1 Beginner's Guide (`/guides/beginner-guide/`)

**Content**:

```markdown
# Beginner's Guide to Street Dog BMX

## Getting Started

Street Dog BMX is an arcade-style BMX game that combines the flow of Tony Hawk's Pro Skater with technical BMX riding. Released on January 14, 2026, for PC (Steam), PlayStation 4, and Xbox One.

## Basic Controls

### Movement
- **Left Stick**: Steer your bike
- **Right Stick (Click)**: Mini bunny hop
- **A/X Button**: Regular bunny hop
- **Left Stick Pull Down + Hop**: Pump hop (higher jump)

### Tricks
- **Right Stick + Directions**: Air tricks (spins, flips, barspins)
- **Right Stick on Rails**: Grinds (various combinations)
- **B/Circle**: Manual (wheelie)
- **Hold after landing**: Extend manual for combos

## First Steps

1. **Complete the Tutorial**: Learn basic movement and trick mechanics
2. **Explore the Skate Park**: Practice in a controlled environment
3. **Master Bunny Hops**: Essential for navigating terrain
4. **Learn to Manual**: Key to extending combos
5. **Practice Grinds**: Start with simple rail grinds

## Core Mechanics

### Combo System
- Chain tricks together without touching the ground
- Manuals connect ground sections
- Grinds maintain combo on rails
- Higher multipliers = higher scores

### Speed Management
- Pump transitions to gain speed
- Use downhill sections strategically
- Land clean to maintain momentum
- Avoid over-rotating tricks

## Progression Tips

- Start with shorter combos (3-5 tricks)
- Focus on consistency over complexity
- Explore each map to find lines
- Complete challenges to unlock customization
- Watch replay mode to analyze lines

## Common Beginner Mistakes

- Over-rotating tricks (landing backwards)
- Not using manuals between tricks
- Ignoring the pump mechanic
- Attempting advanced tricks too early
- Not exploring map hidden spots

## Next Steps

Once comfortable with basics, progress to:
- Advanced trick combinations
- Hidden spot discovery
- High score challenge runs
- Custom bike building
```

#### 2.2 Tricks & Combos Guide (`/guides/tricks-combos/`)

**Content**:

```markdown
# Tricks & Combos Guide

## Air Tricks

### Basic Air Tricks
- **360 Spin**: Right stick rotate
- **Backflip**: Right stick down
- **Frontflip**: Right stick up
- **Barspin**: Right stick left/right combinations
- **Tailwhip**: Right stick diagonal movements
- **No-Hander**: Hold specific stick position
- **Superman**: Extended air trick

### Advanced Air Tricks
- **Double Backflip**: Hold flip longer
- **720 Spin**: Complete two rotations
- **Barspin + Tailwhip Combos**: Mix stick movements
- **Flair**: Backflip + 180 spin combination

## Grind Tricks

### Basic Grinds
- **Feeble Grind**: Approach rail, right stick position
- **Smith Grind**: Alternative rail position
- **Icepick Grind**: Technical rail balance
- **Double Peg Grind**: Standard rail grind
- **Toothpick Grind**: Advanced rail trick

### Advanced Grinds
- **Crankslide**: Special grind variation
- **Flareway Bar**: Technical lip trick
- **Crooked Grind**: Angled approach
- **Pedal Grind**: Precision grind

## Ground Tricks

### Manuals
- **Regular Manual**: B/Circle button (back wheel)
- **Nose Manual**: Modified stick position (front wheel)
- **Extended Manual**: Hold balance for combo extension

## Combo Building

### Basic Combo Structure
1. **Launch**: Bunny hop or ramp
2. **Air Trick**: Spin/flip/barspin
3. **Land to Manual**: Extend combo
4. **Grind**: Rail or ledge
5. **Manual Exit**: Continue or finish

### Example Combos

**Beginner Combo** (5,000-10,000 points):
```
Bunny Hop → 360 → Manual → Rail Grind → Manual → Barspin
```

**Intermediate Combo** (20,000-40,000 points):
```
Ramp Launch → Backflip + 360 → Manual → Icepick Grind → 
Manual → Gap Jump → Tailwhip → Land
```

**Advanced Combo** (50,000+ points):
```
Wallride → Gap → Double Backflip + 540 → Manual → 
Transfer → Flareway Bar Grind → Manual → Roof Gap → 
Barspin + 360 → Feeble Grind → Manual Finish
```

## Combo Tips

- **Timing is Everything**: Don't rush trick inputs
- **Use Terrain**: Gaps, wallrides, and transitions add multipliers
- **Balance Risk/Reward**: Landing clean is better than crashing
- **Learn Map Lines**: Each map has optimal combo routes
- **Practice Consistency**: Master smaller combos first

## Scoring System

- Base trick points vary by difficulty
- Combo multiplier increases with trick count
- Clean landings preserve multiplier
- Manuals extend combo time
- Special spots give bonus multipliers
- Hidden areas offer score boosts

## Trick Mastery Checklist

- [ ] Land 10 different air tricks
- [ ] Grind 5 different rail types
- [ ] Complete a 10-trick combo
- [ ] Score 50,000 in single combo
- [ ] Discover manual-to-grind transitions
- [ ] Master wallride integration
- [ ] Chain gaps into combos
- [ ] Use transfers effectively
```

#### 2.3 Advanced Techniques (`/guides/advanced-techniques/`)

**Content**:

```markdown
# Advanced Techniques

## Physics-Based Mechanics

### Pump System
The pump mechanic is crucial for speed and height:
- **Transition Pumping**: Pull down entering, push up exiting
- **Flat Pumping**: Rhythmic stick movement for speed
- **Pre-Jump Pump**: Down then up for maximum hop height
- **Air Pumping**: Adjust height mid-flight

### Weight Transfer
- Use left stick for rider weight shifting
- Affects landing stability
- Influences grind balance
- Controls manual duration

## Advanced Line Building

### Map Flow Analysis
1. Identify high points and launch spots
2. Map grind rails and manual sections
3. Locate gap opportunities
4. Find wallride connections
5. Note transfer possibilities

### Optimal Routing
- Chain natural terrain features
- Minimize ground time between tricks
- Utilize elevation changes
- Incorporate hidden spots
- Plan escape routes for failed tricks

## Technical Skills

### Precision Landing
- Adjust rotation mid-air
- Compensate for speed
- Align for manual continuation
- Prepare for grind approach

### Grind Extensions
- Balance adjustments on long rails
- Switch between grind types mid-rail
- Exit grinds into manuals smoothly
- Transfer between parallel rails

### Air Control
- Micro-adjust spin speed
- Control flip rotation
- Combine multiple trick types
- Style variations for points

## Challenge Optimization

With 270+ challenges, efficiency matters:

### Challenge Categories
- **Trick Challenges**: Specific move requirements
- **Combo Challenges**: Score thresholds
- **Exploration Challenges**: Hidden spot discovery
- **Technical Challenges**: Precision requirements
- **Line Challenges**: Specific route completion

### Strategy Tips
- Group similar challenges
- Use custom bike setups for specific challenges
- Learn challenge spawn locations
- Practice difficult sections in replay mode
- Optimize for consistency over perfection

## Replay System Usage

The replay editor is a learning tool:
- **Analyze Failed Attempts**: Understand rotation issues
- **Study Lines**: Watch successful runs
- **Camera Angles**: Spot hidden shortcuts
- **Speed Analysis**: Optimize pump timing
- **Combo Timing**: Perfect trick sequences

## Score Maximization

### Multiplier Management
- Maintain combos longer
- Integrate high-value spots
- Chain unique tricks (no repeats)
- Use transfer bonuses
- Exploit special zones

### High-Score Runs
1. Plan complete routes
2. Memorize trick sequences
3. Identify bail recovery points
4. Practice sections individually
5. String together when confident

## Map-Specific Techniques

### Skate Park
- Flow-oriented loops
- Bowl chain opportunities
- Rail-to-bowl transfers

### Rooftop Areas
- Gap management critical
- Height advantage usage
- Risk vs reward assessment

### Street Sections
- Traffic navigation (if applicable)
- Urban obstacle chaining
- Wallride connections

### Construction Zones
- Vertical opportunities
- Scaffolding rail chains
- Unique transfer lines

## Customization for Performance

### Bike Setup Impact
- Weight affects handling
- Gear ratios influence speed
- Visual customization for personal style
- Test different setups per map

## Practice Routines

**Daily Warm-up** (15 minutes):
1. 5 minutes free ride
2. 5 minutes combo practice
3. 5 minutes challenge attempts

**Skill Development** (30 minutes):
1. Focus on one trick type
2. Practice specific map section
3. Attempt high-score runs

**Challenge Completion** (60 minutes):
1. Target 5-10 challenges
2. Master required techniques
3. Grind until completion
```

### 3. Characters Page (`/characters/`)

**Content**:

```markdown
# Character Customization

Street Dog BMX offers deep character customization created by BMX riders for BMX riders. Every player can create a unique rider identity.

## Customization Categories

### Appearance
- **Hairstyles**: Multiple hair options and colors
- **Facial Features**: Face shape variations
- **Tattoos**: Various tattoo placements and designs
- **Skin Tone**: Full range of options

### Clothing

#### Headwear
- Baseball caps
- Beanies
- Helmets (various designs)
- Bare head option

#### Tops
- T-shirts (various graphics)
- Hoodies
- Tank tops
- Long sleeves
- Jersey styles

#### Bottoms
- Jeans (various cuts)
- Shorts
- Track pants
- Joggers

#### Footwear
- BMX-specific shoes
- Sneakers
- Skate shoes
- Various brands and colors

#### Accessories
- Gloves
- Knee pads
- Elbow pads
- Glasses/sunglasses
- Jewelry

## Unlocking Options

Customization options are unlocked through:
- **Completing Challenges**: 270+ challenges reward unlocks
- **Score Achievements**: Hit score milestones
- **Map Exploration**: Find hidden spots
- **Game Progress**: Natural progression unlocks

## Style Tips

- **Classic BMX**: Traditional rider look with protective gear
- **Street Style**: Urban clothing, minimal protection
- **Pro Rider**: Sponsored look with matching gear
- **Unique Character**: Mix styles for personal identity

## Creating Your Rider

1. **Start with Base**: Choose body type and skin tone
2. **Face & Hair**: Define facial features and hairstyle
3. **Add Details**: Tattoos and accessories
4. **Clothing**: Top-to-bottom outfit selection
5. **Final Touches**: Fine-tune colors and details

## Community Showcase

[Under Construction - Community submissions coming soon]

## Tips

- Experiment with different combinations
- Unlock more options through gameplay
- Match bike and rider aesthetics
- Update look as you progress
- Screenshot your favorite setups
```

### 4. Builds Page (`/builds/`)

**Content**:

```markdown
# Bike Builds Guide

In Street Dog BMX, you can customize nearly every aspect of your bike, right down to the spokes and chain. Build your dream BMX machine.

## Customization Components

### Frame
- **Frame Type**: Street, Park, Flatland styles
- **Frame Color**: Full color palette
- **Material Finish**: Matte, Gloss, Metallic
- **Frame Size**: Affects handling characteristics

### Handlebars
- **Bar Height**: Rise variations
- **Bar Width**: Narrow to wide options
- **Bar Style**: T-bars, four-piece, two-piece
- **Color/Finish**: Match or contrast frame

### Wheels

#### Rims
- **Rim Type**: Various spoke patterns
- **Rim Color**: Full customization
- **Rim Size**: 20" standard with variations

#### Tires
- **Tread Pattern**: Street, park, all-terrain
- **Tire Color**: Classic black or colored sidewalls
- **Tire Width**: Slim to wide options

#### Spokes
- **Spoke Color**: Individual spoke customization
- **Spoke Pattern**: Cross-lacing styles
- **Spoke Count**: Performance variations

### Drivetrain

#### Cranks
- **Crank Length**: 170mm-175mm options
- **Crank Style**: Two-piece, three-piece
- **Crank Color**: Match or contrast
- **Sprocket Size**: Gear ratio options

#### Chain
- **Chain Color**: Full color range (unique feature!)
- **Chain Style**: Standard, half-link

#### Pedals
- **Pedal Type**: Platform styles
- **Pedal Color**: Match or contrast
- **Pin Configuration**: Grip variations

### Seat & Post
- **Seat Style**: Slim, pivotal, combo
- **Seat Color**: Full range
- **Post Height**: Adjustable
- **Post Color**: Coordination options

### Pegs
- **Peg Configuration**: Front, back, both, none
- **Peg Length**: Short to long
- **Peg Color**: Color matching
- **Material**: Plastic or steel appearance

## Build Recipes

### All-Rounder Build
**Purpose**: Balanced for all maps and challenges

- Frame: Medium weight, neutral geometry
- Bars: Mid-height for control
- Tires: Medium width all-terrain
- Gearing: Balanced ratio
- Pegs: Full setup (4 pegs)

**Best For**: Beginners, general play, challenge completion

### Speed Demon Build
**Purpose**: Maximum speed for score runs

- Frame: Lightweight, aggressive geometry
- Bars: Low profile for aerodynamics
- Tires: Narrow street tires
- Gearing: Tall ratio for top speed
- Pegs: Minimal or none

**Best For**: High score attempts, racing, speed challenges

### Grind Machine Build
**Purpose**: Optimized for rail and ledge tricks

- Frame: Sturdy mid-weight
- Bars: Higher rise for leverage
- Tires: Medium width for stability
- Gearing: Medium ratio for control
- Pegs: Full peg setup, longer length

**Best For**: Grind challenges, technical lines, rail sections

### Park Flow Build
**Purpose**: Skate park and bowl riding

- Frame: Park-specific geometry
- Bars: Higher rise for airs
- Tires: Wider for transition grip
- Gearing: Short ratio for quick acceleration
- Pegs: Optional (2 pegs for variety)

**Best For**: Skate park map, bowl combos, air tricks

### Street Tech Build
**Purpose**: Technical street riding

- Frame: Responsive geometry
- Bars: Medium height for balance
- Tires: Street-specific tread
- Gearing: Balanced for tricks and speed
- Pegs: Full setup

**Best For**: Urban maps, wallrides, technical gaps

## Color Schemes

### Monochrome
All components in shades of one color (sleek, professional)

### Contrast
Frame and major components in contrasting colors (bold, visible)

### Gradient
Colors that flow from front to back (unique, artistic)

### Classic
Black frame, chrome components, minimal color (timeless)

### Wild
Maximum color variety (expressive, fun)

## Unlocking Parts

Bike parts unlock through:
- Challenge completion
- Score milestones
- Map exploration
- Secret spot discovery
- Progression achievements

## Build Sharing

[Under Construction - Community build sharing coming soon]

## Pro Tips

- Test builds on each map
- Adjust for play style
- Visual customization doesn't affect performance significantly
- Save multiple builds for different challenges
- Experiment with chain colors (unique feature!)
- Match bike to rider aesthetic
```

### 5. Maps Page (`/maps/`)

**Content**:

```markdown
# Maps Guide

Street Dog BMX features six massive handcrafted maps designed for exploration, creativity, and technical mastery. Each environment rewards experimentation and skill.

## Map Overview

All six maps are designed with:
- Multiple elevation levels
- Hidden spot discovery opportunities
- Varied terrain (rails, ramps, wallrides, bowls, gaps)
- Challenge objectives scattered throughout
- Secret areas requiring exploration
- Interconnected lines for combo building

## Map Categories

### The Skate Park
**Difficulty**: Beginner-Friendly  
**Size**: Medium  
**Focus**: Flow and fundamentals

**Features**:
- Bowl sections
- Quarter pipes
- Rail arrays
- Flat areas for practice
- Safe environment for learning

**Best For**:
- Learning basic mechanics
- Practicing tricks in controlled environment
- Building initial combos
- Tutorial completion
- Warm-up sessions

**Hidden Spots**: 5-7 discoverable locations  
**Challenges**: 30-40 objectives

### Urban Streets
**Difficulty**: Intermediate  
**Size**: Large  
**Focus**: Street riding and tech tricks

**Features**:
- Stair sets with rails
- Ledges and curbs
- Street gaps
- Wallride opportunities
- Urban architecture

**Best For**:
- Street-style lines
- Technical grind sequences
- Gap combinations
- Realistic BMX feeling
- Score challenges

**Hidden Spots**: 10-15 discoverable locations  
**Challenges**: 40-50 objectives

### Rooftop Run
**Difficulty**: Advanced  
**Size**: Medium-Large  
**Focus**: High-risk gaps and air tricks

**Features**:
- Building rooftops
- Massive gaps
- Vertical drops
- Unique vantage points
- High-consequence fails

**Best For**:
- Big air tricks
- Long-distance gaps
- High score attempts
- Advanced players
- Spectacular replays

**Hidden Spots**: 8-12 discoverable locations  
**Challenges**: 35-45 objectives

### Construction Zone
**Difficulty**: Intermediate-Advanced  
**Size**: Large  
**Focus**: Vertical variation and exploration

**Features**:
- Scaffolding rails
- Multi-level structures
- Construction equipment obstacles
- Unique transfer opportunities
- Industrial aesthetic

**Best For**:
- Creative line building
- Height variation combos
- Exploration rewards
- Unique trick opportunities
- Challenge variety

**Hidden Spots**: 12-18 discoverable locations  
**Challenges**: 45-55 objectives

### Downtown District
**Difficulty**: Intermediate  
**Size**: Extra Large  
**Focus**: Open-world style exploration

**Features**:
- Connected street sections
- Plaza areas
- Multiple districts
- Diverse spot types
- Long combo potential

**Best For**:
- Extended combo runs
- Free exploration
- Varied challenge types
- Marathon sessions
- Complete lines

**Hidden Spots**: 15-20 discoverable locations  
**Challenges**: 50-60 objectives

### Secret Compound
**Difficulty**: Expert  
**Size**: Medium  
**Focus**: Technical mastery

**Features**:
- High-difficulty spots
- Technical lines
- Precision requirements
- Expert-level challenges
- Unique obstacles

**Best For**:
- Expert players
- Technical showcase
- High-score competition
- Mastery demonstration
- Ultimate challenges

**Hidden Spots**: 8-10 discoverable locations  
**Challenges**: 30-40 difficult objectives

## Map Exploration Tips

### First Visit Strategy
1. **Survey from High Points**: Get overview of layout
2. **Follow Natural Lines**: Let terrain guide initial exploration
3. **Mark Interesting Spots**: Mental notes of areas to return to
4. **Complete Easy Challenges**: Build familiarity
5. **Discover Secrets**: Look for unusual paths

### Hidden Spot Discovery
- Check behind buildings
- Look for unusual ramps or paths
- Follow lines that seem "too perfect"
- Explore edges of map boundaries
- Try seemingly impossible gaps

### Challenge Optimization
- Group challenges by map area
- Complete similar challenges together
- Use map knowledge to plan efficient routes
- Return to maps as skills improve
- Track completion percentage

## Map-Specific Records

[Under Construction - Leaderboard integration coming soon]

## Community Routes

[Under Construction - Player-submitted lines coming soon]

## Navigation Tips

- Each map has distinct landmarks
- Learn spawn point locations
- Memorize challenge positions
- Note grind rail networks
- Map gap connections mentally
```

### 6. Tools Page (`/tools/score-calculator/`)

**Content**:

```markdown
# Score Calculator

[Interactive Tool - Under Construction]

## How Scoring Works

### Base Trick Points
Each trick has a base point value:
- Simple tricks: 100-500 points
- Intermediate tricks: 500-1,500 points
- Advanced tricks: 1,500-3,000 points
- Expert tricks: 3,000-5,000 points

### Combo Multiplier
Your combo multiplier increases with:
- Number of tricks in combo
- Trick variety (no repeats bonus)
- Special location bonuses
- Clean landings

**Multiplier Formula**:
```
Base Multiplier = 1.0
Each Trick = +0.2x
Variety Bonus = +0.5x (every 5 unique tricks)
Special Spot = +1.0x
Clean Landing = Multiplier maintained
Crash = Combo lost
```

### Special Bonuses
- **Gap Bonus**: +500-2,000 per gap
- **Transfer Bonus**: +300-1,000 per transfer
- **Wallride Bonus**: +200-800
- **Hidden Spot Bonus**: +1,000-5,000
- **Manual Extension**: +50 per second
- **Grind Extension**: +100 per second

## Calculator Tool

**Coming Soon**: Enter your combo sequence to calculate estimated score!

### Planned Features
- Trick sequence input
- Automatic multiplier calculation
- Gap/bonus integration
- Combo time estimation
- Score prediction
- Line optimization suggestions

## High Score Tips

1. **Maximize Combo Length**: More tricks = higher multiplier
2. **Avoid Repeats**: Variety bonus is significant
3. **Use Special Spots**: 1.0x multiplier boost is huge
4. **Chain Gaps**: Each gap adds substantial points
5. **Extend Manuals/Grinds**: Free points over time
6. **Land Clean**: Preserve that multiplier!

## Score Brackets

- **Beginner**: 0-10,000
- **Intermediate**: 10,000-25,000
- **Advanced**: 25,000-50,000
- **Expert**: 50,000-100,000
- **Master**: 100,000-250,000
- **Legend**: 250,000+

[Calculator interface will be built here]
```

### 7. Official Page (`/official/`)

**Content**:

```markdown
# Official Links & Resources

## Game Information

### Developer
**Yeah Us! Games**  
Independent game developer focused on extreme sports gaming

**Lead Developer**: Adam Hunt  
BMX rider and gaming enthusiast who created Street Dog BMX as a passion project over 4 years

### Publisher
**Null Games**  
Supporting indie sports titles

## Official Platforms

### Steam Store
**Release Date**: January 14, 2026  
**Price**: Check Steam for current pricing and sales  
**Platform**: PC (Windows 7 64-bit or higher)  
**Link**: [Steam Store Page](https://store.steampowered.com/app/2707870/Streetdog_BMX/)

**System Requirements**:
- **OS**: Windows 7 64-bit
- **Processor**: Intel Core i3 Dual Core
- **Memory**: 8 GB RAM
- **Graphics**: Compatible graphics card
- **Storage**: TBD GB available space

### Console Releases
- **PlayStation 4**: Available
- **Xbox One**: Available
- **Nintendo Switch**: [Status TBD - check official sources]

## Community Channels

### Discord Server
Join the Street Dog BMX community for:
- Game discussion
- Tips and strategies
- Bug reports
- Developer interaction
- Multiplayer coordination (if applicable)
- Replay sharing

**[Discord Link - Check official Steam page for current invite]**

### Social Media

**Instagram**: [@yeahusgames](https://instagram.com/yeahusgames)
- Development updates
- Community highlights
- Trick showcases
- Behind-the-scenes content

**TikTok**: [@yeahusgames](https://tiktok.com/@yeahusgames)
- Short gameplay clips
- Tips and tricks
- Community features

## Press & Media

### Featured Coverage
- PAX West 2024 showcase
- X Games 2024 presence
- Multiple gaming outlet reviews
- Content creator coverage

### Review Summary
Described as "the spiritual successor to Dave Mirra and Tony Hawk games" with praise for:
- Arcade-perfect physics
- Deep trick system
- Replayability
- "One more go" addictiveness
- Value proposition

## Support

### Technical Support
- Check Steam community forums
- Discord server #support channel
- Developer direct contact (Discord)

### Content Creators
Streaming and content creation is encouraged! The game's replay system supports content creation.

## Updates & Patches

[Under Construction - Patch notes will be posted here]

### Planned Features
- Check official channels for roadmap
- Community feedback integration
- Potential DLC/expansions

## FAQ

**Q: Is there multiplayer?**  
A: Check official sources for multiplayer status and features

**Q: Will there be console-specific features?**  
A: All platforms receive the same core experience

**Q: Are mods supported?**  
A: Check Steam Workshop and official stance on modding

**Q: DLC plans?**  
A: Follow official channels for announcements

## Credits

Developed over 4 years by Yeah Us! Games, with input from the BMX riding community to ensure authentic BMX gameplay and culture representation.

---

**Disclaimer**: This is a fan-created wiki. For official information, always refer to the developer's official channels.
```

### 8. Legal Page (`/legal/`)

**Content**:

```markdown
# Legal & Copyright Notice

## Copyright Disclaimer

**streetdogbmx.wiki** is a fan-created, unofficial wiki and information resource for the video game Street Dog BMX.

### Ownership
All rights to Street Dog BMX, including but not limited to:
- Game title and branding
- Game assets and artwork
- Character designs
- Map designs
- Gameplay mechanics
- Logos and trademarks

...are owned by **Yeah Us! Games** and their respective rights holders.

### Fair Use Statement

This website operates under Fair Use principles for:
- Educational commentary and information
- Game guides and tutorials
- Critical analysis
- News reporting
- Transformative content creation

### Content Usage

#### Our Content
Original content created for this wiki (guides, analysis, text descriptions) is:
- © 2026 streetdogbmx.wiki
- Available under Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)
- May be shared with attribution

#### Game Content
Game screenshots, artwork, and assets used on this site:
- Belong to Yeah Us! Games
- Used for informational purposes only
- Not claimed as our own
- Will be removed upon request from rights holders

### User-Generated Content

Content submitted by community members:
- Must not infringe on copyright
- Must be original or properly attributed
- May be moderated or removed
- Responsibility lies with submitter

### External Links

This website contains links to:
- Official game stores (Steam, PlayStation Store, Microsoft Store)
- Social media accounts
- Community resources
- News articles

We are not responsible for content on external websites.

### Monetization Disclaimer

This wiki:
- Is a non-commercial fan resource
- Does not sell game keys or in-game items
- May feature affiliate links (if applicable, clearly marked)
- Any advertising helps cover hosting costs

### DMCA Policy

If you believe content on this site infringes your copyright:
1. Contact us with specific details
2. Provide proof of ownership
3. We will respond within 48 hours
4. Content will be removed if infringement is confirmed

**Contact**: [Contact information TBD]

### Privacy Notice

This website:
- Does not collect personal data beyond standard web analytics
- Uses Cloudflare infrastructure (see Cloudflare Privacy Policy)
- Does not require user accounts (currently)
- Complies with GDPR and privacy regulations

### Trademark Notice

"Street Dog BMX", "Streetdog BMX", and related marks are trademarks or registered trademarks of Yeah Us! Games. Use of these trademarks does not imply endorsement.

### Endorsement Disclaimer

This website is **NOT**:
- Officially affiliated with Yeah Us! Games
- Endorsed by the game developers
- An official information source
- Authorized to represent the game

For official information, visit:
- [Steam Store Page](https://store.steampowered.com/app/2707870/Streetdog_BMX/)
- Official social media channels

### Changes to This Notice

This legal notice may be updated periodically. Last updated: January 18, 2026

### Contact

For legal inquiries, copyright concerns, or takedown requests:  
**[Contact method TBD - Email or contact form]**

### Limitation of Liability

This website is provided "as is" without warranties. We are not liable for:
- Errors or omissions in content
- Technical issues or downtime
- Actions taken based on information provided
- Third-party content or links

### Jurisdiction

This website operates under United States law. Legal disputes will be resolved under applicable US jurisdiction.

---

**Thank you for supporting fan communities and respecting intellectual property rights!**

Last Updated: January 18, 2026
```

## Data Structure (JSON Files)

### `/src/data/tricks.json`

```json
{
  "airTricks": [
    {
      "id": "360-spin",
      "name": "360 Spin",
      "category": "Air",
      "difficulty": "Beginner",
      "basePoints": 250,
      "description": "Complete 360-degree rotation",
      "input": "Right stick rotate"
    },
    {
      "id": "backflip",
      "name": "Backflip",
      "category": "Air",
      "difficulty": "Intermediate",
      "basePoints": 800,
      "description": "Backward rotation flip",
      "input": "Right stick down"
    },
    {
      "id": "tailwhip",
      "name": "Tailwhip",
      "category": "Air",
      "difficulty": "Intermediate",
      "basePoints": 600,
      "description": "Rotate bike frame 360 degrees",
      "input": "Right stick diagonal"
    },
    {
      "id": "barspin",
      "name": "Barspin",
      "category": "Air",
      "difficulty": "Intermediate",
      "basePoints": 500,
      "description": "Spin handlebars 360 degrees",
      "input": "Right stick left/right"
    },
    {
      "id": "double-backflip",
      "name": "Double Backflip",
      "category": "Air",
      "difficulty": "Advanced",
      "basePoints": 2000,
      "description": "Two consecutive backflips",
      "input": "Right stick down (hold)"
    },
    {
      "id": "720-spin",
      "name": "720 Spin",
      "category": "Air",
      "difficulty": "Advanced",
      "basePoints": 1500,
      "description": "Two full rotations",
      "input": "Right stick rotate (extended)"
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
      "input": "Approach rail at angle"
    },
    {
      "id": "smith-grind",
      "name": "Smith Grind",
      "category": "Grind",
      "difficulty": "Intermediate",
      "basePoints": 450,
      "description": "Back peg and front tire on rail",
      "input": "Specific rail position"
    },
    {
      "id": "icepick-grind",
      "name": "Icepick Grind",
      "category": "Grind",
      "difficulty": "Advanced",
      "basePoints": 700,
      "description": "Single back peg balance",
      "input": "Technical balance required"
    },
    {
      "id": "double-peg",
      "name": "Double Peg Grind",
      "category": "Grind",
      "difficulty": "Beginner",
      "basePoints": 300,
      "description": "Both pegs on rail",
      "input": "Standard rail approach"
    },
    {
      "id": "crankslide",
      "name": "Crankslide",
      "category": "Grind",
      "difficulty": "Advanced",
      "basePoints": 900,
      "description": "Grind on crank arm",
      "input": "Special angle approach"
    }
  ],
  "manualTricks": [
    {
      "id": "manual",
      "name": "Manual",
      "category": "Ground",
      "difficulty": "Beginner",
      "basePoints": 50,
      "description": "Back wheel balance",
      "input": "B/Circle button",
      "pointsPerSecond": 50
    },
    {
      "id": "nose-manual",
      "name": "Nose Manual",
      "category": "Ground",
      "difficulty": "Intermediate",
      "basePoints": 80,
      "description": "Front wheel balance",
      "input": "Modified stick position",
      "pointsPerSecond": 80
    }
  ]
}
```

### `/src/data/maps.json`

```json
{
  "maps": [
    {
      "id": "skate-park",
      "name": "The Skate Park",
      "difficulty": "Beginner",
      "size": "Medium",
      "focus": "Flow and fundamentals",
      "features": ["Bowls", "Quarter pipes", "Rail arrays", "Flat practice areas"],
      "hiddenSpots": 6,
      "challengeCount": 35,
      "bestFor": ["Learning mechanics", "Combo practice", "Tutorial", "Warm-up"],
      "description": "Safe environment perfect for mastering the basics"
    },
    {
      "id": "urban-streets",
      "name": "Urban Streets",
      "difficulty": "Intermediate",
      "size": "Large",
      "focus": "Street riding",
      "features": ["Stair sets", "Ledges", "Street gaps", "Wallrides"],
      "hiddenSpots": 12,
      "challengeCount": 45,
      "bestFor": ["Street lines", "Technical grinds", "Gap combos"],
      "description": "Authentic street BMX environment"
    },
    {
      "id": "rooftop-run",
      "name": "Rooftop Run",
      "difficulty": "Advanced",
      "size": "Medium-Large",
      "focus": "High-risk gaps",
      "features": ["Building rooftops", "Massive gaps", "Vertical drops"],
      "hiddenSpots": 10,
      "challengeCount": 40,
      "bestFor": ["Big air", "Long gaps", "High scores"],
      "description": "High-altitude extreme riding"
    },
    {
      "id": "construction-zone",
      "name": "Construction Zone",
      "difficulty": "Intermediate-Advanced",
      "size": "Large",
      "focus": "Vertical variation",
      "features": ["Scaffolding", "Multi-level structures", "Industrial obstacles"],
      "hiddenSpots": 15,
      "challengeCount": 50,
      "bestFor": ["Creative lines", "Exploration", "Height variation"],
      "description": "Industrial playground with unique opportunities"
    },
    {
      "id": "downtown-district",
      "name": "Downtown District",
      "difficulty": "Intermediate",
      "size": "Extra Large",
      "focus": "Open exploration",
      "features": ["Connected streets", "Plaza areas", "Multiple districts"],
      "hiddenSpots": 18,
      "challengeCount": 55,
      "bestFor": ["Extended combos", "Free exploration", "Marathon sessions"],
      "description": "Expansive urban environment"
    },
    {
      "id": "secret-compound",
      "name": "Secret Compound",
      "difficulty": "Expert",
      "size": "Medium",
      "focus": "Technical mastery",
      "features": ["High-difficulty spots", "Technical lines", "Precision sections"],
      "hiddenSpots": 9,
      "challengeCount": 35,
      "bestFor": ["Expert players", "Technical showcase", "Mastery"],
      "description": "Ultimate challenge for BMX masters"
    }
  ]
}
```

### `/src/data/builds.json`

```json
{
  "builds": [
    {
      "id": "all-rounder",
      "name": "All-Rounder Build",
      "purpose": "Balanced for all maps and challenges",
      "difficulty": "Beginner",
      "components": {
        "frame": "Medium weight, neutral geometry",
        "bars": "Mid-height for control",
        "tires": "Medium width all-terrain",
        "gearing": "Balanced ratio",
        "pegs": "Full setup (4 pegs)"
      },
      "bestFor": ["Beginners", "General play", "Challenge completion"],
      "pros": ["Versatile", "Forgiving", "Good learning platform"],
      "cons": ["No specialization", "Not optimal for specific challenges"]
    },
    {
      "id": "speed-demon",
      "name": "Speed Demon Build",
      "purpose": "Maximum speed for score runs",
      "difficulty": "Intermediate",
      "components": {
        "frame": "Lightweight, aggressive geometry",
        "bars": "Low profile",
        "tires": "Narrow street tires",
        "gearing": "Tall ratio",
        "pegs": "Minimal or none"
      },
      "bestFor": ["High scores", "Speed challenges", "Racing"],
      "pros": ["Fast", "Responsive", "Score optimization"],
      "cons": ["Less stable", "Harder to control", "Limited grinding"]
    },
    {
      "id": "grind-machine",
      "name": "Grind Machine Build",
      "purpose": "Optimized for rails and ledges",
      "difficulty": "Intermediate",
      "components": {
        "frame": "Sturdy mid-weight",
        "bars": "Higher rise for leverage",
        "tires": "Medium width for stability",
        "gearing": "Medium ratio",
        "pegs": "Full setup, longer length"
      },
      "bestFor": ["Grind challenges", "Technical lines", "Rail sections"],
      "pros": ["Excellent grind stability", "Good leverage", "Rail mastery"],
      "cons": ["Slower", "Less air performance"]
    },
    {
      "id": "park-flow",
      "name": "Park Flow Build",
      "purpose": "Skate park and bowl riding",
      "difficulty": "Beginner-Intermediate",
      "components": {
        "frame": "Park-specific geometry",
        "bars": "Higher rise for airs",
        "tires": "Wider for grip",
        "gearing": "Short ratio for acceleration",
        "pegs": "Optional (2 pegs)"
      },
      "bestFor": ["Skate park map", "Bowls", "Air tricks"],
      "pros": ["Great in transitions", "Good air control", "Flow-oriented"],
      "cons": ["Less street-focused", "Not ideal for long grinds"]
    },
    {
      "id": "street-tech",
      "name": "Street Tech Build",
      "purpose": "Technical street riding",
      "difficulty": "Advanced",
      "components": {
        "frame": "Responsive geometry",
        "bars": "Medium height",
        "tires": "Street-specific tread",
        "gearing": "Balanced",
        "pegs": "Full setup"
      },
      "bestFor": ["Urban maps", "Wallrides", "Technical gaps"],
      "pros": ["Perfect street feel", "Technical capability", "Authentic"],
      "cons": ["Requires skill", "Less forgiving"]
    }
  ]
}
```

### `/src/data/site.json`

```json
{
  "site": {
    "name": "Street Dog BMX Wiki",
    "tagline": "Your Ultimate Guide to Street Dog BMX",
    "description": "Complete guides, tricks, maps, and builds for Street Dog BMX",
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
    "genre": ["Sports", "Indie", "Arcade"],
    "steamAppId": "2707870"
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
      "label": "Maps",
      "href": "/maps/",
      "icon": "map"
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
    ]
  },
  "seo": {
    "defaultTitle": "Street Dog BMX Wiki - Complete Guide & Database",
    "titleTemplate": "%s | Street Dog BMX Wiki",
    "defaultDescription": "The ultimate Street Dog BMX guide featuring tricks, combos, maps, bike builds, and tips. Master this arcade BMX game on PC, PS4, and Xbox One.",
    "keywords": [
      "streetdog bmx",
      "street dog bmx guide",
      "bmx game",
      "tricks guide",
      "bmx maps",
      "bike builds",
      "steam bmx game",
      "tony hawk bmx",
      "dave mirra successor"
    ],
    "ogImage": "/og-image.jpg",
    "twitterCard": "summary_large_image"
  }
}
```

## Component Architecture

### Core Components

#### 1. `Layout.astro` - Base Layout
```astro
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
import SEO from '../components/SEO.astro';

interface Props {
  title: string;
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
<body class="min-h-screen bg-base-100">
  <Header />
  <main class="container mx-auto px-4 py-8">
    <slot />
  </main>
  <Footer />
</body>
</html>
```

#### 2. `Header.astro` - Navigation
```astro
---
import { Menu, X } from 'lucide-astro';
import siteData from '../data/site.json';

const { navigation } = siteData;
const currentPath = Astro.url.pathname;
---

<header class="navbar bg-base-200 sticky top-0 z-50 shadow-lg">
  <div class="navbar-start">
    <a href="/" class="btn btn-ghost text-xl">
      🚲 Street Dog BMX Wiki
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      {navigation.map(item => (
        <li>
          {item.children ? (
            <details>
              <summary>{item.label}</summary>
              <ul class="p-2 bg-base-200 rounded-t-none">
                {item.children.map(child => (
                  <li><a href={child.href}>{child.label}</a></li>
                ))}
              </ul>
            </details>
          ) : (
            <a href={item.href} class={currentPath === item.href ? 'active' : ''}>
              {item.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
  <div class="navbar-end">
    <div class="dropdown dropdown-end lg:hidden">
      <label tabindex="0" class="btn btn-ghost">
        <Menu />
      </label>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52 mt-4">
        {navigation.map(item => (
          <li><a href={item.href}>{item.label}</a></li>
        ))}
      </ul>
    </div>
  </div>
</header>
```

#### 3. `SEO.astro` - SEO Component
```astro
---
import siteData from '../data/site.json';

interface Props {
  title: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
}

const { title, description, keywords, ogImage } = Astro.props;
const { seo, site } = siteData;

const fullTitle = title ? `${title} | ${site.name}` : site.name;
const metaDescription = description || seo.defaultDescription;
const metaKeywords = keywords?.join(', ') || seo.keywords.join(', ');
const metaImage = ogImage || seo.ogImage;
const canonicalURL = new URL(Astro.url.pathname, site.url);
---

<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="generator" content={Astro.generator} />

<title>{fullTitle}</title>
<meta name="description" content={metaDescription} />
<meta name="keywords" content={metaKeywords} />
<link rel="canonical" href={canonicalURL} />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content={canonicalURL} />
<meta property="og:title" content={fullTitle} />
<meta property="og:description" content={metaDescription} />
<meta property="og:image" content={new URL(metaImage, site.url)} />
<meta property="og:site_name" content={site.name} />

<!-- Twitter -->
<meta name="twitter:card" content={seo.twitterCard} />
<meta name="twitter:title" content={fullTitle} />
<meta name="twitter:description" content={metaDescription} />
<meta name="twitter:image" content={new URL(metaImage, site.url)} />

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />

<!-- Robots -->
<meta name="robots" content="index, follow" />
```

## Astro Configuration

### `astro.config.mjs`
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

### `tailwind.config.mjs`
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
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
        },
      },
    ],
  },
};
```

### `package.json`
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

## MVP TODO List

### Phase 1: Setup & Core Structure (Day 1)
- [ ] Initialize Astro project
- [ ] Install dependencies (Tailwind, DaisyUI, Lucide)
- [ ] Create folder structure
- [ ] Set up Astro config
- [ ] Configure Tailwind + DaisyUI theme
- [ ] Create base Layout component
- [ ] Create Header component
- [ ] Create Footer component
- [ ] Create SEO component
- [ ] Add JSON data files

### Phase 2: Content Pages (Days 2-3)
- [ ] Build Home page with hero and quick links
- [ ] Create Guides index page
- [ ] Create Beginner's Guide page
- [ ] Create Tricks & Combos page
- [ ] Create Advanced Techniques page
- [ ] Create Characters page
- [ ] Create Builds page
- [ ] Create Maps page
- [ ] Create Tools/Calculator placeholder page
- [ ] Create Official page
- [ ] Create Legal page

### Phase 3: Components & Styling (Day 4)
- [ ] Create GuideCard component
- [ ] Create MapCard component
- [ ] Create BuildCard component
- [ ] Style all pages with DaisyUI
- [ ] Implement responsive design
- [ ] Add icons throughout site
- [ ] Create 404 page

### Phase 4: SEO & Polish (Day 5)
- [ ] Optimize all page SEO metadata
- [ ] Add structured data (JSON-LD)
- [ ] Create sitemap.xml
- [ ] Create robots.txt
- [ ] Optimize images (if any)
- [ ] Test all internal links
- [ ] Verify mobile responsiveness
- [ ] Add loading performance optimizations

### Phase 5: Testing & Deployment (Day 6)
- [ ] Test all pages
- [ ] Verify SEO with tools
- [ ] Check Lighthouse scores
- [ ] Build for production
- [ ] Test build locally
- [ ] Prepare for Cloudflare deployment
- [ ] Document deployment steps

## SEO Optimization Strategy

### Target Keywords by Page
- **Home**: "streetdog bmx", "streetdog bmx wiki", "streetdog bmx guide"
- **Beginner Guide**: "streetdog bmx beginner guide", "how to play streetdog bmx"
- **Tricks**: "streetdog bmx tricks", "streetdog bmx combos", "streetdog bmx controls"
- **Maps**: "streetdog bmx maps", "streetdog bmx locations"
- **Builds**: "streetdog bmx bike builds", "best bmx build streetdog"
- **Official**: "streetdog bmx steam", "streetdog bmx ps4", "streetdog bmx xbox"

### Technical SEO
- Clean URL structure (no file extensions)
- Mobile-first responsive design
- Fast loading (static site generation)
- Proper heading hierarchy (H1-H6)
- Internal linking between pages
- Alt text for images (when added)
- Schema.org markup for game data
- XML sitemap
- Optimized meta descriptions (150-160 chars)

### Content SEO
- Long-form comprehensive guides (1000+ words)
- Natural keyword integration
- Semantic HTML structure
- FAQ sections (future addition)
- Regular content updates
- User-focused content matching search intent

## Future Enhancements (Post-MVP)

### Phase 2 Features
- [ ] Add Chinese language (zh-CN)
- [ ] Add more languages
- [ ] Interactive score calculator tool
- [ ] Community build submissions
- [ ] Comment system
- [ ] User accounts (optional)
- [ ] Leaderboard integration (if API available)
- [ ] Search functionality
- [ ] Dark/light theme toggle
- [ ] Video embed guides
- [ ] Screenshot gallery
- [ ] Mod support page (if applicable)

### Content Expansion
- [ ] Weekly tips and tricks
- [ ] Patch note tracking
- [ ] Meta build analysis
- [ ] Pro player profiles
- [ ] Community spotlights
- [ ] Event calendar
- [ ] Developer interviews
- [ ] Achievement guide

## Notes

- All content is based on publicly available information about Street Dog BMX
- Website operates as educational/informational resource under fair use
- Official links and proper attribution included throughout
- No copyrighted assets used without permission
- Community-focused, non-commercial approach
- Ready for easy content updates via JSON files
- Designed for easy i18n expansion
- Cloudflare Workers compatible (static site)
- No database required = fast and cheap hosting
- SEO-optimized from the ground up

***

**End of design.md**

This MVP can be built and deployed in approximately 5-6 days of focused work. The modular component structure makes it easy to add more languages and features later. All content is provided and ready to implement. [store.steampowered](https://store.steampowered.com/app/2707870/Streetdog_BMX/)