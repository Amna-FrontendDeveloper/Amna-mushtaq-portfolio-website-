import maryamDesktop from "../assets/images/maryam_waseem_surgical_preview_1790923208761.jpg";
import hospitalMobile from "../assets/images/hospital_web_mobile_1790922298775.jpg";
import shedDesktop from "../assets/images/shed_hospital_preview_1790923172901.jpg";
import javedDesktop from "../assets/images/javed_care_app_preview_1790923192354.jpg";
import aiSupportDesktop from "../assets/images/ai_support_app_1790922311596.jpg";
import profileImage from "../assets/images/amna_exact_developer_desk_1790924575305.jpg";

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    focus: string;
    level?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  goal: string;
  technologies: string[];
  desktopImage?: string;
  mobileImage?: string;
  integrations?: string[];
  isFeatured?: boolean;
  isUpcoming?: boolean;
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export const PERSONAL_INFO = {
  name: "Amna Mushtaq",
  role: "Software Engineer & Web Developer",
  status: "Final-semester BS Software Engineering student",
  university: "Virtual University of Pakistan",
  graduationYear: "2026",
  headline: "Turning Business Problems into Effective Web Solutions",
  subheadline:
    "I design and develop professional websites and web applications that solve real-world problems, improve digital presence, and help businesses connect better with their customers.",
  heroParagraph:
    "I’m a final-semester Software Engineering student passionate about creating professional websites and web applications that solve real-world problems and help businesses build a stronger digital presence.",
  email: "amnamushaq259@gmail.com",
  phoneRaw: "03207730977",
  whatsappUrl: "https://wa.me/923207730977",
  githubUrl: "https://github.com/Amna-FrontendDeveloper",
  linkedinUrl: "https://www.linkedin.com/in/amna-mushtaq-a445b7290",
  location: "Pakistan (Remote / Worldwide)",
  profileImage: profileImage,
};

export const QUICK_STATS = [
  {
    label: "BS Software Engineering",
    category: "Education",
    detail: "Virtual University of Pakistan",
  },
  {
    label: "Final Semester",
    category: "Current Status",
    detail: "Graduating 2026",
  },
  {
    label: "Web & AI Projects",
    category: "Project Focus",
    detail: "Healthcare, Business & Automation",
  },
  {
    label: "Problem-Solving Approach",
    category: "Development Philosophy",
    detail: "Needs First, Code Second",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Building responsive, accessible, and fast client-side experiences.",
    skills: [
      { name: "HTML", focus: "Semantic structure & accessibility" },
      { name: "CSS", focus: "Modern flexbox, grid, animations" },
      { name: "JavaScript", focus: "ES6+, DOM manipulation & async logic" },
      {
        name: "React",
        focus: "Hooks, component architecture, state management",
      },
      {
        name: "Tailwind CSS",
        focus: "Utility-first design systems & clean layout",
      },
      {
        name: "Responsive Web Design",
        focus: "Fluid mobile, tablet & desktop scaling",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description:
      "Developing practical backends, endpoints, and server logic.",
    skills: [
      {
        name: "Python",
        focus: "Core programming, scripting, data handling",
      },
      {
        name: "Flask",
        focus: "Lightweight web apps & microservice endpoints",
      },
      {
        name: "REST APIs",
        focus: "JSON standards, CRUD architecture, routes",
      },
      {
        name: "API Integration",
        focus: "Third-party services & external data pipelines",
      },
    ],
  },
  {
    id: "tools",
    title: "Development & Tools",
    description:
      "Modern workflows, version control, and client-side communication.",
    skills: [
      { name: "Git", focus: "Version tracking, branch workflows" },
      { name: "GitHub", focus: "Source control & repository management" },
      { name: "npm", focus: "Package ecosystem & dependency management" },
      {
        name: "Vite",
        focus: "High-performance build tooling & bundling",
      },
      {
        name: "AJAX",
        focus: "Asynchronous client updates without page reload",
      },
      {
        name: "Fetch API",
        focus: "Native network requests & error handling",
      },
      { name: "JSON", focus: "Data exchange structures & API payloads" },
    ],
  },
  {
    id: "ai-integrations",
    title: "AI & Integrations",
    description:
      "Connecting smart capabilities and external platforms to web apps.",
    skills: [
      {
        name: "AI/API Integration",
        focus: "Intelligent conversational logic & models",
      },
      {
        name: "OAuth / Google Login",
        focus: "Secure client authentication & tokens",
      },
      {
        name: "E-commerce API Integration",
        focus: "Catalog, order queries & checkout bridges",
      },
      {
        name: "WhatsApp Integration",
        focus: "Direct business messaging & customer routing",
      },
    ],
  },
];

export const FEATURED_HOSPITAL_PROJECT: ProjectItem = {
  id: "maryam-waseem-surgical-hospital",
  title: "Maryam Waseem Surgical Hospital",
  category: "Healthcare & Surgical Care System",
  subtitle:
    "Surgical Specialties, Operating Facilities & Patient Discovery Portal",
  description:
    "A premier healthcare and surgical hospital web presence designed to give patients and families immediate clarity on consultant surgeons, specialized surgical departments, operating facilities, and 24/7 emergency response.",
  problem:
    "Many healthcare businesses rely on limited social media information or outdated online presence, making it difficult for patients to quickly find doctors, services, departments, contact information, and other essential details.",
  solution:
    "A modern, responsive healthcare website with a clear structure for doctors, services, hospital information, contact details, and patient-focused navigation.",
  goal:
    "Make healthcare information easier to discover while creating a professional and trustworthy digital presence for the hospital.",
  technologies: [
    "React",
    "Tailwind CSS",
    "Responsive Web Design",
    "JavaScript",
    "Accessible HTML5",
    "Clinical UI/UX",
  ],
  desktopImage: maryamDesktop,
  mobileImage: hospitalMobile,
  liveUrl: "https://maryam-waseem-surgical-hospital.ai.studio/",
  isFeatured: true,
  highlights: [
    "Consultant Surgeon Directory with specialty filtering & credentials",
    "24/7 Emergency Care access & immediate ambulance hotline",
    "Surgical Departments overview (General Surgery, Orthopedics, Gynecology, Laparoscopy)",
    "Patient inquiry flow with clean validation and contact guidance",
    "Clear operating schedules, facility details, and bedside admission guidance",
  ],
};

export const OTHER_PROJECTS: ProjectItem[] = [
  {
    id: "shed-hospital",
    title: "SHED Hospital",
    category: "Hospital & Community Healthcare",
    subtitle: "Outpatient Services, Emergency Care & Clinical Directory",
    description:
      "A comprehensive hospital website built for SHED Hospital to make emergency care, doctor schedules, outpatient services, and healthcare facilities easily accessible for patients and families.",
    problem:
      "Patients faced difficulties finding accurate doctor timings, specialty services, and contact numbers quickly during emergencies or outpatient visits.",
    solution:
      "Developed a clear, patient-centric hospital web presence featuring categorized clinical departments, specialist profiles, emergency contact, and online inquiry.",
    goal:
      "Establish a trusted digital touchpoint for SHED Hospital that streamlines patient discovery and connects patients directly with hospital staff.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Layout",
      "Semantic HTML5",
    ],
    liveUrl: "https://shed-hospital.ai.studio/",
    desktopImage: shedDesktop,
    highlights: [
      "Structured clinical departments and doctor schedule directory",
      "Emergency hotline and direct patient assistance contact",
      "Diagnostic services and pharmacy information discovery",
      "Responsive mobile navigation for quick patient access on phones",
    ],
  },
  {
    id: "javed-care-app",
    title: "Javed Care App",
    category: "Healthcare Web Application",
    subtitle: "Patient Care, Doctor Booking & Clinical Consultation Platform",
    description:
      "A modern healthcare web application designed for Javed Care to connect patients with medical specialists, streamline appointment scheduling, and provide accessible health guidance.",
    problem:
      "Managing patient bookings and clinic inquiries manually created scheduling friction and unnecessary waiting times for patients seeking care.",
    solution:
      "An interactive, responsive healthcare application with appointment booking forms, specialty browsing, clinic operating schedules, and direct patient communication.",
    goal:
      "Deliver a smooth, reassuring digital experience for clinic patients and optimize healthcare administrative workflows.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "Interactive UI",
    ],
    liveUrl: "https://javedcarejaved-care-app.ai.studio/",
    desktopImage: javedDesktop,
    highlights: [
      "Online appointment reservation interface with confirmation flow",
      "Specialty care directory covering general medicine and specialized clinics",
      "Clinic hours, address location, and patient inquiry routing",
      "Clean, reassuring medical UI designed for ease of use across age groups",
    ],
  },
  {
    id: "maryam-waseem-surgical",
    title: "Maryam Waseem Surgical Hospital",
    category: "Surgical Hospital & Inpatient Care",
    subtitle: "Surgical Specialties, Operating Facilities & Emergency Care",
    description:
      "A dedicated surgical hospital website engineered for Maryam Waseem Surgical Hospital, highlighting sterile operating suites, inpatient care, specialist surgeons, and patient admissions.",
    problem:
      "Surgical patients and their families require immediate clarity on surgical procedures, surgeon credentials, pre-admission guidelines, and emergency admission procedures.",
    solution:
      "Engineered an authoritative, highly structured surgical hospital website with procedure overviews, surgeon directories, facility details, and emergency direct lines.",
    goal:
      "Provide patients and caregivers with immediate clinical clarity, building deep confidence and trust in critical surgical care.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Accessible Design",
    ],
    liveUrl: "https://maryam-waseem-surgical-hospital.ai.studio/",
    desktopImage: maryamDesktop,
    highlights: [
      "Specialized surgical department index and procedural overviews",
      "Surgeon profiles with qualifications and consultation hours",
      "24/7 surgical emergency response protocol and contact channels",
    ],
  },
  {
    id: "ai-customer-support-agent",
    title: "AI Customer Support Agent",
    category: "AI & Web Application",
    subtitle: "Automated Inquiry Resolution & Multi-Channel Workflow",
    description:
      "An AI-powered customer support web application designed to help businesses answer customer questions using AI and integrate business communication and e-commerce workflows.",
    problem:
      "Small businesses lose potential customers because answering repetitive inquiries about hours, orders, and pricing takes hours and leaves customers waiting without answers outside business hours.",
    solution:
      "Built an interactive web dashboard and conversational agent capable of understanding user queries, surfacing catalog details, and connecting to communication channels.",
    goal:
      "Provide instantaneous customer assistance, streamline order inquiries, and reduce support workload for growing businesses.",
    technologies: [
      "Python",
      "Flask",
      "JavaScript",
      "HTML/CSS",
      "AI APIs",
      "SQLite",
      "REST APIs",
    ],
    integrations: [
      "WhatsApp Messaging Link",
      "E-commerce Workflow",
      "Google Login Authentication",
    ],
    desktopImage: aiSupportDesktop,
    highlights: [
      "AI-driven query comprehension with structured answers",
      "Integrated WhatsApp direct-chat launch for high-priority leads",
      "E-commerce order status lookup simulator",
      "Secure Google OAuth authentication entry point",
      "SQLite database for past chat records and customer query trends",
    ],
  },
  {
    id: "personal-portfolio-system",
    title: "Personal Portfolio Website",
    category: "Frontend & Performance",
    subtitle: "Modern Portfolio Architecture for Software & Web Services",
    description:
      "A responsive personal portfolio focused on presenting professional skills, projects, and web development services through a modern user experience.",
    problem:
      "Generic templates often rely on flashy gimmicks, unverified metrics, and noisy animations that obscure a developer's real problem-solving capabilities.",
    solution:
      "Created a minimal, elegant, accessible web portfolio adhering to strict typography, 60-30-10 color math, zero-pill metadata discipline, and mobile-first responsiveness.",
    goal:
      "Position skills honestly, highlight business-driven thinking, and provide direct, frictionless contact avenues for prospective clients and collaborators.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Semantic HTML5",
      "Schema.org SEO",
    ],
    highlights: [
      "Clean 3-zone header contract with zero clutter",
      "Mobile-responsive navigation drawer and quick contact modal",
      "Accessible contrast meeting WCAG AA standards",
      "Rich Schema.org structured JSON-LD data for search crawlers",
    ],
  },
  {
    id: "custom-business-portal",
    title: "Business Client Management Portal",
    category: "Upcoming Web Application",
    subtitle: "Workflow Automation & Service Tracking (In Planning)",
    description:
      "A structured web platform for service providers to manage customer bookings, service agreements, and automated communication.",
    problem:
      "Service businesses often track client engagements across fragmented spreadsheets and chat logs.",
    solution:
      "Centralized booking portal with real-time appointment validation, automated email notifications, and customer status tracking.",
    goal:
      "Help businesses reduce administrative overhead and prevent scheduling conflicts.",
    technologies: ["React", "Python", "Flask", "REST APIs", "Tailwind CSS"],
    isUpcoming: true,
    highlights: [
      "Interactive calendar and appointment booking system",
      "Customer verification and automated email reminders",
      "Status dashboard with real-time operational overview",
    ],
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    description:
      "Professional, responsive websites designed around your business goals.",
    details: [
      "Custom responsive design for desktop, tablet, and mobile",
      "Clear call-to-actions that drive customer inquiries",
      "Fast load performance and search-engine-friendly structure",
      "Clean brand presentation tailored to your business identity",
    ],
    icon: "Briefcase",
  },
  {
    id: "healthcare-websites",
    title: "Healthcare Websites",
    description:
      "Clear and trustworthy websites for hospitals, clinics, doctors, and healthcare professionals.",
    details: [
      "Structured doctor directories and clinical department pages",
      "High-visibility emergency contacts and operating schedules",
      "Patient-first intuitive layout designed for easy discovery",
      "Trust-building visual presentation with professional medical aesthetics",
    ],
    icon: "HeartPulse",
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description:
      "Interactive web applications designed to solve specific business or workflow problems.",
    details: [
      "Dynamic dashboards and operational tools",
      "Database-driven forms and custom data management",
      "Clean user journeys with instantaneous feedback",
      "Robust state management and error resilience",
    ],
    icon: "LayoutDashboard",
  },
  {
    id: "ai-api-integration",
    title: "AI & API Integration",
    description:
      "Integration of AI services, APIs, authentication systems, e-commerce services, and other digital tools.",
    details: [
      "Connecting intelligent AI APIs for automated customer assistance",
      "OAuth / Google authentication for seamless sign-in",
      "E-commerce and inventory data endpoint connectivity",
      "Direct WhatsApp and third-party customer communication routing",
    ],
    icon: "Cpu",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the business, users, and actual problem.",
    details:
      "I start by diving into the real operational challenge: Who is the visitor? What information are they looking for? What business goal needs to be achieved?",
  },
  {
    number: "02",
    title: "Plan",
    description: "Define the structure, features, and user experience.",
    details:
      "Map out information architecture, intuitive page navigation, key user flows, and wireframes to ensure every section serves a clear purpose.",
  },
  {
    number: "03",
    title: "Build",
    description: "Develop a responsive and functional digital solution.",
    details:
      "Write clean, structured HTML/CSS, React, or Python/Flask code with mobile responsiveness, fast loading speeds, and robust API connections.",
  },
  {
    number: "04",
    title: "Improve",
    description: "Test, refine, and improve the final experience.",
    details:
      "Review edge cases, verify cross-browser and mobile usability, optimize accessibility, and refine the interface based on practical feedback.",
  },
];

export const APPROACH_CARDS = [
  {
    title: "Problem First",
    description:
      "I focus on understanding the actual problem before deciding what to build.",
    icon: "Target",
  },
  {
    title: "User Focused",
    description:
      "The interface should be easy for real users to understand and navigate.",
    icon: "Users",
  },
  {
    title: "Business Mindset",
    description:
      "A website should support a business goal, not simply look attractive.",
    icon: "TrendingUp",
  },
  {
    title: "Clean Development",
    description:
      "I aim for structured, maintainable, and responsive solutions.",
    icon: "Code2",
  },
];

export const EXPERIENCE_DATA = {
  title: "Freelance / Independent Web Development",
  role: "Web Developer",
  status: "Active Practice & Projects",
  description:
    "Designing and developing websites and web-based solutions for real-world requirements, personal projects, and business-focused use cases.",
  focusAreas: [
    "Responsive websites",
    "Healthcare websites",
    "Business websites",
    "Web applications",
    "API integrations",
    "AI-powered applications",
  ],
};

export const EDUCATION_DATA = {
  degree: "Bachelor of Science in Software Engineering",
  institution: "Virtual University of Pakistan",
  status: "Final Semester",
  expectedYear: "2026",
  description:
    "Comprehensive academic foundation in software engineering principles, web architectures, algorithms, data structures, and database systems.",
};
