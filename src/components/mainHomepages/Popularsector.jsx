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
    <section className="py-8 bg-[#fafafa] font-sans">
      <div className="max-w-[1440px] mx-auto px-10">
        
        {/* Section Header - Reduced margin bottom */}
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              Popular <span className="text-[#003fa3]">Sectors</span>
            </h2>
            <p className="text-slate-500 text-xs mt-1 font-medium italic">
              High-growth industries with global opportunities.
            </p>
          </div>
          <button className="text-[10px] font-black text-[#003fa3] hover:text-black flex items-center gap-2 uppercase tracking-[0.2em] border-b border-blue-100 pb-0.5 transition-all">
            View all <ArrowRight size={12} />
          </button>
        </div>

        {/* Updated list padding */}
        <div className="flex flex-nowrap gap-4 overflow-x-auto no-scrollbar pb-2">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="group relative bg-white border border-slate-200 p-5 rounded-lg cursor-pointer overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl flex-1 min-w-[280px] max-w-[320px] shrink-0"
            >
              {/* Animation Overlay */}
              <div className="absolute inset-0 bg-[#003fa3] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />

              <div className="relative z-10 flex items-center gap-4">
                {/* Icon Container - Now side-by-side to save height */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${sector.color} group-hover:bg-white/20 group-hover:text-white`}>
                  {sector.icon}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col">
                  <h4 className="text-[15px] font-bold text-slate-900 leading-tight transition-colors duration-300 group-hover:text-white">
                    {sector.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-black transition-colors duration-300 group-hover:text-blue-100 uppercase tracking-widest mt-0.5">
                    {sector.count}
                  </p>
                </div>

                {/* Arrow - Minimalist side placement */}
                <div className="ml-auto opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowRight size={14} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}