import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Mail, Phone, Linkedin, Github, Globe, Code, Briefcase, GraduationCap, Award, ExternalLink, Download } from 'lucide-react';

const TabButton = ({ active, onClick, icon: Icon, children }) => (
  <button
    onClick={onClick}
    className={`relative group px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
      active
        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl'
        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl'
    }`}
  >
    <div className="flex items-center gap-3">
      <Icon className={`w-5 h-5 ${active ? 'animate-pulse' : ''}`} />
      <span>{children}</span>
    </div>
    {active && (
      <div className="absolute inset-0 rounded-2xl bg-white opacity-20 animate-pulse"></div>
    )}
  </button>
);

export default TabButton;