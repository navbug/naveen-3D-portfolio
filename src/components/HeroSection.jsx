import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Mail, Phone, Linkedin, Github, Globe, Code, Briefcase, GraduationCap, Award, ExternalLink, Download, CodeXml } from 'lucide-react';
import heroImage from "../assets/heroImage.jpg";
import naveen_resume from "../assets/naveen_resume.pdf";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = naveen_resume;
    link.download = "Naveen_Bugalia_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Image with 3D Effect */}
          <div 
            className="relative group lg:ml-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`relative transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}>
              {/* 3D Shadow Layers */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-xl opacity-40"></div>
              
              {/* Main Image Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl transform transition-transform duration-500 hover:rotate-3">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100"></div>
                <div className="absolute inset-0 flex items-center justify-center text-8xl">
                <img
                  src={heroImage}
                  alt="Profile"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                </div>
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-2 transform hover:scale-110 transition-transform">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Available</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-linear-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl px-4 py-2 transform hover:scale-110 transition-transform">
                <span className="text-white font-bold">Full Stack Dev</span>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl text-indigo-600 font-semibold animate-fade-in">
                🙏 Namaste, I'm
              </h2>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold pb-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
                Naveen Bugalia
              </h1>
              <p className="text-2xl md:text-3xl text-gray-700 font-medium">
                FullStack Developer
              </p>
            </div>

            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              I focus on building responsive, scalable, and highly performant websites using React.js. 
              My full-stack capabilities include developing robust APIs and server-side logic with Node.js 
              to tackle real-world problems through innovative and efficient solutions.
            </p>

            {/* Social Links with 3D Effect */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              {[
                { icon: Linkedin, href: 'http://www.linkedin.com/in/naveenbugalia512', color: 'from-blue-600 to-blue-400' },
                { icon: Github, href: 'https://github.com/navbug', color: 'from-gray-700 to-gray-600' },
                { icon: CodeXml, href: 'https://leetcode.com/u/naveenbugalia512/', color: 'from-indigo-500 to-purple-500' },
                { icon: Mail, href: 'mailto:naveenbugalia512@gmail.com', color: 'from-red-500 to-pink-500' },
                { icon: Phone, href: 'tel:+918278608273', color: 'from-green-500 to-emerald-500' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`relative group bg-gradient-to-r ${social.color} p-4 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}
                >
                  <social.icon className="w-6 h-6 text-white" />
                  <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <button onClick={handleResumeDownload} className="relative group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
                <span className="relative z-10 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
              
              {/* <button className="relative bg-white text-indigo-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-indigo-200 hover:border-indigo-400">
                View Projects
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;