import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Sunita has an incredible knack for understanding client needs and delivering beyond expectations. Her professionalism and dedication are unmatched!",
    author: "A satisfied client"
  },
  {
    quote: "Working with Sunita has been an inspiring experience. Her leadership and strategic insights have significantly impacted our team's success.",
    author: "A colleague"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg relative">
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              <p className="text-gray-600 mb-4 italic">{testimonial.quote}</p>
              <p className="text-blue-600 font-medium">– {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}