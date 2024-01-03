import { useEffect, useState } from "react";
import { SWIGGY_DATA_FETCH_API_URL } from "./constants";

const useGetRestaurantsData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    const fetchDataFromApi = async () => {
        const rawData = await fetch(SWIGGY_DATA_FETCH_API_URL);
        const json = await rawData.json();
        console.log(json);
        let dataArr = [];
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants.forEach((ele) => {
            dataArr.push(ele.info);
        });
        console.log(dataArr);
        setData(dataArr);
    }

    return data;
}

export default useGetRestaurantsData;