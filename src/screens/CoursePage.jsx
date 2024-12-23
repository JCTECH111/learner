import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ image, title, instructor, rating, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <Link to="/course-details">
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
        <p className="text-xs text-gray-500 mt-1">{instructor}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-xs text-yellow-500">{rating} ⭐</span>
          <span className="text-sm font-medium text-blue-500">{price}</span>
        </div>
      </div>
      </Link>
    </div>
  );
};

const CoursesPage = () => {
  const courses = [
    {
      image: "https://images.pexels.com/photos/3184163/pexels-photo-3184163.jpeg",
      title: "Graphic Design Pro",
      instructor: "Jane Doe",
      rating: "4.8",
      price: "$25",
    },
    {
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg",
      title: "UX/UI Essentials",
      instructor: "John Smith",
      rating: "4.7",
      price: "$30",
    },
    {
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      title: "Motion Graphics 101",
      instructor: "Emily Brown",
      rating: "4.9",
      price: "$40",
    },
    {
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
      title: "Python Programming",
      instructor: "Michael Johnson",
      rating: "4.6",
      price: "$35",
    },
    {
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
      title: "Digital Marketing",
      instructor: "Sarah White",
      rating: "4.7",
      price: "$29",
    },
    {
      image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg",
      title: "Photography Basics",
      instructor: "Daniel Black",
      rating: "4.5",
      price: "$20",
    },
    {
      image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg",
      title: "Web Development Bootcamp",
      instructor: "Jessica Green",
      rating: "4.8",
      price: "$50",
    },
    {
      image: "https://images.pexels.com/photos/4491467/pexels-photo-4491467.jpeg",
      title: "Data Science Mastery",
      instructor: "David Clark",
      rating: "4.9",
      price: "$60",
    },
    {
      image: "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg",
      title: "Creative Writing",
      instructor: "Anna White",
      rating: "4.4",
      price: "$18",
    },
    {
      image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg",
      title: "Project Management",
      instructor: "Robert Lee",
      rating: "4.6",
      price: "$35",
    },
    {
      image: "https://images.pexels.com/photos/159657/pexels-photo-159657.jpeg",
      title: "3D Animation Basics",
      instructor: "Laura Wilson",
      rating: "4.7",
      price: "$40",
    },
    {
      image: "https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg",
      title: "SEO Strategies",
      instructor: "Karen Brooks",
      rating: "4.5",
      price: "$22",
    },
    {
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
      title: "Illustration Techniques",
      instructor: "Chloe Anderson",
      rating: "4.6",
      price: "$28",
    },
    {
      image: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg",
      title: "Mobile App Development",
      instructor: "Mark Harris",
      rating: "4.9",
      price: "$55",
    },
    {
      image: "https://images.pexels.com/photos/3184326/pexels-photo-3184326.jpeg",
      title: "Public Speaking Mastery",
      instructor: "Sophia Carter",
      rating: "4.8",
      price: "$30",
    },
  ];

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">All Courses</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
