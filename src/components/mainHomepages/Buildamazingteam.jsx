import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Play, ChevronRight, User } from "lucide-react";

export default function RoadsetSlider() {
  const [activeIndex, setActiveIndex] = useState(2); // Start at center

  const experts = [
    { id: 0, name: "V. Mokrynchuk", role: "Marketing", station: "80", coord: "20167, 1724" },
    { id: 1, name: "Greg Prickril", role: "Product", station: "125", coord: "20167, 1724" },
    { id: 2, name: "Mohab Ayman", role: "AI Dev", station: "144", coord: "20167, 1724" },
    { id: 3, name: "Sarah Jenkins", role: "UI Design", station: "180", coord: "20167, 1724" },
    { id: 4, name: "David Chen", role: "Cloud Arc", station: "210", coord: "20167, 1724" },
  ];

  return (
    <section className="relative min-h-screen bg-[#f3f4f6] font-sans overflow-hidden flex flex-col justify-center items-center py-20">
      
      {/* 1. CINEMATIC BACKGROUND HEADER */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-40">
         <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-[15vw] font-black text-white leading-none tracking-tighter select-none">
            ALTUS
         </h1>
      </div>

      {/* 2. MAIN ATMOSPHERIC CARD */}
      <div className="relative w-[95%] max-w-5xl aspect-video md:aspect-[21/9] z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0 }}
            className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl bg-white flex items-end p-12"
          >
            {/* Background "Tower" Illustration Feel */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-200 to-white" />
            <div className="absolute top-0 left-0 w-full h-full opacity-30 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

            {/* Vertical Stats Markers (Like your image) */}
            <div className="absolute top-12 right-10 flex flex-col items-end gap-1">
               <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest rotate-90 origin-right translate-y-12">Expert Status</span>
               <span className="text-3xl font-light text-slate-800 tracking-tighter">00{activeIndex + 1}</span>
            </div>

            <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden md:block">
               <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest -rotate-90 origin-left">Available Slots</span>
               <span className="block text-2xl font-light text-slate-800 tracking-tighter mt-12">157</span>
            </div>

            {/* Floating Content Box */}
            <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start gap-4">
               <motion.div 
                 initial={{ y: 20, opacity: 0 }} 
                 animate={{ y: 0, opacity: 1 }}
                 className="bg-white/40 backdrop-blur-xl border border-white/40 px-6 py-2 rounded-full flex items-center gap-2"
               >
                  <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Active Station</span>
               </motion.div>

               <motion.h2 
                 initial={{ y: 20, opacity: 0 }} 
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.1 }}
                 className="text-6xl font-black text-slate-900 tracking-tighter leading-none"
               >
                {experts[activeIndex].name}
               </motion.h2>

               <motion.div 
                 initial={{ y: 20, opacity: 0 }} 
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.2 }}
                 className="flex items-center gap-2 text-indigo-600 font-bold"
               >
                  {experts[activeIndex].role} <ChevronRight size={16} />
               </motion.div>
            </div>

            {/* Center Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                   <Play size={32} fill="white" className="text-white ml-2" />
                </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. THE DATA ROADSET (BOTTOM NAVIGATION) */}
      <div className="relative w-full max-w-6xl h-64 mt-[-80px] z-30 flex items-center justify-center">
        
        {/* Curved Path SVG */}
        <svg viewBox="0 0 1000 200" fill="none" className="absolute top-0 w-full overflow-visible opacity-30">
          <motion.path 
            d="M0,50 C150,50 300,180 500,180 C700,180 850,50 1000,50" 
            stroke="#6366f1" 
            strokeWidth="3" 
            strokeLinecap="round"
          />
        </svg>

        {/* Station Markers */}
        <div className="absolute inset-0 flex justify-between px-10 items-center">
          {experts.map((station, i) => {
            // Simple positioning logic for the curve
            const yPos = i === 0 || i === 4 ? "50px" : i === 1 || i === 3 ? "120px" : "180px";
            
            return (
              <div 
                key={station.id}
                onClick={() => setActiveIndex(i)}
                className="relative flex flex-col items-center cursor-pointer transition-all duration-500"
                style={{ top: yPos }}
              >
                {/* Data Point Text (Top) */}
                <div className={`mb-3 flex flex-col items-center transition-all ${activeIndex === i ? 'opacity-100' : 'opacity-40'}`}>
                  <span className="text-[8px] font-bold text-slate-400">{station.coord}</span>
                  <span className={`text-xs font-black uppercase tracking-widest ${activeIndex === i ? 'text-slate-900' : 'text-slate-500'}`}>
                    STATION {station.station}
                  </span>
                </div>

                {/* The Dot */}
                <motion.div 
                  animate={{ 
                    scale: activeIndex === i ? 2.5 : 1,
                    backgroundColor: activeIndex === i ? "#6366f1" : "#ffffff",
                    boxShadow: activeIndex === i ? "0 0 20px rgba(99, 102, 241, 0.5)" : "none"
                  }}
                  className={`w-4 h-4 rounded-full border-2 border-indigo-200 z-10 flex items-center justify-center shadow-md`}
                >
                    {activeIndex === i && <User size={4} className="text-white" />}
                </motion.div>

                {/* Name Label (Bottom) */}
                <div className={`mt-4 text-center transition-all ${activeIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                    <p className="text-[10px] font-bold text-slate-800 uppercase tracking-tighter leading-none">Refuelling</p>
                    <p className="text-xs font-black text-indigo-600">{station.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>


    </section>
  );
}