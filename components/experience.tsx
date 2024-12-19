import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  type: string;
  location: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Machine Learning Engineer",
    company: "Sazim Tech Ltd.",
    duration: "March 2023 - Present",
    type: "Full-time",
    location: "Remote",
    description: [
      "Worked on LLM-based application integrating LLMs using OpenAI, Gemini, and Anthropic APIs, with RAG supported by vector database.",
      "Designed data models, created API endpoints, and integrated backend services with frontend interfaces for efficient application performance.",
      "Conducted prompt engineering and LLM response evaluation, achieving significant improvements in model performance.",
      "Built applications utilizing open-source and proprietary LLMs for deployment on private infrastructure with a focus on security and scalability.",
      "Optimized deployment processes using Docker to ensure consistent and reliable containerized environments.",
      "Authored technical decision documents to justify architectural and development choices.",
      "Translated client requirements into stories and epics.",
    ],
  },
  {
    title: "Trainee Engineer",
    company: "Sazim Tech Ltd.",
    duration: "October 2023 - February 2024",
    type: "Trainee Engineer",
    location: "Hybrid",
    description: [
      "Developed an end-to-end RAG application using open-source LLMs and a database with over 3 million samples. Utilized Next.js for the frontend, and LangChain with FastAPI for the backend.",
      "Developed multiple full-stack applications following industry-standard principles and coding guidelines.",
      "Gained hands-on experience in software engineering by working closely with senior software engineers to learn best practices.",
    ],
  },
  {
    title: "Machine Learning Researcher and Engineer",
    company: "Intelsense AI Limited",
    duration: "March 2023 - September 2023",
    type: "Part-time",
    location: "Remote",
    description: [
      "Created Rasa-based chatbots for various use cases, including multiple banks, restaurants, and a mobile operator company, for proof-of-concept and pilot implementations.",
      "Collaborated on the development of an automatic speech recognition (ASR) tool for the Bengali language.",
      "Data Annotation Team Leader",
    ],
  },
  {
    title: "Machine Learning Researcher and Engineer Intern",
    company: "Intelsense AI Limited",
    duration: "September 2022 - March 2023",
    type: "Internship",
    location: "Remote",
    description: [
      "Developed multilingual restaurant chatbots using Rasa, capable of understanding English",
      "Banglish, and Bangla inputs. Implemented features such as menu display, order processing, reservations, promotions, complaint handling, and FAQs, supported by a dynamic database for improved accuracy.",
    ],
  },
  {
    title: "Data Science Apprentice",
    company: "Cramstack Ltd.",
    duration: "November 2021 - May 2022",
    type: "Apprenticeship",
    location: "Remote",
    description: [
      "Contributed to the development of a high-functioning OCR tool for a restaurant, analyzing OCR libraries and performing image processing.",
      "Cleaned and pre-processed large, complex datasets from various clients, ensuring data accuracy and attention to detail.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <h2 className="mb-8 text-3xl font-bold text-center">Experience</h2>
      <div className="max-w-5xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>
                <span className=" px-2 py-1 rounded-md font-bold text-blue-800">
                  {exp.title}
                </span>
              </CardTitle>
              <CardDescription>
                <Badge
                  variant="outline"
                  className="bg-white text-sm px-2 py-1 rounded-full font-bold text-orange-800 mr-1"
                >
                  {exp.company}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-white text-sm px-2 py-1 rounded-full font-bold text-purple-800 mx-1"
                >
                  {exp.duration}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm bg-white text-green-700 border-green-300 rounded-full mx-1"
                >
                  {exp.type}
                </Badge>
                <Badge
                  variant="outline"
                  className="text-sm bg-white text-yellow-700 border-yellow-300 rounded-full ml-1"
                >
                  {exp.location}
                </Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">{exp.company}</p>
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
