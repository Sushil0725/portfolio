import React from "react";

const skills = [
  "React",
  "JavaScript",
  "TailwindCSS",
  "Node.js",
  "HTML5",
  "CSS3",
  "Git",
  "REST APIs",
];

const Skills = () => (
  <section id="skills" className="py-24 px-4 md:px-0 max-w-4xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Skills</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill) => (
        <span key={skill} className="px-6 py-2 rounded-full border border-white/20 bg-white/10 text-white text-lg font-medium shadow-sm hover:bg-white/20 transition-colors duration-200">
          {skill}
        </span>
      ))}
    </div>
  </section>
);

export default Skills;
