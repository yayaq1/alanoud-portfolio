export interface Skill {
  name: string;
  level: number;
  category: string;
}

export const skills: Skill[] = [
  // Machine Learning & Deep Learning
  { name: "PyTorch", level: 95, category: "ML/DL" },
  { name: "TensorFlow", level: 90, category: "ML/DL" },
  { name: "Scikit-learn", level: 92, category: "ML/DL" },
  { name: "Keras", level: 88, category: "ML/DL" },
  { name: "Hugging Face", level: 85, category: "ML/DL" },
  
  // Programming Languages
  { name: "Python", level: 95, category: "Languages" },
  { name: "JavaScript", level: 80, category: "Languages" },
  { name: "TypeScript", level: 78, category: "Languages" },
  { name: "SQL", level: 85, category: "Languages" },
  { name: "R", level: 75, category: "Languages" },
  
  // AI/ML Specializations
  { name: "NLP", level: 92, category: "AI Specializations" },
  { name: "Computer Vision", level: 88, category: "AI Specializations" },
  { name: "LLMs", level: 90, category: "AI Specializations" },
  { name: "Reinforcement Learning", level: 80, category: "AI Specializations" },
  { name: "Generative AI", level: 87, category: "AI Specializations" },
  
  // Tools & Platforms
  { name: "Docker", level: 85, category: "Tools" },
  { name: "Git", level: 90, category: "Tools" },
  { name: "AWS", level: 82, category: "Tools" },
  { name: "MLflow", level: 80, category: "Tools" },
  { name: "Jupyter", level: 95, category: "Tools" },
];

export const skillCategories = Array.from(
  new Set(skills.map((skill) => skill.category))
);

