
import React from 'react';
import { ExternalLink, Github, Layout } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
        title: 'Connect With Your Fam',
        description: 'Developed a Full-Stack Social Media Platform: Built a highly interactive and responsive social media application using the MERN stack (MongoDB, Express.js, React.js, Node.js), optimized for both mobile and desktop devices.',
        technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMiTcH_AgwKR0qh-kaFgjjH3LcwaGHRdMn6w&s', // Use an appropriate image
        demoLink: 'https://your-live-demo-link.com',
        codeLink: 'https://github.com/nidhisingh2004/Connect-your-fam-s', // Update this with your GitHub repo URL
      },
      ,
      {
          title: 'Social-App',
          description: 'Social Media Web Application clone along the lines of Signal, Facebook, and Twitter. Features include posting, commenting, sharing, user authentication, notifications, and private messaging using React, Node.js, and MongoDB.',
          technologies: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'BCrypt'],
          image: 'https://blog.privadovpn.com/wp-content/uploads/2022/06/Shutterstock_1498591895.jpg',
          demoLink: 'https://your-live-demo-link.com',
          codeLink: 'https://github.com/nidhisingh2004/Social-App', 
        },
        
        {
            title: 'DailyPlanner',
            description: 'A task management application built with React and Vite. The app allows users to plan, organize, and track daily tasks with a minimal and responsive user interface.',
            technologies: ['React.js', 'Vite', 'ESLint'],
            image: 'https://slidesmania.com/wp-content/uploads/2023/06/Daily-planner-plus-month-calendars-for-google-slides-and-powerpoint.jpg',
            demoLink: 'https://your-live-demo-link.com',
            codeLink: 'https://github.com/nidhisingh2004/DailyPlanner', 
          },
          ,
          {
              title: 'Tourist-Manager',
              description: 'A full-featured tourist management system designed for booking and managing travel tickets, accommodations, and related services. The system allows users to search for hotels, flights, trains, and make bookings with options for payment and receipt generation.',
              technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
              image: 'https://media.istockphoto.com/id/1289259699/vector/touristic-service-with-travel-company-manager.jpg?s=612x612&w=0&k=20&c=0psd7LkUVMRZmXhwxOdlD_NKC8moy7PsS1qEvMw0-v0=',
              demoLink: 'https://your-live-demo-link.com',
              codeLink: 'https://github.com/nidhisingh2004/Tourist-Manager',
            },
            ,
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
