// Animation variants for Framer Motion
export const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

// Brand colors
export const BRAND_COLORS = {
  primary: "#9DDB2C",
  primaryHover: "#8bc325",
  black: "#000000",
  white: "#FFFFFF",
} as const;

// Navigation links
export const NAV_LINKS = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Working" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

// Stats data
export const STATS_DATA = [
  { value: 12, suffix: "+", label: "Active Users", color: "from-[#9DDB2C] to-emerald-400" },
  { value: 94, suffix: "%", label: "Success Rate", color: "from-blue-400 to-cyan-400" },
  { value: 2, suffix: "+", label: "Industry Awards", color: "from-purple-400 to-pink-400" },
  { value: 24, suffix: "/7", label: "AI Monitoring", color: "from-[#9DDB2C] to-yellow-400" }
] as const;

// Security badges data
export const SECURITY_BADGES = [
  { label: "HIPAA Compliant", desc: "Medical-grade security" },
  { label: "ISO 27001", desc: "Information security" },
  { label: "SOC 2 Type II", desc: "Verified security controls" }
] as const;

// Comparison features
export const COMPARISON_FEATURES = [
  {
    feature: "Monitoring",
    traditional: "Only during 20–30 min clinic sessions",
    zlaqa: "24/7 real-life monitoring through wearable + AI"
  },
  {
    feature: "Diagnosis",
    traditional: "Based on short observation → often inaccurate",
    zlaqa: "Data-driven, continuous analysis → highly accurate"
  },
  {
    feature: "Feedback Speed",
    traditional: "Delayed (next appointment)",
    zlaqa: "Instant, real-time feedback in real-life situations"
  },
  {
    feature: "Personalization",
    traditional: "Generic exercises for most patients",
    zlaqa: "Fully adaptive → adjusts to each person's unique speech pattern"
  },
  {
    feature: "Progress Tracking",
    traditional: "No continuous measurement",
    zlaqa: "Measurable Z-Quotient score + daily insights"
  },
] as const;

// Testimonials data - Industry Leaders
export const TESTIMONIALS = [
  // {
  //   name: "Shibili Rahiman",
  //   role: "Chairman, RAC Global",
  //   content: "ZLAQA AI represents a groundbreaking approach to speech therapy. The technology's ability to provide continuous, real-time feedback is exactly what the industry needs to make therapy more accessible and effective.",
  //   rating: 5,
  //   image: "SR"
  // },
  {
    name: "Coming Soon",
    role: "Industry Leader",
    content: "More testimonials from industry experts and healthcare professionals will be added soon. Stay tuned for insights from leading voices in speech therapy and healthcare innovation.",
    rating: 5,
    image: "CS",
    comingSoon: true
  },
  {
    name: "Coming Soon",
    role: "Industry Leader",
    content: "More testimonials from industry experts and healthcare professionals will be added soon. Stay tuned for insights from leading voices in speech therapy and healthcare innovation.",
    rating: 5,
    image: "CS",
    comingSoon: true
  },
  {
    name: "Coming Soon",
    role: "Industry Leader",
    content: "We're gathering feedback from more industry leaders and healthcare professionals who are experiencing the ZLAQA AI difference firsthand.",
    rating: 5,
    image: "CS",
    comingSoon: true
  }
] as const;

// FAQ data
export const FAQ_DATA = [
  {
    question: "How does Zlaqa AI monitor speech?",
    answer: "Zlaqa uses a comfortable, non-intrusive wearable device with advanced microphones that continuously analyze your speech patterns throughout the day. The AI processes this data in real-time to identify areas for improvement."
  },
  {
    question: "Is Zlaqa AI suitable for children?",
    answer: "Absolutely! Zlaqa AI is designed for all ages, from young children to adults. Our adaptive algorithms adjust therapy complexity based on age, developmental stage, and individual progress."
  },
  {
    question: "How long before I see results?",
    answer: "Most users notice measurable improvements within 4-6 weeks of consistent use. However, every individual is different, and our AI provides personalized timelines based on your specific needs and progress."
  },
  {
    question: "Does this replace traditional therapy?",
    answer: "Zlaqa AI is designed to complement, not replace, professional speech therapy. Many therapists use our platform to enhance their practice and provide better outcomes for their patients."
  },
  {
    question: "What about data privacy?",
    answer: "We take privacy seriously. All speech data is encrypted end-to-end, HIPAA-compliant, and never shared with third parties. You have full control over your data at all times."
  }
] as const;

// Partners list
export const PARTNERS = ["RAC Global"] as const;

// External URLs
export const EXTERNAL_URLS = {
  earlyAccess: "https://community.zlaqa.com",
  test: "https://test.zlaqa.com/",
  takeTest: "https://launch.zlaqa.com",
  community: "https://community.zlaqa.com",
  website: "https://www.zlaqa.com",
  email: "mailto:hello@zlaqa.ai",
} as const;

// Test Section Data
export const TEST_FEATURES = [
  {
    icon: "Brain",
    title: "Clinical Protocol",
    description: "Based on SRPP™ and SASTS standards."
  },
  {
    icon: "Target",
    title: "Identify Triggers",
    description: "Find what affects your speech most."
  },
  {
    icon: "ClipboardList",
    title: "Personal Plan",
    description: "Get daily exercises tailored to you."
  }
] as const;

export const TEST_STATS = [
  { value: "15", label: "Seconds" },
  { value: "1", label: "Recording" },
  { value: "Free", label: "Analysis" }
] as const;

export const TEST_HOW_IT_WORKS = [
  {
    step: "01",
    title: "Record",
    description: "Read a short text for 15 seconds."
  },
  {
    step: "02",
    title: "Analyze",
    description: "AI measures fluency, blocks & repetitions."
  },
  {
    step: "03",
    title: "Report",
    description: "Get a detailed speech profile instantly."
  }
] as const;
