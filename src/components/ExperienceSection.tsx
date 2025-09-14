'use client';

import { Calendar, MapPin, Code, Database, Cloud, Shield, Users } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Freelance Full-Stack Engineer',
      company: 'Self-Employed',
      location: 'Munich, Germany',
      period: 'NOV 2024 - PRESENT',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      responsibilities: [
        'Build and deploy scalable web apps using React.js, Next.js, Node.js, Nest.js, and AWS',
        'Manage state management with Redux, Zustand and React Context',
        'Optimize database schemas and queries for Postgres (TypeORM)',
        'Utilize GitHub Copilot and Cursor IDE to accelerate development and enhance productivity'
      ],
      technologies: ['React.js', 'Next.js', 'Node.js', 'Nest.js', 'AWS', 'TypeORM', 'Redux', 'Zustand']
    },
    {
      title: 'Full-Stack Developer',
      company: 'OnCare GmbH',
      location: 'Munich, Germany',
      period: 'MAY 2021 - OCT 2024',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      responsibilities: [
        'Implemented scalable Node.js application using event-driven architecture within a monorepo-based microservices setup in Nest.js',
        'Integrated JWT-based authentication and implemented RBAC and ABAC for authorization',
        'Designed and optimized UI features using React.js and TypeScript',
        'Designed, implemented, and maintained data models for SQL (using Sequelize ORM) and NoSQL databases',
        'Implemented security best practices to prevent XSS, CSRF, and SQL injection',
        'Wrote and maintained unit and integration tests using Jest and React Testing Library',
        'Containerized applications using Docker and automated deployment pipelines with GitHub Actions CI/CD'
      ],
      technologies: ['Node.js', 'Nest.js', 'React.js', 'TypeScript', 'JWT', 'RBAC', 'ABAC', 'Sequelize', 'Docker', 'GitHub Actions']
    },
    {
      title: 'React Developer',
      company: 'PicMe Inc',
      location: 'India',
      period: 'MAY 2017 - APR 2021',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      responsibilities: [
        'Led a team of 4 developers to build a React.js web application',
        'Integrated AWS Rekognition, FindFace, and Azure Face APIs',
        'Designed and maintained scalable cloud infrastructure using AWS',
        'Deployed and showcased the app at events with real-time participants'
      ],
      technologies: ['React.js', 'AWS', 'AWS Rekognition', 'Azure Face API', 'Cloud Infrastructure']
    },
    {
      title: 'Web Developer',
      company: 'QPI Square Pvt Ltd',
      location: 'India',
      period: 'AUG 2013 - APR 2017',
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      responsibilities: [
        'Designed and developed web applications using PHP in MVC pattern'
      ],
      technologies: ['PHP', 'MVC', 'MySQL', 'JavaScript', 'HTML', 'CSS']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey of continuous growth and innovation across different roles and technologies
          </p>
        </div>

        <div className="relative px-4">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full z-10"></div>

                {/* Content card */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-slate-900 p-6 rounded-xl hover:bg-slate-700 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color}`}>
                          <exp.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-purple-400 font-semibold">{exp.company}</p>
                        </div>
                      </div>
                    </div>

                    {/* Location and Period */}
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-slate-800 text-purple-300 text-xs rounded-full hover:bg-purple-500 hover:text-white transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
                <p className="text-gray-400">Academic Foundation</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Bachelor of Technology in Information Technology</h4>
                <p className="text-purple-400 font-semibold mb-1">University of Calicut</p>
                <p className="text-gray-400">2008 - 2012</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Languages</h4>
                <p className="text-gray-400">English (Fluent)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
