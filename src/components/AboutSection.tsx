'use client';

import { Code, Database, Cloud, Shield, Zap, Users, Award } from 'lucide-react';

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
      title: 'End-to-End Product Building',
      description: 'Build, ship, and scale complete web and mobile applications from concept to production. Expert in React.js, Next.js, React Native, and full-stack architecture.'
    },
    {
      icon: Zap,
      title: 'AI-Augmented Development',
      description: 'Use Cursor IDE and AI tools as force multipliers, guided by 11+ years of engineering experience. Review and refine AI-generated code for architecture, security, and performance.'
    },
    {
      icon: Users,
      title: 'Product & Tech Leadership',
      description: 'Act as Senior Engineer and Product & Tech Lead, making architecture decisions, reviewing code, and guiding product direction with founder-friendly approach.'
    },
    {
      icon: Shield,
      title: 'Security & Architecture',
      description: 'Focus on production-ready code with strong security practices, scalable architecture, and comprehensive code review processes.'
    },
    {
      icon: Database,
      title: 'Modern Tech Stack',
      description: 'Proficient in Next.js, React Native, Expo, Supabase, TypeScript, and cloud deployment. Build with performance and scalability in mind.'
    },
    {
      icon: Cloud,
      title: 'UX & Performance',
      description: 'Prioritize user experience, clean UI design, and application performance. Ensure products are both functional and delightful to use.'
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
          I’m a senior software engineer with a strong product mindset, building and scaling end-to-end web and mobile applications. I use AI-assisted development tools as a force multiplier, applying 11+ years of engineering experience to guide architecture, security, UX, and code quality. My focus is on delivering production-ready products that scale reliably.
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

      </div>
    </section>
  );
};

export default AboutSection;
