import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-blue-600 mb-6">A Leader in Client Handling and Human Resource Management</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            As an experienced  at Outpace Consulting, I specialize in handling 
            international ITES and US-based healthcare clients. My expertise lies in understanding 
            diverse client needs, streamlining processes, and ensuring seamless service delivery.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            I hold an MBA from Integral University, which complements my strategic approach to 
            client and human resource management. I'm also skilled in diversity hiring and recruiting, 
            helping organizations build inclusive and high-performing teams.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            When I'm not working, I enjoy exploring innovative HR practices, keeping up with 
            industry trends, and building lasting professional relationships.
          </p>
        </div>
      </div>
    </section>
  );
}