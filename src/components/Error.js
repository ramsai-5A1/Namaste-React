import { useRouteError } from "react-router";

const Error = () => {
    const ele = useRouteError();
    console.log(ele);
    return (
        <div>
            <h1>OOPS</h1>
            <h3>{ele.status}: {ele.statusText}</h3>
        </div>
    );
}

export default Error;