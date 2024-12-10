import { useEffect, useState } from "react";
import Cards from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import axios from 'axios';
const API_KEY='0242e4e5c46b463ea37cc795327cc5f9'

//const API_KEY = process.env.API_KEY; 
const Hero = () => {
    const [resData, setResData] = useState([]);
    const [filterResData, setFilterResData] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        //const url = `${BASE_URL}/complexSearch?apiKey=${API_KEY}`;
        const url=`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}`
        //console.log("API URL:", url);
    
        try {
            const response = await axios.get(url);
           // console.log("API Response:", response.data);
            const recipe = response.data.results;
            setResData(recipe);
            setFilterResData(recipe);
        } catch (error) {
            console.error("Error fetching data:", error.response?.data || error.message || error);
        }
    };
    

    const handleSearch = () => {
        const filterSearch = resData.filter((res) => 
            res.title.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilterResData(filterSearch);
    };


    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return <h1>Hey Check your Internet Connection</h1>

    

    return resData.length === 0 ? <Shimmer /> : (
        <div className="flex flex-col items-center">
            <div className="m-5 flex">
                <input
                    type="text"
                    value={searchInput}
                    placeholder="Search Recipes..."
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="w-96 h-10 rounded-full rounded-r-none p-4 border-none text-lg text-black bg-slate-300"
                />
                <button className="w-20 bg-slate-500 rounded-full rounded-l text-white" onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-5 w-full sm:w-8/12">
              {filterResData.map((recipe) => (
             <Link
               key={recipe.id}
                 to={`/restaurants/${recipe.id}`}
              >
               
               <Cards resData={recipe} />
              
               </Link>
               ))}
             </div>

        </div>
    );
};

export default Hero;
