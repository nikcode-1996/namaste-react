import RestaurantCard from "./Restaurant";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [fileteredRest, setFilteredRest] = useState([])
    const [searchText, setSearchText] = useState("")
    const filterList = () => {
        setFilteredRest(listOfRestaurants.filter(restaurant => restaurant.info.avgRating > 4.1));
    }
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.4678148&lng=74.6325242&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRest(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
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
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRest(filteredRestBySearch)
                        }}>Search
                    </button>
                </div>
                <button className="filter-btn" onClick={filterList}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {fileteredRest.map((restaurant => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                )))}
            </div>
        </div>
    )
}




export default Body;