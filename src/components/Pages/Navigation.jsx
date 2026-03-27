import React, { useState } from "react";
import { ChevronDown, Menu, X, Search, Globe, User, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// 1. IMPORT YOUR LOGO HERE
import logo from "../../logo.svg"; 

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State for Language selection
  const [currentLang, setCurrentLang] = useState("EN");
  const navigate = useNavigate();

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
        "Ausbildung", "Direct Jobs Abroad", "Study Abroad", 
        "German Language & Readiness", "Healthcare Careers Abroad", 
        "IT Careers Abroad", "Skilled Trades Abroad", "Gulf Jobs"
      ]
    },
    {
      category: "Find Jobs",
      title: "Career Opportunities",
      links: [
        "Browse Jobs", "Jobs by Country", "Jobs by Industry", 
        "Jobs by Designation", "Jobs by Qualification", 
        "Jobs by Experience", "Urgent Hiring", "Popular Jobs in Demand"
      ]
    },
    {
      category: "Resources",
      title: "Knowledge Base",
      links: [
        "Success Stories", "Events & Webinars", "Tools & Calculators", 
        "Blogs / Guides", "FAQs", "Downloads", 
        "Career Pathway Guides", "Learn German"
      ]
    },
    {
      category: "About",
      title: "Our Organization",
      links: [
        "About Altus Career", "How It Works", "Why Choose Us", 
        "Our Process", "Team / Mentors / Trainers", 
        "Offices / Presence", "Contact Us"
      ]
    },
    {
      category: "Apply",
      title: "User Portals",
      links: [
        "Login", "Register", "Student Hub", "Agent Hub", "Institution Hub"
      ]
    }
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-[100]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@600;700&display=swap');
      ` }} />

      <div className="max-w-[1440px] mx-auto flex items-center h-14 md:h-16 px-4 md:px-8">
        
        {/* LEFT: BRANDING */}
        <div onClick={() => navigate("/")} className="flex items-center cursor-pointer mr-8 group shrink-0">
          <div className="flex items-center h-10 transition-transform group-hover:scale-95">
             {/* LOGO SIZE INCREASED: Height set to h-full and width explicitly scaled */}
             <img src={logo} alt="Altus Logo" className="h-full w-auto min-w-[40px] object-contain scale-150 transform origin-left" />
          </div>
          <div className="h-6 w-[1px] bg-gray-200 mx-5 hidden md:block" />
        </div>

        {/* CENTER NAV */}
        <nav className="hidden lg:flex items-center h-full space-x-1">
          {["Programs", "Find Jobs", "Resources", "About"].map((item) => (
            <div 
              key={item} 
              className="h-full relative flex items-center px-3 cursor-pointer"
              onMouseEnter={() => setActiveDropdown(item)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1.5 text-[13px] font-semibold transition-colors ${activeDropdown === item ? "text-blue-600" : "text-slate-600 hover:text-black"}`}>
                {item} <ChevronDown size={13} className={`mt-[1px] transition-transform ${activeDropdown === item ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === item && (
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="fixed left-0 right-0 top-[56px] md:top-[64px] bg-white border-b border-gray-200 shadow-2xl z-[100] h-[420px]"
                  >
                    <div className="max-w-[1440px] mx-auto flex h-full">
                      <div className="w-[280px] bg-gray-50/50 border-r border-gray-100 p-8 flex flex-col justify-between">
                        <div>
                          <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-3">Category</div>
                          <div className="text-black font-bold text-[22px] leading-tight flex items-center gap-2">
                            {item}
                          </div>
                        </div>
                        
                        <button className="flex items-center gap-2 text-blue-600 font-bold text-[13px] hover:underline">
                          Explore all {item} <ArrowRight size={14} />
                        </button>
                      </div>

                      <div className="flex-1 p-10 overflow-y-auto">
                        <div className="mb-6">
                           <h4 className="text-[18px] font-bold text-blue-600 flex items-center gap-2">
                            {megaMenuData.find(m => m.category === item)?.title}
                            <ArrowRight size={16} className="mt-1" />
                           </h4>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-x-10 gap-y-6">
                          {megaMenuData.find(m => m.category === item)?.links.map(link => (
                            <div key={link} className="group cursor-pointer">
                              <button className="text-[14px] text-left text-gray-900 font-semibold group-hover:text-blue-600 transition-colors block mb-1">
                                {link}
                              </button>
                              <p className="text-[11px] text-gray-400 leading-relaxed group-hover:text-gray-600">
                                Detailed information about {link} and career pathways.
                              </p>
                            </div>
                          ))}
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
        <div className="ml-auto flex items-center gap-4">
          <div 
            className="hidden lg:flex h-full items-center px-4 cursor-pointer"
            onClick={() => navigate("/employers")}
          >
            <button className="text-[13px] font-semibold text-slate-600 hover:text-blue-600 transition-colors">
              For Employers
            </button>
          </div>

          <div className="hidden sm:flex items-center gap-5 text-gray-500 mr-1">
            <Search size={18} className="cursor-pointer hover:text-black transition-colors" />
            
            {/* LANGUAGE SWITCHER */}
            <div 
              className="relative flex items-center gap-1.5 cursor-pointer hover:text-black transition-colors"
              onMouseEnter={() => setActiveDropdown("Lang")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
                <Globe size={16} />
                <span className="text-[11px] font-bold">{currentLang}</span>
                
                <AnimatePresence>
                  {activeDropdown === "Lang" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute right-0 top-full w-32 bg-white border border-gray-200 shadow-xl py-2 z-[110]"
                    >
                      {languages.map((lang) => (
                        <div 
                          key={lang.code} 
                          onClick={() => { setCurrentLang(lang.code); setActiveDropdown(null); }}
                          className={`px-4 py-2 text-[11px] font-bold hover:bg-slate-50 hover:text-blue-600 cursor-pointer ${currentLang === lang.code ? 'text-blue-600' : 'text-slate-700'}`}
                        >
                          {lang.name}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>

            {/* USER PORTALS DROPDOWN */}
            <div 
              className="relative flex items-center gap-1.5 cursor-pointer hover:text-black transition-colors"
              onMouseEnter={() => setActiveDropdown("UserPortals")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
                <User size={18} />
                
                <AnimatePresence>
                  {activeDropdown === "UserPortals" && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute right-0 top-full w-48 bg-white border border-gray-200 shadow-xl py-2 z-[110]"
                    >
                      {megaMenuData.find(m => m.category === "Apply")?.links.map((link) => (
                        <div 
                          key={link} 
                          className="px-4 py-2 text-[11px] font-bold hover:bg-slate-50 hover:text-blue-600 cursor-pointer text-slate-700"
                        >
                          {link}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>
          </div>
          
          <div className="h-5 w-[1px] bg-gray-200 mx-1 hidden sm:block" />

          {/* APPLY CTA */}
          <div className="relative">
            <button 
              className="bg-black text-white px-6 py-2 text-[11px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-blue-700 transition-all shadow-md"
              onClick={() => navigate("/apply")}
            >
              Apply
            </button>
          </div>
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-black">
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-14 md:top-16 bg-white z-[90] lg:hidden overflow-y-auto"
          >
            <div className="p-8 space-y-8">
               {megaMenuData.map(cat => (
                 <div key={cat.category} className="space-y-4">
                   <h3 className="text-black font-bold text-[13px] uppercase tracking-widest border-b border-gray-100 pb-2">{cat.category}</h3>
                   <div className="flex flex-col gap-4 pl-2">
                      {cat.links.map(l => (
                        <span key={l} className="text-gray-500 text-[14px] font-medium hover:text-blue-600 cursor-pointer">{l}</span>
                      ))}
                   </div>
                 </div>
               ))}
               <div className="pt-6 border-t border-gray-100 space-y-4">
                  <div className="text-black font-bold text-[13px] uppercase tracking-widest">Select Language</div>
                  <div className="flex flex-wrap gap-4 pl-2">
                    {languages.map(lang => (
                      <span 
                        key={lang.code} 
                        onClick={() => { setCurrentLang(lang.code); setMobileMenuOpen(false); }}
                        className={`text-sm font-bold cursor-pointer ${currentLang === lang.code ? 'text-blue-600' : 'text-gray-500'}`}
                      >
                        {lang.name}
                      </span>
                    ))}
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}