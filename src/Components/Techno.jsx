import React from "react";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
    TbBrandBootstrap,
    TbBrandDjango,
   TbBrandPython,
    TbBrandNodejs,
    TbBrandMongodb,
   
} from "react-icons/tb";
import { SiHtml5, SiCss3, SiJavascript, SiExpress,  SiPostgresql, SiLeetcode } from "react-icons/si";
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
            <SiHtml5 className="text-5xl text-orange-500" />
            </motion.div>
            <motion.div
            variants={iconvariants(3)}
            initial="initial"
            animate="animate"
            className="p-4"
            >
            <SiCss3 className="text-5xl text-blue-500" />
            </motion.div>
            <motion.div
            variants={iconvariants(4)}
            initial="initial"
            animate="animate"
            className="p-4"
            >
            <SiJavascript className="text-5xl text-yellow-500" />
            </motion.div>
            <motion.div
            variants={iconvariants(4)}
            initial="initial"
            animate="animate"
            className="p-4"
            >
            <RiTailwindCssFill className="text-5xl text-blue-500" />
            </motion.div>
            <motion.div
            variants={iconvariants(5)}
            initial="initial"
            animate="animate"
            className="p-4"
            >
            <RiReactjsLine className="text-5xl text-cyan-400" />
            </motion.div>
            <motion.div
            variants={iconvariants(6)}
            initial="initial"
            animate="animate"
            className="p-4"
            >
                <TbBrandBootstrap className="text-7xl text-purple-800" />
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
            <TbBrandPython className="text-5xl" />

            </motion.div>
            <motion.div
            variants={iconvariants(3)}
            initial="initial"
            animate="animate"
            className="p-4"
            >
            <TbBrandDjango className="text-5xl text-lime-300"/>

            </motion.div>
            
            <motion.div
            variants={iconvariants(5)}
            initial="initial"
            animate="animate"
            className="p-4"
            >
            <TbBrandNodejs className="text-5xl text-green-500" />

            </motion.div>
            <motion.div
            variants={iconvariants(6)}
            initial="initial"
            animate="animate"
            className="p-4"
            >
            <SiExpress className="text-5xl" />

            </motion.div>
            <motion.div
            variants={iconvariants(2.5)}
            initial="initial"
            animate="animate"
            className="p-4"
            >
            <TbBrandMongodb className="text-5xl text-green-400" />

            </motion.div>
            <motion.div
            variants={iconvariants(3.5)}
            initial="initial"
            animate="animate"
            className="p-4"
            >
            <SiPostgresql className="text-5xl text-blue-400" />

            </motion.div>
           <motion.div
variants={iconvariants(4.5)}
initial="initial"
animate="animate"
className="p-4"
>
<SiLeetcode className="text-5xl text-orange-400" />
</motion.div>
        </motion.div>
        </div>
    );
};

export default Techno;