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
  ChevronRightIcon,
  BriefcaseIcon,
  ChartBarIcon
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

  // Updated Expert Data based on your reference image
  const experts = [
    { 
      name: "Adrian Gonzalez", 
      role: "AI Product Manager", 
      img: "https://i.pravatar.cc/300?u=adrian", 
      prevCompany: "Microsoft",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      icon: <BriefcaseIcon className="w-3 h-3" />
    },
    { 
      name: "Savannah Enright", 
      role: "Management Consultant", 
      img: "https://i.pravatar.cc/300?u=savannah", 
      prevCompany: "BCG",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Boston_Consulting_Group_logo.svg",
      icon: <ChartBarIcon className="w-3 h-3" />
    },
    { 
      name: "Arvind Kumar", 
      role: "FP&A Expert", 
      img: "https://i.pravatar.cc/300?u=arvind", 
      prevCompany: "Goldman Sachs",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs_logo.svg",
      icon: <ChartBarIcon className="w-3 h-3" />
    },
    { 
      name: "Christina May", 
      role: "UX Architect", 
      img: "https://i.pravatar.cc/300?u=chris", 
      prevCompany: "Google",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      icon: <BriefcaseIcon className="w-3 h-3" />
    },
  ];

  const partnerLogos = [
    { name: "Bridgestone", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bridgestone_Logo.svg/1200px-Bridgestone_Logo.svg.png" },
    { name: "Cavaliers", url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Cleveland_Cavaliers_logo.svg/1200px-Cleveland_Cavaliers_logo.svg.png" },
    { name: "Zoetis", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Zoetis_logo.svg/1280px-Zoetis_logo.svg.png" },
    { name: "USC", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/USC_Trojans_logo.svg/1200px-USC_Trojans_logo.svg.png" }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - 400 : scrollLeft + 400;
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
                  : "Bridge the gap between education and global opportunity with structured consulting and services."}
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
                      <select value={country} onChange={(e) => setCountry(e.target.value)} className="outline-none text-sm font-semibold text-slate-700 bg-transparent w-full">
                        {allCountries.map((c) => <option key={c.code} value={c.code}>{c.name}</option>)}
                      </select>
                    </div>
                    <div className="lg:col-span-3 flex items-center gap-3 px-4">
                      <MapPinIcon className="h-5 w-5 text-blue-500" />
                      <input type="text" placeholder="Remote" value={location} onChange={(e) => setLocation(e.target.value)} className="outline-none text-sm font-semibold text-slate-700 w-full" />
                    </div>
                    <button className="lg:col-span-2 bg-blue-600 text-white rounded-2xl py-3 font-bold text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                      Search
                    </button>
                  </div>
                </div>
              ) : (
                <motion.button initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="bg-[#00d084] text-white px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-[#00b975] transition-all shadow-xl">
                  Explore Global Universities <ArrowRightIcon className="w-4 h-4" />
                </motion.button>
              )}
            </div>

            {/* RIGHT SIDE FEATURE */}
            <div className="lg:col-span-5 flex items-center justify-center">
              {activeTab === "talent" ? (
                <motion.img src={Heroimg} alt="Hero" className="w-full max-w-[420px] object-contain drop-shadow-2xl" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} />
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

        {/* --- REVIEWS / EXPERTS SECTION (Updated to match image) --- */}
        <div className="mt-32 mb-10 relative">
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 px-2">
            <div className="text-left">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.5em]">Meet our global experts</span>
              <h2 className="text-2xl font-bold text-slate-800 mt-2">World-class talent at your fingertips</h2>
            </div>
            
            {/* Nav Controls */}
            <div className="flex gap-3 mt-6 sm:mt-0">
              <button onClick={() => scroll("left")} className="p-3 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-sm text-slate-600">
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button onClick={() => scroll("right")} className="p-3 rounded-full bg-white border border-slate-200 hover:bg-slate-50 transition-all shadow-sm text-slate-600">
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div ref={scrollRef} className="flex overflow-x-auto no-scrollbar scroll-smooth pb-8">
            <div className="animate-scroll gap-6 flex">
              {[...experts, ...experts, ...experts].map((exp, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-sm min-w-[380px] flex shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden"
                >
                  {/* Portrait Area */}
                  <div className="w-[140px] relative overflow-hidden bg-slate-100 border-r border-slate-100">
                    <img src={exp.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={exp.name} />
                    {/* Brand Watermark on bottom left corner */}
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-blue-600 flex items-center justify-center">
                       <span className="text-white text-[10px] font-black italic">T</span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 leading-tight">{exp.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-slate-400">{exp.icon}</span>
                        <p className="text-[12px] font-medium text-slate-500">{exp.role}</p>
                      </div>
                    </div>

                    <div className="mt-6 border-t border-slate-50 pt-4">
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-2">Previously At</p>
                      <img src={exp.companyLogo} className="h-6 object-contain opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt={exp.prevCompany} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}