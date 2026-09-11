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
    title: "ResQued",
    description:
      "A thoughtful digital platform designed to make finding and managing resources easier.",
    tags: ["React", "UI/UX", "API"],
    imageUrl: "/images/projects/resqued.png",
  },
  {
    number: "03",
    title: "Yachty",
    description:
      "A modern web experience focused on clean interfaces, smooth interactions, and visual storytelling.",
    tags: ["Next.js", "Design", "Animation"],
    imageUrl: "/images/projects/yachty.png",
  },
  {
    number: "04",
    title: "EcoTrack",
    description:
      "A sustainable living platform that helps users track their environmental impact and make eco-friendly choices.",
    tags: ["React", "Data Visualization", "Sustainability"],
    imageUrl: "/images/projects/ecotrack.png",
  },
  {
    number: "05",
    title: "FitLife",
    description:"jfkd",
    tags: ["React", "Health", "Fitness"],
    imageUrl: "/images/projects/fitlife.png",
  },
];