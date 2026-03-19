import React from "react";
import { Code, PenTool, Megaphone, BarChart, Layout, Layers } from "lucide-react";

const categories = [
  { name: "Developers", icon: <Code size={16}/> },
  { name: "Designers", icon: <PenTool size={16}/> },
  { name: "Marketing Experts", icon: <Megaphone size={16}/> },
  { name: "Management Consultants", icon: <BarChart size={16}/> },
  { name: "Project Managers", icon: <Layout size={16}/> },
  { name: "Product Managers", icon: <Layers size={16}/> },
];

const talents = [
  {
    name: "Adam Ivansky",
    role: "Python Developer",
    img: "https://i.pravatar.cc/400?img=11",
    skills: ["SQL", "Python", "Spark", "Machine Learning"],
    company: "Apple"
  },
  {
    name: "Manuela Kajkara",
    role: "AR/VR Developer",
    img: "https://i.pravatar.cc/400?img=32",
    skills: ["Software Architecture", "C#", "REST API", "Git"],
    company: "Meta"
  },
  {
    name: "Nimrod Talmon",
    role: "AI Developer",
    img: "https://i.pravatar.cc/400?img=15",
    skills: ["Data Science", "Python", "Algorithms", "Artificial Intelligence"],
    company: "Google"
  }
];

export default function TalentShowcase() {

  return (

    <section className="bg-[#F8FAFC] py-20 px-6">

      <div className="max-w-[1400px] mx-auto">

        {/* TITLE */}

        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
          Meet Talent in Our Network
        </h2>


        {/* CATEGORY TABS */}

        <div className="flex items-center gap-8 border-b border-gray-200 pb-4 mb-10 overflow-x-auto">

          {categories.map((cat,i)=>(
            <div
              key={i}
              className={`flex items-center gap-2 text-sm cursor-pointer pb-3 transition-all
              ${i===0 
                ? "text-blue-600 border-b-2 border-blue-600" 
                : "text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-600"}
              `}
            >
              {cat.icon}
              {cat.name}
            </div>
          ))}

        </div>


        {/* TALENT GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {talents.map((talent,i)=>(

            <div 
              key={i} 
              className="bg-white border border-gray-200 group transition-all duration-300 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1"
            >

              {/* IMAGE */}

              <div className="p-6 overflow-hidden">

                <img
                  src={talent.img}
                  alt={talent.name}
                  className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

              </div>


              {/* CONTENT */}

              <div className="px-6 pb-6">

                <h3 className="font-semibold text-blue-600 mb-1 group-hover:text-blue-700">
                  {talent.name}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {talent.role}
                </p>


                {/* SKILLS */}

                <div className="flex flex-wrap gap-2 mb-5">

                  {talent.skills.map((skill,idx)=>(
                    <span
                      key={idx}
                      className="text-xs border border-gray-300 px-2 py-1 text-gray-600 transition-all hover:border-blue-500 hover:text-blue-600"
                    >
                      {skill}
                    </span>
                  ))}

                </div>


                <div className="text-sm text-gray-500">
                  Previously at
                </div>

                <div className="text-lg font-semibold text-gray-800">
                  {talent.company}
                </div>

              </div>

            </div>

          ))}


          {/* CTA CARD */}

          <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white flex flex-col justify-center items-center p-10 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">

            <h3 className="text-xl font-semibold mb-3">
              Discover 20,000+ More Talent
            </h3>

            <p className="text-sm opacity-80 mb-6">
              in the global network
            </p>

            <button className="bg-green-500 text-white px-5 py-3 text-sm font-semibold hover:bg-green-600 transition">
              Discover Talent
            </button>

          </div>

        </div>

      </div>

    </section>

  );

}