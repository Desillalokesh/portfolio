import React from 'react'
import aboutme from '../assets/personal/aboutme.jpg'
import { motion } from 'framer-motion'
import { ABOUT_TEXT } from '../constants'
import Education from './Education'

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, delay: delay, type: "spring", stiffness: 100 },
    },
})

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 relative overflow-hidden'>
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-600/5 to-teal-600/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-600/8 to-blue-600/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '6s' }} />
            </div>

            {/* Enhanced Title */}
       

            <div className="flex flex-wrap lg:flex-nowrap gap-4 relative z-10">
                {/* Enhanced Image Section - LEFT SIDE */}
                <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1}}
                    className="w-full lg:w-1/2 lg:order-1">
                    <div className='flex items-center justify-center lg:justify-start'>
                        <motion.div
                            initial={{ x: -100, opacity: 0, scale: 0.8 }}
                            whileInView={{ x: 0, opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 100 }}
                            className="relative group"
                        >
                            {/* Animated Border */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
                            
                            {/* Glassmorphism Frame */}
                            <div className="relative backdrop-blur-xl bg-gray-900/20 border border-gray-700/40 rounded-3xl p-2 shadow-2xl shadow-black/50">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    src={aboutme}
                                    alt="aboutme"
                                    className="rounded-3xl w-80 h-auto shadow-xl shadow-black/30"
                                />
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-2 rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>

                            {/* Floating Elements around Image */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm animate-pulse" />
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2s' }} />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Enhanced Text Section - RIGHT SIDE */}
                <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1}}
                    className="w-full lg:w-1/2 lg:order-2">
                    <div className="flex justify-center lg:justify-start h-full">
                        <motion.div
                            variants={container(0.5)}
                            initial="hidden"
                            whileInView="visible"
                            className="relative group w-full lg:flex lg:items-center"
                        >
                            {/* Enhanced Glassmorphism Background */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-3xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                            
                            <div className="relative backdrop-blur-xl bg-gray-900/20 border border-gray-700/40 rounded-3xl p-6 shadow-2xl shadow-black/50 h-full flex items-center">
                                <div className="space-y-4 relative">
                                                <motion.h1
                whileInView={{opacity:1, y: 0}}
                initial= {{opacity:0, y: -100}}
                transition={{duration: 1}}
                className='mb-8 text-center text-4xl lg:text-6xl font-bold tracking-tighter relative z-10'>
                <span className="bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent">
                    Passion &
                </span>{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Purpose
                </span>
            </motion.h1>
                                    {/* Decorative Line */}
                                    <div className="h-1 w-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full mb-4 shadow-lg shadow-purple-500/20"></div>
                                    
                                    {/* Enhanced Text */}
                                    <p className='text-xl leading-relaxed text-gray-300 font-light tracking-wide'>
                                        {ABOUT_TEXT}
                                    </p>
                                    
                                    {/* Enhanced Status Indicators */}
                                    <div className="flex space-x-3 pt-4">
                                        <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/30"></div>
                                        <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full animate-pulse delay-75 shadow-lg shadow-purple-500/30"></div>
                                        <div className="w-3 h-3 bg-gradient-to-r from-pink-400 to-pink-500 rounded-full animate-pulse delay-150 shadow-lg shadow-pink-500/30"></div>
                                    </div>
                                </div>

                                {/* Enhanced Floating Elements */}
                                <div className="absolute top-6 right-6 w-4 h-4 bg-blue-400/20 rounded-full animate-ping"></div>
                                <div className="absolute bottom-6 left-6 w-3 h-3 bg-purple-400/20 rounded-full animate-ping delay-300"></div>
                                <div className="absolute top-1/2 right-4 w-2 h-2 bg-pink-400/30 rounded-full animate-pulse delay-500"></div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Enhanced Education Section */}
            <motion.div
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: 50}}
                transition={{duration: 1, delay: 0.5}}
                className="mt-12 relative z-10">
                <div className="relative group">
                    {/* Enhanced Background Glow */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 rounded-3xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    <div className="relative backdrop-blur-xl bg-gray-900/20 border border-gray-700/40 rounded-3xl p-4 shadow-2xl shadow-black/50">
                        <Education />
                        
                        {/* Enhanced Decorative Elements */}
                        <div className="absolute top-6 right-6 w-4 h-4 border-2 border-emerald-400/50 rounded-full animate-spin-slow"></div>
                        <div className="absolute bottom-6 left-6 w-3 h-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full animate-pulse shadow-lg shadow-teal-500/30"></div>
                        <div className="absolute top-1/2 right-8 w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full animate-pulse delay-700"></div>
                    </div>
                </div>
            </motion.div>

            {/* Enhanced Floating Background Elements */}
            <div className="absolute top-32 right-12 w-2 h-2 bg-white/20 rounded-full animate-pulse hidden lg:block"></div>
            <div className="absolute top-64 left-12 w-2 h-2 bg-white/20 rounded-full animate-pulse delay-500 hidden lg:block"></div>
            <div className="absolute bottom-32 right-16 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse delay-1000 hidden lg:block"></div>
            <div className="absolute bottom-48 left-20 w-1 h-1 bg-purple-400/30 rounded-full animate-pulse delay-1500 hidden lg:block"></div>

            {/* Additional Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-10 left-0 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }} />
        </div>
    )
}

export default About