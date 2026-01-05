import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        title,
        description,
        category,
        tags,
    } = resData || {};
    return (
        <div className="res-card" style={{ border: "1px solid black", backgroundColor: "#f0f0f0" }}>
            <img src={CDN_URL + category + "/" + title.toLowerCase().split(" ").join("-") + "/1.webp"} className="res-logo" alt="" />
            <h3>{title}</h3>
            <h4>{category}</h4>
            <h4>{description}</h4>
            <h4>{tags.join(' , ')}</h4>
        </div>
    )
}
export default RestaurantCard;