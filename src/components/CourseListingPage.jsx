import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ image, title, lessons, duration, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={image} alt={title} className="h-32 w-full object-cover" />
      <Link to="/course-details">
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-sm text-gray-800">{title}</h3>
        <div className="text-xs text-gray-500">
          <p>{lessons} Lessons</p>
          <p>{duration}</p>
        </div>
        
        <span className="text-blue-500 font-bold text-sm self-start bg-blue-100 px-2 py-1 rounded">
          {price}
        </span>
      </div>
        </Link>
    </div>
  );
};

const CourseList = ({ title, courses }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <Link to="/courses">
        <button className="text-blue-500 text-sm font-medium">View all</button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

const CourseListingPage = () => {
  const popularCourses = [
    {
      image: "https://th.bing.com/th/id/OIP.t4DWykvoRBCyFwEee7I9BQHaE8?pid=ImgDetMain",
      title: "Graphic Design Pro",
      lessons: "12",
      duration: "8 Hours",
      price: "$25",
    },
    {
      image: "https://th.bing.com/th/id/OIP.JQR9dhevkF8c9h_jnkydtQHaEH?pid=ImgDetMain",
      title: "UX/UI Essentials",
      lessons: "10",
      duration: "6 Hours",
      price: "$19",
    },
  ];

  const topRatedCourses = [
    {
      image: "https://cdn.class101.net/images/740aac08-2c67-472a-9c18-e60692626de8/1200x630",
      title: "Motion Graphics 101",
      lessons: "15",
      duration: "10 Hours",
      price: "$35",
    },
    {
      image: "https://th.bing.com/th/id/OIP._3vsw0NPxdxqjzcComa85wHaD4?pid=ImgDetMain",
      title: "Python Pro",
      lessons: "20",
      duration: "15 Hours",
      price: "$45",
    },
  ];

  return (
    <div className="p-4 bg-gray-50 ">
      <CourseList title="Popular Courses" courses={popularCourses} />
      <CourseList title="Top Rated Courses" courses={topRatedCourses} />
    </div>
  );
};

export default CourseListingPage;
