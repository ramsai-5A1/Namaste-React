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
    const [text, setText] = useState("");

    console.log("Body component re-rendered");

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
                return element.rating.rate >= 4.0;
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
                <div className="search">
                    
                    <input type="text" className="search-box"
                        value = {text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                    <button onClick={() => {
                        let filteredDataByName = dataArr.filter((ele) => {
                            return ele.category.toLowerCase().includes(text.toLowerCase());
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