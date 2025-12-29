const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading1" }, "Namaste react"),
        React.createElement("h2", { id: "heading2" }, "Namaste react")]),
    React.createElement("div", { id: "child2" },
        [React.createElement("h1", { id: "heading1" }, "Namaste react"),
        React.createElement("h2", { id: "heading2" }, "Namaste react")])]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);