    import React, { useState, useRef } from "react";
    import { motion, AnimatePresence } from "framer-motion";
    import { ChevronLeft, ChevronRight, BadgeCheck, Code, Paintbrush, Globe,Briefcase, Zap } from "lucide-react";

    export default function StudentNetwork() {
    const [activeTab, setActiveTab] = useState("Engineering");
    const scrollRef = useRef(null);

    const categories = [
        { name: "Engineering", icon: <Code size={18} /> },
        { name: "Designers", icon: <Paintbrush size={18} /> },
        { name: "Marketing", icon: <Zap size={18} /> },
        { name: "Management", icon: <Briefcase size={18} /> },
        { name: "Product", icon: <Globe size={18} /> },
    ];

    const allStudents = {
        "Engineering": [
        { name: "Adam Ivansky", role: "Python Developer", uni: "Stanford", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Stanford_University_logo.svg", img: "https://i.pravatar.cc/300?u=1", skills: ["SQL", "Python", "ML"] },
        { name: "Nimrod Talmon", role: "AI Developer", uni: "Google Tech", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", img: "https://i.pravatar.cc/300?u=2", skills: ["Data Science", "Neural Nets"] },
        { name: "Manuela Kajkara", role: "iOS Developer", uni: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg", img: "https://i.pravatar.cc/300?u=3", skills: ["Swift", "Objective-C"] },
        ],
        "Designers": [
        { name: "Elena Rossi", role: "UI/UX Designer", uni: "RISD", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo-Apple.referencia.png", img: "https://i.pravatar.cc/300?u=4", skills: ["Figma", "Adobe XD", "Prototyping"] },
        { name: "Julian Chen", role: "Brand Identity", uni: "UAL London", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", img: "https://i.pravatar.cc/300?u=5", skills: ["Illustrator", "Motion Graphics"] },
        { name: "Sarah Jenkins", role: "Product Designer", uni: "MIT", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", img: "https://i.pravatar.cc/300?u=6", skills: ["User Research", "Wireframing"] },
        ],
        "Marketing": [
        { name: "Marcus Thorne", role: "SEO Specialist", uni: "Oxford", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg", img: "https://i.pravatar.cc/300?u=7", skills: ["Analytics", "Content Strategy"] },
        { name: "Aria Varma", role: "Growth Hacker", uni: "UC Berkeley", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_logo%2C_revised_2016.svg", img: "https://i.pravatar.cc/300?u=8", skills: ["A/B Testing", "Paid Media"] },
        ],
        "Management": [
        { name: "David Wu", role: "Ops Manager", uni: "Harvard", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg", img: "https://i.pravatar.cc/300?u=9", skills: ["Agile", "Resource Planning"] },
        { name: "Sophie Muller", role: "Strategy Consultant", uni: "INSEAD", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Deloitte.svg", img: "https://i.pravatar.cc/300?u=10", skills: ["Market Analysis", "M&A"] },
        ],
        "Product": [
        { name: "Kevin Park", role: "Product Manager", uni: "Stanford", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", img: "https://i.pravatar.cc/300?u=11", skills: ["Roadmapping", "SQL", "Jira"] },
        { name: "Linda Blair", role: "Technical PM", uni: "CMU", logo: "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg", img: "https://i.pravatar.cc/300?u=12", skills: ["API Design", "Backlog Grooming"] },
        ]
    };

    const scroll = (dir) => {
        if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: dir === "left" ? -250 : 250, behavior: "smooth" });
        }
    };

    return (
        <section className="py-24 bg-white font-sans">
        <div className="max-w-[1300px] mx-auto px-8">
            
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-14 tracking-tight">
            Meet Talent in Our Network
            </h2>

            {/* CATEGORY NAV */}
            <div className="relative border-y border-gray-100 mb-12 flex items-center bg-gray-50/30">
            <button onClick={() => scroll("left")} className="p-4 text-gray-400 hover:text-indigo-600 transition-colors">
                <ChevronLeft size={24} />
            </button>
            
            <div ref={scrollRef} className="flex flex-1 overflow-x-auto no-scrollbar">
                {categories.map((cat) => (
                <button
                    key={cat.name}
                    onClick={() => setActiveTab(cat.name)}
                    className={`flex items-center gap-3 px-10 py-6 text-sm font-bold whitespace-nowrap transition-all border-b-4 ${
                    activeTab === cat.name 
                    ? "border-indigo-600 text-indigo-600 bg-white shadow-inner" 
                    : "border-transparent text-gray-400 hover:text-gray-700"
                    }`}
                >
                    {cat.icon} {cat.name}
                </button>
                ))}
            </div>

            <button onClick={() => scroll("right")} className="p-4 text-gray-400 hover:text-indigo-600 transition-colors">
                <ChevronRight size={24} />
            </button>
            </div>

            {/* GRID CONTAINER */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnimatePresence mode="wait">
                {allStudents[activeTab].map((student, i) => (
                <motion.div
                    key={student.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-gray-200 p-6 flex flex-col group hover:shadow-xl transition-all duration-300"
                >
                    {/* Profile Pic */}
                    <div className="relative mb-6 overflow-hidden aspect-[4/5] bg-gray-50">
                    <img src={student.img} alt={student.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-0 left-0 bg-indigo-600 p-1.5 shadow-lg">
                        <BadgeCheck size={16} className="text-white" />
                    </div>
                    </div>

                    {/* Identity */}
                    <h4 className="text-lg font-bold text-indigo-700 hover:underline cursor-pointer mb-1 tracking-tight">
                    {student.name}
                    </h4>
                    <div className="flex items-center gap-1.5 text-[11px] text-green-600 font-extrabold uppercase tracking-wider mb-4">
                    <BadgeCheck size={12} fill="currentColor" className="text-white" />
                    Verified Student
                    </div>

                    <p className="text-gray-500 text-sm font-semibold mb-6 italic">
                    {student.role}
                    </p>

                    {/* Skills */}
                    <div className="mb-8">
                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-3">Expertise</p>
                    <div className="flex flex-wrap gap-2">
                        {student.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 text-[11px] border border-gray-100 rounded-full text-gray-500 font-bold bg-gray-50 group-hover:bg-white group-hover:border-indigo-100 transition-colors">
                            {skill}
                        </span>
                        ))}
                    </div>
                    </div>

                    {/* Footer Logo */}
                    <div className="mt-auto pt-6 border-t border-gray-100">
                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-4">Studying at</p>
                    <div className="h-8 flex items-center">
                        <img src={student.logo} alt="Uni" className="h-full w-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                    </div>
                    </div>
                </motion.div>
                ))}
            </AnimatePresence>

            {/* Persistent CTA Card */}
            <div className="bg-[#051a49] text-white p-10 flex flex-col items-center justify-center text-center relative overflow-hidden rounded-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                <div className="relative z-10">
                <div className="w-14 h-14 border-4 border-[#00d991] rotate-45 mx-auto mb-8 flex items-center justify-center">
                    <div className="w-6 h-6 bg-[#00d991]"></div>
                </div>
                <h3 className="text-2xl font-bold leading-tight mb-4">Explore 500+ More {activeTab} Experts</h3>
                <p className="text-indigo-300 text-xs font-medium mb-10 tracking-wide uppercase">Altus Global Network</p>
                <button className="w-full py-4 bg-[#00d991] hover:bg-[#00f2a2] text-[#051a49] font-black rounded-lg transition-all transform hover:scale-105 shadow-lg uppercase text-xs tracking-widest">
                    Discover Talent
                </button>
                </div>
            </div>
            </div>

        </div>
        </section>
    );
    }