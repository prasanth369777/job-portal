import React, { useState } from "react";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Explore Jobs",
      path: "/explore"
    },
    {
      name: "Products",
      children: [
        { title: "Talent OS", path: "/products/talent" },
        { title: "Global Payroll", path: "/products/payroll" }
      ]
    },
    {
      name: "Pricing",
      path: "/pricing"
    }
  ];

  return (

    <header className="w-full bg-white border-b border-gray-200">

      <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center justify-between">

        {/* LOGO */}

        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer"
        >

          <div className="w-8 h-8 bg-blue-600"></div>

          <div className="leading-tight">
            <div className="text-sm font-semibold text-gray-800">
              ALTUS
            </div>

            <div className="text-xs text-blue-600 font-semibold">
              CAREER
            </div>
          </div>

        </div>


        {/* NAVIGATION */}

        <nav className="hidden lg:flex items-center gap-8">

          {navItems.map((item) => (

            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >

              <button
                onClick={() => item.path && navigate(item.path)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black"
              >

                {item.name}

                {item.children && <ChevronDown size={16} />}

              </button>


              {/* DROPDOWN */}

              <AnimatePresence>

                {item.children && activeDropdown === item.name && (

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-0 top-full pt-5 w-[320px]"
                  >

                    <div className="bg-white border shadow-lg p-6 flex flex-col gap-4">

                      {item.children.map((child) => (

                        <div
                          key={child.title}
                          onClick={() => navigate(child.path)}
                          className="cursor-pointer text-gray-700 hover:text-blue-600 text-sm"
                        >

                          {child.title}

                        </div>

                      ))}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </nav>


        {/* RIGHT ACTIONS */}

        <div className="flex items-center gap-6">

          {/* SEARCH BAR */}

          <div className="hidden md:flex items-center border border-gray-300 px-3 py-2 w-64">

            <Search size={16} className="text-gray-400 mr-2"/>

            <input
              placeholder="Search..."
              className="outline-none w-full text-sm"
            />

          </div>


          <button
            onClick={() => navigate("/login")}
            className="text-sm text-gray-700 font-medium"
          >
            Log in
          </button>


          <button
            onClick={() => navigate("/apply")}
            className="bg-blue-600 text-white px-5 py-2 text-sm font-semibold hover:bg-blue-700"
          >
            Apply now
          </button>


          {/* MOBILE */}

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden"
          >
            <Menu size={22}/>
          </button>

        </div>

      </div>



      {/* MOBILE MENU */}

      <AnimatePresence>

        {mobileMenuOpen && (

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 bg-white z-[200] p-10 flex flex-col"
          >

            <div className="flex justify-between items-center mb-10">

              <span className="text-xl font-bold">Altus</span>

              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24}/>
              </button>

            </div>

            <div className="flex flex-col gap-8">

              {navItems.map(item => (

                <button
                  key={item.name}
                  onClick={() => {
                    if(item.path) navigate(item.path)
                    setMobileMenuOpen(false)
                  }}
                  className="text-2xl font-semibold text-left"
                >
                  {item.name}
                </button>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>

  );
}