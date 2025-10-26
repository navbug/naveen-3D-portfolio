import React, { useState, useRef, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, CodeXml, Download, Sparkles, ArrowRight } from 'lucide-react';
import heroImage from "../assets/heroImage.jpg";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  // Track mouse movement for 3D tilt effect
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setMousePosition({ x, y });
  };

  const handleResumeDownload = () => {
    // Simulated download - replace with actual file path
    const link = document.createElement("a");
    link.href = "/src/assets/naveen_resume.pdf"; // Update this path
    link.download = "Naveen_Bugalia_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Calculate 3D transform based on mouse position
  const getTransform = () => {
    if (!isHovered) return 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    const rotateY = (mousePosition.x - 0.5) * 20;
    const rotateX = -(mousePosition.y - 0.5) * 20;
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-10 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Hero Image with Advanced 3D Effects */}
          <div 
            ref={containerRef}
            className="relative group perspective-container lg:pl-16"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
          >
            <div 
              className="relative transition-all duration-500 ease-out"
              style={{ 
                transform: getTransform(),
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Layered 3D Shadow Effects */}
              <div className="absolute -inset-8 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-all duration-500 animate-pulse-slow"></div>
              <div className="absolute -inset-6 bg-linear-to-r from-blue-500 to-indigo-500 rounded-full blur-2xl opacity-25 group-hover:opacity-35 transition-all duration-500"></div>
              <div className="absolute -inset-4 bg-linear-to-r from-purple-400 to-pink-400 rounded-full blur-xl opacity-30 group-hover:opacity-40 transition-all duration-500"></div>
              
              {/* Rotating Ring Effect */}
              <div className="absolute inset-0 rounded-full border-2 border-indigo-400/30 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border-2 border-purple-400/30 animate-spin-reverse"></div>
              
              {/* Main Image Container with 3D Depth */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* 3D Layered Borders */}
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-2xl transform translate-z-20">
                  <div className="absolute inset-0 rounded-full bg-linear-to-br from-white via-gray-50 to-white p-2">
                    <div className="absolute inset-0 rounded-full bg-linear-to-br from-indigo-100 via-purple-100 to-pink-100 overflow-hidden">
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <img
                        src={heroImage}
                        alt="Naveen Bugalia"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-linear-to-r from-indigo-400 to-purple-400 rounded-full opacity-40 animate-float"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${3 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Enhanced Floating Badges with 3D Effect */}
              <div className="absolute -top-6 -right-6 group/badge">
                <div className="relative bg-white rounded-2xl shadow-2xl px-5 py-3 transform hover:scale-110 transition-all duration-300 border-2 border-indigo-100">
                  <div className="absolute inset-0 bg-linear-to-r from-green-400 to-emerald-400 rounded-2xl blur-lg opacity-30 group-hover/badge:opacity-50 transition-opacity"></div>
                  <div className="relative flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50"></div>
                    <span className="text-sm font-bold text-gray-800">Available for Work</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 group/badge">
                <div className="relative bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-2xl px-5 py-3 transform hover:scale-110 hover:rotate-3 transition-all duration-300">
                  <div className="absolute inset-0 bg-linear-to-r from-pink-600 to-indigo-600 rounded-2xl blur-md opacity-0 group-hover/badge:opacity-50 transition-opacity"></div>
                  <div className="relative flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-white animate-pulse" />
                    <span className="text-white font-bold">Full Stack Developer</span>
                  </div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-linear-to-r from-indigo-500 to-purple-500 rounded-lg shadow-lg animate-orbit opacity-60"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-linear-to-r from-purple-500 to-pink-500 rounded-full shadow-lg animate-orbit-reverse opacity-60" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>

          {/* Hero Content with Enhanced Styling */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <h2 className="text-xl md:text-2xl text-indigo-600 font-semibold flex items-center gap-2 justify-center lg:justify-start">
                  <span className="animate-wave inline-block">🙏</span>
                  <span className="animate-slide-in">Namaste, I'm</span>
                </h2>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold pb-3 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-300% relative">
                Naveen Bugalia
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </h1>
              
              <div className="relative inline-block">
                <p className="text-2xl md:text-3xl text-gray-700 font-bold relative z-10">
                  FullStack Developer
                </p>
                <div className="absolute inset-0 bg-linear-to-r from-indigo-200 to-purple-200 blur-xl opacity-30 animate-pulse"></div>
              </div>
            </div>

            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed backdrop-blur-sm bg-white/30 p-6 rounded-2xl shadow-lg border border-gray-100">
              I focus on building <span className="font-semibold text-indigo-600">responsive, scalable, and highly performant</span> websites using React.js. 
              My full-stack capabilities include developing robust APIs and server-side logic with Node.js 
              to tackle real-world problems through <span className="font-semibold text-purple-600">innovative and efficient solutions</span>.
            </p>

            {/* Enhanced Social Links with 3D Effect */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              {[
                { icon: Linkedin, href: 'http://www.linkedin.com/in/naveenbugalia512', color: 'from-blue-600 to-blue-400', label: 'LinkedIn' },
                { icon: Github, href: 'https://github.com/navbug', color: 'from-gray-700 to-gray-600', label: 'GitHub' },
                { icon: CodeXml, href: 'https://leetcode.com/u/naveenbugalia512/', color: 'from-orange-500 to-yellow-500', label: 'LeetCode' },
                { icon: Mail, href: 'mailto:naveenbugalia512@gmail.com', color: 'from-red-500 to-pink-500', label: 'Email' },
                { icon: Phone, href: 'tel:+918278608273', color: 'from-green-500 to-emerald-500', label: 'Phone' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/social relative"
                  title={social.label}
                >
                  <div className={`absolute inset-0 bg-linear-to-r ${social.color} rounded-2xl blur-lg opacity-40 group-hover/social:opacity-70 transition-all duration-300`}></div>
                  <div className={`relative bg-linear-to-r ${social.color} p-4 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover:rotate-6 transition-all duration-300`}>
                    <social.icon className="w-6 h-6 text-white" />
                    <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover/social:opacity-20 transition-opacity"></div>
                  </div>
                </a>
              ))}
            </div>

            {/* Enhanced CTA Button */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <button 
                onClick={handleResumeDownload} 
                className="group/btn relative bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-2xl hover:shadow-indigo-500/50 transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-linear-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-3">
                  <Download className="w-5 h-5 group-hover/btn:animate-bounce" />
                  Download Resume
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </span>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 0.4; }
          100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
        }

        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }

        @keyframes slide-in {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes orbit {
          from { transform: rotate(0deg) translateX(200px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
        }

        @keyframes orbit-reverse {
          from { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
          to { transform: rotate(0deg) translateX(200px) rotate(0deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }

        .animate-slide-in {
          animation: slide-in 0.6s ease-out;
        }

        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .bg-300\\% {
          background-size: 300%;
        }

        .animate-orbit {
          animation: orbit 10s linear infinite;
        }

        .animate-orbit-reverse {
          animation: orbit-reverse 8s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: slide-in 0.8s ease-out;
        }

        .perspective-container {
          perspective: 2000px;
        }

        @media (max-width: 768px) {
          .text-7xl {
            font-size: 3rem;
          }
          .text-6xl {
            font-size: 2.5rem;
          }
          .text-5xl {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;