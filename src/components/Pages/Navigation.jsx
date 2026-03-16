import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Globe, Zap, Shield, BarChart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate(); // 2. Initialize navigate

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Define paths for all items
  const navItems = [
    { name: "Find Jobs", hasArrow: false, path: "/explore" },
    { name: "Companies", hasArrow: false, path: "/companies" },
    { 
      name: "Coverage", 
      hasArrow: true,
      path: "/coverage",
      children: [
        { title: "Global Hiring", desc: "Hire in 150+ countries", icon: <Globe size={16}/>, path: "/coverage/global" },
        { title: "Compliance", desc: "Local labor law experts", icon: <Shield size={16}/>, path: "/coverage/compliance" }
      ]
    },
    { 
      name: "Products", 
      hasArrow: true,
      path: "/products",
      children: [
        { title: "Talent OS", desc: "AI-driven sourcing", icon: <Zap size={16}/>, path: "/products/talent" },
        { title: "Payroll", desc: "Automated global payments", icon: <BarChart size={16}/>, path: "/products/payroll" }
      ]
    },
    { name: "Pricing", hasArrow: false, path: "/pricing" }
  ];

  // Helper for navigation + closing menus
  const handleNavigate = (path) => {
    if (!path) return;
    navigate(path);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-6 w-full z-[100] flex justify-center px-6 transition-all duration-500 ease-in-out`}>
      <div className="flex items-center gap-4 relative">
        
        {/* LOGO CAPSULE */}
        <div 
          onClick={() => handleNavigate("/")}
          className={`flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer transition-all duration-300 group
          ${isScrolled ? "bg-white/90 backdrop-blur-xl border-white/40 shadow-lg" : "bg-white/50 backdrop-blur-md border-white/20 shadow-sm"} border hover:bg-white`}
        >
          <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-[10px] font-black text-white italic">A</div>
          <span className="text-sm font-black text-slate-900 tracking-tighter uppercase">Altus</span>
        </div>

        {/* DESKTOP NAV LINKS CAPSULE */}
        <div className={`hidden lg:flex items-center gap-8 px-10 py-3 rounded-full transition-all duration-500 border
          ${isScrolled ? "bg-white/90 backdrop-blur-xl border-white/40 shadow-lg" : "bg-white/50 backdrop-blur-md border-white/20 shadow-sm"}`}>
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => handleNavigate(item.path)}
                className="text-[13px] font-bold text-slate-500 hover:text-slate-900 transition-all flex items-center gap-1.5 whitespace-nowrap py-1"
              >
                {item.name}
                {item.hasArrow && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`} />}
              </button>

              <AnimatePresence>
                {item.children && activeDropdown === item.name && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                  >
                    <div className="bg-white rounded-3xl p-4 shadow-2xl border border-slate-100 flex flex-col gap-2">
                      {item.children.map((child) => (
                        <div 
                          key={child.title} 
                          onClick={() => handleNavigate(child.path)}
                          className="flex items-start gap-3 p-3 rounded-2xl hover:bg-blue-50 transition-colors cursor-pointer group"
                        >
                          <div className="mt-1 text-blue-600 bg-blue-50 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">{child.icon}</div>
                          <div>
                            <div className="text-[12px] font-bold text-slate-900">{child.title}</div>
                            <div className="text-[10px] text-slate-400 font-medium leading-tight">{child.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className={`flex items-center gap-2 p-1.5 rounded-full transition-all duration-500 border
          ${isScrolled ? "bg-white/90 backdrop-blur-xl border-white/40 shadow-lg" : "bg-white/50 backdrop-blur-md border-white/20 shadow-sm"}`}>
          <button onClick={() => handleNavigate("/login")} className="hidden sm:block px-6 py-2 text-[13px] font-bold text-slate-700 hover:text-slate-900 transition-colors">Log In</button>
          <button onClick={() => handleNavigate("/join-network")} className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-[13px] font-black tracking-tight hover:bg-slate-800 transition-all shadow-lg active:scale-95">Get started</button>
          
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE SIDEBAR MENU */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white/95 backdrop-blur-2xl z-[150] shadow-2xl lg:hidden p-10 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                 <span className="text-xl font-black italic tracking-tighter">Altus</span>
                 <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-slate-100 rounded-full"><X size={24}/></button>
              </div>

              <div className="flex flex-col gap-8">
                {navItems.map((item) => (
                  <div key={item.name} className="flex flex-col gap-4">
                    <button 
                      onClick={() => item.path && handleNavigate(item.path)}
                      className="text-2xl font-bold text-slate-900 flex justify-between items-center group"
                    >
                      {item.name} {item.hasArrow && <ChevronDown className="text-slate-300" />}
                    </button>
                    {item.children && (
                      <div className="pl-4 border-l-2 border-slate-100 flex flex-col gap-4">
                        {item.children.map(c => (
                          <div 
                            key={c.title} 
                            onClick={() => handleNavigate(c.path)}
                            className="text-slate-500 font-bold hover:text-blue-600 transition-colors cursor-pointer"
                          >
                            {c.title}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-4">
                <button onClick={() => handleNavigate("/login")} className="w-full py-4 text-slate-900 font-bold border-2 border-slate-900 rounded-2xl">Log In</button>
                <button onClick={() => handleNavigate("/join-network")} className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl shadow-xl">Get Started Free</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}