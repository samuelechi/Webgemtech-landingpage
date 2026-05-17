import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mail, Phone, ArrowLeft, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-[#030014] min-h-screen pt-24 pb-32 font-sans selection:bg-purple-500/30">

            {/* Background Gradient */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent -z-10" />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">

                {/* Back Button */}
                <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-12">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                {/* Hero Section */}
                <motion.div initial="hidden" animate="visible" variants={fadeIn} className="text-center mb-20">
                    <div className="inline-block bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full mb-6 text-purple-400 text-sm font-bold tracking-wide">
                        Book a Strategy Call
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
                        Let's build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Main Event.</span>
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
                        Select a time below to schedule your initial consultation, or drop us a detailed project brief.
                    </p>
                </motion.div>

                {/* The Hybrid Layout: Calendly + Form */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Embedded Calendly */}
                    <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.1 }} className="bg-slate-900/50 border border-slate-800 rounded-3xl p-4 h-[700px] overflow-hidden relative">
                        <div className="absolute top-4 left-6 flex items-center space-x-2 z-10 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/5">
                            <Calendar className="w-4 h-4 text-purple-400" />
                            <span className="text-white text-sm font-medium">Live Calendar</span>
                        </div>

                        {/* The Actual Calendly Embed */}
                        <iframe
                            src="https://calendly.com/webgemtechca/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=0f172a&text_color=ffffff&primary_color=a855f7"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            className="rounded-2xl pt-12"
                            title="Schedule a Strategy Call"
                        />
                    </motion.div>

                    {/* Right Column: Contact Form & Info */}
                    <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }} className="space-y-8">

                        {/* Direct Contact Info */}
                        {/* Direct Contact Info */}
                        {/* FIX 1: Changed grid-cols-2 to grid-cols-1 sm:grid-cols-2 so it stacks on mobile */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                            <a href="mailto:webgemtechca@gmail.com" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/30 transition-colors group flex flex-col items-center text-center">
                                <div className="bg-purple-500/10 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
                                    <Mail className="w-6 h-6 text-purple-400" />
                                </div>
                                <h4 className="text-white font-bold mb-1">Email Us</h4>
                                {/* FIX 2: Added break-all to safely wrap the long email address */}
                                <p className="text-slate-400 text-sm break-all">webgemtechca@gmail.com</p>
                            </a>

                            <a href="tel:+12047205433" className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-500/30 transition-colors group flex flex-col items-center text-center">
                                <div className="bg-purple-500/10 p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
                                    <Phone className="w-6 h-6 text-purple-400" />
                                </div>
                                <h4 className="text-white font-bold mb-1">Call Us</h4>
                                <p className="text-slate-400 text-sm">+1-204-720-5433</p>
                            </a>

                        </div>


                        {/* Project Intake Form */}
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-6">Submit a Project Brief</h3>
                            <form
                                action="https://formspree.io/f/mgoqevrn"
                                method="POST"
                                className="space-y-4"
                            >
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="full-name" className="text-slate-400 text-sm font-medium ml-1">Name</label>
                                        <input
                                            id="full-name"
                                            name="name"
                                            type="text"
                                            required
                                            className="w-full bg-[#030014] border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="company-name" className="text-slate-400 text-sm font-medium ml-1">Company</label>
                                        <input
                                            id="company-name"
                                            name="company"
                                            type="text"
                                            className="w-full bg-[#030014] border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                            placeholder="Acme Corp"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email-address" className="text-slate-400 text-sm font-medium ml-1">Email</label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        required
                                        className="w-full bg-[#030014] border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone-number" className="text-slate-400 text-sm font-medium ml-1">Phone (Optional)</label>
                                    <input
                                        id="phone-number"
                                        name="phone"
                                        type="tel"
                                        className="w-full bg-[#030014] border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                        placeholder="+1 (555) 555-5555"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="project-brief" className="text-slate-400 text-sm font-medium ml-1">Project Details & Budget</label>
                                    <textarea
                                        id="project-brief"
                                        name="message"
                                        rows="4"
                                        required
                                        className="w-full bg-[#030014] border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                        placeholder="Tell us what you're looking to build..."
                                    />
                                </div>

                                {/* Changed type to "submit" so it actually sends the data */}
                                <button
                                    type="submit"
                                    className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-purple-50 transition-colors flex items-center justify-center group mt-4"
                                >
                                    Send Brief
                                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </form>
                        </div>

                    </motion.div>
                </div>

            </main>
        </div>
    );
};

export default Contact;