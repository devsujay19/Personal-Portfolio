import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduation history",
    location: "--N/A--",
    description:
      "I have no graduation history yet.",
    icon: React.createElement(LuGraduationCap),
    date: "--N/A--",
  },
  {
    title: "Front-End Developer",
    location: "West Bengal, India",
    description:
      "I was learning HTML, CSS and JavaScript. Also Building Cool UIs (User Interfaces).",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "West Bengal, India",
    description:
      "I was a Full-Stack Developer that time.",
    icon: React.createElement(FaReact),
    date: "2022 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment (Upcoming)",
    description:
      "I'll be working as a full-stack developer on this project for a long-time. Users can give public feedback to companies.",
    tags: ["ReactJS", "NextJS", "MongoDB", "Tailwind CSS", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "RemoteDev(Upcoming)",
    description:
      "Job site for remote developer jobs. I'll be working on this project after finishing CorpComment. It has features like filtering, sorting and pagination.",
    tags: ["ReactJS", "TypeScript", "NextJS", "Tailwind CSS", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["ReactJS", "Next.js", "SQL", "Tailwind CSS", "Framer Motion"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "ReactJS",
  "NextJS",
  "NodeJS",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "Prisma",
  "MongoDB",
  "ThreeJS",
  "Java",
  "Python",
  "ExpressJS",
  "PostgreSQL",
  "R",
  "Ruby",
  "Rust (In progress)",
  "Django (Python)",
  "Flask (Python)",
  "Framer Motion",
  "Bootstrap 3",
  "Bootstrap 4",
  "Bootstrap 5",
  "Machine Learning/ML (In progress)",
  "Artificial Intelligence (In progress)",
  "Swift",
] as const;
