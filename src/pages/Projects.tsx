
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
    tags: ['Vue.js', 'Firebase', 'Tailwind'],
    github: 'https://github.com',
    demo: 'https://example.com'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website with neumorphic design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'Tailwind', 'Vite'],
    github: 'https://github.com',
    demo: 'https://example.com'
  }
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="bento-grid">
        <div className="bento-item neu-shadow col-span-full">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6"style={{ color: 'var(--text-primary)' }}>Projects</h2>
          <p className="text-gray-600 mb-4">
            Here are some of my recent projects. Each one represents a unique challenge
            and learning experience.
          </p>
        </div>

        {projects.map((project, index) => (
          <div key={index} className="bento-item neu-shadow">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4" >
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 text-sm text-indigo-600 neu-shadow rounded-full"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600"
              >
                <Github size={20} /> Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-indigo-600"
              >
                <ExternalLink size={20} /> Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}