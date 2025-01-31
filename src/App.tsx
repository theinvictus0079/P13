import  { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Menu, X, Sun, Moon, Palette } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const themeMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (themeMenuRef.current && themeMenuRef?.current?.contains(event.target as Node)) {
        setThemeMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getThemeIcon = () => {
    switch (theme) {
      case 'dark':
        return <Moon size={24} />;
      case 'red':
        return <Palette size={24} />;
      default:
        return <Sun size={24} />;
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  const themeOptions = [
    { name: 'Light', value: 'light', icon: <Sun size={20} /> },
    { name: 'Dark', value: 'dark', icon: <Moon size={20} /> },
    { name: 'Red', value: 'red', icon: <Palette size={20} /> }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[var(--background)] neu-shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>alisha_codes</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              <div className="flex space-x-4">
                {['home', 'about', 'projects', 'skills', 'contact'].map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    data-page={page}
                    className={`nav-link capitalize ${
                      currentPage === page 
                        ? 'active' 
                        : 'hover:text-[var(--text-primary)]'
                    }`}
                    style={{ color: currentPage === page ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <div className="relative" ref={themeMenuRef}>
                <button
                  onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                  className="p-2 rounded-md neu-shadow hover:text-[var(--text-primary)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {getThemeIcon()}
                </button>
                {themeMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md neu-shadow bg-[var(--background)]">
                    <div className="py-1">
                      {themeOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setTheme(option.value);
                            setThemeMenuOpen(false);
                          }}
                          className="w-full px-4 py-2 text-left flex items-center gap-2 hover:text-[var(--text-primary)]"
                          style={{ color: theme === option.value ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                        >
                          {option.icon}
                          {option.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <div className="relative" ref={themeMenuRef}>
                <button
                  onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                  className="p-2 rounded-md neu-shadow"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {getThemeIcon()}
                </button>
                {themeMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md neu-shadow bg-[var(--background)]">
                    <div className="py-1">
                      {themeOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setTheme(option.value);
                            setThemeMenuOpen(false);
                          }}
                          className="w-full px-4 py-2 text-left flex items-center gap-2 hover:text-[var(--text-primary)]"
                          style={{ color: theme === option.value ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                        >
                          {option.icon}
                          {option.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 rounded-md neu-shadow"
                style={{ color: 'var(--text-secondary)' }}
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'skills', 'contact'].map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    setMenuOpen(false);
                  }}
                  data-page={page}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium capitalize ${
                    currentPage === page ? 'neu-pressed' : ''
                  }`}
                  style={{ color: currentPage === page ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-8">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-[var(--background)] neu-shadow ">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-center space-x-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[var(--text-primary)]"
            style={{ color: 'var(--text-secondary)' }}
          >
            <Github size={24} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[var(--text-primary)]"
            style={{ color: 'var(--text-secondary)' }}
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:contact@example.com" 
            className="hover:text-[var(--text-primary)]"
            style={{ color: 'var(--text-secondary)' }}
          >
            <Mail size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;