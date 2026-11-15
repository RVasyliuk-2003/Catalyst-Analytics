import caseImg1 from "./images/caseImg1.webp";
import caseImg2 from "./images/caseImg2.webp";
import caseImg3 from "./images/caseImg3.webp";
import caseImg4 from "./images/caseImg4.webp";
import caseImg5 from "./images/caseImg5.webp";
import caseImg6 from "./images/caseImg6.webp";
import caseImg7 from "./images/caseImg7.webp";
import caseImg8 from "./images/caseImg8.webp";
import caseImg9 from "./images/caseImg9.webp";
import caseImg10 from "./images/caseImg10.webp";
import caseImg11 from "./images/caseImg11.webp";
import caseImg12 from "./images/caseImg12.webp";

type Case = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  features: string[];
};

export const caseStudiesData: Case[] = [
  {
    id: 1,
    title: "Machine Learning Project",
    category: "Machine Learning",
    description:
      "Custom ML models designed and optimized for complex business challenges, leveraging cutting-edge deep learning techniques.",
    image: caseImg1,
    features: [
      "Deep learning model development",
      "Neural network architecture",
      "Computer vision solutions",
      "Natural language processing",
      "Model optimization and scaling",
    ],
  },
  {
    id: 2,
    title: "Blockchain DeFi Protocol",
    category: "Web Engineering",
    description:
      "Decentralized finance infrastructure built for high-frequency trading with top-tier security standards and smart contract auditing.",
    image: caseImg2,
    features: [
      "Smart contract development",
      "DeFi liquidity pools",
      "Gas fee optimization",
      "Cross-chain bridge integration",
      "Security audit compliance",
    ],
  },
  {
    id: 3,
    title: "Financial Market Analytics",
    category: "Machine Learning",
    description:
      "Real-time algorithmic trading and risk assessment platform providing accurate predictive forecasting for institutional brokers.",
    image: caseImg3,
    features: [
      "Algorithmic trading systems",
      "Risk management analytics",
      "Market trend visualization",
      "High-frequency data streams",
      "Automated fraud detection",
    ],
  },
  {
    id: 4,
    title: "Enterprise Data Warehouse",
    category: "Data Engineering",
    description:
      "Scalable cloud-based data lake architecture designed to unify siloed business intelligence streams and enhance reporting speed.",
    image: caseImg4,
    features: [
      "ETL pipeline automation",
      "Cloud migration strategy",
      "Big data query tuning",
      "Data governance frameworks",
      "Interactive BI dashboards",
    ],
  },
  {
    id: 5,
    title: "AI Healthcare Diagnostics",
    category: "Machine Learning",
    description:
      "Computer vision platform assisting radiologists in detecting anomalies and early-stage diseases from medical scans with 99% accuracy.",
    image: caseImg5,
    features: [
      "Medical image segmentation",
      "DICOM data integration",
      "Patient outcome prediction",
      "Clinical trial data analysis",
      "HIPAA-compliant security",
    ],
  },
  {
    id: 6,
    title: "Smart Manufacturing Hub",
    category: "IoT & Automation",
    description:
      "Industrial IoT ecosystem utilizing predictive maintenance algorithms to minimize assembly line downtime and cut operational costs.",
    image: caseImg6,
    features: [
      "Predictive sensor telemetry",
      "Quality control automation",
      "Supply chain tracking",
      "Energy consumption audit",
      "Robotic arm synchronization",
    ],
  },
  {
    id: 7,
    title: "E-commerce Personalization Engine",
    category: "Web Engineering",
    description:
      "AI-driven recommendation matrix tailored to shopper behavior, boosting conversion rates and average order value for global retailers.",
    image: caseImg7,
    features: [
      "Real-time recommendation API",
      "Dynamic pricing algorithms",
      "Customer segmentation models",
      "Inventory sync automation",
      "A/B testing framework",
    ],
  },
  {
    id: 8,
    title: "Autonomous Logistics Fleet",
    category: "IoT & Automation",
    description:
      "Route optimization software and telematics dashboard for large-scale delivery fleets operating in dense metropolitan environments.",
    image: caseImg8,
    features: [
      "GPS route pathfinding",
      "Fuel consumption tracking",
      "Driver performance scoring",
      "Real-time dispatching",
      "Traffic hazard avoidance",
    ],
  },
  {
    id: 9,
    title: "Cybersecurity Threat Intelligence",
    category: "Web Engineering",
    description:
      "Automated SIEM platform powered by behavioral anomaly detection to neutralize enterprise network intrusions before they occur.",
    image: caseImg9,
    features: [
      "Zero-day exploit detection",
      "Network packet inspection",
      "Incident response workflow",
      "Vulnerability assessment",
      "Encrypted log retention",
    ],
  },
  {
    id: 10,
    title: "AgriTech Crop Yield Predictor",
    category: "Data Engineering",
    description:
      "Satellite imagery and IoT soil sensor fusion pipeline providing farmers with precise micro-climate forecasts and irrigation guides.",
    image: caseImg10,
    features: [
      "Multispectral satellite mapping",
      "Soil moisture telemetry",
      "Weather pattern modeling",
      "Harvest timing optimizer",
      "Yield estimation reporting",
    ],
  },
  {
    id: 11,
    title: "EdTech Adaptive Learning Platform",
    category: "Web Engineering",
    description:
      "Personalized digital curriculum engine that adjusts difficulty levels and study tracks based on individual student performance.",
    image: caseImg11,
    features: [
      "Knowledge gap assessment",
      "Interactive quiz generation",
      "Student progress analytics",
      "Gamified reward loops",
      "Video streaming integration",
    ],
  },
  {
    id: 12,
    title: "Renewable Energy Grid Manager",
    category: "IoT & Automation",
    description:
      "Smart grid distribution software balancing solar and wind power output against fluctuating regional consumer demand in real time.",
    image: caseImg12,
    features: [
      "Load balancing algorithms",
      "Battery storage optimization",
      "Weather forecast synchronization",
      "Microgrid failover routing",
      "Carbon emission tracking",
    ],
  },
];
