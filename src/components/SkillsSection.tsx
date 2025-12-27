'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  GitBranch, 
  Monitor
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Monitor,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 95, color: 'bg-blue-500' },
        { name: 'Next.js', level: 90, color: 'bg-black' },
        { name: 'React Native', level: 88, color: 'bg-blue-400' },
        { name: 'Expo', level: 85, color: 'bg-gray-700' },
        { name: 'TypeScript', level: 92, color: 'bg-blue-600' },
        { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
        { name: 'Tailwind CSS', level: 88, color: 'bg-cyan-500' },
        { name: 'Jest', level: 85, color: 'bg-red-500' },
        { name: 'RTL', level: 82, color: 'bg-pink-500' },
        { name: 'Playwright', level: 85, color: 'bg-green-600' }
      ]
    },
    {
      title: 'Backend Development',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 95, color: 'bg-green-600' },
        { name: 'Nest.js', level: 90, color: 'bg-red-500' },
        { name: 'Express', level: 92, color: 'bg-gray-600' },
        { name: 'TypeORM', level: 88, color: 'bg-red-600' },
        { name: 'Sequelize', level: 85, color: 'bg-blue-500' },
        { name: 'JWT', level: 90, color: 'bg-purple-500' },
        { name: 'RBAC', level: 88, color: 'bg-indigo-500' },
        { name: 'ABAC', level: 85, color: 'bg-violet-500' }
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'PostgreSQL', level: 92, color: 'bg-blue-700' },
        { name: 'Supabase', level: 88, color: 'bg-green-500' },
        { name: 'MySQL', level: 90, color: 'bg-orange-600' },
        { name: 'MongoDB', level: 88, color: 'bg-green-600' },
        { name: 'Redis', level: 85, color: 'bg-red-500' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'AWS', level: 88, color: 'bg-orange-500' },
        { name: 'Docker', level: 90, color: 'bg-blue-600' },
        { name: 'GitHub Actions', level: 85, color: 'bg-gray-800' },
        { name: 'Vercel', level: 88, color: 'bg-black' },
        { name: 'Microservices', level: 85, color: 'bg-green-500' },
        { name: 'RabbitMQ', level: 80, color: 'bg-orange-600' },
        { name: 'Sentry', level: 82, color: 'bg-purple-600' },
        { name: 'Prometheus', level: 80, color: 'bg-red-600' },
        { name: 'Grafana', level: 82, color: 'bg-orange-500' },
        { name: 'Google Play Console', level: 85, color: 'bg-green-500' },
        { name: 'Apple Connect', level: 85, color: 'bg-gray-600' }
      ]
    },
    {
      title: 'AI-Assisted Development & Tools',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Cursor IDE', level: 92, color: 'bg-purple-500' },
        { name: 'AI-Assisted Development', level: 90, color: 'bg-purple-600' },
        { name: 'Git', level: 95, color: 'bg-orange-600' },
        { name: 'GitHub', level: 92, color: 'bg-gray-800' },
        { name: 'Copilot', level: 88, color: 'bg-gray-700' },
        { name: 'Jira', level: 88, color: 'bg-blue-600' },
        { name: 'Confluence', level: 85, color: 'bg-blue-500' }
      ]
    }
  ];

  const technologies = [
    'React.js', 'Next.js', 'React Native', 'Expo', 'Node.js', 'Nest.js', 'TypeScript', 'JavaScript',
    'PostgreSQL', 'Supabase', 'MongoDB', 'Redis', 'AWS', 'Docker', 'GitHub Actions',
    'Tailwind CSS', 'TypeORM', 'Sequelize', 'JWT', 'RBAC', 'ABAC',
    'Express', 'RabbitMQ', 'Vercel',
    'Jest', 'RTL', 'Playwright', 'Webpack', 'Sentry',
    'Prometheus', 'Grafana', 'Google Play Console', 'Apple Connect',
    'AI-Assisted Development', 'Cursor IDE'
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12 mb-16 px-4">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800 p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${skill.color} group-hover:shadow-lg transition-all duration-300`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default SkillsSection;
