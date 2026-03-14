import React from 'react';
import { motion } from 'framer-motion';
import { Plus, ChevronRight, Award, CheckCircle2, BarChart3, Globe2 } from 'lucide-react';

export default function AltusCareerRanking() {
  // Expanded leaderboard for a "Proper" industry list
  const leaderboard = [
    { rank: 1, name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", opacity: "opacity-30" },
    { rank: 2, name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", opacity: "opacity-30" },
    { rank: 3, name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", opacity: "opacity-30" },
    { rank: 4, name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", opacity: "opacity-30" },
    { rank: 5, name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg", opacity: "opacity-20" },
    { rank: 11, name: "Altus Career", isSpecial: true }, 
    { rank: 12, name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Adobe_Systems_logo_and_wordmark.svg", opacity: "opacity-30" },
    { rank: 13, name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg", opacity: "opacity-20" },
  ];

  // Professional industry standard methodology
  const methodology = [
    { title: "Likelihood of Recommendation", icon: <CheckCircle2 size={14}/> },
    { title: "Ease of Doing Business", icon: <Globe2 size={14}/> },
    { title: "Value for Money", icon: <BarChart3 size={14}/> },
    { title: "Consistency of Deliverables", icon: <Award size={14}/> },
    { title: "Reputation for Dependability", icon: <CheckCircle2 size={14}/> }
  ];

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-[#00050a] font-sans overflow-hidden min-h-screen flex flex-col items-center">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <div className="absolute top-[-20%] right-[-10%] w-[500px] lg:w-[900px] h-[500px] lg:h-[900px] bg-blue-600/10 blur-[150px] rounded-full" />
         <div className="absolute bottom-[-20%] left-[-10%] w-[400px] lg:w-[800px] h-[400px] lg:h-[800px] bg-indigo-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* --- LEFT COLUMN (6/12) --- */}
          <div className="lg:col-span-6 space-y-10">
            
            {/* Badges */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
               <div className="bg-[#e21a22] px-3 py-1 rounded-sm text-[10px] font-bold text-white uppercase italic tracking-tighter">
                 Newsweek
               </div>
               <div className="h-4 w-[1px] bg-slate-800" />
               <span className="text-slate-500 font-bold tracking-widest text-[10px] uppercase italic">Global Report 2026</span>
            </motion.div>

            {/* Headline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-[50px] font-bold text-white tracking-tight leading-[1.05]"
            >
              Altus Career <span className="text-blue-500 font-extrabold italic">#1</span> <br />
              Most Reliable <br className="hidden md:block" />
              Professional Services.
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-base md:text-lg max-w-xl font-medium leading-relaxed"
            >
              Recognized globally for excellence in talent acquisition and career strategy, based on an independent audit of <span className="text-white font-semibold">3,500+ enterprises.</span>
            </motion.p>

            {/* Methodology List */}
            <div className="pt-10 border-t border-slate-800/60">
              <h4 className="text-[11px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-6">Evaluation Methodology</h4>
              <div className="space-y-1">
                {methodology.map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ pl: 8 }}
                    className="flex items-center justify-between py-4 border-b border-slate-900 group cursor-pointer transition-all"
                  >
                    <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors flex items-center gap-4">
                      <span className="text-blue-500/50 group-hover:text-blue-500 transition-colors">{item.icon}</span>
                      {item.title}
                    </span>
                    <Plus size={14} className="text-slate-700 group-hover:text-blue-500 group-hover:rotate-90 transition-all" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN (6/12) --- */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end w-full lg:pt-12">
             <div className="w-full max-w-[520px] space-y-3 relative">
                
             

                {leaderboard.map((item, index) => (
                  <motion.div
                    key={item.rank}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`
                      relative flex items-center gap-6 md:gap-10 p-5 rounded-xl border transition-all duration-500
                      ${item.isSpecial 
                        ? "bg-blue-600 shadow-[0_30px_80px_-15px_rgba(37,99,235,0.45)] border-blue-400 z-20 scale-[1.02] lg:scale-110 translate-x-[-10px]" 
                        : "bg-slate-900/20 border-white/5 backdrop-blur-md hover:bg-slate-900/40 hover:border-white/10"
                      }
                    `}
                  >
                    <span className={`text-[11px] font-black w-4 text-center ${item.isSpecial ? "text-white" : "text-slate-600"}`}>
                      {item.rank}
                    </span>

                    {item.isSpecial ? (
                      <div className="flex items-center gap-4">
                         <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[12px] font-black text-blue-600 shadow-md">A</div>
                         <div className="flex flex-col">
                            <span className="text-xl font-bold text-white tracking-tighter uppercase">Altus Career</span>
                            <span className="text-[9px] font-bold text-blue-100 uppercase tracking-widest opacity-80">Industry Leader</span>
                         </div>
                      </div>
                    ) : (
                      <div className="flex items-center h-5 lg:h-6">
                        <img 
                          src={item.logo} 
                          alt={item.name} 
                          className={`h-full object-contain grayscale brightness-200 contrast-125 ${item.opacity}`} 
                        />
                      </div>
                    )}

                    {item.isSpecial && (
                       <div className="absolute right-6 flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/10">
                         <span className="text-[9px] font-black uppercase text-white tracking-tighter">Winner</span>
                         <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                       </div>
                    )}
                  </motion.div>
                ))}

                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="pt-12 flex justify-center lg:justify-end"
                >
                   <button className="group flex items-center gap-4 text-[11px] font-bold text-slate-400 hover:text-white transition-all uppercase tracking-[0.3em]">
                     Full Reliability Data
                     <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-600 transition-all">
                        <ChevronRight size={16} className="group-hover:text-white" />
                     </div>
                   </button>
                </motion.div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}