import React from "react";
import ReactDOM  from "react-dom/client";

// React element
// const heading = (
//     <h1 className="heading" >
//         Namaste React
//     </h1>
// );
const TypeHeading = () => {
    return <h1>Heading Typed</h1>
};

const Title = () => {
    return <div className="title-container">
        <h1 className="title-header">This is title tag</h1>
    </div>
};

/**
 * 
 * 
 * 
 * 
 */

const HeadingComponent = () => {
    return <div className="container">
        <Title />
        {100 + 300}
        {TypeHeading()}
        <TypeHeading/>
        <TypeHeading></TypeHeading>
        <h1 className="heading">This is React JSX</h1>
    </div>
};

// const HeadingComponent2 = () => (
//     <h1 className="heading">This is new way of returning</h1>
// );

const rootTag = ReactDOM.createRoot(document.getElementById("root"));
rootTag.render(<HeadingComponent/>);