import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X,Zap,BarChart, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated navItems with path logic
  const navItems = [
    { 
      name: "Explore Jobs", 
      hasArrow: false, // Changed to false as it redirects directly
      path: "/explore" 
    },
    { 
      name: "Products", 
      hasArrow: true,
      children: [
        { title: "Talent OS", desc: "AI-driven sourcing", icon: <Zap size={14}/>, path: "/explore" },
        { title: "Global Payroll", desc: "Automated payments", icon: <BarChart size={14}/>, path: "/explore" }
      ]
    },
    { name: "Pricing", hasArrow: false, path: "/pricing" }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 border-b border-slate-200 bg-white ${isScrolled ? "py-3 shadow-md" : "py-5"}`}>
      <div className="max-w-[1440px] mx-auto px-6 flex items-center justify-between gap-8">
        
        {/* LOGO */}
        <div onClick={() => navigate("/")} className="flex items-center gap-3 cursor-pointer group">
          <div className="w-7 h-7 bg-[#002DF9] flex items-center justify-center text-[12px] font-black text-white italic">A</div>
          <span className="text-lg font-black text-slate-900 tracking-tighter uppercase group-hover:text-[#002DF9] transition-colors">
            Altus
          </span>
        </div>

        {/* SEARCH BAR */}
        <div className="hidden md:flex flex-1 max-w-lg items-center h-10 border border-slate-300 focus-within:border-[#002DF9] transition-all">
          <div className="pl-3 text-slate-400">
            <Search size={16} />
          </div>
          <input 
            type="text"
            placeholder="Search talent, skills, or countries..."
            className="w-full bg-transparent px-3 text-[11px] font-bold uppercase tracking-widest text-slate-700 outline-none placeholder:text-slate-300"
          />
          <button className="h-full px-5 bg-[#002DF9] text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => item.path && navigate(item.path)}
                className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.15em] text-slate-600 hover:text-[#002DF9] transition-all py-2"
              >
                {item.name}
                {item.hasArrow && <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`} />}
              </button>

              <AnimatePresence>
                {item.children && activeDropdown === item.name && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-0 pt-2 w-64">
                    <div className="bg-white border border-slate-900 p-2 shadow-[8px_8px_0px_0px_rgba(0,45,249,0.08)]">
                      {item.children.map((child) => (
                        <div 
                          key={child.title} 
                          onClick={() => { navigate(child.path); setActiveDropdown(null); }}
                          className="p-3 hover:bg-blue-50 cursor-pointer group transition-colors border-b border-transparent hover:border-blue-100"
                        >
                          <div className="flex items-center gap-2 text-[10px] font-black text-slate-900 uppercase tracking-widest">
                            <span className="text-[#002DF9]">{child.icon}</span>
                            {child.title}
                          </div>
                          <div className="text-[9px] text-slate-400 font-bold uppercase mt-1 pl-5">{child.desc}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA ACTIONS */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate("/login")} 
            className="hidden sm:block px-5 py-2 text-[10px] font-black text-slate-900 uppercase tracking-widest hover:text-[#002DF9] transition-all"
          >
            Login
          </button>
          
          <button 
            onClick={() => navigate("/join-network")}
            className="px-6 py-2.5 bg-[#002DF9] text-white text-[10px] font-black uppercase tracking-[0.2em] border border-[#002DF9] hover:bg-white hover:text-[#002DF9] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-x-[-2px] translate-y-[-2px] hover:translate-x-0 hover:translate-y-0"
          >
            Join Network
          </button>
          
          <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 text-slate-900 border border-slate-900">
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, x: "100%" }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: "100%" }} transition={{ type: "tween" }} className="fixed inset-0 bg-white z-[200] p-10 flex flex-col">
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-black uppercase tracking-tighter italic">Altus</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 border-2 border-slate-900"><X size={24}/></button>
            </div>
            <div className="flex flex-col gap-8">
              {navItems.map(item => (
                <button 
                  key={item.name} 
                  onClick={() => { if(item.path) { navigate(item.path); setMobileMenuOpen(false); }}}
                  className="text-4xl font-black uppercase text-left tracking-tighter text-slate-900 hover:text-[#002DF9] transition-all"
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="mt-auto space-y-4">
              <button onClick={() => { navigate("/join-network"); setMobileMenuOpen(false); }} className="w-full py-4 bg-[#002DF9] text-white font-black uppercase tracking-widest">Become a Member</button>
              <button 
                onClick={() => { navigate("/login"); setMobileMenuOpen(false); }} 
                className="w-full py-4 border-2 border-slate-900 text-slate-900 font-black uppercase tracking-widest"
              >
                Sign In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}