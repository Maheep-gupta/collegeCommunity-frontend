import React from 'react';

const CourseOverview = () => {
  const highlights = [
    'Understand the fundamentals of Java',
    'Master OOP concepts with real-world examples',
    'Learn how to work with arrays, strings, and collections',
    'Build a mini project to apply your skills',
    'Get interview-ready with common coding questions',
  ];

  return (
    <div className="max-w-3xl mx-auto pt-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Java Mastery Course</h2>
        <p className="text-sm text-gray-600">by John Instructor • 8 hours total</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Course Description</h3>
        <p className="text-gray-800">
          This course is designed for both beginners and intermediate learners who want to
          master Java from scratch. Whether you're preparing for interviews or building a
          solid foundation in object-oriented programming, this course will guide you every
          step of the way.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">What you’ll learn</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-800">
          {highlights.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseOverview;
