import React from "react";
import { 
  Code, Paintbrush, Megaphone, BarChart3, 
  CalendarCheck, Box, TrendingUp, Plus, ArrowRight 
} from "lucide-react";
import { motion } from "framer-motion";

export default function TalentGrid() {
  const talents = [
    {
      title: "Developers",
      desc: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",
      icon: <Code size={32} strokeWidth={1.5} />,
    },
    {
      title: "Designers",
      desc: "Expert UI, UX, Visual, and Interaction designers as well as a wide range of illustrators and animators.",
      icon: <Paintbrush size={32} strokeWidth={1.5} />,
    },
    {
      title: "Marketing Experts",
      desc: "Experts in digital marketing, growth marketing, content creation, brand strategy, and social media.",
      icon: <Megaphone size={32} strokeWidth={1.5} />,
    },
    {
      title: "Management Consultants",
      desc: "Finance experts, business strategists, M&A consultants, and specialists ranging from research to FP&A.",
      icon: <BarChart3 size={32} strokeWidth={1.5} />,
    },
    {
      title: "Project Managers",
      desc: "Digital and technical project managers, scrum masters, with expertise in numerous PM tools and frameworks.",
      icon: <CalendarCheck size={32} strokeWidth={1.5} />,
    },
    {
      title: "Product Managers",
      desc: "Digital product managers and scrum owners with expertise in banking, healthcare, and e-commerce.",
      icon: <Box size={32} strokeWidth={1.5} />,
    },
    {
      title: "Sales Experts",
      desc: "Lead generation experts, SDRs, sales reps, and customer success managers to drive your revenue.",
      icon: <TrendingUp size={32} strokeWidth={1.5} />,
    },
  ];

  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Header Section with Fade-in */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Leverage World-class Talent
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We are the largest, globally distributed network of top business, design, 
            and technology talent, ready to tackle your most important initiatives.
          </p>
        </motion.div>

        {/* Talent Grid with Blue Hover Interaction */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-100 shadow-2xl shadow-gray-200/50 rounded-xl overflow-hidden">
          {talents.map((item, index) => (
            <div 
              key={index} 
              className="p-10 border border-gray-100 hover:bg-indigo-600 transition-all duration-300 group cursor-pointer relative"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="text-indigo-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 origin-left">
                  {item.icon}
                </div>
                {/* Arrow Icon that slides on hover */}
                <ArrowRight className="text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-500 text-white" size={20} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium group-hover:text-indigo-100 transition-colors duration-300">
                {item.desc}
              </p>
              
              <div className="mt-8 text-indigo-600 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-500">
                Book Session
              </div>
            </div>
          ))}

          {/* Persistent CTA Block */}
          <div className="p-10 bg-gray-50 lg:col-span-2 flex items-center">
            <div className="flex items-start gap-4">
               <div className="mt-1">
                 <Plus className="text-indigo-400" size={24} />
               </div>
               <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Plus Thousands More Skills</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-medium max-w-xl">
                    Whatever skill or specialization your business requires, we have the top talent to meet your needs. 
                    niche technologies, specialised industry consulting, or expert leadership.
                  </p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}