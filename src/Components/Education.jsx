import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EDUCATION } from "../constants";

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 300, damping: 24, duration: 0.4 },
    },
    closed: {
        opacity: 0,
        y: 30,
        scale: 0.95,
        transition: { duration: 0.2 },
    },
};

const accordionVariants = {
    open: {
        height: "auto",
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0% round 20px)",
        transition: {
            type: "spring",
            bounce: 0.1,
            duration: 0.8,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        },
    },
    closed: {
        height: 0,
        opacity: 0,
        clipPath: "inset(10% 50% 90% 50% round 20px)",
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.4,
        },
    },
};

const icon = {
    hidden: {
        pathLength: 0,
        fill: "rgba(34, 211, 238, 0.8)",
    },
    visible: {
        pathLength: 1,
        fill: "rgba(34, 211, 238, 1)",
    },
};

const Education = () => {
    const [isOpen, setIsOpen] = useState(false);
    const accordionRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative max-w-4xl mx-auto p-6">
            {/* Tech Background Elements - Matching About section */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                {/* Digital Grid */}
                <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full" 
                         style={{
                             backgroundImage: `
                                 linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
                             `,
                             backgroundSize: '30px 30px'
                         }} />
                </div>

                {/* Floating Code Elements */}
                <div className="absolute top-10 left-10 text-4xl text-cyan-500/20 font-mono animate-pulse">{'<>'}</div>
                <div className="absolute bottom-10 right-10 text-3xl text-green-400/20 font-mono animate-pulse" style={{ animationDelay: '2s' }}>{'{}}'}</div>
                <div className="absolute top-1/2 left-1/4 text-5xl text-purple-500/10 font-mono animate-pulse" style={{ animationDelay: '4s' }}>{'[]'}</div>

                {/* Circuit Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="#22d3ee" strokeWidth="1" fill="none" className="animate-pulse">
                        <path d="M0 50 Q200 25 400 50 T800 50" />
                        <path d="M0 150 Q300 125 600 150 T1200 150" />
                        <circle cx="200" cy="50" r="2" fill="#22d3ee" />
                        <circle cx="600" cy="150" r="2" fill="#22d3ee" />
                    </g>
                </svg>

                {/* Floating Data Particles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-15, 15, -15],
                            opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}

                {/* Glowing tech orbs */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-cyan-500/30 animate-pulse"
                     style={{ 
                         background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1), transparent)',
                         boxShadow: '0 0 30px rgba(6, 182, 212, 0.2)',
                         animationDuration: '4s'
                     }} />
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full border border-green-500/30 animate-pulse"
                     style={{ 
                         background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1), transparent)',
                         boxShadow: '0 0 25px rgba(34, 197, 94, 0.2)',
                         animationDuration: '6s',
                         animationDelay: '2s'
                     }} />
            </div>

            <motion.nav
                ref={accordionRef}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="relative bg-gray-900/80 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
            >
                {/* Tech Header Button */}
                <motion.button
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.01 }}
                    onClick={toggleAccordion}
                    className="relative w-full text-left p-8 text-white bg-gray-900/60 border-b border-cyan-500/30 flex justify-between items-center group transition-all duration-500 hover:bg-gray-800/80"
                >
                    {/* Holographic glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-green-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-green-500/10 group-hover:to-purple-500/10 transition-all duration-700" />
                    
                    {/* Terminal-style decoration */}
                    <div className="absolute top-4 left-4 flex space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    
                    {/* Title with tech styling */}
                    <div className="relative ml-8">
                        <div className="font-mono text-cyan-400 text-sm mb-1">{'// Educational Journey'}</div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-green-400 bg-clip-text text-transparent font-mono">
                            {'<'}Campus_To_Career{' />'}
                        </span>
                        <span className="inline-block w-2 h-6 bg-cyan-400 ml-2 animate-pulse" />
                    </div>
                    
                    {/* Enhanced Tech Icon */}
                    <motion.div
                        variants={{
                            open: { rotate: 180, scale: 1.1 },
                            closed: { rotate: 0, scale: 1 },
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="flex-shrink-0 p-2 rounded-full bg-gray-800/60 backdrop-blur-sm border-2 border-cyan-500/50 group-hover:border-cyan-400 transition-all duration-300 relative"
                    >
                        {/* Corner accents */}
                        <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-cyan-400/70"></div>
                        <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-cyan-400/70"></div>
                        <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-cyan-400/70"></div>
                        <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-cyan-400/70"></div>
                        
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 100"
                            width="24"
                            height="24"
                        >
                            <motion.path
                                d="M20 40l30 30 30-30"
                                stroke="currentColor"
                                strokeWidth="8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                variants={icon}
                                initial="hidden"
                                animate={isOpen ? "visible" : "hidden"}
                                className="text-cyan-400"
                            />
                        </svg>
                    </motion.div>

                    {/* Status LED */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                </motion.button>

                {/* Animated Content with Tech Styling */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            variants={accordionVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            style={{ pointerEvents: isOpen ? "auto" : "none" }}
                            className="overflow-hidden"
                        >
                            <div className="bg-gray-900/60 backdrop-blur-sm p-2">
                                {EDUCATION.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="relative m-4 p-6 rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 shadow-xl shadow-black/40 hover:border-cyan-400/60 hover:shadow-cyan-500/20 transition-all duration-500 group"
                                    >
                                        {/* Tech Background Elements */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-green-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        {/* Digital corner elements */}
                                        <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-cyan-400/50"></div>
                                        <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-cyan-400/50"></div>
                                        <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-cyan-400/50"></div>
                                        <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-cyan-400/50"></div>

                                        {/* Content */}
                                        <div className="relative space-y-4">
                                            {/* Terminal header */}
                                            <div className="flex items-center mb-3 font-mono text-xs text-green-400">
                                                <div className="flex space-x-1 mr-2">
                                                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                                                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                                </div>
                                            </div>

                                            <div className="flex items-start justify-between">
                                                <div className="space-y-2">
                                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 font-mono">
                                                        {edu.degree}
                                                    </h3>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" />
                                                    <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse delay-300" />
                                                    <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-500" />
                                                </div>
                                            </div>
                                            
                                            <div className="space-y-2">
                                                <div className="text-cyan-400 font-semibold text-lg font-mono">
                                                    {edu.institution}
                                                </div>
                                            </div>
                                            
                                            {/* Tech-styled badges */}
                                            <div className="flex flex-wrap gap-3 mt-4">
                                                <div className="relative px-4 py-2 rounded-lg bg-gray-800/80 border border-green-500/40 shadow-sm shadow-green-500/20 group/badge hover:border-green-400/60 transition-all duration-300">
                                                    <div className="absolute top-1 left-1 w-1 h-1 bg-green-400 rounded-full"></div>
                                                    <div className="absolute bottom-1 right-1 w-1 h-1 bg-green-400 rounded-full"></div>
                                                    <span className="text-green-400 text-sm font-mono">{edu.fieldOfStudy}</span>
                                                </div>
                                                
                                                <div className="relative px-4 py-2 rounded-lg bg-gray-800/80 border border-cyan-500/40 shadow-sm shadow-cyan-500/20 group/badge hover:border-cyan-400/60 transition-all duration-300">
                                                    <div className="absolute top-1 left-1 w-1 h-1 bg-cyan-400 rounded-full"></div>
                                                    <div className="absolute bottom-1 right-1 w-1 h-1 bg-cyan-400 rounded-full"></div>
                                                    <span className="text-cyan-400 text-sm font-mono">{edu.duration}</span>
                                                </div>
                                            </div>
                                            
                                            {/* Tech decorative line */}
                                            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent shadow-sm shadow-cyan-400/20" />
                                            
                                            {/* Status indicator */}
                                            <div className="flex items-center space-x-2 mt-3 font-mono text-xs">
                                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/30"></div>
                                            </div>
                                        </div>

                                        {/* Floating tech elements */}
                                        <div className="absolute top-4 right-4 text-cyan-400/30 font-mono text-xs animate-pulse">{'<>'}</div>
                                        <div className="absolute bottom-4 left-4 text-green-400/30 font-mono text-xs animate-pulse delay-300">{'{}}'}</div>
                                        <div className="absolute top-1/2 right-6 text-purple-400/30 font-mono text-xs animate-pulse delay-500">{'[]'}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Tech border decoration */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-cyan-400/70 rounded-tl-lg"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-cyan-400/70 rounded-tr-lg"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-cyan-400/70 rounded-bl-lg"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-cyan-400/70 rounded-br-lg"></div>
            </motion.nav>

            {/* Additional floating tech elements */}
            <div className="absolute top-16 right-8 w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse"></div>
            <div className="absolute top-32 left-8 w-1 h-1 bg-green-400/40 rounded-full animate-pulse delay-700"></div>
            <div className="absolute bottom-16 right-12 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-1000"></div>
            
            {/* Matrix-style data streams */}
            <div className="absolute inset-0 pointer-events-none opacity-15">
                <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
                <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
        </div>
    );
};

export default Education;