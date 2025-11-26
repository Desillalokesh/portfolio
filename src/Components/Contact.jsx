import React, { useState } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiGithubLine, RiLinkedinBoxLine } from "react-icons/ri";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

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
        <div className="border-t border-neutral-800 pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Get In Touch
            </motion.h2>

            <div className="max-w-4xl mx-auto px-8">
                {/* Contact Information */}
                <motion.div 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Location */}
                        <div className="flex flex-col items-center text-center p-6 border border-neutral-800 rounded-lg hover:border-purple-500/50 transition-colors duration-300">
                            <RiMapPinLine className="text-3xl text-purple-400 mb-3" />
                            <h3 className="text-sm text-neutral-400 mb-2">Location</h3>
                            <p className="text-neutral-300">{CONTACT.address}</p>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col items-center text-center p-6 border border-neutral-800 rounded-lg hover:border-purple-500/50 transition-colors duration-300">
                            <RiMailLine className="text-3xl text-purple-400 mb-3" />
                            <h3 className="text-sm text-neutral-400 mb-2">Email</h3>
                            <a
                                href={`mailto:${CONTACT.email}`}
                                className="text-neutral-300 hover:text-purple-400 transition-colors"
                            >
                                {CONTACT.email}
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col items-center text-center p-6 border border-neutral-800 rounded-lg hover:border-purple-500/50 transition-colors duration-300">
                            <RiPhoneLine className="text-3xl text-purple-400 mb-3" />
                            <h3 className="text-sm text-neutral-400 mb-2">Phone</h3>
                            <p className="text-neutral-300">{CONTACT.phoneNo}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-16"
                >
                    
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="border border-neutral-800 rounded-lg p-8">
                        <h3 className="text-2xl mb-6 text-center">Send a Message</h3>
                        
                        {submitStatus === 'success' && (
                            <div className="mb-6 p-4 bg-green-900/20 border border-green-500/50 rounded-lg text-green-400 text-sm text-center">
                                Message sent successfully!
                            </div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className="mb-6 p-4 bg-red-900/20 border border-red-500/50 rounded-lg text-red-400 text-sm text-center">
                                Failed to send message. Please try again.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm text-neutral-400 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-transparent border border-neutral-800 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-neutral-300"
                                        placeholder="Your name"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm text-neutral-400 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-transparent border border-neutral-800 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-neutral-300"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>
                            
                            <div>
                                <label htmlFor="subject" className="block text-sm text-neutral-400 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-transparent border border-neutral-800 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-neutral-300"
                                    placeholder="What's this about?"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm text-neutral-400 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="6"
                                    className="w-full px-4 py-3 bg-transparent border border-neutral-800 rounded-lg focus:outline-none focus:border-purple-500 transition-colors text-neutral-300 resize-none"
                                    placeholder="Your message..."
                                />
                            </div>
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;