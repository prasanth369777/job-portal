import React from "react";
import { 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Cloud, 
  Infinity as InfinityIcon, 
  Layers, 
  Box, 
  Wind 
} from "lucide-react";

const Logos = () => {
  const brands = [
    { name: "Stripe", icon: <Layers size={20} /> },
    { name: "Vercel", icon: <Zap size={20} /> },
    { name: "Notion", icon: <Box size={20} /> },
    { name: "Linear", icon: <Wind size={20} /> },
    { name: "Figma", icon: <InfinityIcon size={20} /> },
    { name: "GitHub", icon: <Cloud size={20} /> },
    { name: "OpenAI", icon: <Cpu size={20} /> },
    { name: "Shield", icon: <ShieldCheck size={20} /> },
  ];

  return (
    <section className="relative py-10 bg-white overflow-hidden select-none border-y border-slate-100">
      
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <h3 className="text-sm font-black text-slate-900 uppercase tracking-[0.2em] flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-pulse" />
          Active Hiring Partners
        </h3>
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
          Powering teams at <span className="text-slate-900">2,500+</span> companies
        </p>
      </div>

      {/* Infinite Scroll Wrapper */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        
        {/* CRITICAL: 
            1. 'w-max' prevents items from wrapping.
            2. 'animate-scroll-left' is the key class defined in your config.
            3. Duplicating the array twice is enough for the 50% translation logic.
        */}
        <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused] gap-8 py-4">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-400 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group cursor-pointer"
            >
              <div className="text-slate-400 group-hover:text-blue-600 transition-colors">
                {brand.icon}
              </div>
              <span className="text-sm font-bold text-slate-500 group-hover:text-slate-900 transition-colors tracking-tight">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Logos;