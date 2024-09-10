import React from 'react';

const Biography = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 p-10 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-8 text-center text-gray-100">Peter Mbugua Ngumi</h1>

        {/* Early Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-100 border-b-2 border-teal-400 pb-2">Early Life</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I was born on March 08, 2003, in the vibrant city of Kiambu. Growing up in a diverse environment, I was always fascinated by technology and its potential to transform lives. My early years were marked by curiosity and a desire to understand how things work, from building simple gadgets to exploring computer software.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            My parents encouraged my interests, providing me with educational resources and support. By the age of 10, I was already dabbling in basic programming, thanks to a local coding camp that sparked my passion for software development.
          </p>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-100 border-b-2 border-teal-400 pb-2">Education</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I pursued a Certificaion in FullStack Development at Moringa School, graduating in October 2024. During my academic years, I excelled in various subjects including algorithms, data structures, and software engineering principles. My final year project, which involved developing a web-based application for local businesses, was highly praised by faculty and industry professionals.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            In addition to my formal education, I attended several workshops and bootcamps to stay updated with emerging technologies. Notable among these was a workshop on Full Stack Development which greatly enhanced my skills in both front-end and back-end technologies.
          </p>
        </section>

        {/* Career Milestones Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-100 border-b-2 border-teal-400 pb-2">Career Milestones</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            After graduation, I began my career as a Junior Software Developer at ABC Tech Solutions. Over the past few years, I've worked on diverse projects, from developing e-commerce platforms to creating custom software solutions for clients. My role involved collaborating with cross-functional teams, solving complex technical problems, and continuously learning new technologies.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Some of my key achievements in this role include:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Developed a high-traffic e-commerce website that increased client sales by 30%.</li>
            <li>Led a team of developers in creating a CRM system that streamlined client interactions and improved efficiency.</li>
            <li>Implemented a series of performance optimizations that reduced application load time by 50%.</li>
          </ul>
        </section>

        {/* Achievements & Awards Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-100 border-b-2 border-teal-400 pb-2">Achievements & Awards</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            My dedication and hard work have been recognized in various ways:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Awarded "Best Junior Developer" at ABC Tech Solutions in 2019.</li>
            <li>Completed the "Advanced Full Stack Development" certification with distinction in 2020.</li>
            <li>Contributed to open-source projects that have received positive feedback from the developer community.</li>
          </ul>
        </section>

        {/* Personal Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-100 border-b-2 border-teal-400 pb-2">Personal Life</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Outside of my professional life, I enjoy a range of activities that keep me balanced and motivated. I am an avid reader, particularly of science fiction and technology-related books. I also love exploring new places, whether it's a weekend hike or an international travel adventure.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I actively participate in local tech meetups and hackathons, which help me stay connected with the tech community and continually challenge myself with new projects and ideas.
          </p>
        </section>

        {/* Looking Ahead Section */}
        <section>
          <h2 className="text-3xl font-bold mb-4 text-gray-100 border-b-2 border-teal-400 pb-2">Looking Ahead</h2>
          <p className="text-gray-300 leading-relaxed">
            As I look to the future, I am excited about the endless possibilities in technology and software development. I am committed to ongoing learning and professional growth, aiming to make significant contributions to the field and continue delivering innovative solutions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Biography;
