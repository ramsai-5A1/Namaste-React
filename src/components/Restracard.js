import { useContext } from "react";
import { IMAGE_BASE_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";

const Restracard = (props) => {
    const  { name, image, cuisine, costText, locality, rating } = props.dataObj.info;
    const {order, cardAction} = props.dataObj;
    const cuisines = cuisine.map((curr) => curr.name);
    const url = cardAction.clickUrl.slice(1);
    const {loggedInUser} = useContext(UserContext);
   
    return (
        <div className="m-4 p-4 rounded-lg shadow-lg w-[250px]  bg-white transition-transform transform  hover:scale-110 hover:cursor-pointer"
            >
            <img 
                className="w-[300px] h-[150px] rounded-lg"
                alt="rest-logo"
                src={image.url}
            />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h3>{rating.aggregate_rating} stars</h3>
            <h3>{costText.text}</h3>
            <h4>{locality.name}</h4>
            <h4>User: {loggedInUser}</h4>
            {order.isServiceable ? <h4>{"Delivery within " + order.deliveryTime}</h4> : <h2 className="font-bold">Closed</h2>}
            <Link to={"/resturants?" + url}>Explore</Link> 
        </div>
    );
};

export const withPromotedLabel = (Restracard) => {
    return (props) => {
        return (
            <div>
                <label className=" bg-black text-white p-2 m-2 rounded-lg">Promoted</label>
                <Restracard {...props}/>
            </div>
        )
    }
}

export default Restracard;