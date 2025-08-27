import React, { useState, useEffect } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { RiMailSendFill, RiPhoneFill, RiUserLocationFill, RiSendPlaneFill, RiTerminalBoxFill } from "react-icons/ri";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [terminalText, setTerminalText] = useState('');
    const [glitchActive, setGlitchActive] = useState(false);

    // Terminal typing effect
    useEffect(() => {
        const texts = [
            'Initializing contact protocol...',
            'Establishing secure connection...',
            'Ready to receive transmission...',
            'Awaiting your message...',
        ];
        let currentIndex = 0;
        let currentText = '';
        let isDeleting = false;

        const typeWriter = () => {
            const fullText = texts[currentIndex];
            
            if (isDeleting) {
                currentText = fullText.substring(0, currentText.length - 1);
            } else {
                currentText = fullText.substring(0, currentText.length + 1);
            }
            
            setTerminalText(currentText);
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && currentText === fullText) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && currentText === '') {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % texts.length;
                typeSpeed = 500;
            }
            
            setTimeout(typeWriter, typeSpeed);
        };
        
        typeWriter();
    }, []);

    // Glitch effect trigger
    useEffect(() => {
        const interval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 200);
        }, 5000);
        
        return () => clearInterval(interval);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Using Formspree for form handling (replace with your form endpoint)
            const response = await fetch('https://formspree.io/f/mandyroq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    return (
        <div className="border-t border-cyan-500/30 pb-20 relative overflow-hidden">
            {/* Digital grid overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="h-full w-full" 
                     style={{
                         backgroundImage: `
                             linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)
                         `,
                         backgroundSize: '50px 50px'
                     }} />
            </div>

            {/* Floating data particles specific to contact section */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={`contact-particle-${i}`}
                        className="absolute w-2 h-2 border border-cyan-400 rotate-45"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-10, 10, -10],
                            opacity: [0.3, 1, 0.3],
                            scale: [0.8, 1.2, 0.8],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className={`my-20 text-center text-4xl font-mono relative ${glitchActive ? 'animate-pulse' : ''}`}
                style={{
                    textShadow: glitchActive ? 
                        '2px 0 #ff0000, -2px 0 #00ffff, 0 0 20px rgba(34, 211, 238, 0.5)' : 
                        '0 0 20px rgba(34, 211, 238, 0.5)'
                }}
            >
                <span className="text-cyan-400">{'<'}</span>
                Contact
                <span className="text-green-400 ml-2"></span>
                <span className="text-cyan-400">{'/>'}</span>
                
                {/* Terminal cursor */}
                <span className="inline-block w-3 h-6 bg-cyan-400 ml-2 animate-pulse" />
            </motion.h2>

            {/* Terminal Header */}
            <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1 }}
                className="max-w-4xl mx-auto mb-12 px-4"
            >
                <div className="bg-gray-900/80 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 font-mono text-sm">
                    <div className="flex items-center mb-2">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="ml-4 text-green-400">contact</div>
                    </div>
                    <div className="text-green-400">
                        <RiTerminalBoxFill className="inline mr-2" />
                        <span className="animate-pulse">{terminalText}</span>
                        <span className="animate-ping">_</span>
                    </div>
                </div>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information - Holographic Cards */}
                    <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1.5 }}
                        className="space-y-8"
                    >
                        

                        <div className="space-y-6">
                            {/* Location Card */}
                            <motion.div
                                whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(34, 211, 238, 0.3)" }}
                                className="group relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300"
                            >
                                <div className="flex items-center">
                                    <div className="relative">
                                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30">
                                            <RiUserLocationFill className="text-2xl text-cyan-400" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                                    </div>
                                    <div className="ml-6">
                                        <h4 className="font-mono text-cyan-400 mb-1">location.coordinates</h4>
                                        <span className="text-gray-300 font-mono text-sm">{CONTACT.address}</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Email Card */}
                            <motion.div
                                whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(34, 197, 94, 0.3)" }}
                                className="group relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300"
                            >
                                <div className="flex items-center">
                                    <div className="relative">
                                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                                            <RiMailSendFill className="text-2xl text-green-400" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-500 rounded-full animate-ping"></div>
                                    </div>
                                    <div className="ml-6">
                                        <h4 className="font-mono text-green-400 mb-1">email.address</h4>
                                        <a
                                            href={`mailto:${CONTACT.email}`}
                                            className="text-gray-300 font-mono text-sm hover:text-green-400 transition-colors underline decoration-green-500/30"
                                        >
                                            {CONTACT.email}
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Phone Card */}
                            <motion.div
                                whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(147, 51, 234, 0.3)" }}
                                className="group relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300"
                            >
                                <div className="flex items-center">
                                    <div className="relative">
                                        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
                                            <RiPhoneFill className="text-2xl text-purple-400" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                                    </div>
                                    <div className="ml-6">
                                        <h4 className="font-mono text-purple-400 mb-1">phone.number</h4>
                                        <span className="text-gray-300 font-mono text-sm">{CONTACT.phoneNo}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Futuristic Contact Form */}
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1.5 }}
                        className="relative"
                    >
                        {/* Holographic border effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-green-600 rounded-lg blur opacity-30 animate-pulse"></div>
                        
                        <div className="relative bg-gray-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8">
                            <div className="flex items-center mb-8">
                                <div className="flex space-x-2 mr-4">
                                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                                </div>
                                <h3 className="text-xl font-mono text-cyan-400">message-transmitter</h3>
                            </div>
                            
                            {submitStatus === 'success' && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-green-900/50 border border-green-500/50 rounded-lg font-mono"
                                >
                                    <div className="text-green-400 text-sm">
                                        ✓ Message transmission successful<br />
                                        → Awaiting response protocol<br />
                                        → Connection established
                                    </div>
                                </motion.div>
                            )}
                            
                            {submitStatus === 'error' && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-6 p-4 bg-red-900/50 border border-red-500/50 rounded-lg font-mono"
                                >
                                    <div className="text-red-400 text-sm">
                                        ✗ Transmission failed<br />
                                        → Retrying connection...<br />
                                        → Please try again
                                    </div>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="relative group">
                                        <label htmlFor="name" className="block text-sm font-mono text-cyan-400 mb-2">
                                            name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all font-mono text-sm placeholder-gray-500"
                                            placeholder='"your_name"'
                                        />
                                        <div className="absolute inset-0 border border-cyan-500/0 rounded-lg group-hover:border-cyan-500/30 transition-colors pointer-events-none"></div>
                                    </div>
                                    
                                    <div className="relative group">
                                        <label htmlFor="email" className="block text-sm font-mono text-green-400 mb-2">
                                            email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all font-mono text-sm placeholder-gray-500"
                                            placeholder='"user@domain.com"'
                                        />
                                        <div className="absolute inset-0 border border-green-500/0 rounded-lg group-hover:border-green-500/30 transition-colors pointer-events-none"></div>
                                    </div>
                                </div>
                                
                                <div className="relative group">
                                    <label htmlFor="subject" className="block text-sm font-mono text-purple-400 mb-2">
                                        subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all font-mono text-sm placeholder-gray-500"
                                        placeholder='"project_collaboration"'
                                    />
                                    <div className="absolute inset-0 border border-purple-500/0 rounded-lg group-hover:border-purple-500/30 transition-colors pointer-events-none"></div>
                                </div>
                                
                                <div className="relative group">
                                    <label htmlFor="message" className="block text-sm font-mono text-yellow-400 mb-2">
                                        message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all font-mono text-sm placeholder-gray-500 resize-none"
                                        placeholder='  "Hello, I would like to discuss..."\n  // Your message here'
                                    />
                                    <div className="absolute bottom-2 right-4 text-yellow-400 font-mono text-sm">{'}'}</div>
                                    <div className="absolute inset-0 border border-yellow-500/0 rounded-lg group-hover:border-yellow-500/30 transition-colors pointer-events-none"></div>
                                </div>
                                
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-mono font-semibold py-4 px-6 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center relative overflow-hidden group"
                                >
                                    {/* Button glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
                                    
                                    {isSubmitting ? (
                                        <div className="flex items-center relative z-10">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                                            transmitting_data...
                                        </div>
                                    ) : (
                                        <div className="flex items-center relative z-10">
                                            <RiSendPlaneFill className="mr-3 text-lg" />
                                            execute_transmission()
                                        </div>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Matrix-style divider */}
            <motion.div
                className="mt-20 relative"
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 2 }}
            >
                {/* Animated line */}
                <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"
                    initial={{ width: "0%" }} 
                    whileInView={{ width: "100%" }} 
                    transition={{ duration: 2 }} 
                />
                
                {/* Digital nodes */}
                <div className="flex justify-center space-x-8 mt-4">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 border-2 border-cyan-500 rotate-45 animate-pulse"
                            style={{ animationDelay: `${i * 0.2}s` }}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;