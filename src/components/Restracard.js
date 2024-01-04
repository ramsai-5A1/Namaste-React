import { IMAGE_BASE_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Restracard = (props) => {
    const {id, name, cuisines, cloudinaryImageId, sla, avgRating, areaName, costForTwo, isOpen} = props.dataObj;
    
    return (
        <div className="m-4 p-4 rounded-lg shadow-lg w-[250px]  bg-white transition-transform transform  hover:scale-110 hover:cursor-pointer"
            onClick={() => {
                alert("Handle opening logic here");
            }}>
            <img 
                className="w-[300px] h-[150px] rounded-lg"
                alt="rest-logo"
                src={IMAGE_BASE_URL + cloudinaryImageId}
            />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h5>{areaName}</h5>
            <h3>{costForTwo}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h3>{avgRating} stars</h3>
            {isOpen ? <h4>{"Delivery within " + sla.slaString}</h4> : <h2>Closed</h2>}
            <Link to={"/resturants/" + id}>Explore</Link>
        </div>
    );
};

export default Restracard;