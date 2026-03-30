import React from "react";
import { motion } from "framer-motion";
import { 
  Search, ChevronRight, ArrowRight, 
  CheckCircle, Globe, GraduationCap, Laptop, 
  HeartPulse, Car, Building2, Utensils 
} from "lucide-react";

const SectorCard = ({ sector }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start text-left group cursor-pointer"
  >
    <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-[#3d5afe] mb-4 group-hover:bg-[#3d5afe] group-hover:text-white transition-colors duration-300">
      {sector.icon}
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2 font-poppins">{sector.title}</h3>
    <p className="text-sm text-gray-600 mb-4 line-clamp-2 font-inter">
      {sector.description}
    </p>
    <div className="mt-auto flex items-center text-xs font-bold text-[#3d5afe] uppercase tracking-wider font-poppins">
      View Details <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
    </div>
  </motion.div>
);

export default function AusbildungStudyfeeds() {
  const sectors = [
    { title: "Nursing & Healthcare", description: "In-demand roles in hospitals and elderly care with high stipends.", icon: <HeartPulse size={24} /> },
    { title: "Automotive Technology", description: "Work with top German brands like BMW, Mercedes, and Audi.", icon: <Car size={24} /> },
    { title: "IT & Digital Media", description: "Focus on software development, system integration, and data science.", icon: <Laptop size={24} /> },
    { title: "Hospitality & Tourism", description: "Management roles in luxury hotels and global tourism chains.", icon: <Utensils size={24} /> },
    { title: "Construction & Civil", description: "Architecture, planning, and skilled craftsmanship in building.", icon: <Building2 size={24} /> },
    { title: "Business Management", description: "Office management, industrial clerking, and international trade.", icon: <Globe size={24} /> },
    { title: "Nursing & Healthcare", description: "In-demand roles in hospitals and elderly care with high stipends.", icon: <HeartPulse size={24} /> },
    { title: "Automotive Technology", description: "Work with top German brands like BMW, Mercedes, and Audi.", icon: <Car size={24} /> },
    { title: "IT & Digital Media", description: "Focus on software development, system integration, and data science.", icon: <Laptop size={24} /> },
    { title: "Hospitality & Tourism", description: "Management roles in luxury hotels and global tourism chains.", icon: <Utensils size={24} /> },
    { title: "Construction & Civil", description: "Architecture, planning, and skilled craftsmanship in building.", icon: <Building2 size={24} /> },
    { title: "Business Management", description: "Office management, industrial clerking, and international trade.", icon: <Globe size={24} /> },
    { title: "Nursing & Healthcare", description: "In-demand roles in hospitals and elderly care with high stipends.", icon: <HeartPulse size={24} /> },
    { title: "Automotive Technology", description: "Work with top German brands like BMW, Mercedes, and Audi.", icon: <Car size={24} /> },
    { title: "IT & Digital Media", description: "Focus on software development, system integration, and data science.", icon: <Laptop size={24} /> },
    { title: "Hospitality & Tourism", description: "Management roles in luxury hotels and global tourism chains.", icon: <Utensils size={24} /> },
    { title: "Construction & Civil", description: "Architecture, planning, and skilled craftsmanship in building.", icon: <Building2 size={24} /> },
    { title: "Business Management", description: "Office management, industrial clerking, and international trade.", icon: <Globe size={24} /> },
  ];

  const quickFacts = [
    "100% Free Education",
    "Monthly Stipend (€800 - €1,200)",
    "Guaranteed Work Contract",
    "No Blocked Account Required",
  ];

  return (
    <div className="bg-[#f8faff] antialiased">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800;900&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      ` }} />
      
      {/* HEADER SECTION - CONTAINER INCREASED */}
      <section className="bg-white border-b border-gray-200 pt-16 pb-12 font-inter">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <nav className="flex gap-2 text-xs font-semibold text-gray-400 mb-6 uppercase tracking-widest font-poppins">
                <span>Home</span> / <span className="text-[#3d5afe]">Ausbildung</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight font-poppins tracking-tight">
                Vocational Training (Ausbildung) <br /> 
                <span className="text-[#3d5afe]">in Germany 2026</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-inter max-w-2xl">
                Earn while you learn. Ausbildung is a unique "Dual Education" system where you get paid a monthly salary while studying for a professional degree in Germany.
              </p>
              
              <div className="flex flex-wrap gap-4 font-poppins">
                <button className="bg-[#3d5afe] text-white px-10 py-4 font-bold rounded-sm hover:bg-blue-700 transition-all flex items-center gap-2 text-sm uppercase tracking-wide">
                  Apply Now <ChevronRight size={18} />
                </button>
                <button className="bg-white text-gray-700 border border-gray-300 px-10 py-4 font-bold rounded-sm hover:bg-gray-50 transition-all text-sm uppercase tracking-wide">
                  Eligibility Checker
                </button>
              </div>
            </div>

            {/* Quick Summary Box */}
            <div className="bg-[#001b3d] p-10 text-white rounded-sm shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                 <GraduationCap size={160} />
               </div>
               <h2 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4 font-poppins">At a Glance</h2>
               <ul className="space-y-5 font-inter">
                 {quickFacts.map((fact, i) => (
                   <li key={i} className="flex items-center gap-4 text-base font-medium">
                     <CheckCircle size={22} className="text-green-400" /> {fact}
                   </li>
                 ))}
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH & FILTERS BAR - CONTAINER INCREASED */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 py-6 shadow-sm font-inter">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="relative w-full md:w-[500px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by profession (e.g. Nursing)..." 
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-[#3d5afe] font-inter text-sm"
            />
          </div>
          <div className="flex gap-8 text-[12px] font-bold text-gray-500 uppercase tracking-widest font-poppins">
            <span className="text-[#3d5afe] border-b-2 border-[#3d5afe] pb-1 cursor-pointer">All Sectors</span>
            <span className="hover:text-[#3d5afe] cursor-pointer transition-colors">Technical</span>
            <span className="hover:text-[#3d5afe] cursor-pointer transition-colors">Medical</span>
            <span className="hover:text-[#3d5afe] cursor-pointer transition-colors">Commercial</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA - CONTAINER INCREASED */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 text-gray-900">
          
          {/* Grid of Sectors */}
          <div className="lg:col-span-3">
            <div className="mb-12">
              <h2 className="text-3xl font-black mb-3 uppercase tracking-tight font-poppins">Available Pathways</h2>
              <p className="text-lg text-gray-500 font-inter">Select a sector to view stipend details and job requirements.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {sectors.map((sector, index) => (
                <SectorCard key={index} sector={sector} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 font-inter">
            <div className="bg-white border border-gray-200 p-8 rounded-sm sticky top-32">
              <h3 className="text-xl font-bold mb-8 border-b pb-4 font-poppins">How it works</h3>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="text-[#3d5afe] font-black text-2xl font-poppins">01</div>
                  <div>
                    <h4 className="font-bold text-base font-poppins">German Language</h4>
                    <p className="text-sm text-gray-500 font-inter leading-relaxed">Reach B1/B2 level proficiency with our intensive training.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="text-[#3d5afe] font-black text-2xl font-poppins">02</div>
                  <div>
                    <h4 className="font-bold text-base font-poppins">Employer Interview</h4>
                    <p className="text-sm text-gray-500 font-inter leading-relaxed">Clear interviews with certified German employers.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="text-[#3d5afe] font-black text-2xl font-poppins">03</div>
                  <div>
                    <h4 className="font-bold text-base font-poppins">Visa & Travel</h4>
                    <p className="text-sm text-gray-500 font-inter leading-relaxed">Apply for Ausbildung visa under Section 16a.</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-10 bg-gray-900 text-white py-4 text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-[#3d5afe] transition-all font-poppins shadow-lg">
                Download PDF Guide
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER ACTION */}
      <section className="bg-white py-24 border-t border-gray-100 font-inter">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-black mb-8 font-poppins tracking-tight text-gray-900">Can't find your profession?</h2>
          <p className="text-xl text-gray-600 mb-12 italic font-inter leading-relaxed max-w-3xl mx-auto">"We have access to 350+ different types of Ausbildung programs. Our consultants can help you find the right match for your previous background."</p>
          <button className="inline-flex items-center gap-4 text-[#3d5afe] font-black uppercase tracking-widest group font-poppins text-sm border-b-2 border-[#3d5afe] pb-1">
            Consult our experts <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
}