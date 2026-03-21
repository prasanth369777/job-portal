import React from "react";
import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerData = {
    "Hire Talent": [
      "Hire Freelance Developers",
      "Hire Freelance Designers",
      "Hire Freelance Marketers",
      "Hire Vocational Trainees",
      "Hire Study Abroad Interns",
      "Hire Project Managers",
      "Hire Sales Experts",
    ],
    "Featured Skills": {
      column1: [
        "Nursing (Ausbildung)",
        "IT Specialist",
        "Mechatronics",
        "Hospitality Management",
        "AI Engineers",
        "React.js Developers",
        "Python Developers",
      ],
      column2: [
        "Front-end Developers",
        "UX Designers",
        "UI Designers",
        "Mobile App Designers",
        "Graphic Designers",
        "SEO Experts",
        "Social Media Creators",
      ],
      column3: [
        "Digital Product Managers",
        "Web Project Managers",
        "Finance Experts",
        "Interim CFOs",
        "M&A Consultants",
        "Startup Consultants",
        "Visa Specialists",
      ],
    },
    "About": [
      "Why Altus?",
      "Contact Us",
      "Press Center",
      "Careers",
      "About Us",
    ]
  };

  return (
    <footer className="bg-[#0b2161] text-white py-16 px-6 sm:px-12 lg:px-20 font-sans">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Hire Talent */}
          <div className="lg:col-span-2">
            <h6 className="text-[13px] font-bold mb-8 text-white tracking-wide">Hire Talent</h6>
            <ul className="space-y-4 text-[13px] text-white/60 font-medium">
              {footerData["Hire Talent"].map((link) => (
                <li key={link}><a href="/" className="hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Column 2-4: Featured Skills (Mega Column) */}
          <div className="lg:col-span-8">
            <h6 className="text-[13px] font-bold mb-8 text-white tracking-wide">Featured Skills</h6>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <ul className="space-y-4 text-[13px] text-white/60 font-medium">
                {footerData["Featured Skills"].column1.map((link) => (
                  <li key={link}><a href="/" className="hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
              <ul className="space-y-4 text-[13px] text-white/60 font-medium border-white/5">
                {footerData["Featured Skills"].column2.map((link) => (
                  <li key={link}><a href="/" className="hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
              <ul className="space-y-4 text-[13px] text-white/60 font-medium">
                {footerData["Featured Skills"].column3.map((link) => (
                  <li key={link}><a href="/" className="hover:text-white transition-colors">{link}</a></li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 5: About */}
          <div className="lg:col-span-2">
            <h6 className="text-[13px] font-bold mb-8 text-white tracking-wide">About</h6>
            <ul className="space-y-4 text-[13px] text-white/60 font-medium">
              {footerData["About"].map((link) => (
                <li key={link}><a href="/" className="hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Brand & Social Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center py-10 gap-8 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
               <div className="w-6 h-6 bg-white rotate-45 flex items-center justify-center">
                  <div className="-rotate-45 text-[#0b2161] font-black text-xs">A</div>
               </div>
               <span className="text-xl font-bold tracking-tighter">ALTUS.</span>
            </div>
            <span className="h-4 w-[1px] bg-white/20 hidden sm:block" />
            <p className="text-[11px] text-white/40 font-bold uppercase tracking-[0.2em] hidden sm:block">
              The World's Top Talent, On Demand®
            </p>
          </div>

          <div className="flex gap-4">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
              <a 
                key={i} 
                href="/" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-10 text-[11px] font-bold text-white/30 uppercase tracking-[0.15em]">
          <p>Copyright 2010 - {currentYear} Altus Network</p>
          <div className="flex gap-6">
            <a href="/" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/10">Privacy Policy</a>
            <a href="/" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/10">Website Terms</a>
            <a href="/" className="hover:text-white transition-colors underline underline-offset-4 decoration-white/10">Accessibility</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;