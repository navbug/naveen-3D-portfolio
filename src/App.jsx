import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Mail, Phone, Linkedin, Github, Globe, Code, Briefcase, GraduationCap, Award, ExternalLink, Download } from 'lucide-react';
import ThreeBackground from './components/ThreeBackground';
import HeroSection from './components/HeroSection';
import TabButton from './components/TabButton';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import Navigation from './components/Navigation';


// 3D Background Component
// const ThreeBackground = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0xf0f4f8);

//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 5;

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(window.devicePixelRatio);
//     mountRef.current.appendChild(renderer.domElement);

//     // Particles
//     const particlesGeometry = new THREE.BufferGeometry();
//     const particlesCount = 800;
//     const posArray = new Float32Array(particlesCount * 3);

//     for (let i = 0; i < particlesCount * 3; i++) {
//       posArray[i] = (Math.random() - 0.5) * 12;
//     }

//     particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
//     const particlesMaterial = new THREE.PointsMaterial({
//       size: 0.025,
//       color: 0x6366f1,
//       transparent: true,
//       opacity: 0.6
//     });

//     const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
//     scene.add(particlesMesh);

//     // Floating geometric shapes
//     const shapes = [];
    
//     // Torus
//     for (let i = 0; i < 5; i++) {
//       const torusGeometry = new THREE.TorusGeometry(0.3, 0.1, 16, 100);
//       const torusMaterial = new THREE.MeshPhongMaterial({
//         color: 0x8b5cf6,
//         transparent: true,
//         opacity: 0.3,
//         wireframe: true
//       });
//       const torus = new THREE.Mesh(torusGeometry, torusMaterial);
//       torus.position.set(
//         (Math.random() - 0.5) * 10,
//         (Math.random() - 0.5) * 10,
//         (Math.random() - 0.5) * 5
//       );
//       scene.add(torus);
//       shapes.push(torus);
//     }

//     // Spheres
//     for (let i = 0; i < 5; i++) {
//       const sphereGeometry = new THREE.SphereGeometry(0.2, 32, 32);
//       const sphereMaterial = new THREE.MeshPhongMaterial({
//         color: 0x6366f1,
//         transparent: true,
//         opacity: 0.4,
//         wireframe: true
//       });
//       const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
//       sphere.position.set(
//         (Math.random() - 0.5) * 10,
//         (Math.random() - 0.5) * 10,
//         (Math.random() - 0.5) * 5
//       );
//       scene.add(sphere);
//       shapes.push(sphere);
//     }

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
//     scene.add(ambientLight);

//     const pointLight1 = new THREE.PointLight(0x6366f1, 1);
//     pointLight1.position.set(5, 5, 5);
//     scene.add(pointLight1);

//     const pointLight2 = new THREE.PointLight(0x8b5cf6, 0.8);
//     pointLight2.position.set(-5, -5, -5);
//     scene.add(pointLight2);

//     let mouseX = 0;
//     let mouseY = 0;

//     const handleMouseMove = (event) => {
//       mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//       mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     const animate = () => {
//       requestAnimationFrame(animate);

//       particlesMesh.rotation.y += 0.001;
//       particlesMesh.rotation.x += 0.0005;

//       shapes.forEach((shape, index) => {
//         shape.rotation.x += 0.005;
//         shape.rotation.y += 0.005;
//         shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.002;
//       });

//       camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.05;
//       camera.position.y += (mouseY * 0.3 - camera.position.y) * 0.05;
//       camera.lookAt(scene.position);

//       renderer.render(scene, camera);
//     };

//     animate();

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', handleResize);
//       if (mountRef.current && renderer.domElement) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       renderer.dispose();
//     };
//   }, []);

//   return <div ref={mountRef} className="fixed inset-0 -z-10" />;
// };

// // Hero Section Component
// const HeroSection = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-10">
//       <div className="max-w-7xl mx-auto w-full">
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
//           {/* Hero Image with 3D Effect */}
//           <div 
//             className="relative group"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <div className={`relative transition-all duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}>
//               {/* 3D Shadow Layers */}
//               <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
//               <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-xl opacity-40"></div>
              
//               {/* Main Image Container */}
//               <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl transform transition-transform duration-500 hover:rotate-3">
//                 <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100"></div>
//                 <div className="absolute inset-0 flex items-center justify-center text-8xl">
//                   👨‍💻
//                 </div>
//               </div>
              
//               {/* Floating Badges */}
//               <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-2 transform hover:scale-110 transition-transform">
//                 <div className="flex items-center gap-2">
//                   <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
//                   <span className="text-sm font-semibold text-gray-700">Available</span>
//                 </div>
//               </div>
              
//               <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl px-4 py-2 transform hover:scale-110 transition-transform">
//                 <span className="text-white font-bold">Full Stack Dev</span>
//               </div>
//             </div>
//           </div>

//           {/* Hero Content */}
//           <div className="flex-1 text-center lg:text-left space-y-6">
//             <div className="space-y-4">
//               <h2 className="text-xl md:text-2xl text-indigo-600 font-semibold animate-fade-in">
//                 🙏 Namaste, I'm
//               </h2>
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
//                 Naveen Bugalia
//               </h1>
//               <p className="text-2xl md:text-3xl text-gray-700 font-medium">
//                 Backend Developer
//               </p>
//             </div>

//             <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
//               I focus on building responsive, scalable, and highly performant websites using React.js. 
//               My full-stack capabilities include developing robust APIs and server-side logic with Node.js 
//               to tackle real-world problems through innovative and efficient solutions.
//             </p>

//             {/* Social Links with 3D Effect */}
//             <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
//               {[
//                 { icon: Mail, href: 'mailto:naveenbugalia512@gmail.com', color: 'from-red-500 to-pink-500' },
//                 { icon: Phone, href: 'tel:+918278608273', color: 'from-green-500 to-emerald-500' },
//                 { icon: Linkedin, href: '#', color: 'from-blue-600 to-blue-400' },
//                 { icon: Github, href: '#', color: 'from-gray-700 to-gray-600' },
//                 { icon: Globe, href: '#', color: 'from-indigo-500 to-purple-500' }
//               ].map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.href}
//                   className={`relative group bg-gradient-to-r ${social.color} p-4 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}
//                 >
//                   <social.icon className="w-6 h-6 text-white" />
//                   <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
//                 </a>
//               ))}
//             </div>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
//               <button className="relative group bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
//                 <span className="relative z-10 flex items-center gap-2">
//                   <Download className="w-5 h-5" />
//                   Download Resume
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
//               </button>
              
//               <button className="relative bg-white text-indigo-600 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-indigo-200 hover:border-indigo-400">
//                 View Projects
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Tab Button Component
// const TabButton = ({ active, onClick, icon: Icon, children }) => (
//   <button
//     onClick={onClick}
//     className={`relative group px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-1 ${
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

// // Projects Section Component
// const ProjectsSection = () => {
//   const projects = [
//     {
//       title: "Privyr Clone",
//       description: "Full-stack CRM web application clone featuring client management, follow-up scheduling, activity tracking, and team dashboard for comprehensive leads management",
//       tech: ["React JS", "Node.js", "MongoDB", "Cloudinary"],
//       features: [
//         "Cloudinary API integration for cloud-based asset management",
//         "Advanced search functionality with breadcrumb navigation",
//         "Messaging system with customizable content templates",
//         "CSV import/export for bulk data operations",
//         "Google Sign-In authentication"
//       ],
//       links: [{ label: "Live", url: "#" }],
//       gradient: "from-blue-500 to-cyan-500"
//     },
//     {
//       title: "Shop Kar",
//       description: "Full-stack e-commerce platform with Redux Toolkit state management, featuring comprehensive admin dashboard and advanced product management",
//       tech: ["React JS", "Redux Toolkit", "Node.js", "MongoDB", "Tailwind"],
//       features: [
//         "Responsive UI with ShimmerUI loading patterns",
//         "Advanced product filtering and sorting",
//         "React code-splitting and lazy loading optimization",
//         "Secure RESTful APIs with JWT authentication",
//         "Formik and Yup integration for form validation"
//       ],
//       links: [{ label: "Live", url: "#" }, { label: "Code", url: "#" }],
//       gradient: "from-purple-500 to-pink-500"
//     }
//   ];

//   const practiceProjects = [
//     { title: "Conway's Game of Life", url: "#" },
//     { title: "Tower of Hanoi", url: "#" }
//   ];

//   return (
//     <div className="space-y-8">
//       {/* Main Projects */}
//       <div className="space-y-6">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
//           >
//             {/* 3D Background Effect */}
//             <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            
//             <div className="relative z-10">
//               <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
//                 <div>
//                   <h3 className="text-3xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed">{project.description}</p>
//                 </div>
                
//                 {/* Tech Stack Badges */}
//                 <div className="flex flex-wrap gap-2">
//                   {project.tech.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Features List */}
//               <div className="mb-6">
//                 <h4 className="text-lg font-semibold text-gray-700 mb-3">Key Features:</h4>
//                 <ul className="space-y-2">
//                   {project.features.map((feature, i) => (
//                     <li key={i} className="flex items-start gap-3 text-gray-600">
//                       <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></span>
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex gap-4">
//                 {project.links.map((link, i) => (
//                   <a
//                     key={i}
//                     href={link.url}
//                     className="group/btn relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
//                   >
//                     <span className="relative z-10 flex items-center gap-2">
//                       {link.label}
//                       <ExternalLink className="w-4 h-4" />
//                     </span>
//                     <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Decorative Element */}
//             <div className={`absolute -right-20 -bottom-20 w-40 h-40 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
//           </div>
//         ))}
//       </div>

//       {/* Practice Projects */}
//       <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-xl">
//         <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
//           <Code className="text-indigo-600" />
//           Practice Projects
//         </h3>
//         <div className="flex flex-wrap gap-4">
//           {practiceProjects.map((project, index) => (
//             <a
//               key={index}
//               href={project.url}
//               className="group relative bg-white px-6 py-4 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-2 border-gray-200 hover:border-indigo-400"
//             >
//               <span className="flex items-center gap-2 text-gray-700 font-semibold group-hover:text-indigo-600">
//                 {project.title}
//                 <ExternalLink className="w-4 h-4" />
//               </span>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Experience Section Component
// const ExperienceSection = () => {
//   return (
//     <div className="space-y-6">
//       <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group">
//         {/* 3D Background Effect */}
//         <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
        
//         {/* Decorative Corner */}
//         <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-10 rounded-bl-full"></div>
        
//         <div className="relative z-10">
//           <div className="flex items-start gap-4 mb-6">
//             <div className="p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl shadow-lg">
//               <Briefcase className="w-8 h-8 text-white" />
//             </div>
//             <div className="flex-1">
//               <h3 className="text-3xl font-bold text-gray-800 mb-2">FullStack Developer</h3>
//               <p className="text-xl text-indigo-600 font-semibold">Groot Software</p>
//               <p className="text-gray-500 font-medium">Sept 2024 - Present</p>
//             </div>
//           </div>

//           <div className="space-y-4">
//             {[
//               "Improved applications performance by ~35% through implementation of modular reusable components, lazy loading strategies, and React memoization techniques",
//               "Streamlined development workflow by creating custom React hooks and config-driven form systems, reducing form development time by 50%",
//               "Enhanced application security with JWT tokens, OAuth 2.0 integration, and role-based access control",
//               "Delivered feature-rich admin dashboard with real-time updates and data filtering/sorting functionalities",
//               "Developed RESTful APIs with proper error handling and input validation; enhanced UX with responsive TailwindCSS designs"
//             ].map((achievement, index) => (
//               <div key={index} className="flex items-start gap-4 group/item">
//                 <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
//                 <p className="text-gray-700 leading-relaxed group-hover/item:text-gray-900 transition-colors">
//                   {achievement}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Skills Section Component
// const SkillsSection = () => {
//   const skills = {
//     "Frontend": {
//       items: ["React.js", "Next.js", "Redux Toolkit", "HTML/CSS", "TailwindCSS"],
//       color: "from-blue-500 to-cyan-500"
//     },
//     "Backend": {
//       items: ["Node.js", "Express.js", "MongoDB"],
//       color: "from-green-500 to-emerald-500"
//     },
//     "Others": {
//       items: ["Data Structures & Algorithms", "Git", "Github", "Generative AI"],
//       color: "from-purple-500 to-pink-500"
//     }
//   };

//   return (
//     <div className="space-y-8">
//       {Object.entries(skills).map(([category, { items, color }], index) => (
//         <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
//           <h3 className={`text-2xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-6 flex items-center gap-3`}>
//             <div className={`w-2 h-8 bg-gradient-to-b ${color} rounded-full`}></div>
//             {category}
//           </h3>
//           <div className="flex flex-wrap gap-4">
//             {items.map((skill, i) => (
//               <div
//                 key={i}
//                 className={`group relative bg-gradient-to-r ${color} bg-opacity-10 px-6 py-3 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
//               >
//                 <span className="relative z-10 text-gray-800 font-semibold">{skill}</span>
//                 <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// // Education Section Component
// const EducationSection = () => {
//   const education = [
//     {
//       degree: "Bachelor of Computer Application",
//       institution: "Jaipur National University, Jaipur",
//       grade: "70%",
//       year: "2023",
//       color: "from-indigo-500 to-purple-500"
//     },
//     {
//       degree: "Senior Secondary (XII)",
//       institution: "Gudha International School, Gudha Gorji",
//       grade: "75%",
//       year: "2019",
//       color: "from-blue-500 to-cyan-500"
//     },
//     {
//       degree: "Secondary (X)",
//       institution: "Gudha International School, Gudha Gorji",
//       grade: "CGPA 10",
//       year: "2017",
//       color: "from-green-500 to-emerald-500"
//     }
//   ];

//   return (
//     <div className="space-y-6">
//       {education.map((edu, index) => (
//         <div
//           key={index}
//           className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
//         >
//           {/* Decorative Background */}
//           <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
          
//           <div className="relative z-10 flex items-start gap-6">
//             <div className={`p-4 bg-gradient-to-br ${edu.color} rounded-2xl shadow-lg flex-shrink-0`}>
//               <GraduationCap className="w-8 h-8 text-white" />
//             </div>
            
//             <div className="flex-1">
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
//               <p className="text-lg text-indigo-600 font-semibold mb-1">{edu.institution}</p>
//               <div className="flex flex-wrap gap-4 text-gray-600">
//                 <span className="flex items-center gap-2">
//                   <Award className="w-4 h-4" />
//                   {edu.grade}
//                 </span>
//                 <span>•</span>
//                 <span>Graduated {edu.year}</span>
//               </div>
//             </div>
//           </div>
          
//           {/* Decorative Element */}
//           <div className={`absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br ${edu.color} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity`}></div>
//         </div>
//       ))}
//     </div>
//   );
// };

// Main Portfolio Component
const App = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const tabs = [
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'education', label: 'Education', icon: GraduationCap }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'projects':
        return <ProjectsSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'skills':
        return <SkillsSection />;
      case 'education':
        return <EducationSection />;
      default:
        return <ProjectsSection />;
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* 3D Background */}
      <ThreeBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Tabs Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                icon={tab.icon}
              >
                {tab.label}
              </TabButton>
            ))}
          </div>

          {/* Tab Content */}
          <div className="animate-fade-in">
            {renderTabContent()}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">Let's Connect!</h3>
            <div className="flex justify-center gap-6 mb-8">
              <a
                href="mailto:naveenbugalia512@gmail.com"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-lg p-4 rounded-2xl transform hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+918278608273"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-lg p-4 rounded-2xl transform hover:scale-110 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-lg p-4 rounded-2xl transform hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-lg p-4 rounded-2xl transform hover:scale-110 transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm opacity-75">
              © 2025 Naveen Kumar Bugalia. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
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
    </div>
  );
};

export default App;