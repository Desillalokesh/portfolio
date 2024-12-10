import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
    TbBrandBootstrap,
    TbBrandDjango,
    TbBrandMysql,
    TbBrandPython,
} from "react-icons/tb";
import { SiHtml5, SiCss3, SiJavascript, SiMongodb } from "react-icons/si";
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
        <div className="pb-24">
        <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5}}
            className="my-20 text-center text-4xl"
        >
            Technologies
        </motion.h2>
        <motion.h5
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="text-center text-2xl mb-4"
        >
            Front-End
        </motion.h5>
        <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 1, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
        >
            <motion.div
            variants={iconvariants(2)}
            initial="initial"
            animate="animate"
            className="p-4"
            >
            <SiHtml5 className="text-7xl text-orange-500" />
            {/* <p className="p-1 flex justify-center items-center text-gray-300">HTML</p> */}
            </motion.div>
            <motion.div
            variants={iconvariants(3)}
            initial="initial"
            animate="animate"
            className="p-4"
            >
            <SiCss3 className="text-7xl text-blue-500" />
            {/* <p className="p-1 flex justify-center items-center text-gray-300">Css</p> */}
            </motion.div>
            <motion.div
            variants={iconvariants(4)}
            initial="initial"
            animate="animate"
            className="p-4"
            >
            <SiJavascript className="text-7xl text-yellow-500" />
            {/* <p className="p-1 flex justify-center items-center text-gray-300">JavaScript</p> */}
            </motion.div>
            <motion.div
            variants={iconvariants(4)}
            initial="initial"
            animate="animate"
            className="p-4"
            >
            <RiTailwindCssFill className="text-7xl text-blue-500" />
            {/* <p className="p-1 flex justify-center items-center text-gray-300">Tailwind Css</p> */}
            </motion.div>
            <motion.div
            variants={iconvariants(5)}
            initial="initial"
            animate="animate"
            className="p-4"
            >
            <RiReactjsLine className="text-7xl text-cyan-400" />
            {/* <p className="p-1 flex justify-center items-center text-gray-300">React.js</p> */}
            </motion.div>
            <motion.div
            variants={iconvariants(6)}
            initial="initial"
            animate="animate"
            className="p-4"
            >
            <TbBrandBootstrap className="text-7xl text-purple-800" />
            {/* <p className="p-1 flex justify-center items-center text-gray-300">Bootstrap</p> */}
            </motion.div>
        </motion.div>
        <motion.h5
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="text-center text-2xl mb-4"
        >
            Back-End
        </motion.h5>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 1, x: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconvariants(2)}
            initial="initial"
            animate="animate"
            className="p-4"
            >
            <TbBrandPython className="text-7xl" />
            {/* <p className="p-1 flex justify-center items-center text-gray-300">Python</p> */}

            </motion.div>
            <motion.div
            variants={iconvariants(3)}
            initial="initial"
            animate="animate"
            className="p-4"
            >
            <TbBrandDjango className="text-7xl text-lime-300"/>
            {/* <p className="p-1 flex justify-center items-center text-gray-300">Django</p> */}

            </motion.div>
            <motion.div
            variants={iconvariants(4)}
            initial="initial"
            animate="animate"
            className="p-4"
            >
            <TbBrandMysql className="text-7xl text-blue-500" />
            {/* <p className="p-1 flex justify-center items-center text-gray-300">MySql</p> */}

            </motion.div>
        </motion.div>
        </div>
    );
};

export default Techno;
