import React, { useState, useRef, useEffect } from 'react';
import ForecastConfiguration from './components/ForecastConfiguration';
import ClariInspect from './components/ClariInspect';
import ResumeRedesignForDesigner from '../imports/ResumeRedesignForDesigner-37-1435';
import { Linkedin, Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

// Import project images
import forecastConfigImage from '../assets/f055d071dbe5534dd1bd3dcdd2186b15ad731354.png';
import inspectImage from '../assets/54b90e77863c7a9eb2a202af9b37e496cd9c5036.png';
import truckxImage from '../assets/aa950f68e6d55d60c0f07808733c377ba575db21.png';
import zooImage from '../assets/c33bef13a957dc2425da9f0ce2db3a7b1feef4f9.png';
import werImage from '../assets/ddaf5b1ccd9f3876fff02ee76adc2a63805f4100.png';
import pawhopeImage from '../assets/0af675ad794c6d8146d79d88652e101ce573c8bf.png';
import mirrorImage from '../assets/0a1f815953be331a674d0b2883056f2921107d25.png';
import haloImage from '../assets/f8f8beb74828ac64992844fcd57e01d8adde048a.png';

// Project data
const projects = [
  {
    id: 1,
    title: 'Clari · Forecast Configuration (0→1 Self-Service Admin Tool)',
    description: 'Designed a self-service configuration experience that replaced manual, support-led forecasting setup, enabling customers to manage complex forecasting logic independently and at scale.',
    image: forecastConfigImage,
    hasCase: true,
    link: 'forecast-configuration'
  },
  {
    id: 2,
    title: 'Clari · Inspect (UX Audit & Core Workflow Redesign)',
    description: 'Led a comprehensive UX audit of Clari\'s core Inspect product and drove high-impact workflow improvements to increase usability, editing efficiency, and feature adoption.',
    image: inspectImage,
    hasCase: true,
    link: 'inspect'
  },
  {
    id: 3,
    title: 'TruckX',
    description: 'TruckX Fleet is designed for fleet managers and dispatchers to view and manage their drivers\' logs, track their location, and optimize utilization.',
    image: truckxImage,
    hasCase: true,
    link: 'forecast-configuration'
  },
  {
    id: 4,
    title: 'Zoo',
    description: 'Zoo is a mobile app helping the visitor to plan their visit ahead of time to the zoo.',
    image: zooImage,
    hasCase: true,
    link: null
  },
  {
    id: 5,
    title: 'Wer',
    description: 'Wer is a mobile app for new students to browse, search, and propose new student organizations.',
    image: werImage,
    hasCase: true,
    link: null
  },
  {
    id: 6,
    title: 'Pawhope',
    description: 'PAW HOPE is a non-profit application for pet adoption from shelter and track the stray animals.',
    image: pawhopeImage,
    hasCase: true,
    link: null
  },
  {
    id: 7,
    title: 'MirrorMirror',
    description: 'Pre-owned luxury product shopping application with a third-part authenticity check.',
    image: mirrorImage,
    hasCase: true,
    link: null
  },
  {
    id: 8,
    title: 'Halo',
    description: 'Halo is a mobile app that supports pet owners through the end of their pet\'s journey.',
    image: haloImage,
    hasCase: true,
    link: null
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const resumeRef = useRef<HTMLDivElement>(null);

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // If viewing project detail
  if (currentPage === 'forecast-configuration') {
    return <ForecastConfiguration onBack={() => setCurrentPage('home')} />;
  }
  if (currentPage === 'inspect') {
    return <ClariInspect onBack={() => setCurrentPage('home')} />;
  }
  if (currentPage === 'resume') {
    const handleDownloadPDF = async () => {
      if (!resumeRef.current) return;
      
      try {
        const canvas = await html2canvas(resumeRef.current, {
          scale: 2,
          useCORS: true,
          backgroundColor: '#ffffff'
        });
        
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });
        
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 0;
        
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save('YangSun_ProductDesigner_Resume.pdf');
      } catch (error) {
        console.error('Error generating PDF:', error);
      }
    };

    return (
      <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center py-12">
        <div className="relative">
          <div className="absolute -top-12 left-0 right-0 flex items-center justify-between">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-[#666666] hover:text-[#1a1a1a] transition-colors text-sm"
            >
              ← Back to home
            </button>
            <button 
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-4 py-2 bg-[#3700ff] text-white text-sm rounded hover:bg-[#2d00cc] transition-colors"
            >
              <Download size={16} />
              Download PDF
            </button>
          </div>
          <div ref={resumeRef} className="scale-100 origin-top">
            <ResumeRedesignForDesigner />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Navigation */}
      <nav className="bg-white">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-12">
          <div className="flex items-center justify-between py-5">
            {/* Logo */}
            <a href="#home" className="text-[18px] text-[#3700ff] flex items-center gap-2" style={{ fontWeight: 500 }}>
              <span>Yang Sun</span>
              <style>{`
                @keyframes spin {
                  from {
                    transform: rotate(0deg);
                  }
                  to {
                    transform: rotate(360deg);
                  }
                }
                .sun-spin {
                  display: inline-block;
                  animation: spin 3s linear infinite;
                }
              `}</style>
              <span className="sun-spin">☀️</span>
            </a>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-8">
              <a href="#work" className="text-[14px] text-[#1a1a1a] hover:opacity-60 transition-opacity">
                Work
              </a>
              <a 
                href="#" 
                className="flex items-center gap-2 text-[14px] text-[#3700ff] hover:opacity-60 transition-opacity"
                onClick={() => setCurrentPage('resume')}
              >
                <Download size={16} />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-white">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-12 pt-24 pb-20">
          {/* Quote */}
          <div className="max-w-[900px]">
            <style>{`
              .highlight-word {
                display: inline-block;
                background: linear-gradient(to right, #e8dbff 0%, #e8dbff 100%);
                background-size: 100% 50%;
                background-repeat: no-repeat;
                background-position: left bottom;
                transition: transform 0.2s ease;
                padding: 0 2px;
              }
              
              .highlight-word:hover {
                transform: translateY(-2px);
              }
            `}</style>
            <p className="text-[#1a1a1a] text-[28px] sm:text-[36px] leading-[1.3] relative pl-8 italic" style={{ fontWeight: 400 }}>
              <span className="absolute left-0 top-[-8px] text-[#3700ff] text-[56px] leading-[0.8]" style={{ fontFamily: 'Playfair Display, serif' }}>"</span>
              I <span className="highlight-word" style={{ fontWeight: 600 }}>empathize</span> with users to design scalable, human-centered, and <span className="highlight-word" style={{ fontWeight: 600 }}>delightful</span> products—turning complex workflows into <span className="highlight-word" style={{ fontWeight: 600 }}>intuitive</span>, self-service experiences.
              <span className="text-[#3700ff] text-[56px] leading-[0.8] ml-1" style={{ fontFamily: 'Playfair Display, serif' }}>"</span>
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="work" className="max-w-[1100px] mx-auto px-6 sm:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map(project => (
            <div 
              key={project.id} 
              onClick={() => project.link && setCurrentPage(project.link)}
              className="bg-[#f5f5f5] rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              {/* Project Image */}
              <div className="bg-[#ebebeb] rounded-lg overflow-hidden mb-6 aspect-[4/3] flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Project Info */}
              <div>
                <h3 className="text-[22px] text-[#1a1a1a] mb-3" style={{ fontWeight: 600 }}>
                  {project.title}
                </h3>
                <p className="text-[#666666] text-[14px] leading-[1.6] mb-5">
                  {project.description}
                </p>
                
                {/* Case Study Button */}
                {project.hasCase && (
                  <button
                    className="px-6 py-2 bg-white border border-[#d0d0d0] text-[#1a1a1a] text-[13px] hover:bg-[#f5f5f5] transition-colors rounded-sm"
                  >
                    Case Study
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#f5f5f5] mt-20">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-12 py-16 text-center">
          <p className="text-[#999999] text-[13px] mb-1">
            Send a message at
          </p>
          <a 
            href="mailto:yangsunwnm@gmail.com" 
            className="text-[#1a1a1a] text-[14px] hover:opacity-60 transition-opacity"
          >
            yangsunwnm@gmail.com
          </a>
          <div className="mt-8 flex justify-center">
            <a 
              href="https://www.linkedin.com/in/yang-sun-design" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#3700ff] hover:opacity-60 transition-all"
            >
              <Linkedin size={18} />
              <span className="text-[12px]">LinkedIn</span>
            </a>
          </div>
          <p className="text-[#cccccc] text-[11px] mt-12">
            ©2025 Yang Sun All Rights Reserved.<br />
            Website Created in Figma Make
          </p>
        </div>
      </footer>
    </div>
  );
}