import React from "react";

const Hero = () => (
  <section id="home" className="min-h-[80vh] flex flex-col justify-center items-center text-center relative z-10">
    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">Sushil Bhattarai</h1>
    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">I build elegant, interactive, and modern web experiences. Welcome to my portfolio.</p>
    <a href="#projects" className="inline-block px-8 py-3 rounded-full border-2 border-white text-white font-semibold hover:bg-white hover:text-black transition-colors duration-300">View Projects</a>
  </section>
);

export default Hero;
