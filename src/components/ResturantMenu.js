import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { SWIGGY_RESTURANT_MENU_API_SUFFIX_URL, SWIGGY_RESTURANT_MENU_API_PREFIX_URL } from "../../utils/constants";


const ResturantMenu = () => {
    const [restInfo, setRestInfo] = useState(null);

    const resId = useParams().id;
    console.log(resId);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const api = SWIGGY_RESTURANT_MENU_API_PREFIX_URL + resId + SWIGGY_RESTURANT_MENU_API_SUFFIX_URL;
        const data = await fetch(api);
        const json = await data.json();
        setRestInfo(json.data);
    }

    // if (restInfo === null) {
    //     return (
    //         <div>
    //             <Shimmer/>
    //         </div>
    //     );
    // }

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