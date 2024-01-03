import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return <div>
        <h1> About us page</h1>
        <User 
            name={"Ram sai"}
            location={"vizag"}
            contact={"ramsai12@gmail.com"}
            />

        <UserClass 
            name={"Venkatesh"}
            location={"Hyderabad"}
            contact={"venkatesh199@gmail.com"}
            />
    </div>
};

export default About;