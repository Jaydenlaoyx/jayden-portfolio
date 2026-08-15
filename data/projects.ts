export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Wordle",
    description:
      "A browser-based Wordle implementation built with React, featuring interactive gameplay, keyboard controls and game state management.",
    technologies: ["React", "TypeScript", "CSS"],
    github: "",
    demo: "",
  },
  {
    title: "Pokédex",
    description:
      "A full-stack Pokédex application with a React frontend and Node.js/Express backend, backed by MongoDB.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "",
    demo: "",
  },
  {
    title: "Consultation App",
    description:
      "A web application for recording doctor consultations and converting spoken conversations into text using Google Cloud Speech-to-Text.",
    technologies: ["React", "Node.js", "Google Cloud"],
    github: "",
    demo: "",
  },
];