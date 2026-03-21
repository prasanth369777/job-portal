import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom"; // 1. Added for redirection
import {
  ChevronRight, Star, ArrowRightLeft, CheckCircle2, ChevronDown,Loader2
} from "lucide-react";

// --- REUSABLE PROVIDER CARD ---
const ProviderCard = ({ provider }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -4 }}
    className="bg-white border border-slate-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all group flex flex-col h-full"
  >
    <div className="flex items-start gap-4 mb-4">
      <div className="w-12 h-12 bg-slate-50 rounded border border-slate-100 flex-shrink-0 flex items-center justify-center p-1">
        <div className={`w-full h-full rounded ${provider.color || 'bg-slate-200'} flex items-center justify-center text-[10px] font-bold text-white uppercase`}>
          {provider.name.substring(0, 2)}
        </div>
      </div>
      <div>
        <h3 className="font-bold text-[15px] text-slate-900 group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
          {provider.name}
          <div className="w-3.5 h-3.5 bg-blue-500 rounded-full flex items-center justify-center">
            <CheckCircle2 size={10} className="text-white" />
          </div>
        </h3>
      </div>
    </div>

    <p className="text-[13px] text-slate-500 leading-relaxed mb-6 line-clamp-3 flex-grow">
      {provider.description}
    </p>

    <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
      <div className="flex items-center gap-1">
        <Star size={14} className="text-yellow-400 fill-yellow-400" />
        <span className="text-sm font-bold text-slate-900">{provider.rating}</span>
        <span className="text-xs text-slate-400">({provider.reviews})</span>
      </div>
      <button className="text-slate-300 hover:text-blue-600 transition-colors">
        <ArrowRightLeft size={16} />
      </button>
    </div>
  </motion.div>
);

export default function ServiceMarketplace() {
  const navigate = useNavigate(); // Initialize navigation
  const [visibleItems, setVisibleItems] = useState(15);
  const [isLoading, setIsLoading] = useState(false);
  const [openCategory, setOpenCategory] = useState("Company establishment");

  // Generate 30 total providers to demonstrate "Next 15"
  const allProviders = Array.from({ length: 30 }).map((_, i) => ({
    id: i + 1,
    name: ["Xolo", "E-Residency Hub", "Magrat", "GrouHub", "1Office", "Dalanta", "estx", "TuneUp", "Unicount", "B2baltics", "Enty.io", "Nordic Consult", "Silva Hunt", "Gate to Baltics", "Sunny Business", "Alpha Corp", "Beta Services", "Nexus Legal", "Cloud Tax", "Euro Link", "Baltic Path", "Global Node", "Swift Form", "Smart Biz", "E-Flow", "Unity Hub", "Peak Accounting", "Core Services", "Venture Est", "Zenith"][i] || `Provider ${i + 1}`,
    rating: (4.5 + Math.random() * 0.5).toFixed(1),
    reviews: Math.floor(Math.random() * 300 + 20),
    color: ["bg-orange-400", "bg-blue-400", "bg-indigo-400", "bg-emerald-400", "bg-slate-800", "bg-red-400", "bg-teal-400", "bg-purple-400"][i % 8],
    description: "Professional services providing full compliance, legal address, and digital accounting for global entrepreneurs looking to scale in Europe."
  }));

  const handleNextPage = () => {
    if (visibleItems < allProviders.length) {
      setIsLoading(true);
      setTimeout(() => {
        setVisibleItems(prev => prev + 15);
        setIsLoading(false);
        window.scrollTo({ top: 400, behavior: 'smooth' });
      }, 800);
    }
  };

  const sidebarCategories = [
    { 
      name: "Company establishment", 
      options: ["Company formation (including state fee)", "Legal address & contact person", "e-Residency assistance"],
      selected: "Legal address & contact person"
    },
    { name: "Business banking", options: ["Online banking", "Traditional banks", "Fintech solutions"] },
    { name: "Tax & accounting", options: ["Monthly bookkeeping", "Annual reports", "Tax consulting"] },
    { name: "Administration & e-services", options: ["Virtual office", "Mail forwarding", "Digital signature"] },
    { name: "HR & relocation", options: ["Recruitment", "Work permits", "Relocation packages"] },
    { name: "Insurance", options: ["Business insurance", "Health insurance"] },
  ];

  return (
    <div className="bg-[#f8f9fc] font-sans text-slate-900 antialiased min-h-screen">
      <main className="max-w-[1400px] mx-auto px-6 py-8">
        
        {/* HEADER SECTION */}
        <div className="mb-8">
          {/* 2. Main Page Redirection */}
          <button 
            onClick={() => navigate("/")} 
            className="text-blue-600 text-[13px] font-semibold flex items-center gap-1 mb-6 hover:underline group"
          >
            <ChevronRight size={14} className="rotate-180 group-hover:-translate-x-1 transition-transform" /> 
            Main page
          </button>
          <h1 className="text-[32px] font-bold text-slate-900 mb-2 tracking-tight">All Services and Providers</h1>
          <p className="text-slate-500 text-sm max-w-2xl">
            Explore the broad range of services on offer or connect with skilled providers to discuss your specific needs.
          </p>
        </div>

        {/* TOP FILTER BAR */}
        <div className="flex flex-wrap items-center gap-3 mb-8 border-b border-slate-200 pb-8">
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-[13px] font-bold flex items-center gap-2">Providers {allProviders.length}</button>
          <button className="bg-white border border-slate-200 text-blue-600 px-5 py-2.5 rounded-full text-[13px] font-bold">Packages 63</button>
          <div className="h-6 w-px bg-slate-300 mx-2" />
          {["My company type", "My target industry", "My preferred language"].map(filter => (
            <button key={filter} className="bg-white border border-slate-200 px-4 py-2.5 rounded-full text-[13px] font-semibold text-slate-600 flex items-center gap-2 hover:border-slate-400 transition-colors">
              {filter} <ChevronDown size={14} className="text-slate-400" />
            </button>
          ))}
        </div>

        <div className="flex gap-10">
          {/* SIDEBAR */}
          <aside className="w-64 shrink-0 hidden lg:block">
            <div className="sticky top-24">
              <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6">Filters</h4>
              <div className="space-y-0 border-t border-slate-200">
                {sidebarCategories.map((cat, i) => (
                  <div key={i} className="border-b border-slate-200">
                    <button 
                      onClick={() => setOpenCategory(openCategory === cat.name ? null : cat.name)}
                      className="w-full flex items-center justify-between py-4 text-[14px] font-bold text-slate-800 hover:text-blue-600 transition-colors"
                    >
                      <span>{cat.name}</span>
                      <ChevronDown size={16} className={`transition-transform duration-300 ${openCategory === cat.name ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {openCategory === cat.name && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pb-4">
                          {cat.options.map(opt => (
                            <label key={opt} className="flex items-start gap-3 py-1.5 cursor-pointer group">
                              <div className={`mt-0.5 w-4 h-4 border rounded flex items-center justify-center ${cat.selected === opt ? 'bg-blue-600 border-blue-600' : 'bg-white border-slate-300'}`}>
                                {cat.selected === opt && <div className="w-1.5 h-1.5 bg-white rounded-sm" />}
                              </div>
                              <span className={`text-[13px] ${cat.selected === opt ? 'text-slate-900 font-semibold' : 'text-slate-500'}`}>{opt}</span>
                            </label>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* GRID AREA */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
               <div className="text-[13px] font-semibold text-slate-500">
                  Showing {visibleItems} of {allProviders.length} results
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              {allProviders.slice(0, visibleItems).map(provider => (
                <ProviderCard key={provider.id} provider={provider} />
              ))}
            </div>

            {/* 3. PAGINATION / LOAD MORE LOGIC */}
            <div className="mt-12 flex flex-col items-center gap-6 border-t border-slate-100 pt-10">
               {visibleItems < allProviders.length ? (
                 <button 
                  onClick={handleNextPage}
                  disabled={isLoading}
                  className="bg-slate-900 text-white px-10 py-3 rounded-lg font-bold text-[14px] flex items-center gap-3 hover:bg-blue-600 transition-all active:scale-95 disabled:opacity-50"
                 >
                   {isLoading ? <Loader2 size={18} className="animate-spin" /> : ""}
                   {!isLoading && <ChevronRight size={18} />}
                 </button>
               ) : (
                 <p className="text-slate-400 font-bold text-sm italic">You've reached the end of the list.</p>
               )}
             
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}