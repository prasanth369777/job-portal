import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, BadgeCheck, Code, Paintbrush, Globe, Briefcase, Zap } from "lucide-react";

export default function StudentNetwork() {
  const [activeTab, setActiveTab] = useState("Engineering");
  const scrollRef = useRef(null);

  const categories = [
    { name: "Engineering", icon: <Code size={18} /> },
    { name: "Designers", icon: <Paintbrush size={18} /> },
    { name: "Marketing", icon: <Zap size={18} /> },
    { name: "Management", icon: <Briefcase size={18} /> },
    { name: "Product", icon: <Globe size={18} /> },
  ];

  const allStudents = {
    "Engineering": [
      { name: "Adam Ivansky", role: "Python Developer", uni: "Stanford", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Stanford_University_logo.svg", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80", skills: ["SQL", "Python", "ML"] },
      { name: "Nimrod Talmon", role: "AI Developer", uni: "Google Tech", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80", skills: ["Data Science", "Neural Nets"] },
      { name: "Manuela Kajkara", role: "iOS Developer", uni: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80", skills: ["Swift", "Objective-C"] },
    ],
    "Designers": [
      { name: "Elena Rossi", role: "UI/UX Designer", uni: "RISD", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo-Apple.referencia.png", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80", skills: ["Figma", "Adobe XD"] },
      { name: "Julian Chen", role: "Brand Identity", uni: "UAL London", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&q=80", skills: ["Illustrator", "Motion"] },
      { name: "Sarah Jenkins", role: "Product Designer", uni: "MIT", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80", skills: ["Research", "Wireframing"] },
    ],
    "Marketing": [
      { name: "Marcus Thorne", role: "SEO Specialist", uni: "Oxford", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80", skills: ["Analytics", "Strategy"] },
      { name: "Aria Varma", role: "Growth Hacker", uni: "UC Berkeley", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_logo%2C_revised_2016.svg", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&q=80", skills: ["A/B Testing", "Paid Media"] },
    ],
    "Management": [
      { name: "David Wu", role: "Ops Manager", uni: "Harvard", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80", skills: ["Agile", "Planning"] },
      { name: "Sophie Muller", role: "Strategy Consultant", uni: "INSEAD", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Deloitte.svg", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80", skills: ["Market Analysis", "M&A"] },
    ],
    "Product": [
      { name: "Kevin Park", role: "Product Manager", uni: "Stanford", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&q=80", skills: ["Roadmapping", "SQL"] },
      { name: "Linda Blair", role: "Technical PM", uni: "CMU", logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80", skills: ["API Design", "Backlog"] },
    ]
  };

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -250 : 250, behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 md:py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-8">
        
        <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-8 md:mb-14 tracking-tight">
          Meet Talent in Our Network
        </h2>

        {/* CATEGORY NAV - RESPONSIVE SCROLL */}
        <div className="relative border-y border-gray-100 mb-8 md:mb-12 flex items-center bg-gray-50/30 group">
          <button 
            onClick={() => scroll("left")} 
            className="absolute left-0 z-10 p-4 bg-white/80 backdrop-blur-sm text-gray-400 hover:text-indigo-600 transition-colors hidden md:block"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div ref={scrollRef} className="flex flex-1 overflow-x-auto no-scrollbar scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`flex items-center gap-3 px-6 md:px-10 py-4 md:py-6 text-xs md:text-sm font-bold whitespace-nowrap transition-all border-b-4 shrink-0 ${
                  activeTab === cat.name 
                  ? "border-indigo-600 text-indigo-600 bg-white shadow-inner" 
                  : "border-transparent text-gray-400 hover:text-gray-700"
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          <button 
            onClick={() => scroll("right")} 
            className="absolute right-0 z-10 p-4 bg-white/80 backdrop-blur-sm text-gray-400 hover:text-indigo-600 transition-colors hidden md:block"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* GRID CONTAINER - FULLY RESPONSIVE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {allStudents[activeTab].map((student, i) => (
              <motion.div
                key={student.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-gray-200 p-5 flex flex-col group hover:shadow-2xl hover:border-indigo-100 transition-all duration-300"
              >
                {/* Profile Pic */}
                <div className="relative mb-5 overflow-hidden aspect-[4/5] bg-gray-100 rounded-sm">
                  <img src={student.img} alt={student.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                  <div className="absolute bottom-3 left-3 bg-indigo-600 p-1.5 shadow-xl rounded-sm">
                    <BadgeCheck size={16} className="text-white" />
                  </div>
                </div>

                {/* Identity */}
                <h4 className="text-lg font-bold text-gray-900 group-hover:text-indigo-700 transition-colors mb-1 tracking-tight">
                  {student.name}
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-black uppercase tracking-widest mb-3">
                  <BadgeCheck size={12} fill="currentColor" className="text-white" />
                  Verified
                </div>

                <p className="text-gray-500 text-xs font-bold mb-5 uppercase tracking-tighter">
                  {student.role}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {student.skills.map(skill => (
                      <span key={skill} className="px-2.5 py-1 text-[10px] border border-gray-100 rounded-none text-gray-400 font-black uppercase tracking-widest bg-gray-50 group-hover:bg-white group-hover:border-indigo-100 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Logo */}
                <div className="mt-auto pt-5 border-t border-gray-50">
                  <p className="text-[9px] font-black text-gray-300 uppercase tracking-[0.2em] mb-3">Affiliation</p>
                  <div className="h-6 flex items-center">
                    <img src={student.logo} alt="Uni" className="h-full w-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Persistent CTA Card - Responsive Behavior */}
          <div className="bg-[#051a49] text-white p-8 md:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden rounded-sm lg:col-span-1 sm:col-span-2 xl:col-span-1 min-h-[400px]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="relative z-10 w-full">
              <div className="w-12 h-12 border-4 border-[#00d991] rotate-45 mx-auto mb-6 flex items-center justify-center">
                <div className="w-5 h-5 bg-[#00d991]"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4">Explore 500+ More {activeTab} Experts</h3>
              <p className="text-indigo-300 text-[10px] font-black mb-8 tracking-[0.2em] uppercase">Altus Global Network</p>
              <button className="w-full py-4 bg-[#00d991] hover:bg-[#00f2a2] text-[#051a49] font-black rounded-none transition-all shadow-xl uppercase text-[10px] tracking-widest active:scale-95">
                Discover Talent
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}