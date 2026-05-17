import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Store, Zap, Smartphone, CheckCircle2, AlertCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LocalBusiness = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-[#030014] min-h-screen pt-24 pb-32 font-sans selection:bg-blue-500/30">

            {/* Background Gradients (Blue-shifted for trust/corporate feel) */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent -z-10" />

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">

                {/* Back Button */}
                <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-12">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                {/* Hero Section */}
                <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-20">
                    <div className="inline-block bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-6 text-blue-400 text-sm font-bold tracking-wide">
                        Local Business Solutions
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
                        Stop losing customers to <br className="hidden md:block" />
                        competitors with better websites.
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl leading-relaxed mb-8">
                        You run a business. You shouldn't be wasting your weekends trying to figure out DIY website builders. We build lightning-fast, mobile-ready sites that actually bring people through your doors.
                    </p>
                </motion.div>

                {/* The Pitch - Why DIY is bad */}
                <div className="grid md:grid-cols-3 gap-6 mb-24">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                        <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Done For You</h3>
                        <p className="text-slate-400 text-sm">No dragging and dropping. Hand us your logo and your info, and we build the entire digital foundation for you.</p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.1 }} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                        <Smartphone className="w-8 h-8 text-blue-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Mobile First</h3>
                        <p className="text-slate-400 text-sm">80% of your customers are looking you up on their phones. We engineer your site to look perfect on every screen.</p>
                    </motion.div>
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }} className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                        <Store className="w-8 h-8 text-emerald-400 mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Local SEO Ready</h3>
                        <p className="text-slate-400 text-sm">Built with the right technical structure so local customers in your city can actually find you on Google.</p>
                    </motion.div>
                </div>

                {/* The $130 Hook */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative bg-slate-900 border-2 border-blue-500/30 rounded-3xl p-8 md:p-12 overflow-hidden">
                    {/* Subtle glow behind the box */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-[100px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The WebGemTech Blueprint</h2>
                            <p className="text-slate-300 text-lg mb-6">
                                Our entry-level package designed specifically to get your local business online quickly, professionally, and affordably.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {[
                                    'Custom 2-Page Digital Foundation',
                                    'High-Converting Contact/Lead Form',
                                    'Click-to-Call Functionality',
                                    'Premium Agency Design (No cheap templates)'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-slate-300">
                                        <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex-1 w-full max-w-sm bg-[#030014] border border-slate-800 p-8 rounded-2xl text-center shadow-2xl">
                            <p className="text-slate-400 font-medium mb-2 uppercase tracking-wide">Starting At</p>
                            <div className="text-6xl font-black text-white mb-6">$130</div>

                            <Link to="/contact" className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl... (keep your existing classes) flex items-center justify-center group mb-4">
                                Claim Your Blueprint
                                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            {/* The "Catch" that forces a phone call */}
                            <div className="flex items-start text-left bg-blue-950/30 p-3 rounded-lg border border-blue-900/50">
                                <AlertCircle className="w-4 h-4 text-blue-400 mr-2 mt-0.5 shrink-0" />
                                <p className="text-xs text-slate-400 leading-tight">
                                    <strong>Terms & Conditions apply.</strong>
                                </p>
                            </div>
                        </div>

                    </div>
                </motion.div>

            </main>
        </div>
    );
};

export default LocalBusiness;