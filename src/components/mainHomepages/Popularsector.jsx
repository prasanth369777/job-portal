import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, Stethoscope, Landmark, Code, 
  Briefcase, GraduationCap, ArrowRight 
} from "lucide-react";

export default function PopularSectors() {
  const sectors = [
    { name: "IT & Tech", count: "1,200+ Jobs", icon: <Cpu size={18} />, color: "bg-blue-50 text-blue-600" },
    { name: "Healthcare", count: "850+ Openings", icon: <Stethoscope size={18} />, color: "bg-red-50 text-red-600" },
    { name: "Finance", count: "430+ Roles", icon: <Landmark size={18} />, color: "bg-emerald-50 text-emerald-600" },
    { name: "Engineering", count: "600+ Positions", icon: <Code size={18} />, color: "bg-purple-50 text-purple-600" },
    { name: "Management", count: "300+ Leads", icon: <Briefcase size={18} />, color: "bg-orange-50 text-orange-600" },
    { name: "Education", count: "150+ Tutors", icon: <GraduationCap size={18} />, color: "bg-indigo-50 text-indigo-600" },
  ];

  return (
    <section className="py-12 bg-[#fafafa] font-sans">
      {/* Container width adjusted to keep the line compact */}
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
              Popular <span className="text-indigo-600">Sectors</span>
            </h2>
            <p className="text-slate-500 text-[12px] mt-0.5 font-medium">
              High-growth industries with global opportunities.
            </p>
          </div>
          <button className="text-[10px] font-black text-indigo-600 hover:text-indigo-700 flex items-center gap-1.5 uppercase tracking-widest border-b border-indigo-100 pb-1">
            View all <ArrowRight size={12} />
          </button>
        </div>

        {/* SINGLE HORIZONTAL LINE: Using flex-nowrap and no-scrollbar */}
        <div className="flex flex-nowrap gap-3 overflow-x-auto no-scrollbar pb-4">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="group relative bg-white border border-slate-200 p-4 rounded-xl cursor-pointer overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg flex-1 min-w-[160px] max-w-[200px] shrink-0"
            >
              {/* Animation Overlay */}
              <div className="absolute inset-0 bg-[#003fa3] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />

              <div className="relative z-10">
                {/* Icon Container */}
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-colors duration-300 ${sector.color} group-hover:bg-white/20 group-hover:text-white`}>
                  {sector.icon}
                </div>
                
                {/* Text Content */}
                <h4 className="text-[14px] font-bold text-slate-900 mb-0.5 transition-colors duration-300 group-hover:text-white">
                  {sector.name}
                </h4>
                <p className="text-[10px] text-slate-500 font-bold transition-colors duration-300 group-hover:text-indigo-100 uppercase tracking-tight">
                  {sector.count}
                </p>

                {/* Explore link */}
                <div className="mt-3 flex items-center gap-1 text-[#ffffff] font-bold text-[9px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300">
                  Explore <ArrowRight size={10} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}