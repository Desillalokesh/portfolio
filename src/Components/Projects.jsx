import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, rotateY: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 120,
        damping: 20
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900 py-20 px-4">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Enhanced Title */}
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.5,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-6 relative"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            Projects
            <motion.div 
              className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-xl rounded-full opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.div>

        {/* Projects Container */}
        <motion.div 
          variants={containerVariants}
          className="space-y-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className="relative"
            >
              {/* Glassmorphism Container */}
              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden transition-all duration-500">
                
                <div className="flex flex-wrap lg:justify-center relative z-10">
                  {/* Image Section */}
                  <motion.div
                    variants={imageVariants}
                    className="w-full lg:w-1/4 relative"
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 5,
                        transition: { duration: 0.4 }
                      }}
                      className="relative group/image"
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        width={250}
                        height={240}
                        className="mb-6 rounded-xl shadow-2xl border border-white/20 group-hover/image:shadow-purple-500/20 transition-all duration-500 relative z-10"
                      />
                      {/* Image border glow effect - positioned behind image */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Content Section */}
                  <motion.div
                    variants={contentVariants}
                    className="w-full max-w-xl ml-0 lg:ml-10 lg:w-3/4 relative"
                  >
                    {/* Project Title */}
                    <motion.h3 
                      className="mb-4 font-bold text-2xl md:text-3xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent relative"
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {project.title}
                      <motion.div 
                        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                      />
                    </motion.h3>
                    
                    {/* Project Description */}
                    <motion.p 
                      className="text-gray-300 mb-6 leading-relaxed text-lg"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                    
                    {/* Technologies */}
                    <motion.div 
                      className="flex flex-wrap gap-3"
                      initial="hidden"
                      whileInView="visible"
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                    >
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          variants={{
                            hidden: { opacity: 0, scale: 0.8, y: 20 },
                            visible: { 
                              opacity: 1, 
                              scale: 1, 
                              y: 0,
                              transition: {
                                duration: 0.5,
                                type: "spring",
                                stiffness: 200,
                                damping: 10
                              }
                            }
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            y: -2,
                            boxShadow: "0 10px 25px rgba(168, 85, 247, 0.3)",
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 rounded-full bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-white/10 text-sm font-medium text-gray-200 hover:text-white hover:border-purple-400/50 transition-all duration-300 cursor-pointer"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
              

            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;