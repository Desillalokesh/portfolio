import React from "react";
import profile from "../assets/personal/profile.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden:{x:-100 , opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay},
    },
})



const Hero = () => {
    return (
        <div>
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:p-6">
                <motion.img
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1,delay:1.2}}
                    src={profile}
                    alt="Lokesh"
                    className="border border-stone-900 rounded-3xl w-96"
                />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start mt-10">
                <motion.h2
                variants={container(0)}
                initial="hidden"
                animate="visible"

                className="pb-4 text-4xl tracking-tighter lg:text-8xl">
                    Lokesh Desilla
                </motion.h2>
                <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-600 to-purple-700 bg-clip-text text-3xl tracking-tighter text-transparent">
                    Full Stack Python Developer
                </motion.span>
                <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                    {HERO_CONTENT}
                </motion.p>
                
                <motion.a
                variants={container(2)}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.05, backgroundColor: 'black', color: 'white' }}
                whileTap={{ scale: 0.95 }}
                href="/UpdatedResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10">
                    View Resume
                </motion.a>

                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Hero;
