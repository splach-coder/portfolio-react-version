import { nanoid } from "nanoid";

const fullStackSkills = [
  {
    id: nanoid(),
    skill: "Full-Stack Framework",
    description:
      "Proficiency in Express.js, Django, or Ruby on Rails for building scalable server-side applications.",
    icon: "🚀",
  },
  {
    id: nanoid(),
    skill: "Database Knowledge",
    description:
      "Familiarity with relational databases (MySQL, PostgreSQL) and NoSQL databases (MongoDB).",
    icon: "🛢️",
  },
  {
    id: nanoid(),
    skill: "APIs",
    description:
      "Experience creating and consuming APIs, understanding RESTful principles and HTTP methods.",
    icon: "🔗",
  },
  {
    id: nanoid(),
    skill: "Deployment and Hosting",
    description:
      "Deploying web applications to servers or cloud platforms (e.g., AWS, Heroku), server configurations, and domain management.",
    icon: "🌐",
  },
];

export default fullStackSkills;
