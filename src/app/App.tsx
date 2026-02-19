import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ForecastConfiguration from './components/ForecastConfiguration';

// Project data
const projects = [
  {
    id: 1,
    title: 'Forecast Configuration',
    company: 'Clari',
    year: '2023',
    category: 'Enterprise SaaS',
    description: '0→1 design of a self-service configuration product that reduced support reliance by 70%',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tags: ['Product Design', 'Enterprise UX', '0→1 Product']
  },
  {
    id: 2,
    title: 'Inspect UX Audit',
    company: 'Clari',
    year: '2022',
    category: 'Enterprise SaaS',
    description: 'Comprehensive UX audit that increased adoption by 40% across core inspection surfaces',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tags: ['UX Audit', 'Data Visualization', 'Systems Design']
  },
  {
    id: 3,
    title: 'AI-Powered Risk Prediction',
    company: 'Clari',
    year: '2024',
    category: 'AI/ML',
    description: 'Designed AI agent interfaces that proactively predict deal and account risks',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tags: ['AI Design', 'Predictive Analytics', 'Enterprise']
  },
  {
    id: 4,
    title: 'Multi-Client Design Projects',
    company: 'Kritii Design',
    year: '2021',
    category: 'Agency',
    description: 'Led UX initiatives for DoorDash, Roku, and CoPilot across distributed teams',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&h=600&fit=crop',
    tags: ['Agency Work', 'Multi-platform', 'Client Management']
  },
  {
    id: 5,
    title: 'Fleet Management Platform',
    company: 'TruckX',
    year: '2020',
    category: 'Mobile + Web',
    description: 'Designed compliance-driven experiences for electronic logging transition',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    tags: ['Mobile Design', 'Compliance', 'B2B']
  },
  {
    id: 6,
    title: 'Design System Evolution',
    company: 'Clari',
    year: '2021-Present',
    category: 'Design Systems',
    description: 'Built and maintained scalable design system components for complex SaaS platform',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop',
    tags: ['Design Systems', 'Component Library', 'Scalability']
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState('home');

  const categories = ['All', 'Enterprise SaaS', 'AI/ML', 'Agency', 'Mobile + Web', 'Design Systems'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  // If viewing project detail
  if (currentPage === 'forecast-configuration') {
    return <ForecastConfiguration onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a]" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Blue top accent bar with gradient */}
      <div className="h-[14px] bg-gradient-to-r from-[#3700ff] via-[#5c3aff] to-[#3700ff] w-full" />

      {/* Navigation */}
      <nav className="sticky top-0 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <h1 className="text-xl sm:text-2xl bg-gradient-to-r from-[#3700ff] to-[#7c7cff] bg-clip-text text-transparent group-hover:from-[#5c3aff] group-hover:to-[#9d9dff] transition-all" style={{ fontFamily: 'Playfair Display, serif' }}>
                Yang Sun ☀️
              </h1>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#work" className="text-sm text-slate-400 hover:text-white transition-colors uppercase tracking-wider">
                Work
              </a>
              <a href="#about" className="text-sm text-slate-400 hover:text-white transition-colors uppercase tracking-wider">
                About
              </a>
              <a href="#contact" className="text-sm text-slate-400 hover:text-white transition-colors uppercase tracking-wider">
                Contact
              </a>
              <a 
                href="/resume" 
                className="px-5 py-2.5 bg-[#3700ff] text-white text-sm uppercase tracking-wider hover:bg-[#5c3aff] transition-all hover:shadow-lg hover:shadow-[#3700ff]/20 rounded-full"
              >
                Resume
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-[#3700ff] p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-white/10">
              <div className="flex flex-col gap-4">
                <a href="#work" className="text-sm text-slate-400 uppercase tracking-wider">Work</a>
                <a href="#about" className="text-sm text-slate-400 uppercase tracking-wider">About</a>
                <a href="#contact" className="text-sm text-slate-400 uppercase tracking-wider">Contact</a>
                <a href="/resume" className="text-sm text-[#3700ff] uppercase tracking-wider">Resume</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-32">
        <div className="max-w-4xl">
          <p className="text-[#7c7cff] text-sm sm:text-base uppercase tracking-wider mb-4">Product Designer</p>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl mb-6 sm:mb-8 leading-tight text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
            Transforming complex workflows into intuitive experiences
          </h2>
          <div className="relative mb-8 sm:mb-10">
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed italic text-slate-300">
              <span className="text-[#3700ff] text-3xl sm:text-4xl absolute -left-3 sm:-left-4 -top-2">"</span>
              <span className="relative z-10 pl-4 sm:pl-0">
                I design with empathy for the people behind the workflows I work on, focusing on products that make life easier while staying curious and grounded in a fast-moving AI era.
              </span>
              <span className="text-[#3700ff] text-3xl sm:text-4xl ml-1">"</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href="#work" 
              className="px-6 py-3.5 bg-[#3700ff] text-white text-sm sm:text-base uppercase tracking-wider hover:bg-[#5c3aff] transition-all text-center hover:shadow-lg hover:shadow-[#3700ff]/20 rounded-full"
            >
              View Work
            </a>
            <a 
              href="mailto:yangsunwnm@gmail.com" 
              className="px-6 py-3.5 border border-white/20 text-white text-sm sm:text-base uppercase tracking-wider hover:bg-white/5 hover:border-white/30 transition-all text-center rounded-full"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="bg-[#0f0f0f] py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-10 sm:mb-12">
            <h2 className="text-[#7c7cff] text-sm sm:text-base uppercase tracking-wider mb-4">Selected Work</h2>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              Featured Projects
            </h3>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm uppercase tracking-wider transition-all border rounded-full ${
                    selectedCategory === cat
                      ? 'bg-[#3700ff] text-white border-[#3700ff] shadow-lg shadow-[#3700ff]/20'
                      : 'bg-transparent text-slate-400 border-white/10 hover:bg-white/5 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map(project => (
              <div 
                key={project.id} 
                className="bg-[#1a1a1a] border border-white/5 group cursor-pointer hover:border-[#3700ff]/50 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-[#3700ff]/10 rounded-2xl"
                onClick={() => setCurrentPage(project.title.toLowerCase().replace(/\s+/g, '-'))}
              >
                <div className="aspect-[4/3] overflow-hidden bg-black/40">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs sm:text-sm text-[#7c7cff] uppercase tracking-wider">{project.company}</span>
                    <span className="text-xs sm:text-sm text-slate-500">{project.year}</span>
                  </div>
                  <h4 className="text-lg sm:text-xl mb-2 text-white group-hover:text-[#7c7cff] transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {project.title}
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed mb-4 text-slate-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-2.5 py-1 bg-white/5 text-slate-400 text-xs border border-white/10 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
            <div>
              <h2 className="text-[#7c7cff] text-sm sm:text-base uppercase tracking-wider mb-4">About</h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                Designer focused on enterprise workflows
              </h3>
              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base leading-relaxed text-slate-300">
                <p>
                  I'm a Product Designer currently at Clari, where I specialize in transforming complex enterprise revenue workflows into intuitive, scalable experiences.
                </p>
                <p>
                  My work spans 0→1 product development, AI-assisted design initiatives, and large-scale UX audits that directly impact adoption and reduce operational friction.
                </p>
                <p>
                  I believe in designing with empathy for the people behind the workflows, staying curious in the fast-moving AI era, and building products that genuinely make work easier.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Experience Highlight */}
              <div>
                <h4 className="text-[#7c7cff] text-xs sm:text-sm uppercase tracking-wider mb-4">Experience</h4>
                <div className="space-y-4">
                  <div className="border-l-2 border-[#3700ff] pl-4">
                    <p className="font-medium text-sm sm:text-base text-white">Clari</p>
                    <p className="text-xs sm:text-sm text-slate-400">Product Designer • 2021 - Present</p>
                  </div>
                  <div className="border-l-2 border-white/10 pl-4">
                    <p className="font-medium text-sm sm:text-base text-white">Kritii Design Agency</p>
                    <p className="text-xs sm:text-sm text-slate-400">Product Designer • 2020 - 2021</p>
                  </div>
                  <div className="border-l-2 border-white/10 pl-4">
                    <p className="font-medium text-sm sm:text-base text-white">TruckX</p>
                    <p className="text-xs sm:text-sm text-slate-400">Product Designer • 2019 - 2020</p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-[#7c7cff] text-xs sm:text-sm uppercase tracking-wider mb-4">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {['Product Thinking', 'Workflow Design', 'Complex Systems UX', 'User Flows', 'Prototyping', 'Usability Testing', 'Design Systems', 'AI Design'].map(skill => (
                    <span 
                      key={skill} 
                      className="px-3 py-1.5 bg-white/5 text-slate-300 text-xs sm:text-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-[#7c7cff] text-xs sm:text-sm uppercase tracking-wider mb-4">Tools</h4>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                  Figma, FigJam, Adobe CC, HTML/CSS, Figma Make, Low-code / AI-assisted prototyping
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3700ff] via-[#1a0066] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-white/80 text-sm sm:text-base uppercase tracking-wider mb-4">Get in Touch</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-5xl text-white mb-6 sm:mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
            Let's work together
          </h3>
          <p className="text-white/80 text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
            <a 
              href="mailto:yangsunwnm@gmail.com"
              className="px-6 sm:px-8 py-4 bg-white text-[#3700ff] text-sm sm:text-base uppercase tracking-wider hover:bg-white/90 transition-all hover:shadow-lg"
            >
              yangsunwnm@gmail.com
            </a>
            <a 
              href="https://yang-sundesign.com"
              className="px-6 sm:px-8 py-4 border-2 border-white text-white text-sm sm:text-base uppercase tracking-wider hover:bg-white hover:text-[#3700ff] transition-all"
            >
              yang-sundesign.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-slate-500">© 2026 Yang Sun. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#work" className="text-xs sm:text-sm text-slate-500 hover:text-white transition-colors">Work</a>
              <a href="#about" className="text-xs sm:text-sm text-slate-500 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-xs sm:text-sm text-slate-500 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}