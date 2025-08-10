import React from 'react';
import {  AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';
import { motion } from 'framer-motion';
import logo from '../assets/personal/dp.jpg'

const Footer = () => {
    return (
        <footer className="relative text-white py-12 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-600/5 to-teal-600/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }} />
            </div>

            <motion.div 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: 50}}
                transition={{type: "spring", stiffness: 300, damping: 24, duration: 0.8}}
                className="container mx-auto px-4"
            >
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-gray-900/40 to-black/60 border border-gray-700/40 rounded-3xl shadow-2xl shadow-black/50 p-8 md:p-10 lg:p-12">
                    {/* Subtle inner glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-3xl" />
                    
                    <div className="relative flex flex-col md:flex-row md:justify-between lg:justify-around items-center md:items-start">
                        
                        {/* Profile Section */}
                        <motion.div 
                            whileInView={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: -50}}
                            transition={{type: "spring", stiffness: 300, damping: 24, duration: 0.8, delay: 0.2}}
                            className="mb-8 md:mb-0 lg:w-1/2 xl:w-1/3 text-center md:text-left"
                        >
                            <div className="flex justify-center md:justify-start items-center mb-6">
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <a href="/" aria-label='Home' className="relative block">
                                        <img 
                                            src={logo} 
                                            alt="logo" 
                                            className="w-16 h-16 rounded-full border-2 border-gray-600/50 group-hover:border-blue-400/50 transition-all duration-300 shadow-lg shadow-black/30"
                                        />
                                    </a>
                                </div>
                            </div>
                            
                            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-gray-100 via-blue-200 to-purple-300 bg-clip-text text-transparent">
                                Lokesh Desilla
                            </h2>
                            
                            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto md:mx-0 mb-4 rounded-full" />
                            
                            <p className="text-white-300 text-lg leading-relaxed max-w-md">
                                Hi there! I'm a Full Stack Developer with a passion for user-friendly web applications and a strong foundation in FrontEnd & BackEnd by using beautiful frameworks. I enjoy learning new tech, collaborating, and staying active.
                            </p>
                        </motion.div>

                        {/* Social Links Section */}
                        <motion.div 
                            whileInView={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: 50}}
                            transition={{type: "spring", stiffness: 300, damping: 24, duration: 0.8, delay: 0.4}}
                            className="lg:w-1/2 xl:w-1/3"
                        >
                            <div className="flex justify-center md:justify-end">
                                <div className="flex space-x-6">
                                   

                                    <motion.a 
                                        whileInView={{scale: 1, y: 0, opacity: 1}}
                                        initial={{scale: 0.5, y: 20, opacity: 0}}
                                        whileHover={{scale: 1.2, y: -5}}
                                        whileTap={{scale: 0.95}}
                                        transition={{type: "spring", stiffness: 400, damping: 10, duration: 0.6, delay: 0.1}}
                                        href="https://www.linkedin.com/in/lokesh-desilla-48245b278/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="group relative p-3 rounded-2xl bg-gray-800/40 border border-gray-700/50 backdrop-blur-sm hover:bg-blue-900/30 hover:border-blue-500/50 transition-all duration-300 shadow-lg shadow-black/20"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <AiOutlineLinkedin className="relative text-2xl text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
                                    </motion.a>

                                    <motion.a 
                                        whileInView={{scale: 1, y: 0, opacity: 1}}
                                        initial={{scale: 0.5, y: 20, opacity: 0}}
                                        whileHover={{scale: 1.2, y: -5}}
                                        whileTap={{scale: 0.95}}
                                        transition={{type: "spring", stiffness: 400, damping: 10, duration: 0.6, delay: 0.2}}
                                        href="https://github.com/Desillalokesh" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="group relative p-3 rounded-2xl bg-gray-800/40 border border-gray-700/50 backdrop-blur-sm hover:bg-purple-900/30 hover:border-purple-500/50 transition-all duration-300 shadow-lg shadow-black/20"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <AiOutlineGithub className="relative text-2xl text-gray-300 group-hover:text-purple-400 transition-colors duration-300" />
                                    </motion.a>

                                    <motion.a 
                                        whileInView={{scale: 1, y: 0, opacity: 1}}
                                        initial={{scale: 0.5, y: 20, opacity: 0}}
                                        whileHover={{scale: 1.2, y: -5}}
                                        whileTap={{scale: 0.95}}
                                        transition={{type: "spring", stiffness: 400, damping: 10, duration: 0.6, delay: 0.3}}
                                        href="https://www.instagram.com/amigo_lokii/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="group relative p-3 rounded-2xl bg-gray-800/40 border border-gray-700/50 backdrop-blur-sm hover:bg-pink-900/30 hover:border-pink-500/50 transition-all duration-300 shadow-lg shadow-black/20"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <AiOutlineInstagram className="relative text-2xl text-gray-300 group-hover:text-pink-400 transition-colors duration-300" />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Copyright Section */}
                    <motion.div 
                        whileInView={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 20}}
                        transition={{type: "spring", stiffness: 300, damping: 24, duration: 0.8, delay: 0.6}}
                        className="relative mt-12 pt-8 border-t border-gray-700/40 text-center"
                    >
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                        <p className="text-white-400 text-base">
                            © {new Date().getFullYear()} lokesh. All rights reserved.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;