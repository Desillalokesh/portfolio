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
        fill: "rgba(147, 197, 253, 0.8)",
    },
    visible: {
        pathLength: 1,
        fill: "rgba(147, 197, 253, 1)",
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
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" />
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <motion.nav
                ref={accordionRef}
                initial={false}
                animate={isOpen ? "open" : "closed"}
                className="relative backdrop-blur-xl bg-black/40 border border-gray-700/50 rounded-3xl shadow-2xl shadow-black/50 overflow-hidden"
            >
                {/* Glassmorphism Header Button */}
                <motion.button
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.01 }}
                    onClick={toggleAccordion}
                    className="relative w-full text-left p-8 text-white bg-gradient-to-r from-gray-900/60 to-black/40 backdrop-blur-xl border-b border-gray-700/30 flex justify-between items-center group transition-all duration-500 hover:from-blue-900/30 hover:to-purple-900/30"
                >
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-700" />
                    
                    {/* Title with Gradient */}
                    <span className="relative text-2xl font-bold bg-gradient-to-r from-gray-100 via-blue-200 to-purple-300 bg-clip-text text-transparent">
                        From Campus to Career
                    </span>
                    
                    {/* Enhanced Rotating Icon */}
                    <motion.div
                        variants={{
                            open: { rotate: 180, scale: 1.1 },
                            closed: { rotate: 0, scale: 1 },
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="flex-shrink-0 p-2 rounded-full bg-gray-800/60 backdrop-blur-sm border border-gray-600/50 group-hover:bg-blue-900/40 group-hover:border-blue-500/50 transition-all duration-300"
                    >
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
                                className="text-blue-400"
                            />
                        </svg>
                    </motion.div>
                </motion.button>

                {/* Animated Content */}
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
                            <div className="backdrop-blur-xl bg-gradient-to-br from-gray-900/40 to-black/60 p-2">
                                {EDUCATION.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="relative m-4 p-6 rounded-2xl backdrop-blur-lg bg-gray-900/30 border border-gray-700/40 shadow-xl shadow-black/40 hover:bg-gray-800/40 hover:border-gray-600/60 hover:shadow-blue-500/10 transition-all duration-500 group"
                                    >
                                        {/* Card Background Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        {/* Content */}
                                        <div className="relative space-y-3">
                                            <div className="flex items-start justify-between">
                                                <h3 className="text-xl font-bold text-gray-100 group-hover:text-blue-300 transition-colors duration-300">
                                                    {edu.degree}
                                                </h3>
                                                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50" />
                                            </div>
                                            
                                            <div className="text-blue-400 font-semibold text-lg">
                                                {edu.institution}
                                            </div>
                                            
                                            <div className="flex flex-wrap gap-4 mt-4">
                                                <div className="px-3 py-1 rounded-full bg-gradient-to-r from-emerald-900/40 to-teal-900/40 border border-emerald-500/40 shadow-sm shadow-emerald-500/20">
                                                    <span className="text-emerald-400 text-sm font-medium">{edu.fieldOfStudy}</span>
                                                </div>
                                                
                                                <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-900/40 to-indigo-900/40 border border-blue-500/40 shadow-sm shadow-blue-500/20">
                                                    <span className="text-blue-400 text-sm font-medium">{edu.duration}     </span>
                                                </div>
                                                
                                                
                                            </div>
                                            
                                            {/* Decorative Line */}
                                            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-gray-600/40 to-transparent" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </div>
    );
};

export default Education;