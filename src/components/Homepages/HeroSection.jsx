import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search,
  ChevronLeft,
  ChevronRight,
  BadgeCheck
} from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("student");
  const expertScrollRef = useRef(null);

  const partners = [
    { name: "ILLINOIS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/University_of_Illinois_seal.svg/1200px-University_of_Illinois_seal.svg.png" },
    { name: "Duke", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Duke_University_logo.svg/1280px-Duke_University_logo.svg.png" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Michigan", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/University_of_Michigan_Logo.svg/1280px-University_of_Michigan_Logo.svg.png" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Vanderbilt", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Vanderbilt_University_seal.svg/1200px-Vanderbilt_University_seal.svg.png" },
  ];

  const experts = [
    { name: "Adrian Gonzalez", role: "AI Product Manager", img: "https://i.pravatar.cc/300?u=adrian", companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Savannah Enright", role: "Management Consultant", img: "https://i.pravatar.cc/300?u=savannah", companyLogo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Boston_Consulting_Group_logo.svg" },
    { name: "Arvind Kumar", role: "FP&A Expert", img: "https://i.pravatar.cc/300?u=arvind", companyLogo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs_logo.svg" },
    { name: "Christina May", role: "UX Architect", img: "https://i.pravatar.cc/300?u=chris", companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  ];

  const relatedData = {
    student: ["Master's Programs", "Scholarships", "Visa Process", "Part-time Jobs", "Dormitories"],
    agent: ["Partner Portal", "Commission Rates", "Student Tracking", "Marketing Kit", "Legal Compliance"],
    university: ["Candidate Sourcing", "Global Rankings", "Alumni Network", "Research Grants", "Accreditation"],
  };

  const scrollExperts = (direction) => {
    if (expertScrollRef.current) {
      const { scrollLeft, clientWidth } = expertScrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      expertScrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#F4F7FF] pt-32 pb-20 overflow-hidden font-sans">
      
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes infinitePartnerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-partners {
          display: flex;
          width: max-content;
          animation: infinitePartnerScroll 25s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}} />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* --- 1. SEARCH SECTION --- */}
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <h1 className="text-5xl lg:text-[62px] font-bold text-[#091E42] leading-[1.0] tracking-tighter">
            The world is your <br /><span className="text-[#002DF9]">new workplace.</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl font-medium italic">
            "Your gateway to international careers and digital residency."
          </p>
        </div>

        {/* Decreased height/margin container */}
        <div className="max-w-4xl mx-auto space-y-6 mb-24">
          <div className="flex justify-center gap-10 border-b border-slate-200">
            {["student", "agent", "university"].map((id) => (
              <button key={id} onClick={() => setActiveTab(id)} className={`pb-3 text-[11px] font-black uppercase tracking-[0.2em] relative transition-colors ${activeTab === id ? "text-[#002DF9]" : "text-slate-400 hover:text-slate-600"}`}>
                {id}
                {activeTab === id && <motion.div layoutId="tabUnderline" className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#002DF9]" />}
              </button>
            ))}
          </div>
          
          <div className="relative">
            {/* Shadow Removed */}
            <input 
              type="text" 
              placeholder={`Search for ${activeTab} specialized services...`} 
              className="w-full py-5 px-8 border-2 border-slate-900 text-lg font-bold outline-none focus:border-[#002DF9] rounded-none bg-white transition-all" 
            />
            <div className="absolute right-8 top-1/2 -translate-y-1/2">
              <Search className="w-6 h-6 text-slate-900 stroke-[3]" />
            </div>
          </div>

          {/* DYNAMIC SUGGESTED TAGS */}
          <div className="flex flex-wrap items-center gap-4 justify-center pt-1">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Suggested:</span>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="flex flex-wrap gap-2"
              >
                {relatedData[activeTab].map((tag, idx) => (
                  <button 
                    key={idx} 
                    className="px-4 py-1.5 border border-slate-200 text-[11px] font-bold text-slate-600 hover:border-[#002DF9] hover:text-[#002DF9] transition-all rounded-none bg-white uppercase tracking-wider"
                  >
                    {tag}
                  </button>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- 2. PARTNER LOGOS (ENDLESS SCROLL) --- */}
        <div className="mb-32 border-t border-slate-200 pt-16 overflow-hidden relative">
          <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10">
            Trusted by 350+ Global Institutions
          </p>
          
          <div className="flex overflow-hidden">
            <div className="animate-partners gap-20 items-center flex">
              {[...partners, ...partners].map((p, i) => (
                <img 
                  key={i} 
                  src={p.logo} 
                  alt={p.name} 
                  className="h-8 md:h-10 w-auto opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 flex-shrink-0" 
                />
              ))}
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F4F7FF] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F4F7FF] to-transparent z-10 pointer-events-none" />
        </div>

        {/* --- 3. EXPERT CAROUSEL --- */}
        <div className="relative mb-32">
          <div className="flex justify-between items-end mb-10 px-2">
            <div className="space-y-2">
              <div className="h-1 w-12 bg-[#002DF9]" />
              <h2 className="text-3xl font-bold text-[#091E42] tracking-tight">Verified Global Experts</h2>
            </div>
            <div className="flex gap-2">
              <button onClick={() => scrollExperts("left")} className="p-4 bg-white border border-slate-200 text-[#002DF9] hover:bg-[#002DF9] hover:text-white transition-all shadow-sm active:scale-90">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={() => scrollExperts("right")} className="p-4 bg-white border border-slate-200 text-[#002DF9] hover:bg-[#002DF9] hover:text-white transition-all shadow-sm active:scale-90">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div ref={expertScrollRef} className="flex overflow-x-auto no-scrollbar gap-6 scroll-smooth snap-x snap-mandatory pb-4">
            {experts.map((exp, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02, y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="min-w-[420px] snap-center bg-white border border-slate-100 flex shadow-lg shadow-blue-900/[0.04] cursor-pointer group overflow-hidden"
              >
                <div className="w-[160px] relative bg-slate-100 border-r border-slate-50">
                  <img 
                    src={exp.img} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    alt={exp.name} 
                  />
                  <div className="absolute bottom-0 left-0 bg-[#002DF9] p-3">
                    <BadgeCheck className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="flex-1 p-8 flex flex-col justify-between group-hover:bg-[#F9FBFF] transition-colors duration-300">
                  <div>
                    <h4 className="text-xl font-bold text-[#091E42] group-hover:text-[#002DF9] transition-colors">{exp.name}</h4>
                    <p className="text-[11px] font-black text-[#002DF9] mt-1 uppercase tracking-wider">{exp.role}</p>
                  </div>
                  <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <img src={exp.companyLogo} className="h-5 object-contain opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all" alt="logo" />
                    <span className="text-[10px] font-bold text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">VIEW PROFILE</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}