import React from "react";
import ReactDOM from "react-dom/client"

//React.createElement() => React Element - JS Object => HTMLElements(render)

// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Namaste React"
// );

// JSX- HTML like or XML-like JSX

// JSX(transpiled before it reaches JS engine) - PARCEL -Babel

// JSX => React.createelement

const jsxHeading = <h1 id="heading">Namaste react using JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading)


