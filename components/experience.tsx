import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Machine Learning Engineer",
    company: "Sazim",
    duration: "March 2024 - Present",
    description: [
      "Collaborating with cross-functional teams to develop LLM-based applications",
      "Utilizing OpenAI, Gemini, and Anthropic APIs",
      "Implementing Retrieval-Augmented Generation (RAG) with local vector databases",
      "Developing enterprise local LLM solutions for private infrastructure",
    ],
  },
  {
    title: "Trainee Engineer",
    company: "Sazim",
    duration: "October 2023 - February 2024",
    description: [
      "Developed end-to-end RAG application with open-source LLMs",
      "Created two full-stack applications following best practices",
      "Learned software engineering best practices under senior mentorship",
    ],
  },
  {
    title: "Machine Learning Researcher and Engineer Intern",
    company: "Intelsense AI Limited",
    duration: "September 2022 - March 2023",
    description: [
      "Developed Rasa-powered multilingual restaurant chatbots",
      "Worked on ASR tool development for Bengali Language",
      "Led the Data Annotation Team",
    ],
  },
  {
    title: "Data Science Apprentice",
    company: "Cramstack Ltd.",
    duration: "November 2021 - May 2022",
    description: [
      "Created high-functioning OCR tool for restaurants",
      "Responsible for pre-processing and cleaning large, complex datasets",
      "Conducted research on Text Summarization algorithms",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="mb-8 text-3xl font-bold text-center">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>
                {exp.company} | {exp.duration}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-sm text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
