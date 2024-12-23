import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import AboutPage from '../components/AboutPage';
import LessonsPage from '../components/LessonsPage';
import ReviewsPage from '../components/ReviewsPage';
import {  IoDiamondSharp, IoCodeSlash, IoHeartHalf, IoOptions } from 'react-icons/io5'
const CourseDetail = () => {
    const [activeTab, setActiveTab] = useState('About');
    const categories = [
        { name: "Design", icon: IoDiamondSharp, to: "#" },
        { name: "Programming", icon: IoCodeSlash, to: "#" },
        { name: "Health", icon: IoHeartHalf, to: "#" },
        { name: "Others", icon: IoOptions, to: "/categories" },
    ];
    const renderContent = () => {
        switch (activeTab) {
            case 'About':
                return <AboutPage />;
            case 'Lessons':
                return <LessonsPage />;
            case 'Reviews':
                return <ReviewsPage />;
            default:
                return <AboutPage />;
        }
    };

    return (
        <div className=" min-h-screen p-4">
            <header className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                <Link to="/home">
                    <button className="text-lg font-bold text-2xl font-bold">&larr;</button>
                </Link>
                <h1 className="text-xl font-bold">UX/UI Essentials</h1>
                <button className="text-red-500 text-2xl">&hearts;</button>
            </header>

            <section className="mt-4 bg-white rounded-lg shadow-md p-4">
                <div className="flex items-center justify-between">
                    <img
                        src="https://th.bing.com/th/id/OIP.JQR9dhevkF8c9h_jnkydtQHaEH?pid=ImgDetMain"
                        alt="Course"
                        className="rounded-lg w-20 h-20"
                    />
                    <div className="text-right">
                        <h2 className="text-lg font-bold">$75.00</h2>
                        <span className="text-sm text-gray-500">Design</span>
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="text-xl font-bold">UX/UI Essentials</h3>
                    <p className="text-sm text-gray-500">
                        ★★★★☆ (4.7) | 231 Reviews
                    </p>
                </div>
                <div>
                <div className="bg-white rounded-lg  p-4 grid grid-cols-4 gap-4">
                    {categories.map((category, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Link to={category.to}>
                                <div className="h-[3rem] w-[3rem] rounded-full bg-blue-200 flex justify-center items-center">
                                    <category.icon className="text-custom-blue text-2xl" />
                                </div>
                            </Link>
                            <p className="mt-2 text-gray-700 font-medium text-sm">{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            </section>

            <nav className="flex justify-around mt-4">
                {['About', 'Lessons', 'Reviews'].map((tab) => (
                    <button
                        key={tab}
                        className={`${activeTab === tab ? 'border-b-4 border-blue-500 text-blue-500' : 'text-gray-500'
                            } py-2 text-sm`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </nav>

            <main className="mt-4">{renderContent()}</main>
        </div>
    );
};

export default CourseDetail;
