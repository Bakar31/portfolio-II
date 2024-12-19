export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: ("Software" | "ML" | "DL" | "NLP" | "CV" | "Robotics")[];
  link?: string;
  isPrivate: boolean;
  year?: number;
}
