import React, { useState, useEffect } from 'react'
import logo from '../assets/personal/pic.jpg'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [currentTime, setCurrentTime] = useState('');

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

    return (
        <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='border-b border-neutral-800 py-4'
        >
            <div className='flex items-center justify-between'>
                
                {/* Logo Section */}
                <div className="flex items-center gap-4">
                    <a href="/" aria-label='Home' className="flex items-center">
                        <img 
                            src={logo} 
                            alt="logo" 
                            className="w-12 h-12 rounded-full border border-neutral-700 hover:border-purple-500/50 transition-colors duration-300 object-cover"
                        />
                    </a>

                    {/* Status & Clock */}
                    <div className="hidden md:flex items-center gap-3 text-xs text-neutral-400">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span>Online</span>
                        </div>
                        <div className="w-px h-4 bg-neutral-700"></div>
                        <span className="font-mono">{currentTime}</span>
                    </div>
                </div>

                {/* Social Links */}
                <div className='flex items-center gap-4'>
                    <motion.a 
                        href="https://www.linkedin.com/in/lokesh-desilla-48245b278/" 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        aria-label='LinkedIn'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-2xl text-neutral-400 hover:text-blue-400 transition-colors duration-300"
                    >
                        <FaLinkedin />
                    </motion.a>

                    <motion.a 
                        href="https://github.com/Desillalokesh" 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        aria-label='GitHub'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-2xl text-neutral-400 hover:text-neutral-100 transition-colors duration-300"
                    >
                        <FaGithub />
                    </motion.a>

                    <motion.a 
                        href="https://www.instagram.com/amigo_lokii/" 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        aria-label='Instagram'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-2xl text-neutral-400 hover:text-purple-400 transition-colors duration-300"
                    >
                        <FaInstagram />
                    </motion.a>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar