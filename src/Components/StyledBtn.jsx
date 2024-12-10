import React from "react";
import { motion } from "framer-motion";

const StyledBtn = ({ link, linkName }) => {
    return (
        <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ "--x": "100%", scale: 1 }}
        animate={{ "--x": "-100%" }}
        whileTap={{ scale: 0.97 }}
        transition={{
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
            type: "spring",
            stiffness: 20,
            damping: 15,
            mass: 2,
            scale: {
            type: "spring",
            stiffness: 10,
            damping: 5,
            mass: 0.1,
            },
        }}
        className="px-6 py-2 rounded-md relative styled-gradient text-neutral-100 tracking-wide font-light inline-block linear-mask"
        >
        {linkName}
        <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
        </motion.a>
    );
};

export default StyledBtn;
