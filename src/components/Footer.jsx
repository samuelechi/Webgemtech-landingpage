import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#030014] border-t border-white/10 pt-16 pb-8 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center space-x-2 group mb-4 w-fit">
                            <div className="bg-gradient-to-tr from-purple-600 to-pink-500 p-2 rounded-lg group-hover:rotate-12 transition-transform">
                                <Rocket className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-white font-bold text-xl tracking-tight">
                                WebGem<span className="text-purple-400">Tech</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 max-w-sm mb-6 leading-relaxed">
                            Premium digital architecture and engineering. We build the infrastructure that scales your business.
                        </p>
                        <div className="flex items-center space-x-2 text-slate-400 text-sm">
                            <MapPin className="w-4 h-4 text-purple-400" />
                            <span>Proudly based in Canada. Serving clients globally.</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Services</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/software" className="text-slate-400 hover:text-purple-400 transition-colors text-sm">
                                    Custom Software
                                </Link>
                            </li>
                            <li>
                                <Link to="/small-business" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">
                                    Local Business Packages
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-bold mb-4">Connect</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:webgemtechca@gmail.com" className="flex items-center text-slate-400 hover:text-white transition-colors text-sm group">
                                    <Mail className="w-4 h-4 mr-3 group-hover:text-purple-400 transition-colors shrink-0" />
                                    webgemtechca@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+12047205433" className="flex items-center text-slate-400 hover:text-white transition-colors text-sm group">
                                    <Phone className="w-4 h-4 mr-3 group-hover:text-purple-400 transition-colors shrink-0" />
                                    +1-204-720-5433
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
                    <p className="text-slate-500 text-sm mb-4 md:mb-0">
                        &copy; {currentYear} WebGemTech. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <Link to="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;