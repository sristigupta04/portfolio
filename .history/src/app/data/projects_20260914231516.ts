
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
      "Full-stack coffee shop ordering platform designed with system-design principles, separating storefront and order-management services. Auth.js authentication and a type-safe PostgreSQL schema via Prisma, containerized with Docker.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    imageUrl: "/images/coffee.png",
    link: "https://github.com/sristigupta04/coffee-shop",
  },

  {
    number: "02",
    title: "Expense Tracker",
    description:
      "A full-stack expense tracking app with a structured backend and frontend, deployed both locally and on Vercel.",
    tags: ["React", "UI/UX", "API"],
    imageUrl: "/images/expense.png",
    link: "https://github.com/sristigupta04/expense_tracker",
  },

  {
    number: "03",
    title: "Microservice Backend",
    description:
      "Modular microservice backend in TypeScript and Express.js, exposing a REST interface consumed by both a CLI client and a web frontend, with structured error handling across independently deployable service modules.",
    tags: ["Node.js", "Express.js", "REST APIs"],
    imageUrl: "/images/backend.png",
    link: "https://github.com/sristigupta04/Microservice-Backend",
  },

  {
    number: "04",
    title: "Weather App",
    description:
      "A weather application showing daily forecasts and mapped conditions for locations worldwide.",
    tags: ["React", "API", "UI/UX"],
    imageUrl: "/images/weather.png",
    link: "https://github.com/sristigupta04/weather-app",
  },

  {
    number: "05",
    title: "Portfolio Website",
    description:
      "This personal portfolio site, built with Next.js — showcasing projects, skills, and experience.",
    tags: ["Next.js", "React", "TypeScript"],
    imageUrl: "/images/portfolio.png",
    link: "https://github.com/sristigupta04/portfolio",
  },

  {
    number: "06",
    title: "Tic Tac Toe",
    description:
      "A classic Tic Tac Toe game with an unbeatable AI opponent powered by the minimax algorithm.",
    tags: ["React", "JavaScript", "Minimax"],
    imageUrl: "/images/tictoe.png",
    link: "https://github.com/sristigupta04/tic-tac-toe",
  },

  {
    number: "07",
    title: "Vistara",
    description:
      "Full-stack property listing platform with JWT/Auth.js authentication and dynamic search, connected to a MongoDB-backed user-management service and containerized with Docker.",
    tags: ["Next.js", "MongoDB", "Docker"],
    imageUrl: "/images/airbnb.png",
    link: "https://github.com/sristigupta04/Airbnb-app",
  },

  {
    number: "08",
    title: "Snake Game",
    description:
      "A classic Snake game implemented in JavaScript, featuring smooth controls and responsive gameplay.",
    tags: ["JavaScript", "Game Development", "HTML5"],
    imageUrl: "/images/snake.png",
    link: "https://github.com/sristigupta04/snake-game",
  },

  {
    number: "09",
    title: "Todo List App",
    description:
      "A simple and effective todo list application with a clean and modern interface built with Python, Flask, and SQLite.",
    tags: ["Python", "Flask", "SQLite"],
    imageUrl: "/images/todo.png",
    link: "https://github.com/sristigupta04/todo-app_flask",
  },
];
