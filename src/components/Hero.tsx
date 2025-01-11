import React from 'react';
import { ArrowRight, Linkedin } from 'lucide-react';
import sunitaImage from '../images/sunita-shrestha.jpg';

export default function Hero() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm Sunita Shrestha
              <span className="block mt-2 text-2xl md:text-3xl text-blue-600">
                Assistant Manager | International Client Handling | HR Specialist
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Bringing over 4+ years of expertise in managing international clients, 
              I'm passionate about fostering successful partnerships and delivering 
              exceptional outcomes. Let's connect and grow together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Let's Connect
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/sunita-shrestha-16b765219"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn Profile
              </a>
            </div>
          </div>
            <div className="flex-1 max-w-sm">
            <img
              src={sunitaImage}
              alt="Sunita Shrestha"
              className="rounded-full w-full shadow-2xl border-8 border-white"
            />
            </div>
        </div>
      </div>
    </div>
  );
}