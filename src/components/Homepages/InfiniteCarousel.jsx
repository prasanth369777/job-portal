import React from "react";
import { 
  Target, 
  Award, 
  Star 
} from "lucide-react";

const PartnersAndCareer = () => {
  const partners = [
    { name: "ILLINOIS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/University_of_Illinois_seal.svg/1200px-University_of_Illinois_seal.svg.png" },
    { name: "Duke", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Duke_University_logo.svg/1280px-Duke_University_logo.svg.png" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Michigan", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/University_of_Michigan_Logo.svg/1280px-University_of_Michigan_Logo.svg.png" },
    { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { name: "Vanderbilt", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Vanderbilt_University_seal.svg/1200px-Vanderbilt_University_seal.svg.png" },
    { name: "Johns Hopkins", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Johns_Hopkins_University_seal.svg/1200px-Johns_Hopkins_University_seal.svg.png" },
  ];

  const careerSteps = [
    {
      title: "Explore new skills",
      desc: "Access 10,000+ courses in AI, business, technology, and more.",
      icon: <Target className="w-8 h-8 text-slate-900" />,
    },
    {
      title: "Earn valuable credentials",
      desc: "Get certificates for every course you finish and boost your chances of getting hired after your trial ends at no additional cost.",
      icon: <Award className="w-8 h-8 text-slate-900" />,
    },
    {
      title: "Learn from the best",
      desc: "Take your skills to the next level with expert-led courses and Coursera Coach, your AI-powered guide.",
      icon: <Star className="w-8 h-8 text-slate-900" />,
    },
  ];

  return (
    <div className="w-full font-sans">
      {/* --- TOP SECTION: University & Company Logos --- */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-12">
            Learn from 350+ top universities and companies
          </h2>
          
          <div className="flex flex-wrap items-center justify-between gap-8 lg:gap-12">
            {partners.map((partner) => (
              <img
                key={partner.name}
                src={partner.logo}
                alt={partner.name}
                className="h-8 md:h-10 lg:h-12 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- BOTTOM SECTION: Invest in your career --- */}
      <section className="py-20 bg-[#F5F7FA]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <h2 className="text-xl lg:text-2xl font-bold text-slate-900 mb-16">
            Invest in your career
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {careerSteps.map((step) => (
              <div key={step.title} className="flex flex-col items-start gap-4">
                <div className="mb-2">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm lg:text-[15px] text-slate-600 leading-relaxed max-w-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersAndCareer;