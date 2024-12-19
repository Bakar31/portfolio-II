import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Software Development",
    skills: [
      "Full-stack development",
      "Agile methodologies",
      "CI/CD",
      "RESTful API design",
      "System Design",
    ],
  },
  {
    title: "Machine Learning & AI",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Deep Learning",
      "NLP",
      "Large Language Models",
      "RAG",
      "Computer Vision",
      "ASR",
      "Model Evaluation",
      "Model Optimization",
    ],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "TypeScript"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "NestJS", "FastAPI", "Express.js"],
  },
  {
    title: "Libraries (Python)",
    skills: ["TensorFlow", "PyTorch"],
  },
  {
    title: "Cloud Platforms & DevOps",
    skills: ["AWS", "GCP", "Docker", "GitHub Actions"],
  },
  {
    title: "Databases & Tools",
    skills: ["PostgreSQL", "Git"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50"
    >
      <h2 className="mb-8 text-3xl font-bold text-center text-orange-800">
        Skills
      </h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold text-orange-800 mb-2">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-sm bg-white text-orange-700 border-orange-300 rounded-full"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
