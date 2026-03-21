import React from "react";
import { motion } from "framer-motion";
import { 
  Cpu, Stethoscope, Landmark, Code, 
  Briefcase, GraduationCap, ArrowRight 
} from "lucide-react";

export default function PopularSectors() {
  const sectors = [
    { name: "IT & Tech", count: "1,200+ Jobs", icon: <Cpu size={24} />, color: "bg-blue-50 text-blue-600" },
    { name: "Healthcare", count: "850+ Openings", icon: <Stethoscope size={24} />, color: "bg-red-50 text-red-600" },
    { name: "Finance", count: "430+ Roles", icon: <Landmark size={24} />, color: "bg-emerald-50 text-emerald-600" },
    { name: "Engineering", count: "600+ Positions", icon: <Code size={24} />, color: "bg-purple-50 text-purple-600" },
    { name: "Management", count: "300+ Leads", icon: <Briefcase size={24} />, color: "bg-orange-50 text-orange-600" },
    { name: "Education", count: "150+ Tutors", icon: <GraduationCap size={24} />, color: "bg-indigo-50 text-indigo-600" },
  ];

  return (
    <section className="py-20 bg-white font-sans">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Popular <span className="text-indigo-600">Sectors</span>
            </h2>
            <p className="text-gray-500 mt-2 font-medium">
              Explore thousands of opportunities across global high-growth industries.
            </p>
          </div>
          <button className="text-sm font-bold text-indigo-600 hover:underline flex items-center gap-2">
            View all categories <ArrowRight size={16} />
          </button>
        </div>

        {/* The Grid: 3 columns on desktop, all visible */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="group relative bg-white border border-gray-100 p-8 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50"
            >
              {/* Blue Hover Background Overlay (Slides up) */}
              <div className="absolute inset-0 bg-indigo-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />

              <div className="relative z-10">
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${sector.color} group-hover:bg-white/20 group-hover:text-white`}>
                  {sector.icon}
                </div>
                
                {/* Text Content */}
                <h4 className="text-xl font-bold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-white">
                  {sector.name}
                </h4>
                <p className="text-sm text-gray-500 font-medium transition-colors duration-300 group-hover:text-indigo-100">
                  {sector.count}
                </p>

                {/* Bottom Interaction Label */}
                <div className="mt-8 flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 group-hover:text-white transition-all duration-500">
                  Explore Roles <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}