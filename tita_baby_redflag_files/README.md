# Tita Baby Red Flag Finder 💅🚩

A fun, interactive mobile game that teaches players to identify red flags in relationships through a swipe-based card game. With over **1,200+ scenarios** across three age categories!

## 🎮 Game Overview

Swipe right if you think the scenario is a **RED FLAG** 🚩, swipe left if it's a **GREEN FLAG** ✅. Learn from Tita Baby's sassy wisdom after each choice!

### Player Types
- **Teens** - School drama, puppy love, social media scenarios
- **Young Adult** - Dating apps, work-life, early career, ghosting scenarios
- **Adult** - Marriage, in-laws, finances, parenting scenarios

## 📊 Scenario Count

| Category | Primary Pool | General Backup | Total |
|----------|--------------|----------------|-------|
| Teens | 200 | - | 200 |
| Young Adult | 200 | - | 200 |
| Adult | 200 | - | 200 |
| General Pool | - | 500 | 500 |
| **GRAND TOTAL** | **600** | **500** | **1,100+** |

*Plus ~110 original scenarios = **1,210+ total scenarios!***

## 🎯 Difficulty Levels

| Difficulty | Timer | Red Flag Ratio | Points |
|------------|-------|----------------|--------|
| Easy | 25s | 50% | +15/-30 |
| Medium | 20s | 60% | +10/-50 |
| Hard (Default) | 15s | 70% | +10/-75 |
| Extreme | 10s | 80% | +10/-100 |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Firebase CLI (for deployment)
- Android Studio (for Android builds)
- Xcode (for iOS builds, macOS only)

### Installation

```bash
# Clone the repository
git clone https://github.com/ginhooser-cyber/Tita-Baby-Red-Flag-Finder.git

# Navigate to project directory
cd Tita-Baby-Red-Flag-Finder/tita_baby_redflag_files

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔥 Firebase Deployment

### First-time Setup

```bash
# Login to Firebase
npm run firebase:login

# Initialize Firebase (if not already done)
npm run firebase:init
```

### Deploy to Firebase Hosting

```bash
# Build and deploy
npm run deploy

# Or deploy hosting only
npm run deploy:hosting
```

## 📱 Mobile App Build (Android/iOS)

### Android

```bash
# Build for Android
npm run build:android

# Open in Android Studio
npm run cap:open:android
```

Then in Android Studio:
1. Wait for Gradle sync to complete
2. Build > Generate Signed Bundle / APK
3. Follow the signing wizard

### iOS

```bash
# Build for iOS
npm run build:ios

# Open in Xcode
npm run cap:open:ios
```

Then in Xcode:
1. Select your development team
2. Product > Archive
3. Distribute App

## 📁 Project Structure

```
tita_baby_redflag_files/
├── scenarios/
│   ├── index.ts              # Scenario utilities & exports
│   ├── teensScenarios.ts     # 200 teen scenarios
│   ├── youngAdultScenarios.ts # 200 young adult scenarios
│   ├── adultScenarios.ts     # 200 adult scenarios
│   └── generalPoolScenarios.ts # 500 backup scenarios
├── services/
│   └── geminiService.ts      # AI scenario generation
├── App.tsx                   # Main React component
├── constants.ts              # Game constants & merged scenarios
├── types.ts                  # TypeScript definitions
├── capacitor.config.ts       # Mobile app configuration
├── firebase.json             # Firebase hosting config
├── vite.config.ts            # Vite build config
└── package.json              # Dependencies & scripts
```

## 🎲 How Backup Pool Works

1. When playing a game mode (e.g., TEENS), players first go through the **200 primary scenarios**
2. The system tracks which scenarios have been used in the session
3. Once all 200 are consumed, it automatically pulls from the **500 GENERAL POOL scenarios**
4. This allows players to play **700+ scenarios per mode** before seeing repeats!

### Scenario Functions

```typescript
// Get randomized scenarios for a mode
getRandomizedScenarios(GameMode.TEENS, 50)

// Get single random scenario with tracking
getRandomScenario(GameMode.YOUNG_ADULT)

// Get scenarios with automatic fallback to general pool
getScenariosWithFallback(GameMode.ADULT, 300)

// Get difficulty-weighted scenarios
getDifficultyWeightedScenarios(GameMode.TEENS, 'extreme')

// Get all scenarios for endless mode
getEndlessModeScenarios()

// Reset tracking for new game
resetScenarioTracking()
```

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build and deploy to Firebase |
| `npm run build:android` | Build for Android |
| `npm run build:ios` | Build for iOS |
| `npm run cap:sync` | Sync Capacitor |

## 🔒 Environment Variables

Create a `.env` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

## 🎨 Features

- **Swipe-based gameplay** - Intuitive left/right swiping
- **Tita Baby's Wisdom** - Sassy Filipino advice after each answer
- **Streak System** - Build streaks for bonus badges
- **Lives System** - 3 lives with cooldown/ad recovery
- **Badge Collection** - Unlock achievements as you play
- **Diary Feature** - Personal notes stored locally
- **Red Flag Tekniks** - Learn manipulation tactics (unlocked at 20 streak)
- **Legendary Stories** - Real red flag stories (unlocked at 10 streak)
- **Leaderboard** - Compare with other players (requires nickname)
- **Store** - Buy nickname with in-game points

## 📝 License

Private - All rights reserved.

## 👩‍💻 Developer

Made with 💖 by [launchdaystudio.com](https://launchdaystudio.com)

---

*"Ghorl, mag-isip muna bago mag-swipe!"* - Tita Baby 💅