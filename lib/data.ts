export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { num: "8.81", label: "Diploma CGPA" },
  { num: "8.52", label: "BE CGPA" },
  { num: "3+", label: "Projects Shipped" },
  { num: "2", label: "Hackathons" },
];

export const aboutCards = [
  {
    title: "Full Stack Development",
    desc: "React, Next.js, Node.js, Express — building end-to-end web apps with modern tooling and excellent DX.",
    color: "var(--accent2)",
  },
  {
    title: "Blockchain & Web3",
    desc: "Smart contracts on Ethereum & Solana, ZK proofs, Soulbound Tokens, MetaMask integration, and dApp architecture.",
    color: "var(--accent)",
  },
  {
    title: "Problem Solver",
    desc: "200+ DSA problems on LeetCode. Strong foundation in arrays, trees, graphs, recursion — built for engineering challenges.",
    color: "#a855f7",
  },
];

export type Skill = {
  name: string;
  level: string;
  width: number;
  cat: "frontend" | "backend" | "blockchain" | "lang";
  icon: string;
};

export const skills: Skill[] = [
  { name: "React.js",        level: "Advanced",     width: 92, cat: "frontend",   icon: "/React-icon.svg" },
  { name: "Next.js",         level: "Proficient",   width: 85, cat: "frontend",   icon: "/nextjs.svg" },
  { name: "Tailwind CSS",    level: "Advanced",     width: 90, cat: "frontend",   icon: "/Tailwind_CSS_Logo.svg" },
  { name: "HTML5",           level: "Advanced",     width: 95, cat: "frontend",   icon: "/html-1.svg" },
  { name: "CSS3",            level: "Advanced",     width: 93, cat: "frontend",   icon: "/CSS3_logo_and_wordmark.svg" },
  { name: "Bootstrap",       level: "Proficient",   width: 82, cat: "frontend",   icon: "/bootstrap.svg" },
  { name: "Node.js",         level: "Proficient",   width: 80, cat: "backend",    icon: "/nodejs-icon.svg" },
  { name: "Express.js",      level: "Proficient",   width: 78, cat: "backend",    icon: "/expressjs-icon.svg" },
  { name: "MongoDB",         level: "Proficient",   width: 75, cat: "backend",    icon: "/mongodb-icon.svg" },
  { name: "MySQL",           level: "Intermediate", width: 70, cat: "backend",    icon: "/mysql-icon.svg" },
  { name: "Solidity",        level: "Proficient",   width: 82, cat: "blockchain", icon: "/Solidity_logo.svg" },
  { name: "MetaMask",        level: "Advanced",     width: 86, cat: "blockchain", icon: "/metamask.svg" },
  { name: "Anchor (Solana)", level: "Intermediate", width: 65, cat: "blockchain", icon: "/anchor.svg" },
  { name: "JavaScript",      level: "Advanced",     width: 92, cat: "lang",       icon: "/Unofficial_JavaScript_logo_2.svg" },
  { name: "Rust",            level: "Intermediate", width: 62, cat: "lang",       icon: "/rust.svg" },
  { name: "Java",            level: "Intermediate", width: 68, cat: "lang",       icon: "/java-icon.svg" },
  { name: "C",               level: "Intermediate", width: 65, cat: "lang",       icon: "/c-1.svg" },
];

export const experience = [
  {
    date: "Apr 2023 – Jun 2023",
    company: "MaMo TechnoLabs LLP · Vadodara, Gujarat",
    title: "Frontend Developer Intern",
    subtitle: "8-person venture-backed recruitment startup",
    bullets: [
      "Developed the Brandzi Website end-to-end using React.js, Tailwind CSS, and HTML ensuring full responsiveness and optimized user experience",
      "Integrated OTP verification and a business onboarding form with Firebase for secure real-time data storage",
      "Used Firestore for user authentication and efficient data handling, reducing backend overhead",
      "Gained hands-on production experience with React and Tailwind through real-world implementation cycles",
    ],
    tags: ["React.js", "Tailwind CSS", "Firebase", "Firestore", "HTML5"],
  },
];

export const projects = [
  {
    num: "01 — Blockchain",
    title: "ChainCred",
    desc: "A Sybil-resistant reputation protocol leveraging on-chain analytics, ZK proofs, and Soulbound Tokens to enable privacy-preserving identity and fair DAO governance. Solves one of Web3's hardest problems — who is real?",
    tags: ["Solidity", "ZK Proofs", "Soulbound Tokens", "Ethereum"],
    link: "https://github.com/dev-by-yash",
    featured: true,
    span2: true,
  },
  {
    num: "02 — DeFi",
    title: "FundFusion",
    desc: "Decentralized crowdfunding platform on Ethereum. Users create and fund campaigns with full MetaMask integration. Smart contracts ensure trustless fund management and transparent disbursement.",
    tags: ["Next.js", "Solidity", "MetaMask"],
    link: "https://github.com/dev-by-yash",
    featured: false,
    span2: false,
  },
  {
    num: "03 — AI / EdTech",
    title: "Course Recommender",
    desc: "Personalized course recommendation system based on aptitude tests, covering multiple career fields and student interest mapping. Helps students discover the right learning path.",
    tags: ["React.js", "Node.js", "MongoDB"],
    link: "https://github.com/dev-by-yash",
    featured: false,
    span2: false,
  },
];

export const education = [
  {
    year: "2024 – 2027 (Expected)",
    degree: "Bachelor of Engineering\nInformation Technology",
    inst: "Sardar Vallabhbhai Patel Institute of Technology, Vasad, Gujarat",
    score: "CGPA: 8.52 / 10",
  },
  {
    year: "Completed 2024",
    degree: "Diploma in\nInformation Technology",
    inst: "Parul University, Vadodara, Gujarat",
    score: "CGPA: 8.81 / 10",
  },
];

export const achievements = [
  {
    title: "Smart India Hackathon",
    date: "September 2023 · Parul University",
    desc: "Built a decentralized file system using blockchain concepts to ensure secure and transparent file storage and sharing across institutions.",
  },
  {
    title: "ETHGlobal Hackathon",
    date: "September 26–28, 2025",
    desc: "Developed a Web3-based decentralized solution using Ethereum smart contracts, focusing on real-world decentralization, on-chain logic, and scalable dApp architecture.",
  },
  {
    title: "LeetCode 200+",
    date: "Ongoing",
    desc: "Solved 200+ Data Structures & Algorithms problems on LeetCode, covering arrays, recursion, stack, queue, trees, and graphs with consistent practice.",
  },
];
