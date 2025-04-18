
import React from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Hello! I'm Nidhi Kumari, a passionate full-stack developer currently in my third year at Lovely Professional University in Punjab. I specialize in building modern web applications with clean, efficient code and intuitive user experiences.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My journey in tech began with a curiosity about how websites work, which quickly evolved into a passion for creating them. I enjoy tackling complex problems and constantly learning new technologies to expand my skill set.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or enhancing my knowledge through online courses and certifications.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-serif font-semibold mb-6 text-gray-800">Education & Experience</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 text-portfolio-purple">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">B.Tech in Computer Science</h4>
                  <p className="text-gray-600">Lovely Professional University</p>
                  <p className="text-gray-500 text-sm">2021 - Present</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 text-portfolio-purple">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Web Development Intern</h4>
                  <p className="text-gray-600">Tech Innovators</p>
                  <p className="text-gray-500 text-sm">Summer 2023</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="mt-1 text-portfolio-purple">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600">Punjab, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-serif font-semibold mb-4 text-gray-800">Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['Web Development', 'UI/UX Design', 'Mobile Apps', 'Cloud Computing', 'Open Source'].map((interest) => (
                  <span key={interest} className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200 text-gray-700">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
