import React from 'react';

const skills = {
  'Frontend Development': [
    { name: 'React', level: 90 },
    { name: 'Vue.js', level: 85 },
    { name: 'TypeScript', level: 88 },
    { name: 'Tailwind CSS', level: 92 },
    {name:'Swift', level: 80},
    {nmae:'React Native', level: 70}
  ],

  'Backend Development': [
    { name: 'Node.js', level: 87 },
    { name: 'Python', level: 82 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'Node.js', level: 87 },
    { name: 'Python', level: 82 },
  ],
  'Tools & Others': [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 78 },
    { name: 'AWS', level: 75 },
    { name: 'CI/CD', level: 80 },
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 78 },
  ]
};

export default function Skills() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bento-grid">
        <div className="bento-item neu-shadow col-span-full">
          <h2 className="text-3xl font-bold text-indigo-600 mb-6" style={{ color: 'var(--text-primary)' }}>Skills</h2>
          <p className="text-gray-600 mb-4">
            A comprehensive overview of my technical skills and expertise levels in
            various technologies and tools.
          </p>
        </div>

        {Object.entries(skills).map(([category, categorySkills]) => (
          <div key={category} className="bento-item neu-shadow">
            <h3 className="text-xl font-semibold text-gray-700 mb-4" style={{ color: 'var(--text-primary)' }}>{category}</h3>
            <div className="space-y-4">
              {categorySkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">{skill.name}</span>
                    <span className="">{skill.level}%</span>
                  </div>
                  <div
                    className="skill-bar"
                    style={{ '--progress': `${skill.level}%` } as React.CSSProperties}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}