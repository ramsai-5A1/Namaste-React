import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Error from "./components/Error";

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

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contactus",
        element: <Contactus/>
    }
]);


const rootTag = ReactDOM.createRoot(document.getElementById("root"));
rootTag.render(<RouterProvider router = {appRouter}/>);