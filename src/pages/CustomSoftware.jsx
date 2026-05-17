import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Shield, Zap, ChevronRight, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomSoftware = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <div className="bg-[#030014] min-h-screen pt-24 pb-32 font-sans selection:bg-purple-500/30">

            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-purple-900/20 to-transparent -z-10" />

            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">

                {/* Back Button */}
                <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-12">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                {/* Hero Section */}
                <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-20">
                    <div className="inline-block bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full mb-6 text-purple-400 text-sm font-bold tracking-wide">
                        Enterprise Solutions
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
                        Scalable architecture for <br className="hidden md:block" />
                        serious businesses.
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl leading-relaxed">
                        We don't use templates. We engineer full-stack B2B SaaS platforms, complex internal tools, and high-performance mobile applications built to handle massive scale.
                    </p>
                </motion.div>

                {/* The Tech Stack (Authority Building) */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-24">
                    <h3 className="text-white text-xl font-bold mb-8 flex items-center">
                        <Server className="w-5 h-5 mr-3 text-purple-400" />
                        Our Core Stack
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['Next.js 16', 'React Native', 'PostgreSQL', 'Supabase', 'Prisma ORM', 'Tailwind CSS', 'Node.js', 'REST APIs'].map((tech, i) => (
                            <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center text-slate-300 font-medium flex items-center justify-center">
                                {tech}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* The "Why Us" Section */}
                <div className="grid md:grid-cols-2 gap-12 mb-24">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 h-full">
                            <Zap className="w-10 h-10 text-orange-400 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Performance First</h3>
                            <p className="text-slate-400 leading-relaxed">
                                By utilizing Next.js and modern caching strategies, we ensure your application loads in milliseconds. Speed isn't just a metric; it's a core business advantage that drives conversion.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }}>
                        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 h-full">
                            <Shield className="w-10 h-10 text-emerald-400 mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Bank-Grade Security</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Your data is protected by robust PostgreSQL databases managed via Prisma and Supabase. We implement strict Row Level Security (RLS) and secure authentication protocols by default.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* The Pitch & Pricing */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-gradient-to-br from-purple-900/40 to-slate-900 border border-purple-500/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -mr-20 -mt-20" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to build the main event?</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            Custom software engineering starts at <strong className="text-white text-xl">$2,500</strong>. Every project begins with a deep-dive architectural strategy call to map out your database, UI, and deployment pipeline.
                        </p>

                        <Link to="/contact" className="bg-white text-black px-8 py-4 rounded-xl... (keep your existing classes) flex items-center justify-center mx-auto group">
                            Book Your Strategy Call
                            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <p className="text-slate-500 text-sm mt-4">No commitment required for the initial consultation.</p>
                    </div>
                </motion.div>

            </main>
        </div>
    );
};

export default CustomSoftware;