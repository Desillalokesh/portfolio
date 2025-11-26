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
        <div className='border-b border-cyan-500/30 pb-24'>
            {/* Enhanced Tech Title */}
            <motion.h2
                whileInView={{opacity:1, y: 0}}
                initial= {{opacity:0, y: -100}}
                transition={{duration: 1.5}}
                className='my-20 text-center text-4xl lg:text-6xl font-mono font-bold tracking-tighter'>
                <span className="bg-gradient-to-r from-cyan-400 via-green-500 to-purple-500 bg-clip-text text-transparent">
                    Technologies
                </span>
            </motion.h2>
            
            {/* Frontend Section */}
            <motion.h5
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="text-center text-2xl mb-4 font-mono text-cyan-400"
            >
               <span className="text-green-400">Frontend</span>
            </motion.h5>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 1, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
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
                className="text-center text-2xl mb-4 mt-12 font-mono text-green-400"
            >
               <span className="text-yellow-400">Backend</span>
            </motion.h5>
            <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 1, x: 100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
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
                {/* <SiLeetcode className="text-5xl text-orange-400" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    DSA
                </div> */}
                </motion.div>
            </motion.div>

            {/* Tools Section */}
            <motion.h5
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="text-center text-2xl mb-4 mt-12 font-mono text-purple-400"
            >
            {'<'}<span className="text-pink-400">Tools</span>
            </motion.h5>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 1, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
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
                {/* <SiGrafana className="text-5xl text-orange-400" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Grafana
                </div> */}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Techno;