import React from "react";

/**
 * SENIOR FRONTEND NOTE:
 * 1. Replaced all href="#" with href="/" to resolve ESLint jsx-a11y warnings.
 * 2. Optimized grid for better mobile stacking (gap-12).
 * 3. Added 'group' interactions for a more dynamic feel.
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg shadow-lg shadow-blue-100 flex items-center justify-center text-white font-bold tracking-tighter italic">
              J
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tighter">JOB.HUB</span>
          </div>
          <p className="text-slate-500 leading-relaxed font-medium text-sm">
            Helping the world's best talent find their place in the future of tech. Join our global ecosystem today.
          </p>
        </div>

        {/* Talent Section */}
        <div>
          <h6 className="font-bold text-slate-900 mb-6 uppercase tracking-[0.15em] text-[10px]">
            For Talent
          </h6>
          <ul className="space-y-4 text-slate-500 font-medium text-sm">
            <li><a href="/" className="hover:text-blue-600 transition-colors duration-200">Browse Jobs</a></li>
            <li><a href="/" className="hover:text-blue-600 transition-colors duration-200">Salary Guide</a></li>
            <li><a href="/" className="hover:text-blue-600 transition-colors duration-200">Career Blog</a></li>
          </ul>
        </div>

        {/* Employer Section */}
        <div>
          <h6 className="font-bold text-slate-900 mb-6 uppercase tracking-[0.15em] text-[10px]">
            For Employers
          </h6>
          <ul className="space-y-4 text-slate-500 font-medium text-sm">
            <li><a href="/" className="hover:text-blue-600 transition-colors duration-200">Pricing Plans</a></li>
            <li><a href="/" className="hover:text-blue-600 transition-colors duration-200">Hiring Solutions</a></li>
            <li><a href="/" className="hover:text-blue-600 transition-colors duration-200">Enterprise</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 items-start md:justify-end">
          <a 
            href="/" 
            className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 text-slate-400 group"
            aria-label="Twitter"
          >
            <span className="text-[10px] font-black uppercase group-hover:scale-110 transition-transform">tw</span>
          </a>
          <a 
            href="/" 
            className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 text-slate-400 group"
            aria-label="LinkedIn"
          >
             <span className="text-[10px] font-black uppercase group-hover:scale-110 transition-transform">in</span>
          </a>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
        <p>&copy; {currentYear} Job.Hub Platform. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="/" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
          <a href="/" className="hover:text-slate-900 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;