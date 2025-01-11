import React from 'react';

const skills = [
  {
    title: "International Client Handling",
    description: "Managing relationships with diverse global clients"
  },
  {
    title: "Diversity Hiring",
    description: "Promoting inclusivity to foster organizational growth"
  },
  {
    title: "Recruitment Expertise",
    description: "Implementing strategic hiring processes"
  },
  {
    title: "Team Leadership",
    description: "Leading and mentoring teams to achieve organizational goals"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}