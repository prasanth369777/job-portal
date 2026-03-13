import React from "react";

export default function Testimonial() {
  const reviews = [
    {
      id: 1,
      quote: "I found my dream role at Meta within 3 days. The AI matching is scary good.",
      author: "Sarah Jenkins",
      role: "Senior Product Designer",
      avatar: "SJ" // Placeholder for an image
    },
    {
      id: 2,
      quote: "The best platform for tech talent. I had 4 interviews scheduled in my first week.",
      author: "Marcus Chen",
      role: "Full Stack Developer",
      avatar: "MC"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4">
          Success Stories
        </h2>
        <h3 className="text-4xl font-black text-slate-900 mb-16">
          Joined by 50,000+ professionals
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((rev) => (
            <div 
              key={rev.id} 
              className="group bg-slate-50 border border-slate-100 p-10 rounded-[3rem] text-left hover:bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>

              <p className="text-xl font-medium text-slate-800 leading-relaxed italic mb-8">
                "{rev.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">
                  {rev.avatar}
                </div>
                <div>
                  <h5 className="font-bold text-slate-900">{rev.author}</h5>
                  <p className="text-sm text-slate-500 font-medium">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}