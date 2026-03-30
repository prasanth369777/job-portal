import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { Search, ArrowRight, Users, CheckCircle2, MapPin, MessageSquare, ClipboardCheck, Download, Video } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Sub-component to handle symmetric expansion from center
const FanningCard = ({ img, index, name, role, scrollYProgress, totalCards, isAutoScrolling }) => {
  const centerIndex = Math.floor(totalCards / 2);
  const multiplier = index - centerIndex; 
  
  const responsiveOffset = typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : 300;
  const maxProgress = useMotionValue(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      // Logic to freeze the "fan" at its widest point before switching to auto-scroll
      if (!isAutoScrolling && latest > maxProgress.get()) {
        maxProgress.set(latest);
      }
    });
  }, [scrollYProgress, maxProgress, isAutoScrolling]);

  const xOffset = useTransform(maxProgress, [0.1, 0.6], [0, multiplier * responsiveOffset]);
  const rotation = useTransform(maxProgress, [0.1, 0.6], [multiplier * 6, 0]);
  const scale = useTransform(maxProgress, [0.1, 0.6], [0.95, index === centerIndex ? 1.1 : 1]);
  const zIndex = 50 - Math.abs(multiplier);

  return (
    <motion.div
      style={{ 
        x: isAutoScrolling ? 0 : xOffset, 
        rotate: isAutoScrolling ? 0 : rotation, 
        zIndex: zIndex, 
        scale: isAutoScrolling ? 1 : scale,
        position: isAutoScrolling ? "relative" : "absolute",
        left: isAutoScrolling ? "auto" : "0",
        top: isAutoScrolling ? "auto" : "0",
        flexShrink: 0
      }}
      className={`rounded-none bg-white border-[3px] md:border-[5px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-hidden pointer-events-auto ${isAutoScrolling ? 'w-36 h-60 md:w-64 md:h-[300px] mx-2 md:mx-4' : 'inset-0'}`}
    >
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
        <div className="flex items-center gap-2 mb-0.5">
          <h3 className="text-white font-bold text-sm md:text-base leading-tight">{name}</h3>
          <CheckCircle2 size={12} className="text-blue-400 fill-current" />
        </div>
        <p className="text-white/70 text-[9px] md:text-[10px] leading-tight mb-3 font-medium">{role}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-white/80 text-[10px] font-bold">
            <Users size={12} /> 312
          </div>
          <button className="bg-white text-black px-3 py-1 rounded-none text-[10px] font-black uppercase tracking-tight shadow-md">
            Follow +
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Job Seeker");
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const navigate = useNavigate();
  const galleryRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      // Maintain auto-scroll state even when scrolling back up 
      // as long as the user is within the active gallery section (> 0.4)
      if (latest > 0.55) {
        setIsAutoScrolling(true);
      } else if (latest < 0.2) {
        // Only disable auto-scroll and return to fanned state 
        // when the user scrolls significantly back up towards the header
        setIsAutoScrolling(false);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const btnOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const navigationTabs = ["Job Seeker", "Ausbildung", "Study Abroad"];

  const communityMembers = [
    { name: "Adam Ivansky", role: "Python Developer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
    { name: "Sarah Jenkins", role: "UI Designer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
    { name: "Sophie Bennett", role: "Product Designer", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400" }, 
    { name: "Daniel Craig", role: "Fullstack Developer", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400" },
    { name: "Emma Watson", role: "Data Scientist", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400" },
  ];

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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const paths = { "Job Seeker": "/job-seeker", "Ausbildung": "/aus-bildung", "Study Abroad": "/study-abroad" };
    navigate(paths[tab]);
  };

  return (
    <section className="relative font-sans overflow-hidden bg-white pb-0">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@600;700;800;900&display=swap');
        .no-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes card-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-card-auto-scroll {
          animation: card-scroll 35s linear infinite;
        }
      ` }} />

      <div className="max-w-[1440px] mx-auto px-4 md:px-10 relative z-10">
        
        {/* HERO HEADER */}
        <div className="pt-8 md:pt-12 text-center mb-6">
          <span className="text-[#003fa3] font-bold text-sm uppercase tracking-[0.2em] mb-3 block">Altus Career</span>
          <h1 className="text-4xl md:text-6xl font-black text-[#003fa3] tracking-tight mb-4 leading-[1.05]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Build Your Career in <br/> Germany & Europe
          </h1>
          <p className="text-lg md:text-2xl text-gray-800 max-w-2xl mx-auto font-medium leading-relaxed">
            From Training to Employment: End-to-end career pathways for Ausbildung, Jobs, and Study Abroad.
          </p>
        </div>

        {/* SEARCH BAR SECTION */}
        <div className="max-w-6xl mx-auto mb-8 md:mb-16">
          <div className="flex gap-4 md:gap-8 mb-0 justify-start border-b border-gray-200 overflow-x-auto no-scrollbar px-1">
            {navigationTabs.map((tab) => (
              <button key={tab} onClick={() => handleTabClick(tab)} className={`relative pb-4 text-[12px] md:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap ${activeTab === tab ? 'text-[#003fa3]' : 'text-gray-400'}`}>
                {tab}
                {activeTab === tab && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#003fa3]" />}
              </button>
            ))}
          </div>

          <div className="bg-[#f2f2f2] p-2 md:p-3 flex flex-col md:flex-row items-center rounded-none shadow-sm mb-8">
            <div className="flex-1 w-full flex items-center bg-white border-r md:border-gray-200 px-5 py-4 rounded-none">
              <Search className="text-[#003fa3] mr-3" size={18} />
              <input type="text" placeholder="profession or company" className="w-full outline-none text-gray-800 bg-transparent text-sm md:text-base font-normal" />
            </div>
            <div className="flex-1 w-full flex items-center bg-white px-5 py-4 rounded-none">
              <MapPin className="text-[#003fa3] mr-3" size={18} />
              <input type="text" placeholder="City or postal code" className="w-full outline-none text-gray-800 bg-transparent text-sm md:text-base font-normal" />
            </div>
            <button className="w-full md:w-auto px-10 py-4 bg-[#003fa3] text-white font-bold text-sm md:text-base hover:bg-[#002b74] transition-colors whitespace-nowrap rounded-none">
              Finding jobs
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <MessageSquare size={18} />, text: "Book Counseling" },
              { icon: <ClipboardCheck size={18} />, text: "Check Eligibility" },
              { icon: <Download size={18} />, text: "Download Guide" },
              { icon: <Video size={18} />, text: "Join Webinar" }
            ].map((item, i) => (
              <button key={i} className="flex items-center justify-center gap-3 p-4 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <span className="text-[#003fa3]">{item.icon}</span>
                <span className="text-[11px] font-bold text-gray-700 uppercase tracking-tighter">{item.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <div ref={galleryRef} className="pb-10 relative min-h-[600px] md:min-h-[900px] flex flex-col items-center w-full">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-5xl font-black text-[#003fa3] tracking-tight leading-tight mt-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Trusted by Global Institutions
          </h2>
        </div>

        {/* MAIN CARD ANIMATION AREA */}
        <div className="sticky top-20 md:top-24 h-[400px] md:h-[500px] flex items-center z-20 w-full overflow-hidden">
          <div className={`relative flex items-center ${isAutoScrolling ? 'animate-card-auto-scroll flex-nowrap w-max justify-start' : 'justify-center w-36 h-60 md:w-64 md:h-[300px] mx-auto'}`}>
            {(isAutoScrolling ? [...communityMembers, ...communityMembers, ...communityMembers, ...communityMembers] : communityMembers).map((member, index) => (
              <FanningCard 
                key={index} 
                index={index % communityMembers.length} 
                totalCards={communityMembers.length}
                name={member.name} 
                role={member.role} 
                img={member.img} 
                scrollYProgress={scrollYProgress} 
                isAutoScrolling={isAutoScrolling}
              />
            ))}
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 md:px-10 w-full">
          {/* GLOBAL PARTNERS DESIGN SECTION */}
          <motion.div className="mt-16 md:mt-24 w-full relative z-30 transition-opacity duration-500">
             <p className="text-left text-sm md:text-base font-semibold text-gray-800 mb-6">Learn from 350+ leading universities and companies</p>
             <div className="flex flex-wrap gap-4 md:gap-6 justify-start items-center px-2">
                {partners.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm whitespace-nowrap transition-colors cursor-pointer">
                    <img src={p.logo} alt={p.name} className="h-5 md:h-6 w-auto object-contain shrink-0" />
                    <span className="text-xs md:text-sm font-semibold text-gray-700">{p.name}</span>
                  </div>
                ))}
             </div>
          </motion.div>

          {/* PRIMARY CTA */}
          <motion.div style={{ opacity: btnOpacity }} className="mt-10 md:mt-14 relative z-30 flex flex-col items-center gap-4">
            <button className="group h-[54px] px-12 bg-[#003fa3] text-white font-bold text-[15px] flex items-center justify-center gap-4 rounded-none shadow-2xl hover:bg-[#002b74] transition-all uppercase tracking-widest">
              Start Your Career Journey
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}