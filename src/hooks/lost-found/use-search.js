import { GetSearch } from "@/api/boston-api";
import { useState } from "react";


const useSearch = () => {
    const [isLoader, setIsLoader] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [fullResultApi, setFullResultApi] = useState([]);

    const handleSearch = async (value) => {
        setIsLoader(true);
        if (value !== "") {
            try {
                const response = await GetSearch(value);

                const totalResults = response.data.result;
                setFullResultApi(totalResults);

                const records = response.data.result.records;
                setSearchResults(records);
            } catch (error) {
                console.log(error);
                return error;
            } finally {
                setIsLoader(false);
            }
        } else {
            setIsLoader(false);
        }
    };

    return {
        isLoader,
        searchResults,
        fullResultApi,
        handleSearch,
    };
};

export default useSearch;