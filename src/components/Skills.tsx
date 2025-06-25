
import React, { useState } from 'react';
import { Code, Palette, Wrench, Database, Globe, Smartphone } from 'lucide-react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Tech Stack",
      icon: Code,
      color: "emerald",
      skills: [
        { name: "React", level: 90, description: "Building dynamic UIs with hooks and state management" },
        { name: "Node.js", level: 85, description: "Server-side development and API creation" },
        { name: "Express.js", level: 80, description: "RESTful APIs and middleware development" },
        { name: "MongoDB", level: 85, description: "NoSQL database design and optimization" },
        { name: "JavaScript", level: 88, description: "ES6+ features and modern JS patterns" },
        { name: "TypeScript", level: 75, description: "Type-safe development and better code quality" }
      ]
    },
    {
      title: "Design Tools",
      icon: Palette,
      color: "blue",
      skills: [
        { name: "Figma", level: 85, description: "UI/UX design and collaborative prototyping" },
  
        { name: "Sketch", level: 65, description: "Vector design and interface creation" },
        { name: "User Research", level: 75, description: "Understanding user needs and behaviors" },
        { name: "Prototyping", level: 80, description: "Creating interactive design mockups" },
        { name: "Wireframing", level: 85, description: "Low-fidelity design planning" }
      ]
    },
    {
      title: "Other Tools",
      icon: Wrench,
      color: "purple",
      skills: [
        { name: "Git", level: 85, description: "Version control and collaborative development" },
        { name: "Postman", level: 80, description: "API testing and documentation" },
        { name: "Firebase", level: 75, description: "Backend services and real-time databases" },
      
        { name: "Tailwind CSS", level: 90, description: "Utility-first CSS framework mastery" },
        { name: "RESTful APIs", level: 80, description: "API design and integration" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        border: 'border-emerald-400/50',
        hover: 'hover:border-emerald-400',
        bg: 'bg-emerald-500/10',
        text: 'text-emerald-400',
        gradient: 'from-emerald-400 to-emerald-600'
      },
      blue: {
        border: 'border-blue-400/50',
        hover: 'hover:border-blue-400',
        bg: 'bg-blue-500/10',
        text: 'text-blue-400',
        gradient: 'from-blue-400 to-blue-600'
      },
      purple: {
        border: 'border-purple-400/50',
        hover: 'hover:border-purple-400',
        bg: 'bg-purple-500/10',
        text: 'text-purple-400',
        gradient: 'from-purple-400 to-purple-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-emerald-500/5 rounded-full animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-500/5 rounded-full animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Tools
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for full-stack development and creative design
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <div 
                key={categoryIndex} 
                className={`bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border ${colorClasses.border} ${colorClasses.hover} transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              >
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses.bg} rounded-full mb-4`}>
                    <Icon className={`w-8 h-8 ${colorClasses.text}`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${colorClasses.text}`}>{category.title}</h3>
                </div>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="relative group"
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium group-hover:text-gray-100 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`bg-gradient-to-r ${colorClasses.gradient} h-2 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      
                      {/* Tooltip */}
                      {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-gray-300 text-sm rounded-lg border border-gray-700 z-10 whitespace-nowrap animate-fade-in">
                          {skill.description}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-300 mb-8">Also Exploring</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'Docker', 'AWS', 'GraphQL', 'Next.js', 'React Native'].map((skill, index) => (
              <span 
                key={index}
                className="bg-gray-800 border border-gray-700 text-gray-400 px-4 py-2 rounded-full text-sm font-medium hover:border-emerald-400/50 hover:text-emerald-400 transition-all duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
