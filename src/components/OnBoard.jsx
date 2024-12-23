import React from 'react';
import { Link } from "react-router-dom";
import { IoArrowForward } from 'react-icons/io5';

function OnBoard({ authentication, navigation, img, h1text, h1span, ptag, borderStage }) {
    let borderClass = '';

    // Handle different border states
    if (borderStage === 'none') {
        borderClass = 'border-r-4 border-custom-blue'; // No border
    } else if (borderStage === 'bottom') {
        borderClass = 'border-b-4 border-custom-blue'; // Bottom border
    } else if (borderStage === 'right') {
        borderClass = 'border-b-4 border-r-4 border-custom-blue'; // Bottom + Right border
    } else if (borderStage === 'full') {
        borderClass = 'border-4 border-custom-blue'; // Full border
    }

    return (
        <div className='p-3 flex flex-col gap-3 justify-center items-center'>
            <div className="head relative h-12 w-full">
                <Link to={authentication} className="text-custom-blue absolute right-2 text-2xl">
                    Skip
                </Link>
            </div>
            <img src={img} alt={h1text} className='w-[12cm]  md:h-[10cm] h-[9cm]'/>
            <div className="text flex flex-col gap-3 w-full">
                <h1 className='text-3xl font-bold text-gray-600'>
                    {h1text}
                    <span className="text-custom-blue ml-3">{h1span}</span>
                </h1>
                <p className="text-gray-400">{ptag}</p>
            </div>
            <div className="w-full flex justify-between p-4 items-center">
                <div className="w-5 h-2 rounded-sm bg-custom-blue"></div>
                <div className={` h-20 w-20 ${borderClass} bg-transparent flex justify-center items-center rounded-full border-custom-blue`}>
                    <Link className="h-16 w-16 rounded-full bg-custom-blue flex justify-center items-center text-white font-bold" to={navigation}>
                        <IoArrowForward size={19} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

// Set default props
OnBoard.defaultProps = {
    authentication: "/signup",
    navigation: "/secondboard",
    img: "https://via.placeholder.com/150", // Default placeholder image
    h1text: "Welcome",
    h1span: " to the app!",
    ptag: "Start your journey with us.",
    borderStage: "bottom" // No border by default
};

export default OnBoard;
