import RestaurantCard from "./Restaurant";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [fileteredRest, setFilteredRest] = useState([])
    const [searchText, setSearchText] = useState("")
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://dummyjson.com/products");
        const json = await data.json();
        const restaurants =
            json?.products || [];
        console.log(restaurants);
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(restaurants);
        setFilteredRest(restaurants);
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" placeholder="Search" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }} />
                    <button className="search-btn"
                        onClick={() => {
                            const filteredRestBySearch = listOfRestaurants.filter((res) =>
                                res.title.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRest(filteredRestBySearch)
                        }}>Search
                    </button>
                </div>

            </div>
            <div className="res-container">
                {fileteredRest.map((restaurant => (
                    <Link to={"/products/" + restaurant.id} key={restaurant.id}>
                        <RestaurantCard key={restaurant.id} resData={restaurant} /></Link>
                )))}
            </div>
        </div>
    )
}




export default Body;