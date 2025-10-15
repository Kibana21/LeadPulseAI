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
            source: "Hospital Partnership Program - Thomson Medical inquiry form",
            details: "Sarah filled inquiry form for First-Time Parents Package with consent checkbox",
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

// ============= Michael Tan - Young Professional Lead Profile =============
const michaelTan = {
    id: "LC-2025-8473",
    firstName: "Michael",
    lastName: "Tan",
    fullName: "Michael Tan",
    email: "michael.tan@tiktok.com",
    phone: "+65 9234 5678",
    age: 28,
    maritalStatus: "Single",
    location: "Singapore, Central",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%230066CC' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3EMT%3C/text%3E%3C/svg%3E",

    // Lead Intelligence
    leadScore: 82,
    conversionProbability: 68,
    estimatedLTV: 52000,
    stage: "Engaged",
    temperature: "warm",
    daysInPipeline: 14,
    engagementRate: 88,

    // Trigger Events
    triggerEvents: [
        {
            type: "career_milestone",
            title: "Downloaded Young Professionals Guide",
            detected: "2025-10-01T23:45:00+08:00",
            source: "AIA Career Portal - Downloaded '25-30 Insurance Planning Checklist'",
            details: "Came from LinkedIn ad, filled form with opt-in consent",
            intentWindow: "active",
            totalDays: 30,
            daysElapsed: 14,
            daysRemaining: 16,
            priority: "high"
        }
    ],

    // Current Coverage
    currentCoverage: [
        {
            type: "Company Health Insurance",
            premium: 0,
            coverage: 30000,
            provider: "TikTok Corporate Plan",
            status: "active",
            limitations: "Basic hospitalization only, ends if leaves company"
        }
    ],

    // Coverage Gaps
    coverageGaps: [
        {
            type: "critical_illness",
            title: "No Critical Illness Coverage",
            severity: "critical",
            estimatedRisk: 500000,
            description: "Motivated by friend's cancer diagnosis at 27"
        },
        {
            type: "life_insurance",
            title: "No Life Insurance",
            severity: "moderate",
            estimatedRisk: 300000,
            description: "No dependents yet, but planning ahead"
        }
    ],

    // Recommended Products
    recommendedProducts: [
        {
            id: "PROD-005",
            name: "Critical Illness Protection ($500K)",
            premium: 125,
            closeProbability: 0.78,
            benefits: [
                "37 critical illnesses covered",
                "Early stage cancer coverage",
                "Lump sum payout on diagnosis",
                "Premium waiver for total disability"
            ]
        },
        {
            id: "PROD-006",
            name: "Life Insurance ($300K)",
            premium: 60,
            closeProbability: 0.65,
            benefits: [
                "$300K death benefit",
                "Accidental death double payout",
                "Terminal illness rider",
                "Portable (not tied to employer)"
            ]
        }
    ],

    // Behavioral Insights
    behavioralInsights: {
        communicationStyle: "Tech-savvy, prefers WhatsApp and mobile",
        decisionMaking: "Data-driven, needs to understand details",
        objections: ["Too young for insurance?", "Premium seems high", "What if I switch jobs?"],
        painPoints: ["Friend's health scare made him anxious", "Confused by insurance jargon"],
        positiveSignals: ["Asks detailed questions", "Responsive on weekends", "Downloaded guide at 11:45 PM"],
        engagementPattern: "Late nights (10-11 PM) and weekends",
        preferredChannel: "WhatsApp > Voice calls > Email",
        competitorsMentioned: ["Prudential (researching)"],
        emotionalState: "Anxious about health risks, motivated to act",
        trustLevel: "moderate-high"
    },

    // AI Recommended Approach
    aiStrategy: {
        tone: "Casual, tech-savvy, data-driven",
        focus: "Lock in low premiums while young and healthy",
        positioning: "Smart financial planning for career growth",
        urgency: "Premiums increase with age",
        nextBestActions: [
            "Send WhatsApp quote breakdown",
            "Connect with David Lim (Young Professionals Specialist)",
            "Show app demo for claims process",
            "Share customer reviews from tech industry"
        ]
    },

    // Touchpoint History
    touchpoints: [
        {
            id: "TP-MT-005",
            number: 5,
            type: "voice_call",
            timestamp: "2025-10-09T19:30:00+08:00",
            duration: 720,
            status: "completed",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Young Professional Nurture - Call #3",
            sentiment: 7.8,
            sentimentLabel: "Positive",
            intent: "high",
            engagement: "strong",
            outcome: "handoff_scheduled",
            conversionProbChange: +12,
            summary: "Overcame price objection, scheduled specialist call",
            transcript: [
                {
                    timestamp: "00:00:03",
                    speaker: "ai",
                    name: "Emma",
                    text: "Hey Michael, it's Emma from AIA. How's it going?",
                    sentiment: 7.0,
                    sentimentLabel: "Friendly"
                },
                {
                    timestamp: "00:00:07",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Hi Emma. Yeah, doing well. Just finished work.",
                    sentiment: 6.5,
                    sentimentLabel: "Neutral"
                },
                {
                    timestamp: "00:00:11",
                    speaker: "ai",
                    name: "Emma",
                    text: "Perfect timing then! I saw you checked out the quote I sent you - $185 a month for critical illness and life insurance. What are your thoughts?",
                    sentiment: 7.2,
                    sentimentLabel: "Direct"
                },
                {
                    timestamp: "00:00:22",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Honestly? It seems a bit high for my age. I'm only 28.",
                    sentiment: 5.8,
                    sentimentLabel: "Hesitant"
                },
                {
                    timestamp: "00:00:28",
                    speaker: "ai",
                    name: "Emma",
                    text: "I totally get that. Let me break it down differently - that's $6 a day. Less than your lunch budget, right? And here's the thing - at 28, you're actually getting the BEST rates. It only gets more expensive as you get older.",
                    sentiment: 7.8,
                    sentimentLabel: "Persuasive"
                },
                {
                    timestamp: "00:00:45",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Hmm, I never thought about it that way. $6 a day doesn't sound as bad.",
                    sentiment: 7.0,
                    sentimentLabel: "Reconsidering"
                },
                {
                    timestamp: "00:00:52",
                    speaker: "ai",
                    name: "Emma",
                    text: "Exactly! Plus, you mentioned your friend who got diagnosed with cancer at 27. Think about it - if something like that happened to you without coverage, you'd be looking at potentially hundreds of thousands in medical bills. $6 a day is nothing compared to that risk.",
                    sentiment: 7.5,
                    sentimentLabel: "Empathetic"
                },
                {
                    timestamp: "00:01:08",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Yeah... seeing what he went through really shook me up. The medical bills were insane.",
                    sentiment: 6.8,
                    sentimentLabel: "Concerned"
                },
                {
                    timestamp: "00:01:15",
                    speaker: "ai",
                    name: "Emma",
                    text: "I can imagine. That's exactly why you're being smart by looking into this now. Most people wait until it's too late, or until they already have health issues and can't get coverage. You're 28, healthy, and can lock in these low rates for life.",
                    sentiment: 8.0,
                    sentimentLabel: "Supportive"
                },
                {
                    timestamp: "00:01:32",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Okay, that makes sense. But I still want to understand exactly what I'm getting. Can you explain it in simple terms?",
                    sentiment: 7.5,
                    sentimentLabel: "Interested"
                },
                {
                    timestamp: "00:01:42",
                    speaker: "ai",
                    name: "Emma",
                    text: "Absolutely! So you're getting two things: First, critical illness coverage for $500K. If you're diagnosed with cancer, heart attack, stroke, or any of 37 major illnesses, you get a lump sum payment of half a million. Use it however you want - medical bills, living expenses, whatever. Second, life insurance for $300K. If something happens to you, your family gets that money.",
                    sentiment: 7.8,
                    sentimentLabel: "Educational"
                },
                {
                    timestamp: "00:02:10",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Got it. And this is portable right? Like if I switch jobs, I don't lose it?",
                    sentiment: 7.2,
                    sentimentLabel: "Clarifying"
                },
                {
                    timestamp: "00:02:17",
                    speaker: "ai",
                    name: "Emma",
                    text: "Yes! 100% portable. It's YOUR policy, not your employer's. You could quit tomorrow and start your own business - this coverage stays with you. That's actually a huge advantage over company insurance which disappears the day you leave.",
                    sentiment: 8.2,
                    sentimentLabel: "Reassuring"
                },
                {
                    timestamp: "00:02:32",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Okay that's really important to me actually. I might move to a startup next year.",
                    sentiment: 7.8,
                    sentimentLabel: "Positive"
                },
                {
                    timestamp: "00:02:38",
                    speaker: "ai",
                    name: "Emma",
                    text: "Perfect! Then you definitely need your own coverage. Look, I want you to feel 100% confident about this. How about I connect you with David Lim, our critical illness specialist? He works specifically with young professionals in tech. He can walk you through everything in detail, show you the app, explain the claim process - all that good stuff. Sound good?",
                    sentiment: 8.0,
                    sentimentLabel: "Solution-focused"
                },
                {
                    timestamp: "00:02:58",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Yeah, that would be helpful. But I'm super busy at work. Can we do it after 7 PM?",
                    sentiment: 7.5,
                    sentimentLabel: "Agreeable"
                },
                {
                    timestamp: "00:03:05",
                    speaker: "ai",
                    name: "Emma",
                    text: "Of course! David is flexible with timing. How about tomorrow at 7 PM? I'll have him give you a call, and you can ask him anything. He's helped over 50 young professionals this quarter alone, so he really gets your situation.",
                    sentiment: 8.0,
                    sentimentLabel: "Accommodating"
                },
                {
                    timestamp: "00:03:20",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Tomorrow at 7 works. Sounds good.",
                    sentiment: 8.0,
                    sentimentLabel: "Committed"
                },
                {
                    timestamp: "00:03:24",
                    speaker: "ai",
                    name: "Emma",
                    text: "Awesome Michael! You'll get a calendar invite in the next few minutes with David's direct number too, just in case. And hey - smart move looking into this now. Your 28-year-old self is way smarter than most people!",
                    sentiment: 8.5,
                    sentimentLabel: "Encouraging"
                },
                {
                    timestamp: "00:03:38",
                    speaker: "lead",
                    name: "Michael Tan",
                    text: "Haha thanks Emma. Talk soon.",
                    sentiment: 8.2,
                    sentimentLabel: "Positive"
                },
                {
                    timestamp: "00:03:41",
                    speaker: "ai",
                    name: "Emma",
                    text: "You got it! Have a great evening Michael!",
                    sentiment: 8.0,
                    sentimentLabel: "Warm"
                }
            ],
            keyMoments: [
                { time: "00:00:28", description: "Price objection raised - $185 seems high" },
                { time: "00:00:45", description: "$6/day reframe worked - objection softened" },
                { time: "00:01:08", description: "Friend's cancer story reinforced urgency" },
                { time: "00:02:17", description: "Portability concern addressed successfully" },
                { time: "00:03:20", description: "Specialist appointment confirmed - major win" }
            ],
            aiActions: [
                "Appointment scheduled with David Lim for Oct 10, 7 PM",
                "Calendar invite sent to Michael",
                "Specialist briefing auto-generated for David",
                "Lead status updated to 'Sales-Ready'"
            ],
            recordingUrl: "/assets/audio/michael-call-5.mp3"
        },
        {
            id: "TP-MT-006",
            number: 6,
            type: "whatsapp",
            timestamp: "2025-10-13T12:00:00+08:00",
            status: "completed",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Young Professional Nurture",
            sentiment: 8.5,
            sentimentLabel: "Positive",
            engagement: "high",
            outcome: "conversion",
            conversionProbChange: +15,
            summary: "Michael ready to sign up - application sent",
            messages: [
                {
                    from: "ai",
                    time: "12:00",
                    text: "Hi Michael! Hope you had a great weekend. Any questions from your call with David?"
                },
                {
                    from: "lead",
                    time: "12:18",
                    text: "Nope, let's do it. How do I sign up?"
                },
                {
                    from: "ai",
                    time: "12:19",
                    text: "Awesome! 🎉 I'll have David send the application link. Takes 5 min on mobile. You'll get Critical Illness $500K + Life $300K for $185/month."
                },
                {
                    from: "lead",
                    time: "12:20",
                    text: "Perfect. Sending it now?"
                },
                {
                    from: "ai",
                    time: "12:20",
                    text: "Yes! Check your WhatsApp in 2 minutes. David will send the secure link. Thanks for trusting us Michael! 😊"
                }
            ]
        }
    ],

    // Next Actions
    nextActions: [
        {
            action: "Send mobile application link",
            priority: "critical",
            deadline: "2025-10-13T12:30:00+08:00",
            status: "completed",
            assignedTo: "David Lim"
        },
        {
            action: "Follow up on application completion",
            priority: "high",
            deadline: "2025-10-13T18:00:00+08:00",
            status: "pending",
            assignedTo: "AI System"
        }
    ]
};

// ============= Linda Wong - Policy Anniversary Upsell Profile =============
const lindaWong = {
    id: "LC-2025-8474",
    firstName: "Linda",
    lastName: "Wong",
    fullName: "Linda Wong",
    email: "linda.wong@company.com.sg",
    phone: "+65 9345 6789",
    age: 45,
    maritalStatus: "Married",
    children: 2,
    location: "Singapore, East Coast",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%2300C853' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3ELW%3C/text%3E%3C/svg%3E",

    // Lead Intelligence
    leadScore: 91,
    conversionProbability: 82,
    estimatedLTV: 55000,
    stage: "Upsell - Ready to Close",
    temperature: "hot",
    daysInPipeline: 20,
    engagementRate: 94,
    customerType: "existing", // Existing customer upsell

    // Trigger Events
    triggerEvents: [
        {
            type: "policy_anniversary",
            title: "10-Year Policy Anniversary",
            detected: "2025-06-15T00:00:00+08:00",
            source: "CRM Alert - Policy Anniversary Automated Review",
            details: "10-year anniversary, coverage outdated for current family needs",
            intentWindow: "active",
            totalDays: 60,
            daysElapsed: 20,
            daysRemaining: 40,
            priority: "high"
        },
        {
            type: "life_stage_change",
            title: "Children Entering Teenage Years",
            detected: "2025-06-15T00:00:00+08:00",
            source: "CRM Data Analysis - Kids now 14 and 11",
            details: "Education costs rising, coverage gap identified",
            priority: "high"
        }
    ],

    // Current Coverage
    currentCoverage: [
        {
            type: "Life Insurance",
            premium: 95,
            coverage: 200000,
            policyNumber: "AIA-2015-224567",
            status: "active",
            startDate: "2015-06-15",
            renewalDate: "2026-06-15",
            yearsWithAIA: 10
        }
    ],

    // Coverage Gaps
    coverageGaps: [
        {
            type: "education_funding",
            title: "Insufficient Education Coverage",
            severity: "critical",
            estimatedRisk: 300000,
            description: "$150K per child for university - current $200K won't cover both"
        },
        {
            type: "life_insurance_gap",
            title: "Coverage Outdated for Current Needs",
            severity: "high",
            estimatedRisk: 400000,
            description: "Bought 10 years ago when kids were babies, needs $600K+ now"
        },
        {
            type: "critical_illness",
            title: "No Critical Illness Rider",
            severity: "moderate",
            estimatedRisk: 100000,
            description: "Age 45, higher risk - should add CI coverage"
        }
    ],

    // Recommended Products
    recommendedProducts: [
        {
            id: "PROD-007",
            name: "Life Insurance Increase ($200K → $400K)",
            premium: 150,
            closeProbability: 0.88,
            benefits: [
                "Doubled coverage to $400K total",
                "Covers both children's university fees",
                "Family fully protected",
                "Existing policy retained"
            ]
        },
        {
            id: "PROD-008",
            name: "Education Savings Plan",
            premium: 70,
            closeProbability: 0.82,
            benefits: [
                "Guaranteed $150K per child at age 18",
                "Covers university fees",
                "Waiver if parent passes",
                "Tax benefits"
            ]
        }
    ],

    // Behavioral Insights
    behavioralInsights: {
        communicationStyle: "Professional, values thoroughness",
        decisionMaking: "Joint with husband, budget-conscious",
        objections: ["Premium increase concerns", "Can we phase it?", "Need to discuss with husband"],
        painPoints: ["University fees anxiety", "Inflation worries", "Wants flexibility"],
        positiveSignals: ["10-year loyal customer", "Responds quickly", "Forwards emails to husband"],
        engagementPattern: "Evenings 7-9 PM, weekends mornings",
        preferredChannel: "Voice calls > Email > SMS",
        trustLevel: "very high (10-year customer)",
        customerSentiment: "Loyal, appreciates personalized service"
    },

    // AI Recommended Approach
    aiStrategy: {
        tone: "Warm, appreciative of loyalty, consultative",
        focus: "Children's future security and education funding",
        positioning: "Partner in family's journey, not just insurer",
        urgency: "Kids growing up fast, lock in rates before age 46",
        nextBestActions: [
            "Celebrate 10-year anniversary with special offer",
            "Connect with Patricia Ng (Family Specialist)",
            "Show phased approach to ease budget concerns",
            "Provide university cost projections"
        ]
    },

    // Touchpoint History
    touchpoints: [
        {
            id: "TP-LW-003",
            number: 3,
            type: "voice_call",
            timestamp: "2025-09-28T19:00:00+08:00",
            duration: 900,
            status: "completed",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Policy Anniversary Review",
            sentiment: 8.6,
            sentimentLabel: "Positive",
            intent: "high",
            engagement: "strong",
            outcome: "review_scheduled",
            conversionProbChange: +14,
            summary: "Linda agreed to comprehensive review, concerns about kids' education costs identified",
            transcript: [
                {
                    timestamp: "00:00:03",
                    speaker: "ai",
                    name: "Emma",
                    text: "Hi Linda! This is Emma from AIA. Do you have a moment to chat?",
                    sentiment: 7.5,
                    sentimentLabel: "Friendly"
                },
                {
                    timestamp: "00:00:08",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "Hi Emma. Yes, I just sat down actually. What's this about?",
                    sentiment: 7.0,
                    sentimentLabel: "Receptive"
                },
                {
                    timestamp: "00:00:14",
                    speaker: "ai",
                    name: "Emma",
                    text: "Perfect timing! I'm calling because your policy with us is hitting a major milestone - 10 years this month! First of all, congratulations on being with AIA for a whole decade. That's amazing.",
                    sentiment: 8.0,
                    sentimentLabel: "Appreciative"
                },
                {
                    timestamp: "00:00:28",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "Oh wow, has it been 10 years already? Time really flies!",
                    sentiment: 7.8,
                    sentimentLabel: "Surprised"
                },
                {
                    timestamp: "00:00:34",
                    speaker: "ai",
                    name: "Emma",
                    text: "It really does! And I bet your daughters have grown up a lot in that time too. How old are they now?",
                    sentiment: 7.5,
                    sentimentLabel: "Conversational"
                },
                {
                    timestamp: "00:00:40",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "Oh my goodness, yes. They're 14 and 11 now. It feels like just yesterday they were babies when I first bought that policy.",
                    sentiment: 8.2,
                    sentimentLabel: "Nostalgic"
                },
                {
                    timestamp: "00:00:50",
                    speaker: "ai",
                    name: "Emma",
                    text: "That's exactly what I wanted to talk about. When you bought your $200,000 life insurance policy 10 years ago, your daughters were tiny. But now they're heading toward their teenage years and thinking about university soon. Have you thought about whether your current coverage still matches your family's needs?",
                    sentiment: 7.8,
                    sentimentLabel: "Consultative"
                },
                {
                    timestamp: "00:01:08",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "Actually... I haven't really thought about it. We've just been paying the premiums every month. You think it's not enough anymore?",
                    sentiment: 7.0,
                    sentimentLabel: "Concerned"
                },
                {
                    timestamp: "00:01:17",
                    speaker: "ai",
                    name: "Emma",
                    text: "Well, let me ask you this - what do you think university will cost for each of your daughters? Ballpark figure?",
                    sentiment: 7.5,
                    sentimentLabel: "Probing"
                },
                {
                    timestamp: "00:01:24",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "Oh god... probably at least $150,000 each if they go overseas. Maybe $80-100K locally. It's terrifying to think about honestly.",
                    sentiment: 6.5,
                    sentimentLabel: "Anxious"
                },
                {
                    timestamp: "00:01:35",
                    speaker: "ai",
                    name: "Emma",
                    text: "You're absolutely right to be thinking about it. So here's the thing - your current $200,000 policy wouldn't even cover one child's university fees, let alone both, plus living expenses for your family if something happened. That's the gap I wanted to bring to your attention.",
                    sentiment: 7.8,
                    sentimentLabel: "Direct"
                },
                {
                    timestamp: "00:01:52",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "Oh... I never thought about it that way. You're right. $200K wouldn't be nearly enough now.",
                    sentiment: 7.2,
                    sentimentLabel: "Realizing"
                },
                {
                    timestamp: "00:02:00",
                    speaker: "ai",
                    name: "Emma",
                    text: "Most people don't until someone points it out. The good news is, you're not starting from scratch - you already have that foundation. We just need to update it to match where your family is now. Would you be open to a complimentary coverage review? No obligation, I just want to show you what makes sense for your family today.",
                    sentiment: 8.2,
                    sentimentLabel: "Helpful"
                },
                {
                    timestamp: "00:02:20",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "Yes, actually. I think I need to see this. My husband and I have been talking about the kids' education costs and it's been stressing us out.",
                    sentiment: 7.8,
                    sentimentLabel: "Interested"
                },
                {
                    timestamp: "00:02:30",
                    speaker: "ai",
                    name: "Emma",
                    text: "I totally understand. Education planning is one of the biggest stresses for parents. Here's what I'd like to do - I want to send you a comprehensive family protection review that shows your current coverage versus what's recommended based on your daughters' ages and future education needs. You can review it with your husband, and then we can set up a call to discuss. Sound good?",
                    sentiment: 8.0,
                    sentimentLabel: "Organized"
                },
                {
                    timestamp: "00:02:50",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "Yes, please do that. I definitely want to discuss it with my husband first before making any decisions.",
                    sentiment: 8.0,
                    sentimentLabel: "Agreeable"
                },
                {
                    timestamp: "00:02:58",
                    speaker: "ai",
                    name: "Emma",
                    text: "Of course! That's exactly the right approach. This is a family decision. I'll send that review to your email tonight, and it'll have some clear visuals showing the gap. Take your time reviewing it together, and I'll follow up in about 5 days to answer any questions. How does that sound?",
                    sentiment: 8.4,
                    sentimentLabel: "Respectful"
                },
                {
                    timestamp: "00:03:15",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "That sounds perfect. Thank you Emma. This is actually really helpful timing.",
                    sentiment: 8.8,
                    sentimentLabel: "Grateful"
                },
                {
                    timestamp: "00:03:22",
                    speaker: "ai",
                    name: "Emma",
                    text: "You're so welcome Linda. And thank you for being such a loyal customer for 10 years. We really appreciate it. I'll get that review sent over tonight, and talk to you soon!",
                    sentiment: 8.6,
                    sentimentLabel: "Warm"
                },
                {
                    timestamp: "00:03:34",
                    speaker: "lead",
                    name: "Linda Wong",
                    text: "Thanks Emma! Have a good evening.",
                    sentiment: 8.5,
                    sentimentLabel: "Positive"
                },
                {
                    timestamp: "00:03:37",
                    speaker: "ai",
                    name: "Emma",
                    text: "You too Linda! Talk soon!",
                    sentiment: 8.5,
                    sentimentLabel: "Friendly"
                }
            ],
            keyMoments: [
                { time: "00:00:40", description: "Linda mentions daughters are 14 and 11 now" },
                { time: "00:01:24", description: "Linda reveals education cost anxiety - $150K each" },
                { time: "00:01:52", description: "Realization moment - $200K won't be enough" },
                { time: "00:02:20", description: "Linda stressed about education costs - high engagement" },
                { time: "00:02:50", description: "Agreement to review - wants to discuss with husband" }
            ],
            aiActions: [
                "Family protection review generated and emailed",
                "Visual gap analysis included (current vs recommended)",
                "Follow-up scheduled for 5 days",
                "Lead status updated to 'Review Pending'",
                "Husband involvement noted for future calls"
            ],
            recordingUrl: "/assets/audio/linda-call-3.mp3"
        },
        {
            id: "TP-LW-006",
            number: 6,
            type: "voice_call",
            timestamp: "2025-10-05T19:00:00+08:00",
            duration: 720,
            status: "completed",
            agent: {
                type: "human",
                name: "Patricia Ng",
                avatar: "👩"
            },
            campaign: "Policy Anniversary Upsell",
            sentiment: 9.1,
            sentimentLabel: "Very Positive",
            engagement: "very high",
            outcome: "decision_to_proceed",
            conversionProbChange: +18,
            summary: "Linda and husband decided to proceed with Phase 1 upsell",
            keyMoments: [
                { time: "00:02:15", description: "Linda mentions university cost anxiety" },
                { time: "00:05:30", description: "Patricia shares personal story (builds trust)" },
                { time: "00:08:45", description: "Linda asks about phased approach" },
                { time: "00:11:20", description: "Agreement to proceed with Phase 1" }
            ],
            notes: "Linda very receptive. Husband on call too (joint decision). Agreed to $400K life + education savings. Will add CI next year (Phase 2)."
        }
    ],

    // Next Actions
    nextActions: [
        {
            action: "Process policy upgrade to $400K life coverage",
            priority: "critical",
            deadline: "2025-10-08T17:00:00+08:00",
            status: "in_progress",
            assignedTo: "Patricia Ng"
        },
        {
            action: "Set up education savings plan enrollment",
            priority: "high",
            deadline: "2025-10-08T17:00:00+08:00",
            status: "pending",
            assignedTo: "Patricia Ng"
        },
        {
            action: "Schedule Phase 2 review (Critical Illness) for 2026",
            priority: "medium",
            deadline: "2026-01-01T00:00:00+08:00",
            status: "scheduled",
            assignedTo: "AI System"
        }
    ]
};

// ============= David Lim - Property Purchase Lead Profile =============
const davidLim = {
    id: "LC-2025-8475",
    firstName: "David",
    lastName: "Lim",
    fullName: "David Lim",
    email: "david.lim.architect@gmail.com",
    phone: "+65 9456 7890",
    age: 35,
    maritalStatus: "Married",
    marriedMonthsAgo: 3,
    location: "Singapore, Bukit Timah (New BTO)",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23FF9800' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3EDL%3C/text%3E%3C/svg%3E",

    // Lead Intelligence
    leadScore: 91,
    conversionProbability: 78,
    estimatedLTV: 89000,
    stage: "Comparing Quotes",
    temperature: "hot",
    daysInPipeline: 25,
    engagementRate: 89,

    // Trigger Events
    triggerEvents: [
        {
            type: "property_purchase",
            title: "New BTO Mortgage Approved",
            detected: "2025-09-20T14:30:00+08:00",
            source: "PropertyGuru Partnership - Mortgage insurance inquiry with consent",
            details: "Property value $850K, mortgage $680K, submitted inquiry form with opt-in",
            intentWindow: "active",
            totalDays: 45,
            daysElapsed: 25,
            daysRemaining: 20,
            priority: "critical"
        },
        {
            type: "newlywed",
            title: "Recently Married (3 months ago)",
            detected: "2025-09-20T14:30:00+08:00",
            source: "PropertyGuru form data",
            details: "High protection need - wife depends on income",
            priority: "high"
        }
    ],

    // Current Coverage
    currentCoverage: [
        {
            type: "None",
            premium: 0,
            coverage: 0,
            status: "uninsured",
            notes: "Freelance architect - no employer coverage"
        }
    ],

    // Coverage Gaps
    coverageGaps: [
        {
            type: "mortgage_protection",
            title: "No Mortgage Insurance",
            severity: "critical",
            estimatedRisk: 680000,
            description: "Bank requiring mortgage insurance for $680K loan"
        },
        {
            type: "life_insurance",
            title: "No Life Insurance",
            severity: "critical",
            estimatedRisk: 500000,
            description: "Wife can't manage mortgage payments alone on her income"
        },
        {
            type: "critical_illness",
            title: "No Critical Illness Coverage",
            severity: "high",
            estimatedRisk: 300000,
            description: "If disabled/sick, can't work (freelancer risk)"
        }
    ],

    // Recommended Products
    recommendedProducts: [
        {
            id: "PROD-009",
            name: "Mortgage Protection Insurance ($680K)",
            premium: 210,
            closeProbability: 0.92,
            benefits: [
                "Full $680K mortgage covered",
                "Death & terminal illness payout",
                "Meets bank requirements",
                "Decreasing premium over time"
            ]
        },
        {
            id: "PROD-010",
            name: "Life Insurance ($500K)",
            premium: 170,
            closeProbability: 0.85,
            benefits: [
                "$500K family protection",
                "Wife can maintain lifestyle",
                "Covers mortgage + living expenses",
                "Not tied to property"
            ]
        },
        {
            id: "PROD-011",
            name: "Critical Illness Rider ($300K)",
            premium: 100,
            closeProbability: 0.78,
            benefits: [
                "Lump sum if diagnosed",
                "Covers income loss",
                "37 critical illnesses",
                "Early stage coverage"
            ]
        }
    ],

    // Behavioral Insights
    behavioralInsights: {
        communicationStyle: "Detail-oriented, needs to understand fully",
        decisionMaking: "Thorough research, compares multiple options",
        objections: ["Need to compare Prudential", "Want second opinion", "What makes AIA different?"],
        painPoints: ["First time buying insurance", "Overwhelmed by options", "Bank deadline pressure"],
        positiveSignals: ["Wife actively involved", "Asks detailed questions", "Appreciates honesty"],
        engagementPattern: "Evenings 6-8 PM (after work)",
        preferredChannel: "Voice calls > Email",
        competitorsMentioned: ["Prudential (getting quote)", "Bank's in-house insurance"],
        emotionalState: "Responsible, wants best for wife and new home",
        trustLevel: "moderate (building through transparency)"
    },

    // AI Recommended Approach
    aiStrategy: {
        tone: "Educational, patient, transparent",
        focus: "Complete family and property protection",
        positioning: "Comprehensive solution vs piecemeal coverage",
        urgency: "Bank deadline approaching, lock in healthy rates",
        nextBestActions: [
            "Provide detailed comparison with Prudential",
            "Explain portability (not tied to job/property)",
            "Connect with James Tan (Property Specialist)",
            "Show scenario planning (what if disabled/sick/death)"
        ]
    },

    // Touchpoint History
    touchpoints: [
        {
            id: "TP-DL-006",
            number: 6,
            type: "voice_call",
            timestamp: "2025-10-14T19:30:00+08:00",
            duration: 420,
            status: "completed",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Property Purchase Protection",
            sentiment: 8.3,
            sentimentLabel: "Positive",
            engagement: "high",
            outcome: "ready_to_proceed",
            conversionProbChange: +12,
            summary: "David finished comparing quotes, AIA came out better, ready to sign up",
            keyMoments: [
                { time: "00:01:15", description: "David confirms finished comparing with Prudential" },
                { time: "00:03:30", description: "AIA's comprehensive approach won vs piecemeal" },
                { time: "00:05:45", description: "David asks about application process" },
                { time: "00:06:50", description: "Agreement to proceed - handoff to James" }
            ],
            notes: "David very methodical. Compared every detail. AIA won on: portability, comprehensive coverage, better CI terms. Wife trusts decision. Ready to apply."
        }
    ],

    // Next Actions
    nextActions: [
        {
            action: "Send comprehensive insurance application link",
            priority: "critical",
            deadline: "2025-10-15T12:00:00+08:00",
            status: "pending",
            assignedTo: "James Tan"
        },
        {
            action: "Prepare mortgage insurance documentation for bank",
            priority: "high",
            deadline: "2025-10-16T17:00:00+08:00",
            status: "pending",
            assignedTo: "James Tan"
        }
    ]
};

// ============= Amanda Ng - Entrepreneur Lead Profile =============
const amandaNg = {
    id: "LC-2025-8476",
    firstName: "Amanda",
    lastName: "Ng",
    fullName: "Amanda Ng",
    email: "amanda.ng@sweetdelights.sg",
    phone: "+65 9567 8901",
    age: 38,
    maritalStatus: "Single",
    location: "Singapore, Tiong Bahru",
    occupation: "Former Banker → Bakery Owner (Starting)",
    avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23E91E63' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3EAN%3C/text%3E%3C/svg%3E",

    // Lead Intelligence
    leadScore: 88,
    conversionProbability: 85,
    estimatedLTV: 71000,
    stage: "Ready to Sign",
    temperature: "hot",
    daysInPipeline: 22,
    engagementRate: 95,

    // Trigger Events
    triggerEvents: [
        {
            type: "career_change",
            title: "Leaving Corporate Job to Start Business",
            detected: "2025-09-23T09:00:00+08:00",
            source: "AIA Entrepreneurs Webinar - Registration + post-webinar survey with opt-in",
            details: "Attended live webinar, filled survey indicating bakery startup, company coverage ending in 30 days",
            intentWindow: "urgent",
            totalDays: 30,
            daysElapsed: 22,
            daysRemaining: 8,
            priority: "critical"
        },
        {
            type: "coverage_expiring",
            title: "Company Health Insurance Ending Soon",
            detected: "2025-09-23T09:00:00+08:00",
            source: "Webinar survey response",
            details: "8 days until coverage gap - high urgency",
            priority: "critical"
        }
    ],

    // Current Coverage
    currentCoverage: [
        {
            type: "Company Health Insurance",
            premium: 0,
            coverage: 100000,
            provider: "DBS Bank Corporate Plan",
            status: "ending_soon",
            endDate: "2025-10-23",
            daysRemaining: 8
        }
    ],

    // Coverage Gaps
    coverageGaps: [
        {
            type: "health_insurance",
            title: "Losing Company Health Coverage",
            severity: "critical",
            estimatedRisk: 100000,
            description: "8 days until coverage gap - must secure before Oct 23"
        },
        {
            type: "disability_insurance",
            title: "No Income Protection",
            severity: "critical",
            estimatedRisk: 200000,
            description: "As business owner, if can't work = no income at all"
        },
        {
            type: "critical_illness",
            title: "No Critical Illness Coverage",
            severity: "high",
            estimatedRisk: 150000,
            description: "Startup phase - can't afford major health crisis"
        }
    ],

    // Recommended Products
    recommendedProducts: [
        {
            id: "PROD-012",
            name: "Self-Employed Health Protection",
            premium: 145,
            closeProbability: 0.92,
            benefits: [
                "Comprehensive hospitalization coverage",
                "Outpatient & specialist visits",
                "No employer needed",
                "Portable & flexible"
            ]
        },
        {
            id: "PROD-013",
            name: "Disability Income Protection",
            premium: 90,
            closeProbability: 0.88,
            benefits: [
                "Monthly income if can't work",
                "Covers injury or illness",
                "Up to 75% income replacement",
                "Critical for self-employed"
            ]
        },
        {
            id: "PROD-014",
            name: "Critical Illness Rider ($150K)",
            premium: 50,
            closeProbability: 0.82,
            benefits: [
                "Lump sum on diagnosis",
                "37 critical illnesses",
                "Business continuity fund",
                "Early stage coverage"
            ]
        }
    ],

    // Behavioral Insights
    behavioralInsights: {
        communicationStyle: "Warm, appreciative, collaborative",
        decisionMaking: "Budget-conscious, needs flexibility",
        objections: ["Can I afford this while starting business?", "Cash flow concerns Month 1-3", "Need payment flexibility"],
        painPoints: ["First time self-insuring", "Anxious about coverage gap", "Startup financial pressure"],
        positiveSignals: ["Highly engaged", "Asks smart questions", "Grateful for help"],
        engagementPattern: "Afternoons 2-4 PM, Evenings 7-9 PM",
        preferredChannel: "Voice calls = Email > SMS",
        emotionalState: "Excited but anxious about transition",
        trustLevel: "very high (Sharon built instant connection)"
    },

    // AI Recommended Approach
    aiStrategy: {
        tone: "Supportive, flexible, entrepreneur-to-entrepreneur",
        focus: "No coverage gap + income protection for business owner",
        positioning: "Partner in entrepreneurial journey",
        urgency: "8 days to deadline, avoid coverage gap",
        nextBestActions: [
            "Offer deferred first payment (Month 2)",
            "Show tiered approach (essentials now, add later)",
            "Connect with Sharon Koh (former entrepreneur)",
            "Expedite application for Oct 23 deadline"
        ]
    },

    // Touchpoint History
    touchpoints: [
        {
            id: "TP-AN-007",
            number: 7,
            type: "voice_call",
            timestamp: "2025-10-15T14:00:00+08:00",
            duration: 540,
            status: "completed",
            agent: {
                type: "ai",
                name: "Emma",
                avatar: "🤖"
            },
            campaign: "Entrepreneur Protection Journey",
            sentiment: 9.2,
            sentimentLabel: "Very Positive",
            engagement: "very high",
            outcome: "conversion",
            conversionProbChange: +20,
            summary: "Amanda ready to proceed with flexible payment plan",
            keyMoments: [
                { time: "00:01:20", description: "Amanda expresses cash flow worry for Month 1-3" },
                { time: "00:03:45", description: "AI offers deferred first payment option" },
                { time: "00:04:10", description: "Amanda: 'You can do that?!' (relief moment)" },
                { time: "00:07:45", description: "Agreement to proceed - application to be sent" }
            ],
            notes: "Perfect example of flexible solution closing anxious buyer. Deferred payment was key. Amanda extremely grateful. High NPS expected."
        }
    ],

    // Next Actions
    nextActions: [
        {
            action: "Send expedited application link with deferred payment",
            priority: "critical",
            deadline: "2025-10-15T18:00:00+08:00",
            status: "in_progress",
            assignedTo: "Sharon Koh"
        },
        {
            action: "Ensure policy active by Oct 23 (before coverage gap)",
            priority: "critical",
            deadline: "2025-10-22T23:59:00+08:00",
            status: "pending",
            assignedTo: "Underwriting Team"
        },
        {
            action: "Schedule check-in call Month 6 for upsell (business stabilized)",
            priority: "low",
            deadline: "2026-04-15T00:00:00+08:00",
            status: "scheduled",
            assignedTo: "AI System"
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
        estimatedLTV: 52000
    },
    {
        id: "LC-2025-8474",
        name: "Linda Wong",
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%2300C853' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3ELW%3C/text%3E%3C/svg%3E",
        leadScore: 91,
        conversionProbability: 82,
        temperature: "hot",
        stage: "Upsell - Ready to Close",
        lastContact: "2 hours ago",
        nextAction: "Policy upgrade approval",
        estimatedLTV: 55000
    },
    {
        id: "LC-2025-8475",
        name: "David Lim",
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23FF9800' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3EDL%3C/text%3E%3C/svg%3E",
        leadScore: 91,
        conversionProbability: 78,
        temperature: "hot",
        stage: "Comparing Quotes",
        lastContact: "1 day ago",
        nextAction: "Follow-up after competitor comparison",
        estimatedLTV: 89000
    },
    {
        id: "LC-2025-8476",
        name: "Amanda Ng",
        avatar: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect fill='%23E91E63' width='100' height='100'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='white'%3EAN%3C/text%3E%3C/svg%3E",
        leadScore: 88,
        conversionProbability: 85,
        temperature: "hot",
        stage: "Ready to Sign",
        lastContact: "3 hours ago",
        nextAction: "Send application link",
        estimatedLTV: 71000
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
    avgTimeToConvert: 22, // Updated to reflect new average (20.4 days)
    avgTimeChange: -68, // Huge improvement from 90-day baseline
    leadsUnderNurturing: 8450,
    leadsChange: +15,
    hotLeadsReady: 247,
    hotLeadsChange: +42,
    aiCallsToday: 1247,
    appointmentsToday: 342,
    leadsCaptured: 32450,

    // New metrics for 5 lead scenarios
    totalLTVPipeline: 335000, // Sum of all 5 leads' LTV
    avgSatisfactionScore: 9.3 // Average across 5 scenarios
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
        timestamp: "Just now",
        leadId: "LC-2025-8472"
    },
    {
        type: "conversion",
        lead: "Amanda Ng",
        agent: "Sharon Koh",
        status: "Application sent - Entrepreneur package",
        premium: "$285/month",
        temperature: "hot",
        timestamp: "3 min ago",
        leadId: "LC-2025-8476"
    },
    {
        type: "handoff",
        lead: "David Lim",
        agent: "James Tan",
        appointment: "Application pending",
        status: "Ready to proceed after quote comparison",
        temperature: "hot",
        timestamp: "1 hour ago",
        leadId: "LC-2025-8475"
    },
    {
        type: "call_completed",
        lead: "Linda Wong",
        agent: "Patricia Ng (Human)",
        duration: "12m 00s",
        outcome: "Policy upgrade approved - Phase 1",
        timestamp: "2 hours ago",
        leadId: "LC-2025-8474"
    },
    {
        type: "conversion",
        lead: "Michael Tan",
        agent: "David Lim (Specialist)",
        status: "Application completed via mobile",
        premium: "$185/month",
        temperature: "hot",
        timestamp: "5 hours ago",
        leadId: "LC-2025-8473"
    },
    {
        type: "trigger",
        lead: "New Lead: Jennifer Koh",
        trigger: "Property Purchase",
        campaign: "Mortgage Protection Campaign",
        status: "First call scheduled for 7 PM",
        timestamp: "15 min ago",
        leadId: "LC-2025-8477"
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
        michaelTan,
        lindaWong,
        davidLim,
        amandaNg,
        activeLeads,
        dashboardStats,
        liveActivity,
        campaigns
    };
}
