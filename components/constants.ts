import { Project, Publication } from "./types";

export const projects: Project[] = [
  {
    title: "Leaverer - Leave Management System",
    description:
      "Web application for managing leave requests and posts within organizations. Features role-based access, with functionalities for super admins, managers, and employees. Provides seamless management of organizational leave processes.",
    technologies: [
      "Next.js",
      "NestJS",
      "MikroORM",
      "PostgreSQL",
      "Tailwind CSS",
      "Daisy UI",
    ],
    category: ["Software"],
    link: "https://github.com/Bakar31/Leaverer",
    isPrivate: false,
    year: 2023,
  },
  {
    title: "E-commerce Web Application",
    description:
      "Developed a feature-rich e-commerce platform with functionalities such as user authentication, product management, and order handling. Utilized modern tech stack to provide a seamless shopping experience.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "ExpressJS",
      "Prisma",
      "PostgreSQL",
    ],
    category: ["Software"],
    link: "https://github.com/Bakar31/Ecommerce-App",
    isPrivate: false,
    year: 2023,
  },
  {
    title:
      "Origin Classification of Blood Clots in Ischemic Stroke and Treatment Plan Generation to Reduce the Likelihood of Another Stroke",
    description:
      "Thesis project leveraging Deep Learning and NLP to develop a system for personalized treatment plan generation. Utilized advanced neural networks such as EfficientNet for medical imaging and FastAPI for API integration.",
    technologies: ["TensorFlow", "EfficientNet", "FastAPI", "React"],
    category: ["DL", "NLP", "Software", "CV"],
    link: "https://github.com/Bakar31/Thesis-App",
    isPrivate: false,
    year: 2024,
  },
  {
    title: "Keyword Similarity Filter for SEO Optimization",
    description:
      "Developed a high-performance solution to filter out similar keywords from millions of entries for an SEO company. Utilized Sentence Transformers for efficient grouping, significantly streamlining keyword management. Optimized for large-scale datasets, achieving fast, accurate results.",
    technologies: ["Python", "FastAPI", "Sentence Transformers"],
    category: ["NLP"],
    link: "",
    isPrivate: true,
    year: 2023,
  },
  {
    title: "Transaction Checker App",
    description:
      "Desktop application designed for small businesses to verify transaction IDs from images. Utilizes OCR to detect fraudulent activities efficiently, providing a robust and user-friendly solution.",
    technologies: ["Python", "OCR", "PyQt", "SQLite"],
    category: ["Software", "CV"],
    link: "",
    isPrivate: true,
    year: 2023,
  },
  {
    title: "SGPA Calculator According to RUET System",
    description:
      "Web-based tool designed to simplify SGPA calculations for students following the RUET grading system. Provides an intuitive interface for efficient grade calculation and academic performance tracking.",
    technologies: ["JavaScript", "HTML", "CSS"],
    category: ["Software"],
    link: "https://github.com/Bakar31/CGPA-Calculator",
    isPrivate: false,
    year: 2021,
  },
  {
    title: "PotterQuest - Your One-Line Wizardry Encyclopedia",
    description:
      "NLP-based tool that allows users to explore the magical world of Harry Potter using open-source models. Designed for interactive exploration with a user-friendly Gradio interface.",
    technologies: ["Python", "LLM", "LangChain", "Gradio"],
    category: ["NLP"],
    link: "https://github.com/Bakar31/PotterQuest",
    isPrivate: false,
    year: 2023,
  },
  {
    title: "Mechatronics Engineering QA System",
    description:
      "A question-answering system tailored for Mechatronics Engineering queries. Integrated with web scraping for data collection and built on Haystack for efficient QA processing.",
    technologies: ["Python", "Haystack", "Web scraping", "Gradio"],
    category: ["NLP"],
    link: "https://github.com/Bakar31/MTE-QA",
    isPrivate: false,
    year: 2022,
  },
  {
    title: "SafeTracker",
    description:
      "Computer vision-based solution for social distancing compliance and violation tracking. Processes video feeds in real-time to detect and flag instances of non-compliance with social distancing guidelines.",
    technologies: ["Python", "OpenCV", "YOLOv7"],
    category: ["CV"],
    link: "",
    isPrivate: true,
    year: 2023,
  },
  {
    title: "People Counter",
    description:
      "A computer-based solution to accurately count people entering and exiting using multiple camera inputs.",
    technologies: ["Python", "YOLO", "Deepsort", "FastAPI", "Flask"],
    category: ["CV"],
    link: "https://github.com/Bakar31/People-Counter",
    isPrivate: false,
    year: 2023,
  },
  {
    title: "Pothole Detection",
    description:
      "This project focuses on enhancing road safety by developing a computer vision model to detect potholes, a major cause of accidents and vehicle damage. Using the YOLOv7 model and image augmentation techniques, the goal is to improve the accuracy of pothole detection and enable timely identification, reducing the risk of accidents, particularly for two-wheelers more prone to road hazards.",
    technologies: ["Python", "YOLO", "Deepsort", "FastAPI", "Flask"],
    category: ["CV"],
    link: "https://github.com/Bakar31/Potholes-Detection",
    isPrivate: false,
    year: 2022,
  },
  {
    title: "Object Detection for Industrial Use-Cases",
    description:
      "Developed an object detection model for industrial environments as part of the BMW SORDI Hackathon. Optimized for limited hardware resources, achieving recognition of logistic and industrial tools.",
    technologies: ["Python", "YOLOv7"],
    category: ["CV"],
    link: "https://github.com/Bakar31/BMW-Hackathon",
    isPrivate: false,
    year: 2022,
  },
  {
    title: "Radiogenomics for Glioblastoma Prediction",
    description:
      "Deep learning model to predict MGMT promoter methylation in glioblastoma patients using MRI scans. Aims to minimize surgeries required for genetic analysis and refine therapy options.",
    technologies: ["Python", "TensorFlow", "Keras"],
    category: ["DL"],
    link: "https://github.com/Bakar31/Brain-Tumor-Classification",
    isPrivate: false,
    year: 2021,
  },
  {
    title: "Breast Cancer Detection",
    description:
      "Developed multiple cancer detection models using mammography scans. Compared vision transformers and CNN architectures for accuracy, aiming for early detection and improved diagnostic workflows.",
    technologies: ["Python", "TensorFlow", "Vision Transformers"],
    category: ["DL"],
    link: "https://github.com/Bakar31/Breast-Cancer-Detection",
    isPrivate: false,
    year: 2023,
  },
  {
    title: "Ventilator Pressure Prediction for Covid-19 Patients",
    description:
      "Machine learning model simulating ventilator pressure for sedated patients' lungs. Participated in a competition to develop cost-effective ventilator simulation methods for Covid-19 treatment.",
    technologies: ["Python", "TensorFlow", "Machine Learning"],
    category: ["DL"],
    link: "https://github.com/Bakar31/Ventilator-Pressure-Prediction",
    isPrivate: false,
    year: 2021,
  },
  {
    title: "Hire The Perfect Candidate",
    description:
      "Hiring the right candidate is crucial for any organization's success. Traditional methods of resume screening can be time-consuming and prone to biases. This project automates the process of matching resumes with job descriptions, providing a quantitative measure of compatibility. Utilizing techniques like Countvector, TF-IDF, and manual feature extraction, it employs models such as LightGBM and XGBoost for training and prediction.",
    technologies: ["Python", "BOW", "TF-IDF", "Catboost", "LGBM", "Tensorflow"],
    category: ["ML", "NLP"],
    link: "https://github.com/Bakar31/Resume-Match-NLP",
    isPrivate: false,
    year: 2021,
  },
  {
    title: "Lightweight Model for Accurate Fraud Detection",
    description:
      "Developed a lightweight yet highly accurate model for detecting fraudulent credit card transactions. This project addresses data imbalance using advanced machine learning techniques, providing a practical solution for real-world fraud detection scenarios.",
    technologies: ["Python", "Scikit-Learn", "Random Forest"],
    category: ["ML"],
    link: "https://www.kaggle.com/code/bakar31/simple-model-works-better-sometime",
    isPrivate: false,
    year: 2021,
  },
  {
    title: "Real-time Patient Monitoring System",
    description:
      "Developed an IoT-based wireless system for real-time patient monitoring. Integrates sensors for continuous data acquisition and visualization via dashboards to reduce medical errors and improve healthcare quality.",
    technologies: ["Arduino", "Sensor", "IoT"],
    category: ["Robotics"],
    link: "https://github.com/Bakar31/RUET-Sessional-Codes/tree/master/3-1%5BMicrocontroller%20and%20Interfacing%20Sessional%5D/Final%20Project",
    isPrivate: false,
    year: 2022,
  },
  {
    title: "Automatic Hand Sanitizer Dispenser",
    description:
      "Designed a low-cost, touchless hand sanitizer dispenser during the COVID-19 pandemic. The device promotes hygiene by reducing cross-contamination risks in various environments.",
    technologies: ["Arduino", "Sensor", "IoT"],
    category: ["Robotics"],
    link: "",
    isPrivate: false,
    year: 2021,
  },
];

export const publications: Publication[] = [
  {
    title:
      "Real-time Patient Monitoring System to Reduce Medical Error with the help of Database",
    journal:
      "IEEE, 4th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE)",
    status: "Published",
    year: 2022,
    link: "https://ieeexplore.ieee.org/abstract/document/10114482/",
  },
  {
    title:
      "Enhanced Ischemic Stroke Etiology Classification via ROI-driven Patch Extraction in Digital Pathology Images",
    journal: "Journal Article",
    status: "Pre Review",
    year: 2024,
  },
  {
    title:
      "Unraveling the Enigmatic Frontier: Deciphering Distinction Between AI-Generated and Real Images",
    journal:
      "IEEE, 6th International Conference on Electrical Engineering and Information Communication Technology (ICEEICT)",
    status: "Published",
    year: 2024,
    link: "https://ieeexplore.ieee.org/abstract/document/10534381/",
  },
  {
    title:
      "Deep Learning and Natural Language Processing in Neuroradiology: Towards Next Generation Cutting Edge Technology Healthcare",
    journal: "Heliyon (Q1)",
    status: "Under Review",
    year: 2023,
  },
  {
    title:
      "An Epitomized Machine Learning Approach for Early Identification of Genetic Disorder Categories and Particular Disorders",
    journal: "Archive",
    status: "Published",
    year: 2021,
    link: "https://arxiv.org/pdf/2412.02189",
  },
];
