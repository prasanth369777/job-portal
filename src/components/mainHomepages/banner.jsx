import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Users, Building2, Handshake, TrendingUp } from "lucide-react";

export default function CategoryBanner() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setIsCollapsed(true);
    } else {
      setIsCollapsed(false);
    }
  });

  const categories = [
    { id: "employers", label: "Employers", icon: <Users size={14} /> },
    { id: "institutions", label: "Institutions", icon: <Building2 size={14} /> },
    { id: "agents", label: "Agents", icon: <Handshake size={14} /> },
    { id: "investor", label: "Investor", icon: <TrendingUp size={14} /> },
  ];

  return (
    /* Increased px-0 to px-4 to move it a 'little bit left' from the edge */
    <div className="hidden md:flex fixed top-24 right-0 z-[60] justify-end pointer-events-none px-4 left-0">
      <motion.nav
        initial={false}
        animate={{
          width: isCollapsed ? "130px" : "620px",
          height: isCollapsed ? "42px" : "48px",
          borderRadius: "10px", // Restored rounded corners on all sides
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-white/90 backdrop-blur-xl border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.12)] pointer-events-auto flex items-center overflow-hidden relative"
      >
        {/* LARGE VIEW: FULL LABELS */}
        <motion.div
          animate={{ opacity: isCollapsed ? 0 : 1, x: isCollapsed ? 20 : 0 }}
          className={`flex items-center justify-around w-full px-3 whitespace-nowrap ${isCollapsed ? 'pointer-events-none' : ''}`}
        >
          {categories.map((cat, idx) => (
            <React.Fragment key={cat.id}>
              <button className="flex items-center gap-1.5 group transition-all">
                <span className="text-blue-600 opacity-60 group-hover:opacity-100 transition-opacity">
                  {cat.icon}
                </span>
                <span className="text-[11px] font-bold text-slate-600 group-hover:text-blue-600 transition-colors uppercase tracking-wider">
                  {cat.label}
                </span>
              </button>
              {idx !== categories.length - 1 && (
                <div className="h-3 w-[1px] bg-slate-200 mx-1" />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* COLLAPSED VIEW */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isCollapsed ? 1 : 0, x: isCollapsed ? 0 : -20 }}
          className="absolute inset-0 flex items-center justify-center gap-1.5 px-3 pointer-events-none"
        >
          <Menu size={14} className="text-blue-600" />
          <span className="text-[11px] font-bold text-slate-800 uppercase tracking-tight">Partners</span>
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-blue-50/20 to-white/0 pointer-events-none" />
      </motion.nav>
    </div>
  );
}