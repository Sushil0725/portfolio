import React from "react";

const Projects = () => (
  <section id="projects" className="py-24 px-4 md:px-0 max-w-5xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">Projects</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {/* Example project card */}
      <div className="bg-white/5 rounded-xl p-6 shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300">
        <h3 className="text-xl font-semibold text-white mb-2">Project Title</h3>
        <p className="text-gray-300 mb-4">Short project description goes here. Highlight features, tech stack, and your role.</p>
        <a href="#" className="text-blue-300 hover:underline">View Details</a>
      </div>
      {/* Add more project cards here */}
    </div>
  </section>
);

export default Projects;
