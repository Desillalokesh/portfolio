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
            icon: <FaHome className="h-5 w-5" />,
            href: "#"
        },
        {
            title: "About",
            icon: <BsPersonLinesFill className="h-5 w-5" />,
            href: "#"
        },
        {
            title: "Technologies",
            icon: <GiSkills className="h-5 w-5" />,
            href: "#"
        },
        {
            title: "Projects",
            icon: <FaProjectDiagram className="h-5 w-5" />,
            href: "#"
        },
        {
            title: "Contact",
            icon: <MdContacts className="h-5 w-5" />,
            href: "#"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
        >
            {/* Clean Minimal Container */}
            <div className="bg-white/90 border border-gray-200 rounded-full px-2 py-2 shadow-sm">
                {/* Menu Items */}
                <div className="flex items-center gap-1">
                    {links.map((link, index) => {
                        const isHovered = hoveredIndex === index;
                        
                        return (
                            <motion.a
                                key={index}
                                href={link.href}
                                className="relative"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ 
                                    delay: index * 0.05, 
                                    duration: 0.3
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                            >
                                {/* Icon Container */}
                                <div className={`
                                    p-2.5 rounded-full transition-all duration-200
                                    ${isHovered 
                                        ? 'bg-gray-100 text-gray-900' 
                                        : 'bg-transparent text-gray-600'
                                    }
                                `}>
                                    {link.icon}
                                </div>

                                {/* Minimal Tooltip */}
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ 
                                        opacity: isHovered ? 1 : 0,
                                        y: isHovered ? -2 : 8
                                    }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute -top-10 left-1/2 transform -translate-x-1/2 pointer-events-none"
                                >
                                    <div className="bg-gray-900 text-white text-xs font-medium px-2.5 py-1.5 rounded-md whitespace-nowrap">
                                        {link.title}
                                    </div>
                                </motion.div>
                            </motion.a>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default Menuicons;