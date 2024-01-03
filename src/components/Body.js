import Restracard from "./Restracard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_DATA_FETCH_API_URL } from "../../utils/constants";

const buttonMessages = ["Display Top Rated Resturants", "Display all Resturants"];
let dataArr = [];

const Body = () => {
    const [data, setData] = useState([]);
    const [buttonMessage, setButtonMessage] = useState(buttonMessages[0]);
    const [topRatedPresent, setTopRatedPresent] = useState(false);
    const [text, setText] = useState("");


    const fetchDataFromApi = async () => {
        console.log(SWIGGY_DATA_FETCH_API_URL);
        const rawData = await fetch(
            SWIGGY_DATA_FETCH_API_URL
        );
        const json = await rawData.json();
        console.log("After fetching");
        console.log(json?.data?.cards);

        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants.forEach((ele) => {
            dataArr.push(ele.info);
        });
        setData(dataArr);
        console.log(dataArr);
        console.log("Data fetched successfullyy from swiggy api");
    }

    useEffect(() => {
        fetchDataFromApi();
    }, []);

    const handleTopRatedButton = () => {
        if (!topRatedPresent) {
            const filteredData = dataArr.filter((element) => {
                return element.avgRating >= 4.0;
            });
            setData(filteredData);
            setButtonMessage(buttonMessages[1]);
            setTopRatedPresent(true);
        } else {
            setData(dataArr);
            setButtonMessage(buttonMessages[0]);
            setTopRatedPresent(false);
        }
    }

    return data == undefined || data.length === 0 ? (
     <Shimmer/>
     ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    
                    <input type="text" className="search-box"
                        value = {text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                    <button onClick={() => {
                        let filteredDataByName = dataArr.filter((ele) => {
                            let found = false;
                            ele.cuisines.forEach((curr) => {
                                if (curr.toLowerCase().includes(text.toLowerCase())) {
                                    found = true;
                                    return;
                                }
                            });
                            return found;
                        });
                        
                        setData(filteredDataByName);
                    }}>Search</button>
                </div>

                <button className="filter-btn" onClick={handleTopRatedButton}>{buttonMessage}</button>
            </div>

            <div className="rest-container">
                
                {data.map(resturant => (
                    <Restracard key={resturant.id} dataObj={resturant}/>
                ))}
                
            </div>
        </div>
    );
};

export default Body;