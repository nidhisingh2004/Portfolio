
import React from 'react';
import { Check } from 'lucide-react';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'SQL', level: 80 },
    { name: 'RESTful APIs', level: 90 },
  ];

  const otherSkills = [
    'Git & GitHub',
    'Responsive Design',
    'UI/UX Principles',
    'Agile Methodology',
    'Problem Solving',
    'AWS',
    'Docker',
    'Testing (Jest)',
    'CI/CD Pipelines',
    'Firebase',
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6 text-gray-800">Frontend Development</h3>
            <div className="space-y-5">
              {frontendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-portfolio-purple to-portfolio-light-purple rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-serif font-semibold mb-6 mt-10 text-gray-800">Backend Development</h3>
            <div className="space-y-5">
              {backendSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700">{skill.name}</span>
                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-portfolio-purple to-portfolio-light-purple rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-serif font-semibold mb-6 text-gray-800">Other Skills & Technologies</h3>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherSkills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2">
                    <Check size={18} className="text-portfolio-purple" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-serif font-semibold mb-6 text-gray-800">Development Process</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
                  <h4 className="font-medium text-gray-800 mb-2">Research & Planning</h4>
                  <p className="text-gray-600 text-sm">Understanding requirements and planning the architecture.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
                  <h4 className="font-medium text-gray-800 mb-2">Design & Development</h4>
                  <p className="text-gray-600 text-sm">Creating clean, efficient, and scalable code solutions.</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm card-hover">
                  <h4 className="font-medium text-gray-800 mb-2">Testing & Deployment</h4>
                  <p className="text-gray-600 text-sm">Ensuring quality and smooth deployment of applications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
