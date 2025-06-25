
import React from 'react';
import { Download, Calendar, MapPin, Award } from 'lucide-react';

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
  link.href = "/Nidhi_Kumari_Resume.pdf"; // path from public folder
  link.download = "Nidhi_Kumari_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
    console.log('Downloading resume...');
    
  };

  const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Mock Master – AI Interview Simulator",
    period: "Apr 2024 – May 2024",
    location: "Remote / Personal Project",
    description: "Built a GenAI-powered interview platform using GPT-4, enabling real-time mock interviews with dynamic feedback.",
    achievements: [
      "Integrated GPT-4 API for role-specific interview flows",
      "Used React, Node.js, Express, MongoDB, and Socket.io",
      "Implemented scoring logic and AI-based feedback generation"
    ]
  },
  {
    title: "UI/UX Designer",
    company: "Travel Explorer – Figma Mobile App",
    period: "May 2025",
    location: "Remote / Personal Project",
    description: "Designed an intuitive travel booking interface focused on clean navigation and user engagement.",
    achievements: [
      "Created high-fidelity Figma prototypes using auto-layout",
      "Designed interactive components and destination cards",
      "Applied accessibility and mobile-first design principles"
    ]
  }
  
];


  const education = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Computer Science and Engineering",
  university: "Lovely Professional University (LPU), Punjab, India",
  period: "Aug 2022 – Jun 2026 ",
  currentSemester: "6th Semester",
  achievements: [
    "Dean’s List – Lovely Professional University (Recognized for academic excellence and ranking among top 10% of students)",
    "Active Member – Web Development Club",
    "Participant – Smart India Hackathon and internal coding challenges"
  ]
};



  return (
    <section id="resume" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-emerald-500/5 rounded-full animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/5 rounded-full animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Resume & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            My academic journey and professional experience
          </p>
          <button 
            onClick={downloadResume}
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 mx-auto"
          >
            <Download className="w-4 h-4" />
            Download Full Resume
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-100 mb-8 flex items-center gap-2">
              <Award className="w-6 h-6 text-emerald-400" />
              Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700/50">
                  <h4 className="text-lg font-bold text-gray-100 mb-2">{exp.title}</h4>
                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-400">
                    <span className="font-semibold text-emerald-400">{exp.company}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  <div>
                    <p className="font-semibold text-gray-200 mb-2">Key Achievements:</p>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <span className="text-emerald-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-100 mb-8 flex items-center gap-2">
              <Award className="w-6 h-6 text-blue-400" />
              Education
            </h3>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700/50">
              <h4 className="text-lg font-bold text-gray-100 mb-2">{education.degree}</h4>
              <p className="text-emerald-400 font-semibold mb-1">{education.field}</p>
              <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-400">
                <span className="font-semibold">{education.university}</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {education.period}
                </span>
              </div>
              <p className="text-blue-400 font-medium mb-4">Currently in {education.currentSemester}</p>
              <div>
                <p className="font-semibold text-gray-200 mb-2">Achievements:</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {education.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Additional Skills/Certifications */}
            <div className="mt-8 bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700/50">
  <h4 className="text-lg font-bold text-gray-100 mb-4">
    Certifications & Learning
  </h4>

  <div className="space-y-2 text-sm text-gray-400">
    <p className="flex items-start gap-2">
      <span className="text-emerald-400 mt-1">•</span>
      Java Using DSA <span className="text-gray-500">(CipherSchools)</span>
    </p>
    <p className="flex items-start gap-2">
      <span className="text-emerald-400 mt-1">•</span>
      HTML, CSS, and JavaScript for Web Developers <span className="text-gray-500">(Coursera)</span>
    </p>
    <p className="flex items-start gap-2">
      <span className="text-emerald-400 mt-1">•</span>
      Dynamic Programming, Greedy Algorithms <span className="text-gray-500">(Coursera)</span>
    </p>
    <p className="flex items-start gap-2">
      <span className="text-emerald-400 mt-1">•</span>
      Generative AI with Large Language Models <span className="text-gray-500">(Coursera)</span>
    </p>
    <p className="flex items-start gap-2">
      <span className="text-emerald-400 mt-1">•</span>
      Build AI Apps with ChatGPT, DALL·E, and GPT-4 <span className="text-gray-500">(Coursera)</span>
    </p>
   
  </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
