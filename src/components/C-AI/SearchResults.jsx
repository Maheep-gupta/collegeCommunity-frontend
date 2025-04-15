import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import MessageAi from "./MessageAi";


function SearchResults() {
    const [SessionSearchData, setSessionSearchData] = useState([])
    const location = useLocation();
    // id will be the chat session id from the URL
    const query = useParams().id;

    return (
        <div className="min-h-screen flex flex-col items-center justify-between p-10 ">
            <h1 className="text-3xl font-bold mb-4">Search Results for "{query}"</h1>
        
        <MessageAi/>

        </div>
    );
}

export default SearchResults;
