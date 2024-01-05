import React, {lazy, Suspense} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet, BrowserRouter as Router, Route } from "react-router-dom";
//import About from "./components/About";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

// const App = () => {
//     return (
//         <Router>
//             <Route exact path="/restaurants" component={Contactus} />
//             <Route path="/restaurants/:param" component={Contactus} />
//         </Router>
//       );
// }

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
                element: (
                <Suspense fallback={<h1>Loading about page...!!</h1>}>
                    <About/>
                </Suspense>
                )
            },
            {
                path: "/contactus",
                element: <Contactus/>
            },
            {
                path: "/resturants",
                element: <ResturantMenu/>
            },
            {
                path: "/grocery",
                element: (
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Grocery/>
                </Suspense>
                )
            }
        ]
    }
]);


const rootTag = ReactDOM.createRoot(document.getElementById("root"));
rootTag.render(<RouterProvider router = {appRouter}/>);