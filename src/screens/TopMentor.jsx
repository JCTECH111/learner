import React from "react";
import { Link } from "react-router-dom";
import {  FaRegCommentDots, FaPhoneAlt, FaArrowLeft } from "react-icons/fa";

const TopMentor = () => {
  const mentors = [
    {
      name: "Aadil Auriz",
      title: "UX Designer",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Asif Abbas",
      title: "Web Developer",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Atif Ahsan",
      title: "Mobile App Developer",
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Badr Ehsan",
      title: "Graphic Designer",
      image: "https://i.pravatar.cc/150?img=4",
    },
    {
      name: "Dania Syed",
      title: "Product Manager",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Ehsan Khan",
      title: "Digital Marketer",
      image: "https://i.pravatar.cc/150?img=6",
    },
    {
      name: "Fahad Mustafa",
      title: "Data Scientist",
      image: "https://i.pravatar.cc/150?img=7",
    },
    {
      name: "Gulzar Ahmed",
      title: "Backend Developer",
      image: "https://i.pravatar.cc/150?img=8",
    },
    {
      name: "Hania Malik",
      title: "Content Creator",
      image: "https://i.pravatar.cc/150?img=9",
    },
    {
      name: "Imran Bilal",
      title: "Machine Learning Engineer",
      image: "https://i.pravatar.cc/150?img=10",
    },
    {
      name: "Javeria Shah",
      title: "Blockchain Developer",
      image: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "Kashif Raza",
      title: "AI Specialist",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Laiba Tariq",
      title: "Cybersecurity Analyst",
      image: "https://i.pravatar.cc/150?img=13",
    },
    {
      name: "Moin Yousuf",
      title: "Software Tester",
      image: "https://i.pravatar.cc/150?img=14",
    },
    {
      name: "Naila Ahmed",
      title: "Cloud Architect",
      image: "https://i.pravatar.cc/150?img=15",
    },
    {
      name: "Omar Saleem",
      title: "System Administrator",
      image: "https://i.pravatar.cc/150?img=16",
    },
    {
      name: "Pervaiz Khan",
      title: "Mobile UI/UX Designer",
      image: "https://i.pravatar.cc/150?img=17",
    },
    {
      name: "Quratul Ain",
      title: "Video Editor",
      image: "https://i.pravatar.cc/150?img=18",
    },
    {
      name: "Rashid Ali",
      title: "Game Developer",
      image: "https://i.pravatar.cc/150?img=19",
    },
    {
      name: "Saima Noor",
      title: "Frontend Developer",
      image: "https://i.pravatar.cc/150?img=20",
    },
  ];
  

  return (
    <div>
      {/* Top Header */}
      <div className="items-center p-4 flex gap-[6rem]">
        <Link to="/home">
          <FaArrowLeft size={20} />
        </Link>
        <h2 className="text-2xl font-bold mb-4">Top Mentors</h2>
      </div>

      {/* Mentors List */}
      <div className="bg-white rounded-lg p-4 space-y-4">
        {mentors.map((mentor, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {/* Mentor Image */}
              <img
                src={mentor.image}
                alt={mentor.name}
                className="h-[3rem] w-[3rem] rounded-full object-cover"
              />
              {/* Mentor Info */}
              <div>
                <h3 className="font-medium">{mentor.name}</h3>
                <p className="text-sm text-gray-500">{mentor.title}</p>
              </div>
            </div>

            {/* Mentor Actions */}
            <div className="flex gap-3">
              <FaPhoneAlt className="text-blue-500 text-2xl cursor-pointer" />
              <FaRegCommentDots className="text-blue-500 text-2xl cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopMentor;
