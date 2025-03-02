import axios from "axios";

const URL = "https://data.boston.gov/api/3/action/datastore_search";
const RESOURCE_ID = "4582bec6-2b4f-4f9e-bc55-cbaa73117f4c";
const LIMIT = 60000;

export const GetSearch = async (text) => {
    try {
        const response = await axios.post(URL, {
            resource_id: RESOURCE_ID,
            limit: LIMIT,
            q: text || "Sun Pizza Blue Hill",
            filters: {
                // city: "Boston",
                // businessname: "Sun pizza",
                // property_id: "146087",
            },
        });

        return response;
    } catch (error) {
        console.log(error, "error");
        return error;
    }
};

export const GetBusinessByPropertyID = async (text, property_id) => {
    try {
        const response = await axios.post(URL, {
            resource_id: RESOURCE_ID,
            limit: LIMIT,
            q: text || "Sun Pizza Blue Hill",
            filters: {
                property_id: property_id || "146087",
            },
        });

        return response;
    } catch (error) {
        console.log(error, "error");
        return error;
    }
};