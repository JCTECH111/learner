import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoHome, IoSchool, IoMail, IoPerson } from 'react-icons/io5';

function BottomNavBar() {
  const location = useLocation(); // To determine the active tab based on the current route

  const navItems = [
    { id: 'home', label: 'Home', icon: <IoHome />, path: '/home' },
    { id: 'courses', label: 'My Courses', icon: <IoSchool />, path: '/my-Courses' },
    { id: 'inbox', label: 'Inbox', icon: <IoMail />, path: '/chats' },
    { id: 'profile', label: 'Profile', icon: <IoPerson />, path: '/Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-md">
      <ul className="flex justify-around py-3">
        {navItems.map((item) => (
          <li key={item.id} className="text-center">
            <Link
              to={item.path}
              className={`flex flex-col items-center text-sm ${
                location.pathname === item.path ? 'text-custom-blue' : 'text-gray-600'
              }`}
            >
              <div className="text-2xl">{item.icon}</div>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BottomNavBar;
