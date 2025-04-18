
import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Full-Stack Web Development',
      issuer: 'Udemy',
      date: 'January 2023',
      credentialLink: '#',
      description: 'Comprehensive course covering modern web development technologies including React, Node.js, and MongoDB.',
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'March 2023',
      credentialLink: '#',
      description: 'Fundamental understanding of AWS Cloud services, security, architecture, pricing, and support.',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'June 2022',
      credentialLink: '#',
      description: 'Advanced JavaScript concepts including data structures, algorithms, and functional programming.',
    },
    {
      title: 'UI/UX Design Fundamentals',
      issuer: 'Coursera',
      date: 'September 2022',
      credentialLink: '#',
      description: 'Principles of user interface design, user experience, wireframing, and prototyping.',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">Certifications</h2>
        <p className="text-gray-600 max-w-2xl mb-12">
          I believe in continuous learning and improving my skills. Here are some of the certifications I've earned along my journey.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <Award className="text-portfolio-purple" size={28} />
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar size={14} />
                  {cert.date}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-1 font-serif">{cert.title}</h3>
              <p className="text-portfolio-purple mb-3">Issued by {cert.issuer}</p>
              <p className="text-gray-600 mb-4">{cert.description}</p>
              
              <a
                href={cert.credentialLink}
                className="inline-flex items-center gap-1 text-sm text-portfolio-purple hover:text-portfolio-dark-purple transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>View Credential</span>
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-lg p-8 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 font-serif">Additional Training & Workshops</h3>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-1 bg-portfolio-purple rounded"></div>
              <div>
                <h4 className="font-medium text-gray-800">Hacktoberfest Participant</h4>
                <p className="text-gray-500 text-sm">October 2023</p>
                <p className="text-gray-600 mt-1">Successfully contributed to open source projects during the annual Hacktoberfest event.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-1 bg-portfolio-purple rounded"></div>
              <div>
                <h4 className="font-medium text-gray-800">Web Accessibility Workshop</h4>
                <p className="text-gray-500 text-sm">August 2023</p>
                <p className="text-gray-600 mt-1">Intensive workshop on creating accessible web applications following WCAG guidelines.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-1 bg-portfolio-purple rounded"></div>
              <div>
                <h4 className="font-medium text-gray-800">LPU Tech Summit</h4>
                <p className="text-gray-500 text-sm">February 2023</p>
                <p className="text-gray-600 mt-1">Participated in the university tech summit focused on emerging technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
