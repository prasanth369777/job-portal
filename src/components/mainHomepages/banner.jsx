import React from "react";


export default function CategoryBanner() {
  const categories = [
    { id: "talent", label: "For Individuals" },
    { id: "business", label: "For Businesses" },
    { id: "universities", label: "For Universities" },
    { id: "governments", label: "For Governments" },
  ];

  return (
    <nav className="w-full bg-[#f4f7ff] border-b border-blue-100/50 relative z-50 py-2">
      <div className="max-w-[1440px] mx-auto px-4 md:px-16 overflow-x-auto no-scrollbar">
        <div className="flex items-center justify-start gap-2 h-12 min-w-max">
          {categories.map((cat) => {
            return (
              <div
                key={cat.id}
                className="relative px-6 h-10 flex items-center group cursor-default"
              >
                {/* Text Layer - Static Style */}
                <span
                  className="relative z-10 text-[12px] lg:text-[13px] font-black whitespace-nowrap uppercase tracking-tighter text-slate-500 transition-colors duration-300 group-hover:text-slate-900"
                >
                  {cat.label}
                </span>

                {/* Hover Blob - Keep for subtle visual feedback, or remove if total staticity is needed */}
                <div className="absolute inset-0 bg-blue-100/40 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out z-0" />
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </nav>
  );
}