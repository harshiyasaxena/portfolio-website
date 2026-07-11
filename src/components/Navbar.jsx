import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants"; 
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const customNavLinks = [
    { id: "journey", title: "Journey" },
    { id: "skills", title: "Skills" },
    { id: "experience", title: "Experience" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" }, 
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-3 left-0 w-full z-50 px-5">
      <div
        className={`w-full flex items-center justify-between rounded-full border transition-all duration-500 px-6 sm:px-8 py-3 relative 
        ${scrolled
            ? "bg-[#05020c]/85 backdrop-blur-xl border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.15)]"
            : "bg-purple-950/10 backdrop-blur-md border-purple-500/10 shadow-[0_0_30px_rgba(168,85,247,0.05)]"
          }`}
      >
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <Link
            to='/'
            className='flex items-center h-12 pr-4 sm:pr-6 border-r border-purple-500/20 relative select-none'
            onClick={() => {
              setActive("");
              setToggle(false);
              window.scrollTo(0, 0);
            }}
          >
            <span className="absolute left-[-12px] top-[-2px] text-amber-300 animate-pulse text-lg">✦</span>
            <span className="absolute left-[-4px] bottom-[-2px] text-amber-200 text-[10px] opacity-60">✦</span>

            <span
              className="text-3xl sm:text-4xl font-normal text-purple-100 drop-shadow-[0_0_10px_rgba(216,180,254,0.6)] px-4 sm:px-5 leading-none"
              style={{ fontFamily: "'Alex Brush', cursive" }}
            >
              HS
            </span>

            <span className="absolute right-[10px] top-1 text-amber-200 text-[10px] opacity-70">✦</span>
            <span className="absolute right-[-4px] bottom-0 text-amber-300 text-base animate-pulse">✦</span>
          </Link>
        </div>

        {/* Center Section: Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {customNavLinks.map((nav) => {
            const isActive = active === nav.title;
            return (
              <li key={nav.id} className="relative py-2" onClick={() => setActive(nav.title)}>
                <a
                  href={`#${nav.id}`}
                  className={`text-[15px] font-medium transition-all duration-300 ${isActive ? "text-white" : "text-slate-400 hover:text-white"
                    }`}
                >
                  {nav.title}
                </a>
                {isActive && (
                  <div className="absolute bottom-[-6px] left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 to-fuchsia-400 rounded-full shadow-[0_0_12px_#d946ef]" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Right Section: Controls & Actions */}
        <div className="flex items-center gap-4">
          
          {/* ==================== CHANGED SECTION START ==================== */}
          <a 
            href="/Harshiya_Saxena_Resume.pdf" // Direct route to your file in public folder
            download="Harshiya_Saxena_Resume.pdf" // Tells browser to save the file
            className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium text-purple-100 bg-gradient-to-r from-purple-800/60 to-indigo-900/60 border border-purple-500/40 hover:border-purple-400/70 shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all duration-300 hover:scale-[1.03] select-none"
          >
            {/* New clear download box tray icon */}
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-300 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16v1a2 2 0 002 2h14a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {/* Plain label text visible across all window boundaries */}
            <span>Resume</span>
          </a>
          {/* ==================== CHANGED SECTION END ==================== */}

          {/* Mobile Hamburger Trigger Toggle Module */}
          <div className="md:hidden flex items-center">
            <img
              src={toggle ? close : menu}
              alt="navigation menu icon toggle"
              className="w-6 h-6 object-contain cursor-pointer select-none transition-transform duration-200 active:scale-95"
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${!toggle ? "hidden" : "flex"} 
              p-6 bg-[#090514]/95 border border-purple-500/20 backdrop-blur-2xl absolute top-16 right-0 mx-2 my-2 min-w-[200px] z-50 rounded-2xl shadow-2xl flex-col gap-4`}
            >
              <ul className="list-none flex flex-col gap-4 items-start justify-end">
                {customNavLinks.map((nav) => {
                  const isActive = active === nav.title;
                  return (
                    <li
                      key={nav.id}
                      className={`text-[16px] font-medium font-sans cursor-pointer transition-colors duration-200 w-full py-1 ${
                        isActive ? "text-purple-300 font-bold" : "text-slate-400"
                      }`}
                      onClick={() => {
                        setToggle(false);
                        setActive(nav.title);
                      }}
                    >
                      <a href={`#${nav.id}`} className="block w-full">
                        {nav.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;