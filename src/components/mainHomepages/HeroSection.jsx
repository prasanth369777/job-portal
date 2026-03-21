import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

// Sub-component to handle individual card transforms safely
const FanningCard = ({ img, index, scrollYProgress }) => {
  const multiplier = index - 5;
  const xOffset = useTransform(scrollYProgress, [0, 0.5], [0, multiplier * 190]);
  const rotation = useTransform(scrollYProgress, [0, 0.5], [multiplier * 10, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, index === 5 ? 1.2 : 1.05]);
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
      className="absolute inset-0 bg-cover bg-center rounded-2xl shadow-2xl border-4 border-white origin-bottom transition-shadow duration-500 hover:shadow-indigo-500/20"
    />
  );
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Job Seeker");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate(); // 2. Initialize navigate

  const galleryRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"]
  });

  const btnOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const btnY = useTransform(scrollYProgress, [0.4, 0.6], [20, 0]);

  const navigationTabs = ["Job Seeker", "Ausbildung", "Study Abroad"];

  const relatedData = {
    "Job Seeker": ["Remote Jobs", "Tech Careers", "Part-time", "Work Permits"],
    "Ausbildung": ["Nursing", "IT Specialist", "Mechatronics", "Hospitality"],
    "Study Abroad": ["Scholarships", "Germany", "USA", "Visa Process"],
  };

  // 3. New redirection handler
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "Job Seeker") {
      navigate("/job-seeker"); // Replace with your actual route
    }
  };

  const partners = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "University of Illinois", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4e/University_of_Illinois_at_Urbana-Champaign_wordmark.svg" },
    { name: "OpenAI", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg" },
    { name: "Anthropic", logo: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Anthropic_logo.svg" },
    { name: "DeepLearning.AI", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/DeepLearning.AI_Logo.png" },
    { name: "Stanford University", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Stanford_University_logo.svg" },
    { name: "University of Pennsylvania", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/UPenn_shield_with_name.svg/512px-UPenn_shield_with_name.svg.png" },
    { name: "University of Michigan", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/University_of_Michigan_Logo.svg" },
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
    <section className="pt-12 md:pt-20 pb-40 bg-[#fafafa] font-sans overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `.no-scrollbar::-webkit-scrollbar { display: none; }` }} />

      <div className="max-w-[1440px] mx-auto px-6 md:px-10">
        
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-7xl font-bold text-gray-900 tracking-tight mb-4 md:mb-5">
            altus <span className="text-indigo-600 font-medium">marketplace</span>
          </h1>
          <p className="text-base md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed">
            Your gateway to global careers. Connect with verified service providers and world-class talent.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="flex gap-10 mb-8 justify-center border-b border-gray-200 overflow-x-auto no-scrollbar">
            {navigationTabs.map((tab) => (
              <button 
                key={tab} 
                onClick={() => handleTabClick(tab)} // Updated trigger
                className="relative pb-4 text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap"
              >
                <span className={activeTab === tab ? "text-indigo-600" : "text-gray-400"}>{tab}</span>
                {activeTab === tab && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <label className="block text-sm font-bold text-gray-900 mb-2">Search</label>
            <div className={`relative flex items-center bg-white border transition-all duration-200 ${isFocused ? "border-gray-900 ring-0" : "border-gray-300"}`}>
              <input 
                type="text" 
                onFocus={() => setIsFocused(true)} 
                onBlur={() => setIsFocused(false)} 
                placeholder="" 
                className="w-full px-4 py-3 outline-none text-gray-800 bg-transparent text-lg font-normal" 
              />
              <div className="pr-4 text-gray-900">
                <Search size={20} strokeWidth={1.5} />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-2 justify-center">
                {relatedData[activeTab].map((item) => (
                  <button key={item} className="text-xs px-5 py-2 bg-white border border-gray-200 text-gray-600 font-semibold rounded-full hover:border-indigo-300 hover:text-indigo-600 transition-all shadow-sm">
                    {item}
                  </button>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mb-24 px-4">
          <p className="text-center text-[11px] uppercase tracking-[0.3em] font-black text-gray-400 mb-10">
            Trusted by Global Institutions
          </p>
          
          <div className="relative max-w-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none hidden md:block" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none hidden md:block" />

            <div className="flex items-center justify-start md:justify-center gap-4 overflow-x-auto no-scrollbar pb-4">
              {partners.map((p, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 px-6 py-3 bg-white border border-gray-100 shadow-sm rounded-full transition-all hover:border-gray-200 hover:shadow-md cursor-pointer shrink-0"
                >
                  <img src={p.logo} alt={p.name} className="h-5 md:h-6 object-contain" />
                  <span className="text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={galleryRef} className="mt-10 py-10 relative min-h-[500px] flex flex-col items-center">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Our Global Community</h2>
          </div>

          <div className="sticky top-40 h-[350px] flex justify-center items-center z-20 pointer-events-none w-full">
            <div className="relative w-56 h-72 md:w-64 md:h-80">
              {galleryImages.map((img, index) => (
                <FanningCard 
                  key={index} 
                  img={img} 
                  index={index} 
                  scrollYProgress={scrollYProgress} 
                />
              ))}
            </div>
          </div>

          <motion.div 
            style={{ opacity: btnOpacity, y: btnY }}
            className="mt-20 relative z-30"
          >
            <button className="group px-10 py-4 bg-[#051a49] text-white rounded-full font-bold text-lg flex items-center gap-3 shadow-xl hover:bg-indigo-600 transition-all active:scale-95">
              Explore Our Network
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 