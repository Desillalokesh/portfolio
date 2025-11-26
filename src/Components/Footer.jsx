import React from 'react';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-neutral-800 py-8">
            <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-8"
            >
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Copyright Section */}
                    <div className="text-center md:text-left">
                        <p className="text-sm text-neutral-400">
                            © {new Date().getFullYear()} Lokesh. All rights reserved.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a 
                            href="https://www.linkedin.com/in/lokesh-desilla-48245b278/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 border border-neutral-800 rounded-lg hover:border-purple-500/50 hover:scale-105 transition-all duration-300"
                            aria-label="LinkedIn"
                        >
                            <AiOutlineLinkedin className="text-xl text-neutral-400 hover:text-purple-400 transition-colors" />
                        </a>

                        <a 
                            href="https://github.com/Desillalokesh" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 border border-neutral-800 rounded-lg hover:border-purple-500/50 hover:scale-105 transition-all duration-300"
                            aria-label="GitHub"
                        >
                            <AiOutlineGithub className="text-xl text-neutral-400 hover:text-purple-400 transition-colors" />
                        </a>

                        <a 
                            href="https://www.instagram.com/amigo_lokii/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 border border-neutral-800 rounded-lg hover:border-purple-500/50 hover:scale-105 transition-all duration-300"
                            aria-label="Instagram"
                        >
                            <AiOutlineInstagram className="text-xl text-neutral-400 hover:text-purple-400 transition-colors" />
                        </a>
                    </div>

                    {/* Back to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="px-4 py-2 border border-neutral-800 rounded-lg hover:border-purple-500/50 hover:scale-105 transition-all duration-300 text-sm text-neutral-400 hover:text-purple-400"
                        aria-label="Back to top"
                    >
                        Back to Top ↑
                    </button>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;