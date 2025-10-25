export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Neural Style Transfer Application",
    description: "Built a real-time style transfer application using CNNs to apply artistic styles to images and videos. Achieved 30% faster processing time through optimization.",
    tags: ["PyTorch", "Computer Vision", "CNNs", "Flask"],
    featured: true,
  },
  {
    id: 2,
    title: "Sentiment Analysis NLP System",
    description: "Developed a multilingual sentiment analysis system using transformer models. Deployed on AWS with 94% accuracy across 5 languages.",
    tags: ["NLP", "Transformers", "BERT", "AWS", "Docker"],
    featured: true,
  },
  {
    id: 3,
    title: "Generative AI Chatbot",
    description: "Created an intelligent chatbot leveraging GPT-based models with custom fine-tuning for domain-specific conversations and context awareness.",
    tags: ["LLMs", "GPT", "LangChain", "Python"],
    featured: true,
  },
  {
    id: 4,
    title: "Object Detection System",
    description: "Implemented YOLOv8-based object detection for real-time video analysis. Optimized for edge devices with 60 FPS performance.",
    tags: ["Computer Vision", "YOLO", "OpenCV", "TensorRT"],
    featured: false,
  },
  {
    id: 5,
    title: "Recommendation Engine",
    description: "Built a hybrid recommendation system combining collaborative filtering and content-based approaches. Improved user engagement by 40%.",
    tags: ["ML", "Python", "Scikit-learn", "MongoDB"],
    featured: false,
  },
  {
    id: 6,
    title: "Time Series Forecasting Model",
    description: "Developed LSTM-based forecasting models for financial data prediction with advanced feature engineering and hyperparameter tuning.",
    tags: ["Deep Learning", "LSTM", "TensorFlow", "Pandas"],
    featured: false,
  },
];

export const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
);

