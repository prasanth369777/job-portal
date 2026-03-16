import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Search, MapPin, DollarSign, Clock, 
  ArrowLeft, Zap, Building2, Heart, Briefcase 
} from "lucide-react";

export default function ExploreJobs() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "Automotive", count: 12 },
    { name: "Tech & Software", count: 45 },
    { name: "Construction", count: 8 },
    { name: "Health & Care", count: 14 },
    { name: "Digital Law", count: 5 },
    { name: "Industry", count: 22 },
  ];

  const jobs = [
    { id: 1, title: "Senior Project Manager", company: "Quantum Dynamics", location: "Munich, Germany", salary: "€85,000 - €110,000 / Yr", type: "Full-time", time: "2 hours ago", color: "bg-blue-50/50", iconColor: "text-blue-500", tags: ["Remote Friendly", "Urgent"] },
    { id: 2, title: "Operations Assistant", company: "Altus Digital", location: "Sydney, Australia", salary: "$70,000 - $90,000 / Yr", type: "Full-time", time: "5 hours ago", color: "bg-pink-50/50", iconColor: "text-pink-500", tags: ["Premium"] },
    { id: 3, title: "Lead IOS Engineer", company: "Sovereign Labs", location: "Silicon Valley, USA", salary: "$160,000 - $200,000 / Yr", type: "Contract", time: "1 day ago", color: "bg-amber-50/50", iconColor: "text-amber-600", tags: ["High Comp"] },
    { id: 4, title: "UX/UI Design Director", company: "Nexus Creative", location: "London, UK", salary: "£90,000 - £120,000 / Yr", type: "Hybrid", time: "3 days ago", color: "bg-purple-50/50", iconColor: "text-purple-500", tags: ["Design Hub"] },
    { id: 5, title: "Growth Marketing Lead", company: "Global Node", location: "Singapore", salary: "$120,000 - $150,000 / Yr", type: "Full-time", time: "4 days ago", color: "bg-emerald-50/50", iconColor: "text-emerald-500", tags: ["New Node"] },
    { id: 6, title: "AI Research Scientist", company: "DeepLogic Corp", location: "Toronto, Canada", salary: "$140,000 - $180,000 / Yr", type: "Full-time", time: "1 week ago", color: "bg-indigo-50/50", iconColor: "text-indigo-500", tags: ["AI/ML"] },
  ];

  // FIX: This filters the jobs based on the search input, using the variable
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFF] font-sans text-slate-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@700;800&family=Inter:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Outfit', sans-serif; }
        * { border-radius: 0 !important; }
      `}</style>

      {/* HEADER SECTION */}
      <section className="py-20 px-6 text-center space-y-8 bg-white border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-all mb-8 font-bold text-xs uppercase tracking-[0.2em]"
          >
            <ArrowLeft size={16} /> Return to Dashboard
          </button>
          
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tighter text-slate-900 leading-none">
            Scale your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">career node</span> <br /> 
            within the network
          </h1>
          
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium mt-6">
            Connecting top-tier talent with the world's most innovative verified enterprises. 
          </p>

          {/* EXPANDED SEARCH CONSOLE */}
          <div className="max-w-4xl mx-auto mt-12 bg-white p-3 flex flex-col md:flex-row items-center border border-slate-100 gap-2 shadow-2xl shadow-blue-900/10">
            <div className="flex-[1.5] flex items-center px-6 gap-3 w-full border-b md:border-b-0 md:border-r border-slate-100">
              <Search className="text-blue-600" size={20} />
              <input 
                type="text" 
                value={searchQuery}
                placeholder="Search by role, skill or company..." 
                className="w-full py-4 outline-none text-sm font-semibold placeholder:text-slate-300"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex-1 flex items-center px-6 gap-3 w-full">
              <MapPin className="text-slate-300" size={20} />
              <input type="text" placeholder="Preferred location" className="w-full py-4 outline-none text-sm font-semibold placeholder:text-slate-300" />
            </div>
            <button className="bg-blue-600 text-white px-10 py-4 font-black uppercase text-[11px] tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Find Jobs
            </button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-[1440px] mx-auto px-10 py-16 grid grid-cols-12 gap-10">
        
        {/* SIDEBAR */}
        <aside className="col-span-12 lg:col-span-3 space-y-8">
          <div className="bg-white p-8 border border-slate-100 shadow-sm sticky top-10">
            <h3 className="font-display font-bold text-slate-900 text-lg mb-8 flex items-center justify-between">
              Industry Verticals
              <Briefcase size={18} className="text-blue-600" />
            </h3>
            <div className="space-y-2">
              {categories.map((cat, i) => (
                <div key={i} className="flex items-center justify-between py-3.5 px-4 hover:bg-blue-50 cursor-pointer transition-all group border border-transparent hover:border-blue-100">
                  <span className="text-sm font-bold text-slate-500 group-hover:text-blue-700">{cat.name}</span>
                  <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-3 py-1 group-hover:bg-white transition-colors">{cat.count}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* FEED: JOBS */}
        <div className="col-span-12 lg:col-span-9 space-y-8">
          
          <div className="grid grid-cols-3 gap-6 mb-4">
             <StatCard label="Active Openings" val="1,284" color="text-blue-600" />
             <StatCard label="Verified Companies" val="492" color="text-indigo-600" />
             <StatCard label="Avg. Response" val="48h" color="text-emerald-600" />
          </div>

          <div className="flex justify-between items-end mb-4 px-2">
            <div>
              <h2 className="text-2xl font-display font-extrabold text-slate-900 tracking-tight">Curated Feed</h2>
              <p className="text-sm text-slate-400 font-medium">Opportunities tailored for your node profile</p>
            </div>
            <div className="flex bg-slate-200/40 p-1.5">
              <button className="px-6 py-2.5 bg-white text-blue-600 text-xs font-black uppercase tracking-widest shadow-sm">Latest</button>
              <button className="px-6 py-2.5 text-slate-500 text-xs font-black uppercase tracking-widest">Featured</button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Map the filtered results instead of the static 'jobs' list */}
            {filteredJobs.map((job) => (
              <JobHorizontalCard key={job.id} job={job} />
            ))}
            {filteredJobs.length === 0 && (
              <div className="text-center py-20 text-slate-400 font-bold uppercase tracking-widest">
                No matching nodes found.
              </div>
            )}
          </div>

          <div className="pt-10 flex justify-center">
             <button className="px-12 py-5 bg-white border border-slate-200 text-slate-500 font-black uppercase text-[11px] tracking-[0.3em] hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                Synchronize More Records
             </button>
          </div>
        </div>
      </main>
    </div>
  );
}

function JobHorizontalCard({ job }) {
  return (
    <motion.div 
      whileHover={{ y: -3, scale: 1.005 }}
      className={`p-8 bg-white border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 transition-all shadow-sm hover:shadow-2xl hover:shadow-blue-900/5 relative overflow-hidden`}
    >
      <div className="flex items-start gap-8 w-full">
        <div className={`w-20 h-20 ${job.color} flex items-center justify-center border border-white/50 shrink-0`}>
          <Zap size={32} className={job.iconColor} fill="currentColor" />
        </div>
        
        <div className="space-y-3 w-full">
          <div className="flex items-center gap-3">
             {job.tags.map(tag => (
                <span key={tag} className="text-[9px] font-black text-blue-600 bg-blue-50 px-2.5 py-1 uppercase tracking-widest border border-blue-100/50">{tag}</span>
             ))}
             <span className="text-[10px] font-bold text-slate-300 uppercase ml-auto">{job.time}</span>
          </div>

          <div>
            <h3 className="text-2xl font-display font-extrabold text-slate-900 tracking-tight leading-none mb-2">{job.title}</h3>
            <div className="flex items-center gap-4">
               <p className="text-sm font-bold text-blue-600 flex items-center gap-2">
                 <Building2 size={16} /> {job.company}
               </p>
               <span className="text-slate-200">|</span>
               <p className="text-sm font-semibold text-slate-400 flex items-center gap-2">
                 <MapPin size={16} /> {job.location}
               </p>
            </div>
          </div>

          <div className="pt-4 flex items-center gap-6 border-t border-slate-50">
             <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <DollarSign size={16} className="text-emerald-500" /> {job.salary}
             </div>
             <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
                <Clock size={16} /> {job.type}
             </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-6 md:pt-0">
        <button className="p-4 bg-slate-50 text-slate-300 hover:text-red-500 border border-slate-100 transition-colors group">
          <Heart size={20} />
        </button>
        <button className="px-10 py-5 bg-slate-900 text-white font-black uppercase text-[11px] tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 active:scale-95">
          Apply Now
        </button>
      </div>
    </motion.div>
  );
}

const StatCard = ({ label, val, color }) => (
    <div className="bg-white p-6 border border-slate-100 shadow-sm flex flex-col items-center justify-center">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{label}</p>
        <p className={`text-2xl font-display font-extrabold ${color}`}>{val}</p>
    </div>
);