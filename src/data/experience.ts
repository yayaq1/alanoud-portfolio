export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior AI Engineer",
    company: "TechVision AI",
    location: "Remote",
    period: "2023 - Present",
    description: [
      "Led development of large-scale NLP systems processing 10M+ documents daily",
      "Architected and deployed ML pipelines reducing model training time by 60%",
      "Mentored team of 5 junior engineers in AI/ML best practices",
      "Collaborated with product teams to integrate AI features improving user engagement by 45%",
    ],
    technologies: ["PyTorch", "Transformers", "AWS", "Docker", "MLflow"],
  },
  {
    id: 2,
    title: "Machine Learning Engineer",
    company: "DataSphere Inc",
    location: "San Francisco, CA",
    period: "2021 - 2023",
    description: [
      "Developed computer vision models for autonomous systems achieving 96% accuracy",
      "Implemented real-time object detection pipelines for video analytics",
      "Optimized model inference reducing latency by 40% through quantization",
      "Published 2 research papers on efficient deep learning architectures",
    ],
    technologies: ["TensorFlow", "OpenCV", "Kubernetes", "Python", "GCP"],
  },
  {
    id: 3,
    title: "AI Research Intern",
    company: "Innovation Labs",
    location: "Boston, MA",
    period: "2020 - 2021",
    description: [
      "Researched novel approaches to few-shot learning for NLP tasks",
      "Built proof-of-concept models for generative AI applications",
      "Contributed to open-source ML libraries with 500+ GitHub stars",
      "Presented findings at internal research symposiums",
    ],
    technologies: ["PyTorch", "Scikit-learn", "Jupyter", "Git"],
  },
];

