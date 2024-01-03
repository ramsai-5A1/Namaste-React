import UserClass from "./UserClass";
import React, { useEffect } from "react";

const About = () => {

    useEffect(() => {
        //console.log("UseEffect");

        return () => {
           // console.log("Return useEffect");
        }
    }, []);

    //console.log("Render");
    return <div>
            <h1> About us page</h1>
            <UserClass 
                name={"First"}
                location={"Hyderabad"}
                contact={"venkatesh199@gmail.com"}
                />
        </div>
};

export default About;