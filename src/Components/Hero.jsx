import React from "react";
import profile from "../assets/personal/profile.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, delay: delay, type: "spring", stiffness: 100 },
    },
})

const Hero = () => {
    return (
        <div className="relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-600/5 to-teal-600/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
            </div>

            <div className="pb-0 lg:mb-0">
                <div className="flex flex-wrap lg:flex-row-reverse">
                    
                    {/* Profile Image Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex justify-center lg:p-6">
                            <motion.div
                                initial={{ x: 100, opacity: 0, scale: 0.8 }}
                                animate={{ x: 0, opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, delay: 1.2, type: "spring", stiffness: 100 }}
                                className="relative group"
                            >
                                {/* Animated Border */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
                                
                                {/* Glassmorphism Frame */}
                                <div className="relative backdrop-blur-xl bg-gray-900/20 border border-gray-700/40 rounded-3xl p-2 shadow-2xl shadow-black/50">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        src={profile}
                                        alt="Lokesh"
                                        className="rounded-3xl w-96 h-auto shadow-xl shadow-black/30"
                                    />
                                    
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-2 rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col items-center lg:items-start mt-10 relative">
                            
                            {/* Name */}
                            <motion.h2
                                variants={container(0)}
                                initial="hidden"
                                animate="visible"
                                className="pb-4 text-4xl lg:text-8xl font-bold tracking-tighter"
                            >
                                <span className="bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent">
                                  
                                </span>{" "}
                                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                   Lokesh
                                </span>
                            </motion.h2>

                            {/* Title */}
                            <motion.div
                                variants={container(0.5)}
                                initial="hidden"
                                animate="visible"
                                className="relative mb-6"
                            >
                                <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-3xl tracking-tighter text-transparent font-semibold">
                                    Web & Mobile Developer @ Social Bytes | Scalable & User-Focused
                                </span>
                            </motion.div>

                            {/* Description */}
                            <motion.p
                                variants={container(1)}
                                initial="hidden"
                                animate="visible"
                                className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-gray-300"
                            >
                                {HERO_CONTENT}
                            </motion.p>

                            
                            
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl animate-pulse" />
                            <div className="absolute bottom-10 left-0 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;