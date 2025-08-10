import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { RiMailSendFill, RiPhoneFill, RiUserLocationFill } from "react-icons/ri";

const Contact = () => {
    return (
        <div className="border-t border-stone-700 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Contact 
                <span className="text-white-500">Me</span>
            </motion.h2>
            <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 1, y: 100 }}
            transition={{ duration: 1.5 }}
            className="text-center tracking-tighter">
                <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1.5 }}
                        className="my-4"
                    >
                    <div className="flex items-center justify-center">
                        <RiUserLocationFill className="mr-2" />
                        <span>{CONTACT.address}</span>
                    </div>
                </motion.div>
                <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 2 }}
                >
                <a
                href={`mailto:${CONTACT.email}`}
                >
                    <div className="flex items-center justify-center">
                        <RiMailSendFill className="mr-2" /> 
                        <span>{CONTACT.email}</span>
                    </div>
                </a>

                </motion.div>
                
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 2.5 }}
                    className="my-4"
                >
                    <div className="flex items-center justify-center">
                        <RiPhoneFill className="mr-2" /> 
                        <span>{CONTACT.phoneNo}</span>
                    </div>
               </motion.div>
            </motion.div>
            <motion.div
            className="border-t bg-white-700 mx-auto w-0"
            initial={{ width: "0%" }} 
            whileInView={{ width: "100%" }} 
            transition={{ duration: 2 }} 
            viewport={{ amount: 0.5, once: false }}
        />
        </div>
    );
};

export default Contact;
