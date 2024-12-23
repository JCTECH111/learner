import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white p-4 rounded-lg ">
      <h3 className="text-lg font-bold">About Course</h3>
      <p className="text-sm text-gray-600 mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
      </p>
      <div className="flex items-center mt-4">
        <img
          src="https://th.bing.com/th/id/OIP._8Kty4btP3aJuyTfZTaR0wHaHk?w=183&h=187&c=7&pcl=1b1a19&r=0&o=5&pid=1.7"
          alt="Instructor"
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <h4 className="text-sm font-bold">Badr Ehsan</h4>
          <p className="text-sm text-gray-500">UX/UI Designer</p>
        </div>
      </div>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg font-bold">
        Enroll Course $75.00
      </button>
    </div>
  );
};

export default AboutPage;
