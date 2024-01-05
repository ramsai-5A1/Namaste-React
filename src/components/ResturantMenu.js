import Shimmer from "./Shimmer";
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
        </div>
    )
};

export default ResturantMenu;