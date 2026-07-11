import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Outer container: Full width with small padding so it doesn't touch the screen edge
    <nav className="fixed top-3 left-0 w-full z-50 px-5">

      {/* Inner container: Flexbox handles the positioning */}
      <div
        className={`w-full flex items-center justify-between rounded-full border transition-all duration-500 px-8 py-3 relative 
        ${scrolled
            ? "bg-[#05020c]/85 backdrop-blur-xl border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.15)]"
            : "bg-purple-950/10 backdrop-blur-md border-purple-500/10 shadow-[0_0_30px_rgba(168,85,247,0.05)]"
          }`}
      >

        {/* Left Section: Logo (Anchored Left) */}
        {/* Left Section: Logo (Anchored Left) */}
        <div className="flex items-center">
          <Link
            to='/'
            className='flex items-center h-12 pr-6 border-r border-purple-500/20 relative select-none'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            {/* All 4 Sparkles Restored Around the Monogram */}
            <span className="absolute left-[-12px] top-[-2px] text-amber-300 animate-pulse text-lg">✦</span>
            <span className="absolute left-[-4px] bottom-[-2px] text-amber-200 text-[10px] opacity-60">✦</span>

            <span
              className="text-4xl font-normal text-purple-100 drop-shadow-[0_0_10px_rgba(216,180,254,0.6)] px-5 leading-none"
              style={{ fontFamily: "'Alex Brush', cursive" }}
            >
              HS
            </span>

            <span className="absolute right-[10px] top-1 text-amber-200 text-[10px] opacity-70">✦</span>
            <span className="absolute right-[-4px] bottom-0 text-amber-300 text-base animate-pulse">✦</span>
          </Link>
        </div>

        {/* Center Section: Navigation Links (Centering naturally) */}
        <ul className="hidden sm:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((nav) => {
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

        {/* Right Section: Resume Button (Anchored Right) */}
        <div className="flex items-center">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-purple-100 bg-gradient-to-r from-purple-800/60 to-indigo-900/60 border border-purple-500/40 hover:border-purple-400/70 shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all duration-300 hover:scale-[1.03]">
            <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-3-3m3 3l3-3M8 20h8" />
            </svg>
            Resume
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;