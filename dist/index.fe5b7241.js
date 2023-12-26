const rootTag = ReactDOM.createRoot(document.getElementById("root"));
const parentTag = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "This is child1's first sibling"),
        React.createElement("h2", {}, "This is child1's 2nd sibling")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "This is child2's first sibling"),
        React.createElement("h2", {}, "This is child2's 2nd sibling")
    ])
]);
rootTag.render(parentTag);
const venkyTag = ReactDOM.createRoot(document.getElementById("venkat"));
const firstTag = React.createElement("h1", {}, "Replace venkat");
venkyTag.render(firstTag);

//# sourceMappingURL=index.fe5b7241.js.map
