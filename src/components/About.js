import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

    constructor(props) {
        super(props);
        //console.log("Parent constructor");
    }

    componentDidMount() {
        //console.log("Parent didMount");
    }

    render() {
        //console.log("Parent render");
        return <div>
            <h1> About us page</h1>
            <UserClass 
                name={"First"}
                location={"Hyderabad"}
                contact={"venkatesh199@gmail.com"}
                />
        </div>
    }
    
};

export default About;