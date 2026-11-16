// src/sections/Projects.jsx
import { useState } from 'react';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterOptions = ['All', 'Java', 'React.js'];

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'All') return true;
    return project.techStack.some(tech => tech.toLowerCase().includes(activeFilter.toLowerCase()));
  });

  return (
    <section id="projects" className="py-16 border-t border-slate-200 dark:border-slate-800">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Hands-on full-stack and frontend systems built during my learning journey.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2">
          {filterOptions.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
            liveDemoUrl={project.liveDemoUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;