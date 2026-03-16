import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Eye, EyeOff, ArrowLeft, GraduationCap, UserCircle, ShieldCheck } from "lucide-react";

export default function Login() {
  const [role, setRole] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === "student") navigate("/dashboard");
    else navigate("/dashboard"); // Adjust routes as needed
  };

  const roles = [
    { id: "student", label: "Student", icon: <GraduationCap size={16} /> },
    { id: "jobseeker", label: "Job Seeker", icon: <UserCircle size={16} /> },
    { id: "agent", label: "Agent", icon: <ShieldCheck size={16} /> },
  ];

  return (
    // Added Google Fonts Import via style tag for immediate effect
    <div className="min-h-screen bg-white flex font-['Inter'] selection:bg-blue-100">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@500;600;700;800&display=swap');
        .font-display { font-family: 'Outfit', sans-serif; }
      `}</style>

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-[42%] relative overflow-hidden bg-[#002DF9] p-16 flex-col justify-between">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80" 
            alt="Global Network" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-20">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-lg font-extrabold text-[#002DF9] shadow-xl shadow-blue-900/20">A</div>
            <span className="text-2xl font-display font-extrabold text-white uppercase tracking-tighter">Altus</span>
          </div>
          
          <h2 className="text-6xl font-display font-extrabold text-white leading-[0.95] tracking-[-0.04em]">
            Empowering <br /> 
            <span className="text-blue-300">Global Careers.</span>
          </h2>
          <p className="mt-6 text-blue-100/70 text-lg font-medium max-w-sm leading-relaxed">
            The premium gateway for students and professionals in the digital republic.
          </p>
        </div>

        <div className="relative z-10 flex items-center gap-6">
            <div className="h-[1px] w-12 bg-white/30" />
            <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.3em]">Institutional Grade Security</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-[58%] flex items-center justify-center p-8 md:p-20 bg-[#F8FAFC]">
        
        <button 
          onClick={() => navigate("/")}
          className="absolute top-10 right-10 flex items-center gap-2 text-slate-400 hover:text-[#002DF9] font-bold text-[11px] uppercase tracking-[0.15em] transition-all group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Return Home
        </button>

        <div className="w-full max-w-[440px] space-y-10">
          <header className="space-y-2">
            <h1 className="text-4xl font-display font-extrabold text-slate-900 tracking-tight">Portal Sign In</h1>
            <p className="text-slate-500 font-medium text-sm">Select your workspace to continue</p>
          </header>

          {/* ROLE TABS - Sharp Typography */}
          <div className="flex p-1.5 bg-slate-200/50 rounded-2xl">
            {roles.map((r) => (
              <button
                key={r.id}
                onClick={() => setRole(r.id)}
                className={`flex-1 flex items-center justify-center gap-2 py-3 text-[11px] font-extrabold uppercase tracking-wider rounded-xl transition-all duration-200 ${
                  role === r.id 
                  ? "bg-white text-[#002DF9] shadow-sm ring-1 ring-slate-200" 
                  : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {r.icon}
                {r.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400 ml-1">
                Authorized {role} Email
              </label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:ring-4 focus:ring-[#002DF9]/5 focus:border-[#002DF9] transition-all font-semibold text-slate-700 placeholder:text-slate-300 text-sm"
                placeholder={`e.g. name@${role}.com`}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">Security Key</label>
                <button type="button" className="text-[10px] font-extrabold uppercase tracking-wider text-[#002DF9] hover:underline">Forgot Access?</button>
              </div>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:border-[#002DF9] transition-all font-semibold text-sm"
                  placeholder="••••••••"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-[#002DF9] text-white font-display font-extrabold uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 active:scale-[0.98]"
            >
              Enter {role} Workspace
            </button>
          </form>

          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-slate-200"></div>
            <span className="flex-shrink mx-4 text-slate-300 text-[9px] font-extrabold uppercase tracking-[0.3em]">Trusted Auth</span>
            <div className="flex-grow border-t border-slate-200"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <SocialBtn icon="google" label="Google" />
            <SocialBtn icon="linkedin" label="LinkedIn" />
          </div>
          
          <p className="text-center text-xs font-semibold text-slate-400">
            Don't have an institutional account? <button className="text-[#002DF9] font-extrabold uppercase tracking-widest ml-1 hover:underline">Request Access</button>
          </p>
        </div>
      </div>
    </div>
  );
}

// Helper Social Button for cleaner code
const SocialBtn = ({ icon, label }) => (
    <button className="py-3.5 flex items-center justify-center gap-3 bg-white border border-slate-200 rounded-2xl font-bold text-[11px] uppercase tracking-wider text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-[0.98]">
        <img 
            src={`https://www.svgrepo.com/show/${icon === 'google' ? '475656/google-color' : '448234/linkedin'}.svg`} 
            className="w-4 h-4" 
            alt={label} 
        />
        {label}
    </button>
);