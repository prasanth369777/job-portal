import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Update your import line to look like this:
import { 
  Cpu, 
  BarChart3, 
  Users, 
  ChevronRight, 
  ShieldCheck, 
  Cloud, 
  Code2, 
  Smartphone,
  PieChart,
  Megaphone,
  Search,
  PenTool,
  TrendingUp,
  Briefcase,
  Globe,
  Layout, 
  Zap    
} from 'lucide-react';

export default function ConsultingServices() {
  const [activeTab, setActiveTab] = useState('technology');

  const tabs = [
    { id: 'technology', label: 'Technology Services', icon: <Cpu size={20} /> },
    { id: 'marketing', label: 'Marketing Agency', icon: <PieChart size={20} /> },
    { id: 'management', label: 'Management Consulting', icon: <Users size={20} /> },
  ];

  const content = {
    technology: [
      { title: "Artificial Intelligence", desc: "Accelerate growth with scalable AI solutions that spark innovation and transform operations.", icon: <Cpu /> },
      { title: "Data Analytics", desc: "Transform data into real-time insights that streamline operations and enable smarter decisions.", icon: <BarChart3 /> },
      { title: "Cloud Services", desc: "Optimize performance and scalability with secure, cost-effective cloud solutions built for growth.", icon: <Cloud /> },
      { title: "Information Security", desc: "Protect your business with advanced cybersecurity strategies to manage risk and prevent threats.", icon: <ShieldCheck /> },
      { title: "Apps and Integrations", desc: "Modernize critical digital systems with custom apps and seamless integrations to drive productivity.", icon: <Smartphone /> },
      { title: "Custom Software", desc: "Scale your business with powerful, custom software solutions built for your unique needs.", icon: <Code2 /> },
    ],
    marketing: [
      { title: "Digital Strategy", desc: "Comprehensive roadmaps to dominate your market through data-driven digital positioning.", icon: <TrendingUp /> },
      { title: "Brand Identity", desc: "Create a lasting impression with visual storytelling and premium brand architecture.", icon: <PenTool /> },
      { title: "Performance Marketing", desc: "High-ROI campaigns focused on conversion, customer acquisition, and scale.", icon: <Megaphone /> },
      { title: "SEO & Content", desc: "Organic growth engines designed to increase visibility and authority in your industry.", icon: <Search /> },
      { title: "Social Architecture", desc: "Building community and engagement across global social platforms with precision.", icon: <Globe /> },
      { title: "Market Research", desc: "Deep-dive analysis into consumer behavior and competitive landscapes.", icon: <BarChart3 /> },
    ],
    management: [
      { title: "Business Strategy", desc: "Strategic planning to navigate complex markets and achieve sustainable growth.", icon: <Briefcase /> },
      { title: "Operations Design", desc: "Lean methodologies to optimize internal workflows and increase overall efficiency.", icon: <Layout /> },
      { title: "Financial Advisory", desc: "M&A support, capital planning, and risk management for enterprise stability.", icon: <BarChart3 /> },
      { title: "Talent Strategy", desc: "Optimizing human capital through high-performance culture and leadership design.", icon: <Users /> },
      { title: "Digital Transformation", desc: "Helping legacy businesses adapt and thrive in the modern technological era.", icon: <Zap /> },
      { title: "Change Management", desc: "Structured approaches to ensure smooth transitions during organizational shifts.", icon: <TrendingUp /> },
    ]
  };

  return (
    <section className="bg-[#F8FAFC] py-24 px-6 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header Area */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-bold text-slate-900 tracking-tight"
          >
            Explore Our Consulting & Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            We offer a comprehensive, customizable portfolio of services that help you solve your business challenges and achieve your strategic goals.
          </motion.p>
        </div>

        {/* The Main Container */}
        <div className="bg-white border border-slate-200 rounded-sm shadow-2xl overflow-hidden max-w-6xl mx-auto">
          
          {/* Tabs Navigation */}
          <div className="flex flex-col md:flex-row border-b border-slate-200 bg-slate-50/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 flex items-center justify-center gap-3 py-6 px-4 transition-all duration-300 outline-none
                  ${activeTab === tab.id ? "bg-white text-blue-600" : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/50"}
                `}
              >
                <span className={`${activeTab === tab.id ? "text-blue-600" : "text-slate-400"}`}>
                  {tab.icon}
                </span>
                <span className="text-sm lg:text-base font-bold tracking-tight">
                  {tab.label}
                </span>
                {/* Active Indicator Top Border */}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTabBorder"
                    className="absolute top-0 left-0 right-0 h-1 bg-blue-600" 
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content Grid */}
          <div className="p-8 lg:p-12 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-100"
              >
                {content[activeTab].map((item, index) => (
                  <div 
                    key={index} 
                    className="p-8 border-r border-b border-slate-100 hover:bg-slate-50 transition-colors group cursor-default"
                  >
                    <div className="mb-6 text-blue-600 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                      {React.cloneElement(item.icon, { size: 32 })}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Footer Action */}
            <div className="mt-12 flex justify-center">
              <button className="flex items-center gap-2 px-8 py-3 bg-white border border-slate-200 rounded-md text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm active:scale-95">
                View All {tabs.find(t => t.id === activeTab).label} <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}