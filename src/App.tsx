import React from 'react';
import { Linkedin } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Sunita Shrestha
            </span>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600">Experience</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600">Skills</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/sunita-shrestha-16b765219" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Testimonials />
        <Contact />
      </main>

      <footer className="bg-white border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">© 2024 Sunita Shrestha. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;