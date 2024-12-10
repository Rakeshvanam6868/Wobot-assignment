import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "./constants";
const API_KEY = process.env.API_KEY;


const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (resId) {
            fetchRecipeDetails(resId);
            //console.log(resId);
        }
    }, [resId]);

    const fetchRecipeDetails = async (id) => {
        try {
            //const response = await axios.get(`${BASE_URL}/${id}/information?apiKey=${API_KEY}`);
            const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
            setResInfo(response.data);
            console.log(id);
        } catch (error) {
            console.error("Error fetching recipe details:", error.message);
            setError("Failed to fetch recipe details. Please try again later.");
        }
    };

    return { resInfo, error };
};

export default useRestaurantMenu;
