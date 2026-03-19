import React, { useState } from "react";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const navItems = [
    { name: "Why e-Residency?", path: "/why" },
    {
      name: "How it works",
      path: "/how",
      children: [
        "Become an e-resident",
        "Start a company",
        "Run a company",
        "Pick-up locations"
      ]
    },
    { name: "Resources", path: "/resources" },
    { name: "Service Providers", path: "/providers" },
    { name: "Blog", path: "/blog" },
    { name: "Events", path: "/events" }
  ];

  return (

    <header className="w-full border-b bg-white">

      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-8 py-4">

        {/* LEFT LOGO */}

        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >
          <div className="w-8 h-8 bg-blue-600"></div>

          <div className="text-sm font-semibold leading-tight">
            ALTUS
            <div className="text-blue-600 text-xs">
              CAREER
            </div>
          </div>
        </div>

        {/* NAV LINKS */}

        <nav className="hidden lg:flex items-center gap-8">

          {navItems.map((item) => (

            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >

              <button
                onClick={() => navigate(item.path)}
                className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-black"
              >
                {item.name}

                {item.children && <ChevronDown size={16} />}
              </button>

              {/* DROPDOWN */}

              <AnimatePresence>

                {item.children && activeDropdown === item.name && (

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-0 top-full pt-6 w-[420px]"
                  >

                    <div className="bg-white shadow-xl border p-6 flex flex-col gap-4">

                      {item.children.map((child) => (

                        <div
                          key={child}
                          className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
                        >
                          {child}
                        </div>

                      ))}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </nav>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-6">

          <Search size={18} className="text-gray-600 cursor-pointer" />

          <button
            onClick={() => navigate("/login")}
            className="text-sm font-semibold text-gray-700"
          >
            Log in
          </button>

          <button
            onClick={() => navigate("/apply")}
            className="bg-blue-600 text-white px-5 py-2 text-sm font-semibold"
          >
            Apply now
          </button>

          {/* MOBILE MENU */}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>

        </div>

      </div>

    </header>

  );
}