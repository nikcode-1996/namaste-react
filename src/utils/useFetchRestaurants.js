import { useEffect, useState } from "react";
import { FETCH_URL } from "./constants";

const useFetchRestaurants = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRest, setFilteredRest] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(FETCH_URL + "products");
            const json = await data.json();
            const restaurants = json?.products || [];

            setListOfRestaurants(restaurants);
            setFilteredRest(restaurants);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    return {
        listOfRestaurants,
        filteredRest,
        setFilteredRest,
        loading,
    };
};

export default useFetchRestaurants;
