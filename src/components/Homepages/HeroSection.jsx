import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Search, ChevronLeft, ChevronRight, BadgeCheck } from "lucide-react";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Students");
  const expertScrollRef = useRef(null);

  const partners = [
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_logo%2C_revised_2016.svg" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" }
  ];

  const experts = [
    { name: "Adrian Gonzalez", role: "AI Product Manager", img: "https://i.pravatar.cc/300?u=adrian", companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
    { name: "Savannah Enright", role: "Management Consultant", img: "https://i.pravatar.cc/300?u=savannah", companyLogo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Boston_Consulting_Group_logo.svg" },
    { name: "Arvind Kumar", role: "Finance Expert", img: "https://i.pravatar.cc/300?u=arvind", companyLogo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Goldman_Sachs_logo.svg" },
    { name: "Christina May", role: "UX Architect", img: "https://i.pravatar.cc/300?u=chris", companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Marcus Chen", role: "Blockchain Dev", img: "https://i.pravatar.cc/300?u=marcus", companyLogo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Kraken_logo.svg" },
    { name: "Elena Rossi", role: "Growth Lead", img: "https://i.pravatar.cc/300?u=elena", companyLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" }
  ];

  const relatedData = {
    Students: ["Scholarships", "Internships", "Part-time Jobs", "Visa Process"],
    Agents: ["Partner Portal", "Commission Plans", "Student Tracking", "Marketing Kit"],
    Universities: ["Global Rankings", "Candidate Sourcing", "Accreditation", "Alumni Network"]
  };

  const scrollExperts = (direction) => {
    if (expertScrollRef.current) {
      const { scrollLeft, clientWidth } = expertScrollRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth * 0.8
          : scrollLeft + clientWidth * 0.8;

      expertScrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      });
    }
  };

  return (
   <section className="h-[850px] bg-[#d2d6e2] pt-16 pb-20 font-sans border-b border-slate-200">

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display:none; }
        .no-scrollbar { scrollbar-width:none; -ms-overflow-style:none; }
        * { border-radius:0 !important; }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-10 h-[400px]">

        {/* HERO */}

        <div className="text-center">

          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Find work you’ll actually
            <span className="text-indigo-600"> love doing</span>
          </h1>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover jobs, internships, and global opportunities
            from top companies and fast growing startups.
          </p>

         {/* SEARCH */}

<div className="mt-6 flex justify-center">

  <div className="flex w-full max-w-2xl border-[6px] border-blue-600">

    {/* INPUT */}

    <div className="flex items-center flex-1 bg-blue-200/90 px-5 py-4">

      <Search className="text-black/80 mr-3" size={18} />

      <input
        placeholder="Search opportunities..."
        className="w-full bg-transparent text-black placeholder-black/80 outline-none text-sm font-medium"
      />

    </div>

    {/* BUTTON */}

    <button className="bg-blue-600 text-black px-8 font-bold text-sm tracking-wider hover:bg-white transition">
      SEARCH
    </button>

  </div>

</div>

          {/* RELATED SHORTCUTS */}

          <div className="flex justify-center gap-3 mt-4 flex-wrap">

            {relatedData[activeTab].map((item, i) => (
              <button
                key={i}
                className="text-sm px-4 py-1 border bg-white hover:bg-indigo-50 transition"
              >
                {item}
              </button>
            ))}

          </div>

          {/* TABS */}

          <div className="flex justify-center gap-3 mt-6">

            {["Students", "Agents", "Universities"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 font-medium border transition ${
                  activeTab === tab
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}

          </div>

        </div>

        {/* PARTNERS */}

        <div className="flex flex-wrap justify-center gap-14 mt-12 opacity-70">

          {partners.map((p, i) => (
            <img
              key={i}
              src={p.logo}
              alt={p.name}
              className="h-8 transition hover:scale-110 hover:opacity-100"
            />
          ))}

        </div>

        {/* EXPERTS */}

        <div className="mt-10">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold text-gray-900">
              Top Experts
            </h2>

            <div className="flex gap-2">

              <button
                onClick={() => scrollExperts("left")}
                className="p-2 bg-white shadow border"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={() => scrollExperts("right")}
                className="p-2 bg-white shadow border"
              >
                <ChevronRight size={20} />
              </button>

            </div>

          </div>

          <div className="relative">

            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-indigo-50 to-transparent pointer-events-none z-10"></div>

            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-indigo-50 to-transparent pointer-events-none z-10"></div>

            <div
              ref={expertScrollRef}
              className="flex gap-6 overflow-x-auto no-scrollbar pb-4 pr-20"
            >

              {experts.map((exp, i) => (

                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="min-w-[260px] bg-white px-5 py-4 shadow border hover:shadow-lg transition"
                >

                  <div className="flex items-center gap-3 mb-2">

                    <div className="relative">

                      <img
                        src={exp.img}
                        alt={exp.name}
                        className="w-12 h-12 object-cover"
                      />

                      <BadgeCheck
                        size={14}
                        className="absolute -bottom-1 -right-1 text-indigo-600 bg-white"
                      />

                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {exp.name}
                      </h4>

                      <p className="text-xs text-gray-500">
                        {exp.role}
                      </p>
                    </div>

                  </div>

                  <img
                    src={exp.companyLogo}
                    alt="company logo"
                    className="h-4 opacity-70 mb-2"
                  />

                  <button className="text-indigo-600 text-xs font-semibold hover:underline">
                    View profile →
                  </button>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}