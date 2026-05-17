import React from 'react';
import { ArrowRight, Code2, Globe, LineChart, Palette, Terminal, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// 1. Import your AI assets
import websiteImg from '../assets/website.png';
import saasImg from '../assets/saas.png';
import mobileImg from '../assets/mobile.png';
import apiImg from '../assets/api.png';
import seoImg from '../assets/seo.png';
import brandImg from '../assets/brand.png';

const Home = () => {
    const bentoVariant = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="bg-[#030014] min-h-screen pt-24 overflow-hidden font-sans selection:bg-purple-500/30">

            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-20" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 rounded-[100%] blur-[120px] -z-10" />

            {/* HERO SECTION */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                        className="inline-flex items-center space-x-2 bg-purple-500/10 border border-purple-500/20 px-5 py-2 rounded-full mb-10 backdrop-blur-md"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-purple-400 animate-pulse" />
                        <span className="text-purple-300 text-xs font-bold uppercase tracking-widest">WebGemTech is Live</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-6xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[1.1]"
                    >
                        WE BUILD <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400">
                            DIGITAL EMPIRES.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-slate-400 text-xl sm:text-2xl mb-12 max-w-3xl font-light"
                    >
                        Stop settling for generic templates. We engineer high-performance platforms, from <strong className="text-white font-semibold">$130 local launches</strong> to <strong className="text-white font-semibold">$2,500+ scalable SaaS ecosystems</strong>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
                    >
                        <Link to="/software" className="w-full sm:w-auto bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_50px_-12px_rgba(255,255,255,0.4)] flex items-center justify-center group">
                            Start Your Project <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </Link>
                        <Link to="/small-business" className="w-full sm:w-auto text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/5 border border-transparent hover:border-white/10 transition-all flex items-center justify-center">
                            View Local Packages
                        </Link>
                    </motion.div>
                </div>
            </main>

            {/* THE BENTO BOX SERVICES */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 auto-rows-auto md:auto-rows-[280px]">

                    {/* Custom SaaS (Spans 4 columns, 2 rows on Desktop) */}
                    <motion.div variants={bentoVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                        className="md:col-span-4 lg:col-span-4 md:row-span-2 bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-10 group relative overflow-hidden flex flex-col justify-end"
                    >
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${saasImg})` }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

                        <div className="relative z-10">
                            <div className="bg-purple-500/20 w-fit p-4 rounded-2xl backdrop-blur-md mb-6 border border-purple-500/20">
                                <Terminal className="w-10 h-10 text-purple-400" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Custom SaaS Architecture</h3>
                            <p className="text-slate-300 text-lg max-w-md">We architect scalable full-stack web platforms and complex database infrastructures tailored perfectly to your business logic.</p>
                        </div>
                    </motion.div>

                    {/* Mobile Apps */}
                    <motion.div variants={bentoVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.1 }}
                        className="md:col-span-2 lg:col-span-2 bg-slate-950 border border-slate-800 rounded-3xl p-8 group relative overflow-hidden flex flex-col justify-end"
                    >
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${mobileImg})` }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

                        <div className="relative z-10">
                            <div className="bg-pink-500/20 w-fit p-3 rounded-2xl backdrop-blur-md mb-6 border border-pink-500/20">
                                <Smartphone className="w-8 h-8 text-pink-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Mobile Apps</h3>
                            <p className="text-slate-300 text-sm">Deployed natively to the App Store and Google Play.</p>
                        </div>
                    </motion.div>

                    {/* Web Dev */}
                    <motion.div variants={bentoVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.2 }}
                        className="md:col-span-2 lg:col-span-2 bg-slate-950 border border-slate-800 rounded-3xl p-8 group relative overflow-hidden flex flex-col justify-end"
                    >
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${websiteImg})` }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

                        <div className="relative z-10">
                            <div className="bg-blue-500/20 w-fit p-3 rounded-2xl backdrop-blur-md mb-6 border border-blue-500/20">
                                <Globe className="w-8 h-8 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Web Development</h3>
                            <p className="text-slate-300 text-sm">Lightning-fast, high-converting sites.</p>
                        </div>
                    </motion.div>

                    {/* API Integration */}
                    <motion.div variants={bentoVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.3 }}
                        className="md:col-span-4 lg:col-span-2 bg-slate-950 border border-slate-800 rounded-3xl p-8 group relative overflow-hidden flex flex-col justify-end"
                    >
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${apiImg})` }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

                        <div className="relative z-10">
                            <div className="bg-orange-500/20 w-fit p-3 rounded-2xl backdrop-blur-md mb-6 border border-orange-500/20">
                                <Code2 className="w-8 h-8 text-orange-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">API Integration</h3>
                            <p className="text-slate-300 text-sm">Automating complex workflows seamlessly.</p>
                        </div>
                    </motion.div>

                    {/* SEO Mastery */}
                    <motion.div variants={bentoVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.4 }}
                        className="md:col-span-2 lg:col-span-2 bg-slate-950 border border-slate-800 rounded-3xl p-8 group relative overflow-hidden flex flex-col justify-end"
                    >
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${seoImg})` }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

                        <div className="relative z-10">
                            <div className="bg-emerald-500/20 w-fit p-3 rounded-2xl backdrop-blur-md mb-6 border border-emerald-500/20">
                                <LineChart className="w-8 h-8 text-emerald-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">SEO Mastery</h3>
                            <p className="text-slate-300 text-sm">Data-driven strategies to dominate search rankings.</p>
                        </div>
                    </motion.div>

                    {/* Brand Identity */}
                    <motion.div variants={bentoVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.5 }}
                        className="md:col-span-2 lg:col-span-2 bg-slate-950 border border-slate-800 rounded-3xl p-8 group relative overflow-hidden flex flex-col justify-end"
                    >
                        <div className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${brandImg})` }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />

                        <div className="relative z-10">
                            <div className="bg-cyan-500/20 w-fit p-3 rounded-2xl backdrop-blur-md mb-6 border border-cyan-500/20">
                                <Palette className="w-8 h-8 text-cyan-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Brand Identity</h3>
                            <p className="text-slate-300 text-sm">Striking logo design and visual branding packages.</p>
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default Home;