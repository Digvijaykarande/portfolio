// All portfolio content lives here. Edit this file to update the site.

export const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const profile = {
  name: "Digvijay Karande",
  role: "Full-stack developer",
  location: "Pune, India",
  email: "karandedigvijay2@gmail.com",
  phone: "+91 8010503097",
  phoneHref: "tel:+918010503097",
  github: "https://github.com/Digvijaykarande",
  linkedin: "https://linkedin.com/in/digvijay-karande-297b25279",
  status: "Open to full-stack roles",
};

/* ------------------------------ Projects ------------------------------ */

export interface Project {
  title: string;
  kind: string;
  summary: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "DevHub",
    kind: "Spring Boot + React",
    summary: "A GitHub-style platform for hosting repositories.",
    description:
      "A production-style GitHub alternative. A Spring Boot API with MongoDB and JWT authentication powers repository management, file storage, commit history, public repository browsing, user profiles and a follow system. Profile images are uploaded through Cloudinary. The front end is React.",
    tags: ["React", "Spring Boot", "MongoDB", "JWT", "Cloudinary"],
    github: "https://github.com/Digvijaykarande/github-clone-backend",
    demo: "https://devhub-github.netlify.app/",
    image: "images/devhub.png",
  },
  {
    title: "HireFlow",
    kind: "Spring Boot + React",
    summary: "A job board with accounts, postings and applications.",
    description:
      "A job board where users create accounts, post jobs and apply to them, with application management for recruiters. Spring Boot and Spring Security run the API on MongoDB and Redis. Email verification and notifications go out through JavaMailSender. The front end is React.",
    tags: ["React", "Spring Boot", "Spring Security", "MongoDB", "Redis", "Cloudinary"],
    github: "https://github.com/Digvijaykarande/HireFlow-backend",
    demo: "https://hireflow2.netlify.app/jobs",
    image: "images/hireflow.png",
  },
  {
    title: "CivicOne",
    kind: "MERN",
    summary: "Report civic issues with an automatically tagged location.",
    description:
      "A full-stack MERN app that streamlines civic issue reporting. A modular Node.js and Express API runs on MongoDB Atlas. The browser Geolocation API and OpenStreetMap reverse geocoding tag every report with a precise location automatically.",
    tags: ["React", "Node.js", "Express", "MongoDB", "OpenStreetMap"],
    github: "https://github.com/Digvijaykarande/civicone2.0",
    demo: "https://civicone20.netlify.app/",
    image: "images/civicone.png",
  },
  {
    title: "Chat App",
    kind: "React + Firebase",
    summary: "Encrypted group and private chat with an AI assistant.",
    description:
      "A real-time chat app with group chats and private messaging, secure authentication and role-based authorization. Messages are end-to-end encrypted, and an integrated AI chatbot offers automated and smart replies.",
    tags: ["React", "Firebase", "Encryption"],
    github: "https://github.com/Digvijaykarande/openchat",
    demo: "https://openchatcom.netlify.app/",
    image: "images/chatapp.png",
  },
  {
    title: "Excel Analytics Dashboard",
    kind: "MERN",
    summary: "Upload a spreadsheet and get charts and AI insights.",
    description:
      "Upload an Excel file and the app turns it into charts, graphs and summary statistics. AI-powered insights and recommendations are generated from the uploaded data.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Digvijaykarande/excel-analytics",
    demo: "https://excel-anlytics.netlify.app/",
    image: "images/excelapp.png",
  },
  {
    title: "YouTube Clone",
    kind: "Next.js",
    summary: "Browse, search and watch videos through the YouTube API.",
    description:
      "A YouTube clone for browsing, searching and watching videos, with user authentication, video uploads, comments and likes. Video data comes from the YouTube Data API.",
    tags: ["Next.js", "YouTube API"],
    github: "https://github.com/Digvijaykarande/youtube-clone",
    demo: "https://digvijaykarande.github.io/youtube-clone",
    image: "images/youtube-clone.png",
  },
  {
    title: "IMDB Clone",
    kind: "React",
    summary: "Search movies, read details and watch trailers.",
    description:
      "A movie database app for searching films, reading details and watching trailers, with user authentication, ratings and reviews. Movie data comes from the TMDB API.",
    tags: ["React", "TMDB API"],
    github: "https://github.com/Digvijaykarande/movieshouse2",
    demo: "https://digvijaykarande.github.io/movieshouse2/",
    image: "images/imdb-clone.png",
  },
];

/* ------------------------------- Skills ------------------------------- */

export interface Skill {
  name: string;
  /** lowercase project tags that count as "used in this project" */
  match?: string[];
  note?: string;
}

export interface SkillGroup {
  label: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    skills: [
      { name: "Java", match: ["spring boot"] },
      { name: "JavaScript", match: ["react", "node.js", "next.js"] },
      { name: "Python" },
      { name: "SQL" },
      { name: "HTML & CSS", match: ["react"] },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Spring Boot", match: ["spring boot"] },
      { name: "Spring Security", match: ["spring security"] },
      { name: "JWT", match: ["jwt"] },
      { name: "Node.js", match: ["node.js"] },
      { name: "Express", match: ["express"] },
      { name: "REST APIs", match: ["spring boot", "express"] },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", match: ["react"] },
      { name: "Next.js", match: ["next.js"], note: "Used in the YouTube clone and during my Loyanox internship." },
      { name: "Tailwind CSS", note: "Used to style this portfolio." },
    ],
  },
  {
    label: "Data",
    skills: [
      { name: "MongoDB", match: ["mongodb"] },
      { name: "MySQL" },
      { name: "Redis", match: ["redis"] },
      { name: "Firebase", match: ["firebase"] },
    ],
  },
  {
    label: "Tools and cloud",
    skills: [
      { name: "Git & GitHub", note: "Every project here is versioned on GitHub." },
      { name: "Docker" },
      { name: "Microsoft Azure", note: "Completed the Azure Essentials certificate with Microsoft and LinkedIn." },
      { name: "Cloudinary", match: ["cloudinary"] },
    ],
  },
];

export const projectsUsing = (skill: Skill): string[] => {
  if (!skill.match) return [];
  return projects
    .filter((p) => p.tags.some((t) => skill.match!.includes(t.toLowerCase())))
    .map((p) => p.title);
};

/* --------------------------- Certifications --------------------------- */

export type CertCategory = "cloud" | "security" | "ml" | "java";

export const certCategories: { id: "all" | CertCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "cloud", label: "Cloud" },
  { id: "security", label: "Security" },
  { id: "ml", label: "AI & ML" },
  { id: "java", label: "Java & full stack" },
];

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  category: CertCategory;
  skills: string[];
  image: string;
  credentialId?: string;
  detail: string;
}

export const certificates: Certificate[] = [
  {
    title: "Microsoft Azure Essentials Professional Certificate",
    issuer: "Microsoft and LinkedIn Learning",
    date: "Oct 2026",
    category: "cloud",
    skills: ["Microsoft Azure", "Cloud computing"],
    image: "certificates/azure-essentials.jpg",
    detail: "Learning path completed in 2 hours 34 minutes.",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Oct 2026",
    category: "security",
    skills: ["Cybersecurity", "Networking"],
    image: "certificates/cisco-cybersecurity.jpg",
    credentialId: "b85dccc2-bb6a-4281-86c5-27451de9d9b6",
    detail: "Completed through the Cisco Networking Academy program.",
  },
  {
    title: "Cloud Computing Concepts with Model Development",
    issuer: "IMED, Bharati Vidyapeeth, Pune",
    date: "Apr 2026",
    category: "cloud",
    skills: ["Cloud computing", "Model development"],
    image: "certificates/cloud-computing-model-dev.jpg",
    credentialId: "197292081",
    detail: "Course held at IMED-BVP, Kothrud, Pune. Issued 7 April 2026.",
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "Bharati Vidyapeeth with Seminarroom Education",
    date: "Apr 2026",
    category: "ml",
    skills: ["Machine learning"],
    image: "certificates/intro-machine-learning.jpg",
    detail: "40-hour certificate course, 20 Feb to 4 Apr 2026, academic year 2025-26.",
  },
  {
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "Oct 2025",
    category: "java",
    skills: ["Java"],
    image: "certificates/hackerrank-java-basic.jpg",
    credentialId: "317B5FE3424C",
    detail: "Passed the HackerRank skill certification test.",
  },
  {
    title: "Full Stack Java",
    issuer: "Symbiosis Skills & Professional University with Capgemini",
    date: "Sep 2024",
    category: "java",
    skills: ["Java", "Full stack"],
    image: "certificates/full-stack-java.jpg",
    detail: "Certificate program run by Symbiosis Digital Academy, 22 May to 22 Sep 2024.",
  },
];

/* ------------------------------- Journey ------------------------------ */

export interface JourneyItem {
  type: "Internship" | "Education" | "Training";
  title: string;
  place: string;
  period: string;
  description: string;
}

export const journey: JourneyItem[] = [
  {
    type: "Internship",
    title: "Full Stack Developer Trainee",
    place: "Loyanox, Pune",
    period: "Jun - Aug 2026",
    description:
      "Built and maintained web applications with Next.js, React, Node.js and MongoDB. Worked with the team to ship new features and tune existing code for performance.",
  },
  {
    type: "Education",
    title: "Master of Computer Applications",
    place: "Bharati Vidyapeeth University, IMED Pune",
    period: "2025 - 2027",
    description:
      "Specialising in software engineering and project management, while deepening full-stack skills and agile practice.",
  },
  {
    type: "Training",
    title: "Full Stack Java",
    place: "Symbiosis Skills & Professional University with Capgemini",
    period: "May - Sep 2024",
    description:
      "Four-month certificate program covering Java and full-stack web development.",
  },
  {
    type: "Education",
    title: "Bachelor of Computer Applications",
    place: "Shivaji University",
    period: "2022 - 2025",
    description:
      "Software development, algorithms and data structures.",
  },
];
