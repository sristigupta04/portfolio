export type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  link?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Coffee Shop",
    description:
      "A complete coffee shop experience with menu, cart, checkout, orders, and user features.",
    tags: ["Next.js", "TypeScript", "Backend"],
    imageUrl: "/images/projects/coffee-shop.png",
  },
  {
    number: "02",
    title: "Expense Tracker",
    description:
      "A thoughtful digital platform designed to make finding and managing resources easier.",
    tags: ["React", "UI/UX", "API"],
    imageUrl: "/images/projects/resqued.png",
  },
  {
    number: "03",
    title: "Micro Services Architecture",
    description:
      "A modern web experience focused on clean interfaces, smooth interactions, and visual storytelling.",
    tags: ["Next.js", "Design", "Animation"],
    imageUrl: "/images/projects/yachty.png",
  },
];