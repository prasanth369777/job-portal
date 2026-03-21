import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, MapPin, Play,ExternalLink } from "lucide-react";

export default function RoadsetSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const experts = [
    { id: 0, name: "Viktoriia Mokrynchuk", role: "Marketing Expert", prev: "IBDO", station: "St. 01", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" },
    { id: 1, name: "Greg Prickril", role: "Product Manager", prev: "Microsoft", station: "St. 02", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80" },
    { id: 2, name: "Mohab Ayman", role: "AI Developer", prev: "OpenAI", station: "St. 03", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80" },
    { id: 3, name: "Sarah Jenkins", role: "UI Designer", prev: "Apple", station: "St. 04", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80" },
    { id: 4, name: "David Chen", role: "Cloud Architect", prev: "Google", station: "St. 05", img: "https://images.unsplash.com/photo-1500648767791-009f0129c71c?auto=format&fit=crop&w=600&q=80" },
    { id: 5, name: "Elena Rossi", role: "Data Scientist", prev: "Meta", station: "St. 06", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80" },
    { id: 6, name: "Marcus Thorne", role: "Security Lead", prev: "Palantir", station: "St. 07", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80" },
    { id: 7, name: "Lisa Wong", role: "Growth Lead", prev: "Stripe", station: "St. 08", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80" },
    { id: 8, name: "James Miller", role: "DevOps Engineer", prev: "Netflix", station: "St. 09", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80" },
    { id: 9, name: "Ana Silva", role: "HR Strategist", prev: "LinkedIn", station: "St. 10", img: "https://images.unsplash.com/photo-1488421770523-b701396b0151?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <section className="py-20 bg-[#fbfcfd] font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col items-center">
        
        {/* 1. TOP HEADER SECTION */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter"
          >
            MEET THE <span className="text-indigo-600">ELITE</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-400 text-sm font-bold uppercase tracking-[0.3em] max-w-xl mx-auto"
          >
            Vetted professionals from the world's leading tech hubs.
          </motion.p>
        </div>

        {/* 2. CARD ON TOP */}
        <div className="w-full max-w-[900px] mb-24 relative z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-[48px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-100 overflow-hidden flex flex-col md:flex-row h-full md:h-[450px]"
            >
              {/* Profile Image Area */}
              <div className="w-full md:w-2/5 relative h-[300px] md:h-full">
                <img src={experts[activeIndex].img} className="w-full h-full object-cover" alt="profile" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                <button className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-xl p-4 rounded-full border border-white/20 text-white hover:bg-white/30 transition-all">
                  <Play size={20} fill="white" />
                </button>
              </div>

              {/* Content Area */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                    {experts[activeIndex].station} Verified
                  </span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-2 tracking-tight">
                  {experts[activeIndex].name}
                </h3>
                <div className="flex items-center gap-2 text-emerald-500 font-bold text-lg mb-8">
                  <CheckCircle2 size={20} /> {experts[activeIndex].role}
                </div>

                <div className="grid grid-cols-2 gap-10 pt-8 border-t border-slate-50">
                  <div>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Previous Experience</p>
                    <p className="text-md font-bold text-slate-700">{experts[activeIndex].prev} Global</p>
                  </div>
                  <div className="flex items-end">
                    <button className="flex items-center gap-2 text-xs font-black text-indigo-600 uppercase tracking-widest group">
                      View Profile <ExternalLink size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3. ROAD NAVIGATION BELOW */}
        <div className="w-full max-w-[1100px] relative px-10">
           {/* Faint Background Label */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-[0.03] select-none pointer-events-none">
            <h1 className="text-[120px] font-black tracking-tighter">NAVIGATE</h1>
          </div>

          <div className="relative h-[150px] w-full">
            {/* The SVG Road */}
            <svg viewBox="0 0 1000 100" fill="none" className="w-full overflow-visible">
              <motion.path
                d="M0,50 Q250,10 500,50 T1000,50"
                stroke="#e2e8f0"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
              <motion.path
                d="M0,50 Q250,10 500,50 T1000,50"
                stroke="#6366f1"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: (activeIndex + 1) / 10 }}
                transition={{ duration: 0.8, ease: "circOut" }}
              />
            </svg>

            {/* Station Dots */}
            <div className="absolute inset-0 flex items-center justify-between">
              {experts.map((station, i) => (
                <div
                  key={station.id}
                  className="relative group cursor-pointer flex flex-col items-center"
                  onClick={() => setActiveIndex(i)}
                >
                  {/* The Interactive Circle */}
                  <motion.div
                    animate={{ 
                      scale: activeIndex === i ? 1.3 : 1,
                      backgroundColor: activeIndex === i ? "#6366f1" : "#ffffff",
                      borderColor: activeIndex === i ? "#6366f1" : "#e2e8f0"
                    }}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center shadow-lg transition-all z-10`}
                  >
                    {activeIndex === i ? (
                      <MapPin size={18} className="text-white" />
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-indigo-400 transition-colors" />
                    )}
                  </motion.div>

                  {/* Station Label */}
                  <span className={`absolute -bottom-10 text-[9px] font-black uppercase tracking-widest transition-all ${
                    activeIndex === i ? "text-indigo-600 opacity-100 scale-110" : "text-slate-300 opacity-60"
                  }`}>
                    {station.station}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}