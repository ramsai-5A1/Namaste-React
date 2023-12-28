import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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