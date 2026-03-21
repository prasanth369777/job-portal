import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Search, GraduationCap, Briefcase, Globe2, ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Ausbildung");
  const [activeMobileAccordion, setActiveMobileAccordion] = useState(null);

  const navigate = useNavigate();

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [mobileMenuOpen]);

  const megaMenuData = [
    {
      category: "Ausbildung",
      title: "Vocational Training",
      icon: <GraduationCap size={20} />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      links: ["Nursing", "IT Specialist", "Mechatronics", "Hospitality", "Automotive Tech", "Social Work", "Logistics", "All Ausbildung"]
    },
    {
      category: "Job Seeker",
      title: "Professional Careers",
      icon: <Briefcase size={20} />,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      links: ["Tech Careers", "Healthcare Roles", "Engineering", "Marketing", "Remote Jobs", "Executive Leads", "Freelance Projects"]
    },
    {
      category: "Study Abroad",
      title: "International Education",
      icon: <Globe2 size={20} />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      links: ["Masters in Germany", "Bachelor Programs", "Visa Assistance", "Scholarships", "Language Courses", "Student Housing"]
    }
  ];

  const navItems = [
    { name: "Explore", path: "#", hasMega: true },
    { name: "Resources", path: "/resources" },
    { name: "Service Providers", path: "/providers" },
    { name: "Blog", path: "/blog" },
  ];

  const activeContent = megaMenuData.find(item => item.category === selectedCategory);

  return (
    <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-50 font-sans antialiased">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-8 py-3.5">
        
        {/* LEFT LOGO */}
        <div onClick={() => navigate("/")} className="flex items-center gap-2.5 cursor-pointer shrink-0">
          <div className="w-7 h-7 bg-blue-600 rounded flex items-center justify-center text-white font-bold text-lg shadow-sm">A</div>
          <div className="text-sm font-black leading-tight tracking-tight text-slate-900 flex flex-col">
            ALTUS <span className="text-blue-600 text-[10px] tracking-[0.2em] -mt-1 font-bold">CAREER</span>
          </div>
        </div>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-7 ml-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative py-2"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1.5 text-[13px] font-bold transition-all duration-200 uppercase tracking-widest ${activeDropdown === item.name ? "text-blue-600" : "text-slate-600 hover:text-slate-900"}`}>
                {item.name}
                {item.hasMega && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`} />}
              </button>

              <AnimatePresence>
                {item.hasMega && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute left-[-100px] top-full pt-4 w-[900px] xl:w-[1000px]"
                  >
                    <div className="bg-white shadow-[0_30px_70px_rgba(0,0,0,0.12)] border border-slate-100 rounded-2xl overflow-hidden flex min-h-[420px]">
                      {/* Desktop Sidebar */}
                      <div className="w-80 bg-slate-50/50 p-6 border-r border-slate-100">
                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Explore Programs</h3>
                        {megaMenuData.map((cat) => (
                          <div 
                            key={cat.category} 
                            onMouseEnter={() => setSelectedCategory(cat.category)}
                            className={`flex items-center justify-between p-4 mb-3 rounded-xl cursor-pointer transition-all duration-300 ${
                              selectedCategory === cat.category 
                              ? "bg-white shadow-md border-l-4 border-l-blue-600 translate-x-1" 
                              : "hover:bg-white/70 text-slate-500 opacity-70 hover:opacity-100"
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`p-2 rounded-lg ${selectedCategory === cat.category ? cat.bgColor + " " + cat.color : "bg-slate-100 text-slate-400"}`}>
                                {cat.icon}
                              </div>
                              <span className={`text-sm font-bold tracking-tight ${selectedCategory === cat.category ? "text-slate-900" : "text-slate-500"}`}>
                                {cat.category}
                              </span>
                            </div>
                            <ChevronRight size={14} className={selectedCategory === cat.category ? "text-blue-600" : "text-slate-300"} />
                          </div>
                        ))}
                      </div>

                      {/* Desktop Links Grid */}
                      <div className="flex-1 p-10 bg-white">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={selectedCategory}
                            initial={{ opacity: 0, x: 8 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -8 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="flex items-center justify-between mb-8 border-b border-slate-50 pb-5">
                              <h4 className={`text-xl font-extrabold tracking-tight ${activeContent.color}`}>
                                {activeContent.title}
                              </h4>
                              <button className="text-[11px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-all">
                                View all <ArrowRight size={14} />
                              </button>
                            </div>

                            <div className="grid grid-cols-2 gap-x-10 gap-y-4">
                              {activeContent.links.map((link) => (
                                <div key={link} className="text-[14px] font-semibold text-slate-500 hover:text-blue-600 hover:translate-x-1 transition-all cursor-pointer">
                                  {link}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="hidden xl:flex items-center bg-slate-100 px-4 py-2 rounded-full border border-transparent focus-within:border-blue-200 focus-within:bg-white transition-all group">
            <Search size={16} className="text-slate-400 group-focus-within:text-blue-600" />
            <input type="text" placeholder="Search paths..." className="bg-transparent border-none outline-none text-xs px-3 w-28 focus:w-40 transition-all font-medium" />
          </div>

          <button onClick={() => navigate("/login")} className="hidden sm:block text-[11px] font-black text-slate-600 hover:text-slate-900 uppercase tracking-widest transition-colors">
            Log in
          </button>

          <button onClick={() => navigate("/apply")} className="bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-7 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-200 hover:-translate-y-0.5 active:scale-95">
            Join Free
          </button>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setMobileMenuOpen(true)} 
            className="lg:hidden p-2 text-slate-900 hover:bg-slate-50 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] lg:hidden"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-[320px] bg-white z-[70] lg:hidden shadow-2xl flex flex-col"
            >
              <div className="p-5 flex justify-between items-center border-b border-slate-50">
                <div className="font-black text-sm tracking-tighter">ALTUS CAREER</div>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto no-scrollbar p-6">
                <nav className="flex flex-col gap-6">
                  {/* Mobile Search */}
                  <div className="flex items-center bg-slate-50 px-4 py-3 rounded-xl border border-slate-100">
                    <Search size={18} className="text-slate-400" />
                    <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm px-3 w-full" />
                  </div>

                  {/* Nav Links */}
                  <div className="flex flex-col gap-1">
                    <button className="flex items-center justify-between py-3 text-sm font-black uppercase tracking-widest text-slate-900" onClick={() => setActiveMobileAccordion(activeMobileAccordion === "exp" ? null : "exp")}>
                      Explore {activeMobileAccordion === "exp" ? <ChevronDown size={18}/> : <ChevronRight size={18}/>}
                    </button>
                    
                    {activeMobileAccordion === "exp" && (
                      <div className="pl-4 flex flex-col gap-4 mt-2 border-l border-slate-100 ml-1">
                        {megaMenuData.map(cat => (
                          <div key={cat.category} className="flex flex-col gap-2">
                            <span className={`text-[10px] font-black uppercase tracking-widest ${cat.color}`}>{cat.category}</span>
                            {cat.links.slice(0, 3).map(l => (
                              <button key={l} className="text-sm font-semibold text-slate-500 text-left hover:text-blue-600">{l}</button>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}

                    {navItems.filter(i => !i.hasMega).map(item => (
                      <button key={item.name} className="py-3 text-sm font-black uppercase tracking-widest text-slate-700 text-left border-b border-slate-50">
                        {item.name}
                      </button>
                    ))}
                  </div>
                </nav>
              </div>

              <div className="p-6 border-t border-slate-100 flex flex-col gap-3">
                <button className="w-full py-4 text-[11px] font-black uppercase tracking-widest text-slate-900 border border-slate-200 rounded-xl">Log In</button>
                <button className="w-full py-4 text-[11px] font-black uppercase tracking-widest text-white bg-blue-600 rounded-xl shadow-lg shadow-blue-100">Get Started</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}