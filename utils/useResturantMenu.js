import { useEffect, useState } from "react";
import { SWIGGY_RESTURANT_MENU_API_PREFIX_URL, SWIGGY_RESTURANT_MENU_API_SUFFIX_URL } from "./constants";

const useResturantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    const fetchDataFromApi = async () => {
        const api = SWIGGY_RESTURANT_MENU_API_PREFIX_URL + resId + SWIGGY_RESTURANT_MENU_API_SUFFIX_URL;
        const data = await fetch(api);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useResturantMenu;