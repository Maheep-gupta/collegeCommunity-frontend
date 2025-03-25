import React from "react";
import { useLocation } from "react-router-dom";
import MessageAi from "./MessageAi";


function SearchResults() {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("q");

    return (
        <div className="min-h-screen flex flex-col items-center justify-between p-10 ">
            <h1 className="text-3xl font-bold mb-4">Search Results for "{query}"</h1>
            
        <MessageAi/>

        </div>
    );
}

export default SearchResults;
