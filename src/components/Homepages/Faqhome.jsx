import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function ExpertSkillsets() {
  const [openIndex, setOpenIndex] = useState(null);

  const skills = [
    { category: "Web Development", items: ["React Architect", "Full-Stack Engineer", "Frontend Specialist", "Backend Developer"] },
    { category: "Mobile Development", items: ["iOS Developer", "Android Expert", "React Native", "Flutter Engineer"] },
    { category: "DevOps & Cloud Computing", items: ["AWS Architect", "Docker Specialist", "CI/CD Engineer", "Kubernetes Expert"] },
    { category: "Data Science & AI", items: ["Machine Learning", "NLP Specialist", "Data Engineer", "AI Product Manager"] },
    { category: "UX/UI Designers", items: ["Visual Designer", "Product Designer", "User Researcher", "Interaction Designer"] },
    { category: "Database & Big Data", items: ["SQL Expert", "NoSQL Architect", "Data Warehouse", "MongoDB Specialist"] },
    { category: "Programming Languages", items: ["Python Specialist", "Java Architect", "Golang Expert", "Rust Developer"] },
    { category: "CMS Platforms", items: ["WordPress Expert", "Shopify Developer", "Webflow Specialist", "Headless CMS"] },
    { category: "Quality Assurance & Testing", items: ["Automation QA", "Manual Tester", "Security Audit", "Performance Testing"] },
    { category: "Visual & Brand Design", items: ["Brand Strategist", "Illustrator", "Motion Designer", "Logo Expert"] },
    { category: "API Development", items: ["GraphQL Expert", "REST API Design", "Microservices", "API Security"] },
    { category: "Product & Project Management", items: ["Technical PM", "Scrum Master", "Agile Coach", "Product Owner"] },
    { category: "Blockchain Development", items: ["Solidity Expert", "Smart Contracts", "Web3 Engineer", "DApp Developer"], highlight: true },
    { category: "Finance & Consulting", items: ["M&A Expert", "FP&A Analyst", "Strategy Consultant", "Tax Expert"] },
    { category: "Marketing", items: ["SEO Specialist", "Growth Hacker", "Content Strategist", "Ad Expert"] },
    { category: "Trending Skills", items: ["Prompt Engineer", "Generative AI", "Cyber Resilience", "Green Tech"] },
  ];

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white py-24 px-6 lg:px-16 font-sans">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Discover Our Expert Skillsets
          </motion.h2>
          <div className="h-1 w-20 bg-blue-600 rounded-full mx-auto mt-6" />
        </div>

        {/* Accordion Grid Container */}
        <div className="bg-white border border-slate-100 shadow-2xl shadow-slate-200/50 rounded-[2.5rem] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {skills.map((skill, idx) => (
              <div 
                key={idx} 
                className={`border-b border-slate-50 last:border-b-0 md:even:border-l md:border-slate-50 transition-all duration-300 ${
                  openIndex === idx ? "bg-slate-50/50" : "bg-white hover:bg-slate-50/30"
                }`}
              >
                <button 
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-8 text-left group"
                >
                  <span className={`text-[15px] lg:text-base font-bold transition-colors duration-300 ${
                    skill.highlight || openIndex === idx ? "text-blue-600" : "text-slate-700 group-hover:text-slate-900"
                  }`}>
                    {skill.category}
                  </span>
                  
                  <div className={`p-1.5 rounded-full transition-all duration-300 ${
                    openIndex === idx ? "bg-blue-600 text-white rotate-180" : "text-slate-300 group-hover:text-slate-600"
                  }`}>
                    {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-0 grid grid-cols-2 gap-3">
                        {skill.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 group/item cursor-pointer">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-200 group-hover/item:bg-blue-600 transition-colors" />
                            <span className="text-[13px] font-medium text-slate-500 group-hover/item:text-slate-900 transition-colors">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Global Action Footer */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.4em]">Don't see your required skill?</p>
          <button className="text-blue-600 font-bold text-sm underline decoration-blue-200 underline-offset-8 hover:decoration-blue-600 transition-all">
            Browse all 1,200+ specialized skills
          </button>
        </div>

      </div>
    </section>
  );
}