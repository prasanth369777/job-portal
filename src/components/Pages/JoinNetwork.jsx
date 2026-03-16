import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { motion, AnimatePresence } from "framer-motion";
import { 
  UserPlus, ShieldCheck, Globe, ArrowRight, 
  CheckCircle2, Loader2, Sparkles, ChevronLeft,
   Zap
} from "lucide-react";

export default function JoinNetwork() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => setStep((s) => s + 1);
  const handleBack = () => setStep((s) => s - 1);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsJoined(true);
    }, 2500);
  };

  if (isJoined) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center text-center p-12 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00F2FF] to-[#002DF9]" />
        <motion.div 
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          className="w-24 h-24 bg-blue-50 text-[#002DF9] rounded-full flex items-center justify-center mb-8 shadow-xl shadow-blue-100"
        >
          <CheckCircle2 size={48} strokeWidth={2.5} />
        </motion.div>
        <h2 className="text-4xl font-display font-extrabold text-slate-900 uppercase tracking-tighter">Registration Complete</h2>
        <p className="text-slate-500 mt-4 max-w-sm mx-auto text-sm font-medium leading-relaxed">
          Welcome to the elite network. Your digital residency node has been initialized and secured.
        </p>
        <button 
          onClick={() => navigate("/")} 
          className="mt-10 px-12 py-5 bg-[#002DF9] text-white font-black uppercase text-[10px] tracking-[0.3em] rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95"
        >
          Enter My Workspace
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-white flex flex-col font-sans selection:bg-blue-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800&family=Inter:wght@400;500;600&display=swap');
        .font-display { font-family: 'Outfit', sans-serif; }
        .concierge-gradient { background: linear-gradient(135deg, #00F2FF 0%, #002DF9 100%); }
        .input-focus:focus { border-color: #002DF9; box-shadow: 0 0 0 4px rgba(0, 45, 249, 0.1); }
      `}</style>

      {/* 1. TOP NAVIGATION */}
      <header className="w-full h-24 border-b border-slate-100 flex items-center justify-between px-10 shrink-0">
        <div className="flex items-center gap-8">
          {/* NEW: Back Button */}
          <button 
            onClick={() => navigate(-1)} 
            className="group flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest">Back</span>
          </button>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 concierge-gradient rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <Zap size={18} fill="white" />
            </div>
            <span className="text-xl font-display font-extrabold text-slate-900 uppercase tracking-tighter italic">Altus</span>
          </div>
        </div>
        
        <div className="hidden md:flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className={`h-1.5 w-16 rounded-full transition-all duration-500 ${step >= i ? 'concierge-gradient' : 'bg-slate-100'}`} />
            ))}
        </div>
        
        <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">
          Need Help?
        </button>
      </header>

      {/* 2. MAIN CONTENT */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="space-y-10"
              >
                <div className="text-center md:text-left">
                  <h3 className="text-5xl font-display font-extrabold text-slate-900 uppercase tracking-tighter leading-none">Initialize <br/> <span className="text-[#002DF9]">Bio-Identity</span></h3>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mt-4">Step 01 // Secure Registration</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Signature Name" placeholder="Johnathan Doe" />
                  <Input label="Registry Hub" placeholder="Jurisdiction Location" />
                </div>

                <button onClick={handleNext} className="w-full py-6 concierge-gradient text-white font-black uppercase text-[10px] tracking-[0.4em] rounded-full flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-blue-200">
                  Verify & Continue <ArrowRight size={16} />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.02 }}
                className="space-y-10"
              >
                <div className="text-center">
                  <h3 className="text-5xl font-display font-extrabold text-slate-900 uppercase tracking-tighter">Network <span className="text-[#002DF9]">Tier</span></h3>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mt-2">Select Access Level</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TierCard icon={<Globe size={24}/>} title="Standard" desc="Basic Academic Access" active />
                  <TierCard icon={<Sparkles size={24}/>} title="Elite" desc="Full Concierge Services" />
                </div>

                <div className="flex gap-4">
                  <button onClick={handleBack} className="p-6 bg-slate-50 text-slate-400 rounded-full hover:bg-slate-100 transition-all"><ChevronLeft size={24}/></button>
                  <button onClick={handleNext} className="flex-1 py-6 bg-slate-900 text-white font-black uppercase text-[10px] tracking-[0.4em] rounded-full hover:bg-black transition-all">Confirm Tier</button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="space-y-10"
              >
                <div className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 text-center">
                  <ShieldCheck className="mx-auto text-[#002DF9] mb-6" size={48} strokeWidth={2.5} />
                  <h3 className="text-3xl font-display font-extrabold text-slate-900 uppercase tracking-tight">Data Authorization</h3>
                  <p className="text-slate-500 text-xs mt-4 leading-relaxed font-medium uppercase tracking-[0.2em] max-w-xs mx-auto">
                    Secure 256-bit encryption is active. By clicking finalize, you accept the global charter.
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <button onClick={handleBack} className="p-6 bg-slate-50 text-slate-400 rounded-full"><ChevronLeft size={24}/></button>
                  <button 
                    onClick={handleSubmit} 
                    disabled={loading}
                    className="flex-1 py-6 concierge-gradient text-white font-black uppercase text-[10px] tracking-[0.4em] rounded-full flex items-center justify-center gap-4 disabled:opacity-50"
                  >
                    {loading ? <Loader2 size={20} className="animate-spin" /> : <><UserPlus size={20} /> Finalize Entry</>}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <footer className="h-20 flex items-center justify-center px-10 border-t border-slate-50 shrink-0">
        <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.5em]">Institutional Access Controlled • Altus Network 2026</p>
      </footer>
    </div>
  );
}

/* --- REFINED SUB-COMPONENTS --- */

const Input = ({ label, placeholder }) => (
  <div className="space-y-3">
    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">{label}</label>
    <input 
      type="text" 
      className="w-full bg-slate-50 border border-slate-100 p-5 rounded-full text-slate-900 font-bold text-xs outline-none transition-all placeholder:text-slate-300 tracking-widest input-focus" 
      placeholder={placeholder} 
    />
  </div>
);

const TierCard = ({ icon, title, desc, active }) => (
  <div className={`p-10 rounded-[3rem] border-2 group cursor-pointer transition-all duration-300 ${active ? 'bg-white border-[#002DF9] shadow-2xl shadow-blue-100' : 'bg-slate-50 border-transparent hover:border-slate-200'}`}>
    <div className={`mb-6 transition-colors ${active ? 'text-[#002DF9]' : 'text-slate-400'}`}>{icon}</div>
    <h4 className={`text-2xl font-display font-extrabold uppercase tracking-tighter ${active ? 'text-slate-900' : 'text-slate-400'}`}>{title}</h4>
    <p className={`text-[10px] font-black uppercase tracking-widest mt-2 ${active ? 'text-slate-500' : 'text-slate-400'}`}>{desc}</p>
  </div>
);