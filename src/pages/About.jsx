import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* About Us Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          ABOUT US
        </h2>
        <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
      </div>

      {/* Who We Are Section */}
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">WHO WE ARE</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Image or Content */}
          <div className="flex items-center justify-center">
            <div className="bg-gray-200 h-64 w-full rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Company Image</span>
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-600 mb-4">
              We are a passionate team dedicated to delivering exceptional solutions for our clients. 
              Our expertise spans across multiple industries with a focus on innovation and quality.
            </p>
            <p className="text-gray-600 mb-4">
              Founded in 2020, we've grown from a small startup to a trusted partner for businesses 
              looking to transform their digital presence.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Innovative Solutions</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Experienced Team</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Customer Focused</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Optional Stats Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { number: '50+', label: 'Projects Completed' },
          { number: '100%', label: 'Client Satisfaction' },
          { number: '24/7', label: 'Support Available' }
        ].map((stat, index) => (
          <div key={index} className="bg-blue-600 text-white p-6 rounded-lg text-center">
            <p className="text-4xl font-bold">{stat.number}</p>
            <p className="mt-2 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;