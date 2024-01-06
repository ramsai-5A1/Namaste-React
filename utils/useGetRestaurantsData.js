import { useEffect, useState } from "react";
import { SWIGGY_DATA_FETCH_API_URL, LOCAL_HOST_BACKEND_URL } from "./constants";

const useGetRestaurantsData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    const fetchDataFromApi = async () => {
        try {
            const rawData = await fetch(LOCAL_HOST_BACKEND_URL);
            const json = await rawData.json();
            
            let dataArr = [];
            json?.sections?.SECTION_SEARCH_RESULT.forEach((ele) => {
                dataArr.push(ele);
            });
            setData(dataArr);
        } catch (err) {
            console.log(err);
        }
    }
    return data;
}

export default useGetRestaurantsData;