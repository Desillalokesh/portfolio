import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EDUCATION } from "../constants";

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 5 },
    },
    closed: {
        opacity: 0,
        y: 20,
        transition: { duration: 0.2 },
    },
};

const accordionVariants = {
    open: {
        clipPath: "inset(0% 0% 0% 0% round 10px)",
        transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05,
        },
    },
    closed: {
        clipPath: "inset(10% 50% 90% 50% round 10px)",
        transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3,
        },
    },
};

const icon = {
    hidden: {
        pathLength: 0,
        fill: "rgba(255, 255, 255, 1)",
    },
    visible: {
        pathLength: 1,
        fill: "rgba(255, 255, 255, 1)",
    },
};

const Education = () => {
    const [isOpen, setIsOpen] = useState(false);
    const accordionRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    // const handleScroll = () => {
    //     setIsOpen(false);
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);

    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);
    return (
        <motion.nav
        ref={accordionRef}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="menu"
        >
        <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={toggleAccordion}
            className="w-full text-left p-4 text-white bg-gray-800 rounded flex justify-between items-center border-b-2 border-transparent hover:border-white transition-all duration-300"
        >
            <span>Education</span>
            <motion.div
            variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
            className="flex-shrink-0"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                width="20"
                height="20"
            >
                <motion.path
                d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                variants={icon}
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                />
            </svg>
            </motion.div>
        </motion.button>
        <AnimatePresence>
            {isOpen && (
            <motion.ul
                variants={accordionVariants}
                initial="closed"
                animate="open"
                exit="closed"
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
                className="bg-gray-700 rounded shadow-md mt-2"
            >
                {EDUCATION.map((edu, index) => (
                <motion.li
                    key={index}
                    variants={itemVariants}
                    className="p-4 text-gray-300 border-b border-gray-600 last:border-b-0"
                >
                    <h3 className="font-semibold">
                    {edu.degree} - {edu.institution}
                    </h3>
                    <p>{edu.fieldOfStudy}</p>
                    <p>{edu.duration}</p>
                    <p>CGPA: {edu.cgpa}</p>
                </motion.li>
                ))}
            </motion.ul>
            )}
        </AnimatePresence>
        </motion.nav>
    );
};

export default Education;
