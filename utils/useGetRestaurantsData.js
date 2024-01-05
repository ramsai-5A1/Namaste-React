import { useEffect, useState } from "react";
import { SWIGGY_DATA_FETCH_API_URL, LOCAL_HOST_BACKEND_URL } from "./constants";

const useGetRestaurantsData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    const fetchDataFromApi = async () => {
        // const rawData = await fetch(SWIGGY_DATA_FETCH_API_URL);
        // const json = await rawData.json();
        // console.log("From API");
        // console.log(json);
        // let dataArr = [];
        // json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants.forEach((ele) => {
        //     dataArr.push(ele.info);
        // });
        // console.log(dataArr);
        // setData(dataArr);
        try {
            const rawData = await fetch(LOCAL_HOST_BACKEND_URL);
            const json = await rawData.json();
            
            let dataArr = [];
            json?.sections?.SECTION_SEARCH_RESULT.forEach((ele) => {
                dataArr.push(ele);
            });
            setData(dataArr);
        } catch (err) {
            console.log("Something went wrong");
            console.log(err);
        }
    }
    return data;
}

export default useGetRestaurantsData;