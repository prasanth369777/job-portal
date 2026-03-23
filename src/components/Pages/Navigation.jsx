import React, { useState } from "react";
import { ChevronDown, Menu, X,Search, Globe, User, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Ausbildung");
  const navigate = useNavigate();

  const megaMenuData = [
    {
      category: "Ausbildung",
      title: "Vocational Training",
      links: ["Nursing", "IT Specialist", "Mechatronics", "Automotive", "Hospitality", "Logistics", "Social Work"]
    },
    {
      category: "Job Seekers",
      title: "Professional Careers",
      links: ["Software Engineering", "Healthcare", "Engineering", "Digital Marketing", "Management", "Data Science"]
    },
    {
      category: "Study Abroad",
      title: "University Programs",
      links: ["Masters", "Bachelors", "MBA", "Language Courses", "Visa Assistance", "Housing"]
    }
  ];

  const activeContent = megaMenuData.find(item => item.category === selectedCategory);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-[100]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Import Inter and Poppins */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600&display=swap');
      ` }} />

      <div className="max-w-[1440px] mx-auto flex items-center h-14 px-4 md:px-8">
        
        {/* LEFT: IBM STYLE LOGO */}
        <div onClick={() => navigate("/")} className="flex items-center gap-4 cursor-pointer mr-6">
          <div className="flex flex-col gap-[2px]">
            <div className="w-10 h-[3px] bg-slate-900" />
            <div className="w-10 h-[3px] bg-slate-900" />
            <div className="w-10 h-[3px] bg-slate-900" />
            <div className="w-10 h-[3px] bg-slate-900" />
          </div>
          <span className="text-[10px] text-slate-400 font-bold vertical-line pl-4 border-l border-slate-200 uppercase tracking-widest hidden md:block">
            Altus Career
          </span>
        </div>

        {/* CENTER NAV: MINIMALIST */}
        <nav className="hidden lg:flex items-center h-full gap-2">
          {["Hire Talent", "Resources", "Providers", "About Us"].map((item, idx) => (
            <div 
              key={item} 
              className="h-full relative flex items-center px-3 cursor-pointer group"
              onMouseEnter={() => item === "Hire Talent" && setActiveDropdown(item)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-[14px] text-slate-600 hover:text-slate-900 transition-colors">
                {item} {idx === 0 && <ChevronDown size={14} className="mt-[2px]" />}
              </button>

              {/* MEGA MENU */}
              <AnimatePresence>
                {item === "Hire Talent" && activeDropdown === item && (
                  <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-0 top-[100%] w-[600px] bg-white border border-gray-200 shadow-2xl p-6"
                  >
                    <div className="flex gap-10">
                      <div className="w-1/3 flex flex-col gap-2">
                        {megaMenuData.map((cat) => (
                          <button
                            key={cat.category}
                            onMouseEnter={() => setSelectedCategory(cat.category)}
                            className={`text-left text-[14px] py-1 border-b-2 transition-all ${
                              selectedCategory === cat.category ? "border-blue-600 text-blue-600 font-semibold" : "border-transparent text-slate-500"
                            }`}
                          >
                            {cat.category}
                          </button>
                        ))}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[12px] uppercase font-bold text-slate-400 mb-4 tracking-widest">{activeContent.title}</h4>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {activeContent.links.map(link => (
                            <button key={link} className="text-[13px] text-left text-slate-600 hover:text-blue-600">
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

        {/* RIGHT: UTILITY ICONS (Match IBM image) */}
        <div className="ml-auto flex items-center gap-5 text-slate-600">
          <Search size={20} className="cursor-pointer hover:text-slate-900" />
          <MessageSquare size={20} className="cursor-pointer hover:text-slate-900 hidden sm:block" />
          <Globe size={20} className="cursor-pointer hover:text-slate-900 hidden sm:block" />
          <div className="h-5 w-[1px] bg-slate-200" />
          <User size={20} className="cursor-pointer hover:text-slate-900" />
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden">
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
            className="lg:hidden bg-slate-50 border-t border-gray-100"
          >
            <div className="p-6 space-y-4">
              {megaMenuData.map(cat => (
                <div key={cat.category} className="text-slate-900 font-medium">{cat.category}</div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}