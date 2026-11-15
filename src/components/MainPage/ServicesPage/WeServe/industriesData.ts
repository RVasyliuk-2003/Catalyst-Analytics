// import img1 from "./../images/img1.webp";
import img2 from "./../images/img2.webp";
import img3 from "./../images/img3.webp";
// import img4 from "./../images/img4.webp";
// import img5 from "./../images/img5.webp";
// import img6 from "./../images/img6.webp";
import img7 from "./../images/img7.webp";
import img8 from "./../images/img8.webp";
import img9 from "./../images/img9.webp";
import img10 from "./../images/img10.webp";

type Ind = {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
};

export const industriesData: Ind[] = [
  {
    id: 1,
    title: "Financial Services & Trading",
    description:
      "Advanced analytics and trading solutions for financial institutions.",
    icon: img3,
    features: [
      "Algorithmic trading systems",
      "Risk management",
      "Market analysis",
      "Fraud detection",
    ],
  },
  {
    id: 2,
    title: "Blockchain & Crypto",
    description:
      "Cutting-edge blockchain solutions and DeFi protocol development.",
    icon: img2,
    features: [
      "DeFi protocols",
      "Smart contracts",
      "Token systems",
      "Blockchain analytics",
    ],
  },
  {
    id: 3,
    title: "Esports & Gaming",
    description:
      "Data-driven solutions for esports teams, tournaments, and gaming platforms.",
    icon: img7,
    features: [
      "Player performance analytics",
      "Tournament management",
      "Team optimization",
      "Gaming platform analytics",
    ],
  },
  {
    id: 4,
    title: "Healthcare & Life Sciences",
    description:
      "AI solutions for medical imaging, patient care optimization, and drug discovery.",
    icon: img8,
    features: [
      "Medical image analysis",
      "Patient outcomes prediction",
      "Clinical trial optimization",
      "Drug development",
    ],
  },
  {
    id: 5,
    title: "Manufacturing",
    description:
      "Smart manufacturing solutions with predictive maintenance and quality control.",
    icon: img9,
    features: [
      "Predictive maintenance",
      "Quality control automation",
      "Supply chain optimization",
      "Process optimization",
    ],
  },
  {
    id: 6,
    title: "Retail & E-commerce",
    description:
      "AI-powered solutions for personalization and inventory management.",
    icon: img10,
    features: [
      "Demand forecasting",
      "Recommendation systems",
      "Inventory optimization",
      "Customer analytics",
    ],
  },
];
