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
import { projects } from "./constants";
import { Project } from "./types";

export function Projects() {
  const categories = [
    { value: "software", label: "Web App" },
    { value: "nlp", label: "NLP" },
    { value: "cv", label: "CV" },
    { value: "dl", label: "DL" },
    { value: "ml", label: "ML" },
    { value: "robotics", label: "Robotics" },
  ];

  return (
    <section id="projects" className="py-4 bg-white">
      <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
        Projects 🚀
      </h2>

      <Tabs defaultValue="software" className="max-w-5xl mx-auto">
        <TabsList className="flex flex-wrap justify-center gap-2 mb-4">
          {categories.map((category) => (
            <TabsTrigger
              key={category.value}
              value={category.value}
              className="px-4 py-1 text-sm font-medium text-center text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200 data-[state=active]:bg-gray-300"
            >
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category.value} value={category.value}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects
                .filter((project) =>
                  project.category
                    .map((cat) => cat.toLowerCase())
                    .includes(category.value)
                )
                .map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col mt-8 h-full border border-gray-200 dark:border-neutral-800">
      <CardHeader>
        <CardTitle className="text-gray-800">{project.title}</CardTitle>
        <CardDescription>
          {project.description}
          <div className="mt-2 text-sm">
            <Badge
              variant="outline"
              className="bg-white text-sm px-2 py-1 rounded-full text-blue-400 border-blue-300 mr-1"
            >
              Year: {project.year}
            </Badge>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="text-sm font-semibold mb-2 text-gray-700">
          Technologies:
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <Badge
              key={i}
              variant="outline"
              className="bg-white text-sm px-2 py-1 rounded-full text-orange-400 border-orange-300 mr-1"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      {project.isPrivate ? (
        <CardFooter>
          <Badge
            variant="outline"
            className="text-sm bg-white text-gray-500 border-gray-300 rounded-full mx-1"
          >
            Private Project
          </Badge>
        </CardFooter>
      ) : (
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
