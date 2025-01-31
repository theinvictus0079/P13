import { ArrowRight, Code, Terminal, Laptop, Coffee, Brain } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="bento-grid">
        <div className="bento-item neu-shadow col-span-full md:col-span-2">
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>alisha_codes</h1>
          <h2 className="text-2xl mb-6" style={{ color: 'var(--text-secondary)' }}>Full Stack Developer</h2>
          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            Crafting digital experiences with code and creativity. Specialized in building
            modern web applications with cutting-edge technologies.
          </p>
          <button 
            onClick={() => (document.querySelector('button[data-page="projects"]') as HTMLButtonElement)?.click()}
            className="neu-shadow px-6 py-3 rounded-lg hover:text-[var(--text-primary)] flex items-center gap-2"
            style={{ color: 'var(--text-secondary)' }}
          >
            View Projects <ArrowRight size={20} />
          </button>
        </div>

        <div className="bento-item neu-shadow">
          <Terminal size={32} className="mb-4" style={{ color: 'var(--text-primary)' }} />
          <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>Clean Code</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            Writing elegant, maintainable, and efficient code is my passion.
            to be honest i can not live without my laptop 😊
          </p>
        </div>

        <div className="bento-item neu-shadow">
          <Code size={32} className="mb-4" style={{ color: 'var(--text-primary)' }} />
          <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>Modern Stack</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            Leveraging the latest technologies to build powerful applications.
          </p>
        </div>
        <div className="bento-item neu-shadow md:col-span-2">
          <Brain className="mb-4" style={{ color: 'var(--text-primary)' }} />
          <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>Modern Stack</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
          Software Development Engineers (SDEs) drive innovation by creating applications, systems, and platforms that power businesses, enhance communication, automate tasks, and improve efficiency, shaping the digital world and transforming industries globally.
          </p>
        </div>



       

        <div className="bento-item neu-shadow">
          <Laptop size={32} className="mb-4" style={{ color: 'var(--text-primary)' }} />
          <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>Responsive Design</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            Creating beautiful interfaces that work on any device.
          </p>
        </div>

        <div className="bento-item neu-shadow md:col-span-2">
          <Coffee size={32} className="mb-4" style={{ color: 'var(--text-primary)' }} />
          <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>Always Learning</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            Constantly exploring new technologies and best practices.
          </p>
        </div>

        
      </div>
    </div>
  );
}