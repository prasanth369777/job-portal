import React from "react";
import { motion } from "framer-motion";

export default function CategoryBanner({ activeTab, setActiveTab }) {
  const categories = [
    { id: "talent", label: "For Individuals" },
    { id: "business", label: "For Businesses" },
    { id: "universities", label: "For Universities" },
    { id: "governments", label: "For Governments" },
  ];

  return (
    <nav className="w-full bg-[#0a0a0a] border-b border-white/5 relative z-50">
      {/* Tailwind Utility Hack: 
        - overflow-x-auto allows swiping on mobile.
        - no-scrollbar (optional) hides the scrollbar track for a cleaner look.
      */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 lg:px-16 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-start gap-6 md:gap-8 lg:gap-12 h-14 lg:h-16 min-w-max">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="relative h-full flex items-center group outline-none transition-transform active:scale-95"
              >
                <span
                  className={`text-[11px] md:text-xs lg:text-[13px] font-bold transition-colors duration-300 whitespace-nowrap uppercase tracking-wider ${
                    isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                  }`}
                >
                  {cat.label}
                </span>

                {/* The Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-[2px] md:h-[3px] bg-white rounded-t-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Global CSS for hiding scrollbars while maintaining functionality */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </nav>
  );
}