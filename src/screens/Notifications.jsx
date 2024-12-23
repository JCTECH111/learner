import React from "react";
import { IoBook, IoCash, IoCard, IoChatbubbles, IoRocket, IoGift, IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const Notifications = () => {
    const notifications = [
        {
            main: "New course available!",
            about: "Congrats on finishing! lorem ipsum dolor sit amet consectetur adipiscing elit.",
            icon: IoBook,
            date: "today",
        },
        {
            main: "Payment successful!",
            about: "Your payment was processed successfully. Thank you for your purchase.",
            icon: IoCash,
            date: "today",
        },
        {
            main: "Credit card connected!",
            about: "Your credit card has been successfully linked to your account.",
            icon: IoCard,
            date: "today",
        },
        {
            main: "New message received!",
            about: "You have a new message waiting in your inbox. Check it now.",
            icon: IoChatbubbles,
            date: "yesterday",
        },
        {
            main: "Launch successful!",
            about: "Your product launch was a success. Congratulations on the achievement!",
            icon: IoRocket,
            date: "yesterday",
        },
        {
            main: "Special gift for you!",
            about: "You received a special gift as a reward for your loyalty.",
            icon: IoGift,
            date: "yesterday",
        },
    ];

    const groupByDate = (date) => notifications.filter((note) => note.date === date);

    const today = groupByDate("today");
    const yesterday = groupByDate("yesterday");

    return (
        <div>
            <div className="items-center p-4 flex gap-[4rem]">
                <Link to="/home">
                    <IoArrowBack size={25} />
                </Link>
                <h2 className="text-3xl font-bold mb-4">Notifications</h2>
            </div>
            <div className="flex justify-between items-center  w-full p-4">
                <h2 className="text-lg font-semibold text-gray-800">Today</h2>
                <Link to="/courses">
                    <button className="text-blue-500 text-sm font-medium">Mark All as Read</button>
                </Link>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
                {today.map((note, index) => (
                    <div key={index} className="flex gap-5 justify-between items-center w-full p-4">
                        <div className="h-[3rem] w-[3rem] rounded-full bg-blue-200 flex justify-center items-center">
                            <note.icon className="text-custom-blue text-2xl" aria-label="Icon" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-gray-600 font-semibold text-[1.3rem] md:text-[1.125rem]">
                                {note.main}
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base">{note.about}</p>
                        </div>
                    </div>
                ))}
                <div className="flex justify-between items-center  w-full p-4">
                <h2 className="text-lg font-semibold text-gray-800">Yesterday</h2>
                <Link to="/courses">
                    <button className="text-blue-500 text-sm font-medium">Mark All as Read</button>
                </Link>
            </div>
                {yesterday.map((note, index) => (
                    <div key={index} className="flex gap-5 justify-between items-center w-full p-4">
                        <div className="h-[3rem] w-[3rem] rounded-full bg-blue-200 flex justify-center items-center">
                            <note.icon className="text-custom-blue text-2xl" aria-label="Icon" />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-gray-600 font-semibold text-[1.3rem] md:text-[1.125rem]">
                                {note.main}
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base">{note.about}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notifications;
