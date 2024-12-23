import React from 'react';
import BottomNavBar from '../components/BottomNavBar'
import { Link } from 'react-router-dom'
import Joecode from "../assets/joecode.JPG"
import { FaChevronRight, FaSignOutAlt, FaUser, FaShieldAlt, FaHeart, FaCogs, FaLock, FaQuestionCircle, FaShareAlt } from 'react-icons/fa';

const MyProfile = () => {
  const options = [
    { title: 'Edit Profile', icon: <FaUser />, route: '/edit-profile' },
    { title: 'My Favorites', icon: <FaHeart />, route: '/favorites' },
    { title: 'Payment Method', icon: <FaCogs />, route: '/payment-method' },
    { title: 'Settings', icon: <FaCogs />, route: '/settings' },
    { title: 'Security', icon: <FaLock />, route: '/security' },
    { title: 'Privacy Policy', icon: <FaShieldAlt />, route: '/privacy-policy' },
    { title: 'Help Center', icon: <FaQuestionCircle />, route: '/help-center' },
    { title: 'Invite Friends', icon: <FaShareAlt />, route: '/invite-friends' },
  ];

  return (
    <div className="min-h-screen  p-4">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <img
            src={Joecode}
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4 object-cover"
          />
          <h2 className="text-xl font-bold">JoeCode 👑</h2>
          <p className="text-sm text-gray-500">jctech333@gmail.com</p>
        </div>
      </div>

      <div className="bg-white mt-6 mb-20 rounded-lg shadow-md">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4 px-6 border-b last:border-none"
          >
            <div className="flex items-center">
              <div className="text-blue-500 text-lg mr-4">{option.icon}</div>
              <span className="text-gray-700">{option.title}</span>
            </div>
            <FaChevronRight className="text-gray-400" />
          </div>
        ))}

        <div className="flex items-center justify-between py-4 px-6 text-red-500">
          <div className="flex items-center">
            <FaSignOutAlt className="text-lg mr-4" />
            <span>Sign Out</span>
          </div>
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
};

export default MyProfile;
