import Restracard, {withPromotedLabel} from "./Restracard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useGetRestaurantsData from "../../utils/useGetRestaurantsData";
import useGetOnlineStatus from "../../utils/useGetOnlineStatus";

const buttonMessages = ["Display Top Rated Resturants", "Display all Resturants"];
let dataArr = [];

const Body = () => {
    const [buttonMessage, setButtonMessage] = useState(buttonMessages[0]);
    const [topRatedPresent, setTopRatedPresent] = useState(false);
    const [text, setText] = useState("");
    dataArr = useGetRestaurantsData();
    const data = dataArr;
    const isOnline = useGetOnlineStatus();

    const ResturantCardPromoted = withPromotedLabel(Restracard);

    if (!isOnline) {
        return (
            <div>
                <h1>Looks like you're Offline!! Please check your internet connection</h1>
            </div>
        )
    }
    
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
        <div className="bg-gray-100">
            <div className="flex">
                <div className="p-4 m-4">
                    <input type="text" className="border border-solid border-black"
                        value = {text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                    <button className="px-2 py-1 m-2 bg-green-200 rounded-lg" onClick={() => {
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
                <div className="p-4 m-4 flex items-center">
                    <button className="px-4 py-2 bg-green-200 rounded-lg" onClick={handleTopRatedButton}>{buttonMessage}</button>
                </div>
            </div>

            <div className="flex flex-wrap">
                
                {data.map(resturant => (
                    resturant.isPromoted ? (
                        <ResturantCardPromoted key={resturant.id} dataObj={resturant}/>
                        ) : (
                        <Restracard key={resturant.id} dataObj={resturant}/>
                        )
                ))}
                
            </div>
        </div>
    );
};

export default Body;