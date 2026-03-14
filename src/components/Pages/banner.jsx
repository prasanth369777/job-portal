import React from "react";
import { motion } from "framer-motion";

export default function CategoryBanner({ activeTab, setActiveTab }) {
  // Categories matching your image
  const categories = [
    { id: "talent", label: "For Individuals" },
    { id: "business", label: "For Businesses" },
    { id: "universities", label: "For Universities" },
    { id: "governments", label: "For Governments" },
  ];

  return (
    <nav className="w-full bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-center lg:justify-start gap-8 lg:gap-12 h-14 lg:h-16">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="relative h-full flex items-center group outline-none"
              >
                <span
                  className={`text-xs lg:text-[13px] font-bold transition-colors duration-300 whitespace-nowrap ${
                    isActive ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                  }`}
                >
                  {cat.label}
                </span>

                {/* The Active Indicator (White underline from image) */}
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-white rounded-t-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}