import React from 'react'
import BottomNavBar from '../components/BottomNavBar'
import { Link } from 'react-router-dom'
import { IoSearchOutline, IoNotifications, IoDiamondSharp, IoCodeSlash, IoHeartHalf, IoOptions } from 'react-icons/io5'
import ProfilePic from "../assets/human1.png"
import PerformanceSlideshow from '../components/SlidesShow'
import MentorListingPage from '../components/MentorsListingPage'
import CourseListingPage from '../components/CourseListingPage'
import OwnerPopup from '../components/OwnerPopup'
function HomePage() {
    const categories = [
        { name: "Design", icon: IoDiamondSharp, to: "#" },
        { name: "Programming", icon: IoCodeSlash, to: "#" },
        { name: "Health", icon: IoHeartHalf, to: "#" },
        { name: "Others", icon: IoOptions, to: "/categories" },
    ];
    return (
        <>
            <header className='flex justify-between items-center p-3'>
                <div className='header-profile flex gap-2 items-center'>
                    <img src={ProfilePic} className='h-16 w-16 rounded-full' />
                    <div className=' user_info flex flex-col'>
                        <span className='text-gray-600'>
                            Good Morning
                        </span>
                        <h3 className='font-bold text-gray-900 text-xl'>Dev User</h3>
                    </div>
                </div>
                <div className='actionns-icons flex align-baseline gap-3'>
                    <Link to="/search">
                        <IoSearchOutline size={24} className='text-custom-blue' />
                    </Link>
                    <Link to="/notifications">
                        <IoNotifications size={24} className='text-custom-blue' />
                    </Link>
                </div>
            </header>
            <PerformanceSlideshow />
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
            <CourseListingPage />
            <MentorListingPage />
            <OwnerPopup />
            <BottomNavBar />
        </>

    )
}

export default HomePage