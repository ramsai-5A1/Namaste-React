import Restracard, {withPromotedLabel} from "./Restracard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useGetRestaurantsData from "../../utils/useGetRestaurantsData";
import useGetOnlineStatus from "../../utils/useGetOnlineStatus";
import UserContext from "../../utils/UserContext";
import { LOCAL_HOST_BACKEND_URL } from "../../utils/constants";
import { dataFromMock } from "./mocks/RestraListMock";
import MOCK_DATA from "../../utils/Mocks/MOCK_DATA_1.json"

const buttonMessages = ["Display Top Rated Resturants", "Display all Resturants"];
let dataArr = [];

const Body = () => {
    const [buttonMessage, setButtonMessage] = useState(buttonMessages[0]);
    const [topRatedPresent, setTopRatedPresent] = useState(false);
    const [text, setText] = useState("");
    //dataArr = useGetRestaurantsData();
    dataArr = dataFromMock;
    const [data, setData] = useState(dataArr);
    //console.log(data);
    const isOnline = useGetOnlineStatus();

    const ResturantCardPromoted = withPromotedLabel(Restracard);
    const {loggedInUser, setUserName} = useContext(UserContext);

    const fetchDataFromApi = async () => {
        try {
            // const rawData = await fetch(LOCAL_HOST_BACKEND_URL);
            // const json = await rawData.json();
            const json = MOCK_DATA;
            
            dataArr = [];
            json?.sections?.SECTION_SEARCH_RESULT.forEach((ele) => {
                dataArr.push(ele);
            });
            setData(dataArr);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        //fetchDataFromApi();
        // setTimeout(() => {
        //     setData(dataArr);
        // }, 1000);
    },[]);

    if (!isOnline) {
        return (
            <div>
                <h1>Looks like you're Offline!! Please check your internet connection</h1>
            </div>
        )
    }
    
    const handleTopRatedButton = () => {
        if (!topRatedPresent) {
            const filteredData = data.filter((element) => {
                let rating = parseFloat(element.info.rating.aggregate_rating);
                return rating >= 4.0;
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

    return (
        <div id={text} className="py-36">
            <div className="flex">
                <div className="p-4 m-4">
                    <input data-testid="searchInput" type="text" className="p-2 border border-solid border-black"
                        value = {text}
                        onChange={(e) => {
                            setText(e.target.value);
                        }}
                    />
                    <button className="px-2 py-1 m-2 bg-black text-white hover:bg-gray-500 hover:text-black rounded-lg" onClick={() => {
                        setButtonMessage(buttonMessages[0]);
                        setTopRatedPresent(false);
                        let filteredDataByName = dataArr.filter((resturant) => {
                            let found = false;
                            resturant.info.cuisine.forEach((curr) => {
                                if (curr.name.toLowerCase().includes(text.toLowerCase())) {
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
                    <button className="px-4 py-2 bg-black text-white hover:bg-gray-500 hover:text-black rounded-lg" onClick={handleTopRatedButton}>{buttonMessage}</button>
                </div>
                <div className="p-4 m-4">
                    <input type="text" data-testid="username-box" className="p-2 border border-black w-50 h-8" 
                        value={loggedInUser} 
                        onChange={(data) => {
                            setUserName(data.target.value)}}>
                    </input>
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