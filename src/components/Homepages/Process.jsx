import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function HiringProcess() {
  const steps = [
    {
      id: 1,
      title: "Consult with Altus Experts",
      desc: "Our industry veterans work with you to deeply understand your technical requirements, team culture, and business goals.",
    },
    {
      id: 2,
      title: "Match with Elite Talent",
      desc: "Within 24-48 hours, we introduce you to hand-selected experts from our vetted network specifically tailored to your project.",
    },
    {
      id: 3,
      title: "Risk-Free Trial Period",
      desc: "Work with your new team member on a trial basis. You only pay if you are 100% satisfied with their performance and integration.",
    },
  ];

  // Animation variants for the circles
  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.3, duration: 0.5, type: "spring" }
    })
  };

  // Animation variants for the connecting lines
  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: (i) => ({
      pathLength: 1,
      transition: { delay: i * 0.3 + 0.2, duration: 0.8, ease: "easeInOut" }
    })
  };

  return (
    <section className="bg-white py-24 px-6 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight"
          >
            Hiring Made Easy
          </motion.h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full mx-auto mt-6" />
        </div>

        {/* Process Diagram Container */}
        <div className="relative">
          
          {/* SVG Background Lines - Desktop Only */}
          <div className="hidden lg:block absolute top-[50px] left-0 w-full h-[2px] z-0 px-[15%]">
            <svg width="100%" height="20" viewBox="0 0 800 20" fill="none" preserveAspectRatio="none">
              <motion.path 
                d="M0,10 L800,10" 
                stroke="#3B82F6" 
                strokeWidth="2" 
                strokeDasharray="8 8"
                variants={lineVariants}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
              {/* Arrow Heads */}
              <motion.path d="M390,2 L400,10 L390,18" stroke="#3B82F6" strokeWidth="2" variants={lineVariants} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} />
              <motion.path d="M790,2 L800,10 L790,18" stroke="#3B82F6" strokeWidth="2" variants={lineVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} />
            </svg>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center text-center group">
                
                {/* Interaction Circle */}
                <motion.div
                  custom={index}
                  variants={circleVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, backgroundColor: "#eff6ff" }}
                  className="w-24 h-24 rounded-full border-2 border-blue-600 bg-white flex items-center justify-center text-2xl font-bold text-blue-600 mb-8 shadow-sm transition-colors duration-300 group-hover:shadow-lg group-hover:shadow-blue-100"
                >
                  {step.id}
                </motion.div>

                {/* Content Area */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-[15px] leading-relaxed font-medium max-w-sm mx-auto">
                    {step.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-20 flex justify-center"
        >
          <button className="group flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-sm uppercase tracking-[0.2em] hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-200 transition-all active:scale-95">
            Start Your Engagement <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}