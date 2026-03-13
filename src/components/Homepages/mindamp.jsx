import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight,
  Lightbulb,
  Workflow,
} from 'lucide-react';

export default function CareerBrainstormingMap() {
  const brainstormNodes = [
    { 
      id: 1, 
      label: "Frontend Dev", 
      company: "Vercel",
      color: "bg-[#A5F3FC]", 
      borderColor: "border-cyan-200",
      accentColor: "bg-cyan-500",
      branches: ["Next.js Architect", "UI Engineer", "DevRel"]
    },
    { 
      id: 2, 
      label: "Product Design", 
      company: "Airbnb",
      color: "bg-[#F3E8FF]", 
      borderColor: "border-purple-200",
      accentColor: "bg-purple-500",
      branches: ["UX Manager", "Design Ops", "Creative Director"]
    },
    { 
      id: 3, 
      label: "Backend Eng", 
      company: "Stripe",
      color: "bg-[#D1FAE5]", 
      borderColor: "border-emerald-200",
      accentColor: "bg-emerald-500",
      branches: ["System Architect", "Security Lead", "CTO"]
    },
  ];

  return (
    <section className="relative py-16 lg:py-24 px-6 bg-[#F8FAFC] font-sans overflow-hidden min-h-screen flex flex-col items-center">
      
      {/* 1. HEADER SECTION: Fixed Layout */}
      <div className="w-full max-w-7xl mb-12 lg:mb-20 text-center relative z-10">
        <div className="flex flex-col items-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full border border-slate-200 shadow-sm">
            <Workflow size={14} className="text-blue-600" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">System v2.0</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Mind Mapping <span className="text-blue-600">Your Future.</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-xl font-medium leading-relaxed">
            Design your professional arc by moving from objectives to specific execution actions.
          </p>
        </div>
      </div>

      {/* 2. THE MAP CANVAS: Responsive Layout Engine */}
      <div className="w-full max-w-[1400px] relative flex flex-col lg:grid lg:grid-cols-12 lg:items-center gap-10 lg:gap-0 min-h-auto lg:min-h-[700px]">
        
        {/* SVG BACKGROUND LINES: Hidden on Mobile */}
        <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1400 700">
            <motion.path 
              d="M700,350 L350,150" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="8 4"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
            />
            <motion.path 
              d="M700,350 L1050,200" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="8 4"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
            />
            <motion.path 
              d="M700,350 L1000,550" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="8 4"
              initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
            />
          </svg>
        </div>

        {/* --- LEFT WING (Preferences) --- */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start order-3 lg:order-1">
          <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl w-full max-w-[340px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-[50px]" />
            <h4 className="text-xl font-black italic mb-4 relative z-10">Set your <br /> preferences</h4>
            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
              {["+ Senior", "+ Hybrid", "+ Global"].map(tag => (
                <span key={tag} className="px-3 py-1.5 bg-white/10 rounded-full text-[10px] font-bold border border-white/10">{tag}</span>
              ))}
            </div>
            <button className="w-full bg-blue-600 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-500 transition-all active:scale-95">
              Save Strategy
            </button>
          </div>
        </div>

        {/* --- CENTER CORE --- */}
        <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 relative z-20">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-40 h-40 md:w-52 md:h-52 bg-white border-[6px] border-slate-50 rounded-[3rem] shadow-2xl flex flex-col items-center justify-center text-center p-6"
          >
            <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 border border-blue-100 shadow-inner">
              <Lightbulb className="text-blue-600 w-8 h-8" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Anchor</span>
            <h3 className="text-lg md:text-xl font-black text-slate-900 leading-tight">Mapping</h3>
          </motion.div>
        </div>

        {/* --- RIGHT WING (Branches) --- */}
        <div className="lg:col-span-4 flex flex-col gap-6 items-center lg:items-end order-2 lg:order-3">
          {brainstormNodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="w-full max-w-[340px]"
            >
              <BrainstormTile node={node} />
            </motion.div>
          ))}
        </div>

      </div>

      {/* FOOTER LABEL */}
      <div className="mt-20 flex flex-col items-center gap-4 text-slate-300">
        <div className="h-px w-20 bg-slate-200" />
        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Continuous Improvement</span>
      </div>
    </section>
  );
}

function BrainstormTile({ node }) {
  return (
    <div className={`${node.color} border-2 ${node.borderColor} p-6 md:p-8 rounded-[2.5rem] md:rounded-[3rem] shadow-lg hover:shadow-2xl transition-all cursor-pointer group`}>
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-slate-900 shadow-sm border border-white">
          {node.company.charAt(0)}
        </div>
        <div className="bg-white/40 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-700">
          {node.company}
        </div>
      </div>
      
      <h4 className="text-xl md:text-2xl font-black text-slate-900 mb-6 leading-tight uppercase tracking-tighter">
        {node.label}
      </h4>

      <div className="space-y-3 relative mb-6">
        <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-slate-900/10 rounded-full" />
        {node.branches.map((branch, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`w-1.5 h-1.5 rounded-full ${node.accentColor} opacity-40`} />
            <span className="text-[12px] font-bold text-slate-700">{branch}</span>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-black/5 flex items-center justify-between">
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Initiate</span>
        <ArrowUpRight size={18} className="text-slate-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </div>
  );
}