import React from 'react';
import { Github, ExternalLink, Figma } from 'lucide-react';

const Projects = () => {
  const fullStackProjects = [
    {
      title: "Mock Master – Smart AI Interview Practice Platform",
      description: "Mock Master is a full-stack AI-powered interview simulator built using React, Node.js, MongoDB, and OpenAI’s GPT-4 API. It enables users to practice role-specific interviews with real-time AI-generated questions, dynamic feedback, and score-based evaluations. Designed to enhance confidence and performance in tech interviews.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "OpenAI GPT-4 API"],
      role: "Full-Stack Developer",
      challenges: "Implemented real-time AI-driven interviews while managing dynamic socket communication and response evaluation.",
      learnings: "Learned to integrate GPT-4 with the MERN stack and deliver personalized, responsive interview simulations.",
      github: "https://github.com/nidhisingh2004/Mock-Master",
      demo: "https://github.com/nidhisingh2004/Mock-Master"
    },
    {
      title: "Social-App – Full-Stack Social Media Web Platform",
      description: "Social-App is a full-stack social media platform where users can post, comment, share, and chat in real-time. It features secure JWT-based authentication, real-time notifications, and private messaging. Built using React, Node.js, Express, and MongoDB for a seamless and interactive experience.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "HTML", "CSS", "JavaScript"],
      role: "Full-Stack Developer",
      challenges: "Built real-time post, comment, and sharing features with secure JWT authentication and dynamic user interactions",
      learnings: "Gained experience in full-stack architecture, custom auth flow using JWT, and implementing scalable social features like notifications and messaging.",
      github: "https://github.com/nidhisingh2004/Social-App",
      demo: "https://github.com/nidhisingh2004/Social-App"
    },
    {
      title: "Connect With Your Fam – Stay Close, Chat, and Share Moments",
      description: "Connect With Your Fam is a full-stack social platform designed to keep families connected through posts, comments, and real-time chat. It offers secure user authentication, private messaging, and notification features. Built using React, Node.js, Express, and MongoDB for a responsive and reliable experience.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.io", "REST API"],
      role: "Frontend Developer",
      challenges: "Ensured secure, real-time communication while managing user sessions and interactive post-sharing features.",
      learnings: "Learned to build scalable, secure full-stack apps with real-time messaging and smooth user experience for social platforms.",
      github: "https://github.com/nidhisingh2004/Connect-your-fam-s",
      demo: "https://github.com/nidhisingh2004/Connect-your-fam-s"
    }
  ];

  const uiuxProjects = [
    {
      title: "Travel Explorer – UI Design for Travel App",
      description: "Created a visually engaging and user-friendly travel booking interface in Figma, focusing on smooth navigation, search filters, and modern destination cards.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
      technologies: ["Figma", "Wireframing", "Prototyping", "Component Design"],
      role: "UI/UX Designer",
      challenges: "Balancing aesthetic appeal with usability for quick travel bookings",
      learnings: "Mastered Figma auto-layouts, reusable components, and mobile-first design",
      figma: "https://www.figma.com/design/cN7kyz3rxlRPBwIwwAXhiD/Travel-app?node-id=0-1&p=f&t=4aYut1FAE4Bj113w-0",
      behance: "https://www.figma.com/design/cN7kyz3rxlRPBwIwwAXhiD/Travel-app?node-id=0-1&p=f&t=4aYut1FAE4Bj113w-0"
    }
  ];

  const iosProjects = [
    {
      title: "SwiftShop – iOS E-Commerce App",
      description: "Developed a sleek, responsive shopping app using SwiftUI with features like product browsing, cart management, and secure checkout.",
      image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=600&h=400&fit=crop",
      technologies: ["SwiftUI", "Xcode"],
      role: "iOS Developer",
      challenges: "Implementing dynamic UI with real-time data binding using Combine",
      learnings: "Mastered SwiftUI’s declarative syntax and MVVM architecture for scalable iOS apps",
      appstore: "#",
      github: "#"
    }
  ];

  const ProjectCard = ({ project, type }: { project: any, type: 'fullstack' | 'uiux' }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-gray-700/50">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            type === 'fullstack'
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
              : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
          }`}>
            {type === 'fullstack' ? '🧑‍💻 Full-Stack' : '🎨 UI/UX Design'}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 mb-3 font-medium">{project.role}</p>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-200 mb-1">Challenges:</p>
          <p className="text-xs text-gray-400 mb-2">{project.challenges}</p>
          <p className="text-xs font-semibold text-gray-200 mb-1">Key Learnings:</p>
          <p className="text-xs text-gray-400">{project.learnings}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-medium border border-gray-600"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-medium border border-gray-600">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="flex gap-2">
          {type === 'fullstack' ? (
            <>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 flex-1 bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
              >
                <Github className="w-3 h-3" />
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 flex-1 border border-emerald-500 text-emerald-400 py-2 px-3 rounded-lg text-sm font-medium hover:bg-emerald-500/10 transition-all duration-300"
              >
                <ExternalLink className="w-3 h-3" />
                Live Demo
              </a>
            </>
          ) : (
            <>
              <a
                href={project.figma}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 flex-1 bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300"
              >
                <Figma className="w-3 h-3" />
                Figma
              </a>
              <a
                href={project.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 flex-1 border border-blue-500 text-blue-400 py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-500/10 transition-all duration-300"
              >
                <ExternalLink className="w-3 h-3" />
                Case Study
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-emerald-500/5 rounded-full animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Projects & Case Studies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my development projects and design case studies
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              🧑‍💻 Full-Stack Projects
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fullStackProjects.map((project, index) => (
              <ProjectCard key={index} project={project} type="fullstack" />
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              🎨 UI/UX Design Projects
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {uiuxProjects.map((project, index) => (
              <ProjectCard key={index} project={project} type="uiux" />
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
