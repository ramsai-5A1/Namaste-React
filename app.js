import React from "react";
import ReactDOM  from "react-dom/client";

/**
 * 
 * Header
 *  - Logo
 *  - nav items
 * 
 * Body
 *  - search bar
 *  - Resturant container
 *      - all cards of each receipe
 * 
 * Footer
 *  - copyright
 *  - links
 *  - address
 *  - contact
 * 
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5BSoqDaRti61qrt65opWckM6Q0eubQj6Hwg&usqp=CAU"
                />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};


const ResturantCard = (props) => {
    const {name, cuisine, imageUrl, avgRating, deliveryTime} = props.dataObj;
    return (
        <div className="rest-card">
            <img 
                className="rest-logo"
                alt="rest-logo"
                src={imageUrl}
            />
            <h3>{name}</h3>
            <h4>{cuisine.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

const dataArr = [
    {
        name: "KFC",
        cuisine: ["Biryani", "North indian", "Food"],
        imageUrl: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/8ff96fd8f110aeddb86de806c6582e23",
        avgRating: "4.8",
        deliveryTime: "38"
    },
    {
        name: "Dosas",
        cuisine: ["Biryani", "North indian", "Food"],
        imageUrl: "https://b.zmtcdn.com/data/pictures/8/20396518/900264c0521d34dd52584b78d6b06327_o2_featured_v2.jpg?output-format=webp",
        avgRating: "3.2",
        deliveryTime: "66"
    },
    {
        name: "Chicken Dum biryani",
        cuisine: ["Biryani", "North indian", "Food"],
        imageUrl: "https://b.zmtcdn.com/data/pictures/5/18233675/37750871991fc4a1dfb8c9013cab2498_o2_featured_v2.jpg?output-format=webp",
        avgRating: "3.5",
        deliveryTime: "23"
    },
    {
        name: "Mutton-Biryani",
        cuisine: ["Biryani", "North indian", "Food"],
        imageUrl: "https://b.zmtcdn.com/data/pictures/4/20159694/914c02e7d03869f47ed3fef593e572d1_o2_featured_v2.jpg?output-format=webp",
        avgRating: "4.1",
        deliveryTime: "35"
    },
    {
        name: "Burger",
        cuisine: ["Biryani", "North indian", "Food"],
        imageUrl: "https://b.zmtcdn.com/data/pictures/8/18619658/115763e05d017f33e325d7f7839701cd_o2_featured_v2.jpg?output-format=webp",
        avgRating: "4.3",
        deliveryTime: "48"
    }
];

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">
                Search
            </div>

            <div className="rest-container">
                <ResturantCard 
                    dataObj={dataArr[0]}
                />
                <ResturantCard 
                    dataObj={dataArr[1]}
                />
                <ResturantCard 
                    dataObj={dataArr[2]}
                />
                <ResturantCard 
                    dataObj={dataArr[3]}
                />
                <ResturantCard 
                    dataObj={dataArr[4]}
                />
                
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <div>

        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};


const rootTag = ReactDOM.createRoot(document.getElementById("root"));
rootTag.render(<AppLayout/>);