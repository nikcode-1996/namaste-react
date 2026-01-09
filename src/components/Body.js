import { FETCH_URL } from "../utils/constants";
import RestaurantCard from "./Restaurant";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchRestaurants from "../utils/useFetchRestaurants"

const Body = () => {

    const [searchText, setSearchText] = useState("")
    const {
        listOfRestaurants,
        filteredRest,
        setFilteredRest,
        loading,
    } = useFetchRestaurants();

    return listOfRestaurants.length === 0 || loading ? <Shimmer /> : (
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
                {filteredRest.map((restaurant => (
                    <Link to={"/products/" + restaurant.id} key={restaurant.id}>
                        <RestaurantCard key={restaurant.id} resData={restaurant} /></Link>
                )))}
            </div>
        </div>
    )
}




export default Body;