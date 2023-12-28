import { IMAGE_BASE_URL } from "../../utils/constants";

const Restracard = (props) => {
    const {name, cuisines, cloudinaryImageId, sla, avgRating, areaName, costForTwo, isOpen} = props.dataObj;
    return (
        <div className="rest-card">
            <img 
                className="rest-logo"
                alt="rest-logo"
                src={IMAGE_BASE_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h5>{areaName}</h5>
            <h3>{costForTwo}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h3>{avgRating} stars</h3>
            {isOpen ? <h4>{"Delivery within " + sla.slaString}</h4> : <h2>Closed</h2>}
        </div>
    );
};

export default Restracard;