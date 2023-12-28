import Restracard from "./Restracard";
import dataArr from "../../utils/mockData";
import { useEffect, useState } from "react";

const buttonMessages = ["Display Top Rated Resturants", "Display all Resturants"];

const Body = () => {
    const [data, setData] = useState([]);
    const [filled, setFilled] = useState(false);
    const [buttonMessage, setButtonMessage] = useState(buttonMessages[0]);
    const [topRatedPresent, setTopRatedPresent] = useState(false);

    useEffect(() => {
        const initData = () => {
            setData(dataArr);
            setFilled(true);
        }
        setTimeout(initData, 1000);
        console.log("Setting the data");
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
            Loading...
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