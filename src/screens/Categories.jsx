import React from "react";
import { Link } from 'react-router-dom'
import { IoSearchOutline, IoNotifications, IoDiamondSharp, IoCodeSlash, IoHeartHalf, IoArrowBack } from 'react-icons/io5'

const Categories = () => {
    const categories = [
        { name: "Design", icon: IoDiamondSharp, to: "#" },
        { name: "Programming", icon: IoCodeSlash, to: "#" },
        { name: "Health", icon: IoHeartHalf, to: "#" },
        { name: "Design", icon: IoDiamondSharp, to: "#" },
        { name: "Programming", icon: IoCodeSlash, to: "#" },
        { name: "Health", icon: IoHeartHalf, to: "#" },
        { name: "Design", icon: IoDiamondSharp, to: "#" },
        { name: "Programming", icon: IoCodeSlash, to: "#" },
        { name: "Health", icon: IoHeartHalf, to: "#" },
        { name: "Programming", icon: IoCodeSlash, to: "#" },
        { name: "Health", icon: IoHeartHalf, to: "#" },
        { name: "Design", icon: IoDiamondSharp, to: "#" },
        { name: "Programming", icon: IoCodeSlash, to: "#" },
        { name: "Health", icon: IoHeartHalf, to: "#" }
    ];

    return (
        <div>
            <div className="items-center p-4 flex gap-[4rem]">
            <Link to="/home"><IoArrowBack size={25} /></Link>
            <h2 className="text-3xl font-bold mb-4">Categories</h2>
            </div>
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
    );
};

export default Categories;
