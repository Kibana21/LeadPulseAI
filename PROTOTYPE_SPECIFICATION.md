# LeadPulseAI Prototype - Complete Feature Specification
## HTML-Based Interactive Demo System

**Version:** 1.0
**Target:** Executive Demonstration & Proof of Concept
**Technology Stack:** Pure HTML5, CSS3, Vanilla JavaScript (No frameworks)
**Date:** October 2025

---

## 🎯 Prototype Objectives

### Primary Goals
1. **Demonstrate Complete Vision**: Show every feature from strategic use case
2. **Interactive Experience**: Allow users to interact with AI calling, lead nurturing, dashboards
3. **Professional Polish**: Production-quality UI/UX that impresses C-suite
4. **Self-Explanatory**: Demo mode that walks through Sarah Chen use case
5. **Realistic Simulation**: Real-time call simulation, voice playback, transcript generation

### Success Criteria
- ✅ Executive can navigate entire system without training
- ✅ All strategic document features visually represented
- ✅ Calling feature feels like real telephony platform
- ✅ Data visualizations show clear ROI and business impact
- ✅ Demo can run in any browser without server dependencies

---

## 🏗️ System Architecture

### Application Structure

```
LeadPulseAI-Prototype/
├── index.html                          # Main entry point / Login
├── dashboard.html                      # Main dashboard
├── leads.html                          # Lead management
├── lead-profile.html                   # Individual lead detail
├── calling.html                        # AI calling interface
├── call-history.html                   # Call recordings & transcripts
├── campaigns.html                      # Campaign management
├── analytics.html                      # Analytics & ROI dashboard
├── agent-handoff.html                  # Agent handoff queue
├── calendar.html                       # Calendar & appointments
├── demo-mode.html                      # Guided Sarah Chen walkthrough
├── css/
│   ├── global.css                     # Global styles & variables
│   ├── components.css                 # Reusable components
│   ├── dashboard.css                  # Dashboard specific
│   ├── calling.css                    # Calling interface
│   ├── animations.css                 # Transitions & effects
│   └── responsive.css                 # Mobile responsive
├── js/
│   ├── app.js                         # Main application logic
│   ├── data.js                        # Mock data & state management
│   ├── calling-engine.js              # Calling simulation
│   ├── voice-synthesizer.js           # Web Speech API integration
│   ├── charts.js                      # Data visualization
│   ├── animations.js                  # UI animations
│   ├── demo-controller.js             # Demo mode orchestration
│   └── utils.js                       # Helper functions
├── assets/
│   ├── audio/                         # Pre-recorded voice samples
│   ├── images/                        # Icons, logos, avatars
│   └── data/                          # JSON data files
└── README.md                          # Setup instructions
```

---

## 📋 Feature-by-Feature Specification

## 1. LOGIN & AUTHENTICATION PAGE

**File:** `index.html`

**Features:**
- Professional AIA-branded login screen
- Role selection: "AI Operations Manager" / "Agent" / "Executive"
- Demo mode toggle: "Launch Sarah Chen Demo"
- Company branding and value proposition

**Visual Elements:**
- Hero background with subtle AI/tech theme
- Login form with smooth animations
- Quick stats ticker: "32,450 leads nurtured today | 1,247 appointments booked | 68% conversion rate"

---

## 2. MAIN DASHBOARD

**File:** `dashboard.html`

**Layout Sections:**

### A. Top Navigation Bar
- Logo + "LeadPulseAI"
- Search bar: "Search leads, campaigns, conversations..."
- Notifications bell (with red badge)
- User profile dropdown
- Quick action button: "+ New Campaign"

### B. Left Sidebar Navigation
- 🏠 Dashboard (active)
- 📞 AI Calling Center
- 👥 Leads Pipeline
- 📊 Analytics & ROI
- 📅 Calendar & Appointments
- 🔄 Agent Handoffs
- 🎯 Campaigns
- ⚙️ Settings
- 🎬 Demo Mode (highlighted)

### C. Main Dashboard Content

#### Hero Stats Cards (Top Row)
```
┌─────────────────────────────────────────────────────────────┐
│  💰 Revenue This Month          📞 Active AI Calls          │
│  $12.4M SGD                     47 ongoing                  │
│  +18% vs last month             ↑ 12% vs yesterday          │
├─────────────────────────────────────────────────────────────┤
│  🎯 Conversion Rate             ⏱️ Avg Time to Convert      │
│  52.3%                          54 days                     │
│  +20pp vs baseline              -36 days improvement        │
└─────────────────────────────────────────────────────────────┘
```

#### Live Activity Feed (Middle Left)
```
┌───────────────────────────────────────────────────┐
│ 🔴 LIVE: AI Agent "Emma" calling Sarah Chen       │
│ Call started 3 min ago | Sentiment: Positive 😊   │
│ [View Live Call] [Listen In]                      │
├───────────────────────────────────────────────────┤
│ ✅ Lead "Michael Tan" → Agent handoff scheduled   │
│ 2 min ago | Appointment: Thu 7PM | Hot Lead 🔥    │
├───────────────────────────────────────────────────┤
│ 📞 AI completed call with "Lisa Wong"             │
│ 5 min ago | Duration: 8m 32s | Next: Follow-up    │
├───────────────────────────────────────────────────┤
│ 🎂 Birthday trigger: "David Lim" - Call scheduled │
│ 8 min ago | Campaign: Birthday Wishes & Offer     │
└───────────────────────────────────────────────────┘
```

#### Lead Pipeline Funnel (Middle Right)
Visual funnel chart showing:
- New Leads (100%) → 5,234 leads
- First Contact (72%) → 3,768 leads
- Engaged (45%) → 2,355 leads
- Qualified (38%) → 1,989 leads
- Appointment Set (28%) → 1,465 leads
- Converted (52%) → 762 conversions

#### AI Performance Metrics (Bottom)
- Average call duration: 10m 23s
- Customer satisfaction: 8.7/10
- Objection handling success: 84%
- Escalation to human: 18%

#### Hot Leads Queue (Right Sidebar)
```
┌─────────────────────────────────────────┐
│ 🔥 HOT LEADS READY FOR HANDOFF          │
├─────────────────────────────────────────┤
│ Sarah Chen                              │
│ 🟢 Ready Now | Conv Prob: 75%          │
│ Last AI Call: 2 hours ago              │
│ [Claim Lead] [View Profile]            │
├─────────────────────────────────────────┤
│ Michael Tan                             │
│ 🟡 Follow-up Needed | Conv Prob: 68%   │
│ Last AI Call: 1 day ago                │
│ [Claim Lead] [View Profile]            │
├─────────────────────────────────────────┤
│ Lisa Wong                               │
│ 🟢 Appointment Confirmed | 82%         │
│ Meeting: Today 6PM                     │
│ [View Details] [Reschedule]            │
└─────────────────────────────────────────┘
```

---

## 3. AI CALLING CENTER

**File:** `calling.html`

**The Crown Jewel Feature - Most Important Page**

### Layout Design

#### Left Panel: Active Calls List
```
┌─────────────────────────────────────────────┐
│ ACTIVE CALLS (4)                            │
├─────────────────────────────────────────────┤
│ 🔴 Sarah Chen                               │
│ Call Duration: 00:03:42                     │
│ Sentiment: 😊 Positive (8.2/10)             │
│ Status: Discussing maternity coverage       │
│ [Listen] [Transcript] [End Call]            │
├─────────────────────────────────────────────┤
│ 🔴 Michael Tan                              │
│ Call Duration: 00:01:15                     │
│ Sentiment: 😐 Neutral (5.8/10)              │
│ Status: Introduction phase                  │
│ [Listen] [Transcript] [End Call]            │
└─────────────────────────────────────────────┘

┌─────────────────────────────────────────────┐
│ QUEUED CALLS (23)                           │
├─────────────────────────────────────────────┤
│ ⏳ Lisa Wong - Birthday Campaign            │
│ Scheduled: 7:30 PM (in 2h 15m)             │
├─────────────────────────────────────────────┤
│ ⏳ David Lim - Follow-up Call #3            │
│ Scheduled: 8:00 PM (in 2h 45m)             │
└─────────────────────────────────────────────┘
```

#### Center Panel: Live Call Interface (Main Focus)

**When Call is Active:**
```
┌─────────────────────────────────────────────────────────┐
│                    LIVE CALL IN PROGRESS                 │
│                                                          │
│              [Avatar: AI Agent "Emma"]                   │
│                                                          │
│                    ♪ ♫ ♪ ♫ ♪                            │
│              Audio Waveform Visualization                │
│              [████████░░░░░░░░░░] 65% volume            │
│                                                          │
│         🔴 RECORDING  |  Duration: 00:03:42              │
│                                                          │
│  ┌─────────────────────────────────────────────────┐   │
│  │ LIVE TRANSCRIPT                                  │   │
│  ├─────────────────────────────────────────────────┤   │
│  │ [00:03:28] Emma (AI):                           │   │
│  │ "Sarah, based on what you've shared about       │   │
│  │ expecting your first child, I noticed your      │   │
│  │ current hospitalization plan might not fully    │   │
│  │ cover maternity expenses. Would you like me     │   │
│  │ to walk you through what other expecting        │   │
│  │ mothers typically consider?"                     │   │
│  │                                                  │   │
│  │ [00:03:42] Sarah Chen (Lead):                   │   │
│  │ "Yes, that would be helpful actually..." ✍️      │   │
│  │                                                  │   │
│  │ [AI is responding...] 💬                         │   │
│  └─────────────────────────────────────────────────┘   │
│                                                          │
│  ┌─────────────────────────────────────────────────┐   │
│  │ REAL-TIME INTELLIGENCE                           │   │
│  ├─────────────────────────────────────────────────┤   │
│  │ 😊 Sentiment: POSITIVE (8.2/10)                 │   │
│  │ 🎯 Intent: High - Actively Seeking Info          │   │
│  │ 💬 Engagement: Strong - Asking Questions         │   │
│  │ 🎪 Keywords: "helpful", "expecting", "coverage"  │   │
│  │ 🚨 Objections: None detected                     │   │
│  │ ✅ Conversion Probability: 75% (+5% from start)  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                          │
│  [🔇 Mute AI]  [⏸️ Pause]  [🎤 Join Call]  [📞 End]   │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

#### Right Panel: Lead Context Card
```
┌─────────────────────────────────────────────┐
│ LEAD PROFILE                                │
├─────────────────────────────────────────────┤
│ [Avatar]  Sarah Chen                        │
│           Age: 32, Married                  │
│           Singapore, District 10            │
├─────────────────────────────────────────────┤
│ 📊 Lead Score: 87/100 🔥                    │
│ 💰 Potential LTV: $63,000                   │
│ 📞 Call #: 3 of 12 (Touchpoint 3)          │
├─────────────────────────────────────────────┤
│ 🎯 TRIGGER EVENT                            │
│ Pregnancy Detected (High Intent Window)     │
│ Detected: 6 hours ago                       │
├─────────────────────────────────────────────┤
│ 📋 CURRENT COVERAGE                         │
│ • Basic Hospitalization ($50K)              │
│ • No maternity coverage                     │
│ • No life insurance                         │
├─────────────────────────────────────────────┤
│ 💡 AI RECOMMENDATIONS                       │
│ 1. Maternity Protection Plan                │
│ 2. Critical Illness Coverage                │
│ 3. Life Insurance ($500K)                   │
│ 4. Newborn Coverage Package                 │
├─────────────────────────────────────────────┤
│ 📝 CONVERSATION HISTORY                     │
│ • Call #1 (Day 0): Initial contact - 12m    │
│   Sentiment: Positive, Not ready            │
│ • Email (Day 1): Coverage analysis sent     │
│ • Call #2 (Day 4): Follow-up - 9m           │
│   Sentiment: Positive, Still researching    │
│ • SMS (Day 11): Check-in - Replied          │
│ • Call #3 (NOW): Maternity focus            │
└─────────────────────────────────────────────┘
```

#### Bottom Panel: AI Agent Coaching
```
┌─────────────────────────────────────────────────────────┐
│ 🤖 AI AGENT PLAYBOOK (Real-time suggestions)            │
├─────────────────────────────────────────────────────────┤
│ ✅ COMPLETED:                                           │
│ • Warm greeting with pregnancy congratulations          │
│ • Built rapport - acknowledged her current status       │
│ • Identified coverage gap (maternity)                   │
│                                                          │
│ 🎯 CURRENT PHASE: Value Demonstration                   │
│                                                          │
│ ⏭️ NEXT ACTIONS:                                        │
│ • Provide specific maternity coverage options           │
│ • Share customer testimonial (expecting mothers)        │
│ • Soft close: Offer specialist consultation             │
│ • If objection: Address affordability concerns          │
│                                                          │
│ 🚨 ESCALATION TRIGGER:                                  │
│ If Sarah asks about policy exclusions or medical        │
│ history requirements → Transfer to human agent          │
└─────────────────────────────────────────────────────────┘
```

### Interactive Features for Calling Page

1. **Live Call Simulation**
   - Click "Start Demo Call" to begin simulated conversation
   - Real audio playback using Web Speech API (or pre-recorded)
   - Waveform visualization animates with speech
   - Transcript updates in real-time (typewriter effect)

2. **Sentiment Analysis Visualization**
   - Real-time emoji changes based on conversation tone
   - Line chart showing sentiment progression throughout call
   - Color-coded: Green (positive), Yellow (neutral), Red (negative)

3. **AI Voice Controls**
   - "Listen In" - Hear the conversation (play audio)
   - "Join Call" - Simulate human agent takeover
   - "Send Message to AI" - Give AI real-time instructions
   - "End Call" - Terminate and show summary

4. **Manual Dial Feature**
   - "+" button to manually trigger a call
   - Select lead from dropdown
   - Choose campaign/script template
   - Schedule immediate or future call

---

## 4. LEAD PROFILE PAGE (Sarah Chen Deep Dive)

**File:** `lead-profile.html`

**The Complete 360° View**

### Header Section
```
┌──────────────────────────────────────────────────────────────┐
│ ← Back to Leads                                              │
├──────────────────────────────────────────────────────────────┤
│  [Avatar]  SARAH CHEN                          🔥 HOT LEAD   │
│            sarah.chen@email.com                               │
│            +65 9123 4567                                      │
│            Age: 32 | Married | Singapore D10                 │
│                                                               │
│  [📞 Call Now]  [✉️ Email]  [💬 SMS]  [📅 Book Appointment]  │
└──────────────────────────────────────────────────────────────┘
```

### Tab Navigation
- **Overview** (active)
- **Conversation History**
- **Call Recordings**
- **Timeline**
- **Documents**
- **AI Insights**

### Overview Tab Content

#### Lead Intelligence Cards
```
┌─────────────────────────────────────────────────────────────┐
│ 📊 LEAD METRICS                                              │
├─────────────────────────────────────────────────────────────┤
│  Lead Score: ████████░░ 87/100 (Excellent)                  │
│  Conversion Probability: 75% (↑ +12% this week)             │
│  Estimated LTV: $63,000                                      │
│  Stage: Qualified → Ready for Agent Handoff                 │
│  Days in Pipeline: 23 days                                  │
│  AI Touchpoints: 8 (3 calls, 2 SMS, 3 emails)               │
│  Engagement Rate: 92% (responds quickly)                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🎯 TRIGGER EVENTS & LIFE MOMENTS                             │
├─────────────────────────────────────────────────────────────┤
│  🍼 Primary: PREGNANCY (First Child)                         │
│     Detected: Oct 1, 2025 (14 days ago)                     │
│     Source: Digital footprint + Website behavior             │
│     Intent Window: 🔴 ACTIVE (Day 14 of 72-day window)      │
│                                                               │
│  🎂 Secondary: Birthday - Nov 8, 2025 (24 days away)        │
│     Campaign Scheduled: Birthday + Family Protection offer   │
│                                                               │
│  💍 Historical: Marriage - Jun 2023                          │
│     Action Taken: Basic coverage sold at that time           │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 📋 CURRENT COVERAGE & GAPS                                   │
├─────────────────────────────────────────────────────────────┤
│  ✅ Current Policies:                                        │
│     • Basic Hospitalization Shield - $50,000 coverage        │
│       Premium: $85/month | Policy #: AIA-2023-847362         │
│       Status: Active | Renewal: Jun 2026                     │
│                                                               │
│  ⚠️ Coverage Gaps Identified by AI:                          │
│     🔴 CRITICAL: No maternity coverage                       │
│        Risk: $15-25K out-of-pocket delivery costs            │
│     🔴 CRITICAL: No life insurance                           │
│        Risk: Family unprotected if breadwinner loss          │
│     🟡 MODERATE: No critical illness coverage                │
│        Risk: Cancer/serious illness expenses uncovered       │
│     🟡 MODERATE: No newborn coverage planned                 │
│        Risk: Baby health issues from day 1 not covered       │
│                                                               │
│  💡 AI Recommended Products:                                 │
│     1. Maternity Protection Plan - $180/month                │
│     2. Life Insurance ($500K coverage) - $120/month          │
│     3. Critical Illness Rider - $95/month                    │
│     4. Newborn Coverage Package - $45/month                  │
│     Total Bundle: $440/month | Est. Close Rate: 75%         │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ 🧠 AI BEHAVIORAL INSIGHTS                                    │
├─────────────────────────────────────────────────────────────┤
│  Communication Style: Responsive, appreciates education      │
│  Decision Making: Joint with husband (mentioned 3x)          │
│  Objections: "Feeling overwhelmed", "Need time to think"     │
│  Pain Points: Unclear where to start, affordability concern  │
│  Positive Signals: "That would be helpful", asks questions   │
│  Engagement Pattern: Evenings 7-9PM (high response rate)     │
│  Competitors Mentioned: Prudential, Manulife (price-focused) │
│  Emotional State: Anxious about being prepared for baby      │
│                                                               │
│  🎯 Recommended Approach:                                    │
│     ✓ Break down information into simple steps               │
│     ✓ Emphasize peace of mind for baby's arrival             │
│     ✓ Position as protection partner, not just insurer       │
│     ✓ Offer side-by-side competitor comparison               │
│     ✓ Create urgency with limited-time new parent offer      │
│     ✓ Non-pushy tone - she appreciates gentle approach       │
└─────────────────────────────────────────────────────────────┘
```

### Conversation History Tab

**Complete Timeline of All Interactions**

```
┌─────────────────────────────────────────────────────────────┐
│ TOUCHPOINT #8 - Oct 15, 2025 (Today, 7:32 PM) - 🔴 ONGOING │
├─────────────────────────────────────────────────────────────┤
│ Type: 📞 AI Voice Call (Emma)                                │
│ Duration: 00:03:42 (in progress)                             │
│ Campaign: Maternity Coverage Focus - Call #3                 │
│ Sentiment: 😊 Positive (8.2/10)                              │
│ Status: Active conversation - discussing coverage options    │
│                                                               │
│ [🎧 Listen to Live Call] [📄 View Transcript] [🎤 Join Call] │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ TOUCHPOINT #7 - Oct 11, 2025 (7:15 AM) - ✅ COMPLETED       │
├─────────────────────────────────────────────────────────────┤
│ Type: 💬 SMS Check-in (Emma)                                 │
│ Campaign: Mid-nurture engagement touchpoint                  │
│ Response: ✅ Sarah replied within 2 hours                    │
│                                                               │
│ Conversation:                                                │
│ [07:15] Emma: "Hi Sarah, it's Emma from AIA 😊 Just a      │
│         quick check-in - how are you feeling? I know the     │
│         first trimester can be tough! If you have any quick  │
│         questions about your coverage, feel free to reply or │
│         I can give you a call. No pressure - just here to    │
│         help! - Emma"                                        │
│                                                               │
│ [09:23] Sarah: "Thanks Emma! Feeling better now. Still      │
│         haven't decided on the insurance yet but appreciate  │
│         you checking in."                                    │
│                                                               │
│ [09:25] Emma: "So glad you're feeling better! Take all the  │
│         time you need - your health comes first. I'll reach  │
│         out again in a couple of weeks. In the meantime, if  │
│         anything comes up, you know where to find me! 😊"    │
│                                                               │
│ AI Analysis: Positive engagement signal - Sarah responded    │
│ voluntarily. No buying intent yet, but relationship building │
│ successful. Next action: Schedule call for entering 2nd      │
│ trimester (higher intent window).                            │
│                                                               │
│ [View Full Analysis] [📊 Sentiment: 7.5/10 Positive]        │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ TOUCHPOINT #6 - Oct 5, 2025 (8:00 AM) - ✅ COMPLETED        │
├─────────────────────────────────────────────────────────────┤
│ Type: ✉️ Email - Educational Content                        │
│ Subject: "Your Pregnancy Insurance Checklist - By Trimester" │
│ Open Rate: ✅ Opened 3x (first open within 4 hours)         │
│ Click Rate: ✅ Clicked 2 links (maternity coverage, FAQs)   │
│ Engagement Score: 9/10 (Excellent)                           │
│                                                               │
│ [View Email] [📊 Engagement Analytics]                       │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│ TOUCHPOINT #5 - Oct 4, 2025 (7:00 PM) - ✅ COMPLETED        │
├─────────────────────────────────────────────────────────────┤
│ Type: 📞 AI Voice Call #2 (Emma)                             │
│ Duration: 8 minutes 47 seconds                               │
│ Campaign: First follow-up call                               │
│ Sentiment: 😊 Positive (7.8/10)                              │
│ Outcome: Sarah still researching - Not ready to commit       │
│                                                               │
│ Key Moments:                                                 │
│ • [00:32] Sarah confirmed she reviewed the coverage analysis │
│ • [02:15] Expressed feeling "overwhelmed" - AI adapted       │
│ • [03:40] AI focused on just maternity coverage (simplified) │
│ • [07:25] Offered specialist call - Sarah declined (not yet) │
│ • [08:30] AI suggested trimester checklist - Sarah agreed    │
│                                                               │
│ AI Actions Taken:                                            │
│ ✓ Updated strategy: Break information into smaller pieces    │
│ ✓ Sent trimester insurance checklist via email               │
│ ✓ Scheduled next call for Day 11 (entering 2nd trimester)    │
│ ✓ Flagged lead as "progressing well, needs gentle approach"  │
│                                                               │
│ [🎧 Play Recording] [📄 Full Transcript] [📊 Call Analysis]  │
└─────────────────────────────────────────────────────────────┘

[Continue with all 8 touchpoints...]
```

### Call Recordings Tab

**Audio Playback Interface**

```
┌─────────────────────────────────────────────────────────────┐
│ CALL RECORDING #3 - Oct 15, 2025 (LIVE)                     │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│  ♪ ♫ ♪ ♫ ♪ ♪ ♫ ♪ ♫ ♪ ♪ ♫ ♪ ♫ ♪                             │
│  [████████████████████████░░░░░░░░░░░░] 00:03:42 / 00:12:00 │
│                                                               │
│  [◄◄] [▶️ PLAYING] [►►] [🔇 Volume ████████░░]              │
│                                                               │
│  Playback Speed: [0.5x] [1x] [1.5x] [2x]                    │
│  [📥 Download] [📤 Share] [✂️ Clip Section]                  │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│ SYNCHRONIZED TRANSCRIPT (Auto-scroll with audio)            │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│ [00:00:03] 🤖 Emma (AI Agent):                               │
│ "Good evening, Sarah? This is Emma from AIA Singapore.       │
│ Do you have a moment to chat?"                               │
│ Sentiment: ● Neutral | Confidence: 98%                       │
│                                                               │
│ [00:00:08] 👤 Sarah Chen:                                    │
│ "Um, yes... who is this again?"                              │
│ Sentiment: ● Confused | Confidence: 87%                      │
│                                                               │
│ [00:00:11] 🤖 Emma (AI Agent):                               │
│ "I'm Emma, calling from AIA. We noticed you're an existing   │
│ member with us, and I wanted to reach out personally to      │
│ congratulate you on your exciting news about expecting your  │
│ first child. Is now a good time to talk?"                    │
│ Sentiment: ● Positive | Confidence: 95%                      │
│ AI Strategy: Rapport building + personalization              │
│                                                               │
│ [00:00:22] 👤 Sarah Chen:                                    │
│ "Oh... thank you! Yes, it's exciting. How did you know?"     │
│ Sentiment: ● Positive, Curious | Confidence: 91%            │
│ 🎯 Engagement Signal Detected: Asking questions              │
│                                                               │
│ [Continue transcript...]                                     │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│ KEY MOMENTS (Click to jump to timestamp)                     │
├─────────────────────────────────────────────────────────────┤
│ 🎯 [00:22] - Sarah asks clarifying question (engagement)     │
│ ✅ [01:45] - Sarah agrees to 5-minute overview               │
│ 💡 [03:28] - AI identifies coverage gap                      │
│ 📞 [07:15] - AI offers specialist consultation (declined)    │
│ ⏭️ [08:30] - Next touchpoint scheduled (Sarah agreed)        │
└─────────────────────────────────────────────────────────────┘
```

### AI Insights Tab

**Advanced Analytics**

```
┌─────────────────────────────────────────────────────────────┐
│ 🧠 AI CONVERSATION INTELLIGENCE ANALYSIS                     │
├─────────────────────────────────────────────────────────────┤
│                                                               │
│ Sentiment Journey (Last 8 Touchpoints)                       │
│ ┌─────────────────────────────────────────────────────────┐ │
│ │ 10 │                              ●───●                  │ │
│ │  9 │                          ●───                       │ │
│ │  8 │                      ●───                           │ │
│ │  7 │          ●───●───●                                  │ │
│ │  6 │      ●                                              │ │
│ │  5 │  ●                                                  │ │
│ │    └─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬   │ │
│ │         T1   T2   T3   T4   T5   T6   T7   T8 (now)    │ │
│ └─────────────────────────────────────────────────────────┘ │
│                                                               │
│ Trend: ↗️ Consistently Improving (Excellent sign)            │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│ KEYWORD FREQUENCY & SENTIMENT                                │
├─────────────────────────────────────────────────────────────┤
│ Positive Keywords:                                           │
│  ✅ "helpful" (mentioned 4x) - Sentiment: +0.85              │
│  ✅ "thank you" (mentioned 6x) - Sentiment: +0.92            │
│  ✅ "excited" (mentioned 2x) - Sentiment: +0.95              │
│  ✅ "appreciate" (mentioned 3x) - Sentiment: +0.88           │
│                                                               │
│ Neutral Keywords:                                            │
│  ○ "think about it" (mentioned 3x) - Objection pattern       │
│  ○ "not sure" (mentioned 2x) - Uncertainty pattern           │
│  ○ "need time" (mentioned 2x) - Delay pattern                │
│                                                               │
│ Negative Keywords:                                           │
│  ⚠️ "overwhelmed" (mentioned 2x) - Sentiment: -0.45          │
│     AI Response: Simplified information, broke into steps     │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│ OBJECTION HANDLING EFFECTIVENESS                             │
├─────────────────────────────────────────────────────────────┤
│ Objection #1: "Feeling overwhelmed"                          │
│  AI Response: Offered simplified, focused approach            │
│  Outcome: ✅ Successful - Sarah engaged more after           │
│  Effectiveness: 95%                                           │
│                                                               │
│ Objection #2: "Need time to think"                           │
│  AI Response: Removed pressure, scheduled follow-up           │
│  Outcome: ✅ Successful - Maintained rapport                 │
│  Effectiveness: 92%                                           │
│                                                               │
│ Objection #3: "Comparing other insurers"                     │
│  AI Response: Offered side-by-side comparison                 │
│  Outcome: ⏳ In Progress (Current call)                      │
│  Effectiveness: TBD                                           │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│ CONVERSION PROBABILITY EVOLUTION                             │
├─────────────────────────────────────────────────────────────┤
│ Initial (Day 0):      32% (baseline for this lead profile)   │
│ After Call #1:        45% (+13% - positive first impression) │
│ After Email open:     48% (+3% - engaged with content)       │
│ After Call #2:        55% (+7% - addressing concerns)        │
│ After SMS reply:      62% (+7% - voluntary engagement)       │
│ After Email clicks:   68% (+6% - researching actively)       │
│ Current (Call #3):    75% (+7% - competitor comparison phase)│
│                                                               │
│ 🎯 Prediction: 85% probability if specialist call happens    │
│ 🎯 Estimated Close Date: Oct 24-26, 2025 (9-11 days)        │
│                                                               │
├─────────────────────────────────────────────────────────────┤
│ RECOMMENDED NEXT ACTIONS                                     │
├─────────────────────────────────────────────────────────────┤
│ 1. ⭐ PRIORITY: Book specialist call within next 48 hours    │
│    Rationale: Sarah is in "comparison research" phase -      │
│    prime moment for expert consultation                      │
│                                                               │
│ 2. Send competitor comparison analysis tonight               │
│    Rationale: Strike while Sarah is actively researching     │
│                                                               │
│ 3. Activate limited-time offer (New Parent Bundle)           │
│    Rationale: Create urgency to accelerate decision          │
│                                                               │
│ 4. Prepare human agent (Rachel Tan) with full brief          │
│    Rationale: Handoff is imminent - agent needs context      │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. ANALYTICS & ROI DASHBOARD

**File:** `analytics.html`

**Executive-Level Business Intelligence**

### Top KPI Cards
```
┌────────────────────────────────────────────────────────────────┐
│  This Month Performance (October 2025)                         │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  💰 Revenue Generated          🎯 Conversion Rate              │
│  $12.4M SGD                    52.3%                           │
│  ↗️ +$1.8M vs Sept             ↗️ +20.3pp vs baseline          │
│  Target: $10M ✅               Target: 45% ✅                  │
│                                                                 │
│  📞 Total AI Calls Made        ⏱️ Avg Time to Convert          │
│  45,230 calls                  54 days                         │
│  ↗️ +12% vs Sept               ↘️ -36 days vs baseline         │
│  Avg Duration: 10m 23s         Target: <60 days ✅             │
│                                                                 │
│  👥 Leads Under Nurturing      🔥 Hot Leads Ready              │
│  8,450 active leads            247 leads                       │
│  ↗️ +15% capacity              ↗️ +42 vs yesterday             │
│  Per Agent: 195 avg            Handoff Rate: 18%               │
└────────────────────────────────────────────────────────────────┘
```

### Revenue Impact Chart
```
┌────────────────────────────────────────────────────────────────┐
│ MONTHLY REVENUE: AI-NURTURED vs TRADITIONAL                    │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│ $14M │                                      ███ AI-Nurtured    │
│      │                                  ███                     │
│ $12M │                              ███                         │
│      │                          ███                             │
│ $10M │                      ███                                 │
│      │                  ███                                     │
│  $8M │              ███                                         │
│      │          ███ ░░░ ░░░ ░░░ ░░░ ░░░ Traditional (baseline) │
│  $6M │      ███ ░░░                                             │
│      │  ███ ░░░                                                 │
│  $4M │  ░░░                                                     │
│      └──┬────┬────┬────┬────┬────┬────┬────┬────┬────         │
│        Jan  Feb  Mar  Apr  May  Jun  Jul  Aug  Sep  Oct       │
│                                                                 │
│  Gap (Revenue Recovered): $4.8M/month | $57.6M YoY projection  │
└────────────────────────────────────────────────────────────────┘
```

### Lead Funnel Comparison
```
┌────────────────────────────────────────────────────────────────┐
│ CONVERSION FUNNEL: BEFORE vs AFTER LeadPulseAI                 │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  BEFORE (Baseline)                  AFTER (With AI)            │
│                                                                 │
│  New Leads                          New Leads                  │
│  ████████████ 100%                  ████████████ 100%          │
│  10,000 leads                       10,000 leads               │
│       ↓ -28% loss                         ↓ -15% loss          │
│  First Contact                      First Contact              │
│  ████████░░░░ 72%                   ██████████░░ 85%           │
│  7,200 leads                        8,500 leads                │
│       ↓ -40% loss                         ↓ -18% loss          │
│  Engaged                            Engaged                    │
│  ████░░░░░░░░ 32%                   ████████░░░░ 67%           │
│  3,200 leads                        6,700 leads                │
│       ↓ -68% TOTAL LOSS                   ↓ -25% loss          │
│  Converted                          Qualified                  │
│  ███░░░░░░░░░ 32%                   ██████████░░ 82%           │
│  3,200 conversions                  8,200 qualified            │
│                                           ↓ -30% loss          │
│  Revenue: $10.2M                    Converted                  │
│                                     ██████░░░░░░ 52%           │
│                                     5,200 conversions          │
│                                                                 │
│                                     Revenue: $16.6M (+62%)     │
│                                                                 │
│  Lead Leakage: 68% 🔴               Lead Leakage: 25% 🟢       │
└────────────────────────────────────────────────────────────────┘
```

### Agent Productivity Metrics
```
┌────────────────────────────────────────────────────────────────┐
│ AGENT PRODUCTIVITY TRANSFORMATION                               │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Time Allocation per Agent (40hr/week)                         │
│                                                                 │
│  BEFORE LeadPulseAI:                                           │
│  ┌──────────────────────────────────────────┐                 │
│  │ Repetitive Follow-ups    ████████ 40%    │ 16 hrs          │
│  │ Data Entry & Admin       ████     20%    │ 8 hrs           │
│  │ Generic Info Calls       ███      15%    │ 6 hrs           │
│  │ High-Value Consultations ████     20%    │ 8 hrs 🎯        │
│  │ Training & Planning      █         5%    │ 2 hrs           │
│  └──────────────────────────────────────────┘                 │
│  Lead Capacity: 50 leads/agent                                 │
│                                                                 │
│  AFTER LeadPulseAI:                                            │
│  ┌──────────────────────────────────────────┐                 │
│  │ AI Monitoring & Oversight ███      8%    │ 3 hrs           │
│  │ High-Value Consultations  █████████ 65%  │ 26 hrs 🎯       │
│  │ Strategic Planning        ████     20%   │ 8 hrs           │
│  │ Team Coordination         ██        7%   │ 3 hrs           │
│  └──────────────────────────────────────────┘                 │
│  Lead Capacity: 200+ leads/agent (+300%)                       │
│                                                                 │
│  💰 Value Creation Impact:                                     │
│  Before: 20% of time on revenue-generating activities          │
│  After:  65% of time on revenue-generating activities          │
│  Productivity Gain: +225% effective selling time               │
└────────────────────────────────────────────────────────────────┘
```

### ROI Summary
```
┌────────────────────────────────────────────────────────────────┐
│ 💰 RETURN ON INVESTMENT (Year 1 Projection)                    │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Investment Breakdown:                                          │
│  ├─ Technology & Infrastructure:  $1,200,000                   │
│  ├─ Development & Implementation:   $850,000                   │
│  ├─ Training & Change Management:   $250,000                   │
│  └─ Ongoing Operations (Year 1):    $150,000                   │
│  ───────────────────────────────────────────                   │
│  TOTAL INVESTMENT:                 $2,450,000                  │
│                                                                 │
│  Revenue Impact (Year 1):                                       │
│  ├─ Increased conversions:        +$64,000,000                 │
│  ├─ Faster conversion cycles:     +$12,000,000                 │
│  ├─ Recovered lead leakage:       +$28,000,000                 │
│  ├─ Agent capacity gains:         +$18,000,000                 │
│  ├─ Upsell/Cross-sell:            +$22,000,000                 │
│  └─ Retention improvement:        +$15,000,000                 │
│  ───────────────────────────────────────────                   │
│  TOTAL REVENUE IMPACT:           +$159,000,000                 │
│                                                                 │
│  Net Gain: $156,550,000                                         │
│  ROI: 6,388%                                                    │
│  Payback Period: 5.6 days                                      │
│                                                                 │
│  ████████████████████████████████████████████████████ 6,388%   │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

---

## 6. CAMPAIGNS MANAGEMENT

**File:** `campaigns.html`

**AI-Powered Campaign Orchestration**

### Active Campaigns Grid
```
┌────────────────────────────────────────────────────────────────┐
│ ACTIVE CAMPAIGNS (8)                        [+ Create Campaign]│
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  🍼 PREGNANCY NURTURE CAMPAIGN                      🔴 ACTIVE   │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Leads Enrolled: 347 | Converted: 89 (25.6%) | Active: 258    │
│  Avg Conversion Time: 23 days | Revenue: $1.2M (this month)   │
│                                                                 │
│  Campaign Flow (12 Touchpoints over 90 days):                  │
│  Day 0:   📞 AI Call #1 - Congratulations & Introduction       │
│  Day 1:   ✉️ Email - Personalized Coverage Analysis            │
│  Day 4:   📞 AI Call #2 - Follow-up & Education                │
│  Day 5:   ✉️ Email - Trimester Insurance Checklist             │
│  Day 11:  💬 SMS - Check-in                                    │
│  Day 15:  📞 AI Call #3 - Deep Dive on Maternity Coverage      │
│  Day 16:  ✉️ Email - Customer Testimonials                     │
│  Day 23:  📞 AI Call #4 - Competitor Comparison                │
│  Day 30:  👤 Human Agent Handoff (if qualified)                │
│  Day 45:  📞 Follow-up - Policy Reminders                      │
│  Day 60:  💬 SMS - Birth Preparation Tips                      │
│  Day 90:  📞 Final Check-in Before Due Date                    │
│                                                                 │
│  [📊 View Analytics] [✏️ Edit Campaign] [⏸️ Pause] [🔍 Details]│
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                 │
│  🎂 BIRTHDAY CELEBRATION CAMPAIGN                   🔴 ACTIVE   │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  Leads Enrolled: 1,247 | Converted: 156 (12.5%) | Active: 892 │
│  Avg Conversion Time: 14 days | Revenue: $580K (this month)   │
│                                                                 │
│  Campaign Flow (6 Touchpoints over 30 days):                   │
│  Day -7:  ✉️ Email - "Birthday coming up!" teaser              │
│  Day 0:   📞 AI Call - Birthday wishes + Special offer         │
│  Day 1:   💬 SMS - Birthday discount code                      │
│  Day 7:   📞 AI Call - Follow-up on offer                      │
│  Day 14:  ✉️ Email - Policy review recommendation             │
│  Day 30:  📞 Final call - Offer expiring soon                  │
│                                                                 │
│  [📊 View Analytics] [✏️ Edit Campaign] [⏸️ Pause] [🔍 Details]│
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                                 │
│  [View all 6 more campaigns...]                                │
└────────────────────────────────────────────────────────────────┘
```

### Campaign Creation Wizard (Modal)
- Trigger selection (life events, behavioral, time-based)
- Audience segmentation
- Multi-channel touchpoint sequencing
- AI script template selection
- Success metrics definition

---

## 7. CALENDAR & APPOINTMENTS

**File:** `calendar.html`

**Integrated Scheduling System**

```
┌────────────────────────────────────────────────────────────────┐
│                      OCTOBER 2025                               │
├────────────────────────────────────────────────────────────────┤
│  Sun   Mon   Tue   Wed   Thu   Fri   Sat                      │
│         1     2     3     4     5     6                        │
│   7     8     9    10    11    12    13                        │
│  14    [15]  16    17    18    19    20                        │
│  21    22    23    24    25    26    27                        │
│  28    29    30    31                                           │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│ TODAY'S SCHEDULE - Thursday, Oct 15                            │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  6:00 PM  │  👤 Agent: Rachel Tan                             │
│           │  📞 Consultation: Sarah Chen                       │
│           │  🔥 Hot Lead (75% conv. prob.)                    │
│           │  Type: Maternity + Life Insurance                  │
│           │  [View Lead Profile] [Join Call] [Reschedule]     │
│           │                                                     │
│  7:00 PM  │  🤖 AI Agent: Emma                                │
│           │  📞 Auto-Call: 15 scheduled leads                  │
│           │  Campaign: Birthday Follow-ups                     │
│           │  [View Queue] [Monitor Calls]                      │
│           │                                                     │
│  8:30 PM  │  👤 Agent: Michael Wong                           │
│           │  📞 Follow-up: David Lim                           │
│           │  Type: Critical Illness Policy                     │
│           │  [View Lead Profile] [Reschedule]                  │
└────────────────────────────────────────────────────────────────┘
```

---

## 8. AGENT HANDOFF QUEUE

**File:** `agent-handoff.html`

**Human Agent Work Queue**

```
┌────────────────────────────────────────────────────────────────┐
│ 🔥 HOT LEADS READY FOR HANDOFF (24 leads)                      │
├────────────────────────────────────────────────────────────────┤
│  Priority | Lead | Score | Last AI Action | Next Action       │
├────────────────────────────────────────────────────────────────┤
│  🔴 HIGH  │ Sarah Chen   │ 87 │ Call 2hrs ago │ Book appt NOW │
│           │ Age: 32, Pregnancy | Conv Prob: 75% | LTV: $63K   │
│           │ AI Summary: Comparing competitors, ready for       │
│           │ specialist consultation. Recommend: Side-by-side   │
│           │ analysis + limited-time offer.                     │
│           │ [CLAIM LEAD] [View Full Profile] [Schedule Call]  │
├────────────────────────────────────────────────────────────────┤
│  🔴 HIGH  │ Michael Tan  │ 82 │ Call yesterday│ Follow-up     │
│           │ Age: 28, Single | Conv Prob: 68% | LTV: $42K      │
│           │ AI Summary: Interested in critical illness policy. │
│           │ Price-sensitive. Needs payment flexibility options.│
│           │ [CLAIM LEAD] [View Full Profile] [Schedule Call]  │
├────────────────────────────────────────────────────────────────┤
│  [View all 22 more leads...]                                   │
└────────────────────────────────────────────────────────────────┘
```

---

## 9. DEMO MODE - SARAH CHEN WALKTHROUGH

**File:** `demo-mode.html`

**Guided Interactive Demo**

**Features:**
- Step-by-step walkthrough of Sarah's complete journey
- Automated navigation through all pages
- Highlighted tooltips explaining each feature
- "Play" button to auto-advance through the story
- Manual controls to pause/skip sections
- Narration overlay (optional voice-over)

**Demo Script Structure:**
1. **Introduction** (30 sec)
   - "Let me show you how LeadPulseAI transformed Sarah Chen from a cold lead to a converted customer..."

2. **Trigger Detection** (45 sec)
   - Navigate to Dashboard → Show live trigger event
   - "Within 6 hours of detecting Sarah's pregnancy, LeadPulseAI automatically scheduled a personalized outreach call..."

3. **First AI Call** (2 min)
   - Navigate to Calling Center → Play simulated call
   - Show live transcript, sentiment analysis, AI decision-making

4. **Nurturing Sequence** (2 min)
   - Navigate to Lead Profile → Scroll through 8 touchpoints
   - "Over 23 days, AI maintained 8 touchpoints, building trust and addressing objections..."

5. **Agent Handoff** (1 min)
   - Navigate to Agent Handoff → Show Sarah's briefing
   - "When Sarah was sales-ready, AI handed her to Rachel with complete context..."

6. **Conversion & ROI** (1 min)
   - Navigate to Analytics → Show revenue impact
   - "Sarah converted to $63K lifetime value. Multiply this by thousands of leads..."

7. **Conclusion** (30 sec)
   - Return to Dashboard → Show aggregate impact
   - "This is LeadPulseAI: Turning lead nurturing from a black hole into a revenue engine."

---

## 🎨 Design System & UI/UX Specifications

### Color Palette

**Primary Colors:**
```
AIA Red:     #E40521 (brand color - use sparingly for CTAs)
Navy Blue:   #1B365D (primary text, headers)
Sky Blue:    #0066CC (links, interactive elements)
```

**Status Colors:**
```
Success:     #00C853 (conversions, positive metrics)
Warning:     #FF9800 (attention needed)
Danger:      #F44336 (urgent, critical)
Info:        #2196F3 (informational)
```

**Neutral Colors:**
```
Dark:        #1E293B (primary text)
Medium:      #64748B (secondary text)
Light:       #CBD5E1 (borders, dividers)
Background:  #F8FAFC (page background)
White:       #FFFFFF (cards, panels)
```

**AI/Tech Theme:**
```
AI Purple:   #9333EA (AI agent indicators)
Neon Green:  #00FF88 (live activity, recording)
Gradient:    linear-gradient(135deg, #667eea 0%, #764ba2 100%)
```

### Typography

**Font Stack:**
```css
Primary:     'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Monospace:   'Fira Code', 'Courier New', monospace (for data/metrics)
```

**Type Scale:**
```
Headings:
  h1: 32px / 600 weight
  h2: 24px / 600 weight
  h3: 20px / 600 weight
  h4: 16px / 600 weight

Body:
  Large:  16px / 400 weight / 1.6 line-height
  Normal: 14px / 400 weight / 1.5 line-height
  Small:  12px / 400 weight / 1.4 line-height

Labels:
  Uppercase: 11px / 700 weight / 1.2 letter-spacing
```

### Component Library

**Cards:**
- White background
- Border-radius: 12px
- Box-shadow: 0 1px 3px rgba(0,0,0,0.1)
- Padding: 20px
- Hover: translate-y(-2px) + deeper shadow

**Buttons:**
```
Primary:   AIA Red background, white text, bold
Secondary: White background, navy border, navy text
Ghost:     Transparent, colored text only
Icon:      Circle background, icon only

States:
- Default
- Hover (darker shade + scale 1.02)
- Active (pressed state)
- Disabled (50% opacity)
```

**Badges:**
- Pill-shaped (border-radius: 20px)
- Color-coded by status
- Small text (11px)
- Use for: lead scores, statuses, tags

**Data Visualizations:**
- Use Chart.js or D3.js for charts
- Animated on load
- Interactive tooltips
- Color-coded by meaning
- Responsive sizing

### Animations & Micro-interactions

**Page Transitions:**
- Fade-in: 300ms ease-in-out
- Slide-in: 400ms cubic-bezier(0.4, 0, 0.2, 1)

**Hover Effects:**
- Buttons: scale(1.02) + shadow
- Cards: translate-y(-2px) + shadow
- Links: color change + underline

**Live Activity Indicators:**
- Pulsing red dot for ongoing calls
- Shimmer effect for loading states
- Smooth count-up animations for numbers
- Waveform visualization for audio

**Notification Toasts:**
- Slide in from top-right
- Auto-dismiss after 5 seconds
- Color-coded by type
- Include icon + message + close button

### Responsive Breakpoints

```
Mobile:     < 768px  (single column layout)
Tablet:     768px - 1024px  (collapsed sidebar)
Desktop:    > 1024px  (full layout)
Wide:       > 1440px  (max-width container)
```

---

## 🔊 Audio & Voice Features

### Web Speech API Integration

**Text-to-Speech (AI Voice):**
```javascript
const synth = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance(text);
utterance.voice = voices.find(v => v.name.includes('Female')) || voices[0];
utterance.rate = 0.95;  // Slightly slower for clarity
utterance.pitch = 1.1;  // Slightly higher for friendliness
synth.speak(utterance);
```

**Pre-recorded Audio:**
- Use MP3 files for key conversations
- High-quality voice synthesis (ElevenLabs style)
- Background noise reduction
- Normalized volume levels

**Waveform Visualization:**
- Use Web Audio API
- Real-time frequency analysis
- Animated bars synchronized with speech
- Color-coded by speaker (AI vs human)

---

## 📊 Mock Data Structure

### Sample Lead Object (Sarah Chen)
```javascript
{
  id: "LC-2025-8472",
  firstName: "Sarah",
  lastName: "Chen",
  email: "sarah.chen@email.com",
  phone: "+65 9123 4567",
  age: 32,
  maritalStatus: "Married",
  location: "Singapore, District 10",

  leadScore: 87,
  conversionProbability: 75,
  estimatedLTV: 63000,
  stage: "Qualified",
  temperature: "hot",

  triggerEvents: [
    {
      type: "pregnancy",
      detected: "2025-10-01T08:15:00Z",
      intentWindow: "active",
      daysRemaining: 58
    },
    {
      type: "birthday",
      date: "2025-11-08",
      daysUntil: 24
    }
  ],

  currentCoverage: [
    {
      type: "Hospitalization Shield",
      premium: 85,
      coverage: 50000,
      policyNumber: "AIA-2023-847362",
      status: "active",
      renewalDate: "2026-06-15"
    }
  ],

  coverageGaps: [
    { type: "maternity", severity: "critical", estimatedRisk: 20000 },
    { type: "life_insurance", severity: "critical", estimatedRisk: 500000 },
    { type: "critical_illness", severity: "moderate", estimatedRisk: 100000 },
    { type: "newborn", severity: "moderate", estimatedRisk: 50000 }
  ],

  recommendedProducts: [
    { name: "Maternity Protection Plan", premium: 180, closeProbability: 0.85 },
    { name: "Life Insurance ($500K)", premium: 120, closeProbability: 0.72 },
    { name: "Critical Illness Rider", premium: 95, closeProbability: 0.68 },
    { name: "Newborn Coverage Package", premium: 45, closeProbability: 0.78 }
  ],

  touchpoints: [
    {
      id: "TP-001",
      type: "voice_call",
      timestamp: "2025-10-15T19:32:00Z",
      duration: 222,  // seconds
      agent: "Emma (AI)",
      campaign: "Pregnancy Nurture - Call #3",
      sentiment: 8.2,
      outcome: "in_progress",
      transcript: [...],
      recordingUrl: "/audio/call-001.mp3"
    },
    // ... 7 more touchpoints
  ],

  behavioralInsights: {
    communicationStyle: "Responsive, appreciates education",
    decisionMaking: "Joint with husband",
    objections: ["Feeling overwhelmed", "Need time to think"],
    painPoints: ["Unclear where to start", "Affordability concern"],
    positiveSignals: ["That would be helpful", "asks questions"],
    engagementPattern: "Evenings 7-9PM",
    competitorsMentioned: ["Prudential", "Manulife"],
    emotionalState: "Anxious about being prepared"
  },

  nextActions: [
    {
      action: "Book specialist consultation",
      priority: "high",
      deadline: "2025-10-17T00:00:00Z",
      assignedTo: "Rachel Tan"
    }
  ]
}
```

---

## 🚀 Implementation Phases

### Phase 1: Core Structure (Week 1)
- [x] Set up project structure
- [ ] Create global CSS and component library
- [ ] Build navigation and routing system
- [ ] Implement mock data management
- [ ] Create login page

### Phase 2: Dashboard & Calling (Week 2)
- [ ] Build main dashboard with live stats
- [ ] Implement AI calling center interface
- [ ] Create call simulation engine
- [ ] Add waveform visualization
- [ ] Integrate Web Speech API

### Phase 3: Lead Management (Week 3)
- [ ] Build lead profile pages
- [ ] Implement conversation history
- [ ] Create call recording playback
- [ ] Add AI insights visualization
- [ ] Build agent handoff queue

### Phase 4: Analytics & Campaigns (Week 4)
- [ ] Create analytics dashboard
- [ ] Implement data visualizations
- [ ] Build campaign management
- [ ] Add calendar integration
- [ ] Create ROI calculators

### Phase 5: Demo Mode & Polish (Week 5)
- [ ] Build guided demo walkthrough
- [ ] Add animations and micro-interactions
- [ ] Implement Sarah Chen use case automation
- [ ] Performance optimization
- [ ] Cross-browser testing

### Phase 6: Final Polish (Week 6)
- [ ] User testing and feedback
- [ ] Bug fixes and refinements
- [ ] Documentation
- [ ] Deployment preparation
- [ ] Executive presentation deck

---

## ✅ Success Metrics for Prototype

**Technical Excellence:**
- [ ] Works flawlessly in Chrome, Safari, Firefox, Edge
- [ ] Responsive design across mobile, tablet, desktop
- [ ] Page load times < 2 seconds
- [ ] No console errors
- [ ] Smooth 60fps animations

**User Experience:**
- [ ] Executive can complete demo without guidance
- [ ] All strategic features visibly demonstrated
- [ ] Calling feature feels authentic
- [ ] Data visualizations are clear and impactful
- [ ] "Wow factor" achieved in first 30 seconds

**Business Impact:**
- [ ] Clearly demonstrates ROI
- [ ] Shows complete lead journey
- [ ] Highlights competitive advantages
- [ ] Addresses all problem statements from strategic doc
- [ ] Builds confidence in feasibility

---

**Document Version:** 1.0
**Last Updated:** October 15, 2025
**Next Review:** Upon completion of Phase 1

---

*"A prototype is worth a thousand meetings. Let's build something that speaks for itself."*
