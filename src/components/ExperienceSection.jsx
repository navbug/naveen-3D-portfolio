import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Mail, Phone, Linkedin, Github, Globe, Code, Briefcase, GraduationCap, Award, ExternalLink, Download } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <div className="space-y-6">
      <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group">
        {/* 3D Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
        
        {/* Decorative Corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-10 rounded-bl-full"></div>
        
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl shadow-lg">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">FullStack Developer</h3>
              <p className="text-xl text-indigo-600 font-semibold">Groot Software</p>
              <p className="text-gray-500 font-medium">Sept 2024 - Present</p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              "Improved applications performance by ~35% through implementation of modular reusable components, lazy loading strategies, and React memoization techniques",
              "Streamlined development workflow by creating custom React hooks and config-driven form systems, reducing form development time by 50%",
              "Enhanced application security with JWT tokens, OAuth 2.0 integration, and role-based access control",
              "Delivered feature-rich admin dashboard with real-time updates and data filtering/sorting functionalities",
              "Developed RESTful APIs with proper error handling and input validation; enhanced UX with responsive TailwindCSS designs"
            ].map((achievement, index) => (
              <div key={index} className="flex items-start gap-4 group/item">
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                <p className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;