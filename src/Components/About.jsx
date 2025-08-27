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
        <div className='border-b border-cyan-500/30 pb-4 relative overflow-hidden'>
            {/* Tech Background Elements */}
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
                <div className="absolute top-20 left-10 text-6xl text-cyan-500/20 font-mono animate-pulse">{'<>'}</div>
                <div className="absolute bottom-20 right-10 text-5xl text-green-400/20 font-mono animate-pulse" style={{ animationDelay: '2s' }}>{'{})'}</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl text-purple-500/10 font-mono animate-pulse" style={{ animationDelay: '4s' }}>{'[]'}</div>
                <div className="absolute top-1/4 right-1/4 text-4xl text-yellow-400/20 font-mono animate-pulse" style={{ animationDelay: '6s' }}>{'()'}</div>

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
                {[...Array(15)].map((_, i) => (
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
            </div>

            {/* Enhanced Tech Title */}
            <motion.h1
                whileInView={{opacity:1, y: 0}}
                initial= {{opacity:0, y: -100}}
                transition={{duration: 1}}
                className='mb-8 text-center text-4xl lg:text-6xl font-mono font-bold tracking-tighter relative z-10'>
                <span className="text-cyan-400">{'<'}</span>
                <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                    Passion
                </span>
                <span className="text-green-400 mx-2">{'&'}</span>
                <span className="bg-gradient-to-r from-cyan-400 via-green-500 to-purple-500 bg-clip-text text-transparent">
                    Purpose
                </span>
                <span className="text-cyan-400">{' />'}</span>
                <span className="inline-block w-3 h-8 bg-cyan-400 ml-2 animate-pulse" />
            </motion.h1>

            <div className="flex flex-wrap lg:flex-nowrap gap-4 relative z-10">
                {/* Tech Image Section - LEFT SIDE */}
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
                            {/* Holographic Border Effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-green-500/30 to-purple-500/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse" />
                            
                            {/* Digital Frame */}
                            <div className="relative bg-gray-900/80 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl p-3 shadow-2xl shadow-cyan-500/20">
                                {/* Digital Corner Elements */}
                                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-400"></div>
                                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-400"></div>
                                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-cyan-400"></div>
                                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-cyan-400"></div>

                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    src={aboutme}
                                    alt="aboutme"
                                    className="rounded-xl w-80 h-auto shadow-xl shadow-black/30"
                                />
                                
                                {/* Tech Overlay */}
                                <div className="absolute inset-3 rounded-xl bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                
                                {/* Status LEDs */}
                                <div className="absolute top-4 right-4 flex space-x-1">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                                </div>
                            </div>

                            {/* Floating Tech Elements */}
                            <div className="absolute -top-6 -right-6 w-8 h-8 border-2 border-cyan-400 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
                            <div className="absolute -bottom-6 -left-6 w-6 h-6 border-2 border-green-400 rotate-45 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>
                            
                            {/* Binary Data Stream */}
                            
                        </motion.div>
                    </div>
                </motion.div>

                {/* Tech Text Section - RIGHT SIDE */}
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
                            {/* Holographic Background */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-green-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                            
                            <div className="relative bg-gray-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 shadow-2xl shadow-cyan-500/20 h-full flex items-center">
                                <div className="space-y-4 relative w-full">
                                    {/* Terminal-style Header */}
                                    <div className="flex items-center mb-4 font-mono text-sm text-green-400">
                                        <div className="flex space-x-1 mr-3">
                                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        </div>
                                        <span>about_me</span>
                                    </div>
                                    
                                    {/* Code-style Decorative Line */}
                                    <div className="font-mono text-cyan-400 text-sm mb-4">
                                        {'// Personal Profile Data'}
                                    </div>
                                    <div className="h-px bg-gradient-to-r from-cyan-400 via-green-500 to-purple-500 rounded-full mb-4 shadow-lg shadow-cyan-500/20"></div>
                                    
                                    {/* Enhanced Text with Code Styling */}
                                    <p className='text-xl leading-relaxed text-gray-300 font-light tracking-wide ml-4'>
                                        {ABOUT_TEXT}
                                    </p>
                                    <div className="font-mono text-gray-400 text-xs mt-2">{`}`}</div>
                                    
                                    {/* Tech Status Indicators */}
                                    <div className="flex items-center space-x-4 pt-4">
                                        <div className="flex items-center space-x-2 font-mono text-sm">
                                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-500/30"></div>
                                            <span className="text-green-400">Online</span>
                                        </div>
                                        <div className="flex items-center space-x-2 font-mono text-sm">
                                            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-75 shadow-lg shadow-cyan-500/30"></div>
                                            <span className="text-cyan-400">Available</span>
                                        </div>
                                        <div className="flex items-center space-x-2 font-mono text-sm">
                                            <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-150 shadow-lg shadow-purple-500/30"></div>
                                            <span className="text-purple-400">Coding</span>
                                        </div>
                                    </div>

                                    {/* System Info */}
                                    <div className="border-t border-gray-700/50 pt-4 mt-4">
                                        <div className="font-mono text-xs text-gray-500 space-y-1">
                                            <div>uptime: 24/7 ⚡</div>
                                            <div>status: ready_for_collaboration</div>
                                            <div>mode: Web & Mobile Developer</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Code Elements */}
                                <div className="absolute top-4 right-4 text-cyan-400/30 font-mono text-xs animate-pulse"></div>
                                <div className="absolute bottom-4 left-4 text-green-400/30 font-mono text-xs animate-pulse delay-300"></div>
                                <div className="absolute top-1/2 right-2 text-purple-400/30 font-mono text-xs animate-pulse delay-500">{'[]'}</div>

                                {/* Digital Corner Accents */}
                                <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-cyan-400/50"></div>
                                <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-cyan-400/50"></div>
                                <div className="absolute bottom-2 left-2 w-3 h-3 border-l border-b border-cyan-400/50"></div>
                                <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-cyan-400/50"></div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Enhanced Tech Education Section */}
            <motion.div
                whileInView={{opacity: 1, y: 0}}
                initial={{opacity: 0, y: 50}}
                transition={{duration: 1, delay: 0.5}}
                className="mt-12 relative z-10">
                <div className="relative group">
                    {/* Tech Background Glow */}
                    <div className="absolute -inset-3 bg-gradient-to-r from-green-500/20 via-cyan-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    <div className="relative bg-gray-900/80 backdrop-blur-sm border border-green-500/30 rounded-2xl p-4 shadow-2xl shadow-green-500/20">
                        {/* Terminal Header for Education */}
                        <div className="flex items-center mb-4 font-mono text-sm text-green-400">
                            <div className="flex space-x-1 mr-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            </div>
                            <span>education.config</span>
                        </div>

                        <Education />
                        
                        {/* Tech Decorative Elements */}
                        <div className="absolute top-4 right-4 w-4 h-4 border border-green-400/50 rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
                        <div className="absolute bottom-4 left-4 w-3 h-3 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full animate-pulse shadow-lg shadow-cyan-500/30"></div>
                        <div className="absolute top-1/2 right-6 w-2 h-2 bg-gradient-to-r from-green-400 to-purple-400 rounded-full animate-pulse delay-700"></div>
                        
                        {/* Binary Code Stream */}
                        <div className="absolute top-2 right-2 font-mono text-xs text-green-400/30 animate-pulse">
                            
                        </div>

                        {/* Digital Corners */}
                        <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-green-400/50"></div>
                        <div className="absolute bottom-2 right-2 w-3 h-3 border-r border-b border-green-400/50"></div>
                    </div>
                </div>
            </motion.div>

            {/* Tech Floating Background Elements */}
            <div className="absolute top-32 right-12 w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse hidden lg:block"></div>
            <div className="absolute top-64 left-12 w-2 h-2 bg-green-400/30 rounded-full animate-pulse delay-500 hidden lg:block"></div>
            <div className="absolute bottom-32 right-16 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-1000 hidden lg:block"></div>
            <div className="absolute bottom-48 left-20 w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse delay-1500 hidden lg:block"></div>

            {/* Additional Tech Elements */}
            <div className="absolute top-0 right-0 text-2xl text-cyan-400/20 font-mono animate-pulse">{'</>'}</div>
            <div className="absolute bottom-10 left-0 text-xl text-green-400/20 font-mono animate-pulse" style={{ animationDelay: '3s' }}>{'()'}</div>
            
            {/* Matrix-style Data Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent animate-pulse"></div>
                <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
        </div>
    )
}

export default About