import React from 'react';
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';
import { motion } from 'framer-motion';
import logo from '../assets/personal/profile.jpg'

const Footer = () => {
    return (
        <footer className="text-white py-6">
            <motion.div 
            whileInView={{opacity: 1, y: -20}}
            initial={{opacity: 0, y: 0}}
            transition={{type: "spring", stiffness: 300, damping: 4 ,duration: 0.6}}
            className="container mx-auto px-4">
                <div className="bg-black rounded-lg shadow-lg p-6 md:p-8 lg:p-10">
                    <div className="flex flex-col md:flex-row md:justify-between lg:justify-around">
                        
                        <div 
                        className="mb-4 p-6 border-l-4 md:mb-0 lg:w-1/2 xl:w-1/3">
                            <div className="flex flex-shrink-0 items-center">
                                <a href="/" aria-label='Home'>
                                    <img src={logo} alt="logo" className="w-14 h-auto mx-2 rounded-full"/>
                                </a>
                            </div>
                            <h2 className="text-2xl font-bold">Lokesh Desilla</h2>
                            <p className="text-sm">Hi there! I'm a Full Stack Developer with a passion for user-friendly web applications and a strong foundation in FrontEnd & BackEnd by using beautiful frameworks. I enjoy learning new tech, collaborating, and staying active.</p>
                        </div>
                        <div className="flex space-x-4 justify-center md:justify-end lg:w-1/2 xl:w-1/3">
                            <motion.a 
                            whileInView={{scale: 1.2, x: 0, opacity: 1}}
                            initial={{scale: 0.5, x: -20, opacity: 0}}
                            transition={{type: "spring", stiffness: 300, damping: 4 ,duration: 0.6}}
                            href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-gray-400 transition duration-300">
                                <AiOutlineTwitter />
                            </motion.a>
                            <motion.a 
                            whileInView={{scale: 1.2, x: 0, opacity: 1}}
                            initial={{scale: 0.5, x: 20, opacity: 0}}
                            transition={{type: "spring", stiffness: 300, damping: 4 ,duration: 0.6}}
                            href="https://www.linkedin.com/in/lokesh-desilla-48245b278/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-gray-400 transition duration-300">
                                <AiOutlineLinkedin />
                            </motion.a>
                            <motion.a 
                            whileInView={{scale: 1.2, x: 0, opacity: 1}}
                            initial={{scale: 0.5, x: -20, opacity: 0}}
                            transition={{type: "spring", stiffness: 300, damping: 4 ,duration: 0.6}}
                            href="https://github.com/Desillalokesh" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-gray-400 transition duration-300">
                                <AiOutlineGithub />
                            </motion.a>
                            <motion.a 
                            whileInView={{scale: 1.2, x: 0, opacity: 1}}
                            initial={{scale: 0.5, x: 20, opacity: 0}}
                            transition={{type: "spring", stiffness: 300, damping: 4 ,duration: 0.6}}
                            href="https://www.instagram.com/amigo_lokii/" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-gray-400 transition duration-300">
                                <AiOutlineInstagram />
                            </motion.a>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-sm"> {new Date().getFullYear()} lokesh desilla. All rights reserved.</p>
                    </div>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;