export type Experience = {
  period: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    period: "2024 — PRESENT",
    role: "Full Stack Developer",
    company: "Freelance / Independent",
    description:
      "Building responsive web applications, developing APIs, connecting frontend interfaces with backend systems, and creating complete user experiences.",
    tags: ["Next.js", "React", "TypeScript", "Python"],
  },
  {
    period: "PROJECT BASED",
    role: "Web Developer",
    company: "Selected Projects",
    description:
      "Worked on complete web projects involving UI development, backend integration, authentication, databases, and deployment-ready application flows.",
    tags: ["Frontend", "Backend", "API", "Database"],
  },
];