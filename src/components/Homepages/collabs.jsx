import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Newspaper, Presentation } from 'lucide-react';

export default function Collaborations() {
  const collabs = [
    {
      brand: "Motorola",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Motorola_logo.svg/1200px-Motorola_logo.svg.png",
      title: "The Talent Ecosystem: An Inside Look at Scalable Hiring",
      tag: "Case Study",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
      accent: "hover:shadow-blue-500/20",
      icon: <Newspaper size={18} />
    },
    {
      brand: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
      title: "Industry Perspective: Team Alignment and Agile Strategy",
      tag: "Expert Talk",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
      accent: "hover:shadow-indigo-500/20",
      icon: <PlayCircle size={18} />
    },
    {
      brand: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      title: "Actionable Insights: The On-demand Business Model",
      tag: "Whitepaper",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800",
      accent: "hover:shadow-teal-500/20",
      icon: <Presentation size={18} />
    }
  ];

  return (
    <section className="bg-white py-24 px-6 lg:px-16 font-sans overflow-hidden">
      
      {/* Noise Filter SVG for Glass Effect */}
      <svg className="hidden">
        <filter id="glass-noise-collab">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer><feFuncA type="linear" slope="0.03" /></feComponentTransfer>
          <feComposite operator="in" in2="SourceGraphic" />
        </filter>
      </svg>

      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold text-slate-900 tracking-tight"
          >
            Collaborations With <span className="text-blue-600">Leading Brands</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto font-medium"
          >
            We partner with top-tier global companies to imagine the future of work and high-performance teams.
          </motion.p>
        </div>

        {/* Collaborations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {collabs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative flex flex-col rounded-[2.5rem] overflow-hidden border border-slate-100 bg-white transition-all duration-500 hover:-translate-y-2 shadow-sm ${item.accent}`}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-sm border border-white/20">
                  <span className="text-blue-600">{item.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800">{item.tag}</span>
                </div>
              </div>

              {/* Glassy Content Section */}
              <div className="relative p-8 flex-1 flex flex-col justify-between">
                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ filter: 'url(#glass-noise-collab)' }} />
                
                <div className="space-y-4 relative z-10">
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <div className="h-0.5 w-12 bg-slate-100 group-hover:w-24 group-hover:bg-blue-600 transition-all duration-500" />
                </div>

                <div className="mt-12 flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase text-slate-400">Altus ×</span>
                    <img src={item.logo} alt={item.brand} className="h-5 md:h-6 object-contain grayscale group-hover:grayscale-0 transition-all opacity-80" />
                  </div>
                  
                  <button className="flex items-center gap-2 text-[11px] font-black text-blue-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    Learn More <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">Ready to build your ecosystem?</p>
          <button className="bg-[#00d084] text-white px-12 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-emerald-100 hover:bg-[#00b975] hover:shadow-emerald-200 transition-all active:scale-95 flex items-center gap-3">
            Hire Top Talent <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}