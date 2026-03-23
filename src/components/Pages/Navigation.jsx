import React, { useState } from "react";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
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
      title: "Vocational Training in Germany",
      links: [
        "Nursing (Pflegefachmann)", "IT Specialist", "Mechatronics", 
        "Automotive Technician", "Hospitality & Hotel Management", 
        "Logistics & Supply Chain", "Social Work & Education", 
        "Construction & Trades", "Electronics Engineer", "Chef & Culinary Arts"
      ]
    },
    {
      category: "Job Seekers",
      title: "Professional Careers & Placements",
      links: [
        "Software Engineering", "Frontend Developers", "Backend Developers", 
        "Healthcare Professionals", "Civil Engineering", "Mechanical Engineering", 
        "Digital Marketing", "Project Management", "Data Science", "Finance & Accounting"
      ]
    },
    {
      category: "Study Abroad",
      title: "International University Programs",
      links: [
        "Masters in Germany", "Bachelors Programs", "MBA Opportunities", 
        "Language Courses (A1-C1)", "Visa Assistance", "Scholarship Guidance", 
        "Student Accommodation", "Block Account Support"
      ]
    }
  ];

  const activeContent = megaMenuData.find(item => item.category === selectedCategory);

  return (
    <header className="w-full bg-white sticky top-0 z-[100] border-b border-gray-100" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Import Inter and Poppins from Google Fonts */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap');
      ` }} />

      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-0 h-16">
        
        {/* LEFT: LOGO & NAV */}
        <div className="flex items-center h-full">
          <div onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer mr-10 group">
            <div className="flex items-center gap-1.5">
               <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">A</div>
               {/* Branding Font: Poppins */}
               <span className="text-xl font-bold tracking-tighter text-slate-900 uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Altus<span className="text-blue-600">.</span>
               </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center h-full">
            {["Hire Talent", "Resources", "Providers", "About Us"].map((item, idx) => (
              <div 
                key={item} 
                className="h-full relative flex items-center px-4 cursor-pointer group"
                onMouseEnter={() => item === "Hire Talent" && setActiveDropdown(item)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* Interface Font: Inter */}
                <button className={`flex items-center gap-1 text-[13px] font-semibold transition-colors ${activeDropdown === item || (idx === 0 && !activeDropdown) ? "text-slate-900" : "text-slate-500 hover:text-slate-900"}`}>
                  {item} {idx === 0 && <ChevronDown size={14} className="opacity-40" />}
                </button>

                {/* Animated Blue Underline */}
                {(idx === 0 || activeDropdown === item) && (
                  <motion.div layoutId="navUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600" />
                )}

                {/* MEGA MENU CONTENT */}
                <AnimatePresence>
                  {item === "Hire Talent" && activeDropdown === item && (
                    <motion.div
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute left-[-200px] top-[100%] w-[850px] pt-0 shadow-2xl"
                    >
                      <div className="bg-white border-t border-slate-100 flex overflow-hidden min-h-[450px]">
                        {/* Mega Menu Sidebar */}
                        <div className="w-64 bg-slate-50 py-4">
                          {megaMenuData.map((cat) => (
                            <button
                              key={cat.category}
                              onMouseEnter={() => setSelectedCategory(cat.category)}
                              className={`w-full text-left px-8 py-4 text-[14px] font-bold transition-all border-r-2 ${
                                selectedCategory === cat.category 
                                ? "bg-white text-slate-900 border-blue-600 shadow-[2px_0_10px_rgba(0,0,0,0.05)]" 
                                : "text-slate-600 border-transparent hover:text-slate-900"
                              }`}
                            >
                              {cat.category}
                            </button>
                          ))}
                        </div>

                        {/* Mega Menu Links Grid */}
                        <div className="flex-1 p-10 bg-white">
                          <div className="flex items-center gap-2 mb-8 group/title cursor-pointer" onClick={() => navigate(`/${selectedCategory.toLowerCase().replace(" ", "-")}`)}>
                             {/* Category Heading: Poppins */}
                             <h4 className="text-blue-600 font-bold text-lg hover:underline" style={{ fontFamily: "'Poppins', sans-serif" }}>
                              {activeContent.title}
                             </h4>
                             <ArrowRight size={16} className="text-blue-600" />
                          </div>
                          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            {activeContent.links.map(link => (
                              <button 
                                key={link} 
                                className="text-[13px] text-left text-slate-500 hover:text-blue-600 font-medium transition-colors"
                              >
                                {link}
                              </button>
                            ))}
                          </div>
                          <button className="mt-10 text-blue-600 text-[13px] font-bold flex items-center gap-1 hover:underline">
                             See all services <ArrowRight size={14} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>

        {/* RIGHT ACTIONS */}
        <div className="flex items-center gap-6">
          <button onClick={() => navigate("/login")} className="hidden sm:block text-[13px] font-bold text-slate-900 hover:text-blue-600 transition-colors">
            Log In
          </button>

          <button className="bg-[#00d084] hover:bg-[#00b975] text-white px-6 py-2.5 rounded-sm text-[13px] font-extrabold transition-all tracking-tight shadow-md">
            Join Now
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-slate-900">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {megaMenuData.map(cat => (
                <div key={cat.category} className="font-bold text-slate-900 border-b pb-2 cursor-pointer hover:text-blue-600">
                  {cat.category}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}