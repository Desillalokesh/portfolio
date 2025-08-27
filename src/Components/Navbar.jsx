import React, { useState, useEffect } from 'react'
import logo from '../assets/personal/pic.jpg'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [currentTime, setCurrentTime] = useState('');
    const [isOnline, setIsOnline] = useState(true);

    // Digital clock effect
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('en-US', { 
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }));
        };
        
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Network status simulation
    useEffect(() => {
        const interval = setInterval(() => {
            setIsOnline(prev => Math.random() > 0.05 ? true : prev); // 95% uptime
        }, 3000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className='relative'>
            {/* Digital Grid Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="h-full w-full" 
                     style={{
                         backgroundImage: `
                             linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)
                         `,
                         backgroundSize: '20px 20px'
                     }} />
            </div>

            {/* Main Nav Container */}
            <div className='flex items-center justify-between py-6 relative z-10'>
                
                {/* Tech Logo Section */}
                <div className="flex items-center space-x-4">
                    {/* HUD Logo Frame */}
                    <motion.div 
                        className="flex flex-shrink-0 items-center relative group"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <a href="/" aria-label='Home' className="relative">
                            {/* Holographic border */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-green-500/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Digital frame */}
                            <div className="relative bg-gray-900/80 border-2 border-cyan-500/40 rounded-full p-1">
                                {/* Corner brackets */}
                                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-cyan-400 rounded-tl-full"></div>
                                <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-cyan-400 rounded-tr-full"></div>
                                <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-cyan-400 rounded-bl-full"></div>
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-cyan-400 rounded-br-full"></div>
                                
                                <img src={logo} alt="logo" className="w-12 h-12 mx-2 rounded-full object-cover"/>
                                
                                {/* Status indicator */}
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse border-2 border-gray-900">
                                    <div className="absolute inset-0 w-full h-full bg-green-400 rounded-full animate-ping opacity-75"></div>
                                </div>
                            </div>
                        </a>
                    </motion.div>

                    {/* System Status Panel */}
                    <div className="hidden md:flex items-center space-x-3 bg-gray-900/60 backdrop-blur-sm border border-cyan-500/30 rounded-lg px-3 py-2 font-mono text-xs">
                        <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full animate-pulse ${isOnline ? 'bg-green-400' : 'bg-red-400'}`}></div>
                            <span className="text-gray-400">STATUS:</span>
                            <span className={isOnline ? 'text-green-400' : 'text-red-400'}>
                                {isOnline ? 'ONLINE' : 'RECONNECTING'}
                            </span>
                        </div>
                        <div className="w-px h-4 bg-gray-600"></div>
                        <div className="text-cyan-400">
                            {currentTime}
                        </div>
                    </div>
                </div>

                {/* Tech Social Links */}
                <div className='flex items-center space-x-6'>
                    {/* Connection Status */}
                    <div className="hidden lg:flex items-center space-x-2 font-mono text-xs text-gray-400">
                        <span>SOCIAL_LINKS:</span>
                        <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center gap-6 text-2xl'>
                        {/* LinkedIn */}
                        <motion.a 
                            href="https://www.linkedin.com/in/lokesh-desilla-48245b278/" 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            aria-label='LinkedIn'
                            className="relative group"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="absolute -inset-2 bg-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative bg-gray-900/80 border border-blue-500/30 rounded-lg p-3 group-hover:border-blue-400 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                                <FaLinkedin className="text-blue-400 group-hover:text-blue-300" />
                                {/* Connection indicator */}
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity"></div>
                            </div>
                        </motion.a>

                        {/* GitHub */}
                        <motion.a 
                            href="https://github.com/Desillalokesh" 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            aria-label='GitHub'
                            className="relative group"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="absolute -inset-2 bg-gray-400/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative bg-gray-900/80 border border-gray-500/30 rounded-lg p-3 group-hover:border-gray-400 group-hover:shadow-lg group-hover:shadow-gray-400/20 transition-all duration-300">
                                <FaGithub className="text-gray-400 group-hover:text-white" />
                                {/* Connection indicator */}
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity"></div>
                            </div>
                        </motion.a>

                        {/* Instagram */}
                        <motion.a 
                            href="https://www.instagram.com/amigo_lokii/" 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            aria-label='Instagram'
                            className="relative group"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative bg-gray-900/80 border border-purple-500/30 rounded-lg p-3 group-hover:border-purple-400 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300">
                                <FaInstagram className="text-purple-400 group-hover:text-purple-300" />
                                {/* Connection indicator */}
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity"></div>
                            </div>
                        </motion.a>
                    </div>

                    {/* System Menu Dots */}
                    <div className="flex flex-col space-y-1">
                        <div className="w-1 h-1 bg-cyan-400/60 rounded-full animate-pulse"></div>
                        <div className="w-1 h-1 bg-green-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                        <div className="w-1 h-1 bg-purple-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                    </div>
                </div>
            </div>

            {/* Bottom Tech Border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
            
            {/* Corner Tech Elements */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-cyan-400/30"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-cyan-400/30"></div>
            
            {/* Floating Data Points */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`nav-particle-${i}`}
                    className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
                    style={{
                        top: `${20 + (i * 15)}%`,
                        right: `${10 + (i * 20)}%`,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                    }}
                />
            ))}
        </nav>
    )
}

export default Navbar