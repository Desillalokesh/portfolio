import React from "react";
import { motion } from "framer-motion";
import { EDUCATION } from "../constants";

const Education = () => {
    return (
        <div className="border-t border-neutral-800 py-16">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center text-4xl"
            >
                Software Journey
            </motion.h2>

            <div className="max-w-3xl mx-auto px-8">
                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-800 ml-2" />

                    {/* Journey Items */}
                    <div className="space-y-8">
                        {EDUCATION.map((item, index) => (
                            <motion.div
                                key={index}
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 30 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="relative pl-10"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 top-2 w-5 h-5 rounded-full border-2 border-purple-500 bg-neutral-950" />

                                {/* Content Card */}
                                <div className="border border-neutral-800 rounded-lg p-5 hover:border-purple-500/50 transition-colors duration-300">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-neutral-100">
                                                {item.degree}
                                            </h3>
                                            <p className="text-purple-400 text-sm mt-1">
                                                {item.institution}
                                            </p>
                                        </div>
                                        <span className="text-xs text-neutral-400 sm:text-right whitespace-nowrap">
                                            {item.duration}
                                        </span>
                                    </div>
                                    
                                    <div className="inline-block px-3 py-1 text-xs border border-neutral-700 rounded-md text-neutral-300">
                                        {item.fieldOfStudy}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;