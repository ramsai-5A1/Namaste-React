import { IMAGE_BASE_URL } from "../../utils/constants";

const Restracard = (props) => {
    const {name, cuisine, imageUrl, avgRating, deliveryTime} = props.dataObj;
    return (
        <div className="rest-card">
            <img 
                className="rest-logo"
                alt="rest-logo"
                src={IMAGE_BASE_URL + imageUrl}
            />
            <h3>{name}</h3>
            <h4>{cuisine.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

export default Restracard;