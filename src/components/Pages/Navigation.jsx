import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

/**
 * REFINED NAV LOGIC:
 * 1. Always Visible: Removed the translate-y-full logic so it never disappears.
 * 2. Dynamic Elevation: Adds a stronger shadow and border when the user scrolls.
 * 3. Hover Scaling: Capsules now expand slightly on hover for a tactile feel.
 */

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the "scrolled" state after 20px of movement
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-6 w-full z-50 flex justify-center px-6 transition-all duration-500 ease-in-out`}
    >
      <div className="flex items-center gap-4">
        
        {/* Logo Capsule */}
        <div className={`
          flex items-center gap-2 px-6 py-3 rounded-full cursor-pointer transition-all duration-300 group
          ${isScrolled 
            ? "bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg shadow-slate-200/40" 
            : "bg-white/40 backdrop-blur-md border border-white/20 shadow-sm"
          }
          hover:scale-105 hover:bg-white/90 active:scale-95
        `}>
          <div className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center text-[10px] font-black text-white italic">
            O
          </div>
          <span className="text-sm font-black text-slate-900 tracking-tighter uppercase">Portal</span>
        </div>

        {/* Navigation Links Capsule */}
        <div className={`
          hidden lg:flex items-center gap-8 px-10 py-3 rounded-full transition-all duration-500
          ${isScrolled 
            ? "bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg shadow-slate-200/40" 
            : "bg-white/40 backdrop-blur-md border border-white/20 shadow-sm"
          }
          hover:shadow-xl hover:shadow-slate-200/50
        `}>
          {[
            { name: "Find Jobs", hasArrow: false },
            { name: "Companies", hasArrow: false },
            { name: "Coverage", hasArrow: true },
            { name: "Products", hasArrow: true },
            { name: "Pricing", hasArrow: false }
          ].map((item) => (
            <a 
              key={item.name}
              href="/" 
              className="text-[13px] font-bold text-slate-500 hover:text-slate-900 transition-all flex items-center gap-1.5 whitespace-nowrap hover:-translate-y-0.5"
            >
              {item.name}
              {item.hasArrow && <ChevronDown size={14} strokeWidth={3} className="text-slate-400 group-hover:text-slate-900" />}
            </a>
          ))}
        </div>

        {/* Action Buttons Capsule */}
        <div className={`
          flex items-center gap-2 p-1.5 rounded-full transition-all duration-500
          ${isScrolled 
            ? "bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg shadow-slate-200/40" 
            : "bg-white/40 backdrop-blur-md border border-white/20 shadow-sm"
          }
          hover:scale-[1.02]
        `}>
          <button className="px-6 py-2 text-[13px] font-bold text-slate-700 hover:text-slate-900 transition-colors">
            Log In
          </button>
          <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-[13px] font-black tracking-tight hover:bg-slate-800 hover:shadow-xl transition-all active:scale-95 shadow-lg">
            Get started
          </button>
        </div>

      </div>
    </div>
  );
}