import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaProjectDiagram } from "react-icons/fa"; 
import { BsPersonLinesFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { MdContacts } from "react-icons/md";

const Menuicons = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const links = [
        {
            title: "Home",
            icon: <FaHome className="h-6 w-6" />,
            href: "#",
            gradient: "from-blue-500 to-cyan-500",
            shadowColor: "shadow-blue-500/30"
        },
        {
            title: "About",
            icon: <BsPersonLinesFill className="h-6 w-6" />,
            href: "#",
            gradient: "from-emerald-500 to-teal-500",
            shadowColor: "shadow-emerald-500/30"
        },
        {
            title: "Technologies",
            icon: <GiSkills className="h-6 w-6" />,
            href: "#",
            gradient: "from-purple-500 to-pink-500",
            shadowColor: "shadow-purple-500/30"
        },
        {
            title: "Projects",
            icon: <FaProjectDiagram className="h-6 w-6" />,
            href: "#",
            gradient: "from-orange-500 to-red-500",
            shadowColor: "shadow-orange-500/30"
        },
        {
            title: "Contacts",
            icon: <MdContacts className="h-6 w-6" />,
            href: "#",
            gradient: "from-indigo-500 to-purple-500",
            shadowColor: "shadow-indigo-500/30"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        >
            {/* Glassmorphism Container */}
            <div className="relative backdrop-blur-xl bg-gray-900/40 border border-gray-700/50 rounded-3xl px-6 py-4 shadow-2xl shadow-black/50">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl" />
                
                {/* Menu Items */}
                <div className="relative flex items-center space-x-6">
                    {links.map((link, index) => {
                        const isHovered = hoveredIndex === index;
                        
                        return (
                            <motion.a
                                key={index}
                                href={link.href}
                                className="relative group"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ 
                                    delay: index * 0.1, 
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 200 
                                }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.1,
                                    transition: { duration: 0.2, ease: "easeOut" },
                                }}
                                whileTap={{ scale: 0.95 }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                            >
                                {/* Glassmorphism Icon Container */}
                                <div className={`
                                    relative p-3 rounded-2xl backdrop-blur-sm transition-all duration-300
                                    ${isHovered 
                                        ? `bg-gray-800/60 border border-gray-600/60 ${link.shadowColor} shadow-lg` 
                                        : 'bg-gray-800/30 border border-gray-700/40'
                                    }
                                `}>
                                    {/* Gradient Background on Hover */}
                                    <div className={`
                                        absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                        bg-gradient-to-br ${link.gradient}/20
                                    `} />
                                    
                                    {/* Icon */}
                                    <div className={`
                                        relative transition-colors duration-300
                                        ${isHovered 
                                            ? `text-transparent bg-gradient-to-r ${link.gradient} bg-clip-text`
                                            : 'text-gray-400'
                                        }
                                    `}>
                                        {link.icon}
                                    </div>
                                </div>

                                {/* Tooltip */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                    animate={{ 
                                        opacity: isHovered ? 1 : 0,
                                        y: isHovered ? -12 : 10,
                                        scale: isHovered ? 1 : 0.8
                                    }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 pointer-events-none"
                                >
                                    <div className="relative backdrop-blur-xl bg-gray-900/80 border border-gray-600/50 rounded-xl px-3 py-2 shadow-xl shadow-black/40">
                                        <div className={`absolute inset-0 rounded-xl opacity-50 bg-gradient-to-r ${link.gradient}/20`} />
                                        <span className="relative text-gray-200 text-sm font-medium whitespace-nowrap">
                                            {link.title}
                                        </span>
                                        
                                        {/* Tooltip Arrow */}
                                        <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                                            <div className="w-2 h-2 bg-gray-900/80 border-r border-b border-gray-600/50 transform rotate-45"></div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Ripple Effect */}
                                <motion.div
                                    className={`absolute inset-0 rounded-2xl opacity-0 bg-gradient-to-r ${link.gradient}/30`}
                                    animate={isHovered ? {
                                        opacity: [0, 0.3, 0],
                                        scale: [0.8, 1.2, 1.4],
                                    } : {}}
                                    transition={{ duration: 0.6 }}
                                />
                            </motion.a>
                        );
                    })}
                </div>

                {/* Bottom Indicator */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-60" />
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 blur-2xl opacity-30">
                <div className="w-full h-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl" />
            </div>
        </motion.div>
    );
};

export default Menuicons;