import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
    TbBrandBootstrap,
    TbBrandDjango,
    TbBrandPython,
    TbBrandNodejs,
    TbBrandMongodb,
    TbBrandGit,
    TbBrandGitlab,
    TbBrandHtml5,
    TbBrandCss3,
    TbBrandJavascript,
    TbBrandTypescript,
    TbDeviceMobile,
} from "react-icons/tb";
import { 
    SiExpress, 
    SiPostgresql, 
    SiLeetcode, 
    SiRedux,
    SiGrafana,
} from "react-icons/si";
import { motion } from "framer-motion";

const iconvariants = (duration) => ({
    initial: { y: -15 },
    animate: {
        y: [15, -15],
        transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
        },
    },
});

const Techno = () => {
    return (
        <div className='border-b border-cyan-500/30 pb-24 relative overflow-hidden'>
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
            <motion.h2
                whileInView={{opacity:1, y: 0}}
                initial= {{opacity:0, y: -100}}
                transition={{duration: 1.5}}
                className='my-20 text-center text-4xl lg:text-6xl font-mono font-bold tracking-tighter relative z-10'>
                <span className="text-cyan-400">{'<'}</span>
                <span className="bg-gradient-to-r from-cyan-400 via-green-500 to-purple-500 bg-clip-text text-transparent">
                    Technologies
                </span>
                <span className="text-cyan-400">{' />'}</span>
                <span className="inline-block w-3 h-8 bg-cyan-400 ml-2 animate-pulse" />
            </motion.h2>
            
            {/* Frontend Section */}
            <motion.h5
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="text-center text-2xl mb-4 font-mono text-cyan-400 relative z-10"
            >
                {'<'}<span className="text-green-400">Frontend</span>{' />'}
            </motion.h5>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 1, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4 relative z-10"
            >
                {/* HTML */}
                <motion.div
                variants={iconvariants(2)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                <TbBrandHtml5 className="text-5xl text-orange-500" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    HTML5
                </div>
                </motion.div>

                {/* CSS */}
                <motion.div
                variants={iconvariants(3)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                <TbBrandCss3 className="text-5xl text-blue-500" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    CSS3
                </div>
                </motion.div>

                {/* JavaScript */}
                <motion.div
                variants={iconvariants(4)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                <TbBrandJavascript className="text-5xl text-yellow-500" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    JavaScript
                </div>
                </motion.div>

                {/* TypeScript */}
                <motion.div
                variants={iconvariants(2.5)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                <TbBrandTypescript className="text-5xl text-blue-600" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    TypeScript
                </div>
                </motion.div>

                {/* Bootstrap */}
                <motion.div
                variants={iconvariants(6)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                    <TbBrandBootstrap className="text-5xl text-purple-800" />
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        Bootstrap
                    </div>
                </motion.div>

                {/* React.js */}
                <motion.div
                variants={iconvariants(5)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                <RiReactjsLine className="text-5xl text-cyan-400" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    React.js
                </div>
                </motion.div>

                {/* Redux */}
                <motion.div
                variants={iconvariants(3.5)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                <SiRedux className="text-5xl text-purple-600" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Redux
                </div>
                </motion.div>

                {/* Tailwind CSS */}
                <motion.div
                variants={iconvariants(4)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                <RiTailwindCssFill className="text-5xl text-blue-500" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Tailwind CSS
                </div>
                </motion.div>

                {/* NativeWind */}
                <motion.div
                variants={iconvariants(3.2)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                <div className="text-5xl text-indigo-500 flex items-center justify-center w-16 h-16">
                    <div className="font-bold text-2xl">NW</div>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    NativeWind
                </div>
                </motion.div>

                {/* React Native */}
                <motion.div
                variants={iconvariants(2.8)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                <div className="relative text-5xl">
                    <TbDeviceMobile className="text-cyan-600" />
                    <div className="absolute -bottom-1 -right-1 bg-cyan-600 rounded-full p-1">
                        <RiReactjsLine className="text-xl text-white" />
                    </div>
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    React Native
                </div>
                </motion.div>
            </motion.div>

            {/* Backend Section */}
            <motion.h5
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className="text-center text-2xl mb-4 mt-12 font-mono text-green-400 relative z-10"
            >
                {'<'}<span className="text-yellow-400">Backend</span>{' />'}
            </motion.h5>
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 1, x: 100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4 relative z-10">
                {/* Python */}
                <motion.div
                variants={iconvariants(2)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                <TbBrandPython className="text-5xl text-yellow-400" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Python
                </div>
                </motion.div>

                {/* Django */}
                <motion.div
                variants={iconvariants(3)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                <TbBrandDjango className="text-5xl text-lime-300"/>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Django
                </div>
                </motion.div>

                {/* Node.js */}
                <motion.div
                variants={iconvariants(5)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                <TbBrandNodejs className="text-5xl text-green-500" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Node.js
                </div>
                </motion.div>

                {/* Express */}
                <motion.div
                variants={iconvariants(6)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                <SiExpress className="text-5xl text-gray-600" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Express.js
                </div>
                </motion.div>

                {/* MongoDB */}
                <motion.div
                variants={iconvariants(2.5)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                <TbBrandMongodb className="text-5xl text-green-400" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    MongoDB
                </div>
                </motion.div>

                {/* PostgreSQL */}
                <motion.div
                variants={iconvariants(3.5)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                <SiPostgresql className="text-5xl text-blue-400" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    PostgreSQL
                </div>
                </motion.div>

                {/* DSA (LeetCode) */}
                <motion.div
                variants={iconvariants(4.5)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                <SiLeetcode className="text-5xl text-orange-400" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    DSA
                </div>
                </motion.div>
            </motion.div>

            {/* Tools Section */}
            <motion.h5
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="text-center text-2xl mb-4 mt-12 font-mono text-purple-400 relative z-10"
            >
                {'<'}<span className="text-pink-400">Tools</span>{' />'}
            </motion.h5>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 1, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4 relative z-10"
            >
                {/* Git */}
                <motion.div
                variants={iconvariants(2)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                <TbBrandGit className="text-5xl text-orange-600" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Git
                </div>
                </motion.div>

                {/* GitLab */}
                <motion.div
                variants={iconvariants(3)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                <TbBrandGitlab className="text-5xl text-orange-500" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    GitLab
                </div>
                </motion.div>

                {/* Grafana */}
                <motion.div
                variants={iconvariants(4)}
                initial="initial"
                animate="animate"
                className="p-4 relative group"
                >
                <SiGrafana className="text-5xl text-orange-400" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Grafana
                </div>
                </motion.div>
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
    );
};

export default Techno;