import React from 'react';
import { Building2 } from 'lucide-react';

const experiences = [
  {
    title: " - International Client Handling",
    company: "Outpace Consulting",
    period: "August 2022 – Present",
    location: "Lucknow, India",
    responsibilities: [
      "Successfully manage relationships with international ITES and US-based healthcare clients.",
      "Act as the primary liaison between clients and internal teams, ensuring clear communication and efficient operations."
    ]
  },
  {
    title: "Human Resources Lead",
    company: "Outpace Consulting",
    period: "August 2021 – July 2022",
    location: "Lucknow, India",
    responsibilities: [
      "Led HR initiatives with a focus on diversity hiring and process optimization.",
      "Developed and implemented recruitment strategies to attract top-tier talent."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-gray-600 mb-4">{exp.period} | {exp.location}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}