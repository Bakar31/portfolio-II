import { Badge } from "@/components/ui/badge";

const skills = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "LLM",
  "RAG",
  "Computer Vision",
  "TensorFlow",
  "PyTorch",
  "FastAPI",
  "Docker",
  "AWS",
  "GCP",
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
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="text-sm bg-white text-orange-700 border-orange-300"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}
