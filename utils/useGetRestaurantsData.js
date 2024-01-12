import { useEffect, useState } from "react";
import { LOCAL_HOST_BACKEND_URL } from "./constants";
import MOCK_DATA from "./Mocks/MOCK_DATA_1.json"

const useGetRestaurantsData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    const fetchDataFromApi = async () => {
        try {
            // const rawData = await fetch(LOCAL_HOST_BACKEND_URL);
            // const json = await rawData.json();
            const json = MOCK_DATA;
            
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