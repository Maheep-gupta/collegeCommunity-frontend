import React, { useState } from "react";
import { GoPaperclip } from "react-icons/go";
import { useNavigate } from "react-router-dom";

function MessageAi() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!query.trim()) return;
        console.log(`Searching for: ${query}`);
        
        navigate(`/search/${query}`); 
    };


    return (
        <div className="w-full max-w-2xl flex flex-col items-center">
            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                    <GoPaperclip className="w-5 h-5" />
                </button>
                <div className="flex-grow ml-4 relative w-full">
                    <input
                        type="text"
                        placeholder="Search anything..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    />
                    <button
                        onClick={handleSearch}
                        className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
                    >
                        🔍
                    </button>
                </div>
                <button
                    onClick={handleSearch}
                    className="ml-4 flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                >
                    <span>Search</span>
                </button>
            </div>
        </div>
    );
}

export default MessageAi;
