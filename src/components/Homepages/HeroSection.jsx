import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Flag from "react-world-flags";
import countriesData from "world-countries";
import Heroimg from "../../assets/Emblem Style Logo with Furniture Elements (1).webp";

import {
  MagnifyingGlassIcon,
  MapPinIcon,
  CheckBadgeIcon,
  PlayIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";

export default function Hero() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState("US");
  const [activeTab, setActiveTab] = useState("talent");
  
  const scrollRef = useRef(null);

  const allCountries = countriesData
    .map((c) => ({
      code: c.cca2,
      name: c.name.common
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const clients = [
    { name: "Erita Skendaj", role: "Project Manager", img: "https://i.pravatar.cc/150?u=1" },
    { name: "Danielle Thompson", role: "Product Designer", img: "https://i.pravatar.cc/150?u=2" },
    { name: "Jonah Elbaz", role: "React Developer", img: "https://i.pravatar.cc/150?u=3" },
    { name: "Sarah Jenkins", role: "UI Architect", img: "https://i.pravatar.cc/150?u=4" },
    { name: "Marcus Thorne", role: "Motion Designer", img: "https://i.pravatar.cc/150?u=5" }
  ];

  const partnerLogos = [
    { name: "Bridgestone", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bridgestone_Logo.svg/1200px-Bridgestone_Logo.svg.png" },
    { name: "Cavaliers", url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Cleveland_Cavaliers_logo.svg/1200px-Cleveland_Cavaliers_logo.svg.png" },
    { name: "Zoetis", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Zoetis_logo.svg/1280px-Zoetis_logo.svg.png" },
    { name: "USC", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/USC_Trojans_logo.svg/1200px-USC_Trojans_logo.svg.png" }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - 350 : scrollLeft + 350;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 pt-24 overflow-hidden font-sans">
      
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">

        {/* TOP TOGGLE */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-slate-100 rounded-full p-1 border border-slate-200">
            <button
              onClick={() => setActiveTab("talent")}
              className={`px-8 py-3 text-sm font-bold rounded-full transition-all duration-300 ${
                activeTab === "talent" ? "bg-white shadow-sm text-blue-600" : "text-slate-500"
              }`}
            >
              Jobs
            </button>
            <button
              onClick={() => setActiveTab("consulting")}
              className={`px-8 py-3 text-sm font-bold rounded-full transition-all duration-300 ${
                activeTab === "consulting" ? "bg-white shadow-sm text-blue-600" : "text-slate-500"
              }`}
            >
              Study Abroad
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-12 gap-12 items-center"
          >

            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-2 text-blue-600 text-[11px] font-bold uppercase tracking-widest">
                <CheckBadgeIcon className="w-5 h-5" />
                {activeTab === "talent" ? "Verified Career Network" : "Premium Education Partners"}
              </div>

              <h1 className="text-5xl lg:text-[64px] font-bold text-slate-900 leading-[1.1] tracking-tight">
                {activeTab === "talent" ? (
                  <>Find your dream <br /> <span className="text-blue-600 italic">Career opportunity</span></>
                ) : (
                  <>Scale your future <br /> <span className="text-blue-600 italic">Across global borders</span></>
                )}
              </h1>

              <p className="text-lg text-slate-500 max-w-xl font-medium leading-relaxed">
                {activeTab === "talent" 
                  ? "Browse thousands of high-paying roles from top global companies. Join the marketplace designed for top talent."
                  : "Bridge the gap between education and global opportunity with structured consulting and outcome-oriented services."}
              </p>

              {activeTab === "talent" ? (
                <div className="bg-white border border-slate-200 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-3">
                  <div className="grid lg:grid-cols-12 gap-3 items-center">
                    <div className="lg:col-span-4 flex items-center gap-3 px-4 border-r border-slate-100">
                      <MagnifyingGlassIcon className="w-5 h-5 text-blue-500" />
                      <input
                        type="text"
                        placeholder="Job title or skill"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full outline-none text-sm font-semibold text-slate-700"
                      />
                    </div>

                    <div className="lg:col-span-3 flex items-center gap-3 px-4 border-r border-slate-100">
                      <Flag code={country} className="w-6 h-4 rounded-sm shadow-sm" />
                      <select
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="outline-none text-sm font-semibold text-slate-700 bg-transparent w-full"
                      >
                        {allCountries.map((c) => (
                          <option key={c.code} value={c.code}>{c.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="lg:col-span-3 flex items-center gap-3 px-4">
                      <MapPinIcon className="w-5 h-5 text-blue-500" />
                      <input
                        type="text"
                        placeholder="Remote"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="outline-none text-sm font-semibold text-slate-700 w-full"
                      />
                    </div>

                    <button className="lg:col-span-2 bg-blue-600 text-white rounded-2xl py-3 font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                      Search
                    </button>
                  </div>
                </div>
              ) : (
                <motion.button 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-[#00d084] text-white px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-[#00b975] transition-all shadow-xl shadow-emerald-100 group"
                >
                  Explore Global Universities <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              )}

              {/* SOCIAL PROOF */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-4 border-white shadow-md" alt="" />
                  ))}
                </div>
                <p className="text-sm text-slate-500 font-semibold">
                  <span className="text-slate-900 font-bold">12,000+</span> success stories this year
                </p>
              </div>
            </div>

            {/* RIGHT SIDE FEATURE */}
            <div className="lg:col-span-5 flex items-center justify-center">
              {activeTab === "talent" ? (
                <motion.img
                  src={Heroimg}
                  alt="Hero"
                  className="w-full max-w-[420px] object-contain drop-shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                />
              ) : (
                <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="space-y-4 w-full">
                  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group border-4 border-white">
                    <img src="https://images.unsplash.com/photo-1523050853063-bd8012fec040?q=80&w=800" className="w-full h-[320px] object-cover group-hover:scale-105 transition-transform duration-700" alt="Study Abroad" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                        <PlayIcon className="w-10 h-10 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
                    {partnerLogos.map((p, idx) => (
                      <div key={idx} className="flex items-center justify-center p-6 border-r border-slate-50 last:border-r-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                        <img src={p.url} alt={p.name} className="max-h-[22px] max-w-full" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* REVIEWS SECTION WITH NAV */}
        <div className="mt-28 mb-10 relative">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 px-2 gap-4">
            <div className="text-center sm:text-left">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.5em]">Global Student Feedback</span>
              <div className="h-1 w-12 bg-blue-600 rounded-full mt-3 mx-auto sm:mx-0"></div>
            </div>
            
            {/* Nav Controls */}
            <div className="flex gap-2">
              <button onClick={() => scroll("left")} className="p-3 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-sm text-slate-600">
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button onClick={() => scroll("right")} className="p-3 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-sm text-slate-600">
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div ref={scrollRef} className="flex overflow-x-auto no-scrollbar scroll-smooth">
            <div className="animate-scroll gap-8 flex">
              {[...clients, ...clients, ...clients].map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 bg-white border border-slate-100 p-6 rounded-[2rem] min-w-[320px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-blue-200 transition-all duration-500 cursor-default group"
                >
                  <div className="relative">
                    <img src={c.img} className="w-14 h-14 rounded-2xl object-cover grayscale-[30%] group-hover:grayscale-0 transition-all" alt="" />
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white p-1 rounded-full border-2 border-white shadow-sm">
                      <CheckBadgeIcon className="w-3 h-3" />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 tracking-tight">{c.name}</p>
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest mt-1">{c.role}</p>
                    <div className="flex gap-1 mt-2">
                       {[1,2,3,4,5].map(s => <span key={s} className="text-amber-400 text-[10px]">★</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}