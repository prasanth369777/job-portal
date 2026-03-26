import React, { useState } from "react";
import { ChevronDown, Menu, X, Search, Globe, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// 1. IMPORT YOUR LOGO HERE
import logo from "../../assets/logo2.png"; 

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

      <div className="max-w-[1440px] mx-auto flex items-center h-20 px-4 md:px-8">
        
        {/* LEFT: BRANDING */}
        <div onClick={() => navigate("/")} className="flex items-center cursor-pointer mr-8 group shrink-0">
          <div className="flex items-center h-12 transition-transform group-hover:scale-95">
             <img src={logo} alt="Altus Logo" className="h-full w-auto object-contain" />
          </div>
          <div className="h-8 w-[1px] bg-gray-200 mx-5 hidden md:block" />
          <span className="hidden md:block text-[13px] font-bold tracking-[0.2em] text-gray-500 uppercase">
            Altus Career
          </span>
        </div>

        {/* CENTER NAV */}
        <nav className="hidden lg:flex items-center h-full space-x-2">
          {["Programs", "Find Jobs", "Resources", "About", "For Employers"].map((item) => (
            <div 
              key={item} 
              className="h-full relative flex items-center px-3 cursor-pointer"
              onMouseEnter={() => item !== "For Employers" && setActiveDropdown(item)}
              onMouseLeave={() => setActiveDropdown(null)}
              onClick={() => item === "For Employers" && navigate("/employers")}
            >
              <button className={`flex items-center gap-1.5 text-[14px] font-semibold transition-colors ${activeDropdown === item ? "text-blue-600" : "text-slate-600 hover:text-black"}`}>
                {item} {item !== "For Employers" && <ChevronDown size={14} className={`mt-[1px] transition-transform ${activeDropdown === item ? 'rotate-180' : ''}`} />}
              </button>

              <AnimatePresence>
                {activeDropdown === item && item !== "For Employers" && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-0 top-[100%] w-[750px] bg-white border border-gray-200 shadow-2xl p-10 -mt-[1px]"
                  >
                    <div className="flex gap-12">
                      <div className="w-1/3 flex flex-col gap-3 border-r border-gray-100 pr-8">
                        <div className="text-blue-600 font-bold text-[16px] border-b-2 border-blue-600 pb-1 self-start">
                          {item}
                        </div>
                        <p className="text-[12px] text-gray-400 mt-2 leading-relaxed">
                          Your gateway to global opportunities and career advancement.
                        </p>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[11px] uppercase font-black text-slate-300 mb-6 tracking-[0.2em]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {megaMenuData.find(m => m.category === item)?.title}
                        </h4>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                          {megaMenuData.find(m => m.category === item)?.links.map(link => (
                            <button key={link} className="text-[13px] text-left text-gray-600 font-medium hover:text-blue-600 transition-colors">
                              {link}
                            </button>
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
        <div className="ml-auto flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-6 text-gray-500 mr-2">
            <Search size={20} className="cursor-pointer hover:text-black transition-colors" />
            
            {/* LANGUAGE SWITCHER */}
            <div 
              className="relative flex items-center gap-1.5 cursor-pointer hover:text-black transition-colors"
              onMouseEnter={() => setActiveDropdown("Lang")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
                <Globe size={18} />
                <span className="text-[12px] font-bold">{currentLang}</span>
                
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
                          className={`px-4 py-2 text-[12px] font-bold hover:bg-slate-50 hover:text-blue-600 cursor-pointer ${currentLang === lang.code ? 'text-blue-600' : 'text-slate-700'}`}
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
                <User size={20} />
                
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
                          className="px-4 py-2 text-[12px] font-bold hover:bg-slate-50 hover:text-blue-600 cursor-pointer text-slate-700"
                        >
                          {link}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>
          </div>
          
          <div className="h-6 w-[1px] bg-gray-200 mx-1 hidden sm:block" />

          {/* APPLY CTA (SUBTOPICS REMOVED) */}
          <div className="relative">
            <button 
              className="bg-black text-white px-8 py-2.5 text-[12px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-blue-700 transition-all shadow-md"
              onClick={() => navigate("/apply")}
            >
              Apply
            </button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-black">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="fixed inset-0 top-20 bg-white z-[90] lg:hidden overflow-y-auto"
          >
            <div className="p-8 space-y-8">
               {megaMenuData.map(cat => (
                 <div key={cat.category} className="space-y-4">
                   <h3 className="text-black font-bold text-[14px] uppercase tracking-widest border-b border-gray-100 pb-2">{cat.category}</h3>
                   <div className="flex flex-col gap-4 pl-2">
                      {cat.links.map(l => (
                        <span key={l} className="text-gray-500 text-[15px] font-medium hover:text-blue-600 cursor-pointer">{l}</span>
                      ))}
                   </div>
                 </div>
               ))}
               <div className="pt-6 border-t border-gray-100 space-y-4">
                  <div className="text-black font-bold text-[14px] uppercase tracking-widest">Select Language</div>
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