import React from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const { resId } = useParams(); // Get the recipe ID from the URL
    const { resInfo, error } = useRestaurantMenu(resId); // Fetch the recipe details

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    if (!resInfo) {
        return <Shimmer />;
    }

    const { title, image, summary, instructions,} = resInfo;
    //const {number,step}=resInfo?.analyzedInstructions?.steps;
    //const {}=resInfo?.analyzedInstructions?.steps?.ingredients;
    const sanitizedSummary = summary.replace(/<\/?[^>]+(>|$)/g, "");
    const sanitizedinstructions = instructions.replace(/<\/?[^>]+(>|$)/g, "");
    return (
        <div className="w-8/12  m-auto my-10 rounded-lg bg-orange-300 p-10 flex flex-start flex-col gap-3">
        <img src={image} alt={title} className="rounded-md lg:w-[1000px] h-[300px] lg:h-[450px] shadow-md w-full" />
            <h1 className="text-gray-800 font-bold text-3xl mt-2"> <span className="text-zinc-900">Recipe:</span>{title}</h1>
            <p className="font-bold text-lg text-gray-700"><span className="text-zinc-900">Summary: </span>{sanitizedSummary}</p>
            <p className="font-bold text-lg text-gray-700"><span className="text-zinc-900"> Instructions: </span>{sanitizedinstructions}</p>
        </div>
    );
};

export default RestaurantMenu;
