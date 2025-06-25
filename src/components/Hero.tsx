
import React from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
  link.href = "/Nidhi_Kumari_Resume.pdf"; // path from public folder
  link.download = "Nidhi_Kumari_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
    console.log('Downloading resume...');
    
  };

  const viewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-purple-500/10 rounded-full animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section - Left */}
          <div className="flex justify-center lg:justify-start animate-slide-in-left">
            <div className="relative">
              {/* Glowing background circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full animate-glow opacity-20 scale-110"></div>
              
              {/* Main profile image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-full border-4 border-emerald-400 glass-effect overflow-hidden hover:scale-110 transition-transform duration-500 shadow-2xl hover:shadow-emerald-400/50">
                  <img 
                    src="public\portfolio photo1.jpg"
                    alt="Nidhi Kumari - Full-Stack Developer & UI/UX Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating tech icons around the image */}
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white p-3 rounded-full animate-float shadow-lg">
                  💻
                </div>
                <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-full animate-float animation-delay-1000 shadow-lg">
                  🎨
                </div>
                <div className="absolute top-1/2 -left-6 bg-purple-500 text-white p-3 rounded-full animate-float animation-delay-2000 shadow-lg">
                  ⚡
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section - Right */}
          <div className="text-left animate-slide-in-right">
            <p className="text-xl md:text-2xl text-emerald-400 mb-4 font-medium">
              Hi, I'm
            </p>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-100 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Nidhi Kumari
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-semibold">
              Full-Stack Developer & UI/UX Design Enthusiast from LPU
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-6 font-medium leading-relaxed">
              I build user-focused applications that look great and work even better.
            </p>
            
            <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-2xl">
              Passionate about creating seamless digital experiences through code and design. 
              Blending technical expertise with creative problem-solving to build educational games 
              and applications that make a difference.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={viewProjects}
                className="group bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View My Work
              </button>
              <button 
                onClick={downloadResume}
                className="group border-2 border-emerald-400 text-emerald-400 px-8 py-4 rounded-full font-semibold hover:bg-emerald-400 hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </button>
            </div>
            
            {/* Call to Action Banner */}
            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-emerald-400/20 rounded-2xl p-6 text-center">
              <p className="text-emerald-400 font-semibold text-lg">
                🚀 Open to UI/UX + Full-Stack Internships
              </p>
              <p className="text-gray-300 mt-2">
                Let's build something impactful together!
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-emerald-400 hover:text-emerald-300 transition-colors"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
