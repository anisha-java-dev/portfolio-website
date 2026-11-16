// src/sections/Hero.jsx
import { Mail, FileText, ArrowRight, Code2, Layers } from 'lucide-react';

function Hero() {
  return (
    <section id="hero" className="py-20 md:py-28 flex flex-col items-start justify-center">
      {/* Role Badge */}
      <div className="flex items-center gap-2 px-3.5 py-1.5 mb-4 text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/60 rounded-full border border-blue-200 dark:border-blue-900 shadow-sm">
        <Code2 size={15} />
        <span>Java Full Stack Developer</span>
      </div>

      {/* Large Name Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">Anisha Chavan</span> 👋
      </h1>

     {/* Secondary Headline (Refined & Smaller) */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-slate-600 dark:text-slate-300 leading-snug">
        Building scalable Java backends <br className="hidden sm:inline" />
        & interactive <span className="text-blue-600 dark:text-blue-400 font-bold">React applications</span>.
      </h2>

      {/* Crisp, Professional Bio Description */}
      <p className="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
        Full Stack Developer focused on developing reliable Java backends and clean, 
        responsive interfaces with React. Passionate about turning complex business 
        requirements into seamless web applications.
      </p>

      {/* Core Tech Stack Badges */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          <Layers size={13} className="text-blue-500" /> Java / OOPs
        </span>
        <span className="px-3 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          Spring
        </span>
        <span className="px-3 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          Hibernate / JDBC
        </span>
        <span className="px-3 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          Servlets & JSP
        </span>
        <span className="px-3 py-1 text-xs font-medium rounded-md bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 font-semibold">
          React.js
        </span>
        <span className="px-3 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          JavaScript (ES6+)
        </span>
        <span className="px-3 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          SQL
        </span>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors shadow-sm cursor-pointer"
        >
          View Full Stack Projects
          <ArrowRight size={16} />
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm transition-colors cursor-pointer"
        >
          Contact Me
        </a>
      </div>

      {/* Social Links & Resume */}
      <div className="mt-10 flex items-center gap-5 text-slate-500 dark:text-slate-400">
        {/* GitHub SVG */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Profile"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </a>

        {/* LinkedIn SVG */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn Profile"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
          </svg>
        </a>

        {/* Email */}
        <a
          href="#contact"
          aria-label="Email Me"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Mail size={20} />
        </a>

        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          aria-label="Resume PDF"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-l border-slate-300 dark:border-slate-700 pl-5"
        >
          <FileText size={16} />
          Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;