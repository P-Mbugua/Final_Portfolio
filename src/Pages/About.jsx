import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto xl:mt-2  px-6 py-12 bg-gray-50 rounded-lg shadow-lg max-w-4xl border border-gray-300">
      
      {/* Main Title */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">About Me</h1>
        <p className="mt-4 text-lg text-gray-700">
          Hi there! I’m Peter Mbugua, a dedicated Junior software engineer with a deep-seated passion for building innovative and efficient web applications. My journey in technology has been fueled by a relentless curiosity and a drive to solve complex problems. With expertise in JavaScript, React, Python and more, I strive to deliver robust solutions that make a tangible difference in the digital landscape.
        </p>
      </header>

     
      {/* Professional Experience */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 border-b-2 border-teal-400 pb-2">Professional Experience</h2>
        <p className="text-lg text-gray-600 mb-4">
          Over the time, I’ve honed my skills through various roles in different environments. I’ve led development teams, architected scalable systems, and driven projects from conception to deployment. My experience includes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><strong>Lead Developer at School Groups</strong>: Spearheaded the development of a high-performance web application that increased user engagement by 20%.</li>
          <li><strong>Junior Developer at Techran</strong>: Managed a team of developers to build a cloud-based solution, resulting in a 5% reduction in operational costs.</li>
          <li><strong>Junior Developer at Hexaq</strong>: Developed and maintained multiple applications, optimizing code and enhancing functionality to meet evolving business needs.</li>
        </ul>
      </section>

     
      {/* Achievements */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 border-b-2 border-teal-400 pb-2">Achievements</h2>
        <p className="text-lg text-gray-600 mb-4">
          Throughout my career, I have achieved several milestones that reflect my commitment to excellence and innovation. Some of my key accomplishments include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><strong>Architected a High-Traffic E-Commerce Platform</strong>: Designed a scalable architecture that supports concurrent users, ensuring 99.9% uptime.</li>
          <li><strong>Open-Source Contribution</strong>: Played a pivotal role in the development of a popular open-source library, contributing features and bug fixes that significantly improved the tool.</li>
          <li><strong>Industry Recognition</strong>: Received the Awards  for outstanding contributions to web development and innovation in 2024.</li>
        </ul>
      </section>

     
      {/* Personal Interests */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 border-b-2 border-teal-400 pb-2">Personal Interests</h2>
        <p className="text-lg text-gray-600 mb-4">
          When I’m not coding, I enjoy engaging in activities that fuel my creativity and personal growth. Some of my interests include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><strong>Technology Exploration</strong>: I am always eager to explore new technologies and frameworks, and I love experimenting with emerging tools to stay ahead in the tech world.</li>
          <li><strong>Community Involvement</strong>: Actively participate in tech meetups, hackathons, and contribute to local tech communities. Sharing knowledge and learning from others is something I value deeply.</li>
          <li><strong>Hobbies</strong>: In my free time, I enjoy reading tech blogs, traveling to new places, and practicing photography to capture the beauty of the world around me.</li>
        </ul>
      </section>

      
      {/* Values & Philosophy */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 border-b-2 border-teal-400 pb-2">Values & Philosophy</h2>
        <p className="text-lg text-gray-600 mb-4">
          My work is guided by a set of core values and principles:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><strong>Commitment to Quality</strong>: I believe in delivering high-quality code and solutions that not only meet but exceed expectations.</li>
          <li><strong>Continuous Learning</strong>: Embracing a mindset of lifelong learning helps me stay current with industry trends and enhances my problem-solving abilities.</li>
          <li><strong>Collaboration</strong>: Effective teamwork and open communication are essential for success. I value collaboration and strive to create an environment where ideas can flourish.</li>
        </ul>
      </section>

      
      {/* Future Goals */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800 border-b-2 border-teal-400 pb-2">Future Goals</h2>
        <p className="text-lg text-gray-600 mb-4">
          Looking ahead, I am excited about the future and the possibilities it holds. My goals include:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li><strong>Innovation</strong>: To continue exploring and implementing innovative solutions that push the boundaries of technology.</li>
          <li><strong>Leadership</strong>: To take on more leadership roles, mentoring and guiding the next generation of developers to achieve their full potential.</li>
          <li><strong>Personal Growth</strong>: To maintain a balance between personal and professional growth, ensuring a fulfilling and rewarding career journey.</li>
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



