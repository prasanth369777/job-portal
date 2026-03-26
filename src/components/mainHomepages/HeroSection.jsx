import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue } from "framer-motion";
import { Search, ArrowRight, Users, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Sub-component to handle individual card transforms safely
const FanningCard = ({ img, index, name, role, scrollYProgress }) => {
  const multiplier = index - 5;
  
  // INCREASED GAP: Offset increased to 320 for desktop to ensure a wide, clear spread between cards.
  const responsiveOffset = typeof window !== 'undefined' && window.innerWidth < 768 ? 140 : 320;
  
  const maxProgress = useMotionValue(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (latest > maxProgress.get()) {
        maxProgress.set(latest);
      }
    });
  }, [scrollYProgress, maxProgress]);

  const xOffset = useTransform(maxProgress, [0, 0.5], [0, multiplier * responsiveOffset]);
  const rotation = useTransform(maxProgress, [0, 0.5], [multiplier * 4, 0]);
  const scale = useTransform(maxProgress, [0, 0.5], [1, index === 5 ? 1.12 : 1.02]);
  const zIndex = index === 5 ? 50 : 40 - Math.abs(multiplier);

  return (
    <motion.div
      style={{ 
        x: xOffset, 
        rotate: rotation, 
        zIndex: zIndex,
        scale: scale,
      }}
      // REMOVED CORNER RADIUS: changed rounded-[35px] to rounded-none
      className="absolute inset-0 rounded-none bg-white border-[5px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-hidden pointer-events-auto"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      />

      <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
        <div className="flex items-center gap-2 mb-0.5">
          <h3 className="text-white font-bold text-base leading-tight">{name}</h3>
          <div className="bg-white rounded-full p-0.5 flex items-center justify-center">
             <CheckCircle2 size={10} className="text-black" fill="currentColor" />
          </div>
        </div>
        <p className="text-white/70 text-[10px] leading-tight mb-4 max-w-[90%] font-medium">
          {role}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-white/80 text-[10px] font-bold">
            <span className="flex items-center gap-1"><Users size={12} /> 312</span>
            <span className="flex items-center gap-1"><ShieldCheck size={12} /> 48</span>
          </div>
          <button className="bg-white text-black px-4 py-1.5 rounded-none text-[10px] font-black uppercase tracking-tight hover:bg-gray-100 transition-colors shadow-md">
            Follow +
          </button>
        </div>
      </div>
    </motion.div>
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
  ];

  const communityMembers = [
    { name: "Adam Ivansky", role: "A Python Developer focused on data structures.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80" },
    { name: "Nimrod Talmon", role: "AI Developer specialized in neural networks.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80" },
    { name: "Mila Kunis", role: "Marketing Lead at global tech platforms.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80" },
    { name: "Sophie Bennett", role: "A Product Designer focused on intuitive user experiences.", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80" },
    { name: "Daniel Craig", role: "Fullstack Developer building high-performance apps.", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80" },
    { name: "Emma Watson", role: "Data Scientist turning narratives into insights.", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80" },
    { name: "Julian Chen", role: "Brand Identity expert and Motion Designer.", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80" },
    { name: "Sarah Jenkins", role: "Software Engineer focusing on scalability.", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80" },
    { name: "Liam Neeson", role: "Operations expert for global logistics.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" },
    { name: "Marcus Thorne", role: "SEO specialist for digital ecosystems.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80" },
    { name: "Aria Varma", role: "Growth hacker focusing on user retention.", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80" },
  ];

  return (
    <section className="relative font-sans overflow-hidden bg-[#d3d7e3] md:bg-white transition-colors duration-500 pb-0">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@600;700;800;900&display=swap');
        .no-scrollbar::-webkit-scrollbar { display: none; }
      ` }} />

      <div className="hidden md:block absolute top-0 left-0 w-full h-[600px] bg-[#f7f8f9] z-0" />

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 relative z-10">
        
        {/* HERO HEADER */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="pt-8 md:pt-20 text-center mb-10 md:mb-18">
          <h1 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tight mb-4 md:mb-5 leading-[1.05]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            altus <span className="text-[#003fa3] font-bold">marketplace</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-500 max-w-3xl mx-auto font-medium leading-relaxed px-2">
            Your gateway to global careers. Connect with verified service providers and world-class talent.
          </p>
        </motion.div>

        {/* SEARCH SECTION */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-24">
          <div className="flex gap-4 md:gap-8 mb-8 justify-start md:justify-center border-b border-gray-300/50 overflow-x-auto no-scrollbar px-4 md:px-0">
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

        {/* SECTION NAME: OUR GLOBAL COMMUNITY (Partner Logo Section) */}
        <div className="mb-16 md:mb-24 px-4">
          <p className="text-center text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-black text-gray-600 mb-8 md:mb-10">Our Global Community</p>
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

        {/* GALLERY SECTION: TRUSTED BY GLOBAL INSTITUTIONS */}
        {/* min-h reduced from 1000px to 750px to shorten the scroll track */}
        <div ref={galleryRef} className="pb-4 md:pb-2 relative min-h-[500px] md:min-h-[750px] flex flex-col items-center">
          
          {/* TITLE: Reduced mt-14 to mt-6 and mb-10 to mb-0 */}
          <div className="text-center mb-0 px-4">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mt-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Trusted by Global Institutions
            </h2>
          </div>

          {/* CARDS CONTAINER: Changed top-40 to top-24 to pull cards much closer to the title */}
          <div className="sticky top-24 h-[300px] md:h-[480px] flex justify-center items-center z-20 pointer-events-none w-full">
            <div className="relative w-40 h-72 md:w-64 md:h-96">
              {communityMembers.map((member, index) => (
                <FanningCard 
                  key={index} 
                  index={index}
                  name={member.name}
                  role={member.role}
                  img={member.img} 
                  scrollYProgress={scrollYProgress} 
                />
              ))}
            </div>
          </div>

          {/* BUTTONS: Changed mt-10 to a negative margin (-mt-12) to overlap/pull up to the cards */}
          <motion.div 
            style={{ opacity: btnOpacity, y: btnY }}
            className="-mt-6 md:-mt-12 relative z-30 flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Primary Button */}
            <button className="group h-[54px] px-10 bg-[#003fa3] text-white font-bold text-[15px] flex items-center justify-center gap-3 border border-[#003fa3] rounded-none shadow-[0_8px_16px_rgba(0,0,0,0.15)] hover:bg-[#002b74] transition-all active:scale-95">
              Explore the offers
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Button */}
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