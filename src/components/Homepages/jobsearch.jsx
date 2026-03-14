import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  PenTool, 
  BarChart3, 
  Users, 
  Layout, 
  LineChart, 
  MousePointer2,
  ArrowRight
} from 'lucide-react';

export default function TalentGrid() {
  const categories = [
    {
      title: "Developers",
      desc: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",
      icon: <Code className="w-6 h-6 text-gray-300" />,
    },
    {
      title: "Designers",
      desc: "Expert UI, UX, Visual, and Interaction designers as well as a wide range of illustrators and animators.",
      icon: <PenTool className="w-6 h-6 text-gray-300" />,
    },
    {
      title: "Marketing Experts",
      desc: "Experts in digital marketing, growth marketing, content creation, and brand strategy.",
      icon: <MousePointer2 className="w-6 h-6 text-gray-300" />,
    },
    {
      title: "Management Consultants",
      desc: "Finance experts, business strategists, M&A consultants, and FP&A experts.",
      icon: <BarChart3 className="w-6 h-6 text-gray-300" />,
    },
    {
      title: "Project Managers",
      desc: "Technical project managers and scrum masters with expertise in numerous PM tools.",
      icon: <Layout className="w-6 h-6 text-gray-300" />,
    },
    {
      title: "Product Managers",
      desc: "Digital product managers and owners with expertise in industries like banking and healthcare.",
      icon: <Users className="w-6 h-6 text-gray-300" />,
    },
    {
      title: "Sales Experts",
      desc: "Lead generation experts, SDRs, sales reps, BDRs, and customer success managers.",
      icon: <LineChart className="w-6 h-6 text-gray-300" />,
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-24 px-6 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* HEADER AREA */}
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold text-slate-900 tracking-tight"
          >
            World-class Talent
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Access the largest globally distributed network of top business, design, and technology talent.
          </motion.p>
        </div>

        {/* THE INTERACTIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <motion.div 
              key={cat.title} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="p-10 bg-white border border-slate-200 rounded-[2rem] hover:border-blue-300 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div className="flex flex-col gap-6">
                {/* Icon Container with Corner Radius */}
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-blue-600 transition-all duration-300">
                  <span className="group-hover:text-white transition-colors duration-300">
                    {cat.icon}
                  </span>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {cat.title}
                  </h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed font-medium">
                    {cat.desc}
                  </p>
                </div>
              </div>

              {/* Animated Link that appears on hover */}
              <div className="mt-8 flex items-center gap-2 text-blue-600 font-bold text-sm opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                Browse {cat.title} <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}

          {/* DYNAMIC FOOTER CARD */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="p-10 border-2 border-dashed border-slate-200 rounded-[2rem] flex flex-col justify-center bg-slate-50/50 hover:bg-slate-50 transition-colors"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                <span className="text-blue-600 font-bold text-lg">+</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Plus Thousands More Skills
              </h3>
              <p className="text-slate-500 text-[15px] font-medium leading-relaxed">
                Whatever specialization your business requires, we have the top 3% of talent ready to meet your needs.
              </p>
              <button className="text-slate-900 font-bold text-sm underline decoration-blue-500/30 hover:decoration-blue-500 underline-offset-4 transition-all">
                View all categories
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}