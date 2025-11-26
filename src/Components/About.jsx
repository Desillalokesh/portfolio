import React from 'react'
import aboutme from '../assets/personal/aboutme.jpg'
import { motion } from 'framer-motion'
import { ABOUT_TEXT } from '../constants'
import Education from './Education'

const About = () => {
    return (
        <div className='border-b border-slate-700/50 pb-16 relative'>
            {/* Section Title */}
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='mb-12 text-center text-4xl lg:text-5xl font-bold tracking-tight'>
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                    About Me
                </span>
            </motion.h1>

            <div className="flex flex-wrap lg:flex-nowrap gap-8 lg:gap-12">
                {/* Image Section - LEFT SIDE */}
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 lg:order-1">
                    <div className='flex items-center justify-center lg:justify-start'>
                        <div className="relative group">
                            {/* Subtle hover glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Image container */}
                            <div className="relative bg-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-4 shadow-xl">
                                {/* Corner accents */}
                                <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-cyan-400/70"></div>
                                <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-cyan-400/70"></div>
                                <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-cyan-400/70"></div>
                                <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-cyan-400/70"></div>

                                <img
                                    src={aboutme}
                                    alt="About Lokesh"
                                    className="rounded-xl w-full max-w-md h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Text Section - RIGHT SIDE */}
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 lg:order-2">
                    <div className="flex justify-center lg:justify-start h-full">
                        <div className="relative w-full lg:flex lg:items-center">
                            <div className="relative bg-slate-900/60 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 shadow-xl h-full flex items-center">
                                <div className="space-y-6 relative w-full">
                                    {/* Content */}
                                    <p className='text-lg leading-relaxed text-gray-300'>
                                        {ABOUT_TEXT}
                                    </p>
                                    
                                    {/* Status Indicators */}
                                    <div className="flex items-center gap-6 pt-4 border-t border-slate-700/50">
                                        <div className="flex items-center gap-2 text-sm">
                                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                            <span className="text-green-400 font-medium">Available</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                            <span className="text-cyan-400 font-medium">Open to Work</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Minimal corner accents */}
                                <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-cyan-400/40"></div>
                                <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-cyan-400/40"></div>
                                <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-cyan-400/40"></div>
                                <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-cyan-400/40"></div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Education Section */}
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-16">
                <div className="relative">
                        {/* Section Label */}
                        

                        <Education />
                        
                        {/* Minimal corner accents */}
                   
                </div>
            </motion.div>
        </div>
    )
}

export default About