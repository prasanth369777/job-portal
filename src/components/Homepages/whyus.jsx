import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  Target, 
  Users2, 
} from 'lucide-react';

export default function WhyUs() {
  const [activeReason, setActiveReason] = useState(0);

  const reasons = [
    {
      title: "Vetted Top 3% Talent",
      desc: "Our rigorous screening process filters thousands of applicants to find the elite few. We test for technical brilliance, communication, and project management skills.",
      icon: <ShieldCheck className="w-6 h-6" />,
      metric: "98%",
      metricLabel: "Trial-to-Hire Success"
    },
    {
      title: "Rapid Deployment",
      desc: "Forget months of recruiting. We match you with the right experts in under 48 hours, allowing you to hit milestones faster without the overhead.",
      icon: <Zap className="w-6 h-6" />,
      metric: "48h",
      metricLabel: "Average Match Time"
    },
    {
      title: "Global Scalability",
      desc: "Access a distributed network across 150+ countries. Scale your team up or down instantly based on project demands with no long-term strings.",
      icon: <Target className="w-6 h-6" />,
      metric: "150+",
      metricLabel: "Countries Covered"
    },
    {
      title: "Seamless Integration",
      desc: "Our experts aren't just freelancers; they are partners. They integrate into your tools, culture, and workflows from day one.",
      icon: <Users2 className="w-6 h-6" />,
      metric: "10k+",
      metricLabel: "Successful Placements"
    }
  ];

  return (
    <section className="bg-[#F8FAFC] py-24 px-6 lg:px-12 font-sans overflow-hidden">
      
      {/* NOISE FILTER SVG - Hidden */}
      <svg className="hidden">
        <filter id="glass-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.05" /> 
          </feComponentTransfer>
          <feComposite operator="in" in2="SourceGraphic" />
        </filter>
      </svg>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              Why Companies <br /> 
              <span className="text-blue-600 italic">Choose Altus</span>
            </h2>
            <p className="text-lg text-slate-500 font-medium">
              Elite talent, matched by experts, delivered at scale.
            </p>
          </div>

          <div className="space-y-3">
            {reasons.map((reason, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveReason(idx)}
                className={`p-6 rounded-[2rem] border transition-all duration-500 cursor-pointer ${
                  activeReason === idx 
                  ? "bg-white border-blue-200 shadow-xl shadow-blue-100/20" 
                  : "bg-transparent border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className={`p-3.5 rounded-2xl transition-all duration-500 ${
                    activeReason === idx ? "bg-blue-600 text-white rotate-6" : "bg-white text-slate-400 border border-slate-200"
                  }`}>
                    {reason.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900">
                      {reason.title}
                    </h4>
                    <AnimatePresence>
                      {activeReason === idx && (
                        <motion.p 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-slate-500 text-[15px] font-medium mt-2 leading-relaxed overflow-hidden"
                        >
                          {reason.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT: GLASSY NOISE DESIGN */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
          
          {/* Background Decorative Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400 blur-[100px] rounded-full opacity-30 animate-pulse" />

          <motion.div 
            key={activeReason}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full max-w-[480px] aspect-[4/5] rounded-[3rem] border border-white/40 shadow-2xl overflow-hidden flex flex-col justify-between p-12"
          >
            {/* 1. Base Glass Blur */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-3xl" />
            
            {/* 2. Noise Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-40" style={{ filter: 'url(#glass-noise)' }} />
            
            {/* 3. Gradient Shine */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-blue-500/5" />

            {/* Content Container */}
            <div className="relative z-10">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.4em]">Performance Data</span>
              <h3 className="text-slate-900 text-3xl font-bold mt-4 leading-tight">
                Benchmark for <br />{reasons[activeReason].title}
              </h3>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <motion.span 
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="text-slate-900 text-[100px] font-black leading-none tracking-tighter drop-shadow-sm"
              >
                {reasons[activeReason].metric}
              </motion.span>
              <div className="h-1 w-12 bg-blue-600 rounded-full my-4" />
              <span className="text-slate-600 font-bold uppercase tracking-widest text-[10px]">
                {reasons[activeReason].metricLabel}
              </span>
            </div>

            <div className="relative z-10 pt-8 border-t border-slate-900/10 flex justify-between items-center">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?u=${i + activeReason}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="expert" />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                    {activeReason + 5}k+
                  </div>
               </div>
               <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg">
                  Report
               </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}