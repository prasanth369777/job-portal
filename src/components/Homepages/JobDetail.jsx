import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function JobDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/" 
          className="group mb-8 inline-flex items-center text-slate-500 font-bold hover:text-blue-600 transition-colors"
        >
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> 
          Back to Job Board
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border border-slate-100 p-8 md:p-12 rounded-[3rem] shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                  Full Time
                </span>
                <span className="text-slate-400 text-sm font-medium">Posted 2 days ago</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Senior Full-Stack Engineer <span className="text-slate-300">#{id}</span>
              </h1>
              
              <p className="text-xl text-blue-600 font-bold mt-2">Vercel • Remote (Global)</p>

              <div className="mt-12 prose prose-slate">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Job Description</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  We are looking for an exceptional engineer to join our core team in 2026. 
                  You will be responsible for scaling our edge infrastructure and 
                  improving the developer experience for millions of users worldwide.
                </p>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Responsibilities</h3>
                <ul className="list-disc list-inside text-slate-600 space-y-3 text-lg">
                  <li>Architect and maintain distributed systems at scale.</li>
                  <li>Collaborate with designers to implement pixel-perfect UIs.</li>
                  <li>Optimize application performance for sub-second load times.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            {/* Quick Action Card */}
            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-xl shadow-slate-200">
              <h4 className="text-xl font-bold mb-6">Ready to apply?</h4>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-medium">Salary Range</span>
                  <span className="font-bold">$180k - $240k</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400 font-medium">Location</span>
                  <span className="font-bold">Global / Remote</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-black text-lg shadow-lg shadow-blue-900/20 transition-all active:scale-95">
                Apply Now
              </button>
              <button className="w-full mt-3 bg-white/10 hover:bg-white/20 text-white py-4 rounded-2xl font-bold text-sm transition-all">
                Save for Later
              </button>
            </div>

            {/* Company Mini-Card */}
            <div className="bg-white border border-slate-100 p-8 rounded-[2.5rem]">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl mb-4 flex items-center justify-center font-black text-slate-300">LOGO</div>
              <h4 className="text-lg font-bold text-slate-900">About Vercel</h4>
              <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                The platform for frontend developers, providing the speed and reliability 
                needed to create at the moment of inspiration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}