import Restracard from "./Restracard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const buttonMessages = ["Display Top Rated Resturants", "Display all Resturants"];
let dataArr = [];

const Body = () => {
    const [data, setData] = useState([]);
    const [filled, setFilled] = useState(false);
    const [buttonMessage, setButtonMessage] = useState(buttonMessages[0]);
    const [topRatedPresent, setTopRatedPresent] = useState(false);

    const fetchDataFromApi = async () => {
        const rawData = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.925144&lng=83.421274&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await rawData.json();
        const restData = json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants;
        var filteredData = [];
        restData.forEach((ele) => {
            let curr = ele.info;
            var currentObj = {
                name: curr.name, 
                avgRating: curr.avgRating, 
                id: curr.id, 
                cuisine: curr.cuisines, 
                imageUrl: curr.cloudinaryImageId,
                deliveryTime: 34
            }
            filteredData.push(currentObj);
        })
        setData(filteredData);
        dataArr = filteredData;
    }

    useEffect(() => {
        const initData = () => {
            setFilled(true);
        }
        setTimeout(initData, 1000);
        fetchDataFromApi();
    }, []);

    const handleTopRatedButton = () => {
        if (!topRatedPresent) {
            const filteredData = data.filter((element) => {
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

    if (!filled) {
        return <div>
            <Shimmer/>
        </div>
    }

    return (
        <div className="body">
            <div className="filter">
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