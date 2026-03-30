import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Globe, Loader2 } from "lucide-react";

const DestinationCard = ({ country }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -10 }}
    className="group relative bg-white border border-slate-200 rounded-sm overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500"
  >
    <div className="h-56 overflow-hidden relative">
      <img
        src={country.image}
        alt={country.name}
        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c]/90 via-transparent to-transparent" />
      <div className="absolute bottom-4 left-5">
        <h3 className="text-white text-xl font-black font-poppins uppercase tracking-tighter">
          {country.name}
        </h3>
      </div>
    </div>

    <div className="p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-poppins">
            Intakes
          </span>
          <span className="text-[13px] font-bold text-[#002b5c] font-inter">
            {country.intake}
          </span>
        </div>

        <div className="w-px h-6 bg-slate-100" />

        <div className="flex flex-col text-right">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-poppins">
            Post-Study
          </span>
          <span className="text-[13px] font-bold text-[#0062ff] font-inter">
            {country.psw}
          </span>
        </div>
      </div>

      <button className="w-full py-2.5 bg-slate-50 group-hover:bg-[#002b5c] group-hover:text-white text-[#002b5c] font-black text-[10px] uppercase tracking-[0.2em] transition-all font-poppins border border-slate-100">
        View Universities
      </button>
    </div>
  </motion.div>
);

export default function StudyAbroadPage() {
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  const allDestinations = [
    { name: "Germany", intake: "Sept / March", psw: "18 Months", image: "https://images.unsplash.com/photo-1467226632440-65f0b4957563?w=600" },
    { name: "United Kingdom", intake: "Sept / Jan", psw: "2 Years", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600" },
    { name: "Canada", intake: "Jan / May / Sept", psw: "3 Years", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=600" },
    { name: "Ireland", intake: "Sept / Feb", psw: "2 Years", image: "https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=600" },
    { name: "USA", intake: "Jan / Aug", psw: "1-3 Years", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600" },
    { name: "Australia", intake: "Feb / July", psw: "2-4 Years", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600" },
    { name: "France", intake: "Sept / Jan", psw: "2 Years", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600" },
    { name: "Netherlands", intake: "Sept / Feb", psw: "1 Year", image: "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=600" },
    { name: "Switzerland", intake: "Sept / Feb", psw: "6 Months", image: "https://images.unsplash.com/photo-1530122622335-d40302293531?w=600" },
    { name: "New Zealand", intake: "Feb / July", psw: "3 Years", image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600" },
    { name: "Italy", intake: "Sept / Feb", psw: "1 Year", image: "https://images.unsplash.com/photo-1516483642777-2244247866e4?w=600" },
    { name: "Spain", intake: "Sept / Jan", psw: "1 Year", image: "https://images.unsplash.com/photo-1543783232-af9942f4a47d?w=600" },
    { name: "Sweden", intake: "Sept / Jan", psw: "1 Year", image: "https://images.unsplash.com/photo-1509333947088-0388c3a9d942?w=600" },
    { name: "Finland", intake: "Aug / Jan", psw: "2 Years", image: "https://images.unsplash.com/photo-1517457373958-b7bdd458ad20?w=600" },
    { name: "Austria", intake: "Oct / March", psw: "1 Year", image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600" },
    { name: "Poland", intake: "Oct / Feb", psw: "9 Months", image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=600" },
    { name: "Hungary", intake: "Sept / Feb", psw: "9 Months", image: "https://images.unsplash.com/photo-1551867633-194f125bddfa?w=600" },
    { name: "Malta", intake: "Feb / Sept", psw: "6 Months", image: "https://images.unsplash.com/photo-1529280606213-94f10738bb30?w=600" },
    { name: "Singapore", intake: "Jan / Aug", psw: "Varies", image: "https://images.unsplash.com/photo-1525625232747-07304199f067?w=600" },
    { name: "Latvia", intake: "Sept / Feb", psw: "6 Months", image: "https://images.unsplash.com/photo-1563211513-39d67963390c?w=600" },
    { name: "Lithuania", intake: "Sept / Feb", psw: "6 Months", image: "https://images.unsplash.com/photo-1561570535-654e815e985b?w=600" }
  ];

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 8);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="bg-[#f9fafb] min-h-screen">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800;900&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
      `,
        }}
      />

      {/* HERO SECTION */}
      <section className="bg-white border-b border-slate-200 pt-16 pb-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* LEFT SIDE */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-100 text-[#0062ff] rounded-sm mb-6">
                <Globe size={14} strokeWidth={3} />
                <span className="text-[8px] font-black uppercase tracking-[0.2em] font-poppins">
                  Global Campus Network
                </span>
              </div>

              <h1 className="text-[48px] md:text-[55px] font-black text-[#002b5c] leading-[1] tracking-tighter mb-8 font-poppins uppercase">
                Dream Big. <br />
                <span className="text-[#0062ff]">Study Anywhere.</span>
              </h1>

              <p className="text-[18px] text-slate-500 font-medium font-inter max-w-xl leading-relaxed mb-10">
                End-to-end support for international admissions in 20+ countries.
                5,000+ success stories and counting.
              </p>

              <div className="flex flex-col md:flex-row gap-0 max-w-2xl shadow-xl">
                <div className="flex-1 flex items-center bg-white border-2 border-slate-200 p-4 focus-within:border-[#0062ff] transition-all">
                  <Search className="text-slate-300 mr-3" size={20} />
                  <input
                    type="text"
                    placeholder="Where do you want to study?"
                    className="w-full outline-none font-inter text-base font-medium"
                  />
                </div>

                <button className="bg-[#002b5c] text-white px-8 py-4 font-black uppercase tracking-[0.2em] font-poppins hover:bg-[#0062ff] transition-all whitespace-nowrap">
                  Search
                </button>
              </div>
            </div>

            {/* RIGHT SIDE STUDENT IMAGE */}
            <div className="lg:col-span-5 hidden lg:flex justify-center">
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -top-6 -left-6 w-full h-full bg-[#0062ff]/10 rounded-2xl"></div>

                <img
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=700"
                  alt="Student"
                  className="relative w-[420px] xl:w-[480px] rounded-2xl shadow-2xl object-cover"
                />

                <div className="absolute -bottom-6 -right-6 bg-white shadow-xl border border-slate-200 px-5 py-3 rounded-lg">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-poppins">
                    Trusted by
                  </p>
                  <p className="text-[18px] font-black text-[#002b5c] font-poppins">
                    5,000+ Students
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* DESTINATION GRID */}
      <main className="max-w-[1440px] mx-auto px-6 md:px-12 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="border-l-4 border-[#0062ff] pl-6">
            <h2 className="text-[32px] md:text-[42px] font-black text-[#002b5c] tracking-tight uppercase leading-none font-poppins mb-2">
              Explore Destinations
            </h2>
            <p className="text-slate-400 font-medium font-inter text-base">
              Select your preferred country to see intake dates and post-study work rights.
            </p>
          </div>

          <div className="flex items-center gap-4 text-[12px] font-black text-slate-300 uppercase tracking-widest font-poppins">
            Showing {Math.min(visibleCount, allDestinations.length)} of {allDestinations.length}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {allDestinations.slice(0, visibleCount).map((dest, i) => (
            <DestinationCard key={i} country={dest} />
          ))}
        </div>

        {visibleCount < allDestinations.length && (
          <div className="mt-20 flex justify-center">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="group relative bg-white border-2 border-[#002b5c] text-[#002b5c] px-12 py-4 rounded-sm font-black text-[14px] overflow-hidden transition-all hover:text-white disabled:opacity-50"
            >
              <span className="relative z-10 flex items-center gap-3 uppercase tracking-[0.2em] font-poppins">
                {isLoading ? <Loader2 size={18} className="animate-spin" /> : "Explore More Countries"}
              </span>
              <div className="absolute inset-0 bg-[#002b5c] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
}