import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Mail, Phone, Linkedin, Github, Globe, Code, Briefcase, GraduationCap, Award, ExternalLink, Download } from 'lucide-react';

const SkillsSection = () => {
  const skills = {
    "Frontend": {
      items: ["React.js", "Next.js", "Redux Toolkit", "HTML/CSS", "TailwindCSS"],
      color: "from-blue-500 to-cyan-500"
    },
    "Backend": {
      items: ["Node.js", "Express.js", "MongoDB"],
      color: "from-green-500 to-emerald-500"
    },
    "Others": {
      items: ["Data Structures & Algorithms", "Git", "Github", "Generative AI"],
      color: "from-purple-500 to-pink-500"
    }
  };

  return (
    <div className="space-y-8">
      {Object.entries(skills).map(([category, { items, color }], index) => (
        <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
          <h3 className={`text-2xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-6 flex items-center gap-3`}>
            <div className={`w-2 h-8 bg-gradient-to-b ${color} rounded-full`}></div>
            {category}
          </h3>
          <div className="flex flex-wrap gap-4">
            {items.map((skill, i) => (
              <div
                key={i}
                className={`group relative bg-gradient-to-r ${color} bg-opacity-10 px-6 py-3 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                <span className="relative z-10 text-gray-800 font-semibold">{skill}</span>
                <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;