import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, Search, Globe, User, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// 1. IMPORT YOUR LOGO HERE
import logo from "../../logo.svg"; 

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  const navigate = useNavigate();
  const navRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const languages = [
    { code: "EN", name: "English" },
    { code: "DE", name: "Deutsch" },
    { code: "FR", name: "Français" },
    { code: "ES", name: "Español" },
    { code: "IT", name: "Italiano" }
  ];

  const megaMenuData = [
    {
      category: "Programs",
      title: "Global Training & Pathways",
      links: [
        { name: "Ausbildung", desc: "Vocational training and work-study programs in Germany." },
        { name: "Direct Jobs Abroad", desc: "Immediate placement for skilled professionals globally." },
        { name: "Study Abroad", desc: "International degree programs and university pathways." },
        { name: "German Language & Readiness", desc: "Language certification and cultural integration." },
        { name: "Healthcare Careers Abroad", desc: "Specialized pathways for nurses and medical staff." },
        { name: "IT Careers Abroad", desc: "Tech placements in global innovation hubs." }
      ]
    },
    {
      category: "Find Jobs",
      title: "Career Opportunities",
      links: [
        { name: "Browse Jobs", desc: "Search across all available international positions." },
        { name: "Jobs by Country", desc: "Explore opportunities filtered by global locations." },
        { name: "Jobs by Industry", desc: "Find roles tailored to your specific sector." },
        { name: "Jobs by Designation", desc: "Search based on your professional title." },
        { name: "Urgent Hiring", desc: "Fast-track applications for high-priority roles." },
        { name: "Popular Jobs", desc: "Current trending careers in demand abroad." }
      ]
    },
    {
      category: "Resources",
      title: "Knowledge Base",
      links: [
        { name: "Success Stories", desc: "Read about candidates who transformed their careers." },
        { name: "Events & Webinars", desc: "Join our upcoming live sessions and info days." },
        { name: "Tools & Calculators", desc: "Cost of living and salary estimation tools." },
        { name: "Blogs / Guides", desc: "Expert advice on relocating and working abroad." },
        { name: "FAQs", desc: "Common questions about the global hiring process." },
        { name: "Downloads", desc: "Guides, brochures, and application templates." }
      ]
    },
    {
      category: "About",
      title: "Our Organization",
      links: [
        { name: "About Altus Career", desc: "Our mission to bridge the global talent gap." },
        { name: "How It Works", desc: "Understanding our step-by-step career process." },
        { name: "Why Choose Us", desc: "What sets Altus apart in global recruitment." },
        { name: "Our Process", desc: "The methodology behind successful placements." },
        { name: "Mentors / Trainers", desc: "Meet the experts guiding your journey." },
        { name: "Contact Us", desc: "Get in touch with our regional offices." }
      ]
    }
  ];

  const handleNavClick = (category) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  return (
    <header ref={navRef} className="w-full bg-white border-b border-gray-200 sticky top-0 z-[100]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@600;700&display=swap');
      ` }} />

      <div className="max-w-[1440px] mx-auto flex items-center h-12 md:h-14 px-4 md:px-8">
        
        {/* LEFT: BRANDING */}
        <div onClick={() => navigate("/")} className="flex items-center cursor-pointer mr-6 group shrink-0 h-full">
          <div className="flex items-center h-8 transition-transform group-hover:scale-95">
             <img src={logo} alt="Altus Logo" className="h-full w-auto min-w-[32px] object-contain scale-125 transform origin-left" />
          </div>
          <div className="h-6 w-[1px] bg-gray-200 mx-4 hidden md:block" />
        </div>

        {/* CENTER NAV: CLICK BASED OPENING */}
        <nav className="hidden lg:flex items-center h-full ">
          {megaMenuData.map((item) => (
            <div 
              key={item.category} 
              className={`h-full relative flex items-center px-3 cursor-pointer transition-colors duration-150 
                ${activeDropdown === item.category ? "bg-[#e0e0e0]" : "hover:bg-[#f4f4f4]"}`}
              onClick={() => handleNavClick(item.category)}
            >
              {/* IBM Style Blue Top Stroke */}
              {activeDropdown === item.category && (
                <motion.div layoutId="topStroke" className="absolute top-0 left-0 right-0 h-[2.5px] bg-blue-600" />
              )}

              <button className={`flex items-center gap-1 text-[13px] font-normal transition-colors ${activeDropdown === item.category ? "text-black" : "text-gray-600"}`}>
                {item.category} <ChevronDown size={12} className={`transition-transform duration-200 ${activeDropdown === item.category ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === item.category && (
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.1 }}
                    className="fixed left-0 right-0 top-[48px] md:top-[42px] bg-white border-b border-gray-200 shadow-4xl z-[100]"
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
                  >
                    <div className="max-w-[1440px] mx-auto flex min-h-[400px] ">
                      {/* Left Sidebar: Smaller text size */}
                      <div className="w-[260px] border-r border-gray-100 py-6 px-8 bg-[#f4f4f4]">
                        <h3 className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-4">Explore</h3>
                        <ul className="space-y-1">
                          <li className="text-[14px] font-semibold text-black bg-white -mx-8 px-8 py-2.5 border-l-4 border-blue-600">
                            {item.category}
                          </li>
                          <li className="text-[14px] font-normal text-gray-700 hover:bg-[#e0e0e0] -mx-8 px-8 py-2.5 transition-colors">Global Pathways</li>
                          <li className="text-[14px] font-normal text-gray-700 hover:bg-[#e0e0e0] -mx-8 px-8 py-2.5 transition-colors">Innovation Hub</li>
                        </ul>
                      </div>

                      {/* Right Content: Refined Typography */}
                      <div className="flex-1 flex flex-col bg-white">
                        <div className="p-8 grid grid-cols-3 gap-x-10 gap-y-8">
                          <div className="col-span-3">
                            <h2 className="text-[22px] font-medium text-blue-600 flex items-center gap-2 pb-4 border-b border-gray-100">
                              {item.title}
                              <ArrowRight size={20} />
                            </h2>
                          </div>
                          
                          {item.links.map(link => (
                            <div key={link.name} className="group/link cursor-pointer">
                              <h4 className="text-[14px] font-semibold text-gray-900 group-hover/link:text-blue-600 group-hover/link:underline transition-colors">
                                {link.name}
                              </h4>
                              <p className="text-[12px] text-gray-500 mt-1 leading-relaxed line-clamp-2">
                                {link.desc}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Bottom CTA Bar */}
                        <div className="mt-auto bg-blue-600 py-3 flex justify-center items-center">
                           <button className="text-white text-[13px] font-bold flex items-center gap-2 hover:gap-4 transition-all">
                             Explore all products and services <ArrowRight size={16} />
                           </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* RIGHT: UTILITY & APPLY */}
        <div className="ml-auto flex items-center gap-4 h-full">
          <div className="hidden lg:flex h-full items-center px-4 cursor-pointer hover:bg-[#f4f4f4]" onClick={() => navigate("/employers")}>
            <button className="text-[13px] font-medium text-gray-600">For Employers</button>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-gray-500">
            <Search size={18} className="cursor-pointer hover:text-black transition-colors" />
            
            {/* Language Switcher on Click */}
            <div className="relative flex items-center gap-1 cursor-pointer hover:text-black transition-colors" onClick={() => handleNavClick('Lang')}>
                <Globe size={16} />
                <span className="text-[11px] font-bold">{currentLang}</span>
                <AnimatePresence>
                  {activeDropdown === "Lang" && (
                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute right-0 top-full mt-2 w-32 bg-white border border-gray-200 shadow-xl py-2 z-[110]" onClick={(e) => e.stopPropagation()}>
                      {languages.map((lang) => (
                        <div key={lang.code} onClick={() => { setCurrentLang(lang.code); setActiveDropdown(null); }} className="px-4 py-2 text-[11px] font-bold hover:bg-slate-50 hover:text-blue-600 cursor-pointer">
                          {lang.name}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>

            <div className="relative flex items-center gap-1 cursor-pointer hover:text-black transition-colors" onClick={() => handleNavClick('User')}>
                <User size={18} />
                <AnimatePresence>
                  {activeDropdown === "User" && (
                    <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 shadow-xl py-2 z-[110]" onClick={(e) => e.stopPropagation()}>
                      {["Login", "Register", "Student Hub", "Agent Hub"].map((link) => (
                        <div key={link} className="px-4 py-2 text-[11px] font-bold hover:bg-slate-50 hover:text-blue-600 cursor-pointer text-slate-700">
                          {link}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>
          </div>
          
          <div className="h-5 w-[1px] bg-gray-200 mx-1 hidden sm:block" />

          <button className="bg-black text-white px-5 py-2 text-[11px] font-bold uppercase tracking-widest hover:bg-blue-700 transition-all shadow-md" onClick={() => navigate("/apply")}>
            Apply
          </button>
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-black">
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}