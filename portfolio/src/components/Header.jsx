import React from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  return (
  <header className="fixed top-0 left-0 w-full z-20 h-24 flex items-center pointer-events-none border-t-4 border-white">
  <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-12 sm:px-20 pointer-events-auto">
        {/* Logo on the left */}
        <div className="flex items-center gap-2 select-none">
          <span className="text-2xl font-extrabold text-white tracking-tight">Sushil</span>
        </div>

        {/* Center floating navbar */}
  <div className="absolute left-1/2 top-0 -translate-x-1/2">
          {/* Border wrapper for trapezium */}
          <div
            className="hidden md:flex p-[3px] bg-gradient-to-r from-black via-white to-black"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)',
              borderRadius: '10px',
            }}
          >
            <div
              className="bg-black/60 backdrop-blur-lg shadow-2xl px-10 py-4 gap-10 flex w-full"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)',
                borderRadius: '8px',
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-white text-lg font-semibold px-3 py-1 rounded transition-colors duration-200 group hover:text-white"
                  onMouseEnter={e => {
                    const id = link.href.replace('#', '');
                    const el = document.getElementById(id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {link.name}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:w-3/4"></span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Hamburger menu on the right (visible on all screens) */}
        <button className="flex flex-col justify-center items-center w-10 h-10 group transition-transform duration-300 hover:rotate-90" aria-label="Open menu">
          <span className="block w-7 h-1 bg-white rounded-full mb-1.5 transition-all duration-300"></span>
          <span className="block w-7 h-1 bg-white rounded-full mb-1.5 transition-all duration-300"></span>
          <span className="block w-7 h-1 bg-white rounded-full transition-all duration-300"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
