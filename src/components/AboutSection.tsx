'use client';

import { Code, Database, Cloud, Shield, Zap, Users, Award, Coffee } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: '11+', label: 'Years Experience', icon: Award },
    { number: '50+', label: 'Projects Completed', icon: Code },
    { number: '15+', label: 'Technologies', icon: Database },
    { number: '100%', label: 'Client Satisfaction', icon: Users },
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expert in React.js, Next.js, Node.js, and NestJS for building scalable web applications.'
    },
    {
      icon: Database,
      title: 'Database Expertise',
      description: 'Proficient in both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) database design and optimization.'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Experienced in AWS, Docker, CI/CD pipelines, and microservices architecture deployment.'
    },
    {
      icon: Shield,
      title: 'Security & Testing',
      description: 'Implementing security best practices, JWT authentication, RBAC, and comprehensive testing strategies.'
    },
    {
      icon: Zap,
      title: 'AI-Enhanced Development',
      description: 'Leveraging GitHub Copilot and Cursor IDE to accelerate development and improve code quality.'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Led teams of 4+ developers, mentored junior developers, and managed complex project deliveries.'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions that make a difference. 
            I combine technical expertise with creative problem-solving to deliver exceptional results.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 px-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-xl hover:bg-slate-700 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{highlight.title}</h3>
              <p className="text-gray-300 leading-relaxed text-sm">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Personal Touch */}
        <div className="mt-24 text-center px-4">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl max-w-4xl mx-auto">
            <Coffee className="w-12 h-12 text-purple-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-6">
              Beyond <span className="gradient-text">Code</span>
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, 
              or enjoying a good cup of coffee while planning the next big innovation. I believe in continuous learning 
              and staying updated with the latest trends in software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
