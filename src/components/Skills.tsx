import React from 'react';
import { Check } from 'lucide-react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiFirebase,
  SiJest,
  SiFigma
} from 'react-icons/si';

const Skills: React.FC = () => {
  const frontendSkills = [
    { name: 'HTML/CSS', level: 95, icon: <SiHtml5 className="text-orange-500" /> },
    { name: 'JavaScript', level: 90, icon: <SiJavascript className="text-yellow-400" /> },
    { name: 'React.js', level: 85, icon: <SiReact className="text-blue-500" /> },
    { name: 'TypeScript', level: 80, icon: <SiTypescript className="text-blue-700" /> },
    { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss className="text-teal-400" /> },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 85, icon: <SiNodedotjs className="text-green-600" /> },
    { name: 'Express.js', level: 80, icon: <SiExpress className="text-gray-800" /> },
    { name: 'MongoDB', level: 75, icon: <SiMongodb className="text-green-500" /> },
    { name: 'SQL', level: 80, icon: <SiMysql className="text-blue-500" /> },
    { name: 'RESTful APIs', level: 90, icon: <SiPostgresql className="text-blue-700" /> },
  ];

  const otherSkills = [
    { name: 'Git & GitHub', icon: <SiGithub className="text-black" /> },
    { name: 'Responsive Design', icon: <SiFigma className="text-pink-500" /> },
    { name: 'UI/UX Principles', icon: <SiFigma className="text-purple-500" /> },
    { name: 'Agile Methodology', icon: <Check size={18} className="text-portfolio-purple" /> },
    { name: 'Problem Solving', icon: <Check size={18} className="text-portfolio-purple" /> },
    { name: 'Docker', icon: <SiDocker className="text-blue-500" /> },
    { name: 'Testing (Jest)', icon: <SiJest className="text-pink-600" /> },
    { name: 'CI/CD Pipelines', icon: <Check size={18} className="text-portfolio-purple" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
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
                  <div className="flex justify-between mb-1 items-center">
                    <div className="flex gap-2 items-center text-gray-700">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
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
                  <div className="flex justify-between mb-1 items-center">
                    <div className="flex gap-2 items-center text-gray-700">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
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
                  <div key={skill.name} className="flex items-center gap-2">
                    {skill.icon}
                    <span className="text-gray-700">{skill.name}</span>
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
