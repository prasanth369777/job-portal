import React from "react";
import {
  Code,
  PenTool,
  BarChart3,
  Users,
  Layout,
  LineChart,
  MousePointer2
} from "lucide-react";

export default function TalentGrid() {

  const categories = [
    {
      title: "Developers",
      desc: "Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.",
      icon: <Code size={26} className="text-blue-400 group-hover:text-blue-600 transition-colors"/>
    },
    {
      title: "Designers",
      desc: "Expert UI, UX, Visual, and Interaction designers as well as illustrators and animators.",
      icon: <PenTool size={26} className="text-blue-400 group-hover:text-blue-600 transition-colors"/>
    },
    {
      title: "Marketing Experts",
      desc: "Experts in digital marketing, growth marketing, content creation, and brand strategy.",
      icon: <MousePointer2 size={26} className="text-blue-400 group-hover:text-blue-600 transition-colors"/>
    },
    {
      title: "Management Consultants",
      desc: "Finance experts, business strategists, M&A consultants, financial modelers and more.",
      icon: <BarChart3 size={26} className="text-blue-400 group-hover:text-blue-600 transition-colors"/>
    },
    {
      title: "Project Managers",
      desc: "Digital and technical project managers with expertise in numerous PM tools.",
      icon: <Layout size={26} className="text-blue-400 group-hover:text-blue-600 transition-colors"/>
    },
    {
      title: "Product Managers",
      desc: "Digital product managers and scrum product owners across industries.",
      icon: <Users size={26} className="text-blue-400 group-hover:text-blue-600 transition-colors"/>
    },
    {
      title: "Sales Experts",
      desc: "Lead generation experts, SDRs, BDRs, account managers and consultants.",
      icon: <LineChart size={26} className="text-blue-400 group-hover:text-blue-600 transition-colors"/>
    }
  ];

  return (

    <section className="bg-white py-20 px-6 min-h-[700px]">

      <div className="max-w-[1440px] mx-auto">

        {/* HEADER */}

        <div className="text-center mb-16">

          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Leverage World-Class Talent
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto">
            We are the largest globally distributed network of top business,
            design, and technology talent ready to tackle your most important initiatives.
          </p>

        </div>

        {/* GRID */}

        <div className="border border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {categories.map((cat, i) => (

            <div
              key={i}
              className="group flex gap-5 p-8 border-r border-b border-gray-200 cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 hover:shadow-md hover:-translate-y-1"
            >

              <div className="mt-1">
                {cat.icon}
              </div>

              <div>

                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {cat.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {cat.desc}
                </p>

              </div>

            </div>

          ))}

          {/* LAST BLOCK */}

          <div className="group flex gap-5 p-8 col-span-1 md:col-span-2 border-b border-gray-200 cursor-pointer transition-all duration-300 hover:bg-blue-50 hover:border-blue-300 hover:shadow-md hover:-translate-y-1">

            <div className="mt-1 text-blue-400 text-2xl font-bold group-hover:text-blue-600 transition-colors">
              +
            </div>

            <div>

              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                Plus Thousands More Skills
              </h3>

              <p className="text-sm text-gray-500 group-hover:text-gray-700">
                Whatever skill or specialization your business requires,
                we have the top talent to meet your needs.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}