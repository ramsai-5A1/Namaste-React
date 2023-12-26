import React from "react";
import ReactDOM  from "react-dom/client";

const parentTag = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div",
            {id: "child1"},
            [
                React.createElement("h1", {}, "This is child1's first sibling"),
                React.createElement("h2", {}, "This is child1's 2nd sibling")
            ]
        ),
        React.createElement(
            "div",
            {id: "child2"},
            [
                React.createElement("h1", {}, "This is child2's first sibling"),
                React.createElement("h2", {}, "This is child2's 2nd sibling")
            ]
        )
    ]
);
const rootTag = ReactDOM.createRoot(document.getElementById("root"));
rootTag.render(parentTag);

const venkyTag = ReactDOM.createRoot(document.getElementById("venkat"));
const firstTag = React.createElement("h1", {}, "Replace venkatesh");
venkyTag.render(firstTag);