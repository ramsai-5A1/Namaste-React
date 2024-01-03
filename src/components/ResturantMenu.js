import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResturantMenu from "../../utils/useResturantMenu";


const ResturantMenu = () => {

    const resId = useParams().id;
    const restInfo = useResturantMenu(resId);
    console.log("In MENU");
    console.log(restInfo);

    const { name, cuisines, costForTwoMessage } = restInfo?.cards[0]?.card?.card?.info || {};
    const {itemCards} = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    
    return (restInfo === null) ? (
        <div>
            <Shimmer/>
        </div>
    ) : (
        <div className="menu-container">
            <h1>{name}</h1>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwoMessage}</h4>
            <h2> Menu </h2>
            <ul>
                {itemCards.map((value) => (
                    <li key={value?.card?.info?.id}>{value?.card?.info?.name} - {"Rs"} {value?.card?.info?.price}/-</li>
                ))}
            </ul>
        </div>
    )
};

export default ResturantMenu;