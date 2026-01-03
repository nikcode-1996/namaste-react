import RestaurantCard from "./Restaurant";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
    const [updateList, setUpdateList] = useState(resList);
    const filterList = () => {
        setUpdateList(updateList.filter(restaurant => restaurant.info.avgRating > 4.1));
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={filterList}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {updateList.map((restaurant => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                )))}
            </div>
        </div>
    )
}




export default Body;