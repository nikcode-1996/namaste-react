import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        name,
        cuisines = [],
        avgRating,
        costForTwo,
        cloudinaryImageId,
    } = resData?.info || {};
    return (
        <div className="res-card" style={{ border: "1px solid black", backgroundColor: "#f0f0f0" }}>
            <img src={CDN_URL + cloudinaryImageId} className="res-logo" alt="" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}
export default RestaurantCard;