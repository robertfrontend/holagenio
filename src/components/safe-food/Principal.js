import React, { useEffect, useState } from 'react'
import useSearch from '@/hooks/lost-found/use-search'

const Principal = () => {

    const { isLoader, searchResults, fullResultApi, handleSearch } = useSearch();
    useEffect(() => {
        handleSearch("Sun pizza")

        console.log(searchResults, "searchResults")
    }, [])

    return (
        <>
            <Search />
        </>
    )
}

const Search = () => {
    const { isLoader, searchResults, fullResultApi, handleSearch } = useSearch();
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchTerm);
    };

    console.log(searchResults, "search results")

    return (
        <div>
            <form onSubmit={handleSubmit} className="input input-bordered flex items-center gap-2 mb-4">
                <input
                    type="text"
                    className="grow"
                    placeholder="Search by name, location, zip code..."
                    value={searchTerm}
                    onChange={handleInputChange}
                />
                <button type="submit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70 cursor-pointer">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </button>
            </form>

            {isLoader ? (
                <p>Loading...</p>
            ) : (
                <div className="search-results">
                    {searchResults.length > 0 ? (
                        <ul>
                            {searchResults.map((result, index) => (
                                <li key={index} className="mb-2 card bg-base-10 border border-gray-100 py-2 px-2">
                                    <div className="flex justify-between items-start mb-2 ">
                                        <div>
                                            <h3 className="text-lg font-semibold">{result.businessname} - #{result.property_id}</h3>
                                            <p className="text-xs md:text-sm text-muted-foreground">{`${result.address}, ${result.city}, ${result.state} ${result.zip}`}</p>
                                            <div
                                                className="badge"
                                            >
                                                {result.licstatus}{" "}
                                                {result.licstatus === "Active" ? "✅" : "⛔️"}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No results found.</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default Principal