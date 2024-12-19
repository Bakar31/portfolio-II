export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: ("Software" | "ML" | "DL" | "NLP" | "CV" | "Robotics")[];
  link?: string;
  isPrivate: boolean;
  year?: number;
}

export interface Publication {
  title: string;
  journal: string;
  status?: string;
  year: number;
  link?: string;
}

export interface Certification {
  name: string;
  link: string;
  platform: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface VolunteerExperience {
  title: string;
  organization: string;
  duration: string;
  description: string;
}
