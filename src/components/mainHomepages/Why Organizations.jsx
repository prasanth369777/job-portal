import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";

export default function VideoGrid() {
  const videos = [
    {
      name: "Precision Drilling",
    
      bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Bridgestone",

      bg: "https://images.unsplash.com/photo-1494976388531-d105809050ac?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Cleveland Cavs",
   
      bg: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Zoetis",
   
      bg: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "CSR Global",
 
      bg: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "USC",
 
      bg: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Editorial Header - Adjusted for no top logo */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter"
            >
              WHY LEADERS <br /> CHOOSE ALTUS.
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-400 text-sm font-medium max-w-xs md:mt-4 md:border-l md:border-slate-200 md:pl-6"
          >
            We partner with the world's most ambitious organizations to build high-velocity engineering teams.
          </motion.div>
        </div>

        {/* Cinematic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="relative group h-[450px] overflow-hidden border-r border-b border-slate-100 cursor-pointer rounded-none"
            >
              {/* Background with subtle Zoom */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                  src={video.bg} 
                  alt={video.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                />
                {/* Modern Color Overlay */}
                <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/20 transition-all duration-500" />
              </div>

              {/* Top Navigation-like UI inside card */}
              <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">
                 <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
                    <ArrowUpRight size={16} className="text-white" />
                 </div>
                 <span className="text-white/40 text-[10px] font-black tracking-widest uppercase">
                    0{i + 1}
                 </span>
              </div>

              {/* Centered Text with hover lift */}
              <div className="absolute inset-0 flex items-center justify-center px-16 z-20 pointer-events-none">
                <motion.div 
                  whileHover={{ y: -10 }}
                  className="transition-all duration-500 transform group-hover:scale-105"
                >
                    <h3 className="text-4xl font-black text-white tracking-tighter drop-shadow-2xl text-center leading-none">{video.logo}</h3>
                </motion.div>
              </div>

              {/* Interactive Bottom Label */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                    <Play size={18} fill="currentColor" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-white font-black text-xs uppercase tracking-[0.2em] mb-1">Watch Film</p>
                    <div className="h-[1px] w-0 group-hover:w-full bg-blue-600 transition-all duration-700" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}