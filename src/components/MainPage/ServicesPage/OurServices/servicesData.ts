import img1 from "./../images/img1.webp";
import img2 from "./../images/img2.webp";
import img3 from "./../images/img3.webp";
import img4 from "./../images/img4.webp";
import img5 from "./../images/img5.webp";
import img6 from "./../images/img6.webp";
// import img7 from "./../images/img7.webp";
// import img8 from "./../images/img8.webp";
// import img9 from "./../images/img9.webp";

type Servi = {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
};

export const servicesData: Servi[] = [
  {
    id: 1,
    title: "Machine Learning Solutions",
    description:
      "Custom ML models designed and optimized for your specific business challenges, leveraging cutting-edge deep learning techniques.",
    icon: img1,
    features: [
      "Deep learning model development",
      "Neural network architecture design",
      "Computer vision solutions",
      "Natural language processing",
      "Model optimization and scaling",
    ],
  },
  {
    id: 2,
    title: "Blockchain Development",
    description:
      "End-to-end blockchain solutions from smart contract development to decentralized application architecture.",
    icon: img2,
    features: [
      "Smart contract development",
      "DeFi protocol design",
      "Blockchain integration",
      "Web3 development",
      "Token implementation",
    ],
  },
  {
    id: 3,
    title: "Algorithmic Trading",
    description:
      "Advanced trading algorithms and systems leveraging ML for market analysis and automated execution.",
    icon: img3,
    features: [
      "Trading strategy development",
      "High-frequency trading systems",
      "Market analysis algorithms",
      "Risk management systems",
      "Performance optimization",
    ],
  },
  {
    id: 4,
    title: "Data Engineering",
    description:
      "Build robust data infrastructure that scales with your business needs using modern data engineering practices.",
    icon: img4,
    features: [
      "Data pipeline development",
      "Big data processing",
      "Database optimization",
      "ETL workflow design",
      "Data warehouse architecture",
    ],
  },
  {
    id: 5,
    title: "Predictive Analytics",
    description:
      "Transform your data into actionable insights with our advanced predictive modeling and forecasting solutions.",
    icon: img5,
    features: [
      "Time series analysis",
      "Predictive modeling",
      "Business intelligence",
      "Statistical analysis",
      "Data visualization",
    ],
  },
  {
    id: 6,
    title: "MLOps & Infrastructure",
    description:
      "Enterprise-grade infrastructure for deploying and managing ML models in production environments.",
    icon: img6,
    features: [
      "CI/CD pipeline setup",
      "Model deployment automation",
      "Performance monitoring",
      "Infrastructure scaling",
      "DevOps integration",
    ],
  },
];
