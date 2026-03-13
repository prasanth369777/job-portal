import React from "react";

const CTA = () => {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-7xl mx-auto bg-blue-600 p-12 md:p-20 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 blur-[80px] rounded-full translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Ready for your <span className="text-blue-200">next big move?</span>
          </h2>

          <p className="text-blue-50 text-lg md:text-xl mb-12 max-w-xl mx-auto font-medium">
            Join 50,000+ professionals getting curated job alerts delivered straight to their inbox every Monday.
          </p>

          <form 
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col md:flex-row max-w-lg mx-auto gap-3"
          >
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 px-8 py-5 rounded-2xl bg-white/10 border border-white/20 outline-none placeholder:text-white/60 focus:bg-white/20 focus:border-white/40 transition-all text-lg"
              required
            />

            <button className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 hover:shadow-xl active:scale-95 transition-all">
              Join Now
            </button>
          </form>
          
          <p className="mt-6 text-blue-200/60 text-sm font-medium">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;