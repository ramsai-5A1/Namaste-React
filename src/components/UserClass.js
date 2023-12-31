import React from "react";
import UserContext from "../../utils/UserContext";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.id = -1;
        this.state = {
            data: {
                name: "Dummy name",
                bio: "Dummy bio",
                location: "Dummy location",
                avatar_url: "https://picsum.photos/id/237/200/300",
            },
        }
    }

    componentDidMount = async () => {
        const data = await fetch("https://api.github.com/users/ramsai-5A1");
        const json = await data.json();        
        this.setState({
            data: json
        });
        // <UserContext.Consumer>
        //     {(data) => {
        //         console.log(data);
        //         this.setState({
        //             userName: data.loggedInUser
        //         })
        //     }}
        // </UserContext.Consumer>
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    render() {
        const {name, bio, location, avatar_url} = this.state.data;
        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h3>Bio: {bio}</h3>
                <h3>Location: {location}</h3>
                <h3>
                    UserName: 
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </h3>
            </div>
        )
    }
}

export default UserClass;