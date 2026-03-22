import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function ExpertSkillsets() {
  const [activeId, setActiveId] = useState(null);

  const skills = [
    // Column 1: Job Seeker & Tech
    { id: 1, title: "Web Development", content: ["React.js", "Next.js", "Node.js", "Tailwind CSS"] },
    { id: 2, title: "DevOps & Cloud Computing", content: ["AWS", "Docker", "Kubernetes", "CI/CD Pipelines"] },
    { id: 3, title: "UX/UI Designers", content: ["Figma", "Adobe XD", "User Research", "Prototyping"] },
    { id: 4, title: "Programming Languages", content: ["Python", "JavaScript", "TypeScript", "Go", "Rust"] },
    { id: 5, title: "Software Development Roles", content: ["Frontend", "Backend", "Fullstack", "Tech Lead"] },
    { id: 6, title: "Quality Assurance & Testing", content: ["Selenium", "Cypress", "Manual Testing", "Automation"] },
    { id: 7, title: "API Development & Integration", content: ["REST APIs", "GraphQL", "Webhooks", "Microservices"] },
    { id: 8, title: "Blockchain Development", content: ["Solidity", "Smart Contracts", "Web3.js", "Ethereum"] },
    { id: 9, title: "Desktop Development", content: ["Electron", "Qt", "C# .NET", "JavaFX"] },
    { id: 10, title: "AR/VR & Game Development", content: ["Unity", "Unreal Engine", "C++", "Three.js"] },
    
    // Column 2: Ausbildung & Study Abroad
    { id: 11, title: "Nursing (Ausbildung)", content: ["Pflegefachmann", "Elderly Care", "Clinical Support"] },
    { id: 12, title: "IT Specialist (Ausbildung)", content: ["System Integration", "Application Development"] },
    { id: 13, title: "Mechatronics (Ausbildung)", content: ["Robotics", "Automation", "Circuit Design"] },
    { id: 14, title: "Masters in Germany", content: ["CS Masters", "Engineering", "Business Schools"] },
    { id: 15, title: "Visa & Embassy Support", content: ["Schengen Visa", "Student Permits", "Documentation"] },
    { id: 16, title: "Visual & Brand Design", content: ["Logo Design", "Brand Guidelines", "Typography"] },
    { id: 17, title: "Product & Project Management", content: ["Agile/Scrum", "Kanban", "Product Roadmap"] },
    { id: 18, title: "Finance & Management", content: ["Interim CFO", "M&A", "Financial Modeling"] },
    { id: 19, title: "Marketing & Growth", content: ["SEO", "Content Strategy", "Performance Ads"] },
    { id: 20, title: "Trending Skills & Roles", content: ["Generative AI", "LLM Fine-tuning", "Prompt Eng."] },
  ];

  return (
    <section className="py-12 md:py-24 bg-[#fafafa] font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-20">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
          >
            Discover Our Expert Skillsets
          </motion.h2>
          <div className="w-12 h-1 bg-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 20-Item Grid Container */}
        <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {skills.map((skill, index) => (
              <div 
                key={skill.id} 
                className={`relative border-slate-50 p-5 sm:p-6 md:px-10 group transition-colors hover:bg-slate-50/50 ${
                  index % 2 === 0 ? "md:border-r" : ""
                } ${
                  index < skills.length - 2 ? "border-b" : "max-md:border-b"
                } ${index === skills.length - 2 ? "md:border-b-0" : ""}`}
              >
                <button 
                  onClick={() => setActiveId(activeId === skill.id ? null : skill.id)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-sm sm:text-[15px] font-bold text-slate-800 transition-colors group-hover:text-indigo-600">
                    {skill.title}
                  </span>
                  
                  <div className="relative flex items-center justify-center shrink-0 ml-4">
                     <Plus 
                        size={20} 
                        className={`text-slate-400 transition-all duration-300 transform ${
                          activeId === skill.id ? "rotate-45 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"
                        }`} 
                      />
                      <div className={`absolute transition-all duration-300 transform ${
                        activeId === skill.id ? "rotate-0 opacity-100 scale-100" : "-rotate-45 opacity-0 scale-0"
                      }`}>
                        <div className="w-4 h-[2px] bg-pink-500 rounded-full" />
                      </div>
                  </div>
                </button>

                {/* Sub-content Dropdown */}
                <AnimatePresence>
                  {activeId === skill.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 md:pt-6 flex flex-wrap gap-2">
                        {skill.content.map((item) => (
                          <span 
                            key={item} 
                            className="px-2.5 py-1 bg-white border border-slate-200 text-[10px] sm:text-[11px] font-bold text-slate-500 rounded-full hover:border-indigo-300 hover:text-indigo-600 transition-all cursor-pointer"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Decorative Circle matching Image */}
        <div className="absolute top-[60%] left-[50%] -translate-x-1/2 w-4 h-4 rounded-full border-2 border-pink-400 opacity-40 pointer-events-none hidden sm:block" />
      </div>
    </section>
  );
}