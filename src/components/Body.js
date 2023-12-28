import Restracard from "./Restracard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const buttonMessages = ["Display Top Rated Resturants", "Display all Resturants"];
let dataArr = [];

const Body = () => {
    const [data, setData] = useState([]);
    const [buttonMessage, setButtonMessage] = useState(buttonMessages[0]);
    const [topRatedPresent, setTopRatedPresent] = useState(false);
    const [text, setText] = useState("");

    console.log("Bodyy component re-rendered");

    const fetchDataFromApi = async () => {
        const rawData = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.925144&lng=83.421274&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await rawData.json();

        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants.forEach((ele) => {
            dataArr.push(ele.info);
        });
        setData(dataArr);
        console.log("Data fetched successfully from swiggy api");
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