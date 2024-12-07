import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: "AI" | "Software";
  link?: string;
}

const projects: Project[] = [
  {
    title: "Origin Classification of Blood Clots in Ischemic Stroke",
    description:
      "Thesis project using Deep Learning and NLP for personalized treatment plan generation.",
    technologies: ["TensorFlow", "EfficientNet", "FastAPI", "React"],
    category: "AI",
    link: "https://github.com/Bakar31/Stroke-Clot-Origin-Classification",
  },
  {
    title: "Keyword Similarity Filter for SEO Optimization",
    description:
      "High-performance solution to filter similar keywords from millions of entries.",
    technologies: ["Python", "FastAPI", "Sentence Transformers"],
    category: "AI",
    link: "https://github.com/Bakar31/Keyword-Similarity-Filter",
  },
  {
    title: "PotterQuest - Your One-Line Wizardry Encyclopedia",
    description:
      "NLP tool for exploring the magical world of Harry Potter using open-source models.",
    technologies: ["Python", "LLM", "LangChain", "Gradio"],
    category: "AI",
    link: "https://github.com/Bakar31/PotterQuest",
  },
  {
    title: "Transaction Checker App",
    description:
      "Desktop application to verify transaction IDs from images for small businesses.",
    technologies: ["Python", "OCR", "PyQt", "SQLite"],
    category: "Software",
    link: "https://github.com/Bakar31/Transaction-Checker-App",
  },
  {
    title: "Mechatronics Engineering QA System",
    description:
      "Question-answering system for Mechatronics Engineering queries.",
    technologies: ["Python", "Haystack", "Web scraping", "Gradio"],
    category: "AI",
    link: "https://github.com/Bakar31/MTE-QA-System",
  },
];

export function Projects() {
  const aiProjects = projects.filter((p) => p.category === "AI");
  const softwareProjects = projects.filter((p) => p.category === "Software");

  return (
    <section id="projects" className="py-20 bg-white">
      <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
        Projects
      </h2>
      <Tabs defaultValue="ai" className="max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="ai" className="data-[state=active]:bg-gray-200">
            AI Projects
          </TabsTrigger>
          <TabsTrigger
            value="software"
            className="data-[state=active]:bg-gray-200"
          >
            Software Projects
          </TabsTrigger>
        </TabsList>
        <TabsContent value="ai">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aiProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="software">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softwareProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col h-full border border-neutral-200 border-gray-200 dark:border-neutral-800">
      <CardHeader>
        <CardTitle className="text-gray-800">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="text-sm font-semibold mb-2 text-gray-700">
          Technologies:
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="bg-gray-100 text-gray-800"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      {project.link && (
        <CardFooter>
          <Button
            asChild
            variant="ghost"
            className="text-gray-600 hover:text-gray-800"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
