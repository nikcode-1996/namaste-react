import { useEffect, useState } from "react";
import { FETCH_URL } from "../utils/constants"
const useRestrauntMenu = (id) => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(FETCH_URL + "products/" + id);
        const json = await data.json();
        setRestaurantMenu(json);
    }
    return restaurantMenu;
}

export default useRestrauntMenu;