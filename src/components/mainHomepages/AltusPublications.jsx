
import { ArrowRight } from "lucide-react";

const IBMCard = ({ article }) => (
  <div className="group bg-white flex flex-col h-full relative transition-colors duration-300 hover:bg-gray-50 cursor-pointer overflow-hidden p-6 md:p-8">
    {/* Image Container - Dynamic sizing for different image types */}
    <div className="mb-8 h-48 flex items-center justify-start overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        className={`h-full w-full ${
          article.isFullWidth ? "object-cover" : "object-contain"
        } transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1`}
      />
    </div>

    {/* Metadata & Content */}
    <div className="flex flex-col flex-1">
      <p className="text-[12px] text-gray-500 font-medium mb-3 uppercase tracking-wider">
        {article.category}
      </p>

      <h3 className="text-[20px] md:text-[22px] font-normal text-gray-900 leading-[1.3] mb-6 line-clamp-3">
        {article.title}
      </h3>

      {/* Pill Badge - IBM Signature */}
      <div className="mt-auto mb-12">
        <span className="px-3 py-1 bg-[#ccf2f4] text-[#005d5d] text-[11px] font-bold rounded-full uppercase tracking-tighter">
          {article.badge}
        </span>
      </div>

      {/* Action Arrow - Bottom Left */}
      <div className="flex justify-start">
        <ArrowRight 
          size={24} 
          className="text-[#0062ff] transition-all duration-300 group-hover:translate-x-3" 
          strokeWidth={1.5} 
        />
      </div>
    </div>
  </div>
);

export default function IBMRecommendedGrid() {
  const articles = [
    {
      id: 1,
      category: "Case Study",
      title: "How Altus Career streamlined 500+ student migrations to Germany",
      badge: "Proven results",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80", 
      isFullWidth: true,
    },
    {
      id: 2,
      category: "Engineering",
      title: "Mastering Ausbildung: The complete technical roadmap for 2026",
      badge: "Technical guide",
      image: "https://www.ibm.com/design/language/static/7841961962/01_Visual_Language/01_Color/images/03_Gradients.png",
      isFullWidth: false,
    },
    {
      id: 3,
      category: "Partnership",
      title: "Direct recruitment pipeline with Berlin's top tech institutions",
      badge: "Network update",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      isFullWidth: false,
    },
    {
      id: 4,
      category: "Intelligence",
      title: "Predicting your career success with AI-driven eligibility tools",
      badge: "New automation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      isFullWidth: true,
    },
    {
      id: 5,
      category: "Report",
      title: "The 2026 European Labor Market: Demand for skilled professionals",
      badge: "Deep dive",
      image: "https://www.ibm.com/design/language/static/7841961962/01_Visual_Language/01_Color/images/IBM_Color_Wheel.png",
      isFullWidth: false,
    },
    {
      id: 6,
      category: "Training",
      title: "Intensive German Language training from A1 to C1 levels",
      badge: "Curriculum",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      isFullWidth: true,
    },
    {
      id: 7,
      category: "Cloud",
      title: "Securing your documentation with enterprise-grade data protection",
      badge: "Safety first",
      image: "https://www.ibm.com/design/language/static/7841961962/01_Visual_Language/01_Color/images/IBM_Color_Families.png",
      isFullWidth: false,
    },
    {
      id: 8,
      category: "Event",
      title: "Register for the Global Career Summit: Future of Work in Europe",
      badge: "Upcoming webinar",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      isFullWidth: true,
    }
  ];

  return (
    <section className="py-24 bg-white font-sans">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header with IBM blue accent line */}
        <div className="mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">
                Recommended for you
            </h2>
            <div className="w-12 h-1 bg-[#0062ff]"></div>
        </div>

        {/* 4-Column IBM Bordered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-100">
          {articles.map((article) => (
            <div key={article.id} className="border-r border-b border-gray-100 h-full">
              <IBMCard article={article} />
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-16 flex justify-start">
            <button className="flex items-center gap-4 text-[#0062ff] font-bold text-sm hover:underline tracking-tight">
                View more insights <ArrowRight size={18} />
            </button>
        </div>
      </div>
    </section>
  );
}