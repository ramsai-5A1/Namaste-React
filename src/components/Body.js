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
            "https://fakestoreapi.com/products"
        );
        const json = await rawData.json();
        setData(json);
        dataArr = json;
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

    return !filled ? (
     <Shimmer/>
     ) : (
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