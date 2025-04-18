
import React from 'react';
import { ExternalLink, Github, Layout } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, cart functionality, and payment integration.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, user roles, and progress tracking features.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Context API'],
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard that provides real-time weather data, forecasts, and location-based weather information.',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'Geolocation API'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Blog Platform',
      description: 'A full-featured blog platform with rich text editing, comment system, user profiles, and content categorization.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'NextAuth.js'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      demoLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">My Projects</h2>
        <p className="text-gray-600 max-w-2xl mb-12">
          Here are some of the projects I've worked on. Each one presented unique challenges that helped me grow as a developer.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 font-serif">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <a
                    href={project.demoLink}
                    className="flex items-center gap-1 text-portfolio-purple hover:text-portfolio-dark-purple transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Layout size={16} />
                    <span>Live Demo</span>
                  </a>
                  
                  <a
                    href={project.codeLink}
                    className="flex items-center gap-1 text-portfolio-purple hover:text-portfolio-dark-purple transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-portfolio-purple hover:text-portfolio-dark-purple transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View more projects on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
