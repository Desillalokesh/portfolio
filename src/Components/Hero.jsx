import React, { useEffect, useState } from "react";
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
    const [typedText, setTypedText] = useState('');
    const [glitchActive, setGlitchActive] = useState(false);

    // Typing effect for tech intro
    useEffect(() => {
        const text = '';
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setTypedText(text.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, 100);

        return () => clearInterval(timer);
    }, []);

    // Glitch effect
    useEffect(() => {
        const interval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 150);
        }, 6000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative overflow-hidden">
            {/* Tech Background Elements */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                {/* Digital Matrix Grid */}
                <div className="absolute inset-0 opacity-15">
                    <div className="h-full w-full" 
                         style={{
                             backgroundImage: `
                                 linear-gradient(rgba(34, 211, 238, 0.2) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(34, 211, 238, 0.2) 1px, transparent 1px)
                             `,
                             backgroundSize: '60px 60px'
                         }} />
                </div>

                {/* Floating Code Symbols */}
                <div className="absolute top-20 left-10 text-8xl text-cyan-500/20 font-mono animate-bounce" style={{ animationDuration: '4s' }}>{'<>'}</div>
                <div className="absolute bottom-20 right-10 text-6xl text-green-400/20 font-mono animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}>{'{})'}</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl text-purple-500/10 font-mono animate-pulse" style={{ animationDelay: '4s' }}>{'[]'}</div>

                {/* Circuit Pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="heroCircuit" width="120" height="120" patternUnits="userSpaceOnUse">
                            <g stroke="#22d3ee" strokeWidth="1" fill="none">
                                <path d="M0 30 L30 30 L30 60 L60 60 L60 90 L90 90"/>
                                <path d="M30 0 L30 30 M60 30 L60 60 M90 60 L90 90"/>
                                <circle cx="30" cy="30" r="3" fill="#22d3ee"/>
                                <circle cx="60" cy="60" r="3" fill="#22d3ee"/>
                                <circle cx="90" cy="90" r="3" fill="#22d3ee"/>
                            </g>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#heroCircuit)" className="animate-pulse" 
                          style={{ animationDuration: '4s' }}/>
                </svg>

                {/* Data Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={`hero-particle-${i}`}
                        className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-30, 30, -30],
                            opacity: [0.2, 1, 0.2],
                            scale: [0.5, 1.5, 0.5],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            {/* System Initialize Header */}
            <div className="absolute top-4 left-4 font-mono text-sm text-green-400 z-10">
                <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>{typedText}</span>
                    <span className="animate-ping">_</span>
                </div>
            </div>

            <div className="pb-0 lg:mb-0">
                <div className="flex flex-wrap lg:flex-row-reverse">
                    
                    {/* Tech Profile Image Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex justify-center lg:p-6">
                            <motion.div
                                initial={{ x: 100, opacity: 0, scale: 0.8 }}
                                animate={{ x: 0, opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, delay: 1.2, type: "spring", stiffness: 100 }}
                                className="relative group"
                            >
                                {/* Holographic Border Effect */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-green-500/30 to-purple-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
                                
                                {/* Digital HUD Frame */}
                                <div className="relative bg-gray-900/90 backdrop-blur-sm border-2 border-cyan-500/40 rounded-2xl p-3 shadow-2xl shadow-cyan-500/30">
                                    {/* HUD Corner Elements */}
                                    <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-cyan-400"></div>
                                    <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-cyan-400"></div>
                                    <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-cyan-400"></div>
                                    <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-cyan-400"></div>

                                    {/* Profile Status */}
                                    <div className="absolute top-5 right-5 flex items-center space-x-2 bg-gray-900/80 px-3 py-1 rounded-full border border-green-400/30">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span className="text-xs font-mono text-green-400">ACTIVE</span>
                                    </div>

                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        src={profile}
                                        alt="Lokesh"
                                        className="rounded-xl w-96 h-auto shadow-xl shadow-black/30"
                                    />
                                    
                                    {/* Scan Lines Effect */}
                                    <div className="absolute inset-3 rounded-xl bg-gradient-to-b from-cyan-500/10 via-transparent via-transparent to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    <div className="absolute inset-3 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                                         style={{
                                             backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34, 211, 238, 0.1) 2px, rgba(34, 211, 238, 0.1) 4px)',
                                         }}></div>

                                    {/* System Info Overlay */}
                                    <div className="absolute bottom-5 left-5 bg-gray-900/90 px-3 py-2 rounded border border-cyan-400/30 font-mono text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div>ID: DEV_001</div>
                                        <div>STATUS: ONLINE</div>
                                        <div>SKILL: Junior Fullstack Developer</div>
                                    </div>
                                </div>

                                {/* Floating Tech Elements */}
                                <div className="absolute -top-8 -right-8 w-10 h-10 border-2 border-cyan-400 rotate-45 animate-spin" style={{ animationDuration: '12s' }}>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
                                </div>
                                <div className="absolute -bottom-8 -left-8 w-8 h-8 border-2 border-green-400 rotate-45 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full"></div>
                                </div>
                                
                                {/* Data Stream */}
                                
                            </motion.div>
                        </div>
                    </div>

                    {/* Tech Content Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col items-center lg:items-start mt-10 relative">
                            
                            {/* Terminal Welcome */}
                            <div className="font-mono text-sm text-green-400 mb-4 w-full">
                                <div className="bg-gray-900/80 border border-green-400/30 rounded p-3 mb-4">
                                    <div className="flex items-center mb-2">
                                        <div className="flex space-x-1 mr-3">
                                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        </div>
                                        <span>developer_profile.exe</span>
                                    </div>
                                    <div className="text-green-400">
                                        <span>{'>'} Loading developer instance...</span>
                                        <div className="animate-pulse mt-1">{'>'} Ready to code ⚡</div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Tech Name with Glitch Effect */}
                            <motion.h2
                                variants={container(0)}
                                initial="hidden"
                                animate="visible"
                                className={`pb-4 text-4xl lg:text-8xl font-mono font-bold tracking-tighter ${glitchActive ? 'animate-pulse' : ''}`}
                                style={{
                                    textShadow: glitchActive ? 
                                        '3px 0 #ff0000, -3px 0 #00ffff, 0 0 30px rgba(34, 211, 238, 0.8)' : 
                                        '0 0 30px rgba(34, 211, 238, 0.5)'
                                }}
                            >
                                <span className="bg-gradient-to-r from-cyan-400 via-green-500 to-purple-500 bg-clip-text text-transparent">
                                   Lokesh
                                </span>
                            </motion.h2>

                            {/* Tech Title */}
                            <motion.div
                                variants={container(0.5)}
                                initial="hidden"
                                animate="visible"
                                className="relative mb-6"
                            >
                                
                                <div className="bg-gray-900/80 border border-purple-500/30 rounded-lg p-4">
                                    <div className="font-mono text-purple-400 text-sm mb-1">role:</div>
                                    <span className="bg-gradient-to-r from-cyan-400 via-green-500 to-purple-500 bg-clip-text text-2xl lg:text-3xl tracking-tighter text-transparent font-semibold font-mono">
                                        Junior Fullstack Developer @Socialbytes 
                                    </span>
                                </div>
                            </motion.div>

                            {/* Tech Description */}
                            <motion.div
                                variants={container(1)}
                                initial="hidden"
                                animate="visible"
                                className="relative w-full"
                            >
                                <div className="bg-gray-900/80 border border-cyan-500/30 rounded-lg p-6">
                                    
                                    <p className="my-2 max-w-lg text-xl leading-relaxed tracking-tighter text-gray-300 ml-4">
                                        {HERO_CONTENT}
                                    </p>
                                    

                                    {/* System Stats */}
                                    <div className="mt-6 border-t border-gray-700/50 pt-4">
                                        <div className="grid grid-cols-3 gap-4 font-mono text-xs">
                                            <div className="text-center">
                                                <div className="text-green-400 font-bold">24/7</div>
                                                <div className="text-gray-500">Uptime</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-cyan-400 font-bold">FULL_STACK</div>
                                                <div className="text-gray-500">Mode</div>
                                            </div>
                                            <div className="text-center">
                                                <div className="text-purple-400 font-bold">∞</div>
                                                <div className="text-gray-500">Learning</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Digital Corner Accents */}
                                    <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-cyan-400/50"></div>
                                    <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-cyan-400/50"></div>
                                    <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-cyan-400/50"></div>
                                    <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-cyan-400/50"></div>
                                </div>
                                
                                <div className="font-mono text-green-400 text-sm mt-2">
                                    {'}'}
                                </div>
                            </motion.div>
                            
                            {/* Tech Decorative Elements */}
                            <div className="absolute top-0 right-0 text-4xl text-cyan-400/20 font-mono animate-pulse">{'</>'}</div>
                            <div className="absolute bottom-10 left-0 text-3xl text-green-400/20 font-mono animate-pulse" style={{ animationDelay: '3s' }}>{'()'}</div>
                            
                            {/* Matrix Lines */}
                            <div className="absolute top-1/4 right-0 w-32 h-px bg-gradient-to-l from-cyan-400/30 to-transparent animate-pulse"></div>
                            <div className="absolute bottom-1/4 left-0 w-32 h-px bg-gradient-to-r from-green-400/30 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Tech Border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
            
            {/* Corner Tech Elements */}
            <div className="absolute bottom-4 right-4 font-mono text-xs text-gray-500">
                <div>v2.0.1 | STATUS: READY</div>
            </div>
        </div>
    );
};

export default Hero;