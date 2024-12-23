import React, { useState } from "react";
import searchData from "../components/searchData";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
const SearchPage = () => {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    // Example search data (replace with your API or database)
    

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        // Filter suggestions based on user input
        const filteredSuggestions = searchData.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-100">
        <div className="items-center p-1 flex gap-[4rem] w-full">
                <Link to="/home">
                    <IoArrowBack size={25} />
                </Link>
                <h2 className="text-xl font-bold mb-4">Search </h2>
            </div>
            <div className="relative w-full max-w-xl">
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg py-2 px-4 text-lg focus:outline-none focus:border-blue-500"
                    placeholder="Search..."
                    value={query}
                    onChange={handleInputChange}
                />
                {query && (
                    <div className="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                        {suggestions.length > 0 ? (
                            suggestions.map((suggestion, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => setQuery(suggestion)}
                                >
                                    {suggestion}
                                </div>
                            ))
                        ) : (
                            <div className="px-4 py-2 text-gray-500">No results found</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
