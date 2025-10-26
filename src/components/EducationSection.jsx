import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Mail, Phone, Linkedin, Github, Globe, Code, Briefcase, GraduationCap, Award, ExternalLink, Download } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Computer Application",
      institution: "Jaipur National University, Jaipur",
      grade: "70%",
      year: "2023",
      color: "from-indigo-500 to-purple-500"
    },
    {
      degree: "Senior Secondary (XII)",
      institution: "Gudha International School, Gudha Gorji",
      grade: "75%",
      year: "2019",
      color: "from-blue-500 to-cyan-500"
    },
    {
      degree: "Secondary (X)",
      institution: "Gudha International School, Gudha Gorji",
      grade: "CGPA 10",
      year: "2017",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <div
          key={index}
          className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
        >
          {/* Decorative Background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
          
          <div className="relative z-10 flex items-start gap-6">
            <div className={`p-4 bg-gradient-to-br ${edu.color} rounded-2xl shadow-lg flex-shrink-0`}>
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
              <p className="text-lg text-indigo-600 font-semibold mb-1">{edu.institution}</p>
              <div className="flex flex-wrap gap-4 text-gray-600">
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  {edu.grade}
                </span>
                <span>•</span>
                <span>Graduated {edu.year}</span>
              </div>
            </div>
          </div>
          
          {/* Decorative Element */}
          <div className={`absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br ${edu.color} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
        </div>
      ))}
    </div>
  );
};

export default EducationSection;