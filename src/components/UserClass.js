import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        //console.log("Child1 constructor()");
        super(props);
        this.id = -1;
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
        //console.log("Child1 didMount");
        const data = await fetch("https://api.github.com/users/ramsai-5A1");
        const json = await data.json();
        //console.log(json);
        this.setState({
            data: json
        });
        // this.id = setInterval(() => {
        //     console.log("Printing a line");
        // }, 1000);
    }

    componentDidUpdate() {
        //console.log("child1 Did update");
    }

    componentWillUnmount() {
       // console.log("Child1 willUnMount()");
        // console.log(this.id);
        // clearInterval(this.id);
    }

    render() {
        //console.log("Child1 render()");
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