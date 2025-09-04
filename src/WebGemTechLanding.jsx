import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Smartphone, Zap, Shield, Users, Star, ArrowRight, Menu, X, Check, Globe, Palette, Rocket, Heart, Play, Phone, Mail, MapPin } from 'lucide-react';

const WebGemTechLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  const testimonials = [
    {
      name: "Maria Santos",
      business: "Santos Coffee Shop",
      text: "For just $650, I got a website that brought in 25 new customers in the first month!",
      rating: 5,
      savings: "Saved $2,000+ compared to other quotes"
    },
    {
      name: "Samuel Echedom",
      business: "Engineering Solutions",
      text: "Finally, web development that doesn't break the bank. Professional results, small business prices.",
      rating: 5,
      savings: "Started with $650 package"
    },
    {
      name: "Amy Chen",
      business: "Chen's Nail Salon",
      text: "The booking system in the premium package pays for itself. Best $2,500 I've spent!",
      rating: 5,
      savings: "ROI achieved in 2 months"
    }
  ];

  const features = [
    { icon: Globe, title: "Mobile-First Design", description: "Looks perfect on phones, tablets, and desktops" },
    { icon: Zap, title: "Lightning Fast", description: "3-second load times guaranteed" },
    { icon: Shield, title: "Secure & Reliable", description: "SSL certificates and daily backups included" },
    { icon: Rocket, title: "SEO Optimized", description: "Get found on Google from day one" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$650",
      originalPrice: "$1,200",
      description: "Perfect for new small businesses",
      features: [
        "3-page responsive website",
        "Mobile optimization",
        "Contact form",
        "Google Maps integration",
        "Basic SEO setup",
        "1 month free support"
      ],
      deliveryTime: "5-7 days",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "$1,500",
      originalPrice: "$2,900",
      description: "Most popular for growing businesses",
      features: [
        "7-page responsive website",
        "Online booking system",
        "Photo gallery",
        "Social media integration",
        "Advanced SEO",
        "Google Analytics",
        "2 months free support"
      ],
      popular: true,
      deliveryTime: "7-10 days",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Premium",
      price: "$3,000",
      originalPrice: "$6,000",
      description: "Complete business solution",
      features: [
        "Unlimited pages",
        "E-commerce store",
        "Customer login area",
        "Payment processing",
        "Inventory management",
        "Email marketing setup",
        "4 months free support",
        "Monthly performance reports"
      ],
      deliveryTime: "10-14 days",
      color: "from-orange-500 to-red-500"
    }
  ];

  const portfolioItems = [
    { title: "Local Restaurant", category: "Food & Dining", image: "🍽️" },
    { title: "Hair Salon", category: "Beauty", image: "✂️" },
    { title: "Auto Shop", category: "Automotive", image: "🔧" },
    { title: "Flower Shop", category: "Retail", image: "🌸" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const portfolioTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
    }, 3000);
    return () => clearInterval(portfolioTimer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-ping delay-2000"></div>
      </div>

      {/* Mouse Follow Effect */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none z-50 transition-transform duration-300 ease-out"
        style={{ 
          left: mousePosition.x - 12, 
          top: mousePosition.y - 12,
          transform: `scale(${Math.sin(Date.now() * 0.003) * 0.3 + 1})`,
          opacity: 0.6
        }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/30 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-white font-bold text-2xl tracking-tight">WebGemTech</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className=" text-gray/80 hover:text-gray/60 transition-colors duration-300">Services</button>
              <button onClick={() => scrollToSection('pricing')} className="">Pricing</button>
              <button onClick={() => scrollToSection('portfolio')} className="">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started
              </button>
            </div>
            
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/20">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">Services</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">Pricing</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-3 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8">
                <Heart className="w-4 h-4 text-pink-400 mr-2" />
                <span className="text-white font-medium">Loved by 50+ Small Businesses</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Stunning Websites
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 text-transparent bg-clip-text animate-pulse">
                  Starting $650
                </span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl">
                Finally, professional web development that fits your budget. No contracts, no hidden fees - 
                just beautiful websites that help small businesses like yours thrive online.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center group"
                >
                  Start From $650
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="flex items-center space-x-4">
                  <button className="w-12 h-12 !bg-white/30 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/20 transition-all group">
                    <Play className="w-9 h-6 text-white group-hover:scale-110 transition-transform" />
                  </button>
                  <span className="text-white/70">Watch our 2-min intro</span>
                </div>
              </div>
              
              <div className="mt-12 flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-white/60 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5-7</div>
                  <div className="text-white/60 text-sm">Days Delivery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">$0</div>
                  <div className="text-white/60 text-sm">Hidden Fees</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce">
                  LIVE DEMO
                </div>
                
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4">
                      <div className="text-white font-semibold mb-2">{portfolioItems[currentSlide].title}</div>
                      <div className="text-white/70 text-sm">{portfolioItems[currentSlide].category}</div>
                      <div className="text-4xl mt-2">{portfolioItems[currentSlide].image}</div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white/10 rounded h-8"></div>
                      <div className="bg-white/10 rounded h-8"></div>
                      <div className="bg-purple-500/30 rounded h-8"></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="text-white/60 text-sm">Real websites we've built</div>
                  <div className="flex justify-center space-x-2 mt-2">
                    {portfolioItems.map((_, index) => (
                      <div key={index} className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-purple-400' : 'bg-white/30'}`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Everything You Need, Nothing You Don't
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">
              We focus on what matters most for small businesses - getting you online fast, looking professional, and converting visitors into customers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Honest Pricing That Makes Sense
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">
              Choose what works for your business and budget. All prices include everything you need to get online and start growing.
            </p>
            
            <div className="inline-flex items-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-6 py-3 mt-6">
              <span className="text-green-400 font-semibold">🎉 Save up to 50% - Limited Time Offer</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          


  {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 ${
                plan.popular 
                  ? 'border-purple-400 ring-4 ring-purple-400/20 transform scale-105' 
                  : 'border-white/20 hover:border-white/40'
              } transition-all duration-500 hover:transform hover:scale-105 group`}>














                
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="text-5xl font-bold bg-gradient-to-r ${plan.color} text-white/80 bg-clip-text">
                      {plan.price}
                    </div>
                    <div className="text-white/50 line-through text-lg">{plan.originalPrice}</div>
                  </div>
                  <p className="text-white/70 mb-4">{plan.description}</p>
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full px-4 py-2 border border-blue-500/30">
                    <span className="text-blue-300 text-sm font-semibold">⚡ Ready in {plan.deliveryTime}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-white/90">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                  plan.popular 
                    ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-2xl transform hover:scale-105` 
                    : `bg-gradient-to-r ${plan.color} border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50`
                } group-hover:shadow-xl`}>
                  {plan.popular ? '🚀 Get Started Now' : 'Choose This Plan'}
                </button>
                
                <div className="text-center mt-4">
                  <span className="text-white/60 text-sm">No setup fees • No contracts</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Need Something Custom?</h3>
              <p className="text-white/70 mb-6">
                Every business is unique. Let's chat about your specific needs and create a custom solution that fits your budget.
              </p>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105">
                Let's Talk Custom Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real Results for Real Businesses
            </h2>
            <p className="text-white/70 text-xl max-w-3xl mx-auto">
              See how we've helped small businesses like yours grow their online presence and increase revenue.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-6xl text-center mb-4 group-hover:scale-110 transition-transform">
                    {item.image}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-center text-sm">
                    {item.category}
                  </p>
                  <div className="mt-4 text-center">
                    <span className="text-green-400 text-sm font-semibold">View Live Site →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stories from Happy Clients
            </h2>
            <p className="text-white/70 text-xl">
              Real feedback from real small business owners who chose WebGemTech.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 text-center shadow-2xl">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-white text-2xl mb-6 leading-relaxed font-medium">
                "{testimonials[activeTestimonial].text}"
              </blockquote>
              
              <div className="mb-4">
                <div className="font-semibold text-white text-xl">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-white/70 mb-2">
                  {testimonials[activeTestimonial].business}
                </div>
                <div className="inline-block bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-4 py-2">
                  <span className="text-green-400 text-sm font-semibold">
                    💰 {testimonials[activeTestimonial].savings}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => {
                const isActive = index === activeTestimonial;
                return (
                <button
                    key={index}
                    className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer focus:outline-none ${
                    isActive 
                        ? 'scale-125 shadow-lg' 
                        : 'hover:scale-110'
                    }`}
                    style={{
                    background: isActive 
                        ? 'linear-gradient(to right, #a855f7, #ec4899)' 
                        : 'rgba(255, 255, 255, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                    if (!isActive) {
                        e.target.style.background = 'rgba(255, 255, 255, 0.5)';
                    }
                    }}
                    onMouseLeave={(e) => {
                    if (!isActive) {
                        e.target.style.background = 'rgba(255, 255, 255, 0.3)';
                    }
                    }}
                    onClick={() => setActiveTestimonial(index)}
                    aria-label={`View testimonial ${index + 1}`}
                />
                );
            })}
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-white/70 text-xl mb-8 leading-relaxed">
                Join hundreds of small businesses who trust WebGemTech. Let's create something amazing together, 
                starting from just $650.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Call us directly</div>
                    <div className="text-white/70">(555) 123-GEMS</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email us</div>
                    <div className="text-white/70">hello@webgemtech.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Local to Manitoba</div>
                    <div className="text-white/70">Brandon, MB • Serving all of Canada</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Get Your Free Quote</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                  />
                </div>
                
                <input 
                  type="text" 
                  placeholder="Business Name" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all"
                />
                
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all">
                  <option value="" className="bg-slate-800">Select Package Interest</option>
                  <option value="starter" className="bg-slate-800">Starter - $650</option>
                  <option value="professional" className="bg-slate-800">Professional - $1,450</option>
                  <option value="premium" className="bg-slate-800">Premium - $2,500</option>
                  <option value="custom" className="bg-slate-800">Custom Solution</option>
                </select>
                
                <textarea 
                  placeholder="Tell us about your business and what you need..."
                  rows="4"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all resize-none"
                ></textarea>
                
                <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get My Free Quote 🚀
                </button>
                
                <p className="text-white/60 text-sm text-center">
                  We'll respond within 2 hours during business hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Money-Back Guarantee</h3>
              <p className="text-white/70 text-sm">
                Not happy? Get your money back within 30 days, no questions asked.
              </p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Fast Delivery</h3>
              <p className="text-white/70 text-sm">
                Most websites completed and live within 5-14 days.
              </p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Ongoing Support</h3>
              <p className="text-white/70 text-sm">
                Free support included with every package. We're here when you need us.
              </p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Small Business Focus</h3>
              <p className="text-white/70 text-sm">
                We understand small businesses because we are one too.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur border-y border-white/20">
        <div className="w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your Website Could Be Live Next Week
          </h2>
          <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Stop losing customers to competitors with better websites. Join the 50+ small businesses 
            who chose WebGemTech and are now thriving online.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-full text-xl font-bold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Start From Just $650 🚀
            </button>
            <div className="text-center sm:text-left">
              <div className="text-white font-semibold">Questions? Call us:</div>
              <div className="text-white/80 text-lg">(204) 720-5433</div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/60">
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>No contracts</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>Free revisions</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-400" />
              <span>Money-back guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 backdrop-blur py-16 px-4 sm:px-6 lg:px-8 border-t border-white/20">
        <div className="w-full">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center shadow-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-bold text-2xl">WebGemTech</span>
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                Beautiful, affordable websites for small businesses. 
                Based in Brandon, MB, serving businesses across Canada.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/0 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
                  <a href='' className="text-white text-sm"><img src='src/facebook.png'></img></a>
                </div>
                <div className="w-10 h-10 bg-white/0 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
                  <a href='' className="text-white text-sm"><img src='src/instagram.png'></img></a>
                </div>
                <div className="w-10 h-10 bg-white/0 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
                  <a href='' className="text-white text-sm"><img src='src/twitter.png'></img></a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Services</h3>
              <ul className="space-y-3 text-white/70">
                <li className="hover:text-white transition-colors cursor-pointer">Website Development</li>
                <li className="hover:text-white transition-colors cursor-pointer">E-commerce Stores</li>
                <li className="hover:text-white transition-colors cursor-pointer">Booking Systems</li>
                <li className="hover:text-white transition-colors cursor-pointer">Website Maintenance</li>
                <li className="hover:text-white transition-colors cursor-pointer">SEO Optimization</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Pricing</h3>
              <ul className="space-y-3 text-white/70">
                <li className="hover:text-white transition-colors cursor-pointer">Starter Package - $650</li>
                <li className="hover:text-white transition-colors cursor-pointer">Professional - $1,500</li>
                <li className="hover:text-white transition-colors cursor-pointer">Premium - $3,000</li>
                <li className="hover:text-white transition-colors cursor-pointer">Custom Solutions</li>
                <li className="hover:text-white transition-colors cursor-pointer">Free Quotes</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Contact</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(204) 720-5433</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@webgemtech.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Brandon, MB, Canada</span>
                </li>
              </ul>
              
              <div className="mt-6 bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-4 border border-white/20">
                <div className="text-white font-semibold text-sm mb-1">Business Hours</div>
                <div className="text-white/70 text-sm">Mon-Fri: 9AM-6PM CST</div>
                <div className="text-white/70 text-sm">Weekend: By appointment</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-white/60 text-sm mb-4 md:mb-0">
                &copy; 2025 WebGemTech. All rights reserved. Made with ❤️ for small businesses.
              </p>
              <div className="flex space-x-6 text-white/60 text-sm">
                <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
                <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
                <span className="hover:text-white transition-colors cursor-pointer">Refund Policy</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebGemTechLanding;
