import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaProjectDiagram } from "react-icons/fa"; 
import { BsPersonLinesFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { MdContacts } from "react-icons/md";


const Menuicons = () => {
    const links = [
        {
        title: "Home",
        icon: <FaHome className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />,
        href: "#",
        },
        {
            title: "About",
            icon: <BsPersonLinesFill className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />,
            href: "#",
        },
        {
            title: "Technologies",
            icon: <GiSkills className="h-5 w-5 text-neutral-500 dark:text-neutral-300"/>,
            href: "#",
        },
        {
            title: "Projects",
            icon: <FaProjectDiagram className="h-5 w-5 text-neutral-500 dark:text-neutral-300"/>,
            href: "#",
        },
        {
            title: "Contacts",
            icon: <MdContacts className="h-5 w-5 text-neutral-500 dark:text-neutral-300"/>,
            href: "#",
        }
    ];

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center h-[3rem] w-full"
        >
        <div className="flex space-x-4">
            {links.map((link, index) => (
            <motion.a
                key={index}
                href={link.href}
                className="flex flex-col items-center text-neutral-500 dark:text-neutral-300 hover:text-neutral-700 dark:hover:text-neutral-400 transition duration-300 ease-in-out"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.2 }}
                whileHover={{
                y: -15,
                scale: 1.0, 
                transition: { duration: 0.1, ease: "easeOut" },
                }}
            >
                {link.icon}
                <span className="mt-1">{link.title}</span>
            </motion.a>
            ))}
        </div>
        </motion.div>
    );
};

export default Menuicons;