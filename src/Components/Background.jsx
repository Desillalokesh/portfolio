import { motion } from 'framer-motion';
import React from 'react';

const circleEffect = {
    animation1: {
        scale: [1, 1.2, 1],
        x: [0, 100, 0],
        y: [0, 50, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
        },
    },
    animation2: {
        scale: [1, 1.5, 1],
        x: [0, -100, 0],
        y: [0, -50, 0],
        transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeOut',
        },
    },
    animation3: {
        scale: [1, 1.8, 1],
        x: [0, 150, 0],
        y: [0, 75, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeOut',
        },
    },
    animation4: {
        scale: [1, 2, 1],
        x: [0, -150, 0],
        y: [0, -75, 0],
        transition: {
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeOut',
        },
    },
    animation5: {
        scale: [1, 1.2, 1.5, 1],
        x: [0, 150, -150, 0],
        y: [0, 50, -50, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeOut',
        },
    },
    animation6: {
        scale: [1, 1.5, 2, 1],
        x: [0, -100, 150, 0],
        y: [0, -50, 75, 0],
        transition: {
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeOut',
        },
    },
};

const Background = () => {
    return (
        <div className='fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center items-center filter blur-[100px] opacity-70'>
            <motion.div
                className='bg-orange-500 w-[350px] h-[250px] rounded-full absolute'
                variants={circleEffect}
                animate="animation1" 
            />
            <motion.div
                className='bg-stone-600 w-[300px] h-[200px] rounded-full absolute top-20 left-20'
                variants={circleEffect}
                animate="animation2"
            />
            <motion.div
                className='bg-slate-400 w-[250px] h-[150px] rounded-full absolute top-40 left-40'
                variants={circleEffect}
                animate="animation3"
            />
            <motion.div
                className='bg-gray-500 w-[200px] h-[100px] rounded-full absolute top-60 left-60'
                variants={circleEffect}
                animate="animation4"
            />
            <motion.div
                className='bg-zinc-500 w-[150px] h-[50px] rounded-full absolute top-80 left-80'
                variants={circleEffect}
                animate="animation5"
            />
            <motion.div
                className='bg-purple-500 w-[100px] h-[50px] rounded-full absolute top-100 left-100'
                variants={circleEffect}
                animate="animation6"
            />
        </div>
    );
};

export default Background;