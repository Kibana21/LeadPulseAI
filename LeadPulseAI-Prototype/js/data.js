// ================================================================
// LeadPulseAI - Mock Data & State Management
// Version: 1.0
// ================================================================

// ============= Sarah Chen - Complete Lead Profile =============
const sarahChen = {
    id: "LC-2025-8472",
    firstName: "Sarah",
    lastName: "Chen",
    fullName: "Sarah Chen",
    email: "sarah.chen@email.com",
    phone: "+65 9123 4567",
    age: 32,
    maritalStatus: "Married",
    location: "Singapore, District 10",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%239333EA' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3ESC%3C/text%3E%3C/svg%3E",

    // Lead Intelligence
    leadScore: 87,
    conversionProbability: 75,
    estimatedLTV: 63000,
    stage: "Qualified",
    temperature: "hot", // hot, warm, cold
    daysInPipeline: 23,
    engagementRate: 92,

    // Trigger Events
    triggerEvents: [
        {
            type: "pregnancy",
            title: "First Child Expected",
            detected: "2025-10-01T08:15:00+08:00",
            source: "Digital footprint + Website behavior",
            intentWindow: "active",
            totalDays: 72,
            daysElapsed: 14,
            daysRemaining: 58,
            priority: "critical"
        },
        {
            type: "birthday",
            title: "Birthday Approaching",
            date: "2025-11-08",
            daysUntil: 24,
            priority: "moderate"
        },
        {
            type: "policy_anniversary",
            title: "Policy Anniversary",
            date: "2026-06-15",
            daysUntil: 243,
            priority: "low"
        }
    ],

    // Current Coverage
    currentCoverage: [
        {
            type: "Hospitalization Shield",
            premium: 85,
            coverage: 50000,
            policyNumber: "AIA-2023-847362",
            status: "active",
            startDate: "2023-06-15",
            renewalDate: "2026-06-15"
        }
    ],

    // Coverage Gaps
    coverageGaps: [
        {
            type: "maternity",
            title: "No Maternity Coverage",
            severity: "critical",
            estimatedRisk: 20000,
            description: "$15-25K out-of-pocket delivery costs"
        },
        {
            type: "life_insurance",
            title: "No Life Insurance",
            severity: "critical",
            estimatedRisk: 500000,
            description: "Family unprotected if breadwinner loss"
        },
        {
            type: "critical_illness",
            title: "No Critical Illness Coverage",
            severity: "moderate",
            estimatedRisk: 100000,
            description: "Cancer/serious illness expenses uncovered"
        },
        {
            type: "newborn",
            title: "No Newborn Coverage",
            severity: "moderate",
            estimatedRisk: 50000,
            description: "Baby health issues from day 1 not covered"
        }
    ],

    // Recommended Products
    recommendedProducts: [
        {
            id: "PROD-001",
            name: "Maternity Protection Plan",
            premium: 180,
            closeProbability: 0.85,
            benefits: [
                "Full delivery coverage up to $25K",
                "Prenatal care included",
                "Complications coverage",
                "Private hospital access"
            ]
        },
        {
            id: "PROD-002",
            name: "Life Insurance ($500K)",
            premium: 120,
            closeProbability: 0.72,
            benefits: [
                "$500K death benefit",
                "Terminal illness rider",
                "Accidental death double payout",
                "Premium waiver for disability"
            ]
        },
        {
            id: "PROD-003",
            name: "Critical Illness Rider",
            premium: 95,
            closeProbability: 0.68,
            benefits: [
                "37 critical illnesses covered",
                "Lump sum payout on diagnosis",
                "Early stage cancer coverage",
                "Multiple claim benefit"
            ]
        },
        {
            id: "PROD-004",
            name: "Newborn Coverage Package",
            premium: 45,
            closeProbability: 0.78,
            benefits: [
                "Coverage from day 1",
                "Congenital conditions included",
                "NICU expenses covered",
                "Vaccination coverage"
            ]
        }
    ],

    // Behavioral Insights
    behavioralInsights: {
        communicationStyle: "Responsive, appreciates education",
        decisionMaking: "Joint with husband (mentioned 3x)",
        objections: ["Feeling overwhelmed", "Need time to think", "Comparing competitors"],
        painPoints: ["Unclear where to start", "Affordability concern", "Too much information"],
        positiveSignals: ["That would be helpful", "asks questions", "responds quickly"],
        engagementPattern: "Evenings 7-9PM (high response rate)",
        preferredChannel: "Voice calls > SMS > Email",
        competitorsMentioned: ["Prudential ($320/month quote)", "Manulife (researching)"],
        emotionalState: "Anxious about being prepared for baby",
        trustLevel: "high"
    },

    // AI Recommended Approach
    aiStrategy: {
        tone: "Gentle, educational, non-pushy",
        focus: "Peace of mind for baby's arrival",
        positioning: "Protection partner, not just insurer",
        urgency: "Limited-time new parent offer",
        nextBestActions: [
            "Book specialist consultation within 48 hours",
            "Send competitor comparison analysis tonight",
            "Activate new parent bundle discount",
            "Prepare agent Rachel Tan for handoff"
        ]
    },

    // Complete Touchpoint History
    touchpoints: [
        {
            id: "TP-008",
            number: 8,
            type: "voice_call",
            timestamp: "2025-10-15T19:32:00+08:00",
            duration: 0, // ongoing
            status: "in_progress",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Pregnancy Nurture - Call #3",
            sentiment: 8.2,
            sentimentLabel: "Positive",
            intent: "high",
            engagement: "strong",
            outcome: "in_progress",
            conversionProbChange: +7,
            summary: "Discussing maternity coverage and competitor comparison",
            transcript: [
                {
                    timestamp: "00:00:03",
                    speaker: "ai",
                    name: "Emma",
                    text: "Good evening, Sarah? This is Emma from AIA Singapore. Do you have a moment to chat?",
                    sentiment: 6.5,
                    sentimentLabel: "Neutral"
                },
                {
                    timestamp: "00:00:08",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Um, yes... who is this again?",
                    sentiment: 5.2,
                    sentimentLabel: "Confused"
                },
                {
                    timestamp: "00:00:11",
                    speaker: "ai",
                    name: "Emma",
                    text: "I'm Emma, calling from AIA. We noticed you're an existing member with us, and I wanted to reach out personally to congratulate you on your exciting news about expecting your first child. Is now a good time to talk?",
                    sentiment: 7.8,
                    sentimentLabel: "Positive"
                },
                {
                    timestamp: "00:00:22",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Oh... thank you! Yes, it's exciting. How did you know?",
                    sentiment: 7.9,
                    sentimentLabel: "Positive"
                },
                {
                    timestamp: "00:00:28",
                    speaker: "ai",
                    name: "Emma",
                    text: "As your insurance partner, we monitor key life moments to ensure you always have the right protection. Becoming a parent is one of the most important transitions, and we want to make sure you and your growing family are well-covered. Can I ask - have you had a chance to review your current coverage since your wonderful news?",
                    sentiment: 7.5,
                    sentimentLabel: "Positive"
                },
                {
                    timestamp: "00:00:42",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Not really... I've been meaning to look into it, but I'm not sure where to start.",
                    sentiment: 6.1,
                    sentimentLabel: "Uncertain"
                },
                {
                    timestamp: "00:00:48",
                    speaker: "ai",
                    name: "Emma",
                    text: "That's completely normal - there's so much to think about! I'd love to help simplify this for you. Based on your current hospitalization plan with us, I noticed there might be a few gaps as you prepare for your baby's arrival. Would you be interested in a quick 5-minute overview of what other parents-to-be typically consider?",
                    sentiment: 7.8,
                    sentimentLabel: "Helpful"
                },
                {
                    timestamp: "00:00:58",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Sure, that would be helpful actually.",
                    sentiment: 7.6,
                    sentimentLabel: "Receptive"
                },
                {
                    timestamp: "00:01:02",
                    speaker: "ai",
                    name: "Emma",
                    text: "Wonderful! So, most expecting mothers focus on three main areas. First is maternity coverage itself - ensuring delivery and prenatal care are covered. Your current plan doesn't include this, which could mean $15 to $25,000 in out-of-pocket expenses. Second is life insurance to protect your family's future. And third is coverage for your newborn from day one. Does this resonate with what you've been thinking about?",
                    sentiment: 7.4,
                    sentimentLabel: "Educational"
                },
                {
                    timestamp: "00:01:25",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Yes, exactly. I hadn't realized the gaps were that significant.",
                    sentiment: 7.2,
                    sentimentLabel: "Concerned"
                },
                {
                    timestamp: "00:01:30",
                    speaker: "ai",
                    name: "Emma",
                    text: "I'm glad we're having this conversation now while there's still time to get everything in place. Many parents wait until it's too late or face unexpected bills. Now, I know you mentioned you've been looking at other insurers - Prudential and Manulife, right? Would it be helpful if I showed you how our coverage compares side-by-side?",
                    sentiment: 7.9,
                    sentimentLabel: "Proactive"
                },
                {
                    timestamp: "00:01:48",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Yes, that would be great. I got a quote from Prudential for $320 a month.",
                    sentiment: 7.5,
                    sentimentLabel: "Interested"
                },
                {
                    timestamp: "00:01:54",
                    speaker: "ai",
                    name: "Emma",
                    text: "That's good to know. Let me be transparent with you - our goal isn't necessarily to be the cheapest, but to provide the most comprehensive protection tailored to your specific needs. With that Prudential quote, are you clear on exactly what's covered and what's not?",
                    sentiment: 7.3,
                    sentimentLabel: "Honest"
                },
                {
                    timestamp: "00:02:05",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Not entirely... it was a bit confusing actually.",
                    sentiment: 6.8,
                    sentimentLabel: "Confused"
                },
                {
                    timestamp: "00:02:09",
                    speaker: "ai",
                    name: "Emma",
                    text: "That's exactly why I'd love to connect you with Rachel Tan, our family protection specialist. She can do a detailed side-by-side comparison, show you exactly what you're getting with each option, and help you make an informed decision. She's helped over 200 expecting mothers this year alone. Would you be open to a call with her?",
                    sentiment: 8.1,
                    sentimentLabel: "Solution-focused"
                },
                {
                    timestamp: "00:02:28",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Okay, that actually sounds reasonable. When can she call?",
                    sentiment: 8.0,
                    sentimentLabel: "Agreeable"
                },
                {
                    timestamp: "00:02:32",
                    speaker: "ai",
                    name: "Emma",
                    text: "Fantastic! Let me check Rachel's calendar... She has availability tomorrow at 6 PM or Thursday at 7 PM. Which works better for you?",
                    sentiment: 7.8,
                    sentimentLabel: "Facilitating"
                },
                {
                    timestamp: "00:02:42",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Thursday at 7 PM works.",
                    sentiment: 7.6,
                    sentimentLabel: "Committed"
                },
                {
                    timestamp: "00:02:45",
                    speaker: "ai",
                    name: "Emma",
                    text: "Perfect! I've just booked that for you. Rachel will call you on Thursday at 7 PM. You'll receive a confirmation email with her direct number as well, just in case. In the meantime, if you could send over any competitor quotes you've received, Rachel can prepare a detailed comparison for your call. Does that sound good?",
                    sentiment: 8.3,
                    sentimentLabel: "Organized"
                },
                {
                    timestamp: "00:03:02",
                    speaker: "lead",
                    name: "Sarah Chen",
                    text: "Yes, that's great. Thank you, Emma!",
                    sentiment: 8.5,
                    sentimentLabel: "Satisfied"
                },
                {
                    timestamp: "00:03:06",
                    speaker: "ai",
                    name: "Emma",
                    text: "You're very welcome, Sarah. Rachel is excellent - you're in great hands. I'll check in with you after your call to see if you need anything else. Take care!",
                    sentiment: 8.2,
                    sentimentLabel: "Warm"
                }
            ],
            keyMoments: [
                { time: "00:00:22", description: "Sarah asks clarifying question (engagement signal)" },
                { time: "00:00:58", description: "Sarah agrees to overview (buy-in achieved)" },
                { time: "00:01:48", description: "Sarah shares competitor quote (trust indicator)" },
                { time: "00:02:28", description: "Sarah agrees to specialist call (conversion milestone)" },
                { time: "00:02:42", description: "Appointment confirmed (major win)" }
            ],
            aiActions: [
                "Appointment booked with Rachel Tan for Oct 17, 7 PM",
                "Calendar invite sent to Sarah",
                "Agent briefing auto-generated for Rachel",
                "Competitor analysis requested from Sarah",
                "Follow-up email scheduled for Oct 16",
                "Lead status updated to 'Sales-Ready'"
            ],
            recordingUrl: "/assets/audio/sarah-call-3.mp3"
        },
        {
            id: "TP-007",
            number: 7,
            type: "sms",
            timestamp: "2025-10-11T07:15:00+08:00",
            status: "completed",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Mid-nurture engagement",
            sentiment: 7.5,
            sentimentLabel: "Positive",
            engagement: "high",
            outcome: "replied",
            responseTime: "2 hours",
            conversionProbChange: +7,
            summary: "Check-in SMS - Sarah responded positively",
            messages: [
                {
                    from: "ai",
                    time: "07:15",
                    text: "Hi Sarah, it's Emma from AIA 😊 Just a quick check-in - how are you feeling? I know the first trimester can be tough! If you have any quick questions about your coverage, feel free to reply or I can give you a call. No pressure - just here to help! - Emma"
                },
                {
                    from: "lead",
                    time: "09:23",
                    text: "Thanks Emma! Feeling better now. Still haven't decided on the insurance yet but appreciate you checking in."
                },
                {
                    from: "ai",
                    time: "09:25",
                    text: "So glad you're feeling better! Take all the time you need - your health comes first. I'll reach out again in a couple of weeks. In the meantime, if anything comes up, you know where to find me! 😊"
                }
            ],
            aiAnalysis: "Positive engagement signal - Sarah responded voluntarily. No buying intent yet, but relationship building successful. Next action: Schedule call for entering 2nd trimester (higher intent window)."
        },
        // Add more touchpoints (truncated for brevity)
    ],

    // Next Actions
    nextActions: [
        {
            action: "Book specialist consultation with Rachel Tan",
            priority: "high",
            deadline: "2025-10-17T19:00:00+08:00",
            status: "scheduled",
            assignedTo: "Rachel Tan"
        },
        {
            action: "Send competitor comparison analysis",
            priority: "high",
            deadline: "2025-10-16T20:00:00+08:00",
            status: "pending",
            assignedTo: "AI System"
        },
        {
            action: "Activate limited-time new parent bundle offer",
            priority: "medium",
            deadline: "2025-10-17T00:00:00+08:00",
            status: "pending",
            assignedTo: "Campaign System"
        }
    ]
};

// ============= Other Active Leads =============
const activeLeads = [
    {
        id: "LC-2025-8473",
        name: "Michael Tan",
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%230066CC' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3EMT%3C/text%3E%3C/svg%3E",
        leadScore: 82,
        conversionProbability: 68,
        temperature: "warm",
        stage: "Engaged",
        lastContact: "1 day ago",
        nextAction: "Follow-up call",
        estimatedLTV: 42000
    },
    {
        id: "LC-2025-8474",
        name: "Lisa Wong",
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%2300C853' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3ELW%3C/text%3E%3C/svg%3E",
        leadScore: 91,
        conversionProbability: 82,
        temperature: "hot",
        stage: "Appointment Confirmed",
        lastContact: "2 hours ago",
        nextAction: "Meeting today 6 PM",
        estimatedLTV: 58000
    },
    {
        id: "LC-2025-8475",
        name: "David Lim",
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23FF9800' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3EDL%3C/text%3E%3C/svg%3E",
        leadScore: 75,
        conversionProbability: 55,
        temperature: "warm",
        stage: "Nurturing",
        lastContact: "3 days ago",
        nextAction: "Birthday call scheduled",
        estimatedLTV: 38000
    }
];

// ============= Dashboard Stats =============
const dashboardStats = {
    revenueThisMonth: 12400000,
    revenueChange: +18,
    activeAICalls: 47,
    activeCallsChange: +12,
    conversionRate: 52.3,
    conversionRateChange: +20.3,
    avgTimeToConvert: 54,
    avgTimeChange: -36,
    leadsUnderNurturing: 8450,
    leadsChange: +15,
    hotLeadsReady: 247,
    hotLeadsChange: +42,
    aiCallsToday: 1247,
    appointmentsToday: 342,
    leadsCaptured: 32450
};

// ============= Live Activity Feed =============
const liveActivity = [
    {
        type: "call_active",
        lead: "Sarah Chen",
        agent: "Emma (AI)",
        duration: "3m 42s",
        sentiment: "Positive 😊",
        status: "Discussing maternity coverage",
        timestamp: "3 min ago"
    },
    {
        type: "handoff",
        lead: "Michael Tan",
        agent: "Rachel Tan",
        appointment: "Thu 7PM",
        status: "Agent handoff scheduled",
        temperature: "hot",
        timestamp: "2 min ago"
    },
    {
        type: "call_completed",
        lead: "Lisa Wong",
        agent: "Emma (AI)",
        duration: "8m 32s",
        outcome: "Follow-up scheduled",
        timestamp: "5 min ago"
    },
    {
        type: "trigger",
        lead: "David Lim",
        trigger: "Birthday",
        campaign: "Birthday Wishes & Offer",
        status: "Call scheduled for 8 PM",
        timestamp: "8 min ago"
    }
];

// ============= Campaigns =============
const campaigns = [
    {
        id: "CAMP-001",
        name: "Pregnancy Nurture Campaign",
        status: "active",
        leadsEnrolled: 347,
        converted: 89,
        conversionRate: 25.6,
        active: 258,
        avgConversionTime: 23,
        revenue: 1200000,
        touchpoints: 12,
        duration: 90
    },
    {
        id: "CAMP-002",
        name: "Birthday Celebration Campaign",
        status: "active",
        leadsEnrolled: 1247,
        converted: 156,
        conversionRate: 12.5,
        active: 892,
        avgConversionTime: 14,
        revenue: 580000,
        touchpoints: 6,
        duration: 30
    }
];

// ============= Export Data =============
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        sarahChen,
        activeLeads,
        dashboardStats,
        liveActivity,
        campaigns
    };
}
