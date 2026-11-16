// src/components/Navbar.jsx
import { Moon, Sun } from 'lucide-react';

function Navbar({ isDarkMode, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          Portfolio<span className="text-blue-600">.</span>
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <li>
              <a href="#hero" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;