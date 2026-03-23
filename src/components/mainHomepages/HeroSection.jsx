import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Sub-component to handle individual card transforms safely
const FanningCard = ({ img, index, scrollYProgress }) => {
  const multiplier = index - 5;
  const responsiveOffset = typeof window !== 'undefined' && window.innerWidth < 768 ? 140 : 340;
  
  // ONE-WAY LOGIC: Store the maximum scroll value reached
  const maxProgress = useMotionValue(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest > maxProgress.get()) {
        maxProgress.set(latest);
      }
    });
  }, [scrollYProgress, maxProgress]);

  // Map transforms to the maxProgress value instead of raw scroll
  const xOffset = useTransform(maxProgress, [0, 0.5], [0, multiplier * responsiveOffset]);
  const rotation = useTransform(maxProgress, [0, 0.5], [multiplier * 10, 0]);
  const scale = useTransform(maxProgress, [0, 0.5], [1, index === 5 ? 1.2 : 1.05]);
  const zIndex = index === 5 ? 50 : 40 - Math.abs(multiplier);

  return (
    <motion.div
      style={{ 
        x: xOffset, 
        rotate: rotation, 
        zIndex: zIndex,
        scale: scale,
        backgroundImage: `url(${img})` 
      }}
      // Applied Drop Shadow Style 1 from Design System
      className="absolute inset-0 bg-cover bg-center shadow-[0_4px_8px_rgba(0,0,0,0.15)] border-2 md:border-4 border-white origin-bottom transition-shadow duration-500"
    />
  );
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Job Seeker");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();

  const galleryRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"]
  });

  const btnOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const btnY = useTransform(scrollYProgress, [0.4, 0.6], [30, 0]);

  const navigationTabs = ["Job Seeker", "Ausbildung", "Study Abroad"];
  const relatedData = {
    "Job Seeker": ["Remote Jobs", "Tech Careers", "Part-time", "Work Permits"],
    "Ausbildung": ["Nursing", "IT Specialist", "Mechatronics", "Hospitality"],
    "Study Abroad": ["Scholarships", "Germany", "USA", "Visa Process"],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Job Seeker") navigate("/job-seeker");
    else if (tab === "Ausbildung") navigate("/aus-bildung");
    else navigate("/study-abroad");
  };

  const partners = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Anthropic", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Anthropic_logo.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Anthropic", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Anthropic_logo.svg" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Anthropic", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Anthropic_logo.svg" },
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
    "https://images.unsplash.com/photo-1522071901873-419e50a10dfd?w=600&q=80",
  ];

  return (
    <section className="relative font-sans overflow-hidden bg-[#d3d7e3] md:bg-white transition-colors duration-500">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@600;700;800;900&display=swap');
        .no-scrollbar::-webkit-scrollbar { display: none; }
      ` }} />

      <div className="hidden md:block absolute top-0 left-0 w-full h-[600px] bg-[#d3d7e3] z-0" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 relative z-10">
        
        {/* HERO HEADER */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="pt-8 md:pt-20 text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tight mb-4 md:mb-5 leading-[1.05]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            altus <span className="text-[#003fa3] font-bold">marketplace</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed px-2">
            Your gateway to global careers. Connect with verified service providers and world-class talent.
          </p>
        </motion.div>

        {/* SEARCH SECTION */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-24">
          <div className="flex gap-4 md:gap-10 mb-8 justify-start md:justify-center border-b border-gray-300/50 overflow-x-auto no-scrollbar px-4 md:px-0">
            {navigationTabs.map((tab) => (
              <button key={tab} onClick={() => handleTabClick(tab)} className="relative pb-4 text-[12px] md:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap">
                <span className={activeTab === tab ? "text-[#003fa3]" : "text-gray-500"}>{tab}</span>
                {activeTab === tab && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#003fa3]" />}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto px-4 md:px-0">
            <label className="block text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Search</label>
            <div className={`relative flex items-center bg-white border transition-all duration-200 rounded-none ${isFocused ? "border-gray-900 shadow-xl" : "border-gray-300"}`}>
              <input 
                type="text" 
                onFocus={() => setIsFocused(true)} 
                onBlur={() => setIsFocused(false)} 
                className="w-full px-4 py-4 outline-none text-gray-800 bg-transparent text-base md:text-lg font-normal" 
              />
              <div className="pr-4 text-gray-900"><Search size={20} strokeWidth={1.5} /></div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 mt-6 justify-center px-4 md:px-0">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-2 justify-center">
                {relatedData[activeTab].map((item) => (
                  <button 
                    key={item} 
                    className="text-[10px] md:text-xs px-5 py-2 bg-white border border-gray-200 text-gray-600 font-bold rounded-full hover:border-[#003fa3] hover:text-[#003fa3] transition-all shadow-sm hover:shadow-md"
                  >
                    {item}
                  </button>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* PARTNER SECTION */}
        <div className="mb-16 md:mb-24 px-4">
          <p className="text-center text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-black text-gray-600 mb-8 md:mb-10">Trusted by Global Institutions</p>
          <div className="relative max-w-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#d3d7e3] md:from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#d3d7e3] md:from-white to-transparent z-10 pointer-events-none" />
            
            <div className="flex items-center justify-start md:justify-center gap-3 md:gap-4 overflow-x-auto no-scrollbar pb-6 scroll-smooth px-4 md:px-10">
              {partners.map((p, i) => (
                <div key={i} className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-300 shadow-[0_4px_8px_rgba(0,0,0,0.15)] rounded-2xl shrink-0 transition-all hover:-translate-y-1">
                  <img src={p.logo} alt={p.name} className="h-4 md:h-5 w-auto object-contain" />
                  <span className="text-[10px] md:text-xs font-bold text-gray-700 whitespace-nowrap uppercase tracking-tighter">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GALLERY SECTION - ONE-WAY EXPANSION */}
        <div ref={galleryRef} className="pb-20 md:pb-40 relative min-h-[700px] md:min-h-[1100px] flex flex-col items-center">
          <div className="text-center mb-10 px-4">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Our Global Community
            </h2>
          </div>

          <div className="sticky top-40 h-[280px] md:h-[450px] flex justify-center items-center z-20 pointer-events-none w-full">
            <div className="relative w-40 h-56 md:w-64 md:h-80">
              {galleryImages.map((img, index) => (
                <FanningCard key={index} img={img} index={index} scrollYProgress={scrollYProgress} />
              ))}
            </div>
          </div>

          {/* DUAL BUTTON CTA - UPDATED TO DESIGN SYSTEM PRIMARY COLOR */}
          <motion.div 
            style={{ opacity: btnOpacity, y: btnY }}
            className="mt-40 md:mt-60 relative z-30 flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="group h-[54px] px-10 bg-[#003fa3] text-white font-bold text-[15px] flex items-center justify-center gap-3 border border-[#003fa3] rounded-none shadow-[0_4px_8px_rgba(0,0,0,0.15)] hover:bg-[#002b74] transition-all active:scale-95">
              Explore the offers
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group h-[54px] px-10 bg-white text-[#003fa3] font-bold text-[15px] flex items-center justify-center gap-3 border border-[#003fa3] rounded-none shadow-lg hover:bg-blue-50 transition-all active:scale-95">
              View all products
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}