import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, Stethoscope, Landmark, Code, 
  Briefcase, GraduationCap, ArrowRight 
} from "lucide-react";

export default function PopularSectors() {
  const sectors = [
    { name: "IT & Tech", count: "1,200+ Jobs", icon: <Cpu size={20} />, color: "bg-blue-50 text-blue-600" },
    { name: "Healthcare", count: "850+ Openings", icon: <Stethoscope size={20} />, color: "bg-red-50 text-red-600" },
    { name: "Finance", count: "430+ Roles", icon: <Landmark size={20} />, color: "bg-emerald-50 text-emerald-600" },
    { name: "Engineering", count: "600+ Positions", icon: <Code size={20} />, color: "bg-purple-50 text-purple-600" },
    { name: "Management", count: "300+ Leads", icon: <Briefcase size={20} />, color: "bg-orange-50 text-orange-600" },
    { name: "Education", count: "150+ Tutors", icon: <GraduationCap size={20} />, color: "bg-indigo-50 text-indigo-600" },
  ];

  return (
    <section className="py-16 bg-[#fafafa] font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4 text-center sm:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
              Popular <span className="text-indigo-600">Sectors</span>
            </h2>
            <p className="text-slate-500 text-sm mt-1 font-medium">
              High-growth industries with global opportunities.
            </p>
          </div>
          <button className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1.5 uppercase tracking-wider">
            View all <ArrowRight size={14} />
          </button>
        </div>

        {/* Optimized Grid: 4 columns on large screens makes blocks smaller */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="group relative bg-white border border-slate-200 p-5 rounded-xl cursor-pointer overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Animation Overlay */}
              <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />

              <div className="relative z-10">
                {/* Smaller Icon Container */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${sector.color} group-hover:bg-white/20 group-hover:text-white`}>
                  {sector.icon}
                </div>
                
                {/* Scaled Down Text */}
                <h4 className="text-base font-bold text-slate-900 mb-0.5 transition-colors duration-300 group-hover:text-white">
                  {sector.name}
                </h4>
                <p className="text-[12px] text-slate-500 font-semibold transition-colors duration-300 group-hover:text-indigo-100 uppercase tracking-tight">
                  {sector.count}
                </p>

                {/* Subtle Indicator */}
                <div className="mt-4 flex items-center gap-1.5 text-indigo-600 font-bold text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-300">
                  Explore <ArrowRight size={12} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}