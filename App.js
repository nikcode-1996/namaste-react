import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
    <h1 id="title">Namaste</h1>
)

const Title = () => {
    return <h1>Namaste React</h1>
}

const HeadingComponent = () => {
    return <div>
        {heading}
        <Title ></Title >
            <h1>Namaste React Functional Component</h1>
    </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
