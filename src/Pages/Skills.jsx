import React from 'react';

const skills = [
  { category: 'HTML/CSS', skills: [
    { name: 'Semantic HTML', percentage: 90 },
    { name: 'CSS Flexbox and Grid', percentage: 85 },
    { name: 'Responsive Design', percentage: 80 },
    { name: 'Sass', percentage: 60 }
  ]},
  { category: 'JavaScript', skills: [
    { name: 'ES6+ Features', percentage: 80 },
    { name: 'Asynchronous Programming', percentage: 70 },
    { name: 'DOM Manipulation', percentage: 75 },
    { name: 'Event Handling', percentage: 70 }
  ]},
  { category: 'React', skills: [
    { name: 'Functional Components', percentage: 75 },
    { name: 'State and Props', percentage: 70 },
    { name: 'React Hooks', percentage: 65 },
    { name: 'Component Lifecycle', percentage: 60 }
  ]},
  { category: 'Version Control', skills: [
    { name: 'Git & GitHub', percentage: 80 },
    { name: 'Branching and Merging', percentage: 70 },
    { name: 'Pull Requests and Code Reviews', percentage: 65 }
  ]},
  { category: 'Build Tools & Package Managers', skills: [
    { name: 'npm or yarn', percentage: 75 },
    { name: 'Webpack or Vite', percentage: 65 },
    { name: 'Task Runners', percentage: 60 }
  ]},
  { category: 'Testing', skills: [
    { name: 'Basic Testing Principles', percentage: 60 },
    { name: 'Jest or React Testing Library', percentage: 55 }
  ]},
  { category: 'APIs', skills: [
    { name: 'API Requests', percentage: 70 },
    { name: 'RESTful Principles', percentage: 65 },
    { name: 'JSON', percentage: 70 }
  ]},
  { category: 'Problem-Solving & Debugging', skills: [
    { name: 'Debugging Techniques', percentage: 75 },
    { name: 'Problem-Solving Skills', percentage: 80 }
  ]},
  { category: 'Soft Skills', skills: [
    { name: 'Communication and Teamwork', percentage: 85 },
    { name: 'Time Management', percentage: 80 },
    { name: 'Willingness to Learn', percentage: 90 }
  ]}
];

const ProgressBar = ({ percentage }) => (
  <div className="relative pt-1">
    <div className="flex items-center justify-between mb-1">
      <span className="text-sm font-medium text-gray-600">{percentage}%</span>
    </div>
    <div className="relative flex h-2 overflow-hidden rounded-full bg-gray-200">
      <div
        className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white transition-all duration-300"
        style={{ width: `${percentage}%`, backgroundColor: '#1D4ED8' }}
      />
    </div>
  </div>
);

const Skills = () => (
  <div className="p-8 bg-gray-50 min-h-screen">
    <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">Technical Skills</h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skillCategory) => (
        <div key={skillCategory.category} className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">{skillCategory.category}</h3>
          <ul className="space-y-4">
            {skillCategory.skills.map((skill) => (
              <li key={skill.name} className="flex items-center justify-between">
                <span className="text-md font-medium text-gray-800">{skill.name}</span>
                <div className="w-2/3">
                  <ProgressBar percentage={skill.percentage} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
