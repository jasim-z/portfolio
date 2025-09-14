'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Cloud, Shield, Users, Zap } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Healthcare Management Platform',
      description: 'A comprehensive healthcare management system built with microservices architecture, featuring real-time patient monitoring, appointment scheduling, and secure data management.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Next.js', 'Node.js', 'Nest.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
      features: [
        'Real-time patient monitoring dashboard',
        'JWT-based authentication with RBAC/ABAC',
        'Event-driven microservices architecture',
        'Comprehensive testing with Jest and RTL',
        'Docker containerization and CI/CD pipeline'
      ],
      github: 'https://github.com/jasimlz/healthcare-platform',
      live: 'https://healthcare-platform-demo.vercel.app',
      status: 'Completed',
      category: 'Full-Stack'
    },
    {
      title: 'AI-Powered Face Recognition System',
      description: 'Advanced face recognition application integrating multiple AI services including AWS Rekognition, Azure Face API, and custom machine learning models for real-time identification.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Node.js', 'AWS Rekognition', 'Azure Face API', 'MongoDB', 'Express', 'WebRTC'],
      features: [
        'Real-time face detection and recognition',
        'Multi-cloud AI service integration',
        'Live video streaming capabilities',
        'Scalable cloud infrastructure on AWS',
        'Event-driven real-time updates'
      ],
      github: 'https://github.com/jasimlz/face-recognition-app',
      live: 'https://face-recognition-demo.vercel.app',
      status: 'Completed',
      category: 'AI/ML'
    },
    {
      title: 'E-commerce Microservices Platform',
      description: 'A scalable e-commerce platform built with microservices architecture, featuring product catalog, user management, payment processing, and order tracking.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Next.js', 'Node.js', 'Nest.js', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker'],
      features: [
        'Microservices-based architecture',
        'Event-driven communication with RabbitMQ',
        'Redis caching for performance optimization',
        'Comprehensive API documentation',
        'Automated testing and deployment'
      ],
      github: 'https://github.com/jasimlz/ecommerce-microservices',
      live: 'https://ecommerce-demo.vercel.app',
      status: 'In Progress',
      category: 'E-commerce'
    },
    {
      title: 'Developer Portfolio Website',
      description: 'Modern, responsive portfolio website showcasing skills, projects, and experience with smooth animations and interactive elements.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      features: [
        'Responsive design for all devices',
        'Smooth animations and transitions',
        'Dark theme with gradient accents',
        'SEO optimized with Next.js',
        'Fast loading with optimized images'
      ],
      github: 'https://github.com/jasimlz/portfolio',
      live: 'https://jasim-portfolio.vercel.app',
      status: 'Completed',
      category: 'Portfolio'
    },
    {
      title: 'Real-time Chat Application',
      description: 'A real-time messaging application with group chat, file sharing, and video calling capabilities built with modern web technologies.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'WebRTC', 'JWT'],
      features: [
        'Real-time messaging with Socket.io',
        'Group chat and private messaging',
        'File sharing and media support',
        'Video calling with WebRTC',
        'Message encryption and security'
      ],
      github: 'https://github.com/jasimlz/chat-app',
      live: 'https://chat-app-demo.vercel.app',
      status: 'Completed',
      category: 'Real-time'
    },
    {
      title: 'Task Management Dashboard',
      description: 'A comprehensive task management system with project tracking, team collaboration, and analytics dashboard for productivity insights.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
      features: [
        'Project and task management',
        'Team collaboration tools',
        'Analytics and reporting dashboard',
        'Drag-and-drop task organization',
        'Real-time updates and notifications'
      ],
      github: 'https://github.com/jasimlz/task-manager',
      live: 'https://task-manager-demo.vercel.app',
      status: 'Completed',
      category: 'Productivity'
    }
  ];

  const categories = ['All', 'Full-Stack', 'AI/ML', 'E-commerce', 'Portfolio', 'Real-time', 'Productivity'];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and side projects, demonstrating my skills and passion for development
          </p>
        </div>

        {/* Project Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full bg-slate-700 text-gray-300 hover:bg-purple-500 hover:text-white transition-all duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden hover:bg-slate-700 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-pink-500 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Code className="w-12 h-12 text-white mx-auto mb-2" />
                    <span className="text-white font-semibold">{project.category}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-yellow-500 text-black'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-800 text-purple-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-slate-800 text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons - Hidden for now */}
                {/* <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 text-gray-300 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in Working Together?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and collaborate with amazing people. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105">
              <Zap className="w-5 h-5" />
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
