import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Rocket, Code, Layout, ChevronRight, Mail } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Local Business', path: '/small-business', icon: Layout },
        { name: 'Custom Software', path: '/software', icon: Code },


    ];

    return (
        <nav className="fixed w-full z-50 top-0 left-0">
            {/* Glassmorphism Effect */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-4">
                <div className="bg-slate-900/70 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <Link to="/" className="flex items-center space-x-2 group">
                            <div className="bg-gradient-to-tr from-purple-600 to-pink-500 p-2 rounded-lg group-hover:rotate-12 transition-transform">
                                <Rocket className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-white font-bold text-xl tracking-tight">
                                WebGem<span className="text-purple-400">Tech</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-white/70 hover:text-white text-sm font-medium transition-colors flex items-center space-x-1"
                                >
                                    <link.icon className="w-4 h-4" />
                                    <span>{link.name}</span>
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center w-full bg-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-purple-700 transition-colors"
                            >
                                Book a Call
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden mx-auto max-w-7xl px-4 mt-2">
                    <div className="bg-slate-900 border border-white/10 rounded-2xl p-4 space-y-4 shadow-2xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="block text-white/70 hover:text-white text-lg font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center w-full bg-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-purple-700 transition-colors"
                        >
                            Book a Call
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;