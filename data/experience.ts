export type Experience = {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
};

export const experience: Experience[] = [
  {
    period: "2022 — 2024",
    role: "Associate Software Engineer",
    company: "Precedence Health Care",
    description:
      "Worked across web and mobile healthcare applications, contributing to new features, automated testing, code reviews and ongoing product improvements.",
    technologies: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Jenkins",
      "Git",
    ],
  },
  {
    period: "2021 — 2022",
    role: "In-House Technology Manager",
    company: "CM&Co Coffee Roasters",
    description:
      "Worked on internal technology and business systems while completing my Computer Science degree.",
    technologies: [
      "JavaScript",
      "Web Development",
      "Business Systems",
    ],
  },
];