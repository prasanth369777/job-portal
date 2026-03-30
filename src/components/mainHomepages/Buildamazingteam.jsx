import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play} from "lucide-react";

export default function RoadsetSlider() {
  const [activeIndex, setActiveIndex] = useState(2);

  const experts = [
    { id: 0, name: "V. Mokrynchuk", role: "Marketing", station: "80", coord: "20167, 1724", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", color: "from-orange-500 to-red-600" },
    { id: 1, name: "Greg Prickril", role: "Product", station: "125", coord: "20167, 1724", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80", color: "from-blue-500 to-indigo-700" },
    { id: 2, name: "Mohab Ayman", role: "AI Dev", station: "144", coord: "20167, 1724", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80", color: "from-purple-500 to-fuchsia-700" },
    { id: 3, name: "Sarah Jenkins", role: "UI Design", station: "180", coord: "20167, 1724", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80", color: "from-pink-500 to-rose-700" },
    { id: 4, name: "David Chen", role: "Cloud Arc", station: "210", coord: "20167, 1724", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80", color: "from-emerald-500 to-teal-700" },
  ];

  return (
    <section className="relative min-h-screen bg-[#e5e7eb] font-sans overflow-hidden flex flex-col items-center justify-center p-4">
      
      {/* 1. GLOBAL ATMOSPHERE */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-300 via-transparent to-slate-400 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80" 
          className="w-full h-full object-cover opacity-40 grayscale" 
          alt="bg"
        />
      </div>

      {/* 2. THE CURVED LINE (Backside) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="w-full max-w-6xl h-80 mt-[600px] relative">
          <svg viewBox="0 0 1000 200" fill="none" className="w-full h-full overflow-visible opacity-50">
            <motion.path 
              d="M-50,40 C150,40 300,180 500,180 C700,180 850,40 1050,40" 
              stroke="#4f46e5" 
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>

      {/* 3. CENTER EDITORIAL CARD - PORTRAIT STYLE */}
      <div className="relative w-full max-w-md h-[650px] z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "circOut" }}
            className="relative w-full h-full bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] rounded-sm overflow-hidden flex flex-col"
          >
            {/* PORTRAIT AREA (Grayscale with Wave Overlay) */}
            <div className="relative h-[65%] w-full overflow-hidden bg-slate-50">
              <img 
                src={experts[activeIndex].img} 
                alt={experts[activeIndex].name} 
                className="w-full h-full object-cover grayscale brightness-105 contrast-110"
              />
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wave-cut.png')] pointer-events-none" />
              
              {/* Top Branding Block */}
              <div className="absolute top-6 right-6">
                 <div className="w-10 h-10 border border-slate-300 flex flex-col items-center justify-center text-[7px] font-black leading-[1.1] text-center text-slate-800">
                    ALTUS<br/>PATH
                 </div>
              </div>
            </div>

            {/* CONTENT AREA (Vibrant Gradient Overflow) */}
            <div className={`absolute bottom-0 w-full h-[45%] bg-gradient-to-t ${experts[activeIndex].color} p-10 flex flex-col justify-end text-white font-poppins`}>
              
              {/* Handwritten Style Overlay Title */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6 pointer-events-none select-none"
              >
                <span className="text-[60px] italic font-light tracking-tighter block leading-[0.5]">I made it</span>
                <span className="text-[75px] font-black tracking-tighter block leading-[0.8]">Mine</span>
              </motion.div>

              <div className="space-y-1">
                {/* Preservation of Original Content/Logic */}
                <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-80 font-inter">
                  DISRUPTING {experts[activeIndex].role.toUpperCase()} INDUSTRIES
                </p>
                
                <div className="flex justify-between items-end border-t border-white/20 pt-4 mt-2">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-black uppercase tracking-tight leading-none">
                      {experts[activeIndex].name}
                    </h3>
                    <p className="text-[9px] font-bold opacity-70 mt-1 uppercase tracking-widest font-inter">
                      Station Commander {experts[activeIndex].station}
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black tracking-widest uppercase mb-2">#ALTUS</span>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white hover:text-indigo-600 transition-all">
                       <Play size={16} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 4. INTERACTION NODES (Preserved Functionality) */}
      <div className="relative w-full max-w-4xl h-40 mt-[-100px] z-30 flex items-center justify-center pointer-events-none px-20">
        <div className="absolute inset-0 flex justify-between items-center">
          {experts.map((exp, i) => {
            const yPos = i === 0 || i === 4 ? "-40px" : i === 1 || i === 3 ? "20px" : "80px";
            const isActive = activeIndex === i;

            return (
              <div 
                key={exp.id}
                onClick={() => setActiveIndex(i)}
                className="relative flex flex-col items-center pointer-events-auto cursor-pointer"
                style={{ transform: `translateY(${yPos})` }}
              >
                <div className={`mb-3 flex flex-col items-center transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-20'}`}>
                  <span className="text-[8px] font-bold text-indigo-900 font-inter mb-1">{exp.coord}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest font-poppins text-indigo-700">
                    ST.{exp.station}
                  </span>
                </div>

                <motion.div 
                  animate={{ 
                    scale: isActive ? 2 : 1,
                    backgroundColor: isActive ? "#4f46e5" : "#ffffff",
                  }}
                  className="w-4 h-4 rounded-full border-2 border-white shadow-xl z-10"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. SYSTEMS NAV (Preserved Content) */}
      <div className="absolute bottom-10 left-10 z-50 flex flex-col gap-4 font-poppins">
         <div className="flex items-center gap-3">
            <div className="w-10 h-[2px] bg-[#4f46e5]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 font-inter">Live Status: Stable</span>
         </div>
      </div>

      {/* Script font for the editorial feel */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&family=Inter:wght@400;900&display=swap" rel="stylesheet" />
    </section>
  );
}