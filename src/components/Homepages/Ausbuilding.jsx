import React from "react";
import { 
  
  Wifi,
  PiggyBank,
  RefreshCcw,
  Zap,
  Clock
} from "lucide-react";

const stats = [
  { label: "Remote jobs", value: "(9,607)", detail: "Work where's best for you.", color: "bg-[#D1FAE5]", icon: <Wifi size={18} className="text-slate-900" /> },
  { label: "Jobs offering flexitime", value: "(7,967)", detail: "Work whenever's best for you.", color: "bg-white", icon: <Clock size={18} className="text-slate-900" /> },
  { label: "Mini-jobs", value: "(3,940)", detail: "Start small or earn a little extra.", color: "bg-white", icon: <PiggyBank size={18} className="text-slate-900" /> },
  { label: "Jobs for career changers", value: "(34,923)", detail: "See where your skills match.", color: "bg-[#F3E8FF]", icon: <RefreshCcw size={18} className="text-slate-900" /> },
  { label: "Part-time jobs", value: "(39,839)", detail: "Free up time for other things.", color: "bg-[#D1FAE5]", icon: <Clock size={18} className="text-slate-900" /> },
];

export default function BentoStatsDashboard() {
  return (
    <section className="bg-[#0F172A] py-16 px-6 font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5">
        
        {/* LEFT PANEL: Set Job Preferences */}
        <div className="lg:col-span-3 bg-[#A5F3FC] rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[500px]">
          <div>
            <h2 className="text-4xl font-black text-slate-950 leading-[1.1] mb-6">
              Set your job <br /> preferences
            </h2>
            <p className="text-slate-800 text-lg font-medium mb-8 leading-relaxed">
              Pick what's important to you for better job matches. <span className="font-black">It's quick and simple!</span>
            </p>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {["+ Your career level", "+ Your workplace", "+ Salary expectations"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-white/50 border border-white/20 rounded-full text-[13px] font-bold text-slate-900 whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <button className="w-full bg-slate-950 text-white py-5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all shadow-xl">
            Save preferences
          </button>
        </div>

        {/* CENTER IMAGE PANEL */}
        <div className="lg:col-span-3 h-[500px] lg:h-auto overflow-hidden rounded-[2.5rem] relative group">
          <img 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800" 
            alt="User style" 
            className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
        </div>

        {/* RIGHT GRID PANEL: Stats Tiles */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <StatTile stat={stats[0]} />
          <StatTile stat={stats[1]} />
          <StatTile stat={stats[2]} />

          {/* Illustration Box */}
          <div className="bg-[#FAE8FF] rounded-[2.5rem] flex items-center justify-center p-8 overflow-hidden min-h-[240px]">
             <div className="relative">
                <div className="w-24 h-24 bg-blue-600 rounded-full blur-3xl opacity-20 absolute top-0 left-0" />
                <Zap size={80} strokeWidth={1} className="text-blue-600 relative z-10 rotate-12" />
             </div>
          </div>

          <StatTile stat={stats[3]} />
          <StatTile stat={stats[4]} />
        </div>
      </div>
    </section>
  );
}

function StatTile({ stat }) {
  return (
    <div className={`${stat.color} rounded-[2.5rem] p-8 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer border border-white/10`}>
      <div className="space-y-4">
        <div className="w-12 h-12 rounded-full border border-slate-950/10 flex items-center justify-center bg-white/30">
          {stat.icon}
        </div>
        <div>
          <h4 className="text-xl font-black text-slate-950 leading-tight">
            {stat.label} <span className="font-bold opacity-60">{stat.value}</span>
          </h4>
          <p className="text-slate-600 text-sm font-medium mt-2">
            {stat.detail}
          </p>
        </div>
      </div>
    </div>
  );
}