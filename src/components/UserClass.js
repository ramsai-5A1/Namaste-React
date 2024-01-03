import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                name: "Dummy name",
                bio: "Dummy bio",
                location: "Dummy location",
                avatar_url: "https://picsum.photos/id/237/200/300"
            }
        }
    }

    componentDidMount = async () => {
        const data = await fetch("https://api.github.com/users/ramsai-5A1");
        const json = await data.json();
        console.log(json);
        setInterval(() => {
            this.setState({
                data: json
            });
        }, 3000);
    }

    render() {
        const {name, bio, location, avatar_url} = this.state.data;
        return (
            <div className="user-card">
                <img src={avatar_url}></img>
                <h2>Name: {name}</h2>
                <h3>Bio: {bio}</h3>
                <h3>Location: {location}</h3>
            </div>
        )
    }
}

export default UserClass;