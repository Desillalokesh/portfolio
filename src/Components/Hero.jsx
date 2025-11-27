import React from "react";
import profile from "../assets/personal/profile.webp";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.6, delay: delay },
    },
});

const Hero = () => {
    return (
        <div className="relative pb-8 lg:pb-16">
            <div className="flex flex-wrap lg:flex-row-reverse items-center">
                
                {/* Profile Image Section */}
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative group"
                        >
                            {/* Subtle hover glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Image container */}
                            <div className="relative bg-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-4 shadow-xl">
                                {/* Corner accents */}
                                <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-cyan-400/70"></div>
                                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-cyan-400/70"></div>
                                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-cyan-400/70"></div>
                                <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-cyan-400/70"></div>

                                {/* Status indicator */}
                                <div className="absolute top-5 right-5 flex items-center gap-2 bg-slate-900/90 px-3 py-1.5 rounded-full border border-green-400/40 backdrop-blur-sm">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    <span className="text-xs font-mono text-green-400">AVAILABLE</span>
                                </div>

                                <img
                                    src={profile}
                                    alt="Lokesh - Junior Fullstack Developer"
                                    className="rounded-xl w-full max-w-md h-auto"
                                    width="400"
                                    height="400"
                                    fetchpriority="high"
                                    decoding="async"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start mt-10 lg:mt-0 px-6 lg:px-8">
                        
                        {/* Name */}
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="text-5xl lg:text-7xl font-bold tracking-tight mb-4"
                        >
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Lokesh
                            </span>
                        </motion.h1>

                        {/* Role */}
                        <motion.div
                            variants={container(0.2)}
                            initial="hidden"
                            animate="visible"
                            className="mb-6"
                        >
                            <div className="inline-block bg-slate-900/60 backdrop-blur-sm border border-purple-500/30 rounded-lg px-6 py-3">
                                <p className="text-lg lg:text-xl font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                    Junior Fullstack Developer @Socialbytes
                                </p>
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.div
                            variants={container(0.4)}
                            initial="hidden"
                            animate="visible"
                            className="w-full max-w-xl"
                        >
                            <div className="bg-slate-900/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
                                <p className="text-lg leading-relaxed text-gray-300">
                                    {HERO_CONTENT}
                                </p>

                                {/* Stats */}
                                <div className="mt-8 pt-6 border-t border-slate-700/50">
                                    <div className="grid grid-cols-3 gap-4 text-center font-mono text-sm">
                                        <div>
                                            <div className="text-green-400 font-semibold text-lg">24/7</div>
                                            <div className="text-gray-500 text-xs mt-1">Available</div>
                                        </div>
                                        <div>
                                            <div className="text-cyan-400 font-semibold text-lg">Full Stack</div>
                                            <div className="text-gray-500 text-xs mt-1">Developer</div>
                                        </div>
                                        <div>
                                            <div className="text-purple-400 font-semibold text-lg">∞</div>
                                            <div className="text-gray-500 text-xs mt-1">Learning</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Minimal corner accents */}
                                <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-cyan-400/40"></div>
                                <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-cyan-400/40"></div>
                                <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-cyan-400/40"></div>
                                <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-cyan-400/40"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;