import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShimmerText } from "react-shimmer-effects";

const RestaurantMenu = () => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    useEffect(() => {
        fetchData();
    }, [])
    const { id } = useParams();

    const fetchData = async () => {
        const data = await fetch("https://dummyjson.com/products/" + id);
        const json = await data.json();
        setRestaurantMenu(json);
    }
    const {
        title,
        description,
        category,
        tags,
    } = restaurantMenu || {};

    const reviewsList = restaurantMenu?.reviews || [];

    if (!restaurantMenu) {
        return <ShimmerText line={5} gap={10} />;
    }

    return (
        <div className="restaurant-details">
            <h3>{title}</h3>
            <h4>{category}</h4>
            <h4>{description}</h4>
            <h4>{tags.join(' , ')}</h4>
            <div>
                <h2>Reviews</h2>
                <ul>
                    {reviewsList.map((review, index) => (
                        < div className="reviews-list" key={index}>
                            <li>Rating: {review.rating}</li>
                            <li>{review.comment}</li>
                            <li>{review.reviewerName}</li>
                            <li>{review.reviewerEmail}</li>
                        </div>
                    ))}
                </ul>
            </div>


        </div>
    )
}
export default RestaurantMenu;