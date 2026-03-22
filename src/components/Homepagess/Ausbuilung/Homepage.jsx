import React from "react";
import { motion } from "framer-motion";
import { Search, Briefcase,ChevronRight } from "lucide-react";

const SectorCard = ({ sector }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="flex flex-col items-center text-center group cursor-pointer p-6"
  >
    {/* Character/Icon Image */}
    <div className="w-48 h-48 mb-6 relative flex items-center justify-center">
      <img 
        src={sector.image} 
        alt={sector.title} 
        className="w-full h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500" 
      />
    </div>

    {/* Title */}
    <h3 className="text-lg font-black text-slate-800 mb-2 leading-tight">
      {sector.title}
    </h3>

    {/* Description */}
    <p className="text-[12px] text-slate-500 font-medium max-w-[200px] mb-4 leading-relaxed">
      {sector.description}
    </p>

    {/* Link */}
    <div className="flex items-center gap-1 text-[11px] font-bold text-orange-500 uppercase tracking-wider group-hover:gap-2 transition-all">
      Explore Opportunities <ChevronRight size={14} />
    </div>
  </motion.div>
);

export default function AusbildungSectors() {
  const sectors = [
    { title: "Agriculture & Environment", description: "Agriculture, farming, forestry, and environmental sectors.", image: "https://cdn-icons-png.flaticon.com/512/3233/3233827.png" }, // Replace with your mascot images
    { title: "Automotive & Transportation", description: "Automotive manufacturing, repair, and transportation sectors.", image: "https://cdn-icons-png.flaticon.com/512/3233/3233827.png" },
    { title: "Construction & Trades", description: "Construction, skilled trades, and craftsmanship careers.", image: "https://cdn-icons-png.flaticon.com/512/3233/3233827.png" },
    { title: "Education & Training", description: "Teaching, tutoring, and educational services careers.", image: "https://cdn-icons-png.flaticon.com/512/3233/3233827.png" },
    { title: "Energy & Utilities", description: "Energy production, utilities, and renewable energy careers.", image: "https://cdn-icons-png.flaticon.com/512/3233/3233827.png" },
    { title: "Engineering & Technical", description: "Build your career in Germany's world-renowned engineering industries.", image: "https://cdn-icons-png.flaticon.com/512/3233/3233827.png" },
    { title: "Finance & Banking", description: "Banking, accounting, insurance, and financial services.", image: "https://cdn-icons-png.flaticon.com/512/3233/3233827.png" },
    { title: "Healthcare & Nursing", description: "Train in one of Germany's most in-demand sectors with excellent prospects.", image: "https://cdn-icons-png.flaticon.com/512/3233/3233827.png" },
    { title: "Hospitality & Tourism", description: "Launch your career in Germany's vibrant hospitality industry.", image: "https://cdn-icons-png.flaticon.com/512/3233/3233827.png" },
  ];

  return (
    <div className="bg-[#fdfcf7] font-sans antialiased">
      
      {/* HERO SECTION */}
      <section className="relative h-[450px] w-full flex flex-col items-center justify-center text-center text-white px-6">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1467226632440-65f0b4957563?auto=format&fit=crop&w=1600&q=80" 
            className="w-full h-full object-cover brightness-[0.4]" 
            alt="German Architecture" 
          />
        </div>

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-6">
            <Briefcase size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Career Sectors</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            Ausbildung Sectors in Germany
          </h1>
          
          <p className="text-sm md:text-lg font-medium text-white/80 mb-10 max-w-2xl mx-auto">
            Browse 80,000+ jobs across 15 career sectors. Find your sector, apply with smart tools, and start earning €850-1,300/month.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all">
              <Search size={16} /> Browse Sectors
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 transition-all">
              <Briefcase size={16} /> Find Jobs
            </button>
          </div>
        </div>
      </section>

      {/* SECTORS GRID */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {sectors.map((sector, index) => (
            <SectorCard key={index} sector={sector} />
          ))}
        </div>
      </section>

      {/* FOOTER ACCENT */}
      <div className="text-center pb-20">
        <button className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-orange-500 transition-colors">
          Why Ausbildung?
        </button>
      </div>

    </div>
  );
}