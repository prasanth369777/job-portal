// Ensure this is at the very top of your file
import React from "react";
import { 
  ArrowRight, 
  ExternalLink, 
  Globe, 
  GraduationCap, 
  Briefcase, 
  HeartPulse, 
  Code, 
  Landmark, 
  ShieldCheck // <--- Add this
} from "lucide-react";
import { Link } from "react-router-dom";

// --- SUB-COMPONENT: IBM ERA GRID CARD ---
const AltusGridCard = ({ title, Icon, isPrimary }) => {
  // This is the specific gradient from your image
  const hoverGradient = "linear-gradient(160deg, #0062ff 20%, #00d2b3 85%)";

  return (
    <div className="group relative p-8 border-r border-b border-gray-200 flex flex-col justify-between h-56 transition-all duration-500 cursor-pointer overflow-hidden bg-white">
      
      {/* 1. HOVER GRADIENT LAYER */}
      <div 
        className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
          ${isPrimary ? 'opacity-100' : ''}`}
        style={{ 
          background: isPrimary 
            ? "linear-gradient(160deg, #0062ff 20%, #003fa3 85%)" 
            : hoverGradient 
        }}
      />

      {/* 2. CARD CONTENT */}
      <h3 className={`relative z-10 text-[17px] font-bold font-poppins leading-snug tracking-tight max-w-[180px] transition-colors duration-300
        ${isPrimary ? "text-white" : "text-gray-900 group-hover:text-white"}`}>
        {title}
      </h3>

      <div className="relative z-10 flex items-end justify-between">
        <div className={`transition-colors duration-300 
          ${isPrimary ? "text-white/80" : "text-[#0062ff] group-hover:text-white/90"}`}>
          <Icon size={36} strokeWidth={1.2} />
        </div>
        <ArrowRight 
          size={22} 
          className={`transition-all duration-300 group-hover:translate-x-2 
            ${isPrimary ? "text-white" : "text-[#0062ff] group-hover:text-white"}`} 
        />
      </div>
    </div>
  );
};

export default function InsideAltus() {
  return (
    <div className="bg-white">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@300;400;500;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      ` }} />

      {/* --- SECTION 1: GLOBAL PATHWAYS GRID --- */}
      <section className="py-20 max-w-[1440px] mx-auto px-6 md:px-12 font-inter">
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 font-poppins leading-tight tracking-tight">
            Lead your career with Altus
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
            From technical <span className="text-[#0062ff] cursor-pointer hover:underline">Ausbildung</span> to professional placements in Europe, our expertise helps you reinvent your future.
          </p>
        </div>

        {/* 4x2 IBM Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-200 shadow-sm">
          <AltusGridCard 
            isPrimary={true} 
            title="Automate your global application with Altus Hub" 
            Icon={Globe} 
          />
          <AltusGridCard title="Nursing & Healthcare" Icon={HeartPulse} />
          <AltusGridCard title="IT & Software Dev" Icon={Code} />
          <AltusGridCard title="Vocational Ausbildung" Icon={GraduationCap} />
          
          <AltusGridCard title="Hospitality & Management" Icon={Briefcase} />
          <AltusGridCard title="Engineering Roles" Icon={Landmark} />
          <AltusGridCard title="Visa & Legal Readiness" Icon={ShieldCheck} />
          <AltusGridCard title="Career Consulting" Icon={ArrowRight} />
        </div>
      </section>

      {/* --- SECTION 2: INSIDE ALTUS LINKS --- */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12 border-t border-gray-100">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-5xl font-light text-gray-900 font-poppins tracking-tight">Inside Altus</h2>
          </div>
          
          <div className="lg:col-span-8 grid md:grid-cols-3 gap-12 font-inter">
            {/* Our Mission */}
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Our mission</h4>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">Explore the Altus history of bridging the talent gap and empowering global careers.</p>
              <div className="flex flex-col gap-2">
                <Link to="/about" className="flex items-center gap-2 text-[#0062ff] text-sm font-semibold hover:underline group w-fit">
                  About Altus <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/>
                </Link>
                <Link to="/events" className="flex items-center gap-2 text-[#0062ff] text-sm font-semibold hover:underline group w-fit">
                  Our webinars <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/>
                </Link>
              </div>
            </div>

            {/* Our Network */}
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Our network</h4>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">Connect with our partner hospitals and firms across Germany and the EU.</p>
              <div className="flex flex-col gap-2">
                <Link to="/partners" className="flex items-center gap-2 text-[#0062ff] text-sm font-semibold hover:underline group w-fit">
                  Employer network <ExternalLink size={14}/>
                </Link>
                <Link to="/success-stories" className="flex items-center gap-2 text-[#0062ff] text-sm font-semibold hover:underline group w-fit">
                  Success stories <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/>
                </Link>
              </div>
            </div>

            {/* Our Talent */}
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Our talent</h4>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">Join the community of professionals who have successfully relocated abroad.</p>
              <div className="flex flex-col gap-2">
                <Link to="/register" className="flex items-center gap-2 text-[#0062ff] text-sm font-semibold hover:underline group w-fit">
                  Start your journey <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/>
                </Link>
                <Link to="/learning-hub" className="flex items-center gap-2 text-[#0062ff] text-sm font-semibold hover:underline group w-fit">
                  German training <ExternalLink size={14}/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}