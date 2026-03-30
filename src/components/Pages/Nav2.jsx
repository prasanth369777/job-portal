import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, Search, Globe, User, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// 1. IMPORT LOGO2
import logo2 from "../../assets/logo2.png"; // Adjust path based on your folder structure

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    {
      name: "Job Seeker",
      path: "/job-seeker",
      title: "Global Talent Solutions",
      links: [
        { name: "Direct Jobs Abroad", desc: "Immediate placement for skilled professionals." },
        { name: "Healthcare Careers", desc: "Pathways for nurses and medical staff." },
        { name: "IT & Tech Hub", desc: "Tech placements in global innovation centers." }
      ]
    },
    {
      name: "Ausbildung",
      path: "/aus-bildung",
      title: "Vocational Training",
      links: [
        { name: "Technical Trades", desc: "Engineering and manufacturing programs." },
        { name: "Commercial Roles", desc: "Business, hospitality, and management." },
        { name: "Eligibility Check", desc: "Analyze your profile for German training." }
      ]
    },
    {
      name: "Study Abroad",
      path: "/study-abroad",
      title: "Higher Education",
      links: [
        { name: "Bachelor's Degrees", desc: "Undergraduate programs across the EU." },
        { name: "Master's Programs", desc: "Specialized postgraduate opportunities." },
        { name: "Scholarships", desc: "Find funding for your global education." }
      ]
    },
    {
      name: "Services",
      title: "Professional Support",
      links: [
        { name: "German Training", desc: "Certified language courses (A1-C1)." },
        { name: "Visa Support", desc: "End-to-end documentation assistance." },
        { name: "Consultation", desc: "One-on-one expert career counseling." }
      ]
    },
  ];

  const handleNavClick = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header ref={navRef} className="w-full bg-white border-b border-gray-100 sticky top-0 z-[100]">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800;900&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      ` }} />

      <div className="max-w-[1440px] mx-auto flex items-center h-14 md:h-20 px-4 md:px-10">
        
        {/* LOGO SECTION - ADDED LOGO2.PNG */}
        <div 
          onClick={() => navigate("/")} 
          className="flex items-center cursor-pointer shrink-0 mr-10 group h-full"
        >
          <img 
            src={logo2} 
            alt="Altus Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105" 
          />
        </div>

        {/* CENTER NAVIGATION */}
        <nav className="hidden lg:flex items-center h-full">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className={`h-full relative flex items-center px-5 cursor-pointer transition-colors 
                ${activeDropdown === item.name ? "bg-gray-50" : "hover:bg-gray-50"}`}
              onClick={() => handleNavClick(item.name)}
            >
              {activeDropdown === item.name && (
                <motion.div layoutId="navStroke" className="absolute top-0 left-0 right-0 h-[3px] bg-[#003fa3]" />
              )}

              <button className={`flex items-center gap-1 text-[13px] font-bold uppercase tracking-wider transition-colors font-poppins ${activeDropdown === item.name ? "text-[#003fa3]" : "text-gray-600"}`}>
                {item.name} <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="fixed left-0 right-0 top-[56px] md:top-[80px] bg-white border-b border-gray-200 shadow-2xl z-[100]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="max-w-[1440px] mx-auto flex min-h-[350px]">
                      <div className="w-[320px] bg-gray-50 p-10 border-r border-gray-100 flex flex-col justify-between">
                        <div>
                          <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#003fa3] mb-4 font-poppins">Focus Area</h3>
                          <h2 className="text-2xl font-black text-gray-900 leading-tight font-poppins uppercase tracking-tighter">
                            {item.title}
                          </h2>
                        </div>
                        <button className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-[#003fa3] group transition-colors font-poppins uppercase tracking-wider">
                          View all <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                      </div>

                      <div className="flex-1 p-10 grid grid-cols-3 gap-10 bg-white">
                        {item.links.map(link => (
                          <div key={link.name} className="group/link cursor-pointer">
                            <h4 className="text-[15px] font-bold text-gray-900 group-hover/link:text-[#003fa3] group-hover/link:underline transition-all font-poppins uppercase tracking-tight">
                              {link.name}
                            </h4>
                            <p className="text-[13px] text-gray-500 mt-2 leading-relaxed font-inter">
                              {link.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="ml-auto flex items-center gap-4">
          <div className="hidden xl:flex items-center bg-gray-50 border border-gray-200 px-4 py-2 w-72 focus-within:border-[#003fa3] focus-within:bg-white transition-all">
            <Search size={16} className="text-gray-400 mr-2" />
            <input
              placeholder="SEARCH OPPORTUNITIES..."
              className="bg-transparent outline-none w-full text-[11px] font-black uppercase tracking-widest placeholder:text-gray-400 font-inter"
            />
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-50 text-gray-600 transition-colors hidden sm:block">
               <Globe size={18} />
            </button>
            <button
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 text-[12px] font-black uppercase tracking-[0.15em] text-gray-700 hover:text-[#003fa3] px-3 font-poppins"
            >
              <User size={18} />
              <span className="hidden md:inline">Log in</span>
            </button>
            <button
              onClick={() => navigate("/apply")}
              className="bg-[#003fa3] text-white px-8 py-2.5 text-[11px] font-black uppercase tracking-[0.25em] hover:bg-black transition-all shadow-md active:scale-95 ml-2 font-poppins"
            >
              Apply
            </button>
          </div>

          <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 text-gray-900">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-white z-[200] p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-10">
               <img src={logo2} alt="Logo" className="h-8 w-auto object-contain" />
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-gray-50 rounded-full">
                <X size={24} className="text-gray-900" />
              </button>
            </div>

            <div className="flex flex-col gap-8 overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button className="text-2xl font-black text-left text-gray-900 flex items-center justify-between uppercase tracking-tighter w-full font-poppins">
                    {item.name}
                    <ChevronDown size={24} />
                  </button>
                  <div className="mt-4 pl-4 border-l-2 border-gray-100 flex flex-col gap-5">
                    {item.links.map(link => (
                      <div key={link.name}>
                        <div className="font-bold text-sm text-gray-900 uppercase tracking-wide font-poppins">{link.name}</div>
                        <div className="text-xs text-gray-500 mt-1 font-inter">{link.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-gray-100 flex flex-col gap-4">
               <button className="w-full bg-[#003fa3] text-white py-5 font-black uppercase tracking-[0.3em] text-sm font-poppins">
                 Apply Now
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}