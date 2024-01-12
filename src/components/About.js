import UserClass from "./UserClass";
import React, { useEffect } from "react";

const About = () => {

    useEffect(() => {

        return () => {
        }
    }, []);

    return <div className="py-48">
            <h1> About us page</h1>
            <UserClass 
                name={"First"}
                location={"Hyderabad"}
                contact={"venkatesh199@gmail.com"}
                />
        </div>
};

export default About;