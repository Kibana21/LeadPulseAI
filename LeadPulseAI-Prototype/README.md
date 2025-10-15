# 🎯 LeadPulseAI - HTML Prototype

> Voice-Enabled AI Lead Nurturing Platform for AIA Singapore

**Status:** Foundation Complete | Ready for Development
**Version:** 1.0 (Prototype)
**Last Updated:** October 15, 2025

---

## 🚀 Quick Start

### Option 1: Open Directly (Simplest)
```bash
# Navigate to the prototype folder
cd LeadPulseAI-Prototype

# Open index.html in your browser
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

### Option 2: Local Server (Recommended)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Then open: http://localhost:8000
```

### Demo Login Credentials
- **Email:** demo@aia.com
- **Password:** demo123
- **Note:** Credentials are pre-filled, just click "Sign In"

---

## 📁 Project Structure

```
LeadPulseAI-Prototype/
├── index.html                 ✅ COMPLETE - Beautiful login page
├── dashboard.html             ⏳ TO BUILD - Main hub
├── calling.html               ⏳ TO BUILD - AI calling center (PRIORITY)
├── lead-profile.html          ⏳ TO BUILD - Sarah Chen detail view
├── demo-mode.html             ⏳ TO BUILD - Guided walkthrough
├── css/
│   ├── global.css            ✅ COMPLETE - Design system
│   └── components.css        ✅ COMPLETE - UI components
├── js/
│   ├── data.js               ✅ COMPLETE - Sarah Chen data
│   ├── app.js                ⏳ TO BUILD - Main logic
│   ├── calling-engine.js     ⏳ TO BUILD - Voice simulation
│   └── voice-synthesizer.js  ⏳ TO BUILD - Web Speech API
└── assets/
    ├── audio/                 ⏳ EMPTY - Add MP3 files
    ├── images/                ⏳ EMPTY - Add images
    └── data/                  ⏳ EMPTY - Add JSON files
```

---

## ✅ What's Already Built

### 1. Complete Design System
- **Global CSS** (`css/global.css`)
  - CSS variables for colors, spacing, typography
  - 50+ utility classes
  - Animation library (fade, slide, pulse, shimmer)
  - Responsive breakpoints

- **Component Library** (`css/components.css`)
  - Buttons (5 variants)
  - Cards (with headers, stats)
  - Badges (7 colors)
  - Forms, Tables, Modals, Tabs
  - Alerts, Tooltips, Toasts
  - Loading states
  - 25+ reusable components

### 2. Login Page (`index.html`)
- Beautiful animated gradient background
- Demo mode launcher
- Role selector (Executive/Manager/Agent)
- Pre-filled credentials
- Fully responsive
- Smooth animations

### 3. Complete Data Layer (`js/data.js`)
- **Sarah Chen Profile:**
  - Lead score: 87/100
  - Conversion probability: 75%
  - Estimated LTV: $63,000
  - 8 touchpoints over 23 days
  - Complete conversation transcripts
  - Behavioral insights
  - Recommended products

- **Dashboard Stats:**
  - Revenue, conversion rates, active calls
  - Live activity feed
  - Campaign data

- **Additional Leads:**
  - Michael Tan, Lisa Wong, David Lim

---

## 🎯 What You Need to Build

### Priority Order:

1. **dashboard.html** (3-4 hours)
   - Main hub with stats, activity feed, hot leads
   - Template provided in IMPLEMENTATION_GUIDE.md

2. **calling.html** (6-8 hours) ⭐ CROWN JEWEL
   - Live AI calling interface
   - Real-time transcript with typewriter effect
   - Waveform visualization
   - Sentiment analysis gauge
   - Voice synthesis (Web Speech API)
   - Most impressive page - focus here!

3. **lead-profile.html** (4-5 hours)
   - Complete Sarah Chen 360° view
   - 6 tabs (Overview, Conversations, Recordings, etc.)
   - Sentiment journey chart
   - Call playback

4. **demo-mode.html** (2-3 hours)
   - Automated walkthrough
   - Auto-navigation with narration
   - Progress indicator

**Total Estimated Time: 18-24 hours**

---

## 📚 Documentation

### Main Documents (in parent folder):

1. **[PROJECT_SUMMARY.md](../PROJECT_SUMMARY.md)**
   - Complete overview of everything
   - Business impact ($159M Year 1 ROI)
   - Build timeline and checklist

2. **[IMPLEMENTATION_GUIDE.md](../IMPLEMENTATION_GUIDE.md)**
   - Step-by-step build instructions
   - Code templates for each page
   - Helper functions
   - Quality checklist

3. **[STRATEGIC_USE_CASE.md](../STRATEGIC_USE_CASE.md)**
   - 67-page executive business case
   - Complete Sarah Chen journey
   - Financial projections
   - Implementation roadmap

4. **[PROTOTYPE_SPECIFICATION.md](../PROTOTYPE_SPECIFICATION.md)**
   - 67-page technical specification
   - UI/UX design system
   - Component specifications
   - Data structures

---

## 🎨 Design System

### Color Palette
```css
--aia-red: #E40521        /* Primary brand color */
--navy-blue: #1B365D      /* Headers, text */
--sky-blue: #0066CC       /* Links, interactive */
--success: #00C853        /* Positive metrics */
--warning: #FF9800        /* Attention needed */
--danger: #F44336         /* Critical, urgent */
--ai-purple: #9333EA      /* AI indicators */
--neon-green: #00FF88     /* Live activity */
```

### Typography
```css
--font-primary: 'Inter', sans-serif
--font-mono: 'Fira Code', monospace
```

### Utility Classes Examples
```html
<div class="card shadow-md rounded-lg p-lg">
    <h3 class="text-navy font-bold mb-md">Card Title</h3>
    <p class="text-medium">Card content...</p>
</div>

<button class="btn btn-primary">Primary Button</button>
<span class="badge badge-success">Success Badge</span>
```

---

## 🔧 Key Features to Implement

### Voice Synthesis (Web Speech API)
```javascript
// In calling.html
function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = speechSynthesis.getVoices();
    const femaleVoice = voices.find(v => v.name.includes('Female'));
    if (femaleVoice) utterance.voice = femaleVoice;
    utterance.rate = 0.95;
    utterance.pitch = 1.1;
    speechSynthesis.speak(utterance);
}
```

### Waveform Animation (CSS-based)
```javascript
// Create animated waveform bars
const waveform = document.getElementById('waveform');
for (let i = 0; i < 50; i++) {
    const bar = document.createElement('div');
    bar.className = 'waveform-bar';
    bar.style.animationDelay = `${i * 0.1}s`;
    waveform.appendChild(bar);
}
```

### Live Transcript Typewriter
```javascript
function typewriterEffect(element, text, speed = 30) {
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}
```

### Count-Up Animation
```javascript
function animateValue(element, start, end, duration) {
    let current = start;
    const increment = (end - start) / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = Math.round(current).toLocaleString();
    }, 16);
}
```

---

## 📊 Using the Data

### Access Sarah Chen's Data
```javascript
// Full profile
console.log(sarahChen);

// Current live call transcript
const currentCall = sarahChen.touchpoints[0];
currentCall.transcript.forEach(line => {
    console.log(`[${line.timestamp}] ${line.name}: ${line.text}`);
});

// Lead score
console.log(sarahChen.leadScore); // 87

// Conversion probability
console.log(sarahChen.conversionProbability); // 75%

// Recommended products
sarahChen.recommendedProducts.forEach(product => {
    console.log(`${product.name} - $${product.premium}/month`);
});
```

### Access Dashboard Stats
```javascript
console.log(dashboardStats.revenueThisMonth); // 12400000
console.log(dashboardStats.conversionRate);   // 52.3
console.log(dashboardStats.activeAICalls);    // 47
```

### Access Live Activity
```javascript
liveActivity.forEach(activity => {
    console.log(`${activity.type}: ${activity.lead}`);
});
```

---

## 🎤 Presentation Mode

### Demo Flow (Recommended 10 minutes):

1. **Start at Login** (30 sec)
   - Show professional branding
   - Click "Launch Interactive Demo"

2. **Demo Mode Auto-Play** (5 min)
   - Let Sarah's journey play automatically
   - Narration explains each step

3. **Live Calling Center** (3 min)
   - Navigate to calling.html
   - Click "Play Live Call"
   - Show real-time transcript, sentiment

4. **Dashboard Impact** (1.5 min)
   - Show aggregate stats
   - Highlight conversion rate improvement

5. **Q&A** (Remainder)
   - Reference STRATEGIC_USE_CASE.md

---

## ✅ Pre-Presentation Checklist

Before showing to executives:

### Technical:
- [ ] All pages load without errors (check console)
- [ ] Navigation works between pages
- [ ] Data populates correctly
- [ ] Animations are smooth (60fps)
- [ ] Voice synthesis works
- [ ] Mobile responsive
- [ ] Tested in Chrome, Safari, Firefox

### Content:
- [ ] No placeholder text
- [ ] Numbers match strategic doc
- [ ] AIA branding correct
- [ ] Grammar/spelling checked

### Presentation:
- [ ] Practiced 10-min walkthrough
- [ ] Prepared for Q&A
- [ ] Backup (screenshots/video)
- [ ] Tested on presentation laptop

---

## 🔨 Build Commands

### Recommended Build Order:

```bash
# Day 1 - Dashboard
# Create dashboard.html
# Populate with data from data.js
# Add animations on load

# Day 2 - AI Calling (Most Important)
# Create calling.html
# Implement voice synthesis
# Add waveform visualization
# Create live transcript

# Day 3 - Lead Profile
# Create lead-profile.html
# Add tab navigation
# Show complete conversation history

# Day 4 - Demo Mode + Polish
# Create demo-mode.html
# Final testing
# Bug fixes
```

---

## 📈 Business Impact Reminder

### The Problem:
- $45-60M SGD lost annually (68% lead leakage)
- 40% agent time wasted on repetitive tasks
- Only 32% conversion rate

### Your Solution:
- **+$159M SGD** Year 1 revenue impact
- **52.3% conversion rate** (20pp improvement)
- **6,400% ROI** on $2.45M investment
- **200 leads/agent** capacity (4x improvement)

---

## 🎯 Success Criteria

A successful demo should:
1. ✅ Impress in first 30 seconds
2. ✅ Clearly show ROI
3. ✅ Demonstrate technical feasibility
4. ✅ Tell Sarah's complete story
5. ✅ Get budget approval

---

## 📞 Support

### If You Get Stuck:

**Technical Issues:**
- Check IMPLEMENTATION_GUIDE.md for templates
- Review console for errors
- Verify data.js is loaded

**Design Questions:**
- Reference components.css for available components
- Use global.css utility classes
- Follow design system specifications

**Business Questions:**
- Re-read STRATEGIC_USE_CASE.md
- Review Sarah's journey (pages 105-136)
- Check financial projections (pages 145-152)

---

## 🚀 Deployment Options

### GitHub Pages (Free):
```bash
git init
git add .
git commit -m "LeadPulseAI Prototype"
git push -u origin main
# Enable Pages in repo settings
```

### Netlify (Drag & Drop):
1. Go to https://app.netlify.com/drop
2. Drag the LeadPulseAI-Prototype folder
3. Get instant live URL

---

## 📝 License & Credits

**Created for:** AIA Singapore
**Purpose:** Internal demonstration and executive presentation
**Technology:** Pure HTML5, CSS3, Vanilla JavaScript (no frameworks)
**Data:** Mock data for demonstration purposes only

---

## 🏁 You're Ready!

Everything you need is here:
- ✅ Complete design system
- ✅ Component library
- ✅ Sarah Chen's complete data
- ✅ Working login page
- ✅ Step-by-step build guide
- ✅ Executive business case

**Estimated Build Time: 18-24 hours**

**Let's transform insurance lead nurturing!** 🚀

---

*For detailed build instructions, see [IMPLEMENTATION_GUIDE.md](../IMPLEMENTATION_GUIDE.md)*
*For business case, see [STRATEGIC_USE_CASE.md](../STRATEGIC_USE_CASE.md)*
*For complete overview, see [PROJECT_SUMMARY.md](../PROJECT_SUMMARY.md)*
