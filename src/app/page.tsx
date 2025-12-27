'use client';

import { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronDown
} from 'lucide-react';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Use Intersection Observer for better section detection
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is 20% from top
      threshold: 0
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    const sections = ['about', 'experience', 'skills', 'projects', 'contact'];
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              JZ
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => {
                const sectionId = item.toLowerCase().replace(/\s+/g, '-');
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`relative transition-colors duration-200 ${
                      isActive 
                        ? 'text-white font-semibold' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item}
                    {isActive && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-800 to-black-600 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/my_photo.png" 
                  alt="Jasim Zainudheen" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white">
                Jasim Zainudheen
              </h1>
              <p className="text-xl md:text-2xl text-purple-300 font-light">
                Senior Software Engineer + AI-Augmented Product Builder
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                I design, build, and ship end-to-end web and mobile products with strong engineering fundamentals and AI-augmented workflows.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+49 15904974791</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>lzjasim@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Munich, Germany</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/jasim-z"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors duration-200"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/jasimlz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105"
              >
                View My Work
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>

      {/* About Section */}
      <AboutSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
