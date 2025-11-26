import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className='border-b border-slate-700/50 pb-24 relative'>
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='my-20 text-center text-4xl lg:text-5xl font-bold tracking-tight'>
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto space-y-16">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap lg:flex-nowrap gap-8 items-center"
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/3">
              <div className="relative group">
                {/* Subtle hover glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Image container */}
                <div className="relative bg-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-4 shadow-xl overflow-hidden">
                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-cyan-400/70 z-10"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-cyan-400/70 z-10"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-cyan-400/70 z-10"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-cyan-400/70 z-10"></div>

                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.description.substring(0, 100)}...`}
                    className="rounded-xl w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    width="400"
                    height="300"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="w-full lg:w-2/3">
              <div className="relative bg-slate-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 shadow-xl">
                {/* Project Title */}
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className='text-lg leading-relaxed text-gray-300 mb-6'>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-cyan-500/30 text-sm text-cyan-300 hover:border-cyan-400/50 hover:scale-105 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                {(project.link || project.github) && (
                  <div className="flex gap-4 pt-4 border-t border-slate-700/50">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-cyan-500/10 border border-cyan-500/50 rounded-lg text-cyan-400 font-medium hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                      >
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2.5 bg-purple-500/10 border border-purple-500/50 rounded-lg text-purple-400 font-medium hover:bg-purple-500/20 hover:border-purple-400 transition-all duration-300 hover:scale-105"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                )}

                {/* Minimal corner accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-cyan-400/40"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-cyan-400/40"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-cyan-400/40"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-cyan-400/40"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;