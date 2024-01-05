import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useResturantMenu from "../../utils/useResturantMenu";
import { useLocation } from "react-router";
import RestaurantCategory from "./RestaurantCategory";

const ResturantMenu = () => {
    const location = useLocation();
    const rawUrl = location.search.slice(1);
    const restInfo = useResturantMenu(rawUrl);

    if (restInfo === null || restInfo === undefined || restInfo.length === 0) {
        return (
            <div className="text-center font-bold">
                <h1>Loading...</h1>
                <Shimmer/>
            </div>
        );
    }
    
    // const resId = useParams().id;
    // console.log(resId);
    // const restInfo = useResturantMenu(resId);
    //const restInfo = null;

    // const { name, cuisines, costForTwoMessage } = restInfo?.cards[0]?.card?.card?.info || {};
    // const {itemCards} = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    
    const {page_info, page_data} = restInfo;
    const {menus} = page_data?.order?.menuList;
    console.log(menus);

    return (restInfo === null || restInfo === undefined || restInfo.length === 0) ? (
        <div>
            <Shimmer/>
        </div>
    ) : (
        <div className="text-center">
            <h1 className="font-bold my-8 text-2xl">{page_info.ogTitle}</h1>
            <h1 className="font-bold">Menu</h1>
            <RestaurantCategory/>
            <ul>
                {menus.map((value) => (
                    <RestaurantCategory key={value.id} obj={value}/>
                ))}
            </ul>
            {/* <h1>{name}</h1>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwoMessage}</h4>
            <h2> Menu </h2>
            <ul>
                {itemCards.map((value) => (
                    <li key={value?.card?.info?.id}>{value?.card?.info?.name} - {"Rs"} {value?.card?.info?.price}/-</li>
                ))}
            </ul> */}
        </div>
    )
};

export default ResturantMenu;