'use client';

import { Code } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: '5MinutesMe',
      description: 'A mobile habit and productivity app designed to help users to kickstart activities. Track habits using timers, monitor progress and achievements, maintain streaks, personalized inner voice guidance for each habit, and AI-powered summaries.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'OpenAI'],
      features: [
        'Mobile-first habit tracking and productivity features',
        'Built with AI-assisted development (Cursor IDE)',
        'Cross-platform mobile application',
        'TypeScript for type safety',
        'Expo for rapid development and deployment'
      ],
      role: 'Product Owner, Tech Lead',
      status: 'Completed',
      category: 'Mobile',
      url: 'https://play.google.com/store/apps/details?id=com.fiveminutesme.app'
    },
    {
      title: 'TwinSouls',
      description: 'An e-commerce platform for crafts, art, and personalized gifting. Features include coupon system for discounts, comprehensive dashboard for product management, and seamless shopping experience for customers.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Tailwind CSS', 'Shadcn/UI', 'Supabase', 'Vercel'],
      features: [
        'Clean, modern UI design',
        'Optimized for performance and scalability',
        'Responsive e-commerce experience',
        'Next.js for server-side rendering',
        'Tailwind CSS for rapid styling'
      ],
      role: 'Frontend Engineer, Product Builder',
      status: 'In Progress',
      category: 'E-commerce',
      url: 'https://twinsouls-web.vercel.app/'
    },
    {
      title: 'KinderCheers',
      description: 'A child development support platform for parents, featuring a full-stack web application with comprehensive admin dashboard. Built with modern web technologies and deployed on Vercel for optimal performance.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'Vercel'],
      features: [
        'Full-stack web application with admin dashboard',
        'Parent-focused child development tools',
        'Supabase for backend and database',
        'Responsive design with Tailwind CSS',
        'Production deployment on Vercel'
      ],
      role: 'Product Architect, Full-Stack Engineer',
      status: 'Completed',
      category: 'Web',
      url: 'https://kindercheers.com/'
    },
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
      role: 'Fullstack Developer at OnCare',
      status: 'Completed',
      category: 'Full-Stack'
    },
    {
      title: 'AI-Powered Face Recognition System',
      description: 'A face recognition platform for public events where guests register to receive photos automatically delivered via face recognition. Uses AWS Rekognition, Azure Face API, and FindFace API with PicMe and FotoMe mobile apps for guests and a dashboard for hosts.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'React Native', 'PHP Slim 3', 'AWS', 'Face Recognition APIs'],
      features: [
        'Real-time face detection and recognition',
        'Multi-cloud AI service integration',
        'Live video streaming capabilities',
        'Scalable cloud infrastructure on AWS',
        'Event-driven real-time updates'
      ],
      role: 'React Developer, Founding Engineer at PicMe',
      status: 'Completed',
      category: 'Event Tech'
    },
    {
      title: 'E-commerce Microservices Platform',
      description: 'A scalable e-commerce platform for flea markets and multi-vendor marketplaces, built with microservices architecture. Features product catalog, user management, payment processing, and order tracking.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Next.js', 'Node.js', 'Nest.js', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker'],
      features: [
        'Microservices-based architecture',
        'Event-driven communication with RabbitMQ',
        'Redis caching for performance optimization',
        'Comprehensive API documentation',
        'Automated testing and deployment'
      ],
      role: 'Product Architect, Full-Stack Engineer',
      status: 'In Progress',
      category: 'E-commerce'
    }
  ];

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


        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4">
          {projects.map((project, index) => {
            const CardWrapper = project.url ? 'a' : 'div';
            const wrapperProps = project.url
              ? {
                  href: project.url,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'bg-slate-900 rounded-2xl overflow-hidden hover:bg-slate-700 transition-all duration-300 group cursor-pointer block'
                }
              : {
                  className: 'bg-slate-900 rounded-2xl overflow-hidden hover:bg-slate-700 transition-all duration-300 group'
                };
            
            return (
              <CardWrapper
                key={index}
                {...wrapperProps}
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

                {/* Role */}
                {project.role && (
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-purple-300">Role: </span>
                    <span className="text-xs text-gray-300">{project.role}</span>
                  </div>
                )}

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-slate-800 text-purple-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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
            </CardWrapper>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default ProjectsSection;
