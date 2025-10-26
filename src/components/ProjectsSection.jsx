import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Mail, Phone, Linkedin, Github, Globe, Code, Briefcase, GraduationCap, Award, ExternalLink, Download } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Shop Kar",
      description: "Full-stack e-commerce platform with Redux Toolkit state management, featuring comprehensive admin dashboard and full authentication flow",
      tech: ["React JS", "Redux Toolkit", "Node.js", "MongoDB", "Tailwind"],
      features: [
        "Responsive UI with ShimmerUI loading patterns",
        "Advanced product filtering and sorting",
        "React code-splitting and lazy loading optimization",
        "Secure RESTful APIs with JWT authentication",
        "Formik and Yup integration for form validation"
      ],
      links: [{ label: "Live", url: "https://e-commerce-mern-frontend-mu.vercel.app/" }, { label: "Code", url: "https://github.com/navbug/e-commerce-mern-frontend" }],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Privyr Clone",
      description: "Full-stack CRM web application clone featuring client management, follow-up scheduling, activity tracking, and team dashboard for comprehensive leads management",
      tech: ["React JS", "Node.js", "MongoDB", "Cloudinary"],
      features: [
        "Cloudinary API integration for cloud-based asset management",
        "Advanced search functionality with breadcrumb navigation",
        "Messaging system with customizable content templates",
        "CSV import/export for bulk data operations",
        "Google Sign-In authentication"
      ],
      links: [{ label: "Live", url: "https://the-crm-app.vercel.app/" }, { label: "Code", url: "https://github.com/navbug/The-CRM-App" }],
      gradient: "from-blue-500 to-cyan-500"
    },
  ];

  const practiceProjects = [
    { title: "Conway's Game of Life", url: "https://conway-game-of-life01.vercel.app/" },
    { title: "Tower of Hanoi", url: "https://mini-projects01.vercel.app/" }
  ];

  return (
    <div className="space-y-8">
      {/* Main Projects */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
          >
            {/* 3D Background Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
                
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features List */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target='_blank'
                    className="group/btn relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {link.label}
                      <ExternalLink className="w-4 h-4" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative Element */}
            <div className={`absolute -right-20 -bottom-20 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
          </div>
        ))}
      </div>

      {/* Practice Projects */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-xl">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Code className="text-indigo-600" />
          Practice Projects
        </h3>
        <div className="flex flex-wrap gap-4">
          {practiceProjects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target='_blank'
              className="group relative bg-white px-6 py-4 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-gray-200 hover:border-indigo-400"
            >
              <span className="flex items-center gap-2 text-gray-700 font-semibold group-hover:text-indigo-600">
                {project.title}
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;