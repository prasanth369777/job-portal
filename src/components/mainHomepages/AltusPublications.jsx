import React from "react";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

const PublicationCard = ({ article, isFeatured = false }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className={`bg-white border border-slate-100 shadow-[0_15px_60px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col cursor-pointer group rounded-sm ${
      isFeatured ? "h-full" : "h-auto"
    }`}
  >
    {/* Image Container with Editorial Grayscale-to-Color hover */}
    <div className={`relative overflow-hidden ${isFeatured ? "h-[320px]" : "h-44"}`}>
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
      />
      {/* Avatar Overlay pinned to bottom-left */}
      <div className="absolute -bottom-6 left-8 w-14 h-14 border-4 border-white rounded-lg overflow-hidden shadow-xl z-10 bg-slate-100">
        <img src={article.authorImg} alt="author" className="w-full h-full object-cover" />
      </div>
    </div>

    {/* Content Area */}
    <div className={`p-8 pt-10 flex flex-col flex-1`}>
      {/* Category/Metadata withForward Slash */}
      <div className="flex items-center gap-2 mb-3.5">
        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-600">
          {article.category}
        </span>
        <span className="text-slate-200">/</span>
        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
          {article.subCategory}
        </span>
      </div>

      {/* Dynamic Heading based on Featured State */}
      <h3 className={`${isFeatured ? "text-3xl" : "text-xl"} font-bold text-slate-900 leading-tight mb-5 group-hover:text-blue-600 transition-colors duration-300`}>
        {article.title}
      </h3>

      {/* Author & Excerpt */}
      <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest mb-6">
        By {article.author}
      </p>

      {isFeatured && (
        <p className="text-[15px] text-slate-500 leading-relaxed mb-10 line-clamp-3 font-medium">
          {article.excerpt}
        </p>
      )}

      {/* Action Footer revealed on hover */}
      <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="flex items-center gap-2.5 text-[11px] font-black text-slate-300 uppercase tracking-widest">
          <Clock size={16} />
          {article.readTime} Read
        </div>
        <ArrowRight size={18} className="text-blue-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
      </div>
    </div>
  </motion.div>
);

export default function AltusPublications() {
  // 5 Specific Articles from reference image
  const articles = [
    {
      id: 1,
      title: "Laravel API Tutorial: Creating and Testing a RESTful API",
      author: "Alex Braden",
      authorImg: "https://i.pravatar.cc/150?u=alexb",
      category: "Engineering",
      subCategory: "Back-End",
      readTime: "14-Minute",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
      excerpt: "Laravel 12 modernizes API development with cleaner syntax, streamlined tooling, and developer-first conventions. Learn to build and secure robust APIs with best practices."
    },
    {
      id: 2,
      title: "gRPC vs. REST: Key Differences and Use Cases",
      author: "Laszlo Gyori",
      authorImg: "https://i.pravatar.cc/150?u=laszlog",
      category: "Engineering",
      subCategory: "Back-End",
      readTime: "9-Minute",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
    },
    {
      id: 3,
      title: "A Day in the Life of an Engineering Manager",
      author: "Karl Hughes",
      authorImg: "https://i.pravatar.cc/150?u=karlh",
      category: "Engineering",
      subCategory: "Management",
      readTime: "12-Minute",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    },
    {
      id: 4,
      title: "Python Logging Handlers: A Deep Dive Into Types",
      author: "Camille Potard",
      authorImg: "https://i.pravatar.cc/150?u=camillep",
      category: "Engineering",
      subCategory: "Back-End",
      readTime: "11-Minute",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
    },
    {
      id: 5,
      title: "Exploring the Post-crash Cryptocurrency Market",
      author: "Jeffrey Mazer",
      authorImg: "https://i.pravatar.cc/150?u=jeffm",
      category: "Finance",
      subCategory: "Blockchain",
      readTime: "15-Minute",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&q=80",
    }
  ];

  return (
    <section className="py-28 bg-white font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Editorial Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} 
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none"
          >
            Explore Trending Altus Publications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-400 font-bold uppercase tracking-[0.3em] mt-6 text-xs"
          >
            Thought Leadership from the Global Network
          </motion.p>
        </div>

        {/* The Asymmetrical 5-Item Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Column 1: Featured Column (Left) */}
          <div className="lg:col-span-5 h-full">
            <PublicationCard article={articles[0]} isFeatured={true} />
          </div>

          {/* Column 2: 2x2 Grid Column (Right) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {articles.slice(1).map((article) => (
              <PublicationCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        {/* Modern Action Button */}
        <div className="text-center">
           <button className="px-10 py-4 bg-white border-2 border-slate-100 text-[12px] font-black uppercase tracking-[0.2em] text-slate-600 hover:bg-slate-900 hover:text-white transition-all rounded-full shadow-sm hover:shadow-lg">
              Read More Thought Leadership
           </button>
        </div>

      </div>
    </section>
  );
}