import { useEffect, useState } from "react";
import { SWIGGY_RESTURANT_MENU_API_PREFIX_URL, SWIGGY_RESTURANT_MENU_API_SUFFIX_UR, ZOMATO_RESTURANT_WISE_PREFIX_URL } from "./constants";

const useResturantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    const fetchDataFromApi = async () => {
        const api = ZOMATO_RESTURANT_WISE_PREFIX_URL + resId;
        const data = await fetch(api);
        const json = await data.json();
        console.log("From fetchApi");
        console.log(json);
        setResInfo(json);
    }

    return resInfo;
}

export default useResturantMenu;