import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, Users, CalendarCheck, FileText, 
  Search, MoreVertical, ArrowLeft, Bell, 
 Zap, LogOutIcon, ChevronRight, Phone, Mail, FileCheck, Globe, Clock
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://elfsightcdn.com/platform.js"]');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#060709] flex font-['Inter'] text-slate-300 selection:bg-blue-500/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800&display=swap');
        .font-display { font-family: 'Outfit', sans-serif; }
        .glass-card { background: rgba(17, 20, 24, 0.7); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.05); }
      `}</style>
      
      {/* 1. SIDE NAVIGATION */}
      <aside className="w-24 lg:w-72 bg-[#0D0F12] flex flex-col border-r border-white/[0.03]">
        <div className="p-10 flex items-center gap-4">
          <div className="w-10 h-10 bg-[#002DF9] rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-blue-900/40">
            <Zap size={22} fill="white" />
          </div>
          <span className="hidden lg:block text-2xl font-display font-extrabold text-white tracking-tighter uppercase italic">Altus</span>
        </div>

        <nav className="flex-1 px-6 space-y-3 mt-4">
          <button 
            onClick={() => navigate("/")}
            className="w-full flex items-center gap-3 px-4 py-4 text-slate-500 hover:text-white hover:bg-white/5 rounded-2xl transition-all mb-8 font-bold text-xs uppercase tracking-widest"
          >
            <ArrowLeft size={16} /> <span className="hidden lg:block text-[10px]">Return Home</span>
          </button>

          <NavItem icon={<LayoutDashboard size={20}/>} label="Executive Summary" active />
          <NavItem icon={<Users size={20}/>} label="Academic Cohort" />
          <NavItem icon={<CalendarCheck size={20}/>} label="Logistics" />
          <NavItem icon={<FileText size={20}/>} label="Audit Reports" />
        </nav>

        <div className="p-6 space-y-4">
           <div className="bg-gradient-to-br from-[#1A1D23] to-[#0D0F12] p-6 rounded-[2rem] border border-white/5 hidden lg:block">
              <p className="text-[9px] font-black text-blue-500 uppercase tracking-[0.2em] mb-2">Global Tier</p>
              <p className="text-xs font-bold text-white mb-4 italic">Platinum Resident</p>
              <button className="w-full py-2 bg-blue-600 text-white text-[9px] font-black uppercase rounded-xl hover:bg-blue-500 transition-all">Verify Status</button>
           </div>
           <div onClick={() => navigate("/login")} className="flex items-center gap-4 px-6 py-4 text-red-500/70 hover:text-red-400 hover:bg-red-500/5 rounded-2xl cursor-pointer transition-all">
              <LogOutIcon size={18} /> <span className="hidden lg:block font-black text-[10px] uppercase tracking-[0.2em]">Terminate Session</span>
           </div>
        </div>
      </aside>

      {/* 2. CORE WORKSPACE */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* TOP INTERFACE */}
        <header className="h-24 bg-[#0A0C10]/80 backdrop-blur-xl flex items-center justify-between px-12 shrink-0 border-b border-white/[0.03]">
            <div className="flex flex-col">
              <h1 className="text-2xl font-display font-extrabold text-white tracking-tight uppercase tracking-widest">Workspace <span className="text-blue-600">01</span></h1>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em]">Institutional ID: ALT-294-2026</p>
            </div>
            
            <div className="flex items-center gap-8">
                <div className="relative group hidden md:block">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-500 transition-colors" size={16}/>
                    <input className="bg-[#13161B] border border-white/5 rounded-2xl py-3 pl-12 pr-6 text-xs text-white w-80 outline-none focus:border-blue-600/50 transition-all" placeholder="Search institutional records..."/>
                </div>
                <div className="flex items-center gap-6">
                    <div className="p-3 bg-white/5 rounded-2xl text-slate-400 cursor-pointer hover:text-blue-400 relative border border-white/5">
                        <Bell size={20} />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full border-2 border-[#0A0C10]" />
                    </div>
                    <img src="https://i.pravatar.cc/100?u=mithun" className="w-12 h-12 rounded-2xl border-2 border-blue-600/30 shadow-2xl shadow-blue-500/10" alt="profile" />
                </div>
            </div>
        </header>

        <div className="flex-1 overflow-y-auto p-12 space-y-10 no-scrollbar">
            
            {/* TOP METRICS GRID */}
            <div className="grid grid-cols-12 gap-8">
                
                {/* FINANCIAL/SCHOLARSHIP CARD */}
                <div className="col-span-12 lg:col-span-7 glass-card rounded-[3rem] p-10 relative overflow-hidden group">
                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <div className="space-y-2">
                          <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em]">Resident Ledger</p>
                          <h2 className="text-6xl font-display font-extrabold text-white tracking-tighter italic">+$2,456.<span className="opacity-30 text-4xl">00</span></h2>
                          <p className="text-xs text-slate-400 font-medium">Verified Institutional Credit Available</p>
                        </div>
                        
                        <div className="mt-12 space-y-4">
                            <div className="flex justify-between items-end">
                              <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Scholarship Utilization</span>
                              <span className="text-lg font-display font-extrabold text-white italic">85%</span>
                            </div>
                            <div className="relative h-3 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }} 
                                  animate={{ width: "85%" }} 
                                  transition={{ duration: 1.5, ease: "circOut" }} 
                                  className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 shadow-[0_0_20px_rgba(37,99,235,0.4)]" 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />
                </div>

                {/* LOGISTICS/COURSE TRACKING */}
                <div className="col-span-12 lg:col-span-5 glass-card rounded-[3rem] p-10">
                    <div className="flex justify-between items-center mb-10">
                        <h3 className="font-display font-extrabold text-white uppercase text-xs tracking-widest">Phase Logistics</h3>
                        <span className="text-[9px] bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full font-black uppercase border border-blue-500/20">Operational</span>
                    </div>
                    <div className="space-y-8">
                        <TrackingStep icon={<FileCheck size={14}/>} title="Cohort Certification Alpha" time="Processed Mar 12, 2026" active />
                        <TrackingStep icon={<Globe size={14}/>} title="Digital Residency Node" time="Verified Mar 08, 2026" />
                        <TrackingStep icon={<Clock size={14}/>} title="Document Audit Complete" time="Archived Feb 28, 2026" />
                    </div>
                </div>

                {/* ELFSIGHT DOCUMENTATION CENTER */}
                <div className="col-span-12 lg:col-span-8 glass-card rounded-[3rem] p-10 flex flex-col">
                    <div className="flex justify-between items-center mb-10">
                        <div>
                          <h3 className="font-display font-extrabold text-white uppercase text-xs tracking-widest">Documentation Vault</h3>
                          <p className="text-[10px] text-slate-500 font-bold uppercase mt-1">Authorized PDF Assets Only</p>
                        </div>
                        <div className="flex gap-4">
                           <button className="p-3 bg-white/5 rounded-xl border border-white/5 text-slate-500 hover:text-white transition-all"><MoreVertical size={18} /></button>
                        </div>
                    </div>
                    
                    <div className="flex-1 min-h-[350px] bg-black/40 rounded-[2rem] border border-white/[0.03] overflow-hidden p-2">
                        {/* THE ELFSIGHT WIDGET */}
                        <div className="elfsight-app-c45ba370-b36a-49d1-88d3-6140e247b69a" data-elfsight-app-lazy></div>
                    </div>

                    <div className="mt-6 flex items-center justify-between opacity-60 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Secure Download Link Encrypted</span>
                        </div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-slate-600 italic">V 4.0.2</p>
                    </div>
                </div>

                {/* QUICK ACTIONS PANEL */}
                <div className="col-span-12 lg:col-span-4 space-y-8">
                    <div className="glass-card rounded-[3rem] p-8 flex flex-col justify-between group h-full relative overflow-hidden">
                        <h3 className="font-display font-extrabold text-white uppercase text-[10px] tracking-[0.2em] mb-6">Concierge Support</h3>
                        <div className="space-y-3">
                           <SupportAction icon={<Phone size={18}/>} label="Voice Dispatch" color="bg-blue-600" />
                           <SupportAction icon={<Mail size={18}/>} label="Secure Transmission" color="bg-slate-800" />
                        </div>
                        
                        <div className="mt-8 pt-8 border-t border-white/[0.03]">
                           <div className="flex items-center gap-4 mb-4">
                              <img src="https://i.pravatar.cc/100?u=advisor" className="w-10 h-10 rounded-xl grayscale" alt="advisor" />
                              <div>
                                <p className="text-[10px] font-black text-white uppercase italic">Advisor Unit 07</p>
                                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Active Now</p>
                              </div>
                           </div>
                           <button className="w-full py-4 bg-white/5 border border-white/5 rounded-2xl text-[10px] font-black uppercase tracking-widest text-blue-500 hover:bg-blue-600 hover:text-white transition-all">Request Formal Briefing</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </main>
    </div>
  );
}

/* --- REFINED SUB-COMPONENTS --- */

const NavItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center gap-5 px-6 py-4 rounded-2xl cursor-pointer transition-all duration-300 ${active ? "bg-blue-600 text-white shadow-2xl shadow-blue-900/40" : "text-slate-500 hover:text-white hover:bg-white/5"}`}>
    {icon}
    <span className="hidden lg:block text-[10px] font-black uppercase tracking-[0.2em]">{label}</span>
  </div>
);

const TrackingStep = ({ title, time, active, icon }) => (
    <div className="flex gap-6 group">
        <div className="flex flex-col items-center">
            <div className={`p-2 rounded-xl border ${active ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]' : 'bg-white/5 border-white/5 text-slate-600'}`}>
              {icon}
            </div>
            <div className="w-[1px] h-full bg-white/[0.03] mt-2" />
        </div>
        <div className="pt-1">
            <p className={`text-xs font-extrabold tracking-tight uppercase ${active ? 'text-white italic' : 'text-slate-500'}`}>{title}</p>
            <p className="text-[9px] text-slate-600 font-bold uppercase mt-1 tracking-widest">{time}</p>
        </div>
    </div>
);

const SupportAction = ({ icon, label, color }) => (
    <div className={`flex items-center justify-between p-5 ${color} rounded-2xl border border-white/5 hover:scale-[1.02] transition-all cursor-pointer group`}>
        <div className="flex items-center gap-4 text-white">
            {icon}
            <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
        </div>
        <ChevronRight size={14} className="text-white opacity-40 group-hover:opacity-100 transition-opacity" />
    </div>
);