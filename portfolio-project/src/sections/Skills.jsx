// src/sections/Skills.jsx
import { skillsData } from '../data/skills';
import { Server, Layout, Database, Wrench, CheckCircle2 } from 'lucide-react';

function Skills() {
  const categories = [
    {
      title: "Backend & Java Architecture",
      type: "Backend",
      icon: <Server size={20} className="text-blue-500" />,
      description: "Server-side logic, enterprise frameworks, and database persistence."
    },
    {
      title: "Frontend Engineering",
      type: "Frontend",
      icon: <Layout size={20} className="text-blue-500" />,
      description: "Interactive single-page applications and modern responsive interfaces."
    },
    {
      title: "Databases & Development Tools",
      type: ["Database", "Tools"],
      icon: <Database size={20} className="text-blue-500" />,
      description: "Data storage, version control workflows, and developer tooling."
    }
  ];

  return (
    <section id="skills" className="py-16 border-t border-slate-200 dark:border-slate-800">
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Technical Skills & Ecosystem
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          A breakdown of my full-stack capabilities across server architecture, web interfaces, and databases.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => {
          // Filter skills belonging to this specific card
          const currentSkills = skillsData.filter(skill => 
            Array.isArray(cat.type) 
              ? cat.type.includes(skill.category) 
              : skill.category === cat.type
          );

          return (
            <div 
              key={idx} 
              className="p-6 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Header of Category Card */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900">
                    {cat.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                    {cat.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                  {cat.description}
                </p>

                {/* Skill Badges List */}
                <ul className="space-y-2.5">
                  {currentSkills.map(skill => (
                    <li 
                      key={skill.id} 
                      className="flex items-center gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;