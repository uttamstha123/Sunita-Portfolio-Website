import React from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "MBA",
    institution: "Integral University, Lucknow",
    period: "August 2017 – October 2019"
  },
  {
    degree: "BBA",
    institution: "RAMA Degree College, Lucknow",
    period: "June 2013 – August 2016"
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-blue-600">{edu.institution}</p>
                  <p className="text-gray-600">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}