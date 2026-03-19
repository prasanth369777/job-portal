import React from "react";
import {
  ArrowUpRight,
  CheckCircle,
  BarChart3,
  ShieldCheck
} from "lucide-react";

export default function BuildTeamsSection() {

  const features = [
    {
      title: "Hire Quickly",
      desc: "Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.",
      icon: <ArrowUpRight size={28} className="text-blue-500"/>
    },
    {
      title: "The Top 3%",
      desc: "Every applicant to the network is rigorously tested and vetted. Our highly selective process leads to a 98% trial-to-hire success rate.",
      icon: <CheckCircle size={28} className="text-blue-500"/>
    },
    {
      title: "Leading the Future of Work",
      desc: "Our network is ready for tomorrow’s business challenges by embracing advanced skills including blockchain and AI.",
      icon: <BarChart3 size={28} className="text-blue-500"/>
    },
    {
      title: "A Level Above",
      desc: "Every freelancer in our global network embodies the highest levels of integrity, professionalism and communication.",
      icon: <ShieldCheck size={28} className="text-blue-500"/>
    }
  ];

  const experts = [
    {
      name: "Felix Remennik",
      role: "Growth Marketer",
      company: "Google",
      img: "https://i.pravatar.cc/400?img=12",
      offset: "-mt-12"
    },
    {
      name: "Evgeny Vasenev",
      role: "UI Designer",
      company: "Amazon",
      img: "https://i.pravatar.cc/400?img=14",
      offset: "mt-10"
    },
    {
      name: "Mohab Ayman",
      role: "Data Scientist",
      company: "Microsoft",
      img: "https://i.pravatar.cc/400?img=22",
      offset: "-mt-8"
    }
  ];

  return (

    <section className="bg-white py-24 px-6">

      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-20 items-start">

        {/* LEFT CONTENT */}

        <div>

          <h2 className="text-5xl font-semibold text-gray-900 mb-4 leading-tight">
            Build Amazing Teams,<br/>On Demand
          </h2>

          <p className="text-gray-500 text-lg mb-16">
            Quickly assemble the teams you need, exactly when you need them.
          </p>


          {/* FEATURES GRID */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-14">

            {features.map((f,i)=>(
              <div key={i} className="flex flex-col gap-4">

                <div>
                  {f.icon}
                </div>

                <h4 className="font-semibold text-gray-900 text-lg">
                  {f.title}
                </h4>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {f.desc}
                </p>

              </div>
            ))}

          </div>

        </div>



        {/* RIGHT TALENT CARDS */}

        <div className="relative flex gap-8 justify-center">

          {experts.map((exp,i)=>(
            <div
              key={i}
              className={`bg-white border border-gray-200 shadow-md w-[260px] ${exp.offset}`}
            >

              <img
                src={exp.img}
                alt={exp.name}
                className="w-full h-[260px] object-cover"
              />

              <div className="p-6">

                <h4 className="text-blue-600 font-semibold mb-1">
                  {exp.name}
                </h4>

                <p className="text-sm text-gray-500 mb-2">
                  Verified Expert
                </p>

                <p className="text-sm text-gray-700 mb-6">
                  {exp.role}
                </p>

                <div className="text-xs text-gray-400">
                  PREVIOUSLY AT
                </div>

                <div className="text-xl font-semibold text-gray-900">
                  {exp.company}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>

  );

}