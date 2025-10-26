// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { Mail, Phone, Linkedin, Github, Globe, Code, Briefcase, GraduationCap, Award, ExternalLink, Download } from 'lucide-react';

// const TabButton = ({ active, onClick, icon: Icon, children }) => (
//   <button
//     onClick={onClick}
//     className={`relative group px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
//       active
//         ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl'
//         : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl'
//     }`}
//   >
//     <div className="flex items-center gap-3">
//       <Icon className={`w-5 h-5 ${active ? 'animate-pulse' : ''}`} />
//       <span>{children}</span>
//     </div>
//     {active && (
//       <div className="absolute inset-0 rounded-2xl bg-white opacity-20 animate-pulse"></div>
//     )}
//   </button>
// );

// export default TabButton;


import React, { useState } from 'react';

const TabButton = ({ active, onClick, icon: Icon, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const getTransform = () => {
    if (!isHovered) return 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    const rotateY = (mousePosition.x - 0.5) * 15;
    const rotateX = -(mousePosition.y - 0.5) * 15;
    return `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative group cursor-pointer"
      style={{
        transform: getTransform(),
        transition: 'transform 0.3s ease-out',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Glow Effect Background */}
      <div className={`absolute -inset-1 rounded-2xl blur-lg transition-all duration-500 ${
        active 
          ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-60 group-hover:opacity-80' 
          : 'bg-gradient-to-r from-gray-300 to-gray-400 opacity-0 group-hover:opacity-30'
      }`}></div>

      {/* Main Button Container */}
      <div className={`relative px-6 py-4 rounded-2xl font-semibold transition-all duration-300 overflow-hidden ${
        active
          ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-2xl'
          : 'bg-white text-gray-700 shadow-lg group-hover:shadow-2xl'
      }`}>
        
        {/* Animated Background Layers */}
        {active && (
          <>
            {/* Pulsing Overlay */}
            <div className="absolute inset-0 bg-white opacity-20 animate-pulse-soft"></div>
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Radial Gradient from Mouse */}
            <div 
              className="absolute inset-0 opacity-30 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(255,255,255,0.4) 0%, transparent 50%)`
              }}
            ></div>
          </>
        )}

        {/* Non-active Hover Effect */}
        {!active && (
          <>
            {/* Gradient Hover Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Shimmer on Hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-200/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </>
        )}

        {/* Content */}
        <div className="relative z-10 flex items-center gap-3">
          {/* Icon Container with 3D Effect */}
          <div className={`relative transition-all duration-300 ${
            active ? 'animate-pulse-icon' : 'group-hover:scale-110'
          }`}>
            {/* Icon Glow */}
            <div className={`absolute inset-0 blur-md rounded-full transition-opacity duration-300 ${
              active 
                ? 'bg-white opacity-40' 
                : 'bg-indigo-500 opacity-0 group-hover:opacity-30'
            }`}></div>
            
            <Icon className={`w-5 h-5 relative z-10 transition-all duration-300 ${
              active 
                ? 'drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' 
                : 'group-hover:text-indigo-600 group-hover:drop-shadow-[0_0_6px_rgba(99,102,241,0.6)]'
            }`} />
          </div>

          {/* Text */}
          <span className={`font-semibold transition-all duration-300 ${
            active 
              ? 'drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' 
              : 'group-hover:text-indigo-700'
          }`}>
            {children}
          </span>

          {/* Active Indicator Dot */}
          {active && (
            <div className="absolute -top-1 -right-1">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-sm animate-ping"></div>
                <div className="relative w-3 h-3 bg-yellow-400 rounded-full shadow-lg"></div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Border Highlight */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-full transition-all duration-500 ${
          active 
            ? 'bg-gradient-to-r from-yellow-400 via-pink-400 to-yellow-400 bg-[length:200%_100%] animate-gradient-x' 
            : 'bg-gradient-to-r from-indigo-500 to-purple-500 scale-x-0 group-hover:scale-x-100'
        }`}></div>

        {/* 3D Edge Effect */}
        <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${
          active 
            ? 'border-white/20' 
            : 'border-transparent group-hover:border-indigo-200'
        }`}></div>

        {/* Floating Particles (Active State) */}
        {active && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-float-particle"
                style={{
                  left: `${20 + i * 15}%`,
                  bottom: '10%',
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${2 + Math.random()}s`
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* 3D Shadow Effect */}
      <div 
        className={`absolute inset-0 rounded-2xl transition-all duration-300 -z-10 ${
          active 
            ? 'bg-gradient-to-br from-indigo-900/40 to-purple-900/40 translate-y-2 blur-md' 
            : 'bg-gray-400/30 translate-y-1 blur-sm group-hover:translate-y-2 group-hover:blur-md'
        }`}
        style={{
          transform: `translateZ(-10px) ${active ? 'scale(0.95)' : 'scale(0.98)'}`,
        }}
      ></div>

      <style jsx>{`
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }

        @keyframes pulse-icon {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float-particle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 0.6; }
          100% { transform: translateY(-30px) translateX(10px); opacity: 0; }
        }

        .animate-pulse-soft {
          animation: pulse-soft 2s ease-in-out infinite;
        }

        .animate-pulse-icon {
          animation: pulse-icon 1.5s ease-in-out infinite;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-float-particle {
          animation: float-particle 2s ease-in-out infinite;
        }

        .bg-\\[length\\:200\\%_100\\%\\] {
          background-size: 200% 100%;
        }
      `}</style>
    </button>
  );
};

export default TabButton;