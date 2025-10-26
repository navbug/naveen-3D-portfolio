import React, { useState, useEffect } from 'react';
import { Mail, Menu, X, Sparkles } from 'lucide-react';

const Navigation = ({ tabs, activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const [contactHovered, setContactHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}>
        {/* Animated Background Blur */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-2xl' 
            : 'bg-white/60 backdrop-blur-lg shadow-lg'
        }`}>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 via-purple-50/20 to-transparent opacity-50"></div>
          
          {/* Animated Border Bottom */}
          <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent transition-opacity duration-500 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Logo with 3D Effect */}
            <div 
              className="relative group cursor-pointer"
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`}></div>
              
              {/* Logo Container */}
              <div className="relative bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Logo Content */}
                <div className="relative px-4 py-3 flex items-center gap-2">
                  {/* Animated Icon */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <div className={`relative w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center transform transition-all duration-300 ${
                      logoHovered ? 'rotate-12 scale-110' : 'rotate-0 scale-100'
                    }`}>
                      <span className="text-white font-bold text-sm">NB</span>
                      {logoHovered && (
                        <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-yellow-400 animate-spin-slow" />
                      )}
                    </div>
                  </div>
                  
                  {/* Logo Text */}
                  <div className="flex items-center gap-2">
                    <span className={`text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent transition-all duration-300 ${
                      logoHovered ? 'tracking-wider' : 'tracking-normal'
                    }`}>
                      Portfolio
                    </span>
                  </div>
                </div>

                {/* 3D Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-200/50 transition-all duration-300"></div>
              </div>

              {/* Floating Particles */}
              {logoHovered && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-float-up"
                      style={{
                        left: `${25 + i * 20}%`,
                        bottom: '0%',
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-2">
              {tabs && tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group/link ${
                    activeTab === tab.id
                      ? 'text-indigo-600'
                      : 'text-gray-600 hover:text-indigo-600'
                  }`}
                >
                  {/* Background Glow */}
                  <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100'
                      : 'bg-transparent group-hover/link:bg-gray-50'
                  }`}></div>

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-2">
                    <tab.icon className={`w-4 h-4 transition-all duration-300 ${
                      activeTab === tab.id ? 'scale-110' : 'group-hover/link:scale-110'
                    }`} />
                    {tab.label}
                  </span>

                  {/* Active Indicator */}
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full animate-scale-in"></div>
                  )}

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-xl border transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'border-indigo-200'
                      : 'border-transparent group-hover/link:border-gray-200'
                  }`}></div>
                </button>
              ))}
            </div>

            {/* Contact Button with 3D Effect */}
            <div className="flex items-center gap-4">
              <a
                href="mailto:naveenbugalia512@gmail.com"
                className="hidden sm:block relative group/contact"
                onMouseEnter={() => setContactHovered(true)}
                onMouseLeave={() => setContactHovered(false)}
              >
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-30 group-hover/contact:opacity-60 transition-all duration-300"></div>
                
                {/* Button */}
                <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-3 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/contact:translate-x-full transition-transform duration-700"></div>
                  
                  {/* Radial Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover/contact:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-2 text-white">
                    <Mail className={`w-4 h-4 transition-transform duration-300 ${
                      contactHovered ? 'rotate-12 scale-110' : ''
                    }`} />
                    <span className="font-semibold">Contact Me</span>
                  </span>

                  {/* 3D Edge Effect */}
                  <div className="absolute inset-0 rounded-2xl border border-white/20"></div>

                  {/* Floating Sparkle */}
                  {contactHovered && (
                    <Sparkles className="absolute top-1 right-1 w-4 h-4 text-yellow-300 animate-pulse" />
                  )}
                </div>

                {/* 3D Shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-purple-900/40 rounded-2xl blur-md translate-y-2 -z-10 scale-95 group-hover/contact:translate-y-3"></div>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative group/menu bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl opacity-0 group-hover/menu:opacity-100 transition-opacity"></div>
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700 relative z-10" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700 relative z-10" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 right-0 z-40 lg:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="mt-20 mx-4 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Gradient Header */}
          <div className="h-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>
          
          <div className="p-6 space-y-2">
            {tabs && tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full group/mobile relative px-6 py-4 rounded-2xl font-medium transition-all duration-300 text-left ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {/* Active Shimmer */}
                {activeTab === tab.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/mobile:translate-x-full transition-transform duration-1000 rounded-2xl"></div>
                )}

                <span className="relative flex items-center gap-3">
                  <tab.icon className="w-5 h-5" />
                  <span className="font-semibold">{tab.label}</span>
                  {activeTab === tab.id && (
                    <Sparkles className="w-4 h-4 ml-auto animate-pulse" />
                  )}
                </span>
              </button>
            ))}

            {/* Mobile Contact Button */}
            <a
              href="mailto:naveenbugalia512@gmail.com"
              className="block w-full mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative group/mobile-contact bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-6 py-4 rounded-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover/mobile-contact:opacity-100 transition-opacity duration-500"></div>
                <span className="relative flex items-center justify-center gap-2 text-white font-semibold">
                  <Mail className="w-5 h-5" />
                  Contact Me
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      <style jsx>{`
        @keyframes float-up {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-30px); opacity: 0; }
        }

        @keyframes scale-in {
          from { transform: translateX(-50%) scaleX(0); }
          to { transform: translateX(-50%) scaleX(1); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float-up {
          animation: float-up 1.5s ease-out infinite;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Navigation;