
import React from 'react';
import { Code, Palette, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const traits = [
    { icon: Code, label: 'Full-Stack Developer', color: 'text-emerald-400' },
    { icon: Palette, label: 'UI/UX Designer', color: 'text-blue-400' },
    { icon: Users, label: 'Collaborative', color: 'text-purple-400' },
    { icon: Lightbulb, label: 'Creative Problem Solver', color: 'text-yellow-400' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-emerald-500/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-blue-500/5 rounded-full animate-pulse animation-delay-1000"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-200 mb-6">
              Bridging Code & Creativity
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate Full-Stack Developer and UI/UX Design Enthusiast currently studying at 
              Lovely Professional University. My journey in tech is driven by a deep fascination with 
              how technology can solve real-world problems while creating beautiful, intuitive experiences.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              With expertise in the MERN stack and a keen eye for design using tools like Figma and Adobe XD, 
              I specialize in building educational games and user-focused web applications that make a difference.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in the power of collaboration and continuous learning. Every project is an opportunity 
              to push boundaries, learn something new, and create solutions that users love.
            </p>
            
            {/* Traits Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {traits.map((trait, index) => {
                const Icon = trait.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-emerald-400/50 transition-all duration-300 hover:scale-105"
                  >
                    <Icon className={`w-8 h-8 ${trait.color} mb-2`} />
                    <p className="text-gray-300 font-medium text-sm">{trait.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-2xl blur-xl"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-emerald-400/50 transition-all duration-300">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 mx-auto bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full flex items-center justify-center text-4xl font-bold text-gray-900">
                    NK
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-200 mb-2">Current Focus</h4>
                    <p className="text-emerald-400 font-semibold">6th Semester at LPU</p>
                    <p className="text-gray-400 text-sm mt-2">Computer Science & Engineering</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Full-Stack Development</span>
                      <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-gradient-to-r from-emerald-400 to-blue-400"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">UI/UX Design</span>
                      <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-gradient-to-r from-emerald-400 to-blue-400"></div>
                      </div>
                    </div>
                    

  

  {/* Figma */}
  <div className="flex items-center justify-between gap-4">
    <span className="text-gray-400 w-48">Figma</span>
    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
      <div className="w-4/6 h-full bg-gradient-to-r from-yellow-300 to-orange-400 transition-all duration-500"></div>
    </div>
    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Educational Games</span>
                      <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="w-4/5 h-full bg-gradient-to-r from-emerald-400 to-blue-400"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
