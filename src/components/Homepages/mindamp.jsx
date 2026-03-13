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
      color: "bg-[#A5F3FC]", // Cyan
      borderColor: "border-cyan-200",
      textColor: "text-cyan-900",
      branches: ["Next.js Architect", "UI Engineer", "DevRel"]
    },
    { 
      id: 2, 
      label: "Product Design", 
      company: "Airbnb",
      color: "bg-[#F3E8FF]", // Lavender
      borderColor: "border-purple-200",
      textColor: "text-purple-900",
      branches: ["UX Manager", "Design Ops", "Creative Director"]
    },
    { 
      id: 3, 
      label: "Backend Eng", 
      company: "Stripe",
      color: "bg-[#D1FAE5]", // Mint
      borderColor: "border-emerald-200",
      textColor: "text-emerald-900",
      branches: ["System Architect", "Security Lead", "CTO"]
    },
  ];

  return (
    <section className="py-24 px-6 bg-white font-sans overflow-hidden min-h-screen">
      {/* 1. BRAINSTORMING HEADER */}
      <div className="max-w-[1400px] mx-auto mb-20">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 rounded-full border border-slate-200">
            <Workflow size={14} className="text-blue-600" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Career Mapping v1.0</span>
          </div>
          <h2 className="text-6xl lg:text-[60px] font-black text-slate-900 tracking-[-0.05em] leading-[0.9]">
            Mind Mapping <br /> <span className="text-blue-600 italic">Your Future.</span>
          </h2>
          <p className="text-slate-400 text-xl font-medium max-w-2xl pt-4">
            A structured approach to brainstorming your trajectory by moving from <span className="text-slate-900 font-bold">Objectives</span> to <span className="text-slate-900 font-bold">Action.</span>
          </p>
        </div>
      </div>

      {/* 2. THE INTERACTIVE MIND MAP */}
      <div className="relative max-w-[1200px] mx-auto min-h-[800px] flex items-center justify-center">
        
        {/* SVG CONNECTOR LINES (Background Layer) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
           {/* Center to Top Node */}
           <motion.path d="M600,400 C600,200 400,100 200,150" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="8 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
           {/* Center to Right Node */}
           <motion.path d="M600,400 C800,400 900,300 1000,350" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="8 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
           {/* Center to Bottom Node */}
           <motion.path d="M600,400 C600,600 800,750 950,700" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="8 8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
        </svg>

        {/* CENTRAL NODE (Mind Mapping Core) */}
        <div className="relative z-10">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-48 h-48 bg-white border-4 border-blue-600 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(37,99,235,0.3)] flex flex-col items-center justify-center text-center p-6"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4 border border-blue-100">
              <Lightbulb className="text-blue-600 w-8 h-8" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest text-slate-400">Target</span>
            <h3 className="text-xl font-black text-slate-900 leading-tight">Mind Mapping</h3>
          </motion.div>
        </div>

        {/* BRAINSTORM NODES (Positioned Relative to Center) */}
        
        {/* Node 1: Top Left */}
        <div className="absolute top-10 left-0">
          <BrainstormTile node={brainstormNodes[0]} />
        </div>

        {/* Node 2: Top Right */}
        <div className="absolute top-40 right-0">
          <BrainstormTile node={brainstormNodes[1]} />
        </div>

        {/* Node 3: Bottom Right */}
        <div className="absolute bottom-10 right-20">
          <BrainstormTile node={brainstormNodes[2]} />
        </div>

        {/* SEARCH ACTION NODE */}
        <div className="absolute bottom-20 left-20">
           <motion.div className="bg-slate-950 text-white p-10 rounded-[2.5rem] shadow-2xl flex flex-col gap-4">
              <h4 className="text-xl font-black italic">Set your <br /> preferences</h4>
              <div className="flex flex-col gap-2">
                 {["+ Career Level", "+ Tech Stack"].map(item => (
                   <span key={item} className="text-[10px] font-bold py-2 px-4 bg-white/10 rounded-full border border-white/10">{item}</span>
                 ))}
              </div>
              <button className="bg-blue-600 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest mt-2">Save Plan</button>
           </motion.div>
        </div>
      </div>
    </section>
  );
}

function BrainstormTile({ node }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className={`${node.color} border-2 ${node.borderColor} p-8 rounded-[3.5rem] shadow-xl w-[320px] group cursor-pointer hover:shadow-2xl transition-all`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 bg-white/80 rounded-2xl flex items-center justify-center font-black text-slate-900 shadow-sm border border-white">
          {node.company.charAt(0)}
        </div>
        <div className="bg-white/40 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest">
          {node.company}
        </div>
      </div>
      
      <h4 className="text-2xl font-black text-slate-900 mb-6 leading-tight uppercase tracking-tighter">
        {node.label}
      </h4>

      {/* Sub-branches with lines */}
      <div className="space-y-3 relative">
        <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-slate-900/10 rounded-full" />
        {node.branches.map((branch, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-900/30 group-hover:bg-blue-600 transition-colors" />
            <span className="text-[12px] font-bold text-slate-700">{branch}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Initiate Analysis</span>
        <ArrowUpRight size={16} className="text-slate-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </motion.div>
  );
}