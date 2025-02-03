import React from "react";
import { Afacad } from "next/font/google";

const afacad = Afacad({
  subsets: ["latin"],
});

interface SkillItem {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

interface SkillCategory {
  category: string;
  items: SkillItem[];
}

interface SkillCardProps {
  category: string;
  items: SkillItem[];
}

const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js", level: "Advanced" },
      { name: "React.js", level: "Advanced" },
      { name: "JavaScript", level: "Expert" },
      { name: "HTML/CSS", level: "Expert" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", level: "Advanced" },
      { name: "Django", level: "Advanced" },
      { name: "Machine Learning", level: "Intermediate" },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Kotlin/Mobile", level: "Advanced" },
      { name: "UI/UX Design", level: "Advanced" },
      { name: "Internet of Things", level: "Intermediate" },
    ],
  },
];

const SkillCard: React.FC<SkillCardProps> = ({ category, items }) => (
  <div
    className={`${afacad.className} bg-[#F2E5DA] p-6 rounded-lg shadow-lg border border-[#B1785C] transition-transform transform hover:scale-105 hover:shadow-xl`}
  >
    <h3 className="text-xl font-semibold mb-4 text-[#002E29]">{category}</h3>
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[#002E29] font-medium">{item.name}</span>
            <span className="text-sm text-[#3D3D3D]">{item.level}</span>
          </div>
          <div className="h-2 bg-[#E5C3AA] rounded-full">
            <div
              className="h-2 bg-[#B1785C] rounded-full transition-all duration-500"
              style={{
                width:
                  item.level === "Expert"
                    ? "95%"
                    : item.level === "Advanced"
                    ? "85%"
                    : item.level === "Intermediate"
                    ? "70%"
                    : "50%",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SkillSet: React.FC = () => {
  return (
    <div id="skills" className={`${afacad.className} py-16 bg-[#0A3141]`}>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-6 text-center text-[#F2E5DA]">
          Skills
        </h2>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, index) => (
            <SkillCard
              key={index}
              category={skillCategory.category}
              items={skillCategory.items}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
