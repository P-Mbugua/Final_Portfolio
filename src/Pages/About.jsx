import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto xl:mt-2 px-6 py-12 bg-gray-50 rounded-lg shadow-lg max-w-4xl border border-gray-300">
      
      {/* Main Title */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">About Me</h1>
        <p className="mt-4 text-lg text-gray-700">
          Hello! I’m Peter Mbugua, a passionate Junior Developer eager to make my mark in the world of software engineering. With a solid foundation in JavaScript, React, and Python, I am enthusiastic about building dynamic web applications and continuously learning new technologies to enhance my skills and deliver impactful solutions.
        </p>
      </header>

      {/* Professional Experience */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 border-b-2 border-teal-400 pb-2">Professional Experience</h2>
        <p className="text-lg text-gray-600 mb-4">
          As a Junior Developer, I have been gaining valuable experience through various projects and internships. My journey so far includes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><strong>Intern at Techran</strong>: Assisted in developing and maintaining web applications, gaining hands-on experience with JavaScript and React.</li>
          <li><strong>Freelance Projects</strong>: Worked on several freelance projects, including building responsive websites and web applications for local businesses.</li>
          <li><strong>University Projects</strong>: Participated in university projects involving full-stack development, contributing to both front-end and back-end tasks.</li>
        </ul>
      </section>

      {/* Achievements */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 border-b-2 border-teal-400 pb-2">Achievements</h2>
        <p className="text-lg text-gray-600 mb-4">
          Although early in my career, I have achieved several milestones that showcase my dedication and growth:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><strong>Completed Full-Stack Development Bootcamp</strong>: Successfully finished an intensive bootcamp that covered full-stack development skills, including JavaScript, React, and Python.</li>
          <li><strong>Developed Personal Projects</strong>: Created and deployed multiple personal projects, such as a portfolio website and a task management app, to demonstrate my skills and creativity.</li>
          <li><strong>Active Participation in Coding Challenges</strong>: Regularly participate in online coding challenges and hackathons to sharpen problem-solving skills and learn new technologies.</li>
        </ul>
      </section>

      {/* Personal Interests */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 border-b-2 border-teal-400 pb-2">Personal Interests</h2>
        <p className="text-lg text-gray-600 mb-4">
          Outside of coding, I enjoy activities that foster personal growth and creativity:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><strong>Tech Exploration</strong>: Passionate about exploring new technologies and tools to stay updated with the latest trends in software development.</li>
          <li><strong>Community Engagement</strong>: Actively involved in local tech communities and online forums to connect with fellow developers and learn from their experiences.</li>
          <li><strong>Hobbies</strong>: Enjoy reading tech blogs, attending tech meetups, and engaging in outdoor activities like hiking and photography.</li>
        </ul>
      </section>

      {/* Values & Philosophy */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 border-b-2 border-teal-400 pb-2">Values & Philosophy</h2>
        <p className="text-lg text-gray-600 mb-4">
          My approach to work is guided by a few core principles:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><strong>Commitment to Learning</strong>: I am dedicated to continuous learning and improving my skills to stay relevant and excel in the tech industry.</li>
          <li><strong>Attention to Detail</strong>: I focus on delivering high-quality work and pay close attention to details to ensure the best user experience.</li>
          <li><strong>Team Collaboration</strong>: Value collaboration and believe that effective communication and teamwork lead to the best results.</li>
        </ul>
      </section>

      {/* Future Goals */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 border-b-2 border-teal-400 pb-2">Future Goals</h2>
        <p className="text-lg text-gray-600 mb-4">
          Looking ahead, I am excited to pursue the following goals:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><strong>Skill Enhancement</strong>: To deepen my expertise in emerging technologies and frameworks to enhance my development skills.</li>
          <li><strong>Career Advancement</strong>: To progress into more advanced development roles and take on challenging projects that push my limits.</li>
          <li><strong>Network Building</strong>: To expand my professional network by connecting with industry experts and participating in collaborative projects.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <a
          href="mailto:pmbugua276@gmail.com"
          className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default About;
