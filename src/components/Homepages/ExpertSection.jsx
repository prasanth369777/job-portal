import React from 'react';
import { useDriveCMS } from '../../components/utils/driveCMS';
import { motion } from 'framer-motion';

const SHEET_URL = "https://docs.google.com/spreadsheets/d/1As6yglRY7i_YhBpAcurdQ0y9vIQ7MSBbQksfKBc0ko0/export?format=csv";

export default function ExpertSection() {
  const { data: experts, loading } = useDriveCMS(SHEET_URL);

  return (
    <section className="py-24 px-6 lg:px-16 bg-white relative">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header with Sync Status */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className={`relative flex h-2 w-2`}>
              {!loading && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              )}
              <span className={`relative inline-flex rounded-full h-2 w-2 ${loading ? 'bg-slate-300' : 'bg-emerald-500'}`}></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              {loading ? 'Syncing Altus Cloud...' : 'Live System Active'}
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">Meet the Experts</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading ? (
            // Skeleton State
            [1, 2, 3].map(i => (
              <div key={i} className="h-[450px] bg-slate-50 rounded-[2.5rem] animate-pulse border border-slate-100" />
            ))
          ) : (
            experts.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white p-2 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Area */}
                <div className="relative h-64 overflow-hidden rounded-[2.5rem] mb-6">
                   <img 
                    src={exp.ImageURL} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                    alt={exp.Name} 
                   />
                   <div className="absolute bottom-4 left-4 bg-blue-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase italic">Altus Expert</div>
                </div>

                {/* Content Area */}
                <div className="px-6 pb-8 pt-2">
                  <h4 className="text-2xl font-bold text-slate-900 leading-tight">{exp.Name}</h4>
                  <p className="text-blue-600 font-bold text-sm uppercase tracking-wider mt-1">{exp.Role}</p>
                  <p className="text-slate-500 text-sm mt-4 leading-relaxed font-medium line-clamp-3">
                    {exp.Bio}
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}