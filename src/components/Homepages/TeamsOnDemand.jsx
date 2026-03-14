import React from "react";
import { motion } from "framer-motion";
import { 
  ClockIcon, 
  CheckCircleIcon, 
  ArrowTrendingUpIcon, 
  ShieldCheckIcon,
  CheckBadgeIcon 
} from "@heroicons/react/24/outline";

export default function BuildTeamsSection() {
  const features = [
    {
      title: "Hire Quickly",
      desc: "Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.",
      icon: <ClockIcon className="w-6 h-6 text-gray-300" />,
    },
    {
      title: "The Top 3%",
      desc: "Every applicant to the Altus network is rigorously tested and vetted. Our highly selective process leads to a 98% success rate.",
      icon: <CheckCircleIcon className="w-6 h-6 text-gray-300" />,
    },
    {
      title: "Leading the Future",
      desc: "Our network is ready for tomorrow's business challenges by embracing advanced and specialized skills including AI.",
      icon: <ArrowTrendingUpIcon className="w-6 h-6 text-gray-300" />,
    },
    {
      title: "A Level Above",
      desc: "Every single freelancer in our global network embodies the highest levels of integrity and communication.",
      icon: <ShieldCheckIcon className="w-6 h-6 text-gray-300" />,
    },
  ];

  const experts = [
    {
      name: "Andy Shanks",
      role: "Product Manager",
      img: "https://i.pravatar.cc/300?u=andy",
      prevLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      initialY: -40
    },
    {
      name: "Manali Das",
      role: "Project Manager",
      img: "https://i.pravatar.cc/300?u=manali",
      prevLogo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      initialY: 0
    },
    {
      name: "Stephen Lindauer",
      role: "React Developer",
      img: "https://i.pravatar.cc/300?u=stephen",
      prevLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
      initialY: 40
    },
  ];

  return (
    <section className="bg-white py-24 px-6 lg:px-16 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-12">
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-4xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight"
            >
              Build Amazing Teams, <br /> On Demand
            </motion.h2>
            <p className="text-lg text-slate-500 font-medium">
              Quickly assemble the teams you need, exactly when you need them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {features.map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4 group"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-blue-600 group-hover:shadow-lg group-hover:shadow-blue-200 transition-all duration-300">
                  <span className="group-hover:text-white transition-colors">{f.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900">{f.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT: Staggered Floating Grid */}
        <div className="relative flex flex-wrap justify-center items-center lg:h-[700px] gap-6">
          {experts.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: exp.initialY + 50 }}
              whileInView={{ opacity: 1, y: exp.initialY }}
              whileHover={{ y: exp.initialY - 15, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
              className="bg-white border border-slate-100 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] p-0 w-[280px] relative z-10 overflow-hidden group"
            >
              {/* Expert Image with A-Tag */}
              <div className="relative h-[260px] overflow-hidden">
                <img src={exp.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={exp.name} />
                <div className="absolute bottom-0 left-0 w-10 h-10 bg-blue-600 flex items-center justify-center rounded-tr-2xl shadow-lg">
                   <span className="text-white text-xs font-black italic">A</span>
                </div>
              </div>

              {/* Expert Details */}
              <div className="p-8 space-y-6">
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-blue-600 leading-tight">{exp.name}</h4>
                  <div className="flex items-center gap-2">
                    <CheckBadgeIcon className="w-4 h-4 text-emerald-500" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Verified Elite</span>
                  </div>
                  <p className="text-sm font-bold text-slate-700">{exp.role}</p>
                </div>

                <div className="pt-5 border-t border-slate-50">
                  <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">Previous Impact</p>
                  <img src={exp.prevLogo} className="h-6 object-contain opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt="Company" />
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Subtle Background Shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[85%] bg-blue-50/50 -z-10 rounded-[4rem] rotate-3" />
        </div>
      </div>
    </section>
  );
}