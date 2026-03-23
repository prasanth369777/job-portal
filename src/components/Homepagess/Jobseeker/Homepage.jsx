import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight, Star, ArrowRightLeft, CheckCircle2, ChevronDown, X, Search, Loader2
} from "lucide-react";

// --- REUSABLE PROVIDER CARD ---
const ProviderCard = ({ provider }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -4 }}
    className="bg-white border border-slate-200 rounded-md p-5 shadow-sm hover:shadow-md transition-all group flex flex-col h-full relative"
  >
    <div className="flex items-start gap-4 mb-4">
      <div className="w-12 h-12 bg-white rounded border border-slate-100 flex-shrink-0 flex items-center justify-center p-2 shadow-sm">
        <img src={provider.logo || "https://cdn-icons-png.flaticon.com/512/3233/3233827.png"} alt="logo" className="w-full h-full object-contain" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-[15px] text-slate-900 flex items-center gap-1.5 group-hover:text-blue-600 transition-colors">
          {provider.name}
          <CheckCircle2 size={12} className="text-blue-500 fill-blue-500/10" />
        </h3>
      </div>
    </div>

    <p className="text-[13px] text-slate-600 leading-relaxed mb-6 line-clamp-3 flex-grow">
      {provider.description}
    </p>

    <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
      <div className="flex items-center gap-1.5">
        <Star size={14} className="text-yellow-400 fill-yellow-400" />
        <span className="text-[13px] font-bold text-slate-900">{provider.rating}</span>
        <span className="text-[12px] text-slate-400">({provider.reviews})</span>
      </div>
      <div className="flex items-center gap-3">
         <button className="text-[11px] font-bold text-slate-500 hover:text-blue-600 uppercase tracking-wider">Save</button>
         <ArrowRightLeft size={16} className="text-slate-300 cursor-pointer hover:text-blue-600" />
      </div>
    </div>
  </motion.div>
);

export default function ServiceMarketplace() {
  const navigate = useNavigate();
  const [visibleItems, setVisibleItems] = useState(15);
  const [isLoading, setIsLoading] = useState(false);
  const [openCategory, setOpenCategory] = useState("Company establishment");

  // Data generation
  const allProviders = Array.from({ length: 47 }).map((_, i) => ({
    id: i + 1,
    name: ["E-Residency Hub", "Xolo", "Magrat", "e-resident.store", "GrouHub", "1Office Estonia", "estx", "Dalanta", "TuneUp OÜ", "Unicount", "Enty.io", "B2baltics Consulting", "GTPartner.ORG", "Nordic Consult", "Expat Legal"][i % 15],
    rating: (4.3 + Math.random() * 0.7).toFixed(1),
    reviews: Math.floor(Math.random() * 200 + 30),
    description: "Special offer: 2 months free with our Pro plan. We help solopreneurs run borderless EU companies with ease and full compliance."
  }));

  const handleNextPage = () => {
    setIsLoading(true);
    // Simulate API delay
    setTimeout(() => {
      setVisibleItems(prev => prev + 15);
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="bg-white font-sans text-slate-900 antialiased min-h-screen">
      <main className="max-w-[1440px] mx-auto px-6 py-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="flex-1">
            <button onClick={() => navigate("/")} className="text-blue-600 text-[13px] font-semibold flex items-center gap-1 mb-6 hover:underline group">
              <ChevronRight size={14} className="rotate-180" /> Main page
            </button>
            <h1 className="text-[36px] font-bold text-[#002b5c] mb-2 tracking-tight leading-tight">All Services and Providers</h1>
            <p className="text-slate-500 text-[15px] max-w-2xl leading-relaxed font-medium">
              Explore the broad range of services on offer or connect with skilled providers to discuss your specific needs.
            </p>
          </div>

          <div className="w-full md:w-[400px]">
            <label className="block text-[13px] font-bold text-slate-800 mb-2">Search</label>
            <div className="relative flex items-center">
              <input 
                type="text" 
                placeholder="" 
                className="w-full border border-slate-300 rounded-md px-4 py-2.5 outline-none focus:border-blue-500 shadow-sm"
              />
              <Search size={18} className="absolute right-4 text-slate-400" />
            </div>
          </div>
        </div>

        {/* BLUE FILTER TABS */}
        <div className="flex flex-wrap items-center gap-3 mb-10 border-b border-slate-100 pb-10">
          <button className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-[13px] font-bold">Providers 47</button>
          <button className="bg-blue-50 text-blue-600 px-6 py-2.5 rounded-full text-[13px] font-bold">Packages 70</button>
          <div className="h-6 w-px bg-slate-200 mx-2" />
          {["My company type", "My target industry", "My preferred language"].map(filter => (
            <button key={filter} className="bg-blue-50 border border-transparent px-5 py-2.5 rounded-full text-[13px] font-bold text-blue-600 flex items-center gap-2">
              {filter} <ChevronDown size={14} />
            </button>
          ))}
          <div className="ml-auto flex items-center gap-2 bg-blue-50 border border-transparent px-5 py-2.5 rounded-full text-[13px] font-bold text-blue-600">
             Sort by: Rating count <ChevronDown size={14} />
          </div>
        </div>

        <div className="flex gap-12">
          {/* SIDEBAR */}
          <aside className="w-[280px] shrink-0 hidden lg:block">
            <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6">Filters</h4>
            <div className="border-t border-slate-100">
              {["Company establishment", "Business banking", "Tax & accounting", "HR & relocation"].map((cat, i) => (
                <div key={i} className="border-b border-slate-100">
                  <button 
                    onClick={() => setOpenCategory(openCategory === cat ? null : cat)}
                    className="w-full flex items-center justify-between py-4 text-[14px] font-bold text-slate-800"
                  >
                    <span>{cat}</span>
                    <ChevronDown size={16} className={openCategory === cat ? 'rotate-180' : ''} />
                  </button>
                  {openCategory === cat && i === 0 && (
                    <div className="pb-4 space-y-3 pl-1">
                       <button className="text-[12px] text-blue-600 font-bold hover:underline">Clear selection</button>
                       <label className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                          <span className="text-[13px] text-slate-600">Estonian company formation</span>
                       </label>
                       <label className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" checked className="w-4 h-4 accent-blue-600" />
                          <span className="text-[13px] text-blue-600 font-bold">Legal address & contact person</span>
                       </label>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </aside>

          {/* GRID AREA */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
               <div className="text-[13px] font-bold text-slate-500">
                  {allProviders.length} results <span className="bg-slate-100 px-3 py-1.5 rounded-full ml-2 text-slate-700">legal address & contact person <X size={12} className="inline ml-1 cursor-pointer" /></span>
               </div>
               <button className="text-[13px] font-bold text-slate-800 underline">clear all filters</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {allProviders.slice(0, visibleItems).map(provider => (
                <ProviderCard key={provider.id} provider={provider} />
              ))}
            </div>

            {/* PAGINATION */}
            <div className="mt-16 pt-10 border-t border-slate-100 flex flex-col items-center gap-8">
               <div className="flex items-center gap-3 text-[13px] font-bold text-slate-400">
                  <button className="hover:text-blue-600 flex items-center gap-1"><ChevronRight size={16} className="rotate-180"/> Previous</button>
                  <div className="flex gap-1 mx-4">
                     <span className="w-8 h-8 flex items-center justify-center bg-slate-900 text-white rounded font-bold">1</span>
                     <span className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded cursor-pointer">2</span>
                     <span className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded cursor-pointer">3</span>
                  </div>
                  <button 
                    onClick={handleNextPage} 
                    disabled={isLoading}
                    className="text-slate-800 hover:text-blue-600 flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <Loader2 size={16} className="animate-spin text-blue-600" />
                    ) : (
                      <>Next <ChevronRight size={16}/></>
                    )}
                  </button>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}