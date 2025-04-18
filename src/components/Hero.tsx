
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-0 w-full h-3/4 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-portfolio-light-purple/10 via-transparent to-transparent rounded-full blur-3xl -z-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-portfolio-purple/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-portfolio-light-purple/5 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '12s' }}></div>
      
      {/* Geometric patterns */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
        <div className="absolute top-20 left-20 w-20 h-20 border-2 border-portfolio-purple/30 rounded-md transform rotate-12"></div>
        <div className="absolute top-40 right-40 w-32 h-32 border-2 border-portfolio-light-purple/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-24 h-24 border-2 border-portfolio-purple/30 rounded-md transform -rotate-12"></div>
        <div className="absolute bottom-40 right-60 w-16 h-16 border-2 border-portfolio-light-purple/20 rounded-full"></div>
      </div>
      
      {/* Diagonal lines */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-portfolio-purple/5 to-transparent transform rotate-45 -z-10 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-portfolio-light-purple/5 to-transparent transform -rotate-45 -z-10 opacity-30"></div>
      
      {/* Main content */}
      <div className="container mx-auto text-center md:text-left md:flex md:items-center md:justify-between max-w-6xl relative z-10">
        <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-xl md:text-2xl font-medium text-portfolio-purple mb-4">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-3 font-serif">Nidhi Kumari</h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-6">Full-stack Developer</p>
          <p className="text-gray-500 max-w-lg mx-auto md:mx-0 mb-8">
            A passionate developer specializing in creating beautiful, functional web experiences with modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="border border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white font-medium py-2 px-6 rounded-md transition-colors duration-300">
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="hidden md:block md:w-1/2 animate-fade-in-right" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 border border-gray-100">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-purple to-portfolio-light-purple rounded-xl blur opacity-20"></div>
                <Avatar className="w-48 h-48 mx-auto border-4 border-white shadow-md">
                  <AvatarImage 
                    src="/placeholder.svg" 
                    alt="Nidhi Kumari" 
                    className="object-cover"
                  />
                  <AvatarFallback className="bg-gradient-to-r from-portfolio-light-purple to-portfolio-purple text-white text-4xl font-bold">
                    NK
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mt-4">Nidhi Kumari</h3>
              <p className="text-portfolio-purple font-medium">Full-stack Developer</p>
            </div>
            
            <div className="mt-6 md:mt-0 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 border border-gray-100">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-light-purple to-portfolio-purple rounded-xl blur opacity-10"></div>
                <div className="relative bg-white p-4 rounded-lg border border-gray-100">
                  <Avatar className="w-36 h-36 mx-auto">
                    <AvatarImage 
                      src="/placeholder.svg" 
                      alt="Lovely Professional University" 
                      className="object-contain p-2"
                    />
                    <AvatarFallback className="bg-white text-portfolio-purple text-xl font-serif">
                      LPU
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-medium text-gray-800 mt-3">Lovely Professional University</h3>
                  <p className="text-gray-600 text-sm">B.Tech Computer Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-portfolio-purple transition-colors animation-bounce">
        <ChevronDown size={32} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
