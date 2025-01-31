
import { BookOpen, Coffee, Code, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
      <div className="bento-grid">
        <div className="bento-item neu-shadow col-span-full md:col-span-2">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6" style={{ color: 'var(--text-primary)' }}>About Me</h2>
          <p className="text-gray-600 mb-4">
            I'm a passionate software developer with 5+ years of experience in building
            web applications. I love turning complex problems into simple, beautiful,
            and intuitive solutions.
          </p>
          <p className="text-gray-600">
            When I'm not coding, you can find me exploring new technologies, contributing
            to open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>

        <div className="bento-item neu-shadow">
          <Code size={32} style={{ color: 'var(--text-primary)' }} className=" mb-4" />
          <h3 className="text-xl font-semibold  mb-2">Development</h3>
          <p className="text-gray-600">
            Specialized in full-stack development using modern technologies and best practices.
          </p>
        </div>

        <div className="bento-item neu-shadow">
          <Globe style={{ color: 'var(--text-primary)' }} size={32} className=" mb-4" />
          <h3 className="text-xl font-semibold  mb-2">Experience</h3>
          <p className="text-gray-600">
            Worked with clients worldwide, delivering high-quality software solutions.
          </p>
        </div>

        <div className="bento-item neu-shadow">
          <BookOpen style={{ color: 'var(--text-primary)' }} size={32} className=" mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Education</h3>
          <p className="text-gray-600">
            BS in Computer Science
            <br />
            Multiple certifications in web development
          </p>
        </div>

        <div className="bento-item neu-shadow">
          <Coffee style={{ color: 'var(--text-primary)' }} size={32} className="text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Interests</h3>
          <p className="text-gray-600">
            Open source contribution
            <br />
            Tech blogging
            <br />
            UI/UX design
          </p>
        </div>
      </div>
    </div>
  );
}