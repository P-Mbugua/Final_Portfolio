import React from 'react';
// import './Resume.css'; // Optional for any additional custom styles or Tailwind setup

const education = [
  { degree: 'Bachelor of Science in Computer Science', institution: 'University A', year: '2018-2022' },
  { degree: 'Master of Science in Software Engineering', institution: 'University B', year: '2022-2024' }
];

const experience = [
  { jobTitle: 'Front-End Developer', company: 'Company X', duration: '2022-Present', description: 'Worked on building and maintaining the front-end of web applications using React and other technologies.' },
  { jobTitle: 'Intern', company: 'Company Y', duration: '2021-2022', description: 'Assisted in developing features and fixing bugs in existing web applications.' }
];

const interests = [
  { interest: 'Technology Trends' },
  { interest: 'Open Source Projects' },
  { interest: 'Tech Meetups and Conferences' }
];

const hobbies = [
  { hobby: 'Coding Challenges' },
  { hobby: 'Reading Science Fiction' },
  { hobby: 'Playing the Guitar' }
];

const Education = () => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Education</h2>
    <div className="space-y-4">
      {education.map((edu) => (
        <div key={edu.degree} className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <p className="text-md text-gray-700">{edu.institution}</p>
          <p className="text-sm text-gray-500">{edu.year}</p>
        </div>
      ))}
    </div>
  </div>
);

const Experience = () => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Experience</h2>
    <div className="space-y-4">
      {experience.map((exp) => (
        <div key={exp.jobTitle} className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold">{exp.jobTitle}</h3>
          <p className="text-md text-gray-700">{exp.company}</p>
          <p className="text-sm text-gray-500">{exp.duration}</p>
          <p className="text-sm text-gray-600 mt-2">{exp.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const PersonalInterests = () => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Personal Interests</h2>
    <ul className="list-disc list-inside space-y-2">
      {interests.map((item) => (
        <li key={item.interest} className="text-md text-gray-700">{item.interest}</li>
      ))}
    </ul>
  </div>
);

const Hobbies = () => (
  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Hobbies</h2>
    <ul className="list-disc list-inside space-y-2">
      {hobbies.map((item) => (
        <li key={item.hobby} className="text-md text-gray-700">{item.hobby}</li>
      ))}
    </ul>
  </div>
);

const Resume = () => (
  <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <Education />
    <Experience />
    <PersonalInterests />
    <Hobbies />
  </div>
);

export default Resume;
