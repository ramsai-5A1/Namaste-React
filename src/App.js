import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contactus",
                element: <Contactus/>
            },
            {
                path: "/resturants/:id",
                element: <ResturantMenu/>
            }
        ]
    }
]);


const rootTag = ReactDOM.createRoot(document.getElementById("root"));
rootTag.render(<RouterProvider router = {appRouter}/>);