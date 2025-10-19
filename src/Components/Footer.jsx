import React from 'react';
import {  AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';
import { motion } from 'framer-motion';
import logo from '../assets/personal/dp.jpg'

const Footer = () => {
    return (
        <footer className="relative text-white py-12 overflow-hidden bg-black">
            {/* Tech Background Elements - Matching other components */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                {/* Digital Grid */}
                <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full" 
                         style={{
                             backgroundImage: `
                                 linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
                             `,
                             backgroundSize: '40px 40px'
                         }} />
                </div>

                {/* Floating Code Elements */}
                <div className="absolute top-10 left-10 text-5xl text-cyan-500/20 font-mono animate-pulse">{'<>'}</div>
                <div className="absolute bottom-10 right-10 text-4xl text-green-400/20 font-mono animate-pulse" style={{ animationDelay: '2s' }}>{'{})'}</div>
                <div className="absolute top-1/2 left-1/4 text-6xl text-purple-500/10 font-mono animate-pulse" style={{ animationDelay: '4s' }}>{'[]'}</div>
                <div className="absolute top-1/4 right-1/4 text-3xl text-yellow-400/20 font-mono animate-pulse" style={{ animationDelay: '6s' }}>{'()'}</div>

                {/* Circuit Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="#22d3ee" strokeWidth="1" fill="none" className="animate-pulse">
                        <path d="M0 100 Q200 50 400 100 T800 100" />
                        <path d="M0 300 Q300 250 600 300 T1200 300" />
                        <circle cx="200" cy="100" r="3" fill="#22d3ee" />
                        <circle cx="600" cy="300" r="3" fill="#22d3ee" />
                    </g>
                </svg>

                {/* Floating Data Particles */}
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-20, 20, -20],
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
                <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full border border-cyan-500/30 animate-pulse"
                     style={{ 
                         background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1), transparent)',
                         boxShadow: '0 0 40px rgba(6, 182, 212, 0.2)',
                         animationDuration: '4s'
                     }} />
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full border border-purple-500/30 animate-pulse"
                     style={{ 
                         background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1), transparent)',
                         boxShadow: '0 0 35px rgba(147, 51, 234, 0.2)',
                         animationDuration: '6s',
                         animationDelay: '2s'
                     }} />

                {/* Hexagonal tech elements */}
                <div className="absolute top-16 right-20 w-16 h-16 border border-green-400/30 rotate-45 animate-spin"
                     style={{ 
                         clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                         animationDuration: '20s'
                     }} />
                <div className="absolute bottom-20 left-16 w-12 h-12 border border-cyan-400/30 rotate-12 animate-spin"
                     style={{ 
                         clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                         animationDuration: '15s',
                         animationDirection: 'reverse'
                     }} />

                {/* Matrix-style data streams */}
                <div className="absolute inset-0 pointer-events-none opacity-15">
                    <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
                    <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>
            </div>

            <motion.div 
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: 50}}
                transition={{type: "spring", stiffness: 300, damping: 24, duration: 0.8}}
                className="container mx-auto px-4 relative z-10"
            >
                <div className="relative bg-gray-900/80 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 p-8 md:p-10 lg:p-12">
                    {/* Terminal-style header */}
                    <div className="flex items-center mb-6 font-mono text-sm text-green-400">
                        <div className="flex space-x-1 mr-3">
                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span>contact_info.json</span>
                    </div>

                    {/* Code-style decorative line */}
                    <div className="font-mono text-cyan-400 text-sm mb-4">
                        {'// Developer Contact Information'}
                    </div>
                    <div className="h-px bg-gradient-to-r from-cyan-400 via-green-500 to-purple-500 rounded-full mb-6 shadow-lg shadow-cyan-500/20"></div>
                    
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
                                    {/* Holographic border effect */}
                                    <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 via-green-500/30 to-purple-500/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
                                    
                                    {/* Digital frame */}
                                    <div className="relative bg-gray-800/80 border-2 border-cyan-500/40 rounded-full p-1">
                                        {/* Digital corner elements */}
                                        <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-cyan-400"></div>
                                        <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-cyan-400"></div>
                                        <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-cyan-400"></div>
                                        <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-cyan-400"></div>
                                        
                                        <a href="/" aria-label='Home' className="relative block">
                                            <img 
                                                src={logo} 
                                                alt="logo" 
                                                className="w-16 h-16 rounded-full shadow-lg shadow-cyan-500/30"
                                            />
                                        </a>
                                        
                                        {/* Status LED */}
                                        <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Tech-styled name */}
                            <div className="space-y-2 mb-4">
                                <h2 className="text-3xl font-bold font-mono">
                                    <span className="bg-gradient-to-r from-white via-cyan-200 to-green-400 bg-clip-text text-transparent">
                                        Lokesh
                                    </span>
                                    <span className="inline-block w-2 h-6 bg-cyan-400 ml-2 animate-pulse" />
                                </h2>
                            </div>
                            
                            <div className="h-px bg-gradient-to-r from-cyan-400 via-green-500 to-purple-500 rounded-full mb-4 shadow-lg shadow-cyan-500/20 w-16 mx-auto md:mx-0"></div>
                            
                            {/* Enhanced description in code block style */}
                            <div className="relative bg-gray-800/60 border border-green-500/30 rounded-lg p-4 font-mono text-sm">
                                <div className="text-green-400 mb-2">{'// About Developer'}</div>
                                <p className="text-gray-300 leading-relaxed">
                                    Hi there! I'm a Junior Fullstack Developer passionate about building scalable, user-friendly applications. With expertise across frontend and backend frameworks, I enjoy exploring new technologies, collaborating on ideas, and turning concepts into impactful digital solutions.
                                </p>
                                <div className="text-gray-400 mt-2">{'}'}</div>
                            </div>

                            {/* Tech status indicators */}
                            <div className="flex items-center justify-center md:justify-start space-x-4 mt-4">
                                <div className="flex items-center space-x-2 font-mono text-xs">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-500/30"></div>
                                    <span className="text-green-400">Available</span>
                                </div>
                                <div className="flex items-center space-x-2 font-mono text-xs">
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-75 shadow-lg shadow-cyan-500/30"></div>
                                    <span className="text-cyan-400">Remote</span>
                                </div>
                                <div className="flex items-center space-x-2 font-mono text-xs">
                                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150 shadow-lg shadow-purple-500/30"></div>
                                    <span className="text-purple-400">Coding</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Enhanced Social Links Section */}
                        <motion.div 
                            whileInView={{opacity: 1, x: 0}}
                            initial={{opacity: 0, x: 50}}
                            transition={{type: "spring", stiffness: 300, damping: 24, duration: 0.8, delay: 0.4}}
                            className="lg:w-1/2 xl:w-1/3"
                        >
                            <div className="flex justify-center md:justify-end">
                                <div className="space-y-4">
                                    {/* Social links header */}
                                    <div className="font-mono text-cyan-400 text-sm text-center">
                                        {'// Social Network Connections'}
                                    </div>
                                    
                                    <div className="flex space-x-4">
                                        <motion.a 
                                            whileInView={{scale: 1, y: 0, opacity: 1}}
                                            initial={{scale: 0.5, y: 20, opacity: 0}}
                                            whileHover={{scale: 1.1, y: -3}}
                                            whileTap={{scale: 0.95}}
                                            transition={{type: "spring", stiffness: 400, damping: 10, duration: 0.6, delay: 0.1}}
                                            href="https://www.linkedin.com/in/lokesh-desilla-48245b278/" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="group relative p-3 rounded-lg bg-gray-800/80 border-2 border-cyan-500/40 backdrop-blur-sm hover:border-cyan-400 hover:shadow-cyan-500/20 transition-all duration-300 shadow-lg shadow-black/20"
                                        >
                                            {/* Digital corner accents */}
                                            <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-cyan-400/70"></div>
                                            <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-cyan-400/70"></div>
                                            <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-cyan-400/70"></div>
                                            <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-cyan-400/70"></div>
                                            
                                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <AiOutlineLinkedin className="relative text-2xl text-gray-300 group-hover:text-cyan-400 transition-colors duration-300" />
                                            
                                            {/* Status LED */}
                                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                                        </motion.a>

                                        <motion.a 
                                            whileInView={{scale: 1, y: 0, opacity: 1}}
                                            initial={{scale: 0.5, y: 20, opacity: 0}}
                                            whileHover={{scale: 1.1, y: -3}}
                                            whileTap={{scale: 0.95}}
                                            transition={{type: "spring", stiffness: 400, damping: 10, duration: 0.6, delay: 0.2}}
                                            href="https://github.com/Desillalokesh" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="group relative p-3 rounded-lg bg-gray-800/80 border-2 border-green-500/40 backdrop-blur-sm hover:border-green-400 hover:shadow-green-500/20 transition-all duration-300 shadow-lg shadow-black/20"
                                        >
                                            {/* Digital corner accents */}
                                            <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-green-400/70"></div>
                                            <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-green-400/70"></div>
                                            <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-green-400/70"></div>
                                            <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-green-400/70"></div>
                                            
                                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <AiOutlineGithub className="relative text-2xl text-gray-300 group-hover:text-green-400 transition-colors duration-300" />
                                            
                                            {/* Status LED */}
                                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                                        </motion.a>

                                        <motion.a 
                                            whileInView={{scale: 1, y: 0, opacity: 1}}
                                            initial={{scale: 0.5, y: 20, opacity: 0}}
                                            whileHover={{scale: 1.1, y: -3}}
                                            whileTap={{scale: 0.95}}
                                            transition={{type: "spring", stiffness: 400, damping: 10, duration: 0.6, delay: 0.3}}
                                            href="https://www.instagram.com/amigo_lokii/" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="group relative p-3 rounded-lg bg-gray-800/80 border-2 border-purple-500/40 backdrop-blur-sm hover:border-purple-400 hover:shadow-purple-500/20 transition-all duration-300 shadow-lg shadow-black/20"
                                        >
                                            {/* Digital corner accents */}
                                            <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-purple-400/70"></div>
                                            <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-purple-400/70"></div>
                                            <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-purple-400/70"></div>
                                            <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-purple-400/70"></div>
                                            
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            <AiOutlineInstagram className="relative text-2xl text-gray-300 group-hover:text-purple-400 transition-colors duration-300" />
                                            
                                            {/* Status LED */}
                                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
                                        </motion.a>
                                    </div>

                                    {/* Network connection lines */}
                                    <div className="relative mt-4">
                                        <svg className="w-full h-8" xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="#22d3ee" strokeWidth="1" fill="none" className="animate-pulse">
                                                <line x1="20%" y1="50%" x2="50%" y2="50%" />
                                                <line x1="50%" y1="50%" x2="80%" y2="50%" />
                                                <circle cx="20%" cy="50%" r="2" fill="#22d3ee" />
                                                <circle cx="50%" cy="50%" r="2" fill="#22d3ee" />
                                                <circle cx="80%" cy="50%" r="2" fill="#22d3ee" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Enhanced Copyright Section */}
                    <motion.div 
                        whileInView={{opacity: 1, y: 0}}
                        initial={{opacity: 0, y: 20}}
                        transition={{type: "spring", stiffness: 300, damping: 24, duration: 0.8, delay: 0.6}}
                        className="relative mt-8 pt-6 border-t border-cyan-500/30"
                    >
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                        
                        {/* Terminal-style copyright */}
                        <div className="text-center space-y-2">
                            <div className="font-mono text-cyan-400 text-xs">{'// Copyright Information'}</div>
                            <p className="text-gray-300 text-sm font-mono">
                                © {new Date().getFullYear()} <span className="text-cyan-400">lokesh</span>. All rights reserved.
                            </p>
                            <div className="font-mono text-xs text-gray-500">
                                <div>status: <span className="text-green-400">active</span></div>
                                <div>uptime: 24/7 ⚡</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Digital border decorations */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400/70"></div>
                    <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400/70"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400/70"></div>
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400/70"></div>

                    {/* Floating tech elements */}
                    <div className="absolute top-4 right-4 text-cyan-400/30 font-mono text-xs animate-pulse">{'<>'}</div>
                    <div className="absolute bottom-4 left-4 text-green-400/30 font-mono text-xs animate-pulse delay-300">{'{}}'}</div>
                    <div className="absolute top-1/2 right-6 text-purple-400/30 font-mono text-xs animate-pulse delay-500">{'[]'}</div>
                </div>
            </motion.div>

            {/* Additional floating tech elements */}
            <div className="absolute top-16 right-8 w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse"></div>
            <div className="absolute top-32 left-8 w-1 h-1 bg-green-400/40 rounded-full animate-pulse delay-700"></div>
            <div className="absolute bottom-16 right-12 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-32 left-12 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse delay-1300"></div>
        </footer>
    );
};

export default Footer;