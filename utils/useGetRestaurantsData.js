import { useEffect, useState } from "react";
import { SWIGGY_DATA_FETCH_API_URL } from "./constants";

const useGetRestaurantsData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("USEEFFECT in API");
        fetchDataFromApi();
    }, []);

    const fetchDataFromApi = async () => {
        const rawData = await fetch(SWIGGY_DATA_FETCH_API_URL);
        const json = await rawData.json();
        console.log("From API");
        console.log(json);
        let dataArr = [];
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants.forEach((ele) => {
            dataArr.push(ele.info);
        });
        console.log(dataArr);
        setData(dataArr);
    }
    console.log("RENDERINGG");
    return data;
}

export default useGetRestaurantsData;